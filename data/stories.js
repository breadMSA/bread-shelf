window.BREAD_LIBRARY = {
  library: { title: "布雷德·謝爾夫", subtitle: "Stories for the futures we have not reached yet.", author: "Bread" },
  books: [{
    id: "before-the-signal", title: "訊號之前", englishTitle: "Before the Signal", status: "連載準備中", accent: "#a35c48",
    cover: "assets/placeholder-cover.svg", description: "在思想開始互通以前，人類先得決定：哪些部分仍然只屬於自己。", tags: ["近未來", "科幻", "認知主權"], updatedAt: "2026.07.30",
    chapters: [
      { id: "prologue", title: "楔子：未命名的錯誤", subtitle: "2047 年，東區神經資料中心", blocks: [
        { id:"p1", type:"text", text:"警報響起時，林策還以為那只是凌晨例行的同步誤差。" },
        { id:"p2", type:"text", text:"直到控制台把一段不屬於任何使用者的記憶，標記成了：<em>正在等待被理解。</em>" },
        { id:"q1", type:"quote", text:"開始同步。", cite:"系統提示" },
        { id:"p3", type:"text", text:"他沒有碰那個按鈕。按鈕卻自己亮了。" },
        { id:"d1", type:"divider" },
        { id:"i1", type:"image", src:"assets/placeholder-scene.svg", alt:"資料中心外的夜色", caption:"東區神經資料中心，凌晨三點十七分。" },
        { id:"c1", set:"response", type:"choice", prompt:"如果你坐在控制台前，你會怎麼做？", options:[
          { label:"按下同步", set:"response", value:"sync", result:"你讓系統完成同步。螢幕在一瞬間暗下，耳邊卻出現了一道陌生的呼吸。" },
          { label:"拔掉主機", set:"response", value:"cut", result:"你拔掉主機。警報停了；但那串空白寄件人的通知，開始在所有螢幕上跳動。" },
          { label:"先記下錯誤碼", set:"response", value:"record", result:"你記下錯誤碼。它不是錯誤碼，而是一個日期：你還沒活到的明天。" }
        ]},
        { id:"after-sync", type:"conditional", when:{key:"response", value:"sync"}, text:"<strong>你的選擇已被記錄：同步。</strong> 有些門一旦打開，就不會再關上。" },
        { id:"after-cut", type:"conditional", when:{key:"response", value:"cut"}, text:"<strong>你的選擇已被記錄：中斷。</strong> 有些訊號不需要網路，也能抵達。" },
        { id:"after-record", type:"conditional", when:{key:"response", value:"record"}, text:"<strong>你的選擇已被記錄：觀察。</strong> 你得到了一個答案，也得到了一個問題。" }
      ]},
      { id:"chapter-1", title:"第一章：失物招領", subtitle:"三天後", blocks:[
        { id:"p1", type:"text", text:"A 把那則通知刪了三次。第四次，它又自己回到了收件匣。" },
        { id:"p2", type:"text", text:"寄件人欄位是一串空白；主旨只有四個字：<strong>你還好嗎？</strong>" },
        { id:"p3", type:"text", text:"城市的天際線在無人計程車的尾燈裡慢慢往後退。他沒有回答。" }
      ]}
    ]
  }]
};
