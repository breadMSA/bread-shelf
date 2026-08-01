(() => {
  const CACHE_NAME = "bread-offline-books-v1";
  const DATA_CACHE = "bread-shelf-data-v1";
  const META_KEY = "bread-offline-books-v1";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const read = () => { try { return JSON.parse(localStorage.getItem(META_KEY)) || { books: {} }; } catch { return { books: {} }; } };
  const write = meta => localStorage.setItem(META_KEY, JSON.stringify(meta));
  const library = () => window.BREAD_LIBRARY || { books: [] };
  const findBook = id => library().books.find(book => book.id === id);
  const storyDataUrl = () => new URL("data/stories.js", location.href).href;
  const imageUrls = chapter => (chapter.blocks || []).filter(block => block.type === "image" && block.src && !/^(data|blob):/.test(block.src)).map(block => new URL(block.src, location.href).href);
  const coverUrl = book => book.cover && !/^(data|blob):/.test(book.cover) ? new URL(book.cover, location.href).href : null;
  const notify = text => { const toast = $(".toast"); if (toast) { toast.textContent = text; toast.hidden = false; setTimeout(() => toast.hidden = true, 3000); } else alert(text); };
  const allUrls = meta => Object.values(meta.books).flatMap(book => Object.values(book.chapters || {}).flat());

  async function download(bookId, chapterIds) {
    if (!("caches" in window)) return notify("這個瀏覽器不支援離線下載。");
    const book = findBook(bookId);
    if (!book) return notify("找不到這本書，請重新整理後再試。");
    const selected = book.chapters.filter(chapter => chapterIds.includes(chapter.id));
    // Chapter text lives in the shared story-data file; caching it here makes a
    // freshly installed app work offline immediately after a download.
    const urls = [...new Set([storyDataUrl(), coverUrl(book), ...selected.flatMap(imageUrls)].filter(Boolean))];
    const cache = await caches.open(CACHE_NAME);
    try {
      await Promise.all(urls.map(async url => { const response = await fetch(url, { cache: "no-store" }); if (!response.ok) throw new Error(url); await cache.put(url, response); }));
      const meta = read(), entry = meta.books[bookId] ||= { title: book.title, chapters: {} };
      selected.forEach(chapter => { entry.chapters[chapter.id] = [...new Set([storyDataUrl(), coverUrl(book), ...imageUrls(chapter)].filter(Boolean))]; });
      write(meta);
      notify(chapterIds.length === 1 ? "本章已下載，可離線閱讀。" : "全書已下載，可離線閱讀。");
    } catch (error) { notify("下載未完成，請確認網路後再試。"); }
  }

  async function removeChapter(bookId, chapterId) {
    const meta = read(), entry = meta.books[bookId];
    if (!entry?.chapters?.[chapterId]) return;
    const removed = entry.chapters[chapterId];
    delete entry.chapters[chapterId];
    if (!Object.keys(entry.chapters).length) delete meta.books[bookId];
    const retained = new Set(allUrls(meta)), cache = await caches.open(CACHE_NAME);
    await Promise.all(removed.filter(url => !retained.has(url)).map(url => cache.delete(url)));
    write(meta);
    if (!Object.keys(meta.books).length) await caches.delete(DATA_CACHE);
  }

  async function showManager() {
    const drawer = $("[data-drawer]");
    if (!drawer) return;
    const meta = read(), books = Object.entries(meta.books);
    let usage = "";
    if (navigator.storage?.estimate) { const { usage: bytes = 0 } = await navigator.storage.estimate(); usage = `<p><small>此網站目前使用約 ${(bytes / 1024 / 1024).toFixed(bytes > 10 * 1024 * 1024 ? 1 : 2)} MB 儲存空間。</small></p>`; }
    drawer.hidden = false;
    drawer.innerHTML = `<button class="drawer-close" data-offline-close>×</button><div class="drawer-head"><div class="eyebrow">OFFLINE READING</div><h2>離線內容</h2></div>${usage}${books.length ? `<div class="bookmark-list">${books.map(([bookId, entry]) => `<section class="offline-book"><b>${entry.title}</b>${Object.keys(entry.chapters).map(chapterId => { const chapter = findBook(bookId)?.chapters.find(item => item.id === chapterId); return `<div class="bookmark-item"><span>${chapter?.title || "已下載章節"}</span><button class="bookmark-delete" data-offline-remove="${bookId}" data-chapter-id="${chapterId}">刪除</button></div>`; }).join("")}</section>`).join("")}</div><button class="menu-action" data-offline-clear>清除所有離線內容</button>` : "<p>尚未下載內容。下載章節或整本書後，即使沒有網路也能閱讀。</p>"}`;
    $("[data-offline-close]", drawer).onclick = () => drawer.hidden = true;
    $$('[data-offline-remove]', drawer).forEach(button => button.onclick = async () => { await removeChapter(button.dataset.offlineRemove, button.dataset.chapterId); await showManager(); notify("已刪除離線章節。"); });
    $("[data-offline-clear]", drawer)?.addEventListener("click", async () => { await caches.delete(CACHE_NAME); await caches.delete(DATA_CACHE); write({ books: {} }); await showManager(); notify("已清除所有離線內容。"); });
  }

  function addOfflineToSettings() {
    const parts = location.hash.slice(2).split("/");
    if (parts[0] !== "read") return;
    const drawer = $("[data-drawer]");
    if (!drawer || $("[data-offline-settings]", drawer)) return;
    const book = findBook(parts[1]);
    if (!book) return;
    const section = document.createElement("section");
    section.className = "setting";
    section.dataset.offlineSettings = "";
    section.innerHTML = `<span>離線閱讀</span><small>下載後可在沒有網路時繼續閱讀；可隨時刪除。</small><div class="offline-actions"><button type="button" data-offline-chapter data-book-id="${book.id}" data-chapter-id="${parts[2]}">下載本章</button><button type="button" data-offline-book data-book-id="${book.id}">下載全書</button><button type="button" data-offline-manage>管理離線內容</button></div>`;
    drawer.append(section);
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-offline-chapter],[data-offline-book],[data-offline-manage]");
    if (!button) return;
    if (button.hasAttribute("data-offline-manage")) { showManager(); return; }
    button.disabled = true;
    const book = findBook(button.dataset.bookId);
    const ids = button.hasAttribute("data-offline-book") ? (book?.chapters || []).map(chapter => chapter.id) : [button.dataset.chapterId];
    download(button.dataset.bookId, ids).finally(() => button.disabled = false);
  });

  document.addEventListener("click", event => {
    if (event.target.closest("[data-settings]")) setTimeout(addOfflineToSettings, 0);
  });
})();
