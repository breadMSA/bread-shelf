const CACHE_NAME = "bread-shelf-shell-v18";
const DATA_CACHE = "bread-shelf-data-v1";
const SHELL = ["./", "./index.html", "./assets/styles.css?v=20260814-4", "./assets/reader-polish.css?v=20260814-9", "./assets/offline-polish.css?v=2", "./assets/app.js?v=20260814-8", "./assets/offline.js?v=2", "./assets/ux-fixes.js?v=20260730-3", "./assets/author-config.js?v=20260730-2", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("bread-shelf-shell-") && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const request=event.request, url=new URL(request.url);
  if(request.mode === "navigate"){event.respondWith(fetch(request,{cache:"no-store"}).catch(() => caches.match("./index.html")));return}
  if(url.pathname.endsWith("/data/stories.js")){
    event.respondWith(fetch(request,{cache:"no-store"}).then(response => {const copy=response.clone();caches.open(DATA_CACHE).then(cache => cache.put(request,copy));return response}).catch(() => caches.match(request)));
    return;
  }
  event.respondWith(fetch(request,{cache:"no-store"}).catch(() => caches.match(request)));
});
