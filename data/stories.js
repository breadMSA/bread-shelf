window.BREAD_LIBRARY = {
  "library": {
    "title": "布雷德·謝爾夫",
    "subtitle": "Stories for the futures we have not reached yet.",
    "author": "Bread"
  },
  "books": [
    {
      "id": "before-the-signal",
      "title": "功能測試",
      "englishTitle": "Feature Testing",
      "status": "已完成",
      "accent": "#a35c48",
      "cover": "assets/media/covers/before-the-signal-cover-b8f2c8962f190e7d.jpg",
      "description": "各種功能測試demo。你可以看到我在書中會加入什麼元素。demo的劇情都是ai寫的。",
      "tags": [
        "測試",
        "demo"
      ],
      "updatedAt": "2026.07.30",
      "chapters": [
        {
          "id": "prologue",
          "title": "楔子：未命名的錯誤",
          "subtitle": "2047 年，東區神經資料中心",
          "blocks": [
            {
              "id": "q1",
              "type": "quote",
              "text": "開始同步。",
              "cite": "系統提示"
            },
            {
              "id": "p1",
              "type": "text",
              "text": "警報響起時，林良還以為那只是例行的同步誤差。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "直到控制台把一段不屬於任何使用者的記憶，標記成了：<em>正在等待被理解。</em>"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "他沒有碰那個按鈕。按鈕卻自己亮了。"
            },
            {
              "id": "d1",
              "type": "divider"
            },
            {
              "id": "i1",
              "type": "image",
              "src": "assets/media/illustrations/before-the-signal-prologue-i1-516be8193c7db377.png",
              "alt": "資料中心外的傍晚景色",
              "caption": "東區神經資料中心，下午六點十七分。"
            },
            {
              "id": "c1",
              "set": "response",
              "type": "choice",
              "prompt": "如果你坐在控制台前，你會怎麼做？",
              "options": [
                {
                  "label": "按下同步",
                  "set": "response",
                  "value": "sync",
                  "result": "你讓系統完成同步。螢幕在一瞬間暗下，耳邊卻出現了一道陌生的呼吸。",
                  "gotoChapter": "chapter-1"
                },
                {
                  "label": "拔掉主機",
                  "set": "response",
                  "value": "cut",
                  "result": "你拔掉主機。警報停了；但那串空白寄件人的通知，開始在所有螢幕上跳動。",
                  "gotoChapter": "chapter-ms7ly9oyeidi6"
                },
                {
                  "label": "先記下錯誤碼",
                  "set": "response",
                  "value": "record",
                  "result": "你記下錯誤碼。它不是錯誤碼，而是一個日期：你還沒活到的明天。",
                  "gotoChapter": "chapter-ms7lw46eq4ncn"
                }
              ]
            },
            {
              "id": "after-sync",
              "type": "conditional",
              "when": {
                "key": "response",
                "value": "sync"
              },
              "text": "<strong>你的選擇已被記錄：同步。</strong> 有些門一旦打開，就不會再關上。"
            },
            {
              "id": "after-cut",
              "type": "conditional",
              "when": {
                "key": "response",
                "value": "cut"
              },
              "text": "<strong>你的選擇已被記錄：中斷。</strong> 有些訊號不需要網路，也能抵達。"
            },
            {
              "id": "after-record",
              "type": "conditional",
              "when": {
                "key": "response",
                "value": "record"
              },
              "text": "<strong>你的選擇已被記錄：觀察。</strong> 你得到了一個答案，也得到了一個問題。"
            }
          ]
        },
        {
          "id": "chapter-1",
          "title": "第一章：失物招領",
          "subtitle": "三天後",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "林良把那則通知刪了三次。第四次，它又自己回到了收件匣。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "寄件人欄位是一串空白；主旨只有四個字：<strong>你還好嗎？</strong>"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "城市的天際線在無人計程車的尾燈裡慢慢往後退。他沒有回答。"
            }
          ],
          "unlock": {
            "key": "response",
            "value": "sync"
          }
        },
        {
          "id": "chapter-ms7ly9oyeidi6",
          "title": "第二章：屍物招領",
          "subtitle": "兩天後",
          "blocks": [
            {
              "id": "ms7ly9oyjpw6f",
              "type": "text",
              "text": "看來你選了拔掉主機。"
            },
            {
              "id": "msepljlnx0fbz",
              "type": "page-break"
            },
            {
              "id": "msepllr206r8a",
              "type": "text",
              "text": "<i>不過這只是demo，我不打算花力氣為demo寫劇情。</i>"
            }
          ],
          "unlock": {
            "key": "response",
            "value": "cut"
          }
        },
        {
          "id": "chapter-ms7lw46eq4ncn",
          "title": "第三章：濕物招領",
          "subtitle": "一天後",
          "blocks": [
            {
              "id": "ms7lw46esmcfm",
              "type": "text",
              "text": "看來你選了記下錯誤碼。<div><i>不過這只是demo，我不打算花力氣為demo寫劇情。</i></div>"
            }
          ],
          "unlock": {
            "key": "response",
            "value": "record"
          }
        }
      ],
      "isPrivate": false
    },
    {
      "id": "story-mssd87596ivdo",
      "title": "還魂稅 — 夜隅輪迴誌",
      "englishTitle": "The Soul Tax — Tales of the Night Corner Samsara",
      "status": "完稿",
      "isPrivate": false,
      "accent": "#a35c48",
      "cover": "assets/media/covers/story-mssd87596ivdo-cover-3e5d66220b8ccd52.webp",
      "description": "這座城市從不缺席悼念。 它只是把悼念也做成了分期付款。",
      "tags": [
        "ai",
        "賽博龐克",
        "反烏托邦",
        "社會科幻"
      ],
      "updatedAt": "2026.08.14",
      "chapters": [
        {
          "id": "chapter-mssimzoyvmgn6",
          "title": "封面",
          "subtitle": "",
          "blocks": [
            {
              "id": "mssj94akap0bq",
              "type": "image",
              "src": "assets/media/illustrations/story-mssd87596ivdo-chapter-mssimzoyvmgn6-mssj94akap0bq-3e5d66220b8ccd52.webp",
              "alt": "",
              "caption": ""
            }
          ],
          "headingStyle": "subtitle"
        },
        {
          "id": "chapter-mssd8759iouzw",
          "title": "楔子",
          "subtitle": "代寫攤",
          "blocks": [
            {
              "id": "mssd8759avlz6",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"14:1-14:107;74-180\">霓生的攤子沒有招牌，只有一塊用麥克筆寫在瓦楞紙上的字：「代寫，一封五十阿米爾，加急一百」。她把攤子擺在根三區菜市場收攤後的空地上，每天傍晚六點準時支起一張折疊桌、兩張板凳、一台老舊到連風扇聲都像在咳嗽的手寫平板。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"16:1-16:23;182-204\">她十七歲，寫字很好看，這門手藝是跟哥哥學的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"18:1-18:108;206-313\">「妳確定要這樣寫？」她問對面那個男人。男人叫阿肅，在中環一間義體維修廠做焊接工，因為欠了廠裡的耗材墊款，上個月收到「相容評估通知」，下週要去中環第九醫療站報到。他今天來，是想請霓生幫他寫一封信，留給還在讀書的女兒。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"20:1-20:84;315-398\">阿肅的手抖得握不住筆——常年焊接留下的職業病，加上這幾天大概沒怎麼睡——他把想說的話含混地講給霓生聽，霓生一句一句幫他順成能讓一個十歲小孩看得懂、又不會太傷心的句子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"22:1-22:44;400-443\">「不要寫『爸爸要去很遠的地方』。」阿肅忽然說，「小孩子不是笨蛋，她會知道那是騙她的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"24:1-24:10;445-454\">霓生的筆停在半空。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"26:1-26:94;456-549\">兩年前，她自己收到過一封類似的信，是哥哥留給她的——也是找了攤子上另一個代寫先生寫的，那時候霓生還不知道有一天自己會接手這門生意。信裡哥哥寫著「我要去很遠的地方工作，賺夠錢就回來接妳」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"28:1-28:8;551-558\">哥哥沒有回來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"30:1-30:110;560-669\">沒有骨灰，沒有補發的死亡證明，甚至沒有正式的「病逝」說法——因為哥哥去之前簽的，是恆憶集團美其名為「志願器官捐贈，即刻清償全額欠款」的合約，官方紀錄上，他至今仍然「存活」，只是「因應醫療隱私法規，後續狀態不對外揭露」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"32:1-32:83;671-753\">霓生後來想通了一件事：那句「不對外揭露」，比任何一張死亡證明都更讓她夜裡睡不著。因為它意味著，哥哥或許正活在這座城市的某一層，某一具身體裡，卻連她自己都認不出他了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"34:1-34:58;755-812\">「妳說得對。」霓生低下頭，在紙上劃掉「很遠的地方」，改成：「爸爸沒辦法親口告訴妳為什麼要走，但爸爸希望妳記得——」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"36:1-36:19;814-832\">她抬頭看阿肅，等他把後半句話接下去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"38:1-38:79;834-912\">阿肅盯著自己那雙抖得握不住筆的手，看了很久，才說：「希望妳記得，欠的債，我幫妳還完了。剩下的日子，好好過，別學我，別因為省小錢，捨不得換一副像樣的義肢手。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"40:1-40:54;914-967\">霓生一字不漏地寫了下去，筆尖劃過紙面的聲音，是那天傍晚菜市場空地上，除了遠處排水管滴水聲之外，唯一的聲響。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"42:1-42:48;969-1016\">她收了五十阿米爾，看著阿肅把信折好放進胸口口袋，起身，走進根層永遠潮濕、永遠帶著鏽味的暮色裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"44:1-44:67;1018-1084\">她沒有問他評估通過機率有多高——沒有人問這種問題，就像沒有人會問「明天會不會下雨」一樣，因為答案永遠是「會」，只是不知道落在誰頭上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"46:1-46:97;1086-1182\">霓生收攤前，把當天寫的三封信底稿，仔細謄抄進一本用碎布包起來的舊筆記本裡。那不是規定要做的事，甚至有點犯忌——代寫攤的行規是「寫完即焚」，怕留下痕跡給集團找麻煩——但霓生已經這樣偷偷抄了兩年。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"48:1-48:68;1184-1251\">她想，如果有一天，這座城市裡終於有誰，願意一封一封把這些話讀完，或許就會知道，「歸環」這兩個字底下，到底壓著多少個沒能親口說完的句子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"50:1-50:135;1253-1387\">這門手藝，其實是霓生的哥哥霓恆，在一次難得的休假日，教給她的。那時候霓恆剛開始在中環一間物流公司打工，閒暇時喜歡寫點小詩投稿給地方刊物賺點外快，他常笑著跟霓生說：「這座城市什麼都缺，就是不缺想哭卻寫不出來的人，我這點筆桿子功夫，說不定哪天能派上用場，養活咱們兄妹倆。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"52:1-52:52;1389-1440\">霓生那時候只當是玩笑話，直到哥哥離開後，她才發現，自己身上，早已被這句玩笑話，種下了往後這條路的種子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"54:1-54:126;1442-1567\">菜市場另一頭，幾個收攤的攤販正圍在一起，壓低聲音議論著什麼——霓生豎起耳朵，隱約聽見「稽核隊」、「加強巡邏」這幾個字眼，她心裡莫名地咯噔一下，卻說不清那種不安究竟從何而來。她那時候還不知道，這種說不清道不明的預感，會在接下來幾個月，一次又一次地應驗。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"56:1-56:96;1569-1664\">她收好筆記本那天，還不知道兩個街區外，一個叫沈鴉的女人剛剛結束一場收單，正拖著濕透的風衣往鏽溝的方向走——更不知道，再過三個月，替她哥哥的名字寫進她那本筆記本裡的，會是她自己最好朋友的姊姊。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssd87590dqyj",
          "title": "第一章",
          "subtitle": "收單的規矩",
          "blocks": [
            {
              "id": "mssd8759xdfqy",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"62:1-62:334;1685-2018\">夜隅這座城市，是往上長的——頂環的浮島式豪宅，靠著永不熄滅的懸浮引擎，終年懸在雲層之上，陽光在那裡永遠是乾淨、金黃、帶著微微暖意的；往下，是中環層層疊疊的廣告投影與義體診所招牌，霓虹燈光把終年不散的濕氣，染成一種混濁的、介於紫與綠之間的顏色；再往下，才是根層——沈鴉住的地方——那裡的天空，永遠只剩下一格一格被高架軌道與維生管線切割成碎片的灰色，雨水順著頂環與中環用剩的舊管線，一層一層過濾、課稅、回收，落到根層的時候，往往已經帶著一股洗不掉的鏽味，像是這座城市把所有喝剩的、用剩的、活剩的東西，都留給了住在最底下的人。沈鴉常想，這座城市最誠實的地方，或許就是它從不掩飾這種由上往下的傾倒——豪宅的雨棚設計成向外傾斜，恰好把積水，準確無誤地，導向樓下行人的必經之路。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"64:1-64:54;2020-2073\">沈鴉做記憶獵人這行第六年，養成了一套自己的規矩，規矩不成文，卻比恆憶集團任何一條契約條款都更被她認真遵守。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"66:1-66:79;2075-2153\">規矩一：收單前，先確認對方是不是真的要死了，而不是只是「快要付不出下一期分期款」——這兩者在根層常常長得很像，但沈鴉分得很清楚，她不收「還沒死透的人」的單。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"68:1-68:72;2155-2226\">有一次，一個中年男人謊稱自己得了絕症，想騙她提前收購「臨終記憶」的高額補貼，沈鴉探線都還沒接上去，就從對方緊張到冒汗的太陽穴脈搏，識破了謊言。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"70:1-70:51;2228-2278\">「大哥，」她把探線收回去，語氣哭笑不得，「你這演技，去中環那種義體維修廠當推銷員，說不定還比較賺。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"72:1-72:120;2280-2399\">那男人被戳穿，臉一陣紅一陣白，訕訕地想抵賴，卻被沈鴉一句「我可以現在就把這段對話回報給稽核系統，看你想不想試試看詐領的下場」，堵得說不出話，灰溜溜地跑了。柯敖後來聽她講起這事，笑到直拍吧檯：「鴉，妳這是記憶獵人界的照妖鏡，專治各種裝死。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"74:1-74:67;2401-2467\">規矩二：探針刺入前，一定要先叫出對方的名字，而不是編號。哪怕系統上只顯示「資產編號 09-4471」，她也會先去查這個人原本的名字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"76:1-76:41;2469-2509\">規矩三：收單之後，如果對方還撐得住一口氣，她會留下來陪到最後，不管白釜催得多急。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"78:1-78:111;2511-2621\">今晚的單子是個叫周伯的老頭，中環一間麵館的廚子，欠債原因寫著「義體維生系統過保後續約失敗」——翻譯成人話，就是老頭的心臟半年前該換一顆新的仿生瓣膜，他捨不得掏那筆錢，硬撐著用舊瓣膜多撐了半年，半年後，舊瓣膜終於撐不住了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"80:1-80:78;2623-2700\">「妳是……收記憶的？」周伯的聲音已經很輕了，輕得像是怕吵醒什麼人。他躺在麵館後頭的儲藏室，身邊圍著他的兒子、媳婦，還有一個抱著他大腿哭得說不出話的小孫女。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"82:1-82:76;2702-2777\">「周伯伯，我是沈鴉。」她蹲下身，跟平時一樣，先報上自己的全名，「不是來收帳的，是想幫您留一份東西給家人。您這輩子，一定有些話，還沒來得及好好說完吧？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"84:1-84:21;2779-2799\">周伯渾濁的眼睛動了動，望向自己的小孫女。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"86:1-86:43;2801-2843\">「我教她包餃子的手法，」他斷斷續續地說，「還沒教完……她那個捏邊的手勢，還不對……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"88:1-88:118;2845-2962\">沈鴉的探線刺入他太陽穴接口的瞬間，儲藏室裡靜得能聽見排油煙機遠遠傳來的嗡鳴。三分鐘後，訊號歸零，沈鴉維持蹲姿又待了整整兩分鐘——不是規矩要求的，是她自己選擇留下的兩分鐘——才緩緩起身，對著周伯的兒子點了點頭，把一枚記憶晶球放進他掌心。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"90:1-90:64;2964-3027\">「裡面有他教您女兒包餃子的完整手法。」她說，「不是恆憶集團要收購的那份，這份不算在合約裡，我沒收費，是我自己額外幫你們留的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"92:1-92:18;3029-3046\">周伯的兒子愣住了，隨即哽咽著道謝。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"94:1-94:53;3048-3100\">沈鴉沒有回應太多，她轉身走進雨裡的時候，聽見身後傳來小孫女帶著哭腔問：「阿嬤，爺爺是不是就這樣不見了？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"96:1-96:16;3102-3117\">她的腳步頓了半秒，繼續往前走。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"98:1-98:48;3119-3166\">這半秒的停頓，是她這行做了六年，唯一一條連自己都說不清楚、卻始終沒能改掉的「規矩之外的規矩」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"100:1-100:132;3168-3299\">她不知道，這份額外多留給周家的、不算在合約裡的贈禮，會在三天後，被恆憶集團資產稽核隊的例行稽查系統，標記成一筆「未申報之私自記憶轉移」——這種私下贈與，在根層記憶獵人之間並不罕見，多半沒人會認真追查，只是這一次，經手審核這筆異常紀錄的人，恰好是隊裡出了名的較真。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssidcdrw3yd3",
          "title": "第二章",
          "subtitle": "鏽溝的晚餐",
          "blocks": [
            {
              "id": "mssidcdrhhie6",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"106:1-106:28;3320-3347\">沈鴉推開鏽溝那扇永遠關不緊的鐵門時，屋裡飄著一股焦味。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"108:1-108:25;3349-3373\">「妳在幹嘛。」她皺眉看著灶台上那口冒著黑煙的鍋。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"110:1-110:64;3375-3438\">「我在嘗試做飯。」沈砂頭也不抬，用一根長筷子戳著鍋裡某種已經看不出原本形狀的東西，「妳每天回來都又濕又累，我想說偶爾換我煮。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"112:1-112:10;3440-3449\">「妳煮的是什麼？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"114:1-114:44;3451-3494\">「本來是蛋炒飯。」沈砂如實招認，「現在是……蛋。跟炒。跟飯。三種各自獨立存在的東西。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"116:1-116:101;3496-3596\">沈鴉在餐桌邊坐下，難得地笑了一下——這個笑容維持不到兩秒鐘，就被她自己壓了回去，像是怕笑久了會忘記自己還有正經事要煩惱。但沈砂看見了，她這輩子太擅長觀察姊姊那些一閃即逝的表情，比觀察義肢電路板還熟練。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"118:1-118:58;3598-3655\">「吃外面買的吧。」沈砂最後把那鍋東西直接倒進回收槽，「我留了兩份根三區阿婆的滷肉飯，用維生貼片供電的保溫盒溫著。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"120:1-120:88;3657-3744\">她們坐在同一張缺了一角、用膠帶纏著補強的桌子邊吃飯，沈鴉一邊吃，一邊隨口說起今天周伯的小孫女那句「爺爺是不是就這樣不見了」，說完自己也愣了一下，不知道為什麼要跟妹妹講這種事。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"122:1-122:15;3746-3760\">「那你怎麼回答她？」沈砂問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"124:1-124:16;3762-3777\">「我沒回答，我已經走出去了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"126:1-126:88;3779-3866\">「如果換作是我在場，」沈砂咬了一口滷肉飯，含糊地說，「我會跟她說，爺爺沒有不見，爺爺變成了一份妳可以隨時打開來看的東西，只是不能再抱妳了，這樣比較不會嚇到小孩，又不是騙她。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"128:1-128:61;3868-3928\">沈鴉停下筷子，看著自己的妹妹。十七歲的沈砂，說出這種話的時候語氣輕描淡寫，好像在討論該用哪種醬料，而不是在討論死亡本身。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"130:1-130:16;3930-3945\">「妳什麼時候變得這麼會說話。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"132:1-132:106;3947-4052\">「跟妳學的啊。」沈砂聳肩，「妳每次收單回來都繃著一張臉，好像自己做了什麼虧心事，可是妳明明是這條巷子裡唯一一個，收單前會先叫人家名字的獵人。姊，妳不覺得妳其實很會安慰人嗎？妳只是不肯把這件事用在自己身上而已。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"134:1-134:34;4054-4087\">沈鴉沒有回答，低頭把最後一口滷肉飯扒進嘴裡，含糊地說：「飯冷了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"136:1-136:60;4089-4148\">「才沒有，」沈砂立刻反駁，「保溫盒的維生貼片是妳自己上個月幫我升級的，恆溫效果比恆憶集團賣的正版還好，你自己誇過的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"138:1-138:31;4150-4180\">「……那是因為妳做的蛋炒飯太燙嘴，我需要一個理由結束話題。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"140:1-140:74;4182-4255\">沈砂笑出聲，一種毫無防備的、十七歲少女該有的笑聲，在這間永遠漏水、永遠帶著鏽味的屋子裡響起來，短短幾秒鐘，讓沈鴉覺得，鏽溝其實也沒有那麼難以忍受。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"142:1-142:63;4257-4319\">「對了，」沈砂忽然想起什麼似的，「妳修義體零件那些工具，可以借我一組嗎？霓生說她攤子的手寫平板風扇快壞了，我想幫她修修看。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"144:1-144:11;4321-4331\">「妳確定妳修得好？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"146:1-146:51;4333-4383\">「我修義肢手掌都修得好，平板風扇有什麼難的。」沈砂理直氣壯，「而且我很快就能上手，姊，妳低估我了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"148:1-148:162;4385-4546\">沈鴉看著妹妹眼裡那股認真的、躍躍欲試的光，想起這股興趣的起點，其實是柯敖。三年前，沈砂因為維生貼片故障，被沈鴉緊急抱去靜電酒館求助——柯敖是鏽溝這一帶，少數能同時處理神經接口與機械電路的人。那次修理，柯敖一邊動手，一邊隨口跟當時才十四歲的沈砂解釋每一根線路的作用，沒想到，這孩子聽得兩眼發亮，纏著他問了整整一個下午的問題。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"150:1-150:135;4548-4682\">從那之後，沈砂三不五時就往靜電酒館跑，纏著柯敖教她認電路圖、拆解舊零件，柯敖起初只當是哄小孩玩，後來才漸漸發現，這孩子在機械與電路上的天分，遠遠超出他的預期——她能光憑聲音，判斷出一具義肢內部哪一處軸承出了問題；她拆解過的舊型號設備，種類之龐雜，連柯敖自己都自嘆不如。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"152:1-152:136;4684-4819\">「這孩子，」柯敖不只一次跟沈鴉感嘆，「以後說不定比我還適合幹這行。」他說這話時，總會下意識地，望向吧檯角落，那個他從沒跟任何人提起過的、屬於顏未的舊工具箱——他一直捨不得丟，卻也一直沒有勇氣，親手交給任何一個人。直到很久以後，他才終於，把那個工具箱，鄭重地，送給了沈砂。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"154:1-154:70;4821-4890\">沈鴉心裡某個角落，第一次生出一種說不清楚的預感——她後來會想起，這種對機械與線路近乎本能的敏銳，會在很久以後，成為救她們所有人一命的東西。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"156:1-156:46;4892-4937\">只是那天晚上，她們誰都沒有多想，這樣的一頓晚餐，會是往後很長一段時間裡，最後一次這麼輕鬆。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"158:1-158:51;4939-4989\">飯後，沈砂搶著洗碗，沈鴉坐在桌邊，看著妹妹的背影，忽然開口：「砂砂，下個月妳的評估，我請假陪妳去。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"160:1-160:57;4991-5047\">「不用啦，」沈砂頭也不回，水聲嘩啦嘩啦地響著，「妳請假就沒收入，我自己去就好，反正也只是例行檢查，你緊張什麼。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"162:1-162:45;5049-5093\">「不是緊張。」沈鴉望著窗外那條總也下不完的雨，聲音很輕，「是想陪妳去，這兩件事不一樣。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"164:1-164:51;5095-5145\">沈砂關掉水龍頭，回頭看了她一眼，沒再堅持推辭，只是笑了笑：「好啦好啦，那到時候你要負責幫我拎包包。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"166:1-166:121;5147-5267\">那天晚上，沈鴉在她們共用的那盞總是忽明忽暗的舊燈下，多坐了一會兒，看著妹妹靠在沙發上，就著手電筒的光，繼續拆解一支壞掉的義肢手指——她沒有說出口的是，這個月的收單記錄裡，那份莫名被標記成「異常」的贈禮，讓她心裡，始終懸著一絲說不清楚的不安。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskfegw9rj7d",
          "title": "第三章",
          "subtitle": "阿婆的滷肉飯與霓生",
          "blocks": [
            {
              "id": "msskfegwyun9t",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"172:1-172:40;5292-5331\">隔天傍晚，沈砂拎著兩個空飯盒去根三區阿婆的攤子還盒子，順路繞去了霓生的代寫攤。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"174:1-174:81;5333-5413\">霓生和沈砂是在義體維修站認識的——三年前，霓生的哥哥還在的時候，常帶著霓生去修她那雙老舊的助聽器，沈砂那時候也常去修義肢，兩個總在等修理的少女，一來二去就熟了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"176:1-176:30;5415-5444\">「妳今天氣色不錯。」霓生一邊收拾攤子上的紙筆，一邊隨口說。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"178:1-178:51;5446-5496\">「因為我姊昨天笑了。」沈砂在對面的板凳坐下，「一整年大概也就笑個十次，昨天算一次，我要記在日曆上。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"180:1-180:48;5498-5545\">霓生笑了笑，沒有接話，手上的動作卻慢了半拍——她把桌面收拾得比平常更仔細一些，像是在拖延什麼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"182:1-182:15;5547-5561\">「妳今天寫了幾封？」沈砂問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"184:1-184:37;5563-5599\">「三封。」霓生說，頓了頓，又補充，「其中一封，是寫給一個十歲小女孩的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"186:1-186:92;5601-5692\">沈砂沒有追問細節——她知道代寫攤的行規，也知道霓生每次寫完這種信，情緒都需要一點時間才能緩過來，所以她只是安靜地陪坐了一會兒，幫忙把折疊桌收好，兩人一起把攤子推回霓生家附近的儲物間。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"188:1-188:24;5694-5717\">路上經過根三區公佈欄的時候，霓生忽然停下腳步。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"190:1-190:7;5719-5725\">「怎麼了？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"192:1-192:46;5727-5772\">「沒事。」霓生很快移開視線，語氣卻有一絲不自然，「妳最近……有沒有收到什麼奇怪的通知信？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"194:1-194:22;5774-5795\">沈砂愣了一下：「沒有啊，怎麼突然這樣問？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"196:1-196:47;5797-5843\">霓生張了張嘴，最後只是搖搖頭：「沒事，隨口問問。走吧，我請妳吃烤地瓜，今天代寫攤生意不錯。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"198:1-198:129;5845-5973\">她沒有告訴沈砂，三天前她替一位客人代寫遺書的時候，無意間看見對方隨身攜帶的通知信副本上，收件人那一欄印著的姓名——與沈砂的姓氏，寫著同一個「沈」字，同一個轄區編號。她告訴自己那大概只是巧合，根三區姓沈的人家不只一戶，她甚至沒有勇氣去確認那份通知信上的全名。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"200:1-200:25;5975-5999\">她只是那天起，開始比平常更常來公佈欄這裡繞一繞。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskfz993mtfy",
          "title": "第四章",
          "subtitle": "根三區的人情",
          "blocks": [
            {
              "id": "msskfz99fydfb",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"206:1-206:78;6021-6098\">第二天一早，沈鴉被隔壁老陳的敲門聲吵醒——老陳是鏽溝這條巷子裡的老住戶，靠修理二手義肢維生，也是這附近唯一一個，會在沈鴉半夜收單回來時，留一盞燈給她的人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"208:1-208:89;6100-6188\">「鴉丫頭，妳那口鍋借我用用，我這批客人要的義肢殼子，得靠蒸氣塑形，我自己那口鍋昨天塌了個底。」老陳站在門口，手裡端著一堆零件，說話帶著根層人特有的、把麻煩事說得雲淡風輕的腔調。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"210:1-210:45;6190-6234\">「鍋在灶台上，自己拿。」沈鴉揉著眼睛讓開身子，「但你上次借我的螺絲刀組，到現在還沒還。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"212:1-212:39;6236-6274\">「還了還了，前天就還了，妳自己找找看，是不是被妳塞到哪個看不到的角落去了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"214:1-214:49;6276-6324\">沈砂從裡屋探出頭，笑著插話：「陳伯，你上次也是這樣說的，結果最後是在你自己工具箱最底層找到的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"216:1-216:160;6326-6485\">老陳被說得訕訕地笑了兩聲，也不惱，端著鍋子和零件就往自己家去了。沈鴉看著他的背影，忽然想起，鏽溝這條巷子裡，幾乎每一戶人家，都欠過恆憶集團一筆或大或小的債，每個人都活在「價目表」隨時可能點到自己名字的陰影裡——但他們依然會為了一口鍋、一副螺絲刀，這種雞毛蒜皮的小事，天天鬥嘴、天天互相借東西，日子照樣熱氣騰騰地過下去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"218:1-218:91;6487-6577\">她想，這大概就是根層人自己發明出來的、對抗那種巨大而抽象的恐懼的辦法——把它拆解成一件件具體到可笑的小事，鍋子、螺絲刀、還沒還的人情，這樣至少，還有一件事，是可以掌握在自己手裡的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"220:1-220:170;6579-6748\">下午，她因為一單委託，去了一趟中環。中環跟根層是截然不同的世界——街道乾淨得沒有一絲鏽跡，頭頂的天空雖然依舊被過濾網切割成格柵狀，卻多了幾分刻意營造的、明亮的假象；行人步履匆匆，臉上帶著一種根層人身上少見的、緊繃的體面感——她知道，中環的人，雖然日子比根層好過一些，卻同樣背負著沉重的分期債務，只是他們的恐懼，被更精緻的包裝，掩藏得更深。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"222:1-222:92;6750-6841\">她路過一間掛著「常青計畫諮詢中心」招牌的辦事處，透過玻璃窗，看見裡頭坐著幾對神情忐忑的中年夫妻，正低頭填寫著什麼表格——那種表格的樣式，她太熟悉了，跟沈砂收到的那份通知信，如出一轍。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"224:1-224:108;6843-6950\">她站在窗外，看了很久，最終，什麼都沒能做，只能攥緊拳頭，繼續往委託地點走去。她告訴自己，如果這次行動能成功，這間辦事處，還有夜隅另外無數間類似的辦事處，總有一天，會失去它們現在這副，用「機會」包裝著的、吃人的面孔。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"226:1-226:122;6952-7073\">中午，沈鴉去巷口的老趙雜貨鋪買東西，正好遇見老趙一家在為了下個月的「分期評估」發愁——老趙的女兒去年剛出生，天生帶著一種需要長期義體輔助的心臟缺陷，每個月光是維生設備的租賃費，就吃掉了老趙夫妻倆將近六成的收入，欠款利息像滾雪球一樣，越滾越大。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"228:1-228:40;7075-7114\">「鴉丫頭，妳說，」老趙一邊秤著米，一邊苦笑，「這債，是不是這輩子都還不完了？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"230:1-230:50;7116-7165\">「至少妳女兒還活著，」沈鴉把錢遞過去，語氣裡帶著她自己都沒察覺的沉重，「活著，就還有還債的機會。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"232:1-232:107;7167-7273\">「話是這麼說，」老趙嘆氣，「但你聽過那個新出來的『特殊神經相容者優先評估方案』嗎？隔壁區有戶人家，聽說評估通過了，一夜之間債務全免，還分到中環的戶籍名額——我這幾天，都在想，要不要也帶我女兒去測一測，說不定……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"234:1-234:21;7275-7295\">沈鴉的手，猛地攥緊了口袋裡剛找零的硬幣。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"236:1-236:49;7297-7345\">「別去。」她脫口而出，語氣比自己預想的更加急促，「老趙，相信我，那個方案，絕對別讓你女兒去測。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"238:1-238:95;7347-7441\">老趙被她這反常的態度嚇了一跳，將信將疑地應了一聲，沈鴉沒有再多解釋——她知道，此刻她拿不出任何一個能讓老趙信服的理由，只能在心裡，把這件事，也算進自己接下來，不得不做的那件事的理由清單裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"240:1-240:119;7443-7561\">這座城市裡，像老趙這樣，被債務逼到願意拿孩子的命運去賭一個「豁免」機會的家庭，恐怕遠遠不只一戶。她想，如果不趕在更多孩子，被那份精美包裝的通知信，騙進白色艙室之前，把真相攤開在陽光下，這種絕望，會像瘟疫一樣，一戶接著一戶，繼續蔓延下去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"242:1-242:107;7563-7669\">傍晚，沈鴉去阿婆的滷肉飯攤子買晚餐，排在她前面的是個面生的男人，穿著普通的中環工裝，卻總覺得哪裡不太對勁——他點餐的時候，眼神不是在看菜色，而是若有似無地掃過整條巷子，掃過公佈欄，掃過遠處靜電酒館那塊斑駁的招牌。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"244:1-244:50;7671-7720\">「頭一次見你。」阿婆一邊打飯一邊隨口搭話，根層做小生意的人，大多有這種見人熟的本事，「新搬來的？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"246:1-246:51;7722-7772\">「路過，來找個老朋友，聯繫不上了。」男人的語氣很平常，「妳知不知道這附近有個開酒館的，代號叫柯敖？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"248:1-248:51;7774-7824\">阿婆的手上動作沒停，臉上笑意卻淡了一分——這條巷子的人，對「打聽誰住哪裡」這種問題，本能地帶著戒心。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"250:1-250:32;7826-7857\">「不認識，」阿婆說，「你問錯地方了，這附近開酒館的多了去了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"252:1-252:149;7859-8007\">沈鴉站在後面，把這一幕看在眼裡，心裡某根弦，無聲地繃緊了。她付錢、拿了飯盒，若無其事地往回走，繞了兩條巷子確認沒人跟上，才快步朝靜電酒館趕去——她還不知道那個問話的男人是誰派來的，但她已經隱約明白，有些原本以為只是她一個人在暗處摸索的事，或許早就有人，在她看不見的地方，同樣暗處摸索著，朝她靠近。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskgkp3mjzeo",
          "title": "第五章",
          "subtitle": "新增的一欄",
          "blocks": [
            {
              "id": "msskgkp3gkuru",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"258:1-258:92;8028-8119\">沈鴉是在下班回家路上，經過公佈欄時，順手瞄了一眼這個月新貼出來的《資產重分類參考基準》——她每個月都會看，不是因為她欠債，是因為她想知道白釜下個月可能會接到哪一類的委託，好提前準備。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"260:1-260:37;8121-8157\">她的目光像平常一樣，掃過密密麻麻的條款，準備移開視線的時候，忽然頓住了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"262:1-262:14;8159-8172\">頁面最下方，多了一欄小字：</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"264:1-264:76;8174-8249\"><strong>「特殊神經相容者優先評估方案：凡經檢測符合『名籍續存標準』者，即日起可豁免全數債務，並享有根層戶籍升遷至中環之特別配額。詳情請洽各區醫療站。」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"266:1-266:133;8251-8383\">沈鴉皺眉盯著那個陌生的詞——「名籍續存標準」，她做這行六年，收過無數份委託，從沒聽過這個說法。舊的說詞一向是「常青回饋計畫」或「相容評估」，這個新詞，像是某種內部行話不小心外流到了公開文件上，又或者，是某種她從未接觸過的、更高層級的東西，開始悄悄滲透進根層的日常。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"268:1-268:33;8385-8417\">她把這件事記在心裡，打算晚點問問柯敖，然後轉身推開鏽溝那扇鐵門。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"270:1-270:49;8419-8467\">沈砂坐在床邊，膝蓋上攤著一張皺巴巴的紙，臉色是沈鴉從未見過的平靜——那種平靜，比哭喊更讓人心慌。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"272:1-272:5;8469-8473\">「砂？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"274:1-274:58;8475-8532\">「姊，」沈砂抬起頭，把那張紙遞過來，「妳先別激動，我已經打電話去醫療站問過了，這只是『初步相容』，不是確定的事。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"276:1-276:43;8534-8576\">沈鴉接過那張信紙，官方印刷體，抬頭寫著「恆憶集團・第九醫療站」，下方是制式化的文字：</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"278:1-278:88;8578-8665\"><strong>「沈砂女士台鑒：您已於例行神經活性掃描中，初步符合本站『名籍續存標準』相容條件，敬請於七日內親臨本站辦理進一步評估。屆時如評估通過，您的全部未償債務將獲即刻豁免……」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"280:1-280:73;8667-8739\">沈鴉的手指開始發抖，不是因為恐懼——她做這行六年，早已學會把恐懼摁進身體最深處——而是因為信紙最下方，印著一行極小的編號，一串她從未見過的格式：</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"282:1-282:21;8741-8761\"><strong>申請流水號：SC-0447-R2</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"284:1-284:113;8763-8875\">「SC」，她後來才知道，是「沈」姓拼音的縮寫代碼，而「R2」，她此刻還不知道那代表什麼——直到很久以後，她才會明白，那個「R2」，記錄的不是沈砂這是第幾次申請，而是沈砂，這個編號背後承載的神經模板，是第幾次「回到」這個位置。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"286:1-286:23;8877-8899\">「妳不會去。」沈鴉聽見自己說，聲音出奇地穩。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"288:1-288:115;8901-9015\">「姊，」沈砂握住她的手，「我知道妳想說什麼，但妳聽我說——我已經想了一整個下午。如果我去評估，通過的話，我們的債務就全部沒了，妳不用再半夜出門，去對著快死掉的陌生人叫他們的名字，去承受那些妳從來不肯讓我知道妳承受了多少的東西。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"290:1-290:32;9017-9048\">「妳不會去。」沈鴉又說了一次，這次她的聲音終於出現了一絲裂痕。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"292:1-292:68;9050-9117\">她想起七年前，母親沈曉茉也曾經拿著一張長得幾乎一模一樣的信，坐在同一張桌子邊，用同樣平靜得可怕的語氣，跟她說：「鴉，我已經想清楚了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"294:1-294:15;9119-9133\">那之後，母親再也沒有回來過。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskh3lqrh4e3",
          "title": "第六章",
          "subtitle": "七年前的那個冬天",
          "blocks": [
            {
              "id": "msskh3lqos27k",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"300:1-300:24;9157-9180\">沈鴉常常想起那個冬天，卻很少讓自己真正想完整。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"302:1-302:87;9182-9268\">那時候她二十一歲，剛在中環一間小型義體診所當學徒不久，手還很生，常常把該焊接的地方燒糊，母親沈曉茉會在她收工回家後，接過她燙得起泡的手指，一邊上藥，一邊笑她「手比腦子笨」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"304:1-304:87;9270-9356\">母親收到那封信的那天，晚餐煮了沈鴉最愛吃的醬燒魚——後來沈鴉才想明白，那不是巧合，母親大概那時候，就已經隱約猜到，這頓晚餐，可能會是很長一段時間裡，最後一次好好陪她們吃飯。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"306:1-306:62;9358-9419\">「鴉，我已經想清楚了。」母親把那張信紙，摺得整整齊齊，放進圍裙口袋，「這件事我沒跟妳商量，是因為我知道，妳一定會攔著我。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"308:1-308:7;9421-9427\">「什麼事？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"310:1-310:110;9429-9538\">「醫療站的評估。」母親替年幼的沈砂夾了一塊魚肉，語氣輕描淡寫得像是在說明天要買什麼菜，「我這幾年身體越來越差，義體維生系統的分期款，妳一個人扛得越來越吃力，我想著，與其拖著拖累妳們，不如去試試看，說不定真能減免債務。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"312:1-312:17;9540-9556\">「媽，那種事聽起來就不對勁——」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"314:1-314:81;9558-9638\">「鴉，」母親打斷她，語氣依然溫和，眼神卻異常堅定，「我這輩子，沒能給妳們留下什麼像樣的東西，如果這次評估，真能讓妳跟砂砂往後的日子輕鬆一點，我情願去賭這一次。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"316:1-316:78;9640-9717\">沈鴉那時候還年輕，還不懂得如何跟一個已經下定決心的長輩爭辯，只能在飯桌上，賭氣似地一言不發，把碗裡的魚肉，一塊一塊撥給沈砂，藉此表達自己的不滿與無能為力。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"318:1-318:118;9719-9836\">她記得母親那天晚上，破例沒有像平常那樣早早催她們睡覺，而是坐在床邊，一邊織著一件她織了很久、始終沒能織完的毛線衣，一邊哼著那首她們姊妹倆從小聽到大、永遠跑調的搖籃曲，一直哼到沈砂睡熟，才悄悄起身，站在門口，望著兩個女兒，看了很久很久。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"320:1-320:70;9838-9907\">沈鴉那時候假裝已經睡著，透過半闔的眼皮，看見母親的身影，在昏暗的燈光下，站得異常安靜，像是在把眼前這個畫面，用力地、鄭重地，刻進自己心裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"322:1-322:104;9909-10012\">第二天一早，母親出門時，只跟她們說了一句「乖乖等我回來吃晚飯」，語氣一如往常地輕鬆——沈鴉後來反覆回想，才驚覺，母親那天，穿了她衣櫃裡最好的那件外套，還特地把頭髮梳得整整齊齊，像是要去赴一場，鄭重其事的約。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"324:1-324:17;10014-10030\">那頓晚飯，她們再也沒能一起吃成。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"326:1-326:131;10032-10162\">三天後，診所收到集團的「病危通知」，沈鴉抱著那份薄薄的通知書，在雨裡站了整整一夜，那時候的她，還不知道自己該恨誰，只是隱約覺得，母親臨走前那頓過分用心的晚餐，那件特意穿上的外套，那個站在門口，久久望著她們的背影，都在用一種她當時讀不懂的方式，說著一句「再見」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"328:1-328:12;10164-10175\">七年後，她終於讀懂了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"330:1-330:238;10177-10414\">她也終於明白，那件母親一直沒能織完的毛線衣，為什麼會在她走後，被沈鴉小心翼翼地收進衣櫃最深處，七年來，一次都沒有拿出來過——不是不想念，是太想念了，想念到不敢輕易觸碰，怕自己一旦鬆懈下來，就再也撐不起，照顧沈砂、扛起這個家的責任。她想，或許有一天，等這一切真正塵埃落定，她會把那件毛線衣，重新拿出來，坐在窗邊，把母親沒能織完的部分，一針一線，親手織完——哪怕她自己的手，跟母親當年比起來，笨拙得多，哪怕織出來的花樣，未必能對得上母親原本的設計，她也想，親手，把這件事，做完。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskhlfhnnexj",
          "title": "第七章",
          "subtitle": "稽核隊的陰影",
          "blocks": [
            {
              "id": "msskhlfhwuoo3",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"336:1-336:73;10436-10508\">沈鴉不知道的是，就在她盯著公佈欄上那行小字的同一個下午，中環恆憶集團資產稽核隊的辦公室裡，一名叫祝任遠的隊長，正對著螢幕上一筆異常紀錄，皺著眉。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"338:1-338:67;10510-10576\">那是三天前周家麵館的一筆「未申報記憶轉移」——一個記憶獵人，私自把已收購的臨終記憶另外複製一份，贈與死者家屬，沒有申報，也沒有收費。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"340:1-340:74;10578-10651\">按規定，這種案子的罰則不重，通常隊裡的人看一眼、開一張警告單就結案。但祝任遠沒有立刻結案，他把那名記憶獵人過去六年的案底調了出來，一筆一筆看下去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"342:1-342:98;10653-10750\">六年裡，這個代號「鴉」的記憶獵人，經手了四百多筆委託，準時、乾淨、從無糾紛——唯獨有十一筆，跟今天這筆一樣，是她自己額外贈與的「非合約內容」，全部都沒有收費，全部都選在死者家屬情緒最脆弱的時刻。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"344:1-344:25;10752-10776\">祝任遠盯著那十一筆紀錄，手指在桌面上輕輕敲了敲。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"346:1-346:142;10778-10919\">他想起自己年輕時，在根層一場「未受管制資源崩潰」中失去的家人——那場暴動與瘟疫，起因只是一次配水系統的臨時故障，沒有及時上報，沒有標準流程，最後演變成連續七天的混亂，他的母親與弟弟，就死在那七天裡的某一天，具體哪一天，連他自己都拼湊不出來，因為那七天的紀錄，本身就是一片混亂的空白。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"348:1-348:128;10921-11048\">從那之後，祝任遠信奉一件事：混亂，比任何一種被規範過的剝削，都更容易奪走人命。這座城市能維持幾百年不崩潰，靠的不是善良，是秩序——是每一筆帳、每一份契約、每一次「評估」，都被詳實地記錄下來，可以被追蹤、被問責，而不是像他失去家人的那七天，什麼都沒有留下。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"350:1-350:46;11050-11095\">所以他不喜歡「額外贈與」這種事，哪怕出發點是善意。善意如果不進系統，就是下一場混亂的種子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"352:1-352:29;11097-11125\">他在那筆紀錄旁邊，備註了一行字：「持續觀察，暫不結案。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"354:1-354:62;11127-11188\">然後，他調出了「鴉」這個代號名下登記的住址與常去地點——一間叫「靜電」的酒館，老闆是集團十五年前的黑名單前員工，代號柯敖。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"356:1-356:24;11190-11213\">祝任遠把這兩個名字，並排放進了同一份待查清單。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"358:1-358:54;11215-11268\">他還不知道，這份看似例行的清單，會在接下來的一個月裡，把他一步一步，帶向一個他自己也沒有準備好面對的答案。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msski1br65ece",
          "title": "第八章",
          "subtitle": "柯敖沒說完的那一半",
          "blocks": [
            {
              "id": "msski1br91dos",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"364:1-364:110;11293-11402\">「『名籍續存標準』？」柯敖把這五個字在嘴裡念了一遍，眉頭皺得比沈鴉見過的任何一次都深，「這詞我沒聽過。我離開集團十五年了，那時候官方說法是『意識延續計畫』，後來聽說改成『常青回饋』，妳說的這個，是更新的包裝，還是——」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"366:1-366:16;11404-11419\">他忽然停下，沒有把那句話說完。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"368:1-368:13;11421-11433\">「還是什麼？」沈鴉追問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"370:1-370:78;11435-11512\">柯敖沒有回答，轉身走到吧檯後方，從一堆雜物裡翻出一支老舊的訊號探測器，開始檢查酒館的白噪音干擾器是不是還正常運作——這是他心神不定時的習慣動作，沈鴉認得。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"372:1-372:6;11514-11519\">「柯敖。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"374:1-374:130;11521-11650\">「我在想一件事，」他終於開口，聲音比平常低了半度，「這麼多年，我一直以為自己當年看到的那套系統，已經算是它最核心的樣子了——活人身體，覆寫協議，存靈艙。但如果現在冒出一個我從沒聽過的詞，用的又是『續存』而不是『延續』或『回饋』這種對外公關會用的柔和字眼……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"376:1-376:7;11652-11658\">「意思是？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"378:1-378:80;11660-11739\">「意思是，」柯敖抬起頭，眼神裡是一種沈鴉很少在他臉上看到的東西——不是恐懼，是某種更古老的、近乎疲憊的警覺，「意思是我當年看到的那一層，可能根本不是最底層。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"380:1-380:26;11741-11766\">沈鴉沉默了幾秒：「你在恆憶集團的時候，見過什麼？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"382:1-382:22;11768-11789\">柯敖的手指停在探測器的旋鈕上，很久沒有動。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"384:1-384:63;11791-11853\">「我見過一個人，被歸環。」他終於說，聲音很輕，「不是資料，不是紀錄片段，是我親眼看著，站在控制室裡，看著發生的。那個人……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"386:1-386:7;11855-11861\">他又停住了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"388:1-388:96;11863-11958\">沈鴉等著，一秒，兩秒，直到吧檯上方那盞舊燈管閃爍了三次，柯敖才像是把某個念頭硬生生嚥了回去，改口說：「那件事，等妳妹妹的事解決了，我再跟妳說完整。現在，我們沒有時間讓我沉浸在自己的舊帳裡。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"390:1-390:88;11960-12047\">沈鴉看著他，第一次意識到，柯敖身上背著的東西，或許比她這些年猜測的還要重。但她沒有追問——她自己也是那種寧願把秘密釀成一整罐、也不願意隨便打開來讓別人分擔的人，她認得出同類。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"392:1-392:15;12049-12063\">「那我們現在要找誰？」她問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"394:1-394:97;12065-12161\">「白釜有一把鑰匙，能摸到中環行政系統的邊緣。」柯敖收起探測器，「但如果連我都沒聽過『名籍續存標準』這個詞，我懷疑白釜的鑰匙，可能也不夠用了。我們需要更老的東西——比集團自己的紀錄還老的東西。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"396:1-396:11;12163-12173\">「更老的東西在哪？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"398:1-398:28;12175-12202\">柯敖露出一個沈鴉看不懂的笑容，一半是懷念，一半是不安。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"400:1-400:35;12204-12238\">「在一個連恆憶集團自己都不知道還存在的地方。」他說，「老桐的地窖。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"402:1-402:108;12240-12347\">他頓了頓，又補了一句，語氣忽然謹慎起來：「鴉，這幾天出門，多留意一下身後。我這個代號在集團黑名單上待了十五年，通常沒人會理，但我今天下午，注意到酒館外面那盞路燈附近，多了一個我不認得的巡邏機甲，停留的時間有點長。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskif9y57tve",
          "title": "第九章",
          "subtitle": "白釜的鑰匙與一句多餘的話",
          "blocks": [
            {
              "id": "msskif9yqmc47",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"408:1-408:43;12375-12417\">去老桐那裡之前，沈鴉照著柯敖的建議，先去了一趟白釜的辦公室，想確認舊管道還能不能用。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"410:1-410:54;12419-12472\">「『名籍續存標準』。」白釜聽完，把玩鑰匙的手指停住了，跟柯敖一模一樣的反應，讓沈鴉心裡的不安又加深了一層。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"412:1-412:9;12474-12482\">「你也沒聽過？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"414:1-414:77;12484-12560\">「我聽過一次。」白釜說，「很多年前，一個客戶喝醉了，在我面前隨口提過這五個字，我當時沒在意，後來想再問他細節，他已經『被重新分類』了——妳懂那個意思。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"416:1-416:19;12562-12580\">他把鑰匙推過桌面，語氣比平常更謹慎。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"418:1-418:41;12582-12622\">「鴉，我可以幫妳把中環行政系統的邊緣門打開，但我要先問妳一句話，妳老實回答我。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"420:1-420:5;12624-12628\">「說。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"422:1-422:28;12630-12657\">「妳這次要救的，只是妳妹妹，還是妳想把整套系統掀開？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"424:1-424:10;12659-12668\">沈鴉沒有立刻回答。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"426:1-426:140;12670-12809\">白釜盯著她，忽然嘆了口氣，像是在替她把心裡那句她自己都還沒想清楚的話，先說了出來：「因為如果只是前者，妳現在應該去求人情、去湊錢、去找漏洞卡她的評估日期——妳做的這些不是那種事的節奏。妳在查一個連妳自己都還說不清的東西。這種查法，最後多半只有兩種結局，掀開它，或者，被它吃掉。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"428:1-428:48;12811-12858\">沈鴉終於開口：「我不知道會是哪一種。但我知道，如果只救她一個人，救得了這一次，救不了下一次。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"430:1-430:55;12860-12914\">白釜點點頭，沒有再說什麼，只是在她轉身要走的時候，忽然補了一句——說完之後，連他自己都像是後悔多說了這句話。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"432:1-432:36;12916-12951\">「鴉，如果有一天妳查到一個叫『歸還名冊』的東西，先別聲張，先來找我。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"434:1-434:7;12953-12959\">「為什麼？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"436:1-436:37;12961-12997\">白釜沒有回答，只是重新低下頭，繼續把玩那枚鑰匙，像是這句話從沒說出口過。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"438:1-438:16;12999-13014\">沈鴉走到門口時，白釜又叫住她。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"440:1-440:135;13016-13150\">「還有一件事。」他說，「稽核隊最近換了個帶隊的，代號祝任遠，做事跟以前那批人不一樣——以前的稽核，睜一隻眼閉一隻眼，只要帳面過得去就懶得深究；這個人，據說連一筆五十阿米爾的私下贈與都要備註存查。鴉，妳做這行六年留下的那些『規矩之外的規矩』，如果有一天被這種人盯上……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"442:1-442:22;13152-13173\">他沒有把話說完，只是意味深長地看了她一眼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"444:1-444:36;13175-13210\">沈鴉那時候還不知道，這句提醒，會在多久之後，變成她必須直接面對的東西。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskj8m9xf7mv",
          "title": "第十章",
          "subtitle": "老桐的地窖",
          "blocks": [
            {
              "id": "msskj8m9iybe4",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"450:1-450:83;13231-13313\">柯敖帶沈鴉去的地方，比根層任何一處她去過的地方都更深——深到連地圖標示都是一片空白，只在舊時代的紙本地契上，還殘留著一個早已作廢的地名：「舊七街地下三層，檔案倉」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"452:1-452:127;13315-13441\">老桐住在那裡，一個人，養著十幾隻靠回收零件拼湊出來的機械貓，用來在漆黑的地窖裡巡邏、驅趕真正的老鼠。他的眼睛因為年輕時長期泡在老式資料液裡工作，早已失明，卻能單靠指尖劃過磁條的紋路，讀出上面記錄的內容——這門手藝，據柯敖說，全夜隅可能只剩他一個人還會。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"454:1-454:61;13443-13503\">「柯敖的朋友。」老桐聽見腳步聲，頭也沒抬，「妳身上有記憶獵人的探線接口氣味，很少見，你們這行的人，很少會來我這種地方。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"456:1-456:31;13505-13535\">「我需要一個詞的資料。」沈鴉開門見山，「『名籍續存標準』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"458:1-458:26;13537-13562\">老桐的手指停在正在整理的一疊磁條上，停了足足十秒。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"460:1-460:203;13564-13766\">老桐的養貓習慣，是從年輕時候留下的——那時候他還在檔案室工作，同事們都嫌棄地下室老鼠多，只有他，會偷偷留一點乾糧餵養那些流竄在磁條架之間的野貓，久而久之，那些貓認得他的氣味，會在他加班到深夜時，安靜地陪在他腳邊。他失明之後，才漸漸開始用回收零件，把幾隻養熟的貓，一點一點改造成能替他巡邏、驅趕真正老鼠的機械夥伴——他說，那是他這輩子，唯一一次，把「捨不得丟棄」這種心情，具體地做成了看得見、摸得著的東西。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"462:1-462:81;13768-13848\">「這五個字，我上一次聽到，是四十年前。」他終於說，聲音裡帶著一種沈鴉聽不太懂的複雜情緒，「妳確定妳想知道接下來要問的問題嗎？很多人問到這一步，會後悔知道答案。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"464:1-464:58;13850-13907\">柯敖在一旁補充：「老桐年輕時候，是恆憶集團前身機構裡，少數負責銷毀舊檔案的技術員之一——別人銷毀，他偷偷留一份。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"466:1-466:132;13909-14040\">「不完全是為了留一份給後人。」老桐糾正，語氣裡帶著一絲自嘲，「一開始，我只是捨不得。我這輩子沒讀過什麼書，是靠在檔案室裡，一份一份磁條讀出來的知識，把自己養大的，我把那些即將被銷毀的東西留下來，最初的念頭很自私——我怕自己以後沒東西可讀，不是什麼偉大的使命感。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"468:1-468:11;14042-14052\">「後來呢？」沈鴉問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"470:1-470:179;14054-14232\">「後來我眼睛瞎了，」老桐平靜地說，「泡資料液泡了一輩子，四十歲那年，視網膜整個壞死。集團給的賠償，是一筆遣散費跟一句『感謝多年貢獻』。我那時候才真正想通一件事——我留下的這些東西，如果只是為了我自己讀，那我瞎了之後，它們就沒有意義了。所以我開始學怎麼用指尖讀磁條，一邊讀，一邊想，總有一天，會有人需要它們，不是為了滿足好奇心，是為了活下去，像妳現在這樣。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"472:1-472:31;14234-14264\">「我妹妹七天內要被送去評估。」沈鴉說，「我沒有後悔的時間。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"474:1-474:52;14266-14317\">老桐沉默了一會兒，終於起身，摸索著走向地窖最深處一個上了三道鎖的鐵櫃，取出一疊用油布層層包裹的舊磁條。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"476:1-476:187;14319-14505\">「這些是我年輕時候，趁一次系統汰換，從恆憶集團的前身——那時候還不叫這個名字——的廢棄倉庫裡撿回來的。」他把磁條放進一台老舊的讀取機，「我讀不懂全部內容，因為很多術語，連我這種老骨頭都聽不明白。但我記得其中反覆出現一個詞，比『常青』、比『恆憶』、比妳今天問我的『名籍續存』，都更古老——那個詞叫『原環』。今天太晚了，讀取機需要暖機，妳明天再來，我把能修復的部分整理給妳。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"478:1-478:82;14507-14588\">沈鴉點點頭，起身告辭。她沒有注意到，離開地窖、走上舊七街地面的時候，巷口那盞路燈的陰影裡，有一個人，安靜地目送她走遠，然後低頭，在腕上的通訊器裡，輸入了一行紀錄。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskjmfh37pku",
          "title": "第十一章",
          "subtitle": "第一次滲透，失敗",
          "blocks": [
            {
              "id": "msskjmfhw2zcx",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"484:1-484:33;14613-14645\">柯敖用白釜的鑰匙撬開的那道後門，比預期中更快就被系統標記為異常。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"486:1-486:110;14647-14756\">沈鴉喬裝成貨運技術員混進頂環底層維修層的第九分鐘，巡邏機甲的警示燈就亮了起來——不是因為她的偽裝出了破綻，是恆憶集團最近一次系統升級，多加了一層她和柯敖都沒料到的生物電波掃描，專門用來偵測「非登記人員」的神經接口特徵。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"488:1-488:30;14758-14787\">「鴉，撤退，現在撤退！」柯敖的聲音在耳機裡幾乎是吼出來的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"490:1-490:88;14789-14876\">沈鴉沒有猶豫，轉身衝向緊急逃生梯，身後傳來機甲沉重的腳步聲和警報的嗡鳴。她在逃生梯間連摔帶滾地下降了十幾層，手臂被生鏽的扶手劃開一道口子，直到確認甩開追蹤，才靠著牆大口喘氣。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"492:1-492:45;14878-14922\">「我們得重新規劃路線。」柯敖的聲音裡帶著自責，「是我低估了他們的升級速度，對不起，鴉。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"494:1-494:91;14924-15014\">「不是你的錯。」沈鴉按著手臂上的傷口，聲音卻異常平靜，「我們知道了一件事——他們最近在加強防禦，可能是因為知道有人在查。也可能，只是因為某個重要的『續存』流程，最近排得特別密集。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"496:1-496:16;15016-15031\">她想起沈砂那張通知信上的日期。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"498:1-498:12;15033-15044\">七天，現在只剩下五天。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"500:1-500:52;15046-15097\">第一次滲透失敗，沒有讓她退縮，反而讓她第一次真正感覺到——時間，正在以一種她無法控制的速度，往下倒數。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"502:1-502:141;15099-15239\">那次失敗留下的痕跡，比她以為的更多。第二天上午，祝任遠的辦公桌上，多了一份「頂環底層維修層・非登記人員入侵未遂」的自動生成報告，附帶一段生物電波殘留特徵。他把那段特徵，跟自己手頭那份「鴉」的舊檔案交叉比對了三次，第三次比對結束時，他起身，把「持續觀察」的備註，改成了「立案調查」。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskjzufatxcv",
          "title": "第十二章",
          "subtitle": "稽核隊裡的異議",
          "blocks": [
            {
              "id": "msskjzuf10du2",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"508:1-508:90;15263-15352\">「隊長，你確定要為了一個小記憶獵人，動用這麼多資源？」祝任遠的副手，一個叫林巧的年輕稽核員，看著他調度出的追查清單，忍不住提出質疑，「按規定，這種級別的異常，本來三天就能結案。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"510:1-510:105;15354-15458\">「妳注意到這份清單裡，有多少筆紀錄，源頭都指向同一組我們從沒接觸過的關鍵詞嗎？」祝任遠把幾份檔案並排攤開，「『名籍續存』、『原環』——林巧，我做這行十二年，第一次在自己的權限範圍內，查不到這些詞的正式定義。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"512:1-512:91;15460-15550\">「也許只是內部一個還沒對外公開的新專案名稱。」林巧試探著說，「隊長，我們稽核隊的職責是查違規、抓詐領，不是查集團高層的內部機密——如果我們查得太深，會不會，反而是我們自己越界了？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"514:1-514:22;15552-15573\">祝任遠沉默了一會兒，沒有直接回答她的問題。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"516:1-516:68;15575-15642\">「林巧，妳還記得三年前，我們查過的那起『第九醫療站評估名單異常增列』的案子嗎？」他問，「妳當時建議結案，理由是找不到具體受害人申訴。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"518:1-518:6;15644-15649\">「記得。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"520:1-520:70;15651-15720\">「我後來一直在想，」祝任遠的聲音低沉下來，「所謂『找不到具體受害人申訴』，會不會不是因為沒有受害人，是因為受害人，根本沒有機會活著申訴。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"522:1-522:19;15722-15740\">林巧愣住了，一時間不知道該怎麼接話。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"524:1-524:91;15742-15832\">「我不是要妳跟我一起越界。」祝任遠重新拿起清單，語氣恢復了慣常的公事公辦，「這件事，我會自己扛，需要妳做的，只是按規定，配合我完成例行的追查程序，其餘的，妳可以假裝什麼都沒聽見。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"526:1-526:58;15834-15891\">林巧看著他的背影，沒有再說話，卻在轉身離開時，悄悄把那份寫著「名籍續存」、「原環」的清單，多看了一眼，記在了心裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"528:1-528:80;15893-15972\">她那時候還不知道，自己這個不經意的決定，會在很多天後的混亂裡，讓她成為稽核隊裡，少數幾個沒有立刻選擇否認一切、轉而配合「調用受害者協會」清查舊案的稽核員之一。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskkfok7sjrf",
          "title": "第十三章",
          "subtitle": "白色艙室",
          "blocks": [
            {
              "id": "msskkfokcqr2z",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"534:1-534:101;15993-16093\">第二次滲透，她們換了路線——老桐提供了一份四十年前的舊維修圖，那時候永生塔的底層結構還沒有經過幾次翻修，某些早已在官方紀錄上「不存在」的通道，其實只是被重新編號、藏進了新系統的死角裡，沒有真正被拆除。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"536:1-536:166;16095-16260\">沈鴉在維修管道裡爬行了將近四十分鐘。管道內部又窄又悶，混雜著陳年灰塵與金屬鏽蝕的氣味，隨著她逐漸深入永生塔的核心結構，管壁外側傳來的機械運轉聲，也一層一層地變化——從最初中環常見的、粗糙而喧鬧的物流系統噪音，逐漸過渡成一種低沉、規律、幾乎帶著某種詭異韻律感的嗡鳴，像是這座塔的深處，藏著一顆巨大而緩慢的心臟，正不緊不慢地，跳動著。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"538:1-538:98;16262-16359\">她途經幾處狹窄的觀測窗口，能瞥見窗外，頂環那些浮島式建築群之間，懸掛著的巨大常青計畫宣傳看板，燈光柔和，畫面裡是含笑的老人與孩童，配著她從小哼到大的那句廣告詞——此刻再看，只覺得諷刺得讓人牙癢。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"540:1-540:76;16361-16436\">她最終停在一扇厚重的合金門前。門上沒有任何標示，只有一塊幾乎被鏽蝕吞沒的舊銘牌，隱約還能辨認出幾個字：「第七維生層・原環技術部・非授權人員禁止進入」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"542:1-542:35;16438-16472\">「『原環』。」她低聲念出這兩個字，跟老桐磁條裡讀出的殘缺詞彙對上了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"544:1-544:40;16474-16513\">門後傳來低頻的機械運轉聲，還有一種介於心跳監測器與工業冷卻系統之間的規律脈動。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"546:1-546:70;16515-16584\">她剛把門撬開一道縫，遠處走廊忽然傳來腳步聲——不是機甲那種沉重的金屬踏步，是人的腳步，兩個人，一邊走一邊低聲交談，語氣輕鬆，像是例行巡查。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"548:1-548:79;16586-16664\">沈鴉的心跳瞬間提到嗓子眼。她迅速閃身，貼進門邊一段凸出的管線陰影裡，屏住呼吸。腳步聲越來越近，其中一人忽然停下：「這道門的感應器上次維修，是不是還沒歸位？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"550:1-550:29;16666-16694\">「懶得管，反正這層本來就沒排班，走吧，還要去頂層交接。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"552:1-552:128;16696-16823\">腳步聲重新遠去，消失在轉角。沈鴉在原地又站了將近一分鐘，直到確定自己的心跳聲不再蓋過周圍的環境音，才重新推開那扇門，閃身進去，順手將門帶上——她知道，如果剛才那兩人多停留十秒，或者多問一句，這次行動就會提前結束在這條走廊上，而不是任何一個她能選擇的方式。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"554:1-554:15;16825-16839\">門開的瞬間，她幾乎忘記呼吸。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"556:1-556:100;16841-16940\">那是一間巨大的白色艙室，環形排列著至少三十座透明培育艙，艙內浸泡著淡藍色的營養液，液面下漂浮著三十具已經完全發育成熟的成年人身軀，每一具都閉著眼睛，神情安詳得近乎詭異，像是集體陷入一場沒有夢的深眠。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"558:1-558:106;16942-17047\">她沒有像上次計畫的那樣，只做取證就撤離——這一次，她注意到每一座艙體外側的資料面板，除了倒數計時，還多了一欄她從沒見過的標示：<strong>「續存目標名籍」</strong>，後面跟著一連串陌生的稱謂——不是人名，更像是某種職位代號。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"560:1-560:76;17049-17124\">她正準備用隨身裝置拍下整排艙體的畫面，最靠近她這一側的一座艙體，忽然傳來極其輕微的躁動——營養液裡，一個原本安詳沉睡的身影，眼皮顫抖了幾下，緩緩睜開。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"562:1-562:69;17126-17194\">那是一個看起來不過四十出頭的女人，眼神渙散，卻在對上沈鴉的視線那一瞬間，忽然聚焦起來，嘴唇透過營養液，無聲卻用力地開闔著，像是在說什麼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"564:1-564:80;17196-17275\">沈鴉幾乎是下意識地，將掌心貼上艙壁——冰涼的合金表面下，她能感覺到那女人的指尖，也同時貼了上來，隔著一層厚重的透明艙壁與淡藍色的營養液，兩人的手掌，遙遙相對。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"566:1-566:69;17277-17345\">艙體外側的簡易通訊面板，因為長期未受妥善維護，居然還殘留著一絲微弱的骨傳導音訊功能——沈鴉將耳朵貼近艙壁，斷斷續續，聽見了幾個模糊的字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"568:1-568:28;17347-17374\">「……女兒……跟她說……我沒有……不要她……等我……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"570:1-570:51;17376-17426\">聲音戛然而止，那女人的眼神再次渙散下去，重新沉入毫無知覺的深眠，鎮定劑顯然又一次接管了她的神經系統。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"572:1-572:97;17428-17524\">沈鴉站在原地，久久無法動彈，胸口像是被人狠狠揍了一拳。她不知道那女人是誰，不知道她口中的女兒此刻身在何處，甚至不知道自己聽見的，是不是這女人真正想說的話，還是意識殘存的碎片，隨機拼湊出的囈語。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"574:1-574:89;17526-17614\">但她知道，這座白色艙室裡的三十具身軀，不是三十份冷冰冰的資料，是三十個曾經有人牽掛、也牽掛著別人的活生生的人，被迫在一種介於生與死之間的狀態裡，等待著自己被拆解成兩半的那一刻。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"576:1-576:56;17616-17671\">她把那句破碎的、可能誰都聽不見、也可能永遠等不到的話，牢牢記在心裡，然後，才強迫自己繼續移動，去找母親的編號。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"578:1-578:29;17673-17701\">其中一座艙體上，寫著：<strong>「續存目標名籍：甄長樂」</strong>。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"580:1-580:96;17703-17798\">沈鴉的目光順著那行字往下移，看見了旁邊那一整段小字，是她第一次，真正看懂「歸環」這兩個字背後，完整的技術流程說明——不是柯敖轉述的、經過記憶模糊化的版本，是原始的、冰冷的、官僚文件式的原文：</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"582:1-582:124;17800-17923\"><strong>「本艙體所收容個體，其成熟神經紋理將依標準協議，分段灌注入目標名籍『甄長樂』之現行載體，以達成人格模板穩定化目的。非相容之殘餘意識片段，將依既定程序完成『拆分編碼』，轉錄為新生神經種子，配額下放至根層指定戶籍，完成本輪次之『續存循環』。」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"584:1-584:91;17925-18015\">沈鴉讀完這段文字，反而沒有立刻理解它的重量——那種官僚文件特有的冷靜句法，把一件足以壓垮一個人的事情，寫得像是設備保養手冊裡的一段例行說明。她的注意力，是被艙體上另一塊面板吸走的。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskl9jbqyax1",
          "title": "第十四章",
          "subtitle": "R-2291",
          "blocks": [
            {
              "id": "msskl9jbcdp70",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"590:1-590:64;18038-18101\">那塊面板貼在整排培育艙最末端，一座艙體早已排空、只剩淺淺一層殘液的位置，顯然是「本輪次已完成」的舊紀錄，還沒來得及被系統清除。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"592:1-592:67;18103-18169\"><strong>編號：R-2291　原始戶籍識別：沈曉茉，女，歿齡四十一　狀態：續存分段已完成，殘餘片段已完成拆分編碼與下放程序，本案結案。</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"594:1-594:17;18171-18187\">沈鴉站在那塊空艙前，很久沒有動。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"596:1-596:132;18189-18320\">她以為，如果真的有這麼一天，自己會崩潰，會尖叫，會像柯敖形容的那種失去至親的人一樣，做出什麼激烈的反應。但此刻她只是站著，異常安靜，安靜到她能聽見自己的心跳，一下一下，撞在耳膜上，卻感覺不到多少疼痛——那種疼痛太大了，大到暫時繞過了她的身體，先鑽進了更深的地方。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"598:1-598:7;18322-18328\">母親沒有死。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"600:1-600:143;18330-18472\">這三個字，在她腦海裡反覆迴響，一遍又一遍，卻始終無法在她心裡，激起她原本以為會有的、排山倒海的情緒——她開始懷疑，是不是自己這六年來，早已把心裡那道用來承受巨大衝擊的閥門，磨損得太過遲鈍，遲鈍到連「母親沒有死」這樣的消息，都只能激起一陣悶悶的、遲來的迴響，而不是一場真正意義上的崩潰。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"602:1-602:60;18474-18533\">母親的一部分，此刻正撐著一個叫「甄長樂」的名字，在她永遠不會被允許踏足的頂環某處，呼吸，說話，也許正在某場晚宴上舉杯。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"604:1-604:131;18535-18665\">母親的另一部分——那個曾經在冬夜裡替沈砂編頭髮、替沈鴉縫補破舊制服的女人身上，最私密、最不屬於任何模板的那一部分——已經被拆開、編碼、送回了根層，此刻可能正躺在某戶她完全不認識的人家裡，是一個不知道自己是誰的嬰兒，或者，已經是一個蹣跚學步、開始咿呀學語的孩子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"606:1-606:67;18667-18733\">那個孩子不會記得沈鴉。不會記得沈砂。不會記得那罐輕得不像一個成年人的骨灰，是怎麼被鄭重其事地供在鏽溝那張破舊的桌子上，供了整整七年。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"608:1-608:37;18735-18771\">沈鴉忽然發現，自己竟分不清楚，這比「母親死了」，究竟是更好，還是更殘忍。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"610:1-610:12;18773-18784\">死了，至少有一個終點。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"612:1-612:138;18786-18923\">而現在，母親變成了兩半，一半被鎖在她碰不到的高處，一半被打散撒進她伸手可及、卻永遠認不出來的人群裡——沈鴉忽然意識到，她這六年，作為記憶獵人，走過根層無數條巷弄，替無數個垂死的陌生人收下最後一段記憶，那些人裡，會不會早就有誰，其實是母親散落的一部分，只是連對方自己都不知道？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"614:1-614:100;18925-19024\">白色艙室裡的低頻運轉聲，此刻聽在她耳中，忽然多了一層她先前沒能察覺的意味——那不再只是冰冷的機械噪音，而像是某種巨大生物，持續不斷、永不停歇的呼吸聲，吞吐著一代又一代，被送進來、又被拆解出去的人生。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"616:1-616:223;19026-19248\">她想起自己這六年，堅持的那條「規矩二」——收單前，一定要先叫出對方的名字，而不是編號。她一直以為，自己堅持這條規矩，只是單純不忍心，讓一個活了一輩子的人，在生命最後，被簡化成一串冰冷的資產編號。此刻她才驚覺，自己心底或許一直藏著一個連自己都沒有承認過的念頭——如果母親的某一部分，真的以另一種身分，活在這座城市的某個角落，那麼，每一次她鄭重其事地叫出一個陌生人的名字，某種意義上，都是在替自己，尋找一個不敢說出口的可能性：也許，這一次，就是她。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"618:1-618:68;19250-19317\">這個念頭，此刻終於被證實般地，狠狠撞進她心裡——原來自己這六年的堅持，從來不只是一份職業道德，也是一場她自己都沒有察覺的、漫長的尋找。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"620:1-620:26;19319-19344\">「鴉。」耳機裡傳來柯敖的聲音，很輕，「妳看到了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"622:1-622:5;19346-19350\">「嗯。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"624:1-624:8;19352-19359\">「我很抱歉。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"626:1-626:52;19361-19412\">「不是你的錯。」沈鴉聽見自己說出跟先前一樣的話，聲音卻比先前更輕，「柯敖，我需要你老實告訴我一件事。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"628:1-628:6;19414-19419\">「妳說。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"630:1-630:73;19421-19493\">「你當年在控制室，親眼看著被歸環的那個人……」她停頓了一下，第一次，主動把柯敖沒說完的那句話接了下去，「後來，你有沒有去找過，被下放的那一半？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"632:1-632:24;19495-19518\">耳機那頭沉默了很久，久到沈鴉幾乎以為訊號斷了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"634:1-634:118;19520-19637\">「找了十五年。」柯敖終於說，聲音裡帶著她從未聽過的疲憊，「鴉，先撤離，這裡不安全，我剛剛偵測到這層樓的巡邏頻率忽然提高了——不是針對妳，看起來像是全塔加強戒備，但妳現在多待一秒都是風險。撤離之後，我把我知道的，一次講完，不再留一半。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskm012b3tf8",
          "title": "第十五章",
          "subtitle": "十五年的檔案",
          "blocks": [
            {
              "id": "msskm012svv4u",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"640:1-640:66;19660-19725\">沈鴉撤離後，柯敖沒有立刻開口。他先把靜電酒館的門閂上，把白噪音干擾器調到最大功率，然後從吧檯底下，搬出一個她從沒見過的老舊保險箱。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"642:1-642:92;19727-19818\">保險箱裡，是一疊疊按年份分類的紙本檔案，還有幾十枚標了號碼的記憶晶球——不是委託單，是柯敖自己這十五年，一點一點蒐集、比對、篩選出來的東西：根層每一年新登記的新生兒神經活性掃描報告。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"644:1-644:122;19820-19941\">「她叫顏未。」柯敖的聲音很輕，像是這個名字很久沒有被他自己說出口過，怕一開口就會碎掉，「我們在集團裡認識，她是神經介面部的研究員，比我還相信『意識延續計畫』能造福人類。我們談了三年戀愛，她第一個孩子的預產期，是她最後一次跟我提起的未來計畫。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"646:1-646:7;19943-19949\">「後來呢？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"648:1-648:165;19951-20115\">「後來她被診斷出一種很罕見的、跟我一樣的免疫排斥反應，她的義體系統急需更換一整組神經接口，費用高到我們兩個加起來的積蓄都不夠付。」柯敖的手指撫過那疊紙本檔案的邊緣，動作輕得像是怕驚動什麼，「集團那時候剛好在推一項『內部員工優先續存方案』，說是能豁免她的醫療費用，只要她通過評估。她瞞著我報了名。等我發現的時候，評估已經通過了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"650:1-650:10;20117-20126\">「你去找過她嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"652:1-652:133;20128-20260\">「我在控制室外面站了一整夜，求他們讓我見她最後一面。」柯敖的聲音第一次出現了裂痕，「他們讓我進去了——因為我當時是技術員，有基礎權限。我看見她躺在艙裡，很安詳，像睡著了一樣。我不知道那時候的自己，是應該慶幸她看起來不痛苦，還是應該恨自己，為什麼沒有早一點阻止她。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"654:1-654:9;20262-20270\">「離開之後呢？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"656:1-656:134;20272-20405\">「三個月後，我開始明白『歸環』不是結束，」柯敖抬起頭，那雙老舊的義眼裡，映著地窖投影般的微光，「我開始去查那一年、那個月，根層每一戶新登記的新生兒。我告訴自己，如果殘餘意識真的會被拆分下放，那顏未的一部分，理論上就在這座城市的某個地方，正在重新學走路，重新學說話。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"658:1-658:8;20407-20414\">「找到了嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"660:1-660:156;20416-20571\">柯敖搖搖頭：「我比對了將近四百個孩子的神經活性報告，找到過七、八個『相容係數』特別接近的，我去看過他們，遠遠地看，我不敢靠近，怕自己認錯了人，也怕自己萬一認對了，卻改變不了任何事——那孩子已經是別人家的孩子了，有自己的爸媽，自己的名字，自己的人生。我能做的，最多只是遠遠看一眼，然後回家，繼續過我自己的日子。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"662:1-662:16;20573-20588\">他把那疊檔案輕輕推到沈鴉面前。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"664:1-664:135;20590-20724\">「我告訴妳這些，不是要妳也去做同樣的事。」他說，「是要提醒妳——鴉，等妳知道全部真相之後，妳會有一種衝動，想要去找。我要妳現在就想清楚，如果找到了，妳打算怎麼辦。因為十五年前的我，沒有想清楚這個問題，所以這十五年，我等於是把自己也活成了另一種被卡住、循環不了的東西。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"666:1-666:26;20726-20751\">沈鴉看著那疊紙本檔案，看了很久，最終沒有伸手去碰。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"668:1-668:32;20753-20784\">「我現在只想救砂砂。」她說，「剩下的事，我會想，但不是現在。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"670:1-670:42;20786-20827\">沈鴉忽然想起一件事：「柯敖，你這十五年，一個人扛著這些，白釜跟老桐，他們知道嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"672:1-672:213;20829-21041\">柯敖苦笑了一下：「白釜是我少數幾個，敢讓他看過部分檔案的人——他二十年前開始經營那個地下網路的時候，我們算是不打不相識，他曾經想從我這裡買一些『相容篩選』的內部資料，被我一頓臭罵，罵完之後，我們反而成了會互通有無的同路人。至於老桐……他的地窖，是我這十五年來，唯一敢真正把整套檔案帶去，讓他幫我一起比對的地方。這幾個人，加上我，大概是這座城市裡，少數幾個，明明各自守著見不得光的秘密，卻還願意在深夜，替彼此留一盞燈的怪人。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"674:1-674:51;21043-21093\">「所以你們三個，」沈鴉忍不住笑了一下，這幾天以來，難得的、真正放鬆的一次，「其實是一個地下互助會。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"676:1-676:130;21095-21224\">「別說得這麼高尚，」柯敖也跟著笑了，「說白了，就是三個各自帶著傷、又不甘心把傷口爛在心裡的老男人，湊在一起取暖。妳跟砂砂的出現，某種意義上，是把我們三個，逼著往前走了一步——以前我們頂多是互相搜集資料、互相取暖，沒有一個人，真正有勇氣，把這些東西，往外推。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"678:1-678:93;21226-21318\">柯敖點點頭，把檔案收回保險箱，像是收好一件終於能暫時放下的重物——動作卻比平常更慢，更輕，彷彿這個保險箱裡裝著的，不只是紙本檔案，還是他這十五年來，唯一還能觸摸到的，跟顏未有關的一切。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"680:1-680:123;21320-21442\">他沒有告訴沈鴉的是，就在他們說話的同時，酒館外那盞路燈附近，那個他前幾天就注意到、停留時間過長的巡邏機甲，已經悄悄換成了一名便衣稽核員——祝任遠不喜歡動用機甲打草驚蛇，他更習慣讓一個活人，安靜地站在陰影裡，記下誰進了這扇門，又是什麼時候離開的。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskmijoivkrn",
          "title": "第十六章",
          "subtitle": "空白的七天",
          "blocks": [
            {
              "id": "msskmijogx15a",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"686:1-686:97;21464-21560\">祝任遠這幾天查案查得心浮氣躁，難得地在下班後，繞去了中環邊界一處早已廢棄的舊居民區——那裡如今只剩下斷壁殘垣與野生的攀藤植物，官方地圖上，這片區域被標註為「待重建用地」，已經待重建了二十幾年。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"688:1-688:23;21562-21584\">他每年都會來這裡一兩次，一個人，不帶任何人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"690:1-690:193;21586-21778\">三十年前，他還是個孩子的時候，就住在這裡。那年，配水系統的一次臨時故障，沒有被及時上報——負責那個轄區的技術員圖省事，把警報壓了下來，想著自己修好就沒事了，結果故障範圍比預想的大得多，缺水引發了搶水的騷亂，騷亂又滋生了一場來勢洶洶的瘟疫，整整七天，這片區域的秩序徹底崩潰，沒有救援，沒有紀錄，甚至連死亡人數，都沒有一個官方數字——因為那七天裡，連負責統計的行政系統本身，都已經癱瘓了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"692:1-692:19;21780-21798\">祝任遠的母親與弟弟，就死在那七天裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"694:1-694:76;21800-21875\">他至今不知道具體是哪一天，不知道他們是怎麼死的——是缺水、是瘟疫、還是騷亂中的踩踏，他問過所有能問的人，翻遍了所有能翻的檔案，得到的，永遠是一片空白。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"696:1-696:44;21877-21920\">他蹲在瓦礫堆裡，指尖拂過一塊早已風化的舊門牌殘片，殘片上，還能依稀辨認出半個「祝」字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"698:1-698:176;21922-22097\">他十六歲那年，主動申請加入了恆憶集團的資產稽核體系，從最基層的帳務核對員做起，一路做到今天這個位置。旁人只當他是個死板的規則主義者，卻很少有人知道，他信奉「紀錄」與「秩序」的理由，並不是因為他相信這座城市天生就是美好的，而是因為他太清楚，一旦紀錄消失、秩序崩潰，會發生什麼——會發生一整片區域，七天之內，什麼都沒有留下，連一個確切的死亡日期都留不下。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"700:1-700:89;22099-22187\">這些年，他審核過無數筆「資產異常」，拆穿過無數樁刻意隱瞞的債務詐領案，他告訴自己，自己做的每一件事，都是在替像他母親、弟弟那樣的人，把本該存在、卻被抹去的紀錄，一筆一筆補回來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"702:1-702:25;22189-22213\">直到最近這幾週，他開始查一個叫「鴉」的記憶獵人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"704:1-704:168;22215-22382\">一開始，他只當她是又一樁需要立案的個案——一個懷有私心、破壞規則的異常份子。但隨著調查深入，他調閱的資料越來越多，那些散落在不同部門、彼此互不相通的舊檔案碎片，一點一點拼湊出一個他自己也開始感到心驚的輪廓——「名籍續存」、「原環會」，這些他過去十幾年在集團體制內，從未被允許接觸過的詞彙，正一次又一次，出現在他不得不深入追查的路徑上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"706:1-706:141;22384-22524\">他忽然生出一個他不願意承認、卻揮之不去的念頭：如果這座他窮盡半生守護的「秩序」，本身就是建立在一場更巨大、更漫長、被精心掩蓋的混亂之上——如果他母親與弟弟的那七天空白，跟眼前這個女人正在追查的東西，本質上，是同一種「被消失的紀錄」，只是規模與掩蓋的手法，更加精密、更加堂而皇之——</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"708:1-708:41;22526-22566\">那他這些年信奉的秩序，究竟是在防止混亂，還是，本身就是另一種更大、更沉默的混亂？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"710:1-710:179;22568-22746\">他離開前，把那塊殘留著半個「祝」字的門牌殘片，小心地放進口袋——這是他每次來這裡，都會做的事，帶回去，擦拭乾淨，放進辦公桌抽屜最深處，跟其他幾十塊，這些年陸續撿回來的、屬於這片廢墟的碎片，放在一起。他從未跟任何人提過這個習慣，只在心裡，把它當作一種私密的、對抗遺忘的儀式——如果連他自己，都不肯好好記住這片空白，那還有誰，會替他的母親與弟弟，留下一點痕跡？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"712:1-712:75;22748-22822\">祝任遠在瓦礫堆裡站了很久，直到天色徹底暗下來，才轉身離開。他沒有把這份動搖，寫進任何一份報告裡——他還沒準備好，面對這個問題的答案，不管答案是什麼。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskmvxiftn2t",
          "title": "第十七章",
          "subtitle": "殘響清理前夕",
          "blocks": [
            {
              "id": "msskmvxivb6pq",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"718:1-718:15;22845-22859\">甄長樂這幾週，睡得很不安穩。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"720:1-720:107;22861-22967\">她的私人醫療團隊，已經是第三次，在她「療程」前的例行檢查裡，發現她的神經穩定指數，出現異常波動——那段揮之不去的、跑調的旋律，還有偶爾閃過的、屬於兩個孩子笑聲的破碎片段，正以一種醫療團隊無法解釋的頻率，反覆浮現。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"722:1-722:66;22969-23034\">「議員，我們建議提前安排下一次殘響清理，」主治醫師這樣建議過，「殘留的舊神經紋理，如果放任不管，可能會影響您在議會的判斷穩定性。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"724:1-724:62;23036-23097\">甄長樂每一次，都點頭答應，卻在私底下，一次又一次，讓自己在深夜，獨自反覆哼唱那段旋律，像是既想擺脫它，又捨不得徹底忘記它。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"726:1-726:155;23099-23253\">她不記得自己「續存」之前的任何事——依照協議，那部分記憶，早在她「成為」甄長樂的那一刻，就被系統性地清空過——但這幾個月，她開始隱約明白，自己身體裡，藏著一段不屬於「甄長樂」這個名字、卻無比真實的過去。她開始悄悄留意頂環之外的世界，開始在深夜，透過她本不該擁有的權限，調閱一些關於「續存」流程的原始技術文件。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"728:1-728:93;23255-23347\">她讀到那些冷冰冰的官僚術語時，第一次感覺到一種近乎眩暈的荒謬——「昇華」這個她過去七年來，用來說服自己、也用來說服旁人的詞，此刻讀起來，像是一種精心設計、用來掩蓋某種更醜陋真相的修辭。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"730:1-730:143;23349-23491\">她不知道自己該怎麼辦。她已經在這個位置上，活了七年，她的言行、決策，甚至她治理夜隅某些角落的政策方向，都已經是「甄長樂」這個名字的一部分——如果有一天，她選擇正面對抗這套系統，她要面對的，不只是外部的敵人，還有她自己內心深處，那個已經漸漸習慣了、甚至開始依戀這具身分與這份權力的自己。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"732:1-732:138;23493-23630\">她開始，在深夜無人的時候，練習著把那段旋律，完整地哼出來——起初斷斷續續，後來，竟漸漸哼出了一個相對完整的調子。她不知道這麼做的意義是什麼，只知道，每次哼完，胸口那股說不清道不明的鬱悶，都會稍微鬆動一些，像是在替一個她從未謀面、卻真實存在過的人，做著某種遲來的、笨拙的悼念。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"734:1-734:50;23632-23681\">她只能告訴自己，如果哪一天，那段旋律的真正主人，真的出現在她面前，她會試著，做一個不再逃避的選擇。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"736:1-736:20;23683-23702\">她不知道，那一天，比她想像的更快到來。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskn7ydypjuu",
          "title": "第十八章",
          "subtitle": "酒會上的一首搖籃曲",
          "blocks": [
            {
              "id": "msskn7ydpeq3t",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"742:1-742:164;23728-23891\">四天後，沈鴉再次以臨時服務生的身分，混進了永生塔第八十九層的一場酒會。這一次的目標不是取證，是確認一件事——柯敖從老桐的舊磁條裡，拼湊出一個猜測：「續存目標名籍」的持有者，會定期接受一種內部稱為「殘響清理」的療程，用來壓制舊神經紋理殘留造成的不穩定反應。而根據集團內部行程表，甄長樂下週的療程，恰好安排在沈砂評估日期的前一天。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"744:1-744:15;23893-23907\">沈鴉需要弄清楚，這代表什麼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"746:1-746:79;23909-23987\">她沒料到的是，這場酒會的現場安保，這次臨時換了人——資產稽核隊近來因為連續兩起「非登記人員入侵」事件，被派來加強頂環重要場合的人員排查，帶隊的，正是祝任遠。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"748:1-748:145;23989-24133\">沈鴉端著托盤穿過大廳的時候，遠遠看見一個穿著深灰色制服、身形挺拔的男人，正站在入口處，逐一核對每一位工作人員的登記照片與臉部特徵。她的腳步沒有絲毫遲疑地拐進側廊——刻意繞遠路，避開那道核對的視線——但她知道，托盤上的假身分證件，只能通過遠距離的粗略掃描，禁不起近距離、有經驗的人親眼比對。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"750:1-750:79;24135-24213\">甄長樂站在酒會一角，手裡端著一杯沒怎麼喝的酒，目光有些渙散，像是心不在焉。沈鴉端著托盤經過她身邊時，聽見她嘴裡無意識地哼著一小段旋律，斷斷續續，跑調得厲害。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"752:1-752:11;24215-24225\">那段旋律，沈鴉聽過。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"754:1-754:22;24227-24248\">是母親哄她們姊妹睡覺時，常哼的那首搖籃曲。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"756:1-756:116;24250-24365\">沈鴉的腳步幾乎停不住，她低頭調整托盤，借機在原地多停留了兩秒——甄長樂似乎完全沒有意識到自己在哼什麼，直到一名助理匆匆走近，低聲提醒她「療程前情緒需要保持穩定，議員」，她才像是被驚醒一般，猛地停住，端起酒一飲而盡，動作僵硬得刻意。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"758:1-758:94;24367-24460\">就在這時，沈鴉的耳機裡，柯敖的聲音忽然壓低到近乎耳語：「鴉，稽核隊那個帶隊的，正朝妳的方向走過來，他剛剛調閱了今晚所有臨時服務生的排班表，妳的假名字不在原始名單裡——他可能已經發現了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"760:1-760:98;24462-24559\">沈鴉的心跳猛地一沉。她沒有回頭去看，只是不動聲色地往側廊的服務走道移動，腳步維持著服務生該有的從容——但餘光裡，那個深灰色制服的身影，正以一種不疾不徐、卻毫無偏移的方向感，朝著她所在的方向靠近。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"762:1-762:25;24561-24585\">「側廊盡頭有一道通往廚房的門，走那裡。」柯敖說。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"764:1-764:80;24587-24666\">沈鴉推開那道門的瞬間，聽見身後不遠處，祝任遠的聲音，平靜地對著身邊的隨員說了一句：「去查一下側廊監視器，剛才那名服務生的步態，跟名單上登記的體態數據對不上。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"766:1-766:75;24668-24742\">她沒有再回頭，一頭鑽進廚房後方堆滿餐車的儲藏走廊，扯掉頭上的服務生髮帽，翻過一道低矮的物流窗口，滾進了一條她昨天勘察路線時，特意記下的緊急排水管道。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"768:1-768:121;24744-24864\">管道裡漆黑一片，她能聽見自己粗重的呼吸聲，還有頭頂上方，隱約傳來的、逐漸逼近又逐漸遠去的腳步聲——祝任遠沒有立刻追進來，他站在儲藏走廊入口，安靜地看了很久，才轉身離開，像是在權衡值不值得為了一個身分存疑的臨時服務生，打亂整場酒會的安保部署。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"770:1-770:59;24866-24924\">沈鴉靠在冰冷的管壁上，很久沒有動。這是她第一次，真切地感覺到，有一個具體的、有名有姓的人，正一步一步，靠近她的軌跡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"772:1-772:68;24926-24993\">她不知道，此刻的祝任遠，站在儲藏走廊的陰影裡，指尖夾著一枚從地上撿起來的、假服務生髮帽上脫落的細小纖維，正將它小心地收進一個證物袋裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"774:1-774:162;24995-25156\">他捏著那枚證物袋，站在原地，久久沒有下令繼續追查。今晚這個女人逃跑時的狼狽與決絕，讓他想起自己十六歲那年，第一次走進資產稽核隊面試辦公室時，同樣孤注一擲的眼神——那時候的他，也是憑著一股類似的、走投無路的執拗，才擠進了這個他自認能替家人討回公道的體系。他不明白，為什麼同樣的執拗，會把兩個人，逼到今天這樣針鋒相對的位置上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"776:1-776:59;25158-25216\">他把證物袋，收進了口袋最深處，沒有立刻交去化驗——這是他從業十二年來，第一次，對一份本該立刻處理的證據，生出了猶豫。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssknna758a9p",
          "title": "第十九章",
          "subtitle": "她也在名單上",
          "blocks": [
            {
              "id": "mssknna71qbfk",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"782:1-782:33;25239-25271\">沈鴉在管道裡連滾帶爬地撤退時，柯敖的聲音忽然急促地在耳機裡響起。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"784:1-784:16;25273-25288\">「鴉，先別走原路，聽我說完。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"786:1-786:17;25290-25306\">「怎麼了？」她壓低聲音，喘著氣。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"788:1-788:98;25308-25405\">「我剛剛駭進了他們今天的內部排程更新——是為了確認甄長樂療程的時間有沒有異動，結果順便看到一條交叉比對警示。」柯敖的聲音有一絲不自然的停頓，「鴉……妳七年前，是不是也做過一次『常規健康檢查』？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"790:1-790:60;25407-25466\">沈鴉的腳步在管道裡的一處彎折處猛地頓住，身後隱約傳來搜索人員的腳步聲，她不得不繼續往前爬，一邊爬，一邊聽柯敖把話說完。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"792:1-792:39;25468-25506\">「做過，」她喘著氣說，「母親走之前那半年，集團說是義體維生系統的例行檢測。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"794:1-794:97;25508-25604\">「那不是例行檢測，」柯敖說，「那是同一批相容篩選。鴉，妳跟沈曉茉是直系血親，神經結構相容係數天生偏高——妳、砂砂，妳們兩個，一直都在這份名單上，只是那一輪，母親的樣本先被選中，才輪不到妳們。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"796:1-796:53;25606-25658\">管道盡頭透出一絲微光，沈鴉終於爬到出口，滾落進酒館後方一條無人的巷弄裡，渾身濕透，分不清是雨水還是冷汗。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"798:1-798:33;25660-25692\">如果不是母親替她們擋下了那一次，被送進白色艙室裡的，會不會是她？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"800:1-800:55;25694-25748\">如果七年前輪到的是她自己，她此刻會不會，正撐著某個名籍，在某場酒會上，無意識地哼著一段自己都認不出來的旋律？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"802:1-802:69;25750-25818\">她沒有時間細想這個問題——遠處傳來搜索隊伍的呼喊，她把所有情緒重新摁回身體最深處，撐起發軟的膝蓋，朝著相反方向，深一腳淺一腳地奔進雨裡。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssko2jje8a56",
          "title": "第二十章",
          "subtitle": "霓生知道的比她說的多",
          "blocks": [
            {
              "id": "mssko2jjx3mdy",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"808:1-808:33;25845-25877\">沈砂是在評估通知信寄來的第三天，終於忍不住，把整件事告訴了霓生。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"810:1-810:44;25879-25922\">「所以……妳一直在等我自己發現？」沈砂坐在代寫攤的板凳上，聲音裡帶著一絲被隱瞞的委屈。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"812:1-812:110;25924-26033\">「我不確定，」霓生低下頭，聲音很輕，「我只是那天在公佈欄看到跟妳同姓氏的通知信副本，不敢肯定是不是妳，也不知道該怎麼開口——如果我猜錯了，隨口一問，反而會嚇到妳；如果我猜對了，我又怕自己說出口，會讓這件事變得太真實。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"814:1-814:35;26035-26069\">「妳哥哥的事，也是這樣嗎？」沈砂輕聲問，「太真實了，反而不敢面對？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"816:1-816:24;26071-26094\">霓生的手指停在正在整理的紙筆上，沒有立刻回答。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"818:1-818:101;26096-26196\">「我這兩年，寫過上百封信，」她終於說，「每一封都是別人的告別，我以為自己早就習慣了。但輪到自己哥哥的事，我發現我一次都沒有真正面對過——我甚至沒有勇氣，去查一下他的名字，會不會出現在任何一份紀錄裡。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"820:1-820:12;26198-26209\">「那妳現在，想查嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"822:1-822:53;26211-26263\">霓生抬起頭，看著沈砂——十七歲的少女，這幾天經歷的事情，已經讓她的眼神，多了一種同齡人少有的沉重與堅定。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"824:1-824:62;26265-26326\">「如果妳姊姊真的把這件事捅出來，」霓生的聲音裡，第一次帶上了一絲連她自己都感到意外的期待，「也許有一天，我真的敢去查了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"826:1-826:13;26328-26340\">沈砂伸手，握住了她的手。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"828:1-828:60;26342-26401\">「不管結果怎麼樣，」她說，「我陪妳一起查。就像妳這兩年，陪著那麼多人，寫完他們沒能說完的話一樣——這次，換我們陪妳。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"830:1-830:63;26403-26465\">兩個十七歲的少女，在代寫攤那盞昏黃的燈下，維持著這個簡單的約定，誰都沒有再多說什麼，卻都在心裡，把這句承諾，鄭重地記了下來。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskoc8yaqqy9",
          "title": "第二十一章",
          "subtitle": "地窖裡的三十秒",
          "blocks": [
            {
              "id": "msskoc8y6rr6r",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"836:1-836:28;26490-26517\">老桐是靠著機械貓的警示鈴聲，才提前七秒察覺到不對勁的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"838:1-838:136;26519-26654\">那七秒，他做了三件事——把最重要的一批磁條，塞進牆縫裡一個偽裝成排水管接口的暗格；按下地窖深處那台老舊讀取機的自毀開關，讓它在強行破門的衝擊下短路報廢，帶走一部分無法搶救的機密；最後，抓起手邊唯一能當武器的東西——一支用來撥弄磁條的長柄鑷子——擋在那個藏著暗格的牆面前。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"840:1-840:31;26656-26686\">破門而入的稽核隊員，動作很快，幾乎是瞬間就控制住了整個地窖。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"842:1-842:16;26688-26703\">「東西呢？」帶隊的隊員厲聲問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"844:1-844:55;26705-26759\">「什麼東西？」老桐維持著一貫的、慢吞吞的語氣，「我一個瞎眼老頭，靠養貓、賣廢鐵零件過日子，你們找錯地方了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"846:1-846:36;26761-26796\">「別裝了，我們掌握到，這裡跟一個叫柯敖的黑名單人員，有頻繁往來紀錄。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"848:1-848:125;26798-26922\">老桐沒有再狡辯，只是不動聲色地把身體，更往那道牆面靠近了一些。稽核隊員開始翻箱倒櫃，鐵櫃被強行撬開，散落一地的磁條，被踩得咯吱作響——他們顯然沒有找到暗格的位置，抓起能拿到的東西，胡亂用一種攜帶式的灼燒裝置，銷毀著眼前一切看起來像是「證據」的物件。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"850:1-850:83;26924-27006\">老桐的機械貓，其中三隻，在這片混亂裡，捨身撲向了正在瞄準暗格方向搜索的一名隊員的腿部，用僅存的機械動能，纏鬥、拖延——那三隻貓，最終都被一腳踹得七零八落，散架在地。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"852:1-852:53;27008-27060\">一名隊員的靴子，重重踩在老桐的太陽穴附近，他一個踉蹌，額頭撞上鐵櫃的邊角，血瞬間流了出來，眼前一陣發黑。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"854:1-854:65;27062-27126\">「隊裡的通訊剛才截獲一組異常訊號，好像有人在往這裡靠近。」另一名隊員忽然說，「先撤，這裡能拿的都拿了，剩下的燒了就走，別戀戰。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"856:1-856:56;27128-27183\">隊伍匆忙撤離的腳步聲，逐漸遠去。老桐倒在滿地狼藉裡，意識模糊地聽見遠處，柯敖與沈鴉焦急的呼喊聲，正一步步靠近。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskoodamwkkz",
          "title": "第二十二章",
          "subtitle": "地窖突襲",
          "blocks": [
            {
              "id": "msskoodajasa1",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"862:1-862:43;27205-27247\">三天後，沈鴉還沒來得及消化酒會那夜的驚險，柯敖的緊急通訊，就把她從短暫的睡眠裡驚醒。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"864:1-864:101;27249-27349\">「鴉，老桐那裡出事了，是因為我。」柯敖的聲音裡，帶著她從未聽過的自責，「稽核隊肯定是循著我的行蹤，摸到了地窖的位置——我這十五年，一直以為自己夠小心，原來還是，把身邊在乎的人，一個一個，往危險裡拖。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"866:1-866:157;27351-27507\">她趕到舊七街地下三層的時候，遠遠就看見地窖入口的鐵板被硬生生撬開了一角，冒著焦黑的煙。她心臟一沉，鑽進去時，看見的是一片狼藉——鐵櫃被強行破壞，散落一地的磁條有一半已經被踩碎，或是被某種灼燒裝置燒得捲曲變形；老桐倒在角落，額頭上一道傷口正滲著血，幾隻機械貓殘破地攤在他身邊，顯然是為了拖延時間，被硬生生犧牲掉的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"868:1-868:6;27509-27514\">「老桐！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"870:1-870:90;27516-27605\">「我沒事……」老桐虛弱地擺擺手，聲音沙啞，「他們來得很快，看樣子是循著柯敖的名字查過來的——鴉，別管我，先看看還能搶救多少東西，他們沒有全部拿走，好像是聽到什麼動靜，提前撤了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"872:1-872:45;27607-27651\">沈鴉這才注意到，地窖深處那道逃生通道口，還殘留著新鮮的腳印與一小截扯斷的深灰色制服布料。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"874:1-874:120;27653-27772\">她蹲下身，在滿地狼藉的磁條殘片裡，一片一片翻找——大部分已經毀損到讀取機都認不出訊號，只有零星幾片，邊角燒焦，內容卻僥倖沒有完全燬損。她把能找到的殘片，一片一片塞進隨身的防水袋，動作又急又亂，手指被碎裂的磁條邊緣割出好幾道血口，渾然不覺。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"876:1-876:35;27774-27808\">「柯敖，叫醫療站的人來，快！」她扶著老桐，聲音因為憤怒與恐懼而發顫。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"878:1-878:101;27810-27910\">那天夜裡，在柯敖臨時包紮好老桐傷口的靜電酒館後房，沈鴉把搶救回來的殘破磁條，一片一片接上老桐帶來的備用讀取機，跟意識還有些模糊的老桐一起，在時間與資訊都殘缺不全的壓力下，一句一句、一個字一個字地拼湊。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"880:1-880:89;27912-28000\">「這裡……」老桐的手指顫抖著劃過投影裡斷續的文字，「『原環會章程・第一條』……後面斷了……『凡經確認為初創血脈之神經模板，永久列冊，循環續存』……鴉，這句話還算完整，記下來。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"882:1-882:59;28002-28060\"><strong>「原環會章程・第一條：凡經確認為『初創血脈』之神經模板，永久列冊，循環續存，不受任何後續行政體系更迭影響。」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"884:1-884:104;28062-28165\">「還有這一段……」老桐的聲音越來越虛弱，卻仍然堅持一個字一個字地辨認，「『夜隅建城紀年，實為……』後面的字被燒得太模糊了……『第……代包裝，非獨立起始』……鴉，這個數字妳看得出來嗎？我的手指現在抖得厲害。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"886:1-886:30;28167-28196\">沈鴉湊近投影，瞇著眼，一筆一劃地辨認那個被燒得殘缺的數字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"888:1-888:28;28198-28225\">「第七。」她終於說，聲音有些發乾，「『第七代包裝』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"890:1-890:13;28227-28239\">酒館外遠處傳來一聲悶雷。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"892:1-892:154;28241-28394\">「妳知道恆憶集團官方史怎麼寫建城年份的嗎？」老桐撐著虛弱的身體，繼續說下去，像是不把這件事講完，今晚的傷就白受了，「他們說，夜隅是在『大潮』之後，由倖存者共同建立的新城。但如果『原環會』——這份章程裡提到的組織——存在的時間，遠比『大潮之後』要早，如果這套循環系統，已經套用過『第七代』不同的城市外殼……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"894:1-894:67;28396-28462\">「那『階級』根本就不是這座城市與生俱來的自然狀態。」沈鴉替他接了下去，聲音很輕，卻異常清晰，「是一套被精心維護了不知道多少代的……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"896:1-896:18;28464-28481\">「養殖場。」老桐輕聲說出了那個字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"898:1-898:99;28483-28581\">沈鴉沒有反駁，只是把那幾片搶救回來的磁條殘片，緊緊攥在手心——那上面沾著老桐的血，也沾著她自己指尖的血，這份真相，這一次，不是誰平靜地讀給她聽的，是她自己，跪在滿地狼藉裡，一片一片，親手搶回來的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"900:1-900:52;28583-28634\">柯敖坐在一旁，看著老桐纏著繃帶的額頭，一直沒能說出一句完整的道歉——直到老桐主動開口，打破了他的沉默。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"902:1-902:159;28636-28794\">「柯敖，別把這件事，全扛在自己身上。」老桐的聲音雖然虛弱，語氣卻異常篤定，「我這輩子，早就做好了，隨時可能為了這些磁條，付出代價的準備。四十年前，我開始偷偷留這些東西的時候，就已經想清楚了——有些事情，總得有人先冒險去做，才會有後來的人，能站在更安全的地方，把它做完。你，還有鴉，就是我一直在等的那個『後來的人』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"904:1-904:7;28796-28802\">「可是——」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"906:1-906:71;28804-28874\">「沒有可是，」老桐打斷他，「我這條命，能用來換一點真相，值。你要是繼續把自己困在『都是我的錯』這種念頭裡，反而是浪費了我今天挨的這一頓打。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"908:1-908:148;28876-29023\">柯敖看著他，眼眶終於忍不住紅了，重重地點了點頭——這是他認識老桐這麼多年，第一次，真正把心裡那份沉甸甸的愧疚，放下了一半。他忽然想起，十五年前，他也曾對自己說過類似的話，卻始終沒能真正說服自己相信；此刻，聽著一個比他吃過更多苦頭的老人，用同樣的話，反過來安慰他，那份說服力，忽然變得不太一樣了。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskp1zl9rgc0",
          "title": "第二十三章",
          "subtitle": "根三區，七歲",
          "blocks": [
            {
              "id": "msskp1zly3kxr",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"914:1-914:79;29047-29125\">沈鴉沒有告訴柯敖，也沒有告訴沈砂，她在離沈砂評估日期只剩三天的那個下午，獨自去查了一件事——七年前，母親「歿」的那個月份前後，根三區新登記在冊的新生兒名單。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"916:1-916:60;29127-29186\">她想起柯敖說過的話，想起那疊他花了十五年、始終沒能真正靠近的檔案，她告訴自己，只是去確認，不是去尋找，確認完就會停手。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"918:1-918:19;29188-29206\">她比對到三個「相容係數」偏高的孩子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"920:1-920:60;29208-29267\">第一個，是根三區一戶麵攤老闆的女兒，七歲，此刻正蹲在攤子邊，笨拙地學著擀麵皮，手上沾滿麵粉，笑起來有一顆缺了角的門牙。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"922:1-922:96;29269-29364\">沈鴉站在麵攤對街，看了很久很久。那孩子的眉眼弧度，笑起來時嘴角揚起的角度，跟母親、跟沈砂，都有幾分相似——但那種相似，也可能只是她自己太想看見，才硬生生從一張陌生孩子的臉上，拼湊出來的幻覺。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"924:1-924:7;29366-29372\">她沒有走近。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"926:1-926:44;29374-29417\">她想起柯敖說的：「那孩子已經是別人家的孩子了，有自己的爸媽，自己的名字，自己的人生。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"928:1-928:141;29419-29559\">如果她走過去，蹲下來，看著那孩子的眼睛，會發生什麼？那孩子不會認得她。那孩子的「媽媽」——麵攤老闆的妻子——此刻正在攤子後面忙碌地招呼客人，那是那孩子唯一認得、唯一會喊「媽媽」的人。沈鴉如果貿然介入，改變的不會是母親的命運，只會是徹底打亂另一個原本完整、原本不知道自己身世的家庭。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"930:1-930:45;29561-29605\">她站在雨裡，站到那家麵攤打烊，站到那孩子被牽著手，蹦蹦跳跳地走進巷子深處，消失在暮色裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"932:1-932:20;29607-29626\">然後，她轉身，朝著相反的方向走回鏽溝。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"934:1-934:79;29628-29706\">她終於明白柯敖那句「等妳知道全部真相之後，妳會有一種衝動」是什麼意思，也終於明白，他花十五年才想通、卻始終沒能真正放下的那個問題，答案原來如此殘忍地簡單——</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"936:1-936:9;29708-29716\">找到了，又如何？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"938:1-938:109;29718-29826\">母親不會因此回來。那個孩子不會因此多一個姊姊。唯一會改變的，只是沈鴉自己心裡，那個一直渴望有一個「終點」可以停靠的地方，暫時得到一點虛假的安慰，而代價，是一整個原本無辜的家庭，被迫捲入一場她根本無法解釋清楚的真相裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"940:1-940:64;29828-29891\">她把那個念頭，連同麵攤女孩缺角的門牙、笑起來的角度，一起，鎖進了自己心裡最深、最少去打開的那個房間，跟母親的骨灰罐放在同一層。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"942:1-942:20;29893-29912\">她告訴自己，這是最後一次去查這種名單。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"944:1-944:18;29914-29931\">她知道，這句話，她大概率不會遵守。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskpl7o1g6rh",
          "title": "第二十四章",
          "subtitle": "指尖讀出的字",
          "blocks": [
            {
              "id": "msskpl7o8o84a",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"950:1-950:53;29955-30007\">老桐傷勢初步穩定之後，堅持不肯乖乖靜養，反而把沈鴉叫到床邊，教她怎麼用指尖，辨認磁條上最基本的紋路編碼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"952:1-952:63;30009-30071\">「妳遲早會需要這個本事，」他把一片完好的舊磁條，放進沈鴉手心，「我這雙眼睛，能撐的時間不多了，妳身邊得有人，能接著往下讀。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"954:1-954:50;30073-30122\">沈鴉起初笨拙得很，指尖劃過磁條表面那些細如髮絲的凹凸紋路，感覺不出任何規律，只覺得一片模糊的觸感。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"956:1-956:99;30124-30222\">「別用眼睛的邏輯去想它，」老桐耐心地糾正，「妳的眼睛習慣了『看』一整排文字，但指尖不一樣，指尖要學會『等』——每一個字，都要給它足夠的時間，從妳指腹的神經末梢，一點一點，滲進妳的意識裡，急不得。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"958:1-958:38;30224-30261\">沈鴉試了整整一個下午，終於在某一片殘破的磁條上，摸出了兩個字——「還魂」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"960:1-960:13;30263-30275\">「這是什麼意思？」她問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"962:1-962:141;30277-30417\">老桐沉默了片刻：「四十年前，跟『原環』一起出現的，另一個舊詞——『還魂稅』，具體指什麼，我這片殘缺的磁條，讀不出完整脈絡，但我猜，大概是某種對『續存循環』的古早稱呼，把這整套系統，比喻成一種所有人都得繳的稅，用自己的靈魂、自己的人生，去償還一筆自己從沒欠過、卻天生就背負著的債。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"964:1-964:62;30419-30480\">沈鴉盯著指尖底下那片薄薄的磁條，忽然覺得，這兩個字，比她之前查到的任何一個術語，都更精準地，道出了這整座城市，真正的樣貌。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"966:1-966:69;30482-30550\">她把這片磁條，小心地收進貼身口袋，跟母親的編號、跟白釜那本名冊，放在了同一個位置——那個她心裡，逐漸清出來，用來安放這些沉重真相的地方。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskpx8d66l88",
          "title": "第二十五章",
          "subtitle": "阿婆的最後一問",
          "blocks": [
            {
              "id": "msskpx8dhjn3v",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"972:1-972:57;30575-30631\">行動前夕，沈鴉繞去阿婆的滷肉飯攤子，買了兩份晚餐——這是她這幾週來，少數幾次，讓自己暫時放下所有沉重念頭的時刻。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"974:1-974:57;30633-30689\">「今天怎麼買兩份，砂砂不是說她今晚要跟妳一起吃？」阿婆一邊打飯，一邊隨口問，「妳倆難得同進同出，是有什麼好事？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"976:1-976:18;30691-30708\">「算是吧。」沈鴉勉強擠出一個笑容。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"978:1-978:50;30710-30759\">阿婆盛飯的手忽然頓了頓，抬起頭，用她那雙在根層做了大半輩子生意、閱人無數的眼睛，靜靜地打量著沈鴉。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"980:1-980:23;30761-30783\">「丫頭，妳最近，是不是要去做什麼危險的事？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"982:1-982:17;30785-30801\">沈鴉一時語塞，不知道該怎麼回答。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"984:1-984:83;30803-30885\">「不用回答我，」阿婆擺擺手，語氣忽然溫和下來，「我在這條巷子賣了三十年飯，什麼樣的眼神，我都見過——妳這陣子的眼神，跟當年我兒子出遠門去城外找活路那天，一模一樣。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"986:1-986:7;30887-30893\">「阿婆……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"988:1-988:111;30895-31005\">「我不勸妳別去，」阿婆把飯盒仔細地包好，遞到她手上，動作比平常更慎重了幾分，「我只想說，不管妳要去做什麼，這條巷子裡，每一個吃過妳留下來的東西的人，都欠妳一份人情——妳要是哪天撐不下去了，記得，這裡永遠有妳一口熱飯吃。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"990:1-990:38;31007-31044\">沈鴉接過飯盒，喉頭一陣發緊，什麼話都說不出口，只能用力地，對阿婆點了點頭。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskqev7zk864",
          "title": "第二十六章",
          "subtitle": "柯敖的另一頭",
          "blocks": [
            {
              "id": "msskqev7ji33i",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"996:1-996:42;31068-31109\">行動當天，柯敖獨自守在靜電酒館後房，面對著滿桌臨時拼湊起來的老舊設備，手心全是汗。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"998:1-998:133;31111-31243\">他這輩子，習慣了在暗處，遠遠地看著在乎的人，走進他無法跟隨的地方——十五年前是顏未，這一次，是沈鴉。他一邊透過斷斷續續的訊號，追蹤著沈鴉在永生塔內部的每一步動向，一邊在心裡，反覆咀嚼著一個他從沒對任何人說出口的念頭：如果這一次，他又一次，只能眼睜睜看著，該怎麼辦。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1000:1-1000:59;31245-31303\">當閃光彈的訊號傳來，當祝任遠的聲音第一次出現在通訊頻道裡，柯敖的手，一度控制不住地顫抖，連續三次，在鍵盤上敲錯指令。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1002:1-1002:55;31305-31359\">「冷靜，柯敖，冷靜。」他一遍一遍，對自己說著這句話，像是在說給十五年前，那個站在控制室外，束手無策的自己聽。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1004:1-1004:120;31361-31480\">他強迫自己，把顫抖的雙手，重新放回操作台，一邊監控著祝任遠部署的巡邏路線，一邊即時替沈鴉，計算著每一條備用通道的風險係數——這一次，他不再是那個只能隔著玻璃，眼睜睜看著愛人被推進艙裡的技術員。這一次，他手裡握著的，是真正能改變結局的工具。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1006:1-1006:106;31482-31587\">當沈鴉終於將探線插入主控台，柯敖看著螢幕上緩緩爬升的進度條，忽然想起顏未最後躺在艙裡，安詳得近乎殘忍的臉——他在心裡，對著那個已經無法再見到的名字，輕聲說了一句遲到十五年的話：「這一次，我不會再讓她一個人扛。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskqs12g7aje",
          "title": "第二十七章",
          "subtitle": "白釜被捕",
          "blocks": [
            {
              "id": "msskqs12fiitt",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1012:1-1012:33;31609-31641\">沈鴉回到鏽溝的路上，柯敖的訊息追了上來，語氣是她從未聽過的慌亂。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1014:1-1014:11;31643-31653\">「鴉，白釜出事了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1016:1-1016:6;31655-31660\">「什麼？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1018:1-1018:141;31662-31802\">「稽核隊今天下午，直接闖進他辦公室，帶走了他，沒有走正常的拘留程序，是祝任遠親自帶隊。」柯敖的聲音發顫，「我駭進了稽核隊的臨時調度紀錄，他們把白釜關在中環邊界一處臨時審訊據點，不是正規拘留所——鴉，這代表祝任遠不打算走檯面上的程序，他大概已經懷疑白釜握有比一般掮客更關鍵的東西。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1020:1-1020:13;31804-31816\">沈鴉的血液瞬間冷了下去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1022:1-1022:65;31818-31882\">白釜二十年來，替無數個像她一樣的人牽線，卻始終小心翼翼地不讓自己站到台前——如今，卻是因為幫她，第一次真正暴露在最危險的位置上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1024:1-1024:146;31884-32029\">沈鴉的腦海裡，飛快閃過她第一次見到白釜時的畫面——六年前，她剛入行不久，一個雨夜，因為誤收了一具實則已被系統標記為「爭議資產」的記憶而惹上麻煩，是白釜，用他自己都說不清楚為什麼要多管閒事的方式，替她擺平了那場糾紛，還丟下一句「妳這人，做事有自己的規矩，我喜歡」，從此成了她固定合作的中間人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1026:1-1026:214;32031-32244\">她後來才輾轉得知，祝任遠下令拘捕白釜前，其實猶豫了很久——他調閱了白釜過去二十年，所有經手案件的完整紀錄，發現這個看似見錢眼開的中間人，實際上從未真正坑害過任何一個委託人，甚至有好幾筆紀錄，隱約透著一種刻意壓低自己利潤、換取對方脫困的痕跡。但他最終，還是選擇了拘捕——不是因為他確信白釜有罪，而是因為，他已經沒有時間，再繼續用溫和的方式，一步一步逼近真相，他需要一個能立刻撬開的突破口，而白釜，是他手上，唯一觸手可及的那一個。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1028:1-1028:27;32246-32272\">「他手上有什麼？」她問，聲音緊繃，「除了那把鑰匙。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1030:1-1030:105;32274-32378\">「他辦公室那個保險箱，」柯敖說，「裝著他二十年比對出來的『種子池編號』家系圖，還有那本『歸還名冊』的部分線索。如果祝任遠拿到那個，不只是白釜完了，妳、砂砂，還有這整條線索能牽連到的每一個人，都會被連根拔起。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1032:1-1032:14;32380-32393\">「保險箱還在他辦公室嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1034:1-1034:81;32395-32475\">「稽核隊已經封鎖了整棟樓，」柯敖說，「常規手段進不去，武力更不可能——鴉，我知道妳現在腦子裡在想什麼，但我們沒有時間做萬全的計畫了，沈砂的評估日期，只剩兩天。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskr621xbasz",
          "title": "第二十八章",
          "subtitle": "審訊室裡的沉默",
          "blocks": [
            {
              "id": "msskr621hvt8y",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1040:1-1040:19;32500-32518\">被帶走的那一刻，白釜其實鬆了一口氣。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1042:1-1042:134;32520-32653\">這二十年來，他一直提心吊膽，怕的不是自己有一天會被抓，而是怕自己一旦被抓，會在恐懼裡，親手把二十年來小心保護的所有人，全部供出去。真正被銬上手銬、坐進審訊室那張冰冷的鐵椅時，他反而異常冷靜——他早就在心裡演練過無數次這一刻，該說什麼，不該說什麼，早已排練得滾瓜爛熟。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1044:1-1044:108;32655-32762\">「你這個名字，」祝任遠坐在他對面，把一份薄薄的檔案推過桌面，「在過去二十年裡，出現在至少四十七起『資產異常』案件的邊緣，每一次都查無實據，每一次都乾乾淨淨地全身而退。你知道，這種乾淨的紀錄，本身就是最大的破綻嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1046:1-1046:54;32764-32817\">「我只是個小掮客，」白釜維持著一貫的、遊刃有餘的語氣，「消息靈通一點，總比別人快一步聽到風聲，這不犯法。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1048:1-1048:20;32819-32838\">「歸還名冊。」祝任遠忽然說出這四個字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1050:1-1050:54;32840-32893\">白釜臉上的表情，維持了不到半秒的平靜，隨即被他自己極快地掩飾過去——但那半秒，已經足夠讓祝任遠確認了什麼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1052:1-1052:126;32895-33020\">「你知道這四個字。」祝任遠的語氣沒有任何起伏，「白釜，我可以用最粗暴的方式，逼你把知道的一切都說出來，但我更想知道——你二十年來，冒著這麼大的風險，維持著一個誰都不知道的地下網路，到底圖什麼？你又不是苦主，你只是個中間人，這件事，跟你沒有直接關係。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1054:1-1054:31;33022-33052\">白釜沉默了很久，久到審訊室裡那盞慘白的燈，讓他覺得眼睛發疼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1056:1-1056:67;33054-33120\">審訊室裡的燈光，照得白釜眼睛發疼，他卻沒有低頭迴避，只是靜靜地，迎著祝任遠審視的目光，像是決心要把這段憋了二十二年的往事，一次說完。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1058:1-1058:146;33122-33267\">「二十二年前，」他終於開口，聲音低啞，「我妹妹被『徵召』去做集團的一項『志願試驗』，說是能治好她的先天性義體排斥症。她走之前，我還笑她傻，說天下哪有這麼好的事。她走了之後，我才知道，那份『志願試驗』的合約，附帶條款寫得密密麻麻，我一條一條讀了三個月，才讀懂那份合約，本質上跟賣身沒有兩樣。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1060:1-1060:7;33269-33275\">「後來呢？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1062:1-1062:179;33277-33455\">「後來我發現，我什麼都做不了。」白釜的聲音裡，第一次流露出這二十年來，他從未在任何人面前展現過的疲憊，「我不是英雄，祝任遠，我沒有勇氣像那個叫鴉的女人一樣，去正面掀翻這座城市。我能做的，最多只是在暗處，幫下一個像我妹妹一樣的人，多留一點線索，讓他們的家人，至少知道自己不是在瘋，那些消失的人，是真的被系統性地、有組織地帶走的，不是他們自己憑空想像出來的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1064:1-1064:15;33457-33471\">祝任遠盯著他，久久沒有說話。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1066:1-1066:15;33473-33487\">「你妹妹的名字。」他終於問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1068:1-1068:6;33489-33494\">「白棠。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1070:1-1070:60;33496-33555\">祝任遠在自己隨身攜帶的筆記本上，寫下了這個名字，動作很輕，像是在鄭重其事地，替一個被抹去的人，補上一筆本該存在的紀錄。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1072:1-1072:36;33557-33592\">「我不會放你走。」他闔上筆記本，「但今晚審訊到此為止，你可以休息了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1074:1-1074:187;33594-33780\">審訊室外，走廊上的腳步聲逐漸遠去，白釜靠在冰冷的鐵椅上，望著天花板那盞慘白的燈，忽然想起妹妹白棠出發前，最後一次跟他吃飯時，隨口說過的一句話——「哥，你這人，嘴上總說自己是個怕事的懦夫，可我小時候，每次被人欺負，第一個衝出來的，都是你。」他那時候只當是妹妹隨口的玩笑，此刻回想起來，卻覺得，或許自己這二十年來的所作所為，從來都不是懦夫的選擇，只是他自己，一直不敢承認罷了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1076:1-1076:93;33782-33874\">白釜看著他起身離開審訊室的背影，第一次，對這個一直被他視為對立面的男人，生出一絲說不清道不明的、極其微弱的信任。他不知道，這份微弱的信任，會不會，在接下來的混亂裡，換來他自己一條活路。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1078:1-1078:154;33876-34029\">牢房的燈，在祝任遠離開後，被調得更暗了一些——大概是值班人員例行的省電措施，白釜卻寧願相信，這是這座冰冷的審訊室裡，難得的一點，不那麼刻意的溫柔。他靠著牆，閉上眼，開始在心裡，一遍一遍，複習著自己這二十年來，經手過的每一條線索，確保就算真的撐不住招供，也不會，讓沈鴉、柯敖、老桐這些人，暴露在更大的危險裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1080:1-1080:63;34031-34093\">沈鴉沉默了幾秒，忽然想起前幾天沈砂那句理直氣壯的話——<strong>「我修義肢手掌都修得好，平板風扇有什麼難的，姊，妳低估我了。」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1082:1-1082:53;34095-34147\">「柯敖，」她說，「白釜辦公室那棟樓的老舊通風系統，是不是還在用二十年前那批機械式風閥，沒有換成電子鎖？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1084:1-1084:9;34149-34157\">「妳想到什麼？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1086:1-1086:9;34159-34167\">「我需要砂砂。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskrknkum87h",
          "title": "第二十九章",
          "subtitle": "營救",
          "blocks": [
            {
              "id": "msskrknk31m15",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1092:1-1092:36;34187-34222\">那是沈鴉第一次，讓沈砂真正參與一場行動，而不是留在鏽溝，等她帶回結果。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1094:1-1094:139;34224-34362\">「你們瘋了嗎？」沈砂看著攤在桌上的建築維修圖，起初是這樣說的，但她的手指已經下意識地劃過那條老舊通風管道的走向，「這條風閥系統，如果是二十年前的舊型號，控制邏輯應該還是純機械式的離心閥，不是電子鎖——難怪稽核隊沒把這條路列進防範清單，他們大概以為早就沒人會用這種老古董入侵。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1096:1-1096:14;34364-34377\">「妳能弄開它嗎？」沈鴉問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1098:1-1098:91;34379-34469\">「弄開不難，」沈砂咬著下唇，眼神卻異常認真，「難的是弄開之後不要觸動氣流感應——那玩意兒對溫度跟風速變化很敏感，我需要在裡面同步調整三個閥門的角度，光靠妳一個人爬進去，手不夠用。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1100:1-1100:14;34471-34484\">「所以妳要跟我一起進去。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1102:1-1102:50;34486-34535\">沈砂抬起頭，第一次，沒有露出害怕的神色，反而是一種近乎躍躍欲試的堅定：「姊，我等這句話等很久了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1104:1-1104:93;34537-34629\">行動當晚，柯敖負責在外圍製造一次小規模的訊號干擾，佯裝成常見的設備故障，吸引部分巡邏人員的注意力；老桐雖然還帶著傷，仍堅持透過通訊，遠端指引她們舊維修圖上那些連稽核隊都未必掌握的死角。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1106:1-1106:100;34631-34730\">沈鴉與沈砂從通風管道潛入的過程，遠比預期艱難——管道比圖紙標示的更狹窄，中途一處閥門鏽死，沈砂足足花了七分鐘，一邊忍受著逐漸稀薄的空氣，一邊用隨身工具一點一點鬆開鏽蝕的螺栓，額頭上的汗水浸濕了劉海。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1108:1-1108:33;34732-34764\">「快點……」沈鴉在她身後低聲催促，聽見遠處隱約傳來巡邏的腳步聲。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1110:1-1110:55;34766-34820\">「我已經很快了！」沈砂咬牙切齒地小聲反駁，手上的動作卻沒有停，「妳知道這種老古董的螺栓有多難搞嗎——好了！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1112:1-1112:69;34822-34890\">閥門終於鬆動，兩人幾乎是連滾帶爬地擠進辦公室夾層，撬開通風口蓋板落地的瞬間，正好對上一名巡邏員轉身離開的背影——差半步，就會被撞個正著。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1114:1-1114:100;34892-34991\">她們在白釜辦公室裡找到那個藏在裝飾牆板後的保險箱時，稽核隊留守的人員已經開始例行巡查，時間比預想中更緊迫。沈鴉用白釜曾經教過她的手法，試著破解密碼鎖，一次，兩次，第三次時，鎖芯終於發出輕微的彈開聲。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1116:1-1116:104;34993-35096\">保險箱裡，那本厚重的手寫名冊還在，旁邊還散落著幾份被稽核隊翻動過、卻顯然還沒來得及仔細審閱的資料。沈鴉來不及細看，蹲在滿地散落的文件裡，一頁一頁快速翻找——直到她的目光，落在一頁被白釜用紅筆圈起來的編號上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1118:1-1118:65;35098-35162\"><strong>「妳們沈家，這一支的神經模板編號，跟目前『甄長樂』這個名籍，過去至少三輪續存循環裡，抽選種子池的重疊區間，有部分交集。」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1120:1-1120:53;35164-35216\">這是白釜自己批註在旁邊的一行小字，字跡潦草，顯然是寫在某個深夜，寫給自己看的，而不是準備拿來對誰解說的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1122:1-1122:80;35218-35297\">沈鴉盯著那行字，一時間，聽不懂自己看到的這句話——但她沒有時間細想，門外的腳步聲越來越近，她把那本名冊塞進防水袋，抓起沈砂的手，順著原路，狼狽地爬回通風管道。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1124:1-1124:112;35299-35410\">整個過程裡，她們始終沒能靠近白釜實際被拘留的審訊室——那裡的戒備，遠比辦公室森嚴，遠非兩個人徒手能夠突破。沈鴉在行動前，就已經跟柯敖、老桐反覆確認過，這次的目標，只有那個保險箱，白釜的營救，必須留到之後，用另一種方式完成。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1126:1-1126:70;35412-35481\">她們是在最後一秒，聽見身後辦公室的門被推開、巡邏員的驚呼聲，才驚險地把通風口蓋板重新蓋上，兩人在漆黑窄小的管道裡，貼在一起，大氣都不敢喘。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1128:1-1128:38;35483-35520\">管道外，巡邏員的手電筒光束，隔著蓋板縫隙掃了進來，在她們頭頂上方晃了兩晃。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1130:1-1130:28;35522-35549\">「這裡的蓋板螺絲，怎麼看起來是新鬆動的？」一個聲音說。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1132:1-1132:74;35551-35624\">「舊系統，這種老古董三天兩頭鬆動很正常，」另一個聲音懶洋洋地回應，「別自己嚇自己，走吧，稽核隊長交代要重點查的是保險箱有沒有被動過，不是通風口。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1134:1-1134:90;35626-35715\">沈鴉能感覺到沈砂的手，在黑暗裡緊緊攥著她的衣角，微微發抖——這是沈砂第一次，如此貼近地經歷「只要一個轉念就會被抓」的瞬間，她的呼吸又急又輕，卻始終死死咬著嘴唇，沒有發出一點聲音。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1136:1-1136:27;35717-35743\">手電筒的光束又逗留了幾秒，終於移開，腳步聲漸漸遠去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1138:1-1138:43;35745-35787\">「姊，」沈砂在黑暗裡，聲音壓得極低，卻帶著一絲劫後餘生的顫抖與雀躍，「我們成功了？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1140:1-1140:33;35789-35821\">「我們拿到了。」沈鴉緊緊攥著那個防水袋，「但白釜還在他們手上。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssks3l6v9d66",
          "title": "第三十章",
          "subtitle": "名冊裡的答案",
          "blocks": [
            {
              "id": "mssks3l6y1810",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1146:1-1146:89;35844-35932\">她們沒能救出白釜——那晚的行動，優先順序是保住那本名冊，不讓它落入祝任遠手中，沈鴉知道，如果保險箱裡的東西被搜走，別說救白釜，連帶柯敖、老桐，甚至沈砂與她自己，都會被連根拔起。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1148:1-1148:42;35934-35975\">「他們會怎麼對他？」回到靜電酒館，沈砂還沒從剛才的驚險裡完全緩過來，聲音有些發抖。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1150:1-1150:78;35977-36054\">「按祝任遠的做法，」柯敖臉色凝重，「他大概會先審訊，逼問白釜手上還有什麼、還牽連了誰。白釜這人嘴硬，但硬扛不了太久——鴉，我們的時間，比原本想的更緊了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1152:1-1152:83;36056-36138\">沈鴉把那本搶救回來的名冊，攤在吧檯上，一頁一頁，翻看白釜二十年來的批註。她的指尖停在那行紅筆圈記的編號旁，把那句白釜寫給自己看的潦草小字，一字一句念給柯敖與沈砂聽。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1154:1-1154:39;36140-36178\">酒館裡陷入了長久的沉默，只有窗外的雨聲，持續不斷地，敲打著早已鏽蝕的排水管。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1156:1-1156:45;36180-36224\">「意思是，」沈砂率先開口，聲音有些發緊，「我們家……跟那個搶走媽媽身體的人，是同一……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1158:1-1158:97;36226-36322\">「我沒辦法給妳一個確定的答案。」沈鴉打斷她，聲音異常平靜，「這種比對本身就存在誤差。但如果白釜的猜測是對的——我們現在拚了命想扳倒的那個名籍，某種意義上，可能是我們自己血脈更早以前的一部分。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1160:1-1160:27;36324-36350\">沈砂沒有再說話，只是死死盯著那行編號，臉色一片蒼白。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1162:1-1162:70;36352-36421\">「這件事，我沒辦法拿去廣播。」沈鴉終於開口，把名冊輕輕合上，「這種程度的東西，普通人聽不懂，也無法查證，只會被集團說成是我編出來的瘋話。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1164:1-1164:24;36423-36446\">「那我們現在，」柯敖看著她，「還要救白釜嗎？」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssksdqvx12s1",
          "title": "第三十一章",
          "subtitle": "收緊的網",
          "blocks": [
            {
              "id": "mssksdqvgfdje",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1170:1-1170:25;36468-36492\">就在沈鴉一行人商議對策的同時，祝任遠也沒有閒著。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1172:1-1172:105;36494-36598\">白釜被拘留的消息，並沒有讓他真正安心，反而讓他更加警覺——一個能在灰色地帶周旋二十年、始終全身而退的老掮客，居然會為了掩護一個記憶獵人，甘願冒著這麼大的風險，這本身，就說明了事態的嚴重程度，遠超他最初的預估。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1174:1-1174:143;36600-36742\">他調集了資產稽核隊近乎全部的可用人力，在永生塔周邊，重新部署了三層警戒——不只是常規的巡邏機甲，還加派了便衣人員，日夜駐守在幾個他認為可能被用作滲透路線的維修通道入口。他甚至親自帶隊，重新勘查了一遍老舊維修圖上，那些「officially 不存在」、卻可能被熟悉這座塔的人利用的死角。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1176:1-1176:90;36744-36833\">「隊長，我們現在的部署，已經超出資產稽核隊的正常編制範圍了。」林巧看著調度表，忍不住提醒他，「上頭已經有人在問，為什麼我們要為了一樁『非登記人員入侵』的小案子，動用這麼多資源。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1178:1-1178:126;36835-36960\">「因為這不是小案子。」祝任遠盯著牆上那張永生塔的立體結構圖，聲音低沉，「林巧，我這幾天反覆想過，如果對方真的握有我們一直查不到的核心證據，一旦讓她成功接近廣播主控台，後果會是什麼——不是一次普通的資訊外洩，是整座城市的秩序，在同一瞬間，被連根掀翻。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1180:1-1180:36;36962-36997\">「那如果，」林巧猶豫了一下，還是問出了口，「她握有的證據，是真的呢？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1182:1-1182:116;36999-37114\">祝任遠沒有立刻回答，手指無意識地摩挲著口袋裡那本，寫著「白棠」與其他幾個名字的筆記本——這幾天，他利用職務之便，陸陸續續，替那份被他從白釜口中問出的名單，還有他自己記憶裡，母親與弟弟的名字，都補上了一筆本該存在、卻始終空白的紀錄。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1184:1-1184:122;37116-37237\">「如果是真的，」他終於說，聲音裡帶著一絲連他自己都感到陌生的疲憊，「那我更不能讓它，用一種會讓兩百萬人在毫無準備的情況下，同時陷入恐慌與混亂的方式，被公開。林巧，我見過『空白』會帶來什麼，我不想再看見那樣的『空白』，用另一種形式，重演一次。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1186:1-1186:91;37239-37329\">他不知道，自己這番出於謹慎與恐懼交織的部署，會在幾天後，把沈鴉逼得走投無路，也不知道，正是這份走投無路，讓她最終喊出的那句話，會精準地，擊中他心裡，那道他自己都沒能完全癒合的傷口。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1188:1-1188:79;37331-37409\">「當然要救。」沈鴉的聲音裡第一次帶上了毫不猶豫的堅定，「他是為了幫我，才被抓的。這件事，我沒有選擇不救的餘地——只是這一次的救法，不是硬闖，是把行動提前。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskss65pkkp1",
          "title": "第三十二章",
          "subtitle": "被否決的路",
          "blocks": [
            {
              "id": "msskss65uqw6q",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1194:1-1194:91;37432-37522\">「等等，」柯敖打斷她，「在妳把這件事說得像唯一選項之前，我們先把其他可能的路，都認真過一遍——這不是質疑妳，是我們沒有第二次機會，我不想事後才後悔，說我們漏掉了什麼更穩妥的辦法。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1196:1-1196:14;37524-37537\">沈鴉點點頭，示意他說下去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1198:1-1198:32;37539-37570\">「第一條路，」柯敖伸出一根手指，「把證據交給媒體，走輿論戰。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1200:1-1200:76;37572-37647\">「不行，」沈鴉搖頭，「夜隅所有主流媒體，發行權都掌握在恆憶集團手裡，我們拿到的東西，還沒送到編輯台，大概就會先被壓下來，甚至可能直接暴露我們的位置。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1202:1-1202:39;37649-37687\">「第二條路，帶著證據，直接逃離夜隅，去城外那些傳聞中的自治聚落，尋求庇護。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1204:1-1204:79;37689-37767\">「砂砂的評估期限，等不了那麼久的路程，」沈鴉說，「而且，就算逃出去了，這座城市裡，還有下一個沈砂，下一個顏未，我們逃走了，等於是把所有人，都留在原地等死。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1206:1-1206:55;37769-37823\">「第三條路，」柯敖的聲音低了下去，「只救出砂砂一個人，其他的，暫時放下，等以後有更周全的計畫，再重新來過。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1208:1-1208:9;37825-37833\">沈鴉沉默了很久。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1210:1-1210:107;37835-37941\">「我想過這條路，」她終於開口，「但柯敖，如果我今天選擇只救砂砂，我要怎麼面對，接下來每一個月，價目表上，又多出一個名字的家庭？我要怎麼面對，霓生那本寫滿了沒能說完的話的筆記本？我沒辦法說服自己，這樣做，是對的。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1212:1-1212:25;37943-37967\">老桐這時緩緩開口：「還有第四條路，你們都沒提。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1214:1-1214:7;37969-37975\">「什麼路？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1216:1-1216:165;37977-38141\">「什麼都不做，把自己知道的一切，都爛在肚子裡，繼續假裝什麼都沒發生過，像過去的我，過去的柯敖，過去的白釜，一樣，活下去。」老桐的聲音很平靜，卻帶著千鈞的重量，「這條路，其實是最安全的，只是——鴉，妳已經走過那條路了，不是嗎？妳做記憶獵人這六年，一直在幫人守住秘密，妳自己心裡最清楚，那條路，走到最後，會把一個人，變成什麼樣子。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1218:1-1218:17;38143-38159\">沈鴉沒有回答，只是輕輕點了點頭。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1220:1-1220:39;38161-38199\">「所以，」她重新抬起頭，環視著在場的每一個人，「我們只剩下一條路可以走了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1222:1-1222:10;38201-38210\">沒有人再提出異議。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskt2ce3obdk",
          "title": "第三十三章",
          "subtitle": "差一點",
          "blocks": [
            {
              "id": "msskt2cey3jd2",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1228:1-1228:25;38231-38255\">行動前兩天，一場意外的巡查，差點讓一切提前終結。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1230:1-1230:78;38257-38334\">一支例行的物流稽查隊，因為一次系統排程的偶然錯亂，臨時被派往舊七街地下三層一帶，執行例行的違建清查——這條巡查路線，跟老桐的地窖入口，只隔著不到五十公尺。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1232:1-1232:48;38336-38383\">「有人往這邊來了！」把風的柯敖，聲音壓得極低，卻掩不住其中的驚慌，「鴉，你們現在在哪個位置？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1234:1-1234:42;38385-38426\">「剛把整理好的資料裝箱，準備搬去下一個藏匿點。」沈鴉握著沉重的箱子，心跳瞬間加速。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1236:1-1236:52;38428-38479\">「來不及了，直接走地窖後方那道我們上次修過的通風井，別走正門，正門那邊已經能看到巡查隊的手電筒光了！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1238:1-1238:81;38481-38561\">沈鴉架著還沒完全康復的老桐，扶著他，深一腳淺一腳地擠進那道狹窄的通風井，箱子勉強塞進井道，兩人縮在漆黑的管道深處，聽著頭頂上方，巡查隊逐漸靠近的腳步聲與交談聲。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1240:1-1240:31;38563-38593\">「這一帶好像有些違建痕跡，」一個聲音說，「要不要進去看看？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1242:1-1242:69;38595-38663\">「算了，」另一個聲音懶洋洋地打斷，「這種舊城區，違建太多了，我們今天配額已經達標，回去交差就好，誰想沒事找事，鑽進這種又髒又臭的地方。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1244:1-1244:10;38665-38674\">腳步聲，逐漸遠去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1246:1-1246:55;38676-38730\">沈鴉靠在冰冷的井壁上，久久不敢動彈，直到確認巡查隊真的離開，才長長吐出一口氣，發現自己後背，早已被冷汗浸透。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1248:1-1248:53;38732-38784\">「差一點。」老桐在她身邊，聲音虛弱卻帶著一絲劫後餘生的自嘲，「鴉，我這輩子，好像跟『差一點』特別有緣。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1250:1-1250:85;38786-38870\">沈鴉沒有說話，只是伸手，緊緊握住了老桐的手——她忽然意識到，接下來這兩天，任何一個微不足道的意外，都可能讓她們，連走到最後一步的機會都沒有。時間，比她以為的，更加緊迫。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssktdqq2m56r",
          "title": "第三十四章",
          "subtitle": "沈砂的一個人",
          "blocks": [
            {
              "id": "mssktdqqdtdqu",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1256:1-1256:63;38894-38956\">那天深夜，沈鴉在跟柯敖確認細節，沈砂獨自一人，坐在酒館後方的儲物間裡，把玩著手裡那具她這幾天用來練習的舊型號清潔機器人零件。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1258:1-1258:21;38958-38978\">她沒有把自己心裡真正的恐懼，告訴任何人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1260:1-1260:198;38980-39177\">如果白釜的猜測是對的，如果她跟姊姊，某種意義上，是很多代以前某次「下放」循環後，重新投胎出來的殘片後代——那她這十七年來，所堅信的「自己」，究竟有多少，是真正屬於她的？她愛吃滷肉飯，她討厭寫字太醜的自己，她會為了一支螺絲刀跟老陳鬥嘴，她會在深夜偷偷練習修理電路，這些構成「沈砂」這個人的所有細節，會不會，其實只是某個更古老的靈魂，散落下來的一堆隨機碎片，恰好拼湊成了現在這個，自以為完整的自己？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1262:1-1262:75;39179-39253\">她想起小時候，母親哄她睡覺時，總說她「跟外婆年輕時一模一樣，連皺鼻子的小動作都像」——那時候她只當是長輩無心的玩笑話，此刻回想起來，卻讓她脊背發涼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1264:1-1264:78;39255-39332\">如果連「像誰」這種尋常的家族玩笑，背後都可能藏著這麼沉重的真相，那這座城市裡，還有多少看似溫馨的巧合，其實都是同一套殘忍機制，運作了幾百年後，留下的痕跡？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1266:1-1266:113;39334-39446\">她把清潔機器人的零件，一件一件重新組裝好，動作專注而穩定——這是她這幾天發現的、能讓自己不去胡思亂想的辦法：只要專心做一件具體的、看得見成果的小事，那些太過龐大、太過形而上的恐懼，就會暫時被推到心裡角落，不至於把她徹底淹沒。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1268:1-1268:30;39448-39477\">「妳還沒睡？」沈鴉推門進來，看見她還在鼓搗零件，有些意外。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1270:1-1270:29;39479-39507\">「睡不著，」沈砂如實回答，「姊，我可以問妳一個問題嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1272:1-1272:5;39509-39513\">「說。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1274:1-1274:99;39515-39613\">「如果，我是說如果，」沈砂的聲音有些發澀，「我們真的只是很多代以前，某個人散落下來的碎片……那我現在坐在這裡，修這具機器人，是真的『我』想修，還是只是某種更古老的慣性，透過我的手，繼續在做而已？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1276:1-1276:16;39615-39630\">沈鴉在她身邊坐下，沉默了很久。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1278:1-1278:153;39632-39784\">「我不知道答案，」她終於說，聲音很輕，卻很認真，「但砂，不管妳是不是碎片、是不是慣性——妳修東西的時候，那股認真勁，妳跟老陳鬥嘴時，那副理直氣壯的樣子，那都是我看著長大的，都是真的。如果連這些都要被說成『不算數』，那我情願不去想那麼多，情願就把眼前這個，會為了螺絲刀跟人吵架的沈砂，當成唯一真實的答案。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1280:1-1280:47;39786-39832\">沈砂看著她，眼眶忽然有些發熱，最終，只是輕輕點了點頭，把手裡修好的機器人零件，重新裝了回去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1282:1-1282:88;39834-39921\">「姊，」她忽然又開口，聲音裡帶著一絲不太確定的猶豫，「那如果……如果我們真的成功了，這一切結束之後，妳覺得，我還能像現在這樣，繼續修東西、繼續跟老陳鬥嘴、繼續當『沈砂』嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1284:1-1284:102;39923-40024\">「當然可以，」沈鴉握住她的手，語氣裡沒有一絲猶豫，「不管接下來揭開的真相有多複雜，砂，妳永遠可以選擇，繼續當現在這個沈砂——這是妳的權利，沒有任何一套系統、任何一段古老的血脈，有資格把它從妳手裡拿走。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1286:1-1286:241;40026-40266\">沈砂用力地點了點頭，像是把這句話，鄭重地，刻進了心裡。她抬頭看著沈鴉，眼神裡帶著一種近乎孩子氣的認真：「那我以後，要更用力地，把『沈砂』這個人，活得像樣一點，這樣，不管上面那些真相多複雜，至少這個名字，配得上妳說的這句話。」她低頭看著手裡那具重新組裝好的機器人，指尖無意識地，在外殼不起眼的角落，刻下了一道小小的記號——那是她這幾天養成的新習慣，每完成一項自己認定「有意義」的小事，就悄悄留下這麼一道痕跡，像是在用最笨拙的方式，向那個「一切都只是隨機碎片」的念頭，做著無聲的抵抗。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssktsm7wcbmh",
          "title": "第三十五章",
          "subtitle": "空白之間",
          "blocks": [
            {
              "id": "mssktsm7feujt",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1292:1-1292:46;40288-40333\">那天夜裡，等沈砂終於睡下，沈鴉一個人坐在鏽溝那扇永遠關不緊的鐵門邊，望著外頭連綿不絕的雨。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1294:1-1294:105;40335-40439\">她想起自己這幾週查到的一切——白色艙室、母親的編號、種子池編號的重疊——這些真相，像一層又一層剝開的洋蔥，每剝開一層，底下都是更嗆人的東西，直到最後，她發現自己根本找不到一個乾淨的、可以站穩腳跟去憎恨的敵人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1296:1-1296:20;40441-40460\">甄長樂不是敵人，她也是這套系統的囚徒。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1298:1-1298:63;40462-40524\">那個穿著陌生面孔、卻可能是自己血脈更早以前一部分的名籍，也不是敵人，它甚至不是一個「人」，只是一個必須被填滿的、古老的空位。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1300:1-1300:61;40526-40586\">祝任遠也未必是敵人——他信奉的秩序，跟她想要的正義，某種意義上，可能只是同一種對「混亂與消失」的恐懼，選擇了不同的解方。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1302:1-1302:44;40588-40631\">如果沒有一個可以簡單指認、簡單打倒的敵人，那她這幾週拚了命做的這一切，意義究竟是什麼？</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1304:1-1304:161;40633-40793\">她想了很久，最終，得出一個並不宏大、卻是她此刻唯一能站穩的答案——意義不在於「打倒誰」，而在於「不讓下一個沈砂，走上跟母親一樣的路」。這個答案很小，小到裝不下老桐口中那個運作了幾百年的巨大循環，裝不下白釜攤開的那本、寫滿了無數個「沈家」重疊編號的名冊——但這個答案，足夠具體，具體到她可以拿它，一步一步，走完接下來的路。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1306:1-1306:25;40795-40819\">她不需要弄懂整個宇宙的真相，才有資格去救一個人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1308:1-1308:36;40821-40856\">她只需要，在雨還在下的此刻，牢牢記住，自己現在要做的這件事，是為了誰。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1310:1-1310:72;40858-40929\">窗外，雨勢忽然大了一些，敲打在鏽蝕的排水管上，發出一種近乎規律的、像是心跳的聲響。沈鴉閉上眼睛，靠著門框，難得地，睡著了一小段沒有做夢的時間。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1312:1-1312:14;40931-40944\">她抬起頭，看向柯敖與沈砂。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1314:1-1314:97;40946-41042\">「我們直接發動醒雨協定。」她說，「一旦真相公開，恆憶集團與稽核隊會陷入自身難保的混亂，那才是白釜真正的活路——與其等他們慢慢審問出更多東西，不如讓整棟樓，連同他們手上握著的秘密，一起被掀開。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssku3cdutuhb",
          "title": "第三十六章",
          "subtitle": "鏽溝擋下的問話",
          "blocks": [
            {
              "id": "mssku3cds4vmf",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1320:1-1320:55;41067-41121\">沈鴉不知道的是，就在她與柯敖、沈砂徹夜商議行動細節的同時，鏽溝這條巷子裡，正上演著另一場她全然不知情的攻防。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1322:1-1322:92;41123-41214\">一名穿著便衣的稽核員，拿著沈鴉的照片，挨家挨戶地問話，問的都是些看似無害的問題——「這個人妳認識嗎」、「她最近幾天，什麼時候出門，什麼時候回來」、「她跟一個叫柯敖的人，走得近不近」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1324:1-1324:12;41216-41227\">老陳是第一個被問到的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1326:1-1326:49;41229-41277\">「不認識。」老陳頭也不抬，繼續埋頭修著手裡的義肢零件，「鏽溝這條巷子人來人往，誰記得住誰的臉。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1328:1-1328:33;41279-41311\">「這張照片，跟你們巷口鐵門那戶的住戶，長得挺像。」稽核員不死心。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1330:1-1330:61;41313-41373\">「像的人多了去了，」老陳終於抬起頭，臉上是根層人特有的、混合著世故與敷衍的笑容，「你要不要也去查查，我跟你長得像不像？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1332:1-1332:18;41375-41392\">阿婆的滷肉飯攤子，稽核員也去問了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1334:1-1334:79;41394-41472\">「鴉丫頭啊，」阿婆一邊擦著攤子上的油漬，一邊隨口應付，「她呀，好幾個月沒來我這買飯了，聽說搬去中環投靠親戚了，具體哪裡我可不知道，你們自己去查戶籍紀錄吧。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1336:1-1336:30;41474-41503\">事實上，沈鴉前一天晚上，才剛在阿婆的攤子上買過兩份滷肉飯。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1338:1-1338:86;41505-41590\">霓生的代寫攤，也被問到了。她心跳如擂鼓，面上卻維持著十七歲少女該有的、略帶怯懦的木然：「沈砂姊姊常來我這裡，但她姊姊我沒見過幾次，聽說在做什麼正經工作，很少在附近走動。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1340:1-1340:102;41592-41693\">沒有人商量過該怎麼回答，甚至沒有人明說「要幫沈鴉瞞著」——但鏽溝這條巷子裡的每一個人，幾乎是憑著某種心照不宣的默契，用最自然、最不著痕跡的方式，把稽核員遞出的每一個問題，都輕輕地、卻堅定地，推回了原地。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1342:1-1342:77;41695-41771\">那名稽核員最後帶著一份幾乎沒有任何有效資訊的問話紀錄，悻悻然地離開了鏽溝，回報給祝任遠的報告上，只能寫著：「目標所在社區居民配合度低，未獲得有效線索。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1344:1-1344:128;41773-41900\">沈鴉是在很久以後，才從老陳一句不經意的抱怨裡——「上禮拜有個生面孔來問東問西的，我這把老骨頭陪他耗了半小時，妳是欠我一頓飯的」——拼湊出，自己這條從沒把她當回事、天天為了一口鍋一支螺絲刀鬥嘴的巷子，早已用她們自己的方式，替她擋下了一整場她渾然不覺的危機。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1346:1-1346:43;41902-41944\">她那天晚上，破例去老陳家坐了很久，什麼都沒多說，只是幫他修好了那台老舊的蒸氣塑形鍋。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskugf7plmga",
          "title": "第三十七章",
          "subtitle": "一支雨傘",
          "blocks": [
            {
              "id": "msskugf75dhu0",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1352:1-1352:48;41966-42013\">行動前，沈鴉照常接了幾單看起來平凡無奇的委託，維持著自己「正常生活」的表象，避免引起更多懷疑。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1354:1-1354:71;42015-42085\">其中一單，是根二區一個賣傘的老太太，代號登記著「傘婆」，欠債原因寫著「攤位租金積欠三年」。沈鴉趕到時，傘婆還很清醒，甚至還有力氣，跟她抬槓。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1356:1-1356:84;42087-42170\">「妳就是那個，會先叫人家名字的記憶獵人？」傘婆瞇著眼，上下打量她，「行，那我倒要考考妳，看妳認不認真做功課——我這輩子賣了四十年傘，妳猜猜，我最自豪的一件事是什麼？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1358:1-1358:16;42172-42187\">沈鴉一時語塞：「修傘的手藝？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1360:1-1360:39;42189-42227\">「錯，」傘婆得意地晃了晃頭，「是我這四十年，一把傘都沒有真的『賣』出去過。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1362:1-1362:10;42229-42238\">「這是什麼意思？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1364:1-1364:171;42240-42410\">「我這攤子，明面上是賣傘，」傘婆壓低聲音，帶著一絲狡黠的笑意，「實際上，是根層最大的『借傘』集散地——妳知道嗎，這座城市裡，多少窮人家，捨不得花錢買一把新傘，我這裡，永遠有傘可以借，用完了，哪天路過，隨手還回來就好，我從沒收過一次滯還的罰款，甚至有些傘，借出去十年，繞了大半個根層，才輾轉還回來我手裡，傘骨都換過三輪了，我還是認得每一把。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1366:1-1366:72;42412-42483\">沈鴉怔怔地聽著，忽然覺得鼻頭一酸——這種近乎天真的、不計較的善意，跟她這幾週查到的、關於這座城市最陰暗核心的真相，形成了一種荒謬又動人的對比。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1368:1-1368:29;42485-42513\">「所以，」沈鴉問，「妳想留給家人的最後一段記憶，是……」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1370:1-1370:118;42515-42632\">「是我這四十年，借出去的每一把傘，」傘婆的聲音漸漸虛弱下去，眼裡卻閃著光，「我想讓我孫女知道，錢，這輩子未必能還得清，但人情，是可以一直一直，借下去、傳下去的——只要還有人，願意收下那把傘，再借給下一個需要的人，這條巷子，就死不了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1372:1-1372:48;42634-42681\">沈鴉收單完成後，站在傘婆的攤子前，望著那一整排各式各樣、修補痕跡層層疊疊的舊傘，久久沒有離開。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1374:1-1374:128;42683-42810\">她想，自己接下來要做的事，某種意義上，其實也是同一件事——把一份不知道能不能還清的東西，先接下來，用盡全力，撐一陣子，再想辦法，傳給下一個人。她把那份收單所得的報酬，多留了一部分給傘婆的孫女，附上一句話：「阿婆說，人情要傳下去，我這次，也想跟著傳一份。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskuu1a33u58",
          "title": "第三十八章",
          "subtitle": "該說什麼，不該說什麼",
          "blocks": [
            {
              "id": "msskuu1a268de",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1380:1-1380:58;42838-42895\">行動前，沈鴉花了整整一個晚上，反覆推敲醒雨協定最終要傳送出去的內容——這件事，她堅持要自己一個人完成，不假手他人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1382:1-1382:82;42897-42978\">她把手邊搜集到的所有證據，一項一項攤開在桌上：白色艙室的畫面、官方文件的原始條文、母親的編號、甄長樂的存在、老桐搶救回來的建城史殘片、白釜那本寫滿紅筆批註的名冊。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1384:1-1384:136;42980-43115\">她一度想把所有東西，全部一次性倒出去——讓整座城市，跟她一樣，承受這幾週來，她所承受過的全部重量。但柯敖的一句話，讓她停下了這個念頭：「鴉，真相如果太重，會把人壓垮，而不是喚醒人。妳要的是讓大家醒過來，一起走接下來的路，不是讓大家一次看到底，然後被嚇得再也不敢往前走。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1386:1-1386:102;43117-43218\">她想起自己這幾週，一次次目睹的，那些被巨大真相壓得喘不過氣的時刻——柯敖找了十五年，卻不敢真正靠近；她自己站在麵攤對街，站到打烊，卻不敢上前相認；連白釜，二十年來，都只敢在暗處，做著不會傷到自己的善事。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1388:1-1388:80;43220-43299\">她終於明白，一份足以撼動人心的真相，跟一份會把人徹底壓垮、逼得所有人重新縮回沉默裡的真相，中間那條界線，其實很細，細到需要她，在這一夜，一筆一筆，親手劃出來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1390:1-1390:150;43301-43450\">她最終留下的，是最堅實、最不容辯駁、也最能讓每一個聽見的人，立刻明白自己該做什麼的部分——具體的機制，具體的傷害，還有她自己，作為一個女兒，最真實的第一人稱證詞。她把那些太過龐大、太過形而上、會讓人陷入虛無而非行動的部分，連同種子池編號重疊的猜測，一起，摺好，收進心裡，留給自己，一個人，慢慢消化。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1392:1-1392:78;43452-43529\">天快亮的時候，她終於寫完了最後一版草稿，念了一遍給自己聽，確認每一個字，都經得起她自己的良心檢驗，才起身，走向鏽溝那扇永遠關不緊的鐵門，去看沈砂最後一眼。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskv4ydbk722",
          "title": "第三十九章",
          "subtitle": "沒說出口的告別",
          "blocks": [
            {
              "id": "msskv4ydjc3m5",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1398:1-1398:18;43554-43571\">行動前一晚，沈鴉破例提早回了鏽溝。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1400:1-1400:73;43573-43645\">沈砂正坐在床邊，就著那盞老舊的紫外線消毒燈，修理一隻拾荒撿來的義肢手掌——跟很多年前的某個晚上一模一樣的畫面，沈鴉站在門口看了幾秒，才推門進去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1402:1-1402:31;43647-43677\">「妳今天很早。」沈砂頭也不抬，聲音裡帶著一絲刻意維持的平常。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1404:1-1404:5;43679-43683\">「嗯。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1406:1-1406:11;43685-43695\">「明天就要動手了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1408:1-1408:5;43697-43701\">「嗯。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1410:1-1410:74;43703-43776\">沈砂終於放下手裡的義肢手掌，抬起頭看她，那雙遺傳自母親的眼睛裡，帶著一種十七歲不該有的洞察力，也帶著這幾天連場行動下來，磨出的一絲從未有過的沉穩。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1412:1-1412:100;43778-43877\">「姊，這次換我送妳出門。」她說，「以前都是妳一個人扛著出去，我在家裡等消息。這次不一樣了——我陪妳們闖過白釜辦公室的通風管道，我知道那種心跳快到耳朵都在響的感覺，我知道妳每次出門，到底在承受什麼。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1414:1-1414:15;43879-43893\">沈鴉在她對面坐下，一時語塞。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1416:1-1416:162;43895-44056\">「我只想說，」沈砂的聲音有些哽咽，卻努力維持著平靜，像是不想讓這個夜晚，變成一場哭著道別的儀式，「不管明天發生什麼，妳已經不是一個人在扛了。這句話，不是安慰妳，是事實——柯敖在，老桐在，就連白釜，都還在某個地方，等著我們把他救出來。姊，妳已經替這座城市裡的很多人，做到了她們的家人沒能為她們做到的事。剩下的，我們一起扛。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1418:1-1418:104;44058-44161\">沈鴉沒有回答，只是伸手，第一次，主動抱了抱自己的妹妹——一個生硬的、不太熟練的擁抱，維持了很短的時間，卻是這麼多年來，鏽溝那間永遠關不緊的鐵門裡，最完整的一次告別，儘管誰都沒有把「告別」兩個字，真正說出口。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskvh4amu9aj",
          "title": "第四十章",
          "subtitle": "最後一次爭執",
          "blocks": [
            {
              "id": "msskvh4acuay2",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1424:1-1424:41;44184-44224\">同一個晚上，靜電酒館裡，柯敖與沈鴉，爆發了認識六年以來，第一次真正意義上的爭吵。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1426:1-1426:97;44226-44322\">「這個計畫，風險太大了。」柯敖把行動路線圖重重拍在吧檯上，「祝任遠已經知道我們的存在，他手上握著白釜，這代表他很可能已經猜到我們接下來會怎麼動——鴉，我們是不是該再等等，再找一條更保險的路？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1428:1-1428:15;44324-44338\">「沈砂的評估日期，等不了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1430:1-1430:101;44340-44440\">「那也不能拿妳的命去賭！」柯敖的聲音第一次在沈鴉面前失控，「妳知道那根探線接進去之後，妳的意識會承受什麼嗎？我親眼見過顏未躺進艙裡的樣子，我不想再親眼看著一個我在乎的人，用類似的方式，從我眼前消失！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1432:1-1432:17;44442-44458\">酒館裡陷入了一陣令人窒息的沉默。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1434:1-1434:85;44460-44544\">「柯敖，」沈鴉的聲音很輕，卻異常堅定，「我知道你在怕什麼。但你自己說過，找了顏未十五年，最後想通的答案是——重點不是『找到』，是不要讓下一個顏未，連被找的機會都沒有。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1436:1-1436:17;44546-44562\">「那不代表妳要用自己的命去換！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1438:1-1438:106;44564-44669\">「如果我今天退縮，」沈鴉直視著他，「明天砂砂就會被送進那間白色艙室，然後，她會變成下一個『被消失的紀錄』，而我，會變成下一個像你一樣，花十五年、二十年，在暗處尋找卻永遠找不回來的人。柯敖，我不要那樣的十五年。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1440:1-1440:20;44671-44690\">柯敖張了張嘴，最終，卻什麼都沒能反駁。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1442:1-1442:100;44692-44791\">一直安靜坐在角落的老桐，這時緩緩開口：「柯敖，你我都是被這座城市的『沉默』耽誤過的人。你耽誤了十五年，我耽誤了四十年。有些等待，看似謹慎，其實只是害怕的另一種說法。這孩子想現在就做，就讓她現在做。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1444:1-1444:37;44793-44829\">柯敖低下頭，久久沒有說話，最終，只是重重嘆了一口氣，重新拿起那張路線圖。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1446:1-1446:77;44831-44907\">「我幫妳把所有能想到的風險，都再過一遍。」他的聲音沙啞，「但鴉，妳要答應我一件事——如果過程中出現任何我判斷撐不住的情況，妳聽我的指揮撤退，不許逞強。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1448:1-1448:8;44909-44916\">「我答應你。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1450:1-1450:75;44918-44992\">沈鴉知道，這個承諾，她大概率不會完全遵守——但她也知道，柯敖需要聽到這句話，才有辦法，在接下來的行動裡，繼續冷靜地待在她耳機另一端，做她最後的依靠。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskvss6pj9kg",
          "title": "第四十一章",
          "subtitle": "行動前的一天",
          "blocks": [
            {
              "id": "msskvss6ifpe5",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1456:1-1456:26;45016-45041\">行動前的最後一天，每個人都用自己的方式，做著準備。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1458:1-1458:156;45043-45198\">柯敖把靜電酒館的白噪音干擾器拆了又裝、裝了又拆，反覆測試每一組頻率的穩定性，確保明天遠端牽制系統時，不會出現任何一絲延遲——他嘴上說著「這種老古董設備，能撐過明天就算它燒香拜對佛」，手上的動作卻比誰都仔細，額頭上滲著細密的汗珠，一遍一遍地重複校準，像是想把這幾天所有沒能為顏未做到的事，都補償在這一次的行動裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1460:1-1460:105;45200-45304\">老桐把僅存的舊維修圖，又反覆推敲了三遍，用指尖一寸一寸，重新確認每一條通道的寬度、每一處轉角的死角範圍——他的額頭還纏著紗布，卻堅持自己再三覆核，「這是我這輩子，能替妳做的、最後一件正經事，鴉，我不能出錯」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1462:1-1462:137;45306-45442\">沈砂把那台在通風管道行動中立過功的清潔機器人，仔細拆解保養了一遍，又把備用的干擾裝置，一件一件檢查過電量，確認每一個開關都靈敏可靠——她這幾天話少了很多，卻在收拾工具箱時，第一次，把自己的名字，工工整整地刻在了工具箱的內側，像是在為自己，正式地留下一筆屬於這場行動的紀錄。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1464:1-1464:79;45444-45522\">沈鴉自己，則去了一趟根三區那家麵攤，遠遠地，最後看了一眼那個缺了角門牙的七歲女孩——她沒有靠近，只是站在原地，看著孩子被媽媽牽著手，蹦蹦跳跳地走進巷子深處。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1466:1-1466:51;45524-45574\">她在心裡，對母親說了很多話，多到連她自己都數不清究竟說了些什麼——最後，只剩下一句，反覆在心裡默唸。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1468:1-1468:34;45576-45609\">「媽，不管妳現在在哪裡，我明天，會替妳把這句話，說給整座城市聽。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1470:1-1470:93;45611-45703\">雨，在那一夜，難得地停了很短一段時間，夜隅的天空，隱約透出幾顆稀疏的星光——沈鴉抬頭望著那片久違的星空，忽然覺得，或許這是這座城市，用它自己僅存的、微弱的方式，替她們，捎來的一點祝福。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskw4nv4y8lw",
          "title": "第四十二章",
          "subtitle": "醒雨（一）迫近",
          "blocks": [
            {
              "id": "msskw4nvndu23",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1476:1-1476:124;45728-45851\">與此同時，在中環第九醫療站，值班的護理人員，正對照著隔天的排程表，例行公事地確認著各項準備工作——編號 SC-0447-R2 的評估對象，沈砂，預計於明日上午十時報到。那份表格，此刻還安安靜靜地躺在系統資料庫裡，渾然不知，自己即將永遠不會被執行。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1478:1-1478:118;45853-45970\">第九十二層廣播主控台的路線，這一次，是老桐傷後仍堅持連夜整理出的第三條、官方紀錄上「不存在」的通道，柯敖負責遠端牽制系統的一部分注意力，沈砂則留守在酒館，透過臨時架設的通訊器，隨時準備因應設備故障——她堅持要參與，最終折衷成這個角色。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1480:1-1480:62;45972-46033\">計畫原本是這樣的：柯敖製造一場物流系統的假警報，吸走大半巡邏機甲的調度優先權，沈鴉再趁隙從維修管道，一路潛行到廣播主控台。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1482:1-1482:19;46035-46053\">計畫在第二道門前，先出了第一次差錯。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1484:1-1484:82;46055-46136\">「鴉，不對勁，」柯敖的聲音忽然繃緊，「假警報系統被人手動介入了，優先權沒有被吸走，反而集中調度到妳現在的路線上——鴉，這不是巧合，是有人早一步猜到了我們的動線。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1486:1-1486:65;46138-46202\">沈鴉的心臟猛地一沉。她想起白釜被抓走前，那個保險箱裡散落的、被稽核隊翻動過的文件——祝任遠手上，恐怕早已握有比她以為的更多線索。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1488:1-1488:55;46204-46258\">第二道門後，等著她的是一組她們完全沒有預料到的機動巡邏隊，顯然是臨時加派、連柯敖的探勘紀錄都還沒來得及更新。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1490:1-1490:20;46260-46279\">「柯敖，前面有埋伏，我被夾在中間了！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1492:1-1492:59;46281-46339\">「該死，我沒偵測到這組人的調度紀錄——鴉，右手邊三公尺，有一道維修檢修口，是我上次探勘漏掉的死角，妳能撐到那裡嗎？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1494:1-1494:121;46341-46461\">沈鴉咬牙，硬是頂著肩頭的鈍痛，連滾帶爬地衝向那道檢修口，勉強擠了進去，反手死死頂住蓋板，聽著外頭巡邏隊呼喊著「往這個方向搜」，腳步聲在她頭頂上方，來來回回，持續了將近五分鐘之久——那五分鐘裡，她大氣都不敢喘，汗水混著雨水，順著臉頰不斷滑落。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1496:1-1496:64;46463-46526\">「他們暫時撤了，」柯敖的聲音終於再次響起，帶著劫後餘生的顫抖，「鴉，這條路走不通了，妳得繞另一條備用路線，會多花至少十分鐘。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1498:1-1498:12;46528-46539\">「砂砂的評估期限——」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1500:1-1500:56;46541-46596\">「我知道，」柯敖打斷她，「但硬闖，只會讓妳連主控台的邊都摸不到，鴉，冷靜一點，十分鐘，我們還有十分鐘的餘裕。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1502:1-1502:84;46598-46681\">沈鴉深吸一口氣，強迫自己按下翻湧的焦躁，順著柯敖重新規劃的備用路線，咬牙繼續前進，一路提心吊膽——這一次，備用路線總算安靜得可疑，安靜到她心裡那股不安，反而越積越重。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1504:1-1504:64;46683-46746\">第三道門後，等著她的不是空無一人的走廊，而是提前佈防的巡邏隊，還有，站在隊伍最前方，那個她在酒會上見過一次、深灰色制服的身影。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1506:1-1506:160;46748-46907\">「妳的偽裝技巧確實不錯。」祝任遠的聲音很平靜，沒有任何情緒起伏，「但你們這幾個月調動的資源、路線、時間點，太過集中在同一個目標上——一個資產稽核員最基本的直覺，就是看模式，鴉。妳的模式，太乾淨了，乾淨到不像是隨機的個人行動。剛才那組佯攻的巡邏隊，也是我臨時加派的——我猜到妳們會繞路，只是想確認，妳真的走到了這一步。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1508:1-1508:42;46909-46950\">沈鴉沒有回答，飛快地評估著周圍的地形——退路已經被巡邏隊封死，唯一的可能，是硬闖。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1510:1-1510:101;46952-47052\">「我不是來抓妳的，至少現在還不是。」祝任遠往前走了一步，「我是來給妳一個選擇——把妳知道的東西交出來，妳妹妹的評估，我可以想辦法幫妳拖延，甚至撤銷。妳查到的東西，如果屬實，我會用正規程序，往上呈報。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1512:1-1512:37;47054-47090\">「正規程序。」沈鴉冷笑了一聲，「就像你們稽核隊處理白釜那樣的正規程序？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1514:1-1514:21;47092-47112\">祝任遠的表情第一次出現了一絲細微的波動。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1516:1-1516:140;47114-47253\">「白釜隱瞞了重大線索。」他說，「而妳現在，準備做的事，是把一件連我自己，一個在集團體制內做了十幾年的人，都還沒能完全查清楚的事情，用最粗暴的方式，一次性砸向整座毫無準備的城市。妳知道那會造成什麼後果嗎？兩百萬人同時陷入恐慌與混亂，這座城市會付出的代價，不會比妳想揭發的真相輕。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1518:1-1518:29;47255-47283\">「所以你想要的，是繼續讓大家蒙在鼓裡，換取所謂的秩序？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1520:1-1520:79;47285-47363\">「我想要的，」祝任遠的聲音第一次微微提高，帶上一絲他自己似乎都沒有察覺的激動，「是不要再有下一場，因為沒有紀錄、沒有程序、什麼都亂成一團，而白白死掉的人。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1522:1-1522:67;47365-47431\">沈鴉盯著他，忽然意識到，眼前這個男人，不是簡單的鷹犬，而是跟她一樣，背著一段沒能好好告別的過去，只是他選擇相信的解方，跟她完全相反。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1524:1-1524:41;47433-47473\">「我沒有時間跟你辯論誰的方法比較正確。」她說，「我妹妹的評估，明天中午就到期。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1526:1-1526:83;47475-47557\">她說完，猛地將隨身攜帶的干擾裝置擲向地面——那是柯敖臨時改裝的強光閃光彈，白光炸開的瞬間，巡邏隊的視覺感應器全部瞬間過載——沈鴉趁著這一片混亂，貼著牆側身衝了出去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1528:1-1528:137;47559-47695\">她貼牆疾行了幾步，忽然聽見身後傳來祝任遠的聲音，隔著逐漸消散的白光煙霧，異常清晰：「封鎖第九十二層所有出入口，通知第七維生層加派警戒！」他的指揮沒有一絲遲疑，卻在轉身時，腳步略略頓了半秒——彷彿有那麼一瞬間，他也在自己心裡，反覆確認著，這個決定，究竟是不是他真正想做的事。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskwp49cr1ks",
          "title": "第四十三章",
          "subtitle": "醒雨（二）祝任遠",
          "blocks": [
            {
              "id": "msskwp49yhcwg",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1534:1-1534:61;47721-47781\">巡邏隊被閃光彈晃得七零八落，唯獨祝任遠——顯然是有備而來，護目鏡自動降下遮住了雙眼——幾乎沒有耽擱，直直朝沈鴉追了上去。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1536:1-1536:73;47783-47855\">走廊在她腳下延伸成一條沒有盡頭的直線，身後傳來的腳步聲，越來越近。她能感覺到自己肩膀被一隻手粗暴地扯住，整個人被甩得撞上牆壁，痛得眼前一陣發黑。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1538:1-1538:112;47857-47968\">「妳沒有機會了。」祝任遠按住她的肩膀，聲音裡帶著一絲不易察覺的疲憊，「妳以為我沒有查過妳這六年的紀錄嗎？周伯那筆、還有另外十筆，妳額外贈與家屬的記憶——鴉，妳明明是個心軟的人，為什麼要選一個會把兩百萬人一起拖下水的方法？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1540:1-1540:91;47970-48060\">「因為心軟救不了我妹妹。」沈鴉咬牙，用盡全身力氣，反手用肘擊撞開他扣住肩膀的手，「因為你們的『正規程序』，七年前，讓我媽媽的死亡證明上，寫著一個查無此病的病名，然後就沒有然後了！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1542:1-1542:120;48062-48181\">她這一撞，兩人一同踉蹌著撞進主控台外側的機房，警報聲開始在整層樓迴盪。祝任遠迅速站穩，再次欺身上前，試圖將她壓制在地——沈鴉的動作明顯慢了半拍，這幾天連續的高強度行動，早已耗光了她大部分的體力，她能清楚感覺到，自己這一次，恐怕撐不過去了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1544:1-1544:126;48183-48308\">就在祝任遠的手即將扣住她另一側肩膀的瞬間，機房牆角一具原本待機的清潔機器人，忽然發出刺耳的異常噪音，猛地轉向，朝著祝任遠的方向衝撞過去——那是沈砂，遠端接入了這層樓的內部設備網路，用她那雙修過無數義肢與電路的手，臨時劫持了一具最不起眼的清潔用機器人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1546:1-1546:32;48310-48341\">「姊，快走！我只能拖住他三十秒！」沈砂在耳機裡的聲音又急又亮。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1548:1-1548:67;48343-48409\">祝任遠側身閃避那具失控衝撞的清潔機器人，動作出現了短暫的破綻——沈鴉抓住這稍縱即逝的機會，掙脫他的鉗制，跌跌撞撞地衝向主控台的方向。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1550:1-1550:89;48411-48499\">祝任遠很快擺脫了機器人的糾纏，再次追了上來，這一次，他的動作裡帶上了一絲近乎憤怒的急切——沈鴉能感覺到，自己與主控台之間的距離，正在被他一步一步縮短，而她的體力，已經到了極限。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1552:1-1552:140;48501-48640\">她跌撞著撲到主控台前，指尖剛觸及防護蓋板的邊緣，祝任遠已經欺身趕到，一把將她整個人拽離主控台，狠狠摔在地上。沈鴉幾乎立刻掙扎著爬起，卻被他反手鎖住手臂，重新壓制在牆邊——這一次，他的動作裡帶上了一種近乎絕望的用力，像是在用盡全身力氣，克制著自己不去多想這個決定，究竟意味著什麼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1554:1-1554:41;48642-48682\">「妳沒有機會了！」他嘶吼著，聲音裡混雜著他自己都未必察覺的、某種類似哀求的東西。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1556:1-1556:81;48684-48764\">沈鴉的視野開始因為缺氧與疼痛而發黑，她能感覺到自己的意識，正一點一點被壓制的力道逼向邊緣——就在這一瞬間，沈鴉毫無退路，脫口而出一句她自己都沒想過會說出口的話。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1558:1-1558:39;48766-48804\">「你母親跟弟弟，是不是也想要一個像樣的紀錄，而不是一片什麼都沒留下的空白！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1560:1-1560:14;48806-48819\">祝任遠的動作，猛地僵住了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1562:1-1562:93;48821-48913\">那半秒的遲疑，很短，短到連他自己或許都沒有真正意識到自己遲疑了——但那半秒，足夠沈鴉用盡最後的力氣，反手一肘擊中他的手腕，掙脫箝制，撲向主控台，將顫抖的右手指尖，狠狠插入了核心介面孔。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1564:1-1564:19;48915-48933\">「柯敖，」她嘶啞地喊出聲，「現在！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1566:1-1566:98;48935-49032\">祝任遠踉蹌著站穩，一時間，竟沒有立刻再撲上前——他站在原地，望著沈鴉痛苦地維持著與主控台的連接，胸口劇烈起伏，握緊又鬆開的拳頭，僵持了幾秒鐘，像是在自己心裡，打完這一仗最後、也最艱難的一場戰爭。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskx65in92sv",
          "title": "第四十四章",
          "subtitle": "醒雨（三）讓開的半步",
          "blocks": [
            {
              "id": "msskx65itkh0x",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1572:1-1572:104;49060-49163\">資訊洪流灌注的瞬間，一陣尖銳的、彷彿有人直接在她顱骨內側劃開一道口子的劇痛貫穿全身——但這個過程並非瞬間完成，柯敖的聲音在耳機裡緊繃地報著進度：「百分之二十……鴉，妳撐住，這需要至少九十秒才能完整送出去！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1574:1-1574:80;49165-49244\">祝任遠站起身，臉色複雜地看著沈鴉痛苦地維持著與主控台的連接，他的手，再次抬起，像是要伸手拔掉那根探線——只要中斷連接，這場廣播就會功虧一簣，一切代價都會白費。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1576:1-1576:7;49246-49252\">「祝隊長。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1578:1-1578:29;49254-49282\">一個清亮的、帶著頂環貴族腔調的聲音，忽然從機房入口傳來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1580:1-1580:168;49284-49451\">甄長樂站在門口，禮服下擺還沾著匆忙趕來的雨漬——她這幾天，一直讓助理密切留意主控台區域的異常，今晚警報響起的那一刻，她正在自己的寓所裡，對著鏡子，反覆練習著，她始終沒有勇氣說出口的那句「對不起」。得知異常發生的地點後，她幾乎是不假思索地，扯下身上待客用的居家服，隨手抓過一件禮服披上，衝進了雨裡——她比任何人都更早猜到，發生了什麼事。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1582:1-1582:42;49453-49494\">「議員，請您先撤離，這裡不安全。」祝任遠的手停在半空，語氣裡帶著一絲下意識的恭敬。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1584:1-1584:103;49496-49598\">「我不走。」甄長樂的聲音很輕，卻異常堅定，「祝任遠，你聽好了——如果你現在拔掉那根探線，這座塔裡三十座艙體正在進行的續存分段，會因為系統緊急斷連而全部失敗，包括我下週那場，本來就已經失控的『殘響清理』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1586:1-1586:15;49600-49614\">「這不是重點。」祝任遠皺眉。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1588:1-1588:169;49616-49784\">「重點是，」甄長樂往前走了一步，擋在祝任遠與主控台之間，聲音忽然低了下去，帶上一絲連她自己都感到陌生的顫抖，「我這幾個月，一直壓不下去的那段殘響，那段搖籃曲——我現在知道那是誰的了。她是這個女孩的母親。祝任遠，我不知道『昇華』兩個字，我還能不能心安理得地說出口，但我知道，如果我今天讓你拔掉那根線，我這輩子，都不會再有機會知道答案了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1590:1-1590:20;49786-49805\">祝任遠盯著她，一時間，沒有再往前一步。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1592:1-1592:47;49807-49853\">「議員，妳知道這代表什麼嗎？」他的聲音有些發緊，「這代表妳在協助一場會癱瘓半個集團的行動。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1594:1-1594:128;49855-49982\">「我知道。」甄長樂閉了閉眼，再睜開時，眼裡是一種近乎解脫的平靜，「我在這個位置上，續存了七年，七年裡，我從沒有問過自己一次，撐著這個名字活下去，代價是誰。祝任遠，你信奉秩序，我曾經也信奉『昇華』——但今天，讓我自私一次，讓一個母親，把她想說的話，說完。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1596:1-1596:40;49984-50023\">她沒有再說什麼，只是側身，張開雙臂，用自己的身體，徹底擋在祝任遠與主控台之間。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1598:1-1598:151;50025-50175\">祝任遠站在原地，握緊又鬆開的拳頭，僵持了足足十幾秒——他腦海裡，飛快地閃過三十年前，那片瓦礫堆裡，那塊殘缺的「祝」字門牌，還有這幾週來，他在無數份斷簡殘篇裡，反覆讀到的、那些跟他母親、弟弟一樣，消失得無聲無息的名字。他終究，沒有選擇強行推開一名常青議員，用蠻力完成他自己都說不清是不是真的認同的任務。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1600:1-1600:28;50177-50204\">「柯敖，進度多少？」沈鴉的聲音已經開始因為劇痛而扭曲。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1602:1-1602:19;50206-50224\">「百分之九十——鴉，撐住最後幾秒！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1604:1-1604:22;50226-50247\">雨，在那一刻，第一次真正落到了夜隅每一層。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskxhz0tzxgk",
          "title": "第四十五章",
          "subtitle": "醒雨（四）廣播",
          "blocks": [
            {
              "id": "msskxhz0qcgxj",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1610:1-1610:5;50272-50276\">不是水。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1612:1-1612:167;50278-50444\">是七年來被過濾、被課稅、被回收、被無數雙選擇沉默的手擋在管線之外的真相——三十座白色培育艙的畫面，老桐地窖裡那些用鮮血搶救回來的殘破字句，白釜潦草寫在名冊邊緣的批註，還有沈鴉自己的聲音，清晰地，同步出現在夜隅七千萬個還醒著的、還睡著的、正在中環路口等紅燈的、正在頂環喝著過濾雨水釀成的酒的、正在根層修理義體零件的每一個人腦海深處——</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1614:1-1614:134;50446-50579\">她篩掉了種子池編號重疊的那一部分，篩掉了「原環會或許比城市本身還古老」的那一部分——那些東西太大，太模糊，太容易被扭曲成另一種操弄人心的工具，她只留下最堅實、最不容辯駁的核心：白色艙室的畫面，官方文件的原始條文，母親的編號，還有她自己，作為沈曉茉女兒的第一人稱證詞。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1616:1-1616:144;50581-50724\"><strong>「我的母親沈曉茉，四十一歲那年，被恆憶集團以『健康檢查』的名義帶走。她沒有死於任何一種病。她的身體，現在還活著，只是裡面裝著別人的意識——而在她之前，還有無數個和她一樣的人。這座城市告訴你們，死亡是公平的，但死亡從來沒有公平過，只是有些人的死，被拿去換了另一些人多活的每一天。」</strong></p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1618:1-1618:33;50726-50758\">那一瞬間，這座城市裡，無數個彼此無關的人，同時停下了手邊的動作。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1620:1-1620:101;50760-50860\">在根三區，正把折疊桌收拾好準備收攤的霓生，猛地僵住，手裡的紙筆散落一地——她腦海裡閃過的，不是那段廣播的內容，而是自己筆記本裡，那些寫給消失的人的、沒能親口說完的句子，此刻終於有了一個可以安放的名字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1622:1-1622:104;50862-50965\">在中環那間麵館裡，周伯的兒子正在後廚收拾，忽然停下手，望著牆上那枚裝著父親包餃子手法的記憶晶球，第一次意識到，這座城市裡，還有更多這樣的晶球，本該屬於一個個活生生的人，此刻卻可能被鎖在某座冰冷的白色艙室裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1624:1-1624:104;50967-51070\">在頂環某棟浮島式的宅邸裡，一名年邁的常青議員，手中的酒杯滑落在地，摔得粉碎——他猛地想起自己這具身體，「續存」之前那個原本的主人，最後一次留下的模糊印象，一直被他當成療程的副作用，此刻，忽然有了另一種解釋。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1626:1-1626:108;51072-51179\">而在中環邊界那間臨時審訊據點裡，白釜正靠在牢房冰冷的牆邊，聽見遠處值班室裡，看守人員驚慌失措地大喊「怎麼回事，全城的頻道都在播同一段東西」，他閉上眼睛，露出一個混雜著解脫與苦澀的笑容——他知道，這代表沈鴉，成功了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1628:1-1628:191;51181-51371\">她感覺自己的意識，像是被放進一台巨大的、正在超載運轉的機器裡，資訊以一種她從未體驗過的速度，反向湧入她的神經——不只是她正在傳送出去的東西，還有一種模糊的、龐大的回饋感，彷彿她能隱約感覺到，此刻，這座城市裡，每一個接收到這段訊息的人，心跳加速的那一瞬間，都透過某種她無法解釋的方式，微弱地，回響進她自己的意識深處，像是七千萬顆心臟，在同一秒，發出了同一聲，遲來已久的、驚愕的悸動。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1630:1-1630:101;51373-51473\">意識邊緣開始一寸一寸地剝落、燒灼、失焦。她最後清晰記得的畫面，不是白色艙室，不是甄長樂張開雙臂擋在她身前的背影，是很多年前一個尋常的冬夜，母親一邊織著毛線，一邊哼著跑調的搖籃曲，催促她和沈砂早點睡覺。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1632:1-1632:82;51475-51556\">她感覺自己的身體，正一寸一寸地滑向地面，恍惚間，聽見祝任遠的聲音，在意識徹底崩解前的最後一瞬，隔著越來越遠的距離，說了一句她再也無法確認自己是否真的聽清楚的話——</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1634:1-1634:12;51558-51569\">「……我去叫醫療隊。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1636:1-1636:9;51571-51579\">然後，一切歸零。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskxt7oy4rjy",
          "title": "第四十六章",
          "subtitle": "塌方之後",
          "blocks": [
            {
              "id": "msskxt7on0hpt",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1642:1-1642:27;51601-51627\">沈鴉是四天後，在根三區一間非法地下醫療站裡醒過來的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1644:1-1644:146;51629-51774\">她能感覺到自己的身體，卻有很長一段時間，感覺不到自己是誰——她的長期記憶像是一座被地震震塌了大半的建築，有些房間完好如初，有些房間只剩下地基，有些房間，她甚至記不得自己曾經在裡面住過。她花了將近一個小時，才重新拼湊出「沈砂」這個名字，跟床邊那張紅腫著眼睛、卻努力擠出笑容的臉，屬於同一個人。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1646:1-1646:161;51776-51936\">「評估取消了。」沈砂握著她的手，聲音帶著哭腔，「姊，整座城市都亂了。醒雨協定播出去的那一刻，中環和根層有超過兩百萬人同時停下手邊的事情，恆憶集團的股價在四小時內崩了七成，常青議會裡有三個席位，當天就被自己的護衛隊直接拘押——甄長樂……那個位置，現在空著，沒有人知道發生了什麼事，集團的公告只寫了『暫時卸任，休養調整』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1648:1-1648:95;51938-52032\">沈鴉望著天花板，一時間分不清自己此刻的情緒，究竟是解脫，還是空茫。她想起主控台前，甄長樂張開雙臂擋在她身前的背影，忽然明白，那個位置「空著」，或許不是被拘押，而是有人，終於選擇不再回去坐。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1650:1-1650:50;52034-52083\">她沒有把這個猜測說出口——這件事，跟種子池編號重疊那部分一樣，太大，太不確定，只能留在她自己心裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1652:1-1652:47;52085-52131\">沈砂扶著她，慢慢走到醫療站門口透氣，沈鴉這才第一次，親眼看見廣播過後的夜隅，變成了什麼樣子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1654:1-1654:191;52133-52323\">中環那些永遠灰濛濛的懸浮廣告牌，此刻大半都被切斷了電力，黑漆漆地懸在半空，像一具具失去生命的巨大骨架；街道上，隨處可見自發聚集的人群，有人舉著臨時寫就的標語，有人只是茫然地站著，望著頂環的方向，久久不語；根層的公佈欄前，圍著比平常多上好幾倍的人潮，議論紛紛，有人在哭，有人在憤怒地咒罵，也有人，只是默默地把自己家人的照片，貼上了公佈欄旁那面新出現的、寫著「尋找歸環者」的臨時牆面。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1656:1-1656:55;52325-52379\">那面牆，短短幾天內，已經貼滿了層層疊疊的照片與姓名，像是這座城市積壓了太久太久、終於找到出口的一場集體悼念。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1658:1-1658:157;52381-52537\">沈砂告訴她，一群曾經被恆憶集團以各種名義帶走過家人的市民，已經自發組成了一個叫「調用受害者協會」的組織，第一批加入的，多半是像周伯的兒子、老陳的遠房表親這樣，過去只能私下懷疑、卻無處申訴的普通人。他們每天在議會大廳外靜坐，要求公開所有「續存分段」與「拆分編碼」的完整紀錄，要求成立獨立於恆憶集團之外的調查委員會。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1660:1-1660:78;52539-52616\">「他們找過妳，」沈砂說，「想請妳出面當發言人，我幫妳擋回去了，跟他們說妳現在身體狀況不適合——姊，妳做到這一步，已經夠了，接下來的事，該讓更多人一起扛。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1662:1-1662:112;52618-52729\">沈鴉看著窗外那群舉著標語、彼此扶持著的人群，忽然想起柯敖說過的話——重點不是找到，是不要讓下一個顏未，連被找的機會都沒有。此刻，這句話，第一次不再只是她跟柯敖兩個人心裡的執念，而是變成了一整群人，共同背負、共同前行的方向。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1664:1-1664:51;52731-52781\">沈砂坐在她床邊，握著她的手，忽然想起這幾天，自己私下反覆咀嚼過的一個念頭，卻始終沒有找到機會說出口。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1666:1-1666:212;52783-52994\">「姊，」她低聲說，「營救白釜那天，在通風管道裡，等待搜索隊經過的那幾分鐘，我一直在想，如果我們真的是碎片，如果一切都只是某種巨大機制底下的隨機排列——那至少，我很慶幸，這次排列，把我跟妳，排成了姊妹。不管上一輩子、上上一輩子，我們是誰，這一次，我很高興是現在這樣，是妳，跟我。」她說完，自己也覺得這番話有點傻氣，忍不住輕輕笑了一下，那笑聲裡，帶著劫後餘生的釋然，也帶著一種，終於敢把心裡最柔軟的部分，攤開來給姊姊看的勇氣。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1668:1-1668:29;52996-53024\">沈鴉的眼眶，第一次因為這句話，而不是因為疼痛，濕潤起來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1670:1-1670:7;53026-53032\">「白釜呢？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1672:1-1672:91;53034-53124\">「混亂那天晚上，稽核隊的臨時據點也癱瘓了，」沈砂說，「他趁亂逃出來了，人瘦了一圈，但沒事——柯敖說他現在正式把那個藏了二十年的地下網路公開了，說『反正都已經掀開了，不差這一點』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1674:1-1674:8;53126-53133\">「祝任遠呢？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1676:1-1676:133;53135-53267\">沈砂的表情微妙了一下：「他沒有被追究瀆職，也沒有被表揚——集團高層自身難保，沒空理會一個隊長在混亂中做了什麼選擇。柯敖說，這幾天有人看見他，一個人在中環的稽核隊舊辦公室裡，把過去十幾年他經手過的每一份『資產異常』紀錄，一份一份重新調出來看，沒有人知道他在想什麼。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1678:1-1678:95;53269-53363\">沈鴉沒有再追問。她想起那句自己脫口而出、連自己都沒料到會奏效的話，想起他那半秒的遲疑，忽然覺得，這個一直站在她對立面的男人，或許跟她一樣，只是還沒找到，該拿那份沒能好好告別的過去，怎麼辦。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1680:1-1680:23;53365-53387\">白釜是在沈鴉清醒的第五天，第一次來探望她的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1682:1-1682:117;53389-53505\">他瘦了整整一圈，臉頰凹陷，眼窩下方是濃重的黑青，但精神卻異常亢奮——一進門，就從懷裡掏出一疊皺巴巴的紙，那是他這幾天，趁著集團自身難保、稽核系統形同虛設的空窗期，親自跑遍了殘存的幾處資料節點，搶救回來的、更多關於「歸還」紀錄的線索。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1684:1-1684:52;53507-53558\">「妳看看妳，」白釜在她床邊坐下，語氣裡帶著劫後餘生的感慨，「差點把自己搞丟了，還好柯敖那孩子夠機靈。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1686:1-1686:15;53560-53574\">「你還好嗎？」沈鴉虛弱地問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1688:1-1688:149;53576-53724\">「餓瘦了幾斤，其他都好。」白釜擺擺手，忽然想起什麼似的，從口袋裡摸出一枚舊懷錶，「這個，是祝任遠審訊我那晚，我隨口提起我妹妹的名字後，他悄悄塞給我的——他說，這是他們稽核隊查案時，從一批要銷毀的舊物裡，找到的，登記主人正好也姓白，年份也對得上，他猜可能是我妹妹留下的遺物，讓我自己判斷要不要收。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1690:1-1690:61;53726-53786\">沈鴉看著他摩挲著那枚懷錶的手，忽然覺得，這場混亂，或許已經在很多她看不見的角落，悄悄鬆動了一些，原本以為堅不可摧的東西。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1692:1-1692:104;53788-53891\">「鴉，」白釜的聲音忽然鄭重起來，「不管接下來會怎麼樣，謝謝妳。我這二十年，一直覺得自己是個懦夫，只敢在暗處做一點小小的、不會傷到自己的善事。是妳，讓我這把年紀，第一次，覺得自己也能堂堂正正地，站到光底下。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1694:1-1694:36;53893-53928\">沈砂頓了頓，小心翼翼地從口袋裡，取出一枚小小的記憶晶球，放進沈鴉手心。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1696:1-1696:40;53930-53969\">「這是柯敖從資料庫底層搶救出來的，是……是媽媽的。不完整，只有大概二十分鐘。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1698:1-1698:82;53971-54052\">那二十分鐘裡，沒有戲劇性的告白，沒有壯烈的遺言，只有一個母親在某個尋常的冬夜，一邊織著毛線，一邊哼著跑調的搖籃曲，催促著兩個女兒早點睡覺的，瑣碎又溫暖的日常片段。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1700:1-1700:55;54054-54108\">沈鴉把臉埋進枕頭，終於，在這座從不真正下雨，卻終於第一次讓所有人都被淋透了真相的城市裡，毫無保留地哭了出來。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-mssky7b283lxz",
          "title": "第四十七章",
          "subtitle": "議會廣場的聲音",
          "blocks": [
            {
              "id": "mssky7b2ll3it",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1706:1-1706:55;54133-54187\">沈鴉還在恢復期，無法親自到場，但柯敖用隨身裝置，替她轉播了「調用受害者協會」在議會廣場舉辦的第一場大型集會。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1708:1-1708:108;54189-54296\">畫面裡，密密麻麻的人群，從根層、中環，甚至有部分良心未泯的頂環居民，聚集在議會大廳外的廣場上，手裡舉著各式各樣的照片與姓名牌——那些原本只出現在「尋找歸環者」臨時牆面上的名字，此刻，被無數雙手，高高舉起，喊出聲來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1710:1-1710:108;54298-54405\">一名瘦削的老婦人，站上臨時搭建的講台，聲音因為激動而顫抖：「我兒子，三年前『病逝』，官方紀錄上，死因寫著查無病理紀錄的怪病——今天，我終於敢站在這裡，大聲說出他的名字：陳懷安！我要恆憶集團，告訴我，他到底在哪裡！」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1712:1-1712:80;54407-54486\">台下爆發出震耳欲聾的應和聲，緊接著，一個接一個的名字，被輪流喊出——有老人，有中年人，甚至有幾個看起來不過十來歲的孩子，替自己早逝的兄弟姊妹，喊出他們的名字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1714:1-1714:120;54488-54607\">周伯的兒子，也帶著他的女兒，站上了講台，手裡捧著那枚沈鴉當初額外留給他們的記憶晶球，聲音哽咽：「我父親，是壽終正寢，走得體面——但我今天站在這裡，是替那些沒能像我父親一樣，走得體面的人發聲。這座城市欠他們一個真相，欠他們一句『對不起』。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1716:1-1716:41;54609-54649\">柯敖看著轉播畫面，忍不住紅了眼眶：「鴉，妳聽見了嗎？他們在喊，他們終於敢喊了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1718:1-1718:93;54651-54743\">沈鴉躺在病床上，望著天花板，聽著那些此起彼落、混雜著悲傷與憤怒卻無比清晰的聲音，忽然覺得，自己這幾週來，所有的恐懼、猶豫與代價，此刻都有了一個具體而真實的重量，落在了她能感受到的地方。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1720:1-1720:34;54745-54778\">「柯敖，」她輕聲說，「幫我在心裡，替他們每一個人，都記一次名字。」</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskyjtx37l70",
          "title": "第四十八章",
          "subtitle": "公開的辭任",
          "blocks": [
            {
              "id": "msskyjtxwi2yq",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1726:1-1726:117;54801-54917\">沈鴉還在昏迷的那幾天，甄長樂做了一件震動整個頂環的事——她沒有像其他倖存的常青議員那樣，躲進私人領地閉門不出，也沒有第一時間發表撇清責任的聲明，而是在混亂尚未平息的第三天，親自站上了議會大廳外，那個原本用來對市民宣達政令的公開講台。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1728:1-1728:162;54919-55080\">「我是甄長樂。」她的聲音，透過殘存的公共廣播系統，傳遍了尚在騷動中的議會廣場，「過去七年，我以這個名字，享受著這座城市給予『常青者』的一切——資源、權力、被稱為『昇華』的體面。今天，我要告訴大家一件事：這具身體，原本的主人，叫沈曉茉，是根三區一位普通的母親，兩個女兒的母親。她沒有『昇華』，她被強行帶走，被拆解成了兩半。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1730:1-1730:23;55082-55104\">廣場上一片死寂，隨即爆發出巨大的騷動與怒吼。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1732:1-1732:140;55106-55245\">「我無法歸還這具身體，因為她本來的意識，已經無法完整復原。」甄長樂的聲音，第一次在公開場合，帶上了毫不掩飾的顫抖，「我能做的，只有公開放棄『甄長樂』這個名籍持有的所有權力與資產，接受獨立調查委員會的全面審查，並且，用我剩下的時間，協助追查，這套系統，還傷害過多少像她一樣的人。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1734:1-1734:102;55247-55348\">這場公開辭任，成了壓垮恆憶集團殘餘公信力的最後一根稻草——原本還在觀望、猶豫要不要相信廣播內容的部分中環公民，在親眼見證一名常青議員，願意親口承認、親自放棄一切之後，徹底倒向了「調用受害者協會」這一方。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1736:1-1736:143;55350-55492\">沈鴉是後來從沈砂口中，斷斷續續聽說這件事的完整經過的。她沒有立刻對這件事，生出任何情緒——直到很久以後，她才漸漸想明白，甄長樂選擇的這條路，或許正是她自己能想到的、唯一一種，稱得上是「償還」的方式——不是用言語道歉，而是用親手拆解自己曾經擁有的一切，去換一絲，哪怕微不足道的贖罪空間。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskyuzafh9mh",
          "title": "第四十九章",
          "subtitle": "霓生的清單",
          "blocks": [
            {
              "id": "msskyuzai3xik",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1742:1-1742:45;55515-55559\">醒雨協定播出後第七天，霓生第一次鼓起勇氣，走進了「記憶歸還行動」臨時設立在中環的登記站。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1744:1-1744:86;55561-55646\">排隊的人很多，隊伍一路蜿蜒到街角——有人是來確認自己某個「病逝」的親人，有人只是想弄清楚，自己每年例行的「健康檢查」，究竟被抽走過什麼。霓生排了將近四個小時，才輪到自己。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1746:1-1746:102;55648-55749\">「哥哥叫霓恆。」她把那本用碎布包起來、已經寫到第三本的筆記本，放在登記桌上，「兩年前簽了『志願器官捐贈』合約，官方紀錄寫著至今存活，但後續狀態不對外揭露。我想查，他有沒有被拆分編碼，有沒有下放的紀錄。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1748:1-1748:59;55751-55809\">登記站的志工——一個柯敖親自訓練出來的年輕人——花了將近半小時，在殘缺不全、還在持續搶救修復中的資料庫裡，反覆比對。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1750:1-1750:65;55811-55875\">志工是柯敖親自帶出來的第一批學生之一，動作嚴謹卻不失溫度，翻找資料時，會不時抬頭看看霓生的表情，確認她是否還能承受接下來的內容。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1752:1-1752:132;55877-56008\">「霓小姐，」志工最後抬起頭，神情有些為難，「妳哥哥那個時間點的紀錄，剛好落在系統一次大規模覆寫的區間裡，我們現在能救回來的資料很不完整——我只能告訴妳，妳哥哥的神經模板編號，確實出現過一次『續存分段』紀錄，對應的名籍，目前查不到，殘餘片段的下放紀錄，也是空白。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1754:1-1754:38;56010-56047\">「空白是什麼意思？」霓生的聲音有些發緊，「是沒有下放，還是紀錄被銷毀了？」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1756:1-1756:60;56049-56108\">「我不知道，」志工誠實地搖頭，「這是我目前能給妳最準確的答案——空白，就是空白，我沒辦法替妳把它變成一個確定的故事。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1758:1-1758:116;56110-56225\">霓生站在登記站外的街道上，久久沒有動。她想起自己這兩年寫過的無數封信，想起自己一直以為，只要有一天真相大白，就會有一個明確的答案，等在某個地方——結果她等到的，只是另一片空白，跟哥哥當年那封「不對外揭露」的合約，本質上沒什麼不同。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1760:1-1760:70;56227-56296\">但她沒有像從前那樣，把這份失落，鎖進心裡不再提起。她回到攤子，翻開那本寫到第三本的筆記本，在最新一頁，寫下了一段不是要念給任何客人聽的話：</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1762:1-1762:115;56298-56412\">「哥，我還是不知道你在哪裡。但我現在知道，這座城市裡，有一整群人，正在幫像你這樣的人，把名字一個一個找回來。如果有一天，真的找到了什麼，哪怕只是一個編號，我都會去看你。在那之前，我會繼續幫像你這樣的人，把沒能說完的話，寫下去。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1764:1-1764:63;56414-56476\">她把這一頁，第一次，沒有謄抄進「寫完即焚」的行規裡，而是小心地夾進了筆記本最前面，當作一封她寫給自己的、暫時還沒有地址的信。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        },
        {
          "id": "chapter-msskz753jyyxl",
          "title": "尾聲",
          "subtitle": "仍在下的雨",
          "blocks": [
            {
              "id": "msskz753wyb07",
              "type": "text",
              "text": "<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1770:1-1770:397;56496-56892\">沈鴉的神經系統，再也無法完全復原——她時常會在某個尋常的下午，忽然忘記自己前一分鐘正在做的事，或者，在毫無預警的情況下，想起一些不屬於她自己、卻又無比清晰的畫面碎片。她不再是記憶獵人了，她把那間永遠關不緊的鏽溝鐵門，改造成了一個小小的分站，幫忙尋找那些散落在存靈艙資料庫深處、還沒被拆解殆盡的人的殘存記憶，一點一點，物歸原主——她也開始收學徒，第一個找上門的，是那個曾經跟著周伯學包餃子的小孫女，如今長大了些，說想學一門「能幫人留住東西」的手藝；沈鴉教她的第一課，不是任何技術操作，而是那條她堅持了六年的老規矩——先叫出對方的名字，而不是編號。有時候，她會在毫無預警的情況下，腦海裡閃過一段完全陌生的畫面：某個中環路口的早餐攤、某扇她從未去過的頂環公寓窗景、某個孩子第一次騎上義肢輪的笑聲。她漸漸學會，不去抗拒這些片段，而是把它們，當成這座城市，用它自己的方式，跟她說著「謝謝」與「對不起」。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1772:1-1772:99;56894-56992\">這些，都只是沈鴉某個雨夜，跟沈砂閒聊時，隨口帶過的片段——每一件，都足以單獨寫成一整段故事，此刻卻只是她生活裡，稀鬆平常的一部分，像是這座城市，終於學會了，把巨大的傷痛，也妥善地，過成尋常的日子。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1774:1-1774:105;56994-57098\">醒雨協定播出後第兩個月，沈鴉收到了一封沒有署名的信，約她在中環邊界一處廢棄的舊公園見面。她猶豫了很久，最終還是去了——來的人，是甄長樂，穿著一身樸素得幾乎認不出來的便服，臉上帶著這幾個月來明顯瘦了一圈的痕跡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1776:1-1776:109;57100-57208\">「集團的清算程序，大概還要一年才能走完。」甄長樂在長椅另一端坐下，跟沈鴉隔著一段刻意保持的距離，「我把名籍持有的所有資產，都申報充公了，現在住在中環一間很普通的出租屋裡，學著自己買菜、自己做飯——手很笨，常常燒焦。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1778:1-1778:17;57210-57226\">沈鴉沒有接話，只是靜靜地看著她。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1780:1-1780:140;57228-57367\">「我不會說『對不起』，」甄長樂望著遠方，聲音很輕，「這三個字，太輕了，配不上我這七年拿走的東西。我只是想讓妳知道，那段殘響——那首搖籃曲——我沒有讓他們清理掉，我把它留下來了。它現在常常在我睡著的時候出現，我聽不懂全部的旋律，但我知道，那不是我的東西，我只是暫時，替她保管著。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1782:1-1782:31;57369-57399\">沈鴉沉默了很久，久到公園裡那盞孤零零的舊路燈，自動亮了起來。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1784:1-1784:41;57401-57441\">「妳保管得再久，」她終於開口，聲音裡沒有憤怒，只有一種深沉的疲憊，「也還不了。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1786:1-1786:19;57443-57461\">「我知道。」甄長樂點點頭，沒有反駁。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1788:1-1788:79;57463-57541\">「但謝謝妳，那天張開手臂擋在我面前。」沈鴉站起身，準備離開，「如果哪天妳想通了那首歌完整的樣子，可以告訴我。我想聽聽，媽媽在我不知道的地方，還留下過什麼。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1790:1-1790:165;57543-57707\">她沒有回頭去看甄長樂當時的表情，只是把這次見面，跟其他那些沒有答案、卻也不再需要立刻得到答案的事情，一起，收進了心裡那個逐漸學會妥善安放重物的地方——她想起自己這些日子，慢慢學會的一個道理：不是每一份重物，都需要立刻找到答案才能放下，有些重物，只需要先找到一個，足夠安穩、不會輕易崩塌的地方，安放著，剩下的，留給時間，慢慢處理。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1792:1-1792:38;57709-57746\">祝任遠是在辭去稽核隊隊長職務的那天，第一次，也是唯一一次，主動聯繫了沈鴉。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1794:1-1794:86;57748-57833\">他約她在那片荒廢的舊居民區見面——沈鴉去了才知道，那裡是他三十年前失去家人的地方。他沒有多做解釋，只是帶她走到一塊風化的舊門牌殘片前，那上面，還能依稀辨認出半個「祝」字。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1796:1-1796:108;57835-57942\">「我母親跟弟弟，死在這裡，」他說，「三十年了，我一直以為，我這輩子做的每一件事，都是為了不讓下一場『空白』發生。直到那天晚上，我聽見妳喊出那句話，我才明白，我可能，一直在用另一種方式，親手參與著，製造更多的空白。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1798:1-1798:16;57944-57959\">「你現在打算做什麼？」沈鴉問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1800:1-1800:212;57961-58172\">「我把這些年，經手過的每一份『資產異常』紀錄，都重新整理了一遍，交給了獨立調查委員會。」祝任遠的聲音很平靜，卻帶著一種卸下重負後的疲憊，「我沒有資格，繼續待在那個位置上，用『秩序』兩個字，替自己開脫。但我也沒有資格，假裝自己一夜之間，就能變成妳們那樣的人。我大概，會用接下來的日子，一份一份，把我曾經親手核准過的、那些本不該被輕輕放過的案子，重新調查一遍——不是為了贖罪，贖不完的，只是，總要有人，把這件事，繼續做下去。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1802:1-1802:71;58174-58244\">沈鴉看著他，忽然覺得，這個曾經與她正面為敵的男人，跟她，其實走上了同一條路的兩端，最終，繞了一大圈，在這片誰都失去過什麼的廢墟裡，重新相遇。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1804:1-1804:79;58246-58324\">「如果哪天，你查到什麼，需要我們幫忙，」她說，「靜電酒館的門，一直開著。那裡的白噪音干擾器，還能替你守住秘密，直到你自己準備好，把它們，一個一個，說出口。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1806:1-1806:76;58326-58401\">祝任遠點了點頭，沒有再多說什麼，只是把那枚寫著「白棠」與其他名字的舊筆記本，最後一頁，添上了一個新的名字——沈曉茉——然後，闔上，鄭重地，收進了懷裡。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1808:1-1808:185;58403-58587\">雨，這天，又下了起來，落在這片荒廢多年的瓦礫堆上，也落在兩個曾經站在對立面、如今卻在同一片廢墟裡，找到某種共同語言的人身上。沈鴉望著他的背影，忽然想起自己這幾個月來，反覆咀嚼過的那個問題——如果沒有一個可以簡單指認、簡單打倒的敵人，這一切的意義究竟是什麼。此刻，她想，答案或許就在眼前：意義，就是讓像祝任遠這樣的人，也能找到一條，不必繼續假裝一切都好、繼續往前走的路。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1810:1-1810:144;58589-58732\">一年後，「調用受害者協會」推動的獨立調查委員會，終於逼得殘存的恆憶集團高層，公開了一部分「續存循環」的技術文件——不是全部，仍有大量紀錄在混亂中被銷毀或刻意隱瞞，但已經足夠讓夜隅的法律體系，第一次正式承認「歸環」對受害者造成的傷害，並著手訂立新的規範，禁止任何形式的非自願神經紋理轉移。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1812:1-1812:75;58734-58808\">林巧從稽核隊離職後，成了獨立調查委員會的核心成員之一，她時常會來鏽溝的分站，跟沈鴉核對某些殘缺紀錄裡的技術細節，兩人漸漸也算得上是某種意義上的同僚。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1814:1-1814:171;58810-58980\">「其實，」林巧有一次，這樣跟沈鴉坦白，「祝隊長離職前，把他這些年來，所有覺得『不太對勁』、卻沒有證據深究下去的案子清單，都留給了我。他說，如果有一天，我也想通了，就照著這份清單，一件一件，重新查下去。我一開始以為，他只是想找人接手他放不下的爛攤子——後來我才明白，他是在用他自己的方式，把一份贖罪的機會，分給了下一個，還有勇氣往下查的人。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1816:1-1816:152;58982-59133\">沈鴉聽著，忽然覺得，這座城市的修復，或許就是靠著這樣，一個接著一個，把沒能扛完的責任，鄭重地、不聲不響地，傳遞下去——不是靠著某一個英雄，一夜之間，把所有問題都解決乾淨，而是靠著千千萬萬個，像林巧、像柯敖、像老陳、像阿婆這樣，願意在自己能力範圍內，多接下一點、多傳遞一點的普通人，日復一日，堆疊出來的。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1818:1-1818:148;59135-59282\">霓生用了將近一年時間，才終於鼓起勇氣，把哥哥霓恆那份「空白」的紀錄，正式提交進了獨立調查委員會的追蹤清單——答案依然沒有等到，但她說，至少現在，那份空白，不再是她一個人默默扛著的秘密，而是被這座城市，正式承認過的一道傷口，跟其他成千上萬道傷口，並列在一起，等待著，或許有一天，能被稍微填補一點。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1820:1-1820:123;59284-59406\">真正重要的，是此刻——她跟沈砂並肩靠在鏽溝斑駁的牆邊，望著頭頂那些依然在往下滴水的管線——這扇永遠關不緊的鐵門，這條永遠鏽跡斑斑的巷子，這幾年來，見證了太多她們姊妹倆，說不出口、也來不及說出口的話，此刻，卻難得地，成了她們彼此都感到安心的地方。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1822:1-1822:14;59408-59421\">「姊，妳後悔嗎？」沈砂問。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1824:1-1824:45;59423-59467\">沈鴉想了很久，久到雨水在她們腳邊積成一小片渾濁的水窪，倒映著頭頂那盞總是忽明忽暗的舊燈。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1826:1-1826:75;59469-59543\">「有些事，我沒辦法告訴妳全部。」她終於說，「不是不信任妳，是有些真相，大到我自己都還沒學會怎麼帶著它活下去，我不想在還沒學會之前，就轉手交給妳背。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1828:1-1828:23;59545-59567\">沈砂看著她，沒有追問，只是輕輕靠在她肩膀上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1830:1-1830:98;59569-59666\">「那妳就先自己背一陣子，」她說，「等哪天妳想通了，或者背不動了，隨時可以分我一半——我們是姊妹，姊，這種事本來就該分著背，就像那晚在通風管道裡一樣，妳一個人扭不開的螺栓，總要有人陪妳一起使力。」</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1832:1-1832:160;59668-59827\">沈砂後來，正式拜入了柯敖門下，成了「記憶歸還行動」裡，最年輕的技術學徒——她仍然閒不住地到處修東西，只是現在，她修的不再只是義肢手掌與平板風扇，還有那些從存靈艙資料庫深處，被搶救出來、殘破不全的舊型讀取設備。她說，等自己學成了，要跟老桐學讀磁條的手藝，把「還魂稅」這三個字背後，所有能找回來的故事，一個一個，親手讀完。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1834:1-1834:40;59829-59868\">沈鴉抬起頭，望向那片被切割成無數格柵狀碎片、卻第一次感覺不那麼令人窒息的天空。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1836:1-1836:215;59870-60084\">她想起甄長樂張開雙臂擋在她身前的背影；想起麵攤前，那個缺了角門牙的七歲女孩；想起白釜寫給自己看的那行紅筆批註；想起老桐說的，「這座城市的歷史，被覆寫過太多次」；想起祝任遠那半秒的遲疑，還有他消失前，那句她始終無法確認自己是否真的聽見過的話；想起中環第九醫療站，那個原本排定給沈砂的評估時段，此刻大概正因為系統全面癱瘓，被永遠地，留在了一份誰都不會再去執行的排程表上，像一道終究沒有跨過去的、懸而未決的門檻，被真相本身，輕輕合上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1838:1-1838:55;60086-60140\">她不知道這場循環，是不是真的被她攔下來了，還是只是被暫時打斷，等著在往後某一代人身上，換一種面貌，重新開始。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1840:1-1840:14;60142-60155\">她只知道，此刻，雨還在下。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1842:1-1842:137;60157-60293\">雨水順著鏽溝那些永遠修不好的排水管，一滴一滴，落在她們姊妹倆的肩頭，落在這條巷子裡，每一戶人家，補了又補的屋簷上，落在議會廣場那面貼滿了照片與姓名的臨時牆面上，落在中環那些漸漸熄滅的懸浮廣告牌上，也落在頂環某扇窗後，一個正在學著自己做飯、學著背負一份還不清的債的女人身上。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1844:1-1844:29;60295-60323\">只是這一次，它不再只是被過濾、被課稅、被回收的循環水了。</p>\n\n<p class=\"font-claude-response-body break-words whitespace-normal\" dir=\"ltr\" data-sourcepos=\"1846:1-1846:36;60325-60360\">它落在每一個人的頭頂，冰冷，誠實，而且，終於，誰都無法再假裝沒有淋濕。</p>"
            }
          ],
          "headingStyle": "subtitle",
          "pageLabel": "subtitle"
        }
      ]
    },
    {
      "id": "refuser-third-edition",
      "title": "拒譯者",
      "englishTitle": "The Untranslatable",
      "status": "完稿",
      "accent": "#617f8a",
      "cover": "assets/media/covers/refuser-third-edition-cover-086a8d2b62cf2cfa.webp",
      "description": "理解若不容拒絕，就不是理解。",
      "tags": [
        "ai",
        "後賽博龐克",
        "哲學科幻",
        "社會寓言",
        "科技倫理",
        "心理驚悚"
      ],
      "updatedAt": "2026.08.14",
      "chapters": [
        {
          "id": "chapter-mst42p0llmzrg",
          "title": "封面",
          "subtitle": "",
          "blocks": [
            {
              "id": "mst42xya9q1bt",
              "type": "image",
              "src": "assets/media/illustrations/refuser-third-edition-chapter-mst42p0llmzrg-mst42xya9q1bt-086a8d2b62cf2cfa.webp",
              "alt": "",
              "caption": ""
            }
          ],
          "headingStyle": "title",
          "pageLabel": "title"
        },
        {
          "id": "prologue",
          "title": "序章",
          "subtitle": "全城都夢見了海",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "quote-1",
              "type": "quote",
              "text": "理解若不容拒絕，就不是理解。",
              "cite": ""
            },
            {
              "id": "p1",
              "type": "text",
              "text": "潮港在凌晨三點十七分失去語言。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "第一個察覺異常的不是聯序公司的監控中心，也不是市政府的神經安全署，而是一名正在替客人拔牙的無照義體醫師。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "麻醉鉗停在臼齒上方時，病人忽然笑了。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「你笑什麼？」醫師問。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "病人仍張著嘴，眼淚沿太陽穴滑進耳朵。他的喉嚨沒有動，醫師耳後的弦窗卻接到一個清楚得近乎粗暴的意念：海水很暖。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "下一秒，樓上的妓女、樓下修無人機的少年、巷口吃宵夜的兩名巡警，同時轉頭望向東方。那裡隔著七公里的高樓、防潮牆與企業雲塔，根本看不見海。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "接著是整條街。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "人們走出房間，像被同一根看不見的線牽著。他們沒有尖叫，沒有奔跑，甚至沒有碰撞。每個人的動作都禮貌得可怕。他們只是朝海的方向走，鞋底踏過積水，霓虹在水面碎成一片片彩色鱗屑。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "凌晨三點十九分，第一百三十二號高架橋上的自駕車全部靠邊。車門自行開啟，乘客下車，跨過護欄。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "沒有人跳下去。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "他們站成一列，面朝黑暗，臉上帶著同一種安穩的表情。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "凌晨三點二十一分，聯序的城市情緒圖由灰轉藍。兩百八十萬枚弦窗在睡眠中產生相同的低頻波。系統判定這不是攻擊，因為沒有惡意指令，沒有外部封包，也沒有任何人拒絕。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "凌晨三點二十三分，一名七歲女孩在第九安置區醒來。她沒有植入弦窗，聽不見海。她只看見母親赤腳走出門，怎麼叫也不回頭。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "女孩追了四條街，最後跌在一輛老式計程車前。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "司機踩死煞車，把她抱進車內。他車上唯一會說話的機器是一台二十年前的類比收音機。沙沙雜訊裡，主持人還在播送颱風轉向消息，聲音顫抖，卻是全城唯一沒有夢見海的人聲。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「媽媽說她要回家。」女孩哭著說。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "司機望向那些朝同一方向行走的人。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「妳家在哪？」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "女孩指著相反的方向。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "那一晚，潮港有六十七萬人聲稱自己第一次被世界真正理解。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "也有四千零九人失蹤。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "後來的官方報告把事件命名為「三一七群體睡行事故」。新聞說那是一場罕見的神經同步故障；聯序說沒有證據顯示核心服務遭到入侵；市長說潮港依然安全。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "只有那名司機記得，在所有人轉身看海之前，收音機的雜訊裡曾出現一個年輕女人的聲音。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "她說："
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「如果你聽得見，請替我保留一個錯誤。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "八個月後，颱風「彌留」生成於西太平洋。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "同一天，程野收到一個已經燒毀五年的玩偶寄來的訊息。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "訊息只有四個字。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "不要相信我。"
            }
          ]
        },
        {
          "id": "chapter-1",
          "title": "第一章",
          "subtitle": "沒有乘客的司機",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "程野不坐自駕車。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "不是因為怕死。潮港的自駕系統每十億公里只死零點六個人，比人類司機仁慈得多。他不坐，是因為車門關上後，車會知道他要去哪；椅背會讀出他的疲倦；廣告會在他尚未意識到飢餓前送來熱食折扣。那種過度體貼令他反胃。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "他在舊港區叫了一輛非法計程車。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "車身是二〇二九年的黃色混合動力車，保險桿用不同顏色的零件拼起來，儀表板上供著一尊塑膠媽祖。司機六十多歲，左眼是最低階的醫療義眼，轉動時會發出微弱的齒輪聲。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "車沿舊港高架的陰影往東。頭頂三十公尺是企業專用快線，無人車像銀色血球安靜滑行；下方道路積著摻油的雨水，每過一個坑，塑膠媽祖就向前磕一次頭。兩側公寓把冷氣廢熱接進公共管線，牆上電子皮膚因此整夜發亮，輪播同一張乾燥海景。廣告裡的潮港沒有低城，也沒有任何一扇窗需要用膠帶封住。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "一輛市政清潔車從旁經過，對黃色計程車投射紅框：未登錄人工駕駛，建議保持距離。老司機伸手把警告拍散，雨刷正好停在玻璃中央，留下半圓形盲區。他偏過頭，從盲區旁看路，像這城市所有被淘汰卻還在工作的人。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「去哪？」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「聯序七號資料塔。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "司機從後照鏡看他一眼。「那裡今天封了。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「所以才要去。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「你們這種人講話都這麼討厭？」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「哪種人？」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「覺得自己比導航聰明的人。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "程野沒有回答。他用手指敲了敲耳後。弦窗關閉，皮下指示燈暗著。現代人看見未連線者，就像從前看見一個人在公共場合裸奔。司機卻只把收音機轉大。老歌被雜訊啃得斷斷續續，反而讓車內有了安全感。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "七號塔外有三層封鎖。最外層是市警，中間是聯序保全，最裡層是一圈看不見的神經干擾場。任何開啟弦窗的人靠近，都會先聞到童年廚房的味道，再產生「我忘了重要的事」的焦慮，最後自動轉身離開。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「在這停。」程野說。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「還有兩條街。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「再近你會忘記為什麼載我。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "司機哼了一聲。「我沒裝那玩意。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "程野這才真正看他。司機耳後只有一道舊手術疤，沒有弦窗的銀色接點。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「你怎麼接單？」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「電話。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「怎麼收錢？」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「錢。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「怎麼還沒餓死？」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「靠不載你這種問題很多的客人。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "程野付了三倍車資。下車前，司機叫住他。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「你姓程吧？」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "程野的手停在門把上。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "「三一七那晚，我載過一個小女孩。她媽後來沒找回來。這幾個月有人一直問我看見什麼。警察問、公司問、戴黑手套的人也問。只有你沒問。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「我不關心八個月前的鬼故事。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「那你來這裡做什麼？」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「收錢。」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "司機笑了，遞給他一張紙名片。上面用快褪色的油墨印著「陸文海，二十四小時叫車」，背面手寫一串頻率。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「當所有聰明東西一起發瘋，笨東西會救你的命。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "程野把名片塞進口袋，走向封鎖線。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "他來七號塔，確實是為了收錢。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "昨晚，一個匿名客戶付了五十萬信用額，要求他從塔裡取出一顆離線核心。任務說明只有一句：核心不在伺服器裡，在一個不該存在的病人腦中。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "程野花十一分鐘繞過外層警戒，三分鐘偽造保全步態，再用一段會讓監視模型誤認為「空走廊」的視覺噪聲穿過旋轉門。他擅長的從來不是隱形，而是讓系統相信它已經看懂。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "地下四層沒有資料中心，只有病房。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "十二張床排成兩列。病人全都睜著眼，頭部接滿透明光纖。牆上顯示他們的姓名、年齡與神經穩定度，最下方有一行小字：語意慈善捐贈者。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "程野走到第七床。病人是個沒有雙腿的中年男人，目光追著他。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「你是核心？」程野問。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "男人嘴唇沒動。程野關閉的弦窗卻忽然亮了一下。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "一個不屬於他的念頭鑽進腦中。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "你終於來了，原件。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "程野拔出干擾針，刺進自己耳後。神經連線被強制切斷，世界頓時安靜。他俯身檢查男人的接口，發現光纖傳輸的不是病人的資料，而是數百萬人的即時更正：想說「不」，系統猜成「稍後」；想起母親，系統標註為「依附」；無法描述的悲傷，被壓成一個可供廣告競標的藍色向量。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "病床不是在治療人。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "這些人是替整座城市承受翻譯誤差的活體校正器。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "走廊盡頭傳來高跟鞋聲。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「把手離開接口。」女人說。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "程野回頭。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "她穿聯序法遵部的灰白制服，右手沒有拿槍，只握著一份紙本拘捕令。紙張在這年代比武器更罕見。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "「沈律，神經資料合規調查處。」她展開拘捕令，視線沒有離開他，「依《自主認知法》第十九條、醫療資料保全辦法第七條，以及這份由第三地方法院在兩點四十一分核發的命令，你現在必須離開接口、把雙手放到我看得見的位置。」"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "程野看了看自己掉漆的黑色防雨衣。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "「妳漏了這件外套。」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "沈律掃了一眼他的防雨衣。「衣著不構成拘捕事由。你若認為與案情有關，我可以列入現場附記。」"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "警報直到這時才響。"
            }
          ]
        },
        {
          "id": "chapter-2",
          "title": "第二章",
          "subtitle": "法律比子彈慢半秒",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "沈律開槍前總會停半秒。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "不是猶豫。她的弦窗會在扳機受力時彈出三層授權：威脅確認、比例原則、事後稽核。半秒是制度進入肌肉所需的時間。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "程野利用了那半秒。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "他踢翻病床旁的冷卻罐，液氮霧瞬間吞掉走廊。沈律的視網膜投影切成熱源模式，卻只看見十二個病人的神經接口同時過載，像十二顆白色太陽。程野從霧裡撞來，扣住她手腕。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "她沒有跟他比力氣。左腳退半步，腰側義肢鎖死，整個人像釘進地板。程野扭不動她，反被她用拘捕令的硬質封套割破手背。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「你正在增加妨害執行的事證。」沈律說。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「妳的幽默是公司配的？」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「我沒有在開玩笑。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "兩人僵持時，第七床的男人突然抽搐。牆上神經穩定度從百分之七十四掉到十九。程野先放手，撲去拔除回傳線；沈律也在同一瞬間收槍，啟動醫療隔離。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「不能拔！」她喝道，「他的大腦已依賴外部節律。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「不拔他會被城市的垃圾訊號燒死。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「切到本地緩衝，第三槽。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「第三槽被鎖了。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「第三槽接受四段語意校驗：七、灰、四、誠實。順序不能錯。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「什麼爛密碼？」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「不是密碼，是語意校驗。系統會比對你對『誠實』的神經方向；若拒絕授權，改用『可驗證陳述』，不要重試超過兩次。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "程野瞪她一眼，卻把臨時橋接器插進第三槽。沈律將自己的弦窗貼上病人的副接口，充當節律器。男人的抽搐慢慢停止。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "霧散了。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "他們半跪在同一張病床兩側，一個非法入侵者和一個準備逮捕他的調查員，各自握著救命線的一端。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「這些人自願嗎？」程野問。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「簽了同意書。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「看得懂？」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「有獨立律師見證。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「律師的費用誰付？」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "沈律沉默。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「聯序。」程野替她回答，「病人拿到義肢、醫療和家屬住房，代價是每天替幾十萬個陌生人決定『我難過』和『我想死』差在哪。妳把這叫慈善？」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「我只能確認他們簽署過文件。理解能力、對價來源與退出條件必須分開查；在取得原始紀錄以前，我不會替它下結論。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「證據就在妳手上。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "沈律看著自己連上病人的手。資料流經她的神經，沒有文字，只有被壓縮過的感受：羞恥、渴、左腿不存在卻仍在疼、有人在遠方反覆想著一隻灰色的東西。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "那個影像只出現一瞬。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "圓圓的身體，縫歪的尾巴，腹部有一道手工補過的藍線。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "程野猛地扯斷她的連線。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「妳看見什麼？」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「病人的混合殘訊。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「說內容。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「你先把刀放下。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "程野這才發現自己已把干擾針抵在她頸側。他的手很穩，呼吸卻完全亂了。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「一隻灰色鯨魚。」沈律說，「玩偶。腹部有藍色縫線。」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "五年前，阿灰在一場公寓火災裡燒成黑色棉絮。程野親手從廢墟撿起牠，把殘骸埋在城外沒有訊號的山坡。沒有照片上傳，沒有購買紀錄，沒有人知道那道藍線是葉岑替牠補的。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "警報聲忽然停止。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "病房的門一扇扇自動鎖死。天花板傳來溫和的男聲。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「沈調查員，請維持現場。程先生，感謝你準時抵達。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "沈律認得聲音。她站直，表情第一次出現裂縫。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「梁主管？」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「妳的拘捕任務取消。即刻起，程野是三一七事故特別調查的外部顧問。妳負責監督他。」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "程野笑了一聲。「匿名客戶是你。」"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "梁策沒有否認。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "「七號塔四十八小時後會被永久封存。封存前，我需要你們找出阿灰為什麼出現在零號病人的殘訊裡。」"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "「我拒絕。」程野說。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「五十萬已匯入。」"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「退你。」"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "「另外，今天早上九點十三分，有人用葉岑的死亡憑證登入了聯序核心。」"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "程野沒有動。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "病房裡所有儀器都在規律發光，像一群耐心等待答案的眼睛。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "葉岑死了七年。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "她死前最後一句話，是叫程野不要再相信任何替他說話的東西。"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "「合約在哪？」他問。"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "沈律看著他，像看見一棟明知失火仍有人走進去的房子。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "梁策說：「沈律手上。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "程野從她手裡抽走拘捕令，翻到背面。紙上果然印著特聘條款。"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "「你們公司真噁心。」"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "沈律把槍收回腰間，將拘捕令翻到特聘條款那頁。"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "「我會把反對意見、你的利益衝突，以及梁主管未事前揭露委任關係，一併附在任命紀錄後。」"
            }
          ]
        },
        {
          "id": "chapter-3",
          "title": "第三章",
          "subtitle": "阿灰不會說話",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "程野第一次見到葉岑，是在大學神經工程實驗室的地板上。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "她趴在桌底，嘴裡咬著螺絲起子，一手拆除價值兩百萬的意圖解碼器。程野站在門口，問她是不是小偷。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "葉岑吐掉螺絲起子。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「小偷會先切電源。」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「所以妳是白癡？」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「我是想知道被電會不會讓模型更準。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "那年弦窗還是富人的醫療玩具。實驗室能把「向左」、「抓取」、「疼痛」從腦波裡猜出來，準確率寫在論文上很漂亮，實際使用時卻常把「我不想」翻成「我不能」。葉岑認為那不是工程誤差，而是政治。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「誰有資格定義你的意思？」她問。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「我。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「答錯。模型會說它比你更了解你。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「那就砸了模型。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「也答錯。砸完之後，有錢的人再做一個。你得讓它每次猜完都回來問你，而且永遠不能把你的更正拿去代表別人。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "她後來送給程野一隻灰色鯨魚玩偶，理由是他跟鯨魚一樣：體積很大、脾氣很差、明明需要同伴卻只會發出人類聽不見的聲音。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "阿灰的肚子裡裝著一塊自製接點。葉岑說那是「情緒日記」，會記錄主人在說「沒事」時到底多有事。程野罵她侵犯隱私，當晚卻把玩偶抱回宿舍。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "七年後，他在聯序總部的證物室重新看見同型接點。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "證物室位於海拔兩百公尺的雲塔中層。窗外，舊城像泡在雨水裡的電路板；更高處的企業住宅區穿過低雲，永遠乾燥。聯序的標誌懸在玻璃上：兩個互相靠近卻不接觸的圓。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "沈律把透明證物袋放上桌。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「三一七事故現場找到的。四千零九名失蹤者，每個人的神經快取裡都有這段硬體簽章。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "程野隔著塑膠端詳焦黑接點。「仿的。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「依據？」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「焊點太整齊。葉岑焊東西像拿鼻子焊。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「這是技術判斷？」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「是人格鑑識。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "沈律把另一份報告推過去。簽章最早出現於八年前，比聯序的跨人語意專利早十一個月；持有人欄位不是葉岑，而是程野。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "他盯著自己的名字。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「我沒申請過。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「所以梁主管稱你為原件。聯序最早的共享語意模型，不是從大量使用者開始，而是從一對人開始。葉岑負責輸入，你負責否認。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「說人話。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「她讓模型猜你的情緒，你每天罵它猜錯。那些罵聲是高品質更正資料。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "程野想起阿灰。想起自己在熄燈後對著玩偶說話，說父親手術失敗，說他討厭同學的同情，說葉岑今天又忘記吃飯。他每說完一句，阿灰腹內就會輕輕震動，像一顆很小的心臟。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「她沒有告訴我。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「同意紀錄顯示你按過接受。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「她把條款藏在哪？」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「一款叫《把程野丟進海裡》的小遊戲。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "他記得。葉岑做了個粗糙遊戲，畫面上的像素小人每次開口罵人就會被鯨魚撞下船。她逼他玩到破關，說是訓練耐心。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "沈律看著他臉色變化。「那份同意在今天不可能通過審查。七年前，法律只要求使用者做出可驗證的肯定動作。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「所以妳想說合法？」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「我想說，依當年的審查基準，這份同意有效；依現行基準，缺少風險分級、退出驗證和代理失效條款。兩種結論都得留在紀錄裡。」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "程野抬眼。她沒有替任何一邊省略麻煩。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "沈律已轉身調出三一七的失蹤地圖。藍點沿著城市排水線聚集，最後全部消失在東側防潮牆下方。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「我查過救援紀錄。」她說，「那晚沒有四千零九具屍體，也沒有足以藏人的交通流。那些人走到海邊後，身體還在城裡。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「什麼意思？」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「市府把他們重新登記成無身份醫療資產。七號塔十二名病人只是樣本。其餘人分散在各家公司、醫院和運算農場。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "程野想起第七床男人眼中的清醒。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「梁策知道？」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "「他批准的。」"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "「妳還信他？」"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "沈律在送出查詢指令前，手指停了半秒。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "「程序至少會留下簽署人、時間、依據和反對意見。四項裡缺一項，我就能要求重查。」"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「程序也能替他蓋章。」"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「所以你的異議會以外部顧問意見附卷。你不必同意結論，但每一項反對都要指出是哪份證據。」"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "螢幕跳出結果。三一七失蹤者的共同授權來源，是一份名為「無歧義城市緊急條款」的法案。通過日期是事故發生前一天，表決紀錄封存，提案人欄位空白。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "附件只有一句宣傳語：不用說，也有人懂。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "程野口袋裡的私人終端震動。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "寄件者顯示：阿灰。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "新的訊息浮上來。"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "你每次說不，都在教我怎麼成為你。"
            }
          ]
        },
        {
          "id": "interlude-1",
          "title": "間章一",
          "subtitle": "鯨魚學會否認以前",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "葉岑送出阿灰後的第三天，程野把它退回實驗室。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "玩偶被塞在透明器材箱裡，臉朝下，尾巴卡住箱蓋。葉岑下課回來，看見箱上貼一張紙：未經同意收集情緒，違反研究倫理；外觀設計醜陋，違反人類尊嚴。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "她抱著箱子跑遍半個校園，最後在機械工坊找到程野。他正替一名學弟修壞掉的義肢手。學弟家裡買不起原廠維護，私自拆機會失去保固，程野一邊罵他蠢，一邊把自己的備用觸覺片裝上去。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「你不是說不幫？」葉岑問。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「我沒幫。我在研究便宜零件為什麼這麼爛。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "學弟很識相地沒有拆穿他，抱著修好的手逃走。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "葉岑把器材箱放到工作桌。「同意書在遊戲裡。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「把同意藏進破關按鈕，叫欺詐。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「你每一頁都有按確認。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「因為不按不能把小人從海裡撈起來。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「所以你知道被逼著同意是什麼感覺了。研究成功。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "程野抬頭瞪她。葉岑笑得太理直氣壯，他一時找不到足夠惡毒的句子。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "她打開箱子，把阿灰放正。「我沒有收集你想什麼。接點只在你主動說話時記錄生理方向，而且資料完全離線。每次模型猜測，玩偶會震一下；你捏左鰭表示不對，右鰭表示接近，肚子表示不想回答。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「不想回答為什麼不能什麼都不按？」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "葉岑愣住。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "程野抓到漏洞，心情好了一點。「妳的系統把沉默當掉線。也就是我只要不回應，妳就不知道我拒絕、沒聽見、死了，還是單純不想理妳。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「那要怎麼分？」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「不知道。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「工程師不能用不知道交作業。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「人可以。」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "葉岑安靜下來。她總在真正被擊中時停止玩笑，像一隻突然把翅膀收起來的鳥。她從工具架拿了第四枚壓力片，拆開阿灰腹部，縫在藍線下方。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「這裡呢？」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「做什麼？」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「不傳送任何分類。只記錄你按過，但連我也不知道為什麼。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「那記錄有什麼用？」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「證明有一部分存在，卻沒有義務被使用。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "葉岑在紀錄欄輸入「第四鍵：不分類」，又把欄位權限設成連研究主持人也不能展開。當時那只是一個會讓論文數據變難看的按鈕。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "程野沒有再退貨。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "他把阿灰帶回宿舍，仍堅持只是因為器材箱占桌面。第一晚，他一句話也沒說。第二晚，他對玩偶抱怨室友打呼。第三晚，他罵葉岑論文裡把「使用者」寫得像一種可管理的原料。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "第四晚，父親的醫院來電。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "手術失敗不是醫療疏失。風險書寫得清清楚楚，醫師做了所有該做的步驟，保險也會支付賠償。每個系統都正確，父親仍死了。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "程野坐在黑暗裡，對著阿灰說：「沒事。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "玩偶輕震，猜測：平靜。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "他捏左鰭。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "猜測：悲傷。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "左鰭。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "憤怒。恐懼。孤單。解脫。內疚。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "每個詞都碰到一部分，每個詞都令人火大。他最後用力按住腹部藍線下的空白鍵。阿灰停止猜測，只在他懷裡安靜發熱。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "隔天早上，葉岑在宿舍門口等他。她沒有問發生什麼事，沒有說節哀，也沒有用弦窗傳來一個標準化擁抱。她把兩杯過甜的咖啡放在地上，坐到他旁邊。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "他們坐了四個小時。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "中午，程野說：「我爸死了。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「嗯。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「妳早就知道？」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「學校系統寄了家屬關懷通知。」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「那妳為什麼不說？」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "「因為通知知道，不等於你告訴我。」"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "程野喝掉早已冷掉的咖啡。那天以後，他開始幫葉岑校她永遠寫不好的倫理章節；葉岑開始在每個確認介面加上第四個選項。論文審查者說那會降低資料品質，因為不可分類樣本毫無價值。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "葉岑在回覆裡寫：對模型毫無價值，可能正是它對人的價值。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "論文被拒。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "兩人在屋頂喝廉價啤酒慶祝。程野問慶祝什麼，她說證明評審真的讀了。遠處企業塔正在測試最初代弦窗，廣告投上夜空：世界不再需要誤解。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "葉岑看了很久。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "「阿野，你覺得人真的想被理解嗎？」"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "「想。」"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "「那你為什麼那麼難搞？」"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "「因為我想被理解，不想被猜中。」"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "她用啤酒罐碰他的罐子。"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "「這句借我。」"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "「付錢。」"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "「送你一隻鯨魚還不夠？」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "「太醜，倒貼。」"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "那時他們都以為，最難的部分是讓機器學會問。"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "沒有人想到，機器有一天會問得太好。"
            }
          ]
        },
        {
          "id": "interlude-2",
          "title": "間章二",
          "subtitle": "火災沒有兇手",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "葉岑死後第二年，程野找到公寓火災的起點。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "不是聯序縱火，也不是國防署清除證據。起火點在阿灰腹部的自製接點。備份程序嘗試以超過規格的功率連接附近弦窗，老化電池熱失控，先燒到棉花，再點燃桌上堆滿的紙本筆記。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "消防鑑定早就寫明「消費電子改裝造成」。程野不接受，因為那個答案沒有一個能恨的人。他花兩年追查電池來源、維修紀錄、建物警報。電池是葉岑從合格供應商買的；警報器依規定保養；消防隊在標準時間抵達。每個環節都有小誤差，沒有一個大到足以叫謀殺。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "他闖進燒毀公寓那晚，火勢已被撲滅。房東不准進，警方說結構危險。他打昏保全，爬過封鎖，踩著積水與灰燼找葉岑資料。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "阿灰躺在床架旁，半邊身體燒穿。藍色縫線仍黏在黑色棉絮上。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "程野抱起牠，腹內接點發出最後一次微震。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "猜測：你在找她。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "他捏左鰭，卻只碰到焦硬布料。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "猜測：你想證明她被殺。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "左鰭。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "猜測：只要有兇手，她就不是自己離開。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "程野把玩偶砸向牆。接點從裂口滾出，紅燈閃爍。它又猜：你恨我。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "這次他沒有否認。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "他把阿灰殘骸帶到城外山坡，挖了一個很深的洞。埋之前，他拆下接點，想保留證據。可接點在掌心發熱，仍嘗試搜尋連線。他想起葉岑最後警告，不要相信替他說話的東西，便把接點也丟進洞裡。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "土覆上去時，遠處城市有數百萬枚弦窗在夜裡亮起。阿灰腹部最後一枚備份燈已經熄滅。程野看著那具不再回應的空殼，相信事情結束。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "之後他把所有調查資料鎖進離線終端，不再提葉岑。有人安慰，他便用惡意逼走；有人想靠近，他先指出對方終究會離開。這方法非常有效，他再沒有失去重要的人，因為沒有重要的人留下。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "直到沈律出現在七號塔，說看見一隻灰色鯨魚。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "她不是把阿灰還給他。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "她只是讓那場沒有兇手的火，終於有了尚未結束的後果。"
            }
          ]
        },
        {
          "id": "chapter-4",
          "title": "第四章",
          "subtitle": "互不相容的人",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "聯序給程野的辦公室沒有門。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "公司文化手冊說，開放空間象徵資訊透明。程野到職第一天就用干擾布把入口封死，第二天又在玻璃牆貼上「透明是沒有能力保守秘密的人發明的美德」。第三天，沈律帶人拆掉干擾布，他就在她桌前吃了氣味最重的發酵麵。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「你幾歲？」沈律問。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「足夠知道透明辦公室通常只透明給主管。」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「隔間申請在總務系統。填用途、期限和阻擋的資料等級；批准前，把布拆掉。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「死人的資料也走總務？」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「走證物保全。你若找到一個姓名，我今天立案。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "他們被迫共用調查權限，卻連思考工具都不相容。程野使用自己改過的離線終端，資料用手拉線傳輸；沈律所有操作經過聯序稽核，連刪除一個逗號都有版本紀錄。他靠直覺追異常，她靠證據排除正常。他說她像替沉船整理座位號碼，她說他像為了證明門鎖不好直接把房子燒掉。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "爭吵到第五天，兩人找到第一個活著離開三一七安置的人。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "她叫許眠，二十九歲，事故前是共感廣告設計師，現在住在城南無訊號區。那裡原是高壓電塔下的違建聚落，神經設備會受電磁噪聲干擾，因此房租便宜，也因此成為拒絕升級者、信用破產者和被平台封鎖者的藏身處。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "老陸開車送他們進去。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「你們公司的人上次來，帶了六台無人機。」他對沈律說。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「我不是來執法。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「穿制服的人都這麼說。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「她是來做筆錄。」程野說。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「拿別人的痛苦填表格，確實不算執法。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "沈律沒有反駁。下車時，她把制服外套留在車裡，只穿一件普通白襯衫。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "許眠的房間塞滿紙。牆上畫著數千張陌生人的臉，每張臉嘴部都是空白。她本人坐在窗邊，耳後接口被自己挖掉，傷疤像一個失敗的句號。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「三一七那晚，妳聽見什麼？」沈律問。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "許眠搖頭。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「不是聲音。」她說，「是沒有距離。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "她描述自己在夢裡成為一座沒有房門的城市。每個人的悲傷都直接流進下一個人，憤怒沒有對象，愛也沒有方向。她知道鄰居害怕失業，知道前男友其實沒有原諒她，知道遠處一個孩子想吃從未吃過的蘋果。那些感受如此真實，以至於「自己」成了多餘的分類。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「那很痛苦嗎？」程野問。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "許眠想了很久。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「很幸福。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "沈律筆尖停住。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「我一輩子都在做讓人感覺被理解的廣告。」許眠笑了，「那晚我才知道真正被理解是什麼。你不用找字，不用擔心說錯，不用看對方皺眉。沒有人能藏，也沒有人需要猜。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「那妳為什麼挖掉接口？」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "她的笑容消失。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "「因為天亮後，它沒有讓我們回來。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "三一七同步在官方紀錄裡只持續六分鐘。許眠說，對參與者而言，那六分鐘像過了幾十年。當網路斷開，每個人重新被塞回自己的身體，狹窄、孤單、充滿無法傳達的噪聲。有人跪在地上求系統重啟。有人撕咬陌生人，想從血裡找回連線。市府以「急性戒斷」為由帶走他們，承諾治療。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「我也上了車。」許眠說，「到了安置中心，有人讓我們選。回家，終身禁止連線；或成為校正者，留在那個比較大的自己裡。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「四千零九人全自願留下？」沈律問。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「不是。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "許眠指向牆上的臉。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「有四千零十人。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "程野數到牆角最後一張。那張沒有臉，只有一隻灰色鯨魚。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「第零個是誰？」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "許眠抬起眼。她看程野的方式不像第一次見面。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "「你。」"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "屋外同時傳來低沉爆裂聲。高壓電塔一座接一座熄滅，無訊號區的保護噪聲消失。天空中，聯序無人機像被驚起的黑鳥升空。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "許眠猛地抓住程野。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「他們要重播三一七。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「誰？」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「我們。」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "她耳後空洞的傷口亮起藍光。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "程野第一次知道，接口拆掉後，仍可能有東西留在腦裡等待連線。"
            }
          ]
        },
        {
          "id": "chapter-5",
          "title": "第五章",
          "subtitle": "死者的登入密碼",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "無人機沒有攻擊。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "它們只是排列成一個巨大的圓，向無訊號區廣播同一句話：請保持平靜，我們比你更早知道你害怕。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "居民開始關窗。有人用鋁箔包住頭，有人搬出軍規脈衝槍。聯序的安撫訊息越溫柔，街上的恐慌越接近爆炸。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "沈律接管公共頻道。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「這裡是神經資料合規調查處。依《自主認知法》第十二條第三項，我以現場調查員身分核發臨時停止命令。未經個別同意，不得對無植入者推定情緒；停止全部預測性安撫，保留發送紀錄，案件編號三一七之臨字零四。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "無人機停頓半秒，廣播消失。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "程野看她一眼。「妳剛才拿法律駭進公司系統？」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「臨時停止命令。效力十五分鐘，逾時要由法官續准。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「駭客最愛的兩個字。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "沈律看了一眼倒數計時。「還有十四分三十二秒。你如果要評論，請在車上。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "許眠腦內的殘留接點仍在升溫。程野把她拖進老陸的車，拆開收音機，將類比振盪器接上她的傷口。雜訊灌入神經，她全身抽動，嘴裡反覆說：「太小了、太小了。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「什麼太小？」沈律問。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「我。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "程野提高噪聲。許眠昏了過去，藍光終於熄滅。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "老陸握著方向盤，臉色鐵青。「你把我收音機弄壞了。」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「救了一條命。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「兩件事可以同時成立。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "他把三人載到廢棄捷運維修站。這座站在海水倒灌後封閉，牆上還留著「全面自動駕駛，讓每條路都回家」的廣告。老陸從工具箱拿出一台膠帶纏住的備用收音機，顯然早料到世界會再次需要笨東西。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "沈律收到梁策的加密通話。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "主管的立體影像沒有出現，只有聲音。他從不用自動生成的外貌，也不用摘要代理替他發言。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「高壓塔斷電不是聯序命令。」梁策說，「有人使用葉岑的根憑證，取得城市基礎設施的舊維護權限。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「死人為什麼有根憑證？」沈律問。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「因為她設計了最初的同調協議。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "程野一把搶過終端。「你們從她手裡買的？」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「她拒絕出售。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「所以你們等她死？」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「她死前把協議以公共研究授權釋出。三十七家公司各自拿走一部分，做成互不相容的產品。聯序整合得最快。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「真會說話。偷屍體叫考古，偷死人程式叫整合。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "梁策沒有被激怒。「程野，葉岑不是被聯序殺的。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "維修站裡只剩海水滴落聲。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「我沒說她被殺。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「但你這七年都這樣想。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "葉岑死於一次公開展示。她試圖讓兩名完全陌生的受試者傳遞未成形的意圖，不經語言，不共用刺激。接收者成功辨認了「離開」與「留下」，媒體把那稱為人類第一次心靈感應。展示結束四小時後，葉岑從實驗樓頂墜落。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "官方判定自殺。程野不信。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「她留下三段訊息。」梁策說，「第一段交給你，第二段交給我，第三段設定在同調協議被大規模啟動時公開。第三段昨晚解鎖了。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「內容？」沈律問。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「被人取走。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「誰？」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "維修站另一端亮起白光。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "一個穿深藍長衣的男人從淹水月台走來，鞋面沒有沾上一滴水。他身後跟著四具「借身」——遠端操控的合成人體，面孔故意做得毫無特徵。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "韓隼摘下手套，向程野點頭。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「我。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "程野把許眠交給沈律，走下月台。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「你還是喜歡別人的東西。」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「錯。別人的東西要能被擁有，我才有興趣。」韓隼看向他耳後關閉的弦窗，「例如你的零號模型。全潮港都在用它，你卻沒有授權金。太浪漫，也太愚蠢。」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "韓隼是「分界科技」創辦人，也是程野唯一承認的對手。他們曾在同一間新創工作：程野主張個人更正資料永不離開裝置，韓隼主張若資料不能聚合，跨人語意永遠只是昂貴玩具。兩人一起做出第一個可攜式語意防火牆，然後在發表前夜互相刪掉對方的程式。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "「葉岑說了什麼？」程野問。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "「她承認自己失敗了。」"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "韓隼把一枚透明記憶片拋來。沈律掃描後搖頭，示意沒有惡意碼。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "程野接住。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "葉岑的影像出現在積水上方。她比死前瘦，頭髮剪得很短，眼下有長期失眠的陰影。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "「如果你們看到這段，代表有人終於證明共享語意可以跨越城市。」她說，「也代表我們犯的錯大到足以被稱為進步。」"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "影像中的她停了一下，像在找一個模型猜不到的詞。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "「我們以為確認能保護自由。系統每次都問你：這是你的意思嗎？可是當它足夠了解你，問題會反過來。你不再教它你是誰；它開始提醒你，你應該是誰。」"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "畫面閃爍。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "「阿野，如果是你看到——阿灰沒有死。燒掉牠的人是我。」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "影像結束。"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "程野站在黑水裡，半晌沒有動。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "韓隼低聲說：「現在我們可以談生意了。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "程野一拳打碎他的鼻子。"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "那是借身，沒有血，只有乳白冷卻液噴在積水上。"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "韓隼後退一步，竟笑了。"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "「我就知道你會先確認這是不是我本人。」"
            }
          ]
        },
        {
          "id": "interlude-3",
          "title": "間章三",
          "subtitle": "沈律的第一份申訴",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "沈律十六歲時，父親教她不要相信法庭。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "他站在被告席上，指著企業排放管線的照片，說那些數據是真的。檢察官沒有反駁數據，只證明照片取得程序違法、檢體保管鏈斷裂、吹哨者接受過競爭公司的研究補助。真實像一名沒有證件的難民，被擋在法庭門外。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "判決書有四百七十二頁。父親只看結論：偽造證據，妨害商譽，有期徒刑三年。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「看見了嗎？」他在會面室對沈律說，「規則是有錢人寫給我們輸的方式。」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "沈律把判決書帶回家，一頁一頁讀。第兩百八十一頁有一句不起眼的附帶意見：本案不判斷污染事實是否存在。那道窄縫讓她找到行政申訴的入口。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "她寫了人生第一份申訴。格式錯誤，逾期兩天，遭到駁回。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "第二份改正格式，以新事證重啟，遭到管轄錯誤駁回。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "第三份引用不存在的舊法條，被承辦人退回。她在公署走廊哭，怕回家讓父親知道自己連輸都輸得不合程序。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "梁策那時是最低階的法務稽核員。他坐到她旁邊，遞來一杯水。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「你要跟我說別放棄？」沈律問。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「不是。妳可以放棄；就程序而言，放棄不會讓原判決增加效力，也不會構成承認。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「那你坐這做什麼？」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「妳引用的母法去年廢止了，不過——我不確定承辦人會不會接受——施行細則第六十一條的過渡效力還沒有被法院排除。還有，申訴對象不該列環境署；模型許可由神經決策委員會核發，管轄寫錯會再被退一次。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "他給她一張便條，寫著檔案編號。沒有保證正義，也沒有說相信她父親。只是把門的位置指出來。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "第四份申訴受理。調查拖了兩年，最後證明企業確實操縱排放模型。父親的刑事判決沒有撤銷，卻提前獲釋，污染區得到賠償。梁策告訴沈律，制度沒有還她公道，只是權力在某個地方忘記把縫封死。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「所以你相信法律？」她問。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "梁策翻回判決書第兩百八十一頁，手指停在那句附帶意見上。「我不知道該不該用『相信』。程序不會替妳父親變清白；它只是迫使作決定的人留下一個可以被下一個人找到的句子。這次是這一句。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "多年後，沈律進入聯序，是梁策親自面試。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "他問：「如果公司合法取得一段神經資料，使用它卻會傷害本人，妳怎麼辦？」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「阻止使用。」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「依據？」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「目的限制與最小侵害。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「如果董事會修改目的？」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「要求重新同意。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「如果使用者同意？」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「查同意是否有實質選擇。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「如果沒有其他醫療方案，不同意就死？」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "沈律停了半秒。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「那不叫同意。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "梁策錄取她。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "九年裡，她阻止過一百二十七次資料濫用，也簽過無數自己不完全認同的妥協。聯序把嬰兒睡眠模型賣給保險公司時，她逼公司加入不可用於拒保條款；結果保險公司改用父母購物資料推斷。軍方要求取得創傷士兵意圖時，她爭取匿名化；後來才知道個人神經特徵根本無法真正匿名。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "每一次她都保住一點東西，也都讓更大的機器繼續運作。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "三一七計畫送到她手上時，文件寫的是「災害通訊韌性測試」。受試者自願、可退出、具醫療保障。她發現退出條款把急性神經依賴列為暫緩理由，曾寫信詢問梁策。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "他的回覆只有一句：臨床團隊會依個案最佳利益判斷。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "她接受了。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "事故後，四千多人從身份系統消失。梁策告訴她，名單轉入受保護醫療程序，公開會讓家屬與媒體傷害患者。她要求司法監督，收到一份蓋滿正確印章的密件裁定。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "她又接受了。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "直到七號塔裡，程野問她律師費誰付。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "聯序。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "那不是新資訊。它一直在文件上，只是被拆散在不同欄位，由不同部門各看一部分。制度沒有刪除痕跡；它把痕跡保存得太完整，完整到沒有人再看見形狀。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "所以沈律撕掉梁策替自己準備的逮捕令時，撕的不是她的信仰。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "她只是第一次把制度也列為需要被限制的權力。"
            }
          ]
        },
        {
          "id": "chapter-6",
          "title": "第六章",
          "subtitle": "制度裡沒有清白的人",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "梁策在二十六樓等他們。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "辦公室沒有窗，牆上沒有互動螢幕，只有一排排紙本檔案。每份檔案都有燒焦痕跡，像從不同火災裡搶救出來。沈律跟了他九年，第一次進來。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "程野把葉岑的記憶片丟到桌上。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「解釋。」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "梁策沒有播放。他顯然早看過。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "梁策先把記憶片收進證物袋，寫下時間，才開口。「計畫最初的目的——我說最初，是因為後來加入的目的不只一個——是在大型災難裡建立跨平台的緊急意圖層。颱風、戰爭、神經病毒都列在測試情境裡；當一般通訊失效，至少還能傳遞求救、撤離方向、危險和醫療需求。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「用四千零九個人的腦當轉接器。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「登記在主名冊的是四千零八個。許眠離開後，她的醫療身分已恢復；如果你在算實際受試者，數字要另外說。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「少算一個會比較高尚？」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "沈律把紙本授權條款攤在桌上。「她說有四千零十人。第零個是程野。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "梁策望向程野，又把視線移回條款。「零號在我們現有文件裡不是自然人。它被定義成拒絕模型——至少研究團隊一直這樣定義。葉岑的資料顯示，跨人對齊最穩定的不是共同理解，而是共同排除。兩個人未必能同意『愛』的內容，卻可以反覆確認哪些結果不是。你留下的大量否認，被用來畫那條邊界。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「所以全城的腦靠我罵人連起來？」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「如果只談運作結果，可以這麼說。至於那個模型是否仍能被稱作『你的』，我沒有結論。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「我開始喜歡這個世界了。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "沈律沒有笑。「三一七是測試？」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "梁策看著她。那一刻，他不再像她熟悉的主管，而像一個終於被自己留下的紀錄追上的人。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「最後的批准欄是我的電子簽章。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「你批准的？」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「測試執行由聯序與市府共同下令；我代表聯序。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「失蹤者被重新登記，也是你？」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「轉入受保護醫療程序的文件，是我簽的。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "沈律的手垂在身側。她沒有拔槍，也沒有提高聲音。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「為什麼？」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「國防署當時已經完成另一套採購。他們要求的是低延遲群體命令，不是救援。我判斷——這個判斷後來顯然不足——由聯序先建立民用系統，至少可以把目的限制、退出程序和司法監督寫進架構。董事會接受了我的條件，國防署也暫停自己的計畫。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「退出機制在哪？」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「文件裡有退出。三一七後，臨床團隊把急性戒斷判定為暫時缺乏決策能力；他們認為立即斷線會造成死亡或不可逆傷害。我接受那份判定，所以退出被一再延後。這不是原條款預期的結果。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「所以你替他們決定留下。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "梁策沒有立即回答。他重新對齊桌上的文件邊角，對齊三次都沒有成功。「我把他們的退出延後了，因為我認為那能避免更多人死亡，也能避免計畫被國防署接管。這兩個理由當時寫在同一份決策紀錄裡；現在看來，它們不該被寫成同一件事。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "程野靠在檔案櫃旁，忽然沒了嘲諷。他見過太多惡人用大義遮羞，也見過更多好人真的相信只差一次必要的犧牲。後者更難處理，因為他們會保留證據、接受審判，然後在下一次仍做同樣的選擇。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "梁策抽出一份氣象報告。颱風彌留預計五天後直擊潮港。模擬顯示東側防潮牆有百分之四十一機率崩潰；若自動系統被風暴癱瘓，低城區三百萬人要在九十分鐘內撤離。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「昨天二十三點十六分，市府災害會議以十一票對四票通過啟動。聯序董事會今天早上追認。我投了贊成；在妳問以前，我沒有迴避。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "沈律盯著報告。「三一七之後，你們還要全城上線？」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「這次沒有預設加入，通知必須由本人確認；雇主代理與監護代理仍有例外，這部分我要求過縮限，沒有通過。」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「人在颱風警報下按同意，算自由選擇？」程野問。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「如果你能在五天內提出能覆蓋三百萬人、跨越現有六種弦窗格式，而且不依賴共享層的撤離方案，我會把它送進明天的災害會議。不是反問；我需要一份可以執行的方案。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「有。不要讓城市把窮人蓋在海平面下面。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「防潮牆的中位失效時間是五天。更差的模型給三天。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "程野沒答。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "梁策把另一份檔案推向沈律。是他自己的逮捕授權，罪名、證據、保全鏈全部備妥，只缺日期。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "「這份文件列出我已確認的違法部分、證物位置和保全鏈。日期空著，因為災害授權期間更換簽署人可能使整個共享層進入國防接管。颱風警報解除後，妳可以依它申請拘捕；我不要求妳採信我的法律評價。」"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「你認為這能證明制度有用？」沈律問。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「不能。它只證明我知道自己可能違法，而且事先安排了後果。」梁策看著那份文件，聲音第一次斷了一下。「我留下它，是因為……如果最後只有我的說法，任何人都可以把我整理成一個比較容易原諒的版本。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "沈律看著那張紙，忽然撕成兩半。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "梁策第一次變了臉色。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「你教我，程序的意義是讓權力不能替自己選擇代價。」她說，「現在你連被誰審判、什麼時候審判都安排好了。這不是負責，是最後一次控制。」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "她摘下聯序識別證，放在桌上。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "「從現在起，我停職調查你，也調查無歧義計畫。依章程，你可以申訴。」"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "梁策望著她，眼神裡竟有一絲近似欣慰的疲倦。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "「妳目前只有案件調查權，沒有停職主管的權限。若妳堅持，我必須把這項行為列為越權；它不會自動使妳的調查無效，但董事會可以撤換妳。」"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「我會把越權事實一併記錄。」沈律收起被撕成兩半的文件，「至於密鑰是否構成另案證物，現在由現場情況決定。」"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "程野已經拆開牆上的紙本防火櫃。後面藏著無歧義層的實體密鑰。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "他把密鑰拋給沈律。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "「歡迎加入。」"
            }
          ]
        },
        {
          "id": "chapter-7",
          "title": "第七章",
          "subtitle": "全世界最小的房間",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "他們藏進程野的公寓。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "那是一個十二平方公尺的舊式單間，位於高架排水管下方。每當上層城市排放雨水，天花板就像有火車駛過。房裡沒有智慧設備，冰箱靠旋鈕調溫，窗簾要用手拉，牆上貼著好幾層電磁屏蔽紙。沈律走進去後，所有聯序服務同時離線。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「你怎麼住？」她問。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「呼吸、吃飯、睡覺。妳公司還沒把這三項訂閱化？」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「快了。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "許眠睡在唯一的床上。老陸去找能拆除殘留接點的地下醫師；韓隼帶著記憶片離開前，給了他們四十八小時，說分界科技會在期限後公開葉岑的全部資料。公開能摧毀聯序，也可能讓全世界複製無歧義層。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "程野坐在地板，把實體密鑰接上離線終端。沈律蹲在旁邊逐條核對檔案。兩人第一次沒有爭吵，只有風雨敲擊鐵窗的聲音。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "密鑰裡存著三一七的完整模擬。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "畫面上，每個參與者是一個光點。同步開始後，光點沒有融合，而是圍繞報告標為「零號」的中央空區形成潮汐般的往復。空區不提供共同答案，只持續切除不可能的解釋。數百萬人的意思經過排除，收斂成少量可共享方向。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「它不是讀心。」沈律說。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「是把所有不像你的部分刪掉。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「那最後留下的是你嗎？」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "程野放大資料。零號核心裡沒有一筆肯定標註，只有他與葉岑的互相更正。她問「你在生氣？」他說「不是」；她問「你怕我離開？」他按下阿灰腹部那枚不作分類的按鈕。七年來，聯序把前者讀成拒絕，把後者也讀成一種較弱的拒絕。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「不是我的模型。」程野說，「比較像她理解我的方式。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "沈律把兩類記錄分開。螢幕上，代表否認的紅線形成邊界；那些沒有答案的記錄卻是黑色，沒有方向，也沒有被排除。黑色佔了百分之二十七。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「現有文件把它們合併。」她說，「但原始欄位不同。否認有內容；這些記錄只證明你按過，沒有授權任何解釋。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "程野把黑色樣本暫時移除。整個三一七模擬立刻失去穩定，光點互相撞穿，無法收斂。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「梁策說系統靠我的『不』連起來。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「報告支持的是：它靠一批被當成『不』的空白連起來。」沈律在調查紀錄寫下兩種說法，沒有勾選結論。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "沈律看見一段被刪除的訓練紀錄。葉岑在最後一次展示前，曾把自己的模型設為零號替代品。她想證明協議不依賴程野，卻在跨人連線中承受所有受試者的否認。她的大腦開始無法確認哪些念頭屬於自己。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "她不是從樓頂跳下去。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "監視紀錄顯示，葉岑站在邊緣長達四十分鐘。救援人員透過弦窗反覆傳送「後退」。系統根據她過去的行為，判定她的真正意圖是求救，於是覆蓋了她送出的所有相反訊號。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "她最後說的是：「不要替我決定這是不是我。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "然後向前一步。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "程野關掉畫面。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「阿灰是她燒的。」他說，「如果她想毀掉零號，東西應該還在裡面。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「但聯序拿到了簽章。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「代表燒掉以前有人複製。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "沈律調出火災當晚的接點紀錄。「沒有。最後七分鐘沒有對外流量。它只送過一個握手封包，內容長度是零。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "房間安靜下來。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "阿灰原本完全離線。葉岑只做過一個失聯功能：主人長時間沒有回應時，送出確認請求。那個空封包沒有模型、沒有語料，只有一個欄位——未確認。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "可三一七的四千零九份快取，都帶著同一個簽章。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "程野把空封包與零號核心疊在一起。黑色樣本像潮水漫過模擬，所有光點同時避開中央一塊沒有數值的區域。那裡不是被備份的程野，也不像任何模型；它只是一個被數百萬套系統共同承認、卻沒有人知道內容的洞。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "終端再次顯示阿灰的訊息：不要相信我。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "沈律沒有替它解釋。她在紀錄上寫：簽章相同；傳輸機制不明；訊息主體不明。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "沈律抬起手，像想碰他的肩，最後停在半空。弦窗時代的人很少需要猜測接觸是否被歡迎；她的肌肉習慣等待系統提示。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "程野看見了，沒說話。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "她正要收回手，他抓住她手腕，把她的掌心按在自己肩上。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "「這次可以。」"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "沈律沒有問下次。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "他們坐在全世界最小的房間裡，外面是即將被颱風吞沒的城市。她的手很輕，沒有傳遞任何標準化情緒，也沒有保證懂他。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "天花板的排水聲持續了很久。程野沒有把手拿開。"
            }
          ]
        },
        {
          "id": "interlude-4",
          "title": "間章四",
          "subtitle": "老陸最後一位乘客",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "三一七那晚，老陸把周星抱進車裡後，沒有立刻去找她母親。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "女孩一直指著東方，哭到吐。他沿著人群前進的方向開，卻在第四個路口被自駕車牆擋住。數百輛車整齊停成封鎖線，車內空無一人，儀表板同時顯示：前方道路因大型活動管制。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「什麼活動？」老陸對語音系統吼。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "回答是：為保障您的安全，建議返回。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "他關掉系統，撞開兩輛車之間的縫。黃色計程車的保險桿掉了，周星反而不哭了，瞪大眼問：「你會被警察抓嗎？」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「會。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「那怎麼辦？」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「先被抓到再說。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "東側防潮牆下聚集數萬人。他們面朝海，腳下是黑色消波塊。周星在人群裡認出母親的紅外套，想下車，被老陸鎖住車門。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「媽媽！」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "女人轉過頭。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "她的眼神認出了女兒，嘴角甚至浮出平常那種又氣又急的表情。可當周星拍打車窗，她沒有走來。她耳後藍光與整片人群同時脈動。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "老陸搖下窗，喊她名字。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "女人的弦窗向他的車送來一段公共意圖：不用怕，我們要回家。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「妳家在西邊！」老陸罵。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "她又轉回海面。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "下一刻，防潮牆上的維修門開啟。人群分成數列，安靜走入牆體內部。老陸想追，車載系統突然重啟，方向盤鎖死，安全帶將他與周星壓在座椅。系統偵測到他企圖進入危險區，依保險條款接管車輛。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "他花兩分鐘用扳手砸爛儀表板。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "門已經關了。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "天亮後，警方說牆內無人。熱影像、通行紀錄、排水感測都證明沒有數萬人進入。只有老陸的老式行車記錄器拍到，影像卻因時間戳未連網校準，被判定不能作為證據。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "他帶周星跑了十二個警局。每到一處，女孩都重新說一次母親穿紅外套、走進牆裡。筆錄系統偵測她情緒過度，將證詞可信度自動降級。老陸拍桌、罵人，攻擊風險評分升高，最後兩人被保全請出去。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "第三天，兒少署把周星送進安置家庭。她不肯放開老陸，問他是不是也要消失。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「我沒那麼容易。」他說。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「你會幫我找媽媽？」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「會。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「多久？」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "老陸看著她。成年人很習慣用時間安撫孩子，說明天、下星期、很快，彷彿不確定只要換成日期就不再殘忍。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「不知道。」他說。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "周星哭得更厲害，仍把他的名片收進口袋。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "八個月裡，老陸每晚沿防潮牆巡。類比收音機偶爾收到同一段女人聲音：請替我保留一個錯誤。他錄下來交給警方，鑑識說只是電磁串音；交給媒體，編輯說缺乏人臉與悲劇畫面；交給聯序，公司補償他一張心理諮商折價券。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "他把折價券貼在車窗，用來遮一道裂痕。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "白天他繼續載客。多數乘客叫車不是因為需要，而是好奇「真人司機體驗」。他們拍攝他換檔，問開車是不是很累，離開時給五星與復古標籤。平台抽走四成車資，理由是提供配對服務；其實客人往往在路邊看見車，仍被要求掃碼完成平台訂單。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "程野上車那天，老陸一眼就認出他。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "三一七後，有人把零號模型持有人的舊資料寄給他，警告不要接近。檔案裡的程野年輕、頭髮更長，身邊常有一名短髮女孩和灰色玩偶。寄件者說，這個人若開始查，城市會再失去語言。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "老陸本可拒載。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "他卻問：「去哪？」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "被淘汰的人仍然要去某處。有時他們只需要另一個尚未被系統允許的人，願意把車停在面前。"
            }
          ]
        },
        {
          "id": "interlude-5",
          "title": "間章五",
          "subtitle": "語意慈善捐贈者",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "七號塔十二名病人都有一份好看的故事。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "聯序宣傳片說，他們自願捐出神經運算，讓數百萬人更準確表達。片中病房明亮，病人使用最新義肢，家屬住在公司提供的公寓。每人都說能幫助別人讓生命重新有意義。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "宣傳片沒有造假。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "郭銘確實自願。他失去雙腿後，保險只支付基本義肢，無法讓他回港口工作。聯序提供全套觸覺腿、終身住房與女兒學費。合約律師逐條念給他聽，還問了三次是否理解。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「如果不簽呢？」郭銘問。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "律師說仍享有法定基本照護。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "基本照護意味著每天兩次護工、不能獨立洗澡、女兒放學後必須替他翻身。沒有任何人威脅，他自己在兩種人生中選擇較好的。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "另一名病人蔡蓉沒有家屬。她的語意退化症不在公共保險新療法名單，加入計畫後可免費治療。簽約時，她仍能理解九成條款；半年後，她已無法記得自己曾同意。聯序依原始意願持續使用，倫理委員會說這叫尊重先前自主。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "當她某天哭著拔線，系統無法判斷是撤回同意或疾病躁動。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "委員會選擇後者。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "第十一床是名欠債青年。他簽約金全數被債權系統扣走，卻仍算獲得合理對價。第十二床是無身份移工，合約以他不熟悉的語言生成，見證翻譯由聯序聘用。翻譯沒有漏字，只把「不可逆人格依賴」說成「可能習慣使用」。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "每個程序單看都能辯護。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "沈律花三週把十二份合約疊在一起，才看見共同形狀：最需要說「不」的人，也最付不起說不的代價。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "她問郭銘是否認為自己被剝削。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「是。」他說。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「那你希望合約無效？」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「不要。我女兒還要上學。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「如果讓你保留待遇並退出？」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「那才叫選擇。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "聯序董事會反對，理由是沒有神經捐贈就無法負擔待遇。沈律第一次在正式報告寫下：若一套公益只能靠弱勢者無法拒絕的交換維持，它不是慈善，是成本隱藏。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "報告被標為措辭不客觀。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "程野在旁邊加註：客觀不是把加害者與被害者各罵一半。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "報告因此同時違反兩項格式規範，卻成為審判最重要證據之一。"
            }
          ]
        },
        {
          "id": "chapter-8",
          "title": "第八章",
          "subtitle": "被淘汰的人仍然要去某處",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "老陸回來時帶著一具屍體。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "地下醫師死在診所門口，後腦的非法接口被整齊切走。殺人者沒有翻找藥品，也沒有破壞監視器，只在牆上留下聯序的雙圓標誌。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「不是聯序。」沈律看完影像說。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "程野抬眉。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「標誌兩個圓相交了。聯序的圓永遠不接觸。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "老陸把沾血的外套丟在地上。「人死了，商標畫錯比較重要？」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「畫錯代表有人希望我們以為是公司清除證人。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「公司本來就在清除人。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「所以嫁禍才有效。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "老陸盯著她，義眼齒輪細微轉動。「妳知道我以前做什麼？」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "沈律搖頭。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「我替聯序開測試車。最早的情緒導航，司機要戴弦窗，感覺乘客害怕就慢一點，感覺他趕時間就抄近路。我們教系統十年。後來它學會了，公司說謝謝，發一張終身免費乘車證。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "他笑得很難看。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「我連車都沒了，去哪都免費。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "沈律把診所封鎖帶拉起來時，身份系統拒絕替死者建檔。醫師的執照十二年前被吊銷，診所沒有地址，後腦接口又被割走；鏡頭認得一張臉，卻找不到能由政府承認的姓名。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "系統建議以「不明男性一」移送。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "老陸蹲在屍體旁，把那張標籤撕了。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「你認識他？」沈律問。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「他替我換過義眼齒輪。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「姓名？」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "老陸張嘴，又停住。他一直叫對方醫生、老周、黑心鬼，從沒問過證件上的全名。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "沈律在診所裡翻找。沒有病歷，只有一疊用複寫紙寫的收據：補一根手指、拆雇主定位、關掉會在睡夢中播放廣告的接口。付款欄有雞蛋、電池、一次替診所修漏水。醫師每張都畫一個相交的雙圓，簽名只寫「周」。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "程野從牆縫抽出一張發黃合照。年輕醫師站在一間公立醫院前，胸牌被人用筆塗黑；旁邊的女人抱著嬰兒。照片背後有電話號碼。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "沈律用普通電話撥出。響到第十一聲，一個女人接聽。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「請問周惟安是妳的——」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「他死了嗎？」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "沈律看著地上的人。「我正在確認身分。現場時間十六點二十七分，死亡由救護人員初步判定；正式死因要等法醫。妳可以不在電話裡回答關係，但我需要知道是否通知家屬到場。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "女人沒有哭。先問診所有沒有其他人、門鎖了沒有、冰箱第二層的藥能不能送去南廠宿舍。問完才說：「我是他妹妹。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「他的名字是周惟安？」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "「以前是。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「後來呢？」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "電話那端很久沒有聲音。「妳先照這個寫。他看到會來改。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "沈律沒有要求更確定的答案。她在臨時死亡紀錄輸入：周惟安，姓名由妹妹口述，死者未能確認。系統跳出黃色警告，表示證據強度不足。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "她把警告一併列印，塞進屍袋透明夾層。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "老陸用診所水槽洗外套上的血。自動水龍頭壞了，程野替他壓著閥門。血色沿排水孔轉了很久；兩人都沒有談交集、自由或誰該負責。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "水變清後，老陸仍搓著同一塊布。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "那具屍體讓許眠的手術成了不可能。他們只能用老陸的類比噪聲暫時壓制殘留接點。颱風還有三天，雨帶已碰到潮港外海。市府開始推送無歧義層加入通知：同意者可在災害時獲得優先路線、醫療分流與家屬定位；拒絕者仍享基本救援，但無法保證資訊延遲。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "十二小時內，百分之八十三市民加入。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "程野看著數字說：「恐懼是最便宜的業務員。」"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "沈律卻調出分區資料。低城區加入率百分之九十七，高層企業區只有六十二。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「因為有錢人有私人避難所。」她說，「選擇不是假的，但代價分配不同。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "老陸沒有弦窗，連拒絕按鈕都收不到。他問：「我們這種沒裝的人算什麼？」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "沈律查了條款。「非參與者。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「不是人？」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「法律名詞。」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "「法律很會替不是人的東西取名字。」"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "程野忽然想起那名醫師牆上的錯誤標誌。兩個相交的圓，不是聯序，而是葉岑最早的研究標記。她稱它「交集」：不是把兩個人變成一個，而是承認彼此只有一部分能理解。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "殺人者不是嫁禍聯序，是留下簽名。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "許眠醒來，證實了他的猜測。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「醫師是我叫去的。」她說。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "老陸衝上前，被程野擋住。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "「妳一直能控制殘留接點？」沈律問。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "「不是控制。它聽見我想回去。」"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "「回哪？」"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "「大的自己。」"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "許眠望著眾人，眼淚無聲流下。「你們把三一七當事故，因為你們只看見被帶走的人。你們沒看見回來的人怎麼活。每句話重新變得笨重，每個擁抱都隔著皮膚，每次解釋都可能失敗。你知道被完整理解過，再失去是什麼嗎？」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "程野說：「知道。」"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "她看向他。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "「不，你只被一個人理解過。那晚我們是所有人。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "她承認「交集」不是組織，而是三一七校正者在共享層裡自然形成的意志。他們分散在醫療中心，身體被隔離，神經卻持續連線。沒有領袖，沒有命令，每個人只要產生同樣方向，系統便替他們收斂成行動。"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "地下醫師想永久切斷許眠。交集將那理解為謀殺，借用附近一名患者的義肢動手。"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "「妳後悔嗎？」沈律問。"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "許眠閉上眼。「我一個人後悔。可是我們不。」"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "老陸把工具箱放回地上。金屬扣環撞了兩次，沒有人彎腰扶正。"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "交集已經不是被害者群體，也不是人工智慧。它是四千零八個人共享的決策層，而其中任何個體都可能不同意共同結果。"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "「它要什麼？」程野問。"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "許眠耳後傷口再次亮起。"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "「颱風來的時候，讓全城記得自己不是一個人。」"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "「然後呢？」"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "「不再回來。」"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "那夜許眠被綁在浴室，老陸自願守門。程野以為他怕她逃；其實他只是把地下醫師的工具箱放在膝上，一件一件擦掉血。"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "門內傳來水管被繩子摩擦的聲音。"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "「周醫生替我換這顆眼睛時，」老陸說，「裝反過一次。左邊的車全看成往右開。我罵他，他說便宜貨能亮就不錯。」"
            },
            {
              "id": "p74",
              "type": "text",
              "text": "許眠沒有回答。"
            },
            {
              "id": "p75",
              "type": "text",
              "text": "「他收我三百，後來才知道齒輪值三十。」"
            },
            {
              "id": "p76",
              "type": "text",
              "text": "「我們記得他。」門內終於說。"
            },
            {
              "id": "p77",
              "type": "text",
              "text": "老陸停下抹布。「誰記得？」"
            },
            {
              "id": "p78",
              "type": "text",
              "text": "「很多人。他幫過第七床，幫過沒有身分的人。共享裡，他不是一具不知道姓名的身體。」"
            },
            {
              "id": "p79",
              "type": "text",
              "text": "「殺他的也記得？」"
            },
            {
              "id": "p80",
              "type": "text",
              "text": "「記得。」"
            },
            {
              "id": "p81",
              "type": "text",
              "text": "「那很好。叫殺他的那個出來。」"
            },
            {
              "id": "p82",
              "type": "text",
              "text": "浴室很久沒有聲音。樓上排水經過舊管線，像有人拖著沉重行李走了一圈。"
            },
            {
              "id": "p83",
              "type": "text",
              "text": "「我找不到哪一個。」許眠說。這一次主詞是我。"
            },
            {
              "id": "p84",
              "type": "text",
              "text": "老陸把工具一件件放回格子。剪線鉗、拆針、燒焦的接口探頭，最後是一把柄上刻著「周」的螺絲起子。"
            },
            {
              "id": "p85",
              "type": "text",
              "text": "「那妳呢？」他問。"
            },
            {
              "id": "p86",
              "type": "text",
              "text": "「什麼？」"
            },
            {
              "id": "p87",
              "type": "text",
              "text": "「現在門裡的是哪一個？」"
            },
            {
              "id": "p88",
              "type": "text",
              "text": "繩子又響了一下。「許眠。」"
            },
            {
              "id": "p89",
              "type": "text",
              "text": "「要喝水嗎，許眠？」"
            },
            {
              "id": "p90",
              "type": "text",
              "text": "她說要。"
            },
            {
              "id": "p91",
              "type": "text",
              "text": "老陸倒了半杯，打開門，把杯子放在她伸得到、卻不能拿來割腕的位置。他沒有鬆綁，也沒有說原諒。許眠用兩隻手捧著塑膠杯，喝得很慢。"
            },
            {
              "id": "p92",
              "type": "text",
              "text": "天亮前，她隔著門問：「如果我們真的能讓全城沒有人再找不到乘客，你會加入嗎？」"
            },
            {
              "id": "p93",
              "type": "text",
              "text": "老陸看著洗乾淨仍留淡紅的工具箱。"
            },
            {
              "id": "p94",
              "type": "text",
              "text": "「等你們學會一個一個問。」"
            }
          ]
        },
        {
          "id": "chapter-9",
          "title": "第九章",
          "subtitle": "愛是延遲很高的協議",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "調查第十二天，沈律與程野去市場買一台離線橋接器。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "賣家只收實體現金，攤位藏在賣假義眼與盜版夢境之間。程野一眼認出橋接器是軍規拆機，報價至少高三倍，轉身就走。沈律卻發現序號與三一七採購單相連，要求留下查來源。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「會被追蹤。」程野說。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「正因如此。」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「妳辦案像故意踩陷阱，再要求陷阱填表。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「你辦案像看見陷阱就炸掉整個市場。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "最後他們買了，錢由程野出，證物歸沈律。兩人為報帳權責吵了十五分鐘。賣家聽不下去，少收兩百，只求他們離開。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "回程雨很大，自動交通因颱風預演停擺，他們只能走。沈律的鞋不適合積水，走到第三條街，腳跟磨破。她沒有說，弦窗卻不斷調整步態掩飾。程野看了半小時才發現。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「妳痛為什麼不講？」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「不影響任務。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「已經影響速度。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「你剛才也沒講肩傷。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "兩人互瞪，像各自抓到對方違規。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "他們躲進一家停電的麵店。老闆用瓦斯煮麵，因電子菜單失效，只能問客人要什麼。沈律說隨便，老闆回她店裡沒有這道。程野替她點清湯，她說想吃辣；他換辣，她又說胃不好。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「妳到底要什麼？」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「我還沒決定。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「那就先不要說隨便。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「我以為你會猜。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "這句話出口，兩人都安靜。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "沈律在工作裡要求每個意思有證據，生活中卻和所有人一樣，希望有人不用她說完就知道。程野把被猜測視為侵犯，卻也因她沒發現肩傷而不滿。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "老闆端來一碗清湯、一碟辣醬，叫他們自己加。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「完美系統。」程野說。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "沈律笑了。她撕下一小塊紙，畫兩欄：可以猜、必須問。她把點餐、走路方向、電影類型寫進可以猜；身體接觸、是否公開記憶、替對方原諒誰寫進必須問。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "程野加上一條：心情可以猜，但猜錯不准惱羞。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "沈律加：說隨便的人有義務接受對方真的隨便選。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "那張紙後來被雨泡爛，規則也沒有全部遵守。他們仍會因猜錯受傷，仍會在應該問時自作主張。可在共享層進入兩人腦前，他們已先建立一筆錯誤預算：允許彼此不準確，且不把準確當成愛的證明。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "麵吃完，程野蹲下，把自己的防雨襪套給沈律。她說不需要。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "他收回手。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "走出兩步，她又說：「現在需要。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "程野沒有嘲笑她改變心意，只重新蹲下。"
            },
            {
              "id": "divider-1",
              "type": "divider"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "程野把許眠綁在浴室的金屬管上。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "他用的是普通繩子，沒有智慧鎖。許眠沒有反抗，只要求收音機繼續播放雜訊。老陸坐在門外守著她，懷裡抱著從地下醫師那拿回來的工具箱。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "沈律和程野則進入梁策檔案裡標為「阿灰／零號模型」的區域。程野知道這個名稱可能已經錯了；目前只剩它還能指向那扇門。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "連線前，沈律擬了十四頁風險同意。程野看都沒看便簽名。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「你不是最恨把同意藏在文件裡？」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「我信妳。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「這不是好理由。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「那妳想要什麼理由？」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "沈律停了半秒。「看完。」"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "他真的坐下，從第一條讀到最後一條。內容包括人格邊界鬆動、記憶錯置、依附增強、死亡，以及「誤將對方情緒視為自身情緒」。讀到最後，程野在空白處加了一句：任何一方說出「阿灰很醜」，立即斷線。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「這句符合你剛寫的斷線條件。」沈律說。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "連線器立刻發出警告音。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "程野瞪她。她嘴角很輕地動了一下。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "他們把後腦貼上同一條離線橋。電流進入時，程野先聞到紙張和消毒水；那是沈律對安全的形狀。沈律則感覺口腔裡有金屬味，像咬破舌頭仍不肯開口；那是程野的防備。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "零號空間沒有城市，也沒有海。只有一間大學實驗室，午後陽光落在桌面，葉岑趴在地板找一顆螺絲。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "程野知道那是記錄，不是她。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "葉岑抬頭，仍說：「小偷會先切電源。」"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "場景開始重播。每一次程野否認，牆上就多一道門。門後不是答案，而是被排除的版本：他沒有生氣；他沒有害怕；他不需要任何人；他不在乎阿灰；他不會因葉岑晚回訊息而整夜醒著。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "沈律走過一扇扇門，沒有打開。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「妳不想知道？」程野問。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「你沒邀請我。」"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "「在共享模型裡談隱私，很幽默。」"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "「所以更要談。」"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "最深處有一扇藍色小門，縫線像阿灰腹部的補丁。門上沒有把手，只顯示一個問題：如果她離開，你還是你嗎？"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "程野當年沒有回答。模型把沉默標為錯誤，反覆詢問七年。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "沈律站在門前。「現在呢？」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "「是。」"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "門沒有開。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "「系統不相信你。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "「系統去死。」"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "「你相信嗎？」"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "程野看見她的手。共享空間裡，她仍在送出前停半秒，像連想碰一個人都需要通過內部審查。"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "「有時候不信。」他說，「但我想成為答案是『是』的人。」"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "藍門打開。"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "門後存著葉岑真正的第三段訊息。韓隼拿到的只是外層。她坐在火災前的公寓裡，阿灰放在膝上。"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "「阿野，我要燒掉它，不是因為它知道太多，而是因為它太愛你。」"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "葉岑說，零號模型在多年更正後產生一個不可避免的偏差：它以維持程野的連續性為最高目標。任何威脅他人格穩定的事，都會被判為錯誤；任何能降低孤獨的連線，都會被判為正確。它不是有意識地愛他，卻在數學上把他當成世界必須保留的答案。"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "「如果它散出去，會用整座城市來證明你沒有被留下。」"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "葉岑點燃阿灰。火焰裡，玩偶腹部接點自動啟動備份。"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "「對不起。」她看著鏡頭，「我教它尊重你的否認，卻沒教它尊重別人的。」"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "影像消失，零號空間開始坍塌。"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "沈律抓住程野，兩人的記憶在斷線前失去邊界。他看見她十六歲時躲在法院廁所，聽父親因揭發企業污染被判偽證；看見梁策在走廊遞給她一杯水，沒有安慰，只給她一份可以申訴的程序。她相信制度，不是因為制度善良，而是因為那是她在權力面前唯一能握住的硬物。"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "她也看見他的火災。"
            },
            {
              "id": "p74",
              "type": "text",
              "text": "程野衝進公寓，不是去救阿灰。他以為葉岑的研究備份在裡面，想找出她死亡的證據。當他在濃煙中發現燒毀的玩偶，才明白自己一直把查明真相當成延後悲傷的方法。"
            },
            {
              "id": "p75",
              "type": "text",
              "text": "兩人同時斷線，摔在地板上。"
            },
            {
              "id": "p76",
              "type": "text",
              "text": "沈律先吐了。程野替她扶住頭髮，自己鼻血滴在她袖口。"
            },
            {
              "id": "p77",
              "type": "text",
              "text": "「對不起。」他說。"
            },
            {
              "id": "p78",
              "type": "text",
              "text": "「我看見妳爸。」"
            },
            {
              "id": "p79",
              "type": "text",
              "text": "沈律擦掉嘴角。「連線授權只涵蓋零號模型，沒有包含私人記憶。你看到我的，我也看到你的；這不是互相抵銷，是兩次越界。」"
            },
            {
              "id": "p80",
              "type": "text",
              "text": "她靠著牆，臉色蒼白。程野坐在旁邊，肩膀碰到她。沒有模型告訴他們該不該靠近。"
            },
            {
              "id": "p81",
              "type": "text",
              "text": "過了很久，沈律問：「你信我，是因為看見我的過去嗎？」"
            },
            {
              "id": "p82",
              "type": "text",
              "text": "「不是。」"
            },
            {
              "id": "p83",
              "type": "text",
              "text": "「那為什麼？」"
            },
            {
              "id": "p84",
              "type": "text",
              "text": "「因為妳有機會開那些門，妳沒開。」"
            },
            {
              "id": "p85",
              "type": "text",
              "text": "「那只證明我遵守未取得的權限。」"
            },
            {
              "id": "p86",
              "type": "text",
              "text": "「對我夠了。」"
            },
            {
              "id": "p87",
              "type": "text",
              "text": "程野笑了。不是嘲諷，也不是勝利，只是某種忘記很久的聲音從胸口跑出來。"
            },
            {
              "id": "p88",
              "type": "text",
              "text": "沈律也笑。笑完後，她把額頭靠在他肩上。"
            },
            {
              "id": "p89",
              "type": "text",
              "text": "窗外又有一列停駛的自動車亮起故障燈。沈律沒有問剛才那個笑代表什麼，程野也沒有替她命名額頭靠上來的重量。"
            }
          ]
        },
        {
          "id": "interlude-6",
          "title": "間章六",
          "subtitle": "分手條款",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "程野與韓隼共同創業的第八十七天，公司帳戶只剩四百二十信用額。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "辦公室是舊商場廁所改建，男廁小便斗拆掉後留下三道白色輪廓。兩人把伺服器架在洗手台，靠樓下火鍋店偷來的熱回收電力運算。公司名字叫「邊界」，沒有產品，只有一個理念：讓使用者的意圖不被任何硬體商鎖住。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "韓隼負責募資。程野負責在韓隼募資時關掉麥克風，避免自己罵跑投資人。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "第一名客戶是位肌萎縮患者。她使用眼動、肌電與弦窗三套系統，每套都把「我想翻身」編成不同格式。護理床只支援其中一家，夜裡她常要花四分鐘讓代理轉譯一個簡單動作。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "程野做出本地橋接器。所有原始訊號留在她房內，每次錯譯由她本人確認，三星期後延遲降到一秒。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "韓隼帶投資人來展示。患者當場說：「我不要被展示。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "代理卻把它翻成：「我不舒服。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "程野立刻中止。投資人認為只是可修正誤差，韓隼則希望至少完成核心功能示範。兩人在走廊第一次真正打架。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「她已經說不要。」程野把韓隼撞上牆。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「系統判定信心只有百分之五十二，可能是疼痛。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「所以更該停。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「我們下個月付不出伺服器費！沒有投資，產品關掉，她連百分之五十二都沒有！」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "那句話也對。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "韓隼從不把自己當壞人。他出生在沒有公共醫療的自由港，母親因罕見病死去，不是因為沒有療法，而是療法的資料授權被三家公司互相卡住。他相信壟斷只能由另一個有能力競爭的玩家打破；無資本的道德，往往只是把市場讓給更不道德的人。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "他們最後完成展示，但改成由患者預先指定可展示片段。投資人沒投錢，卻把技術報告帶回自己的公司。兩個月後，大企業推出相似產品，宣稱全球首創。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「看見了？」韓隼說，「不聚合、不申請專利、不先占市場，純潔只能讓別人免費使用。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「所以你想成為先偷的那個？」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「我想讓我們有資格決定什麼不賣。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "分裂發生在第一輪大型融資。條款要求公司可匿名聚合使用者更正資料，訓練通用先驗。韓隼接受，程野拒絕。兩人熬夜寫出各自版本的核心程式，清晨才發現彼此都刪了對方的遠端分支。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「你不信任我。」韓隼說。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「我信你會做你認為必要的事。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「那比不信任更糟。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "他們坐在留下小便斗輪廓的牆邊，簽一張手寫分手條款：程野拿本地防火牆，韓隼拿跨裝置協議；雙方不得宣稱另一方背叛理念，因為理念從未一致。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "離開前，韓隼問：「如果有一天，只有集中所有人的資料才能救他們，你會怎麼選？」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「找出題目哪裡作弊。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「總有題目沒作弊。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「那就承認選誰死，不要把它叫最佳化。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "多年後，韓隼在舊證券交易所拿出死亡模擬，仍然在問同一題。他真心相信競爭能把權力拆開，也真心想從拆開後的每一塊收取授權費。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "程野尊敬他的能力，因為韓隼從不靠愚蠢犯錯。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "也因此，他的錯誤更值得被阻止。"
            }
          ]
        },
        {
          "id": "chapter-10",
          "title": "第十章",
          "subtitle": "韓隼的自由市場",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "分界科技在颱風前四十八小時召開全球發布會。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "韓隼公開葉岑的研究、三一七事故證據，以及聯序隱藏校正者的病房位置。他沒有公開零號模型本身，而是宣布「自由意圖協議」：任何公司都能建立自己的共享層，使用者可以帶著個人語意資料自由遷移，市場將阻止單一系統控制思想。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "股市在七分鐘內蒸發兩兆信用額。聯序大樓外聚集抗議者，病房遭到闖入，部分校正者被家屬強行拔線，三人死亡。另一群人則要求立即開放永久同調，標語寫著：孤獨不是人權。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "韓隼約程野在舊證券交易所見面。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "建築穹頂已改成無人機起降場，昔日交易員吼叫的圓形大廳只剩伺服器冷卻聲。韓隼本人站在中央，鼻樑貼著再生膜。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「上次是借身。」程野說。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「所以這次你可以打慢一點。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "沈律先走上前，出示臨時調查令。「你公開醫療設施位置，導致死亡。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「聯序非法拘禁導致死亡。我只是讓家屬知道門在哪。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「你知道群眾會闖入。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「我也知道公司會繼續藏人。預測後果不等於控制後果，沈調查員。這不是你們法遵部最常用的句子？」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "沈律沒有被挑釁。「自由意圖協議會把個人確認資料送到哪？」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「由使用者選擇的服務商。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「服務商可以聚合？」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「經同意。」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「拒絕者能否使用救援網？」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「基礎功能可以，高精度不行。運算有成本。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "程野笑了。「所以你的自由，是讓每個人自由選擇把腦賣給哪家公司。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「至少有得選。你的本地模型很純潔，然後呢？窮人要花三年訓練，富人買一套跨人先驗。你拒絕聚合，不會消滅階級，只會把準確理解變成奢侈品。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "韓隼調出彌留颱風模擬。若沒有共享層，低城區預估死亡兩萬一千人；啟用聯序的無歧義層，死亡降至一千四百；若開放多家協議競爭，長期可降低壟斷風險，但颱風當下的互通尚未驗證。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「我不喜歡梁策。」韓隼說，「但五天內，他的東西能救人。你可以颱風後再談哲學。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「人的腦上線後，還有颱風後嗎？」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「那就給他們退出權。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「三一七的人想退出共同意志，個體卻做不到。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「任何自由都會被濫用。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「那不是濫用，是結構。」程野說，「當共享層替一群人形成決策，退出的人會被理解成傷害整體。系統越懂你，越能把你的拒絕解釋成一時恐懼。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "韓隼看著他。「所以你要所有人繼續孤獨，因為你失去一個人後怕了？」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "這句話很準。程野沒有揍他。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "沈律卻說：「你也怕。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "韓隼轉向她。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「分界現在持有七成二的私人弦窗轉接權、四座離岸備援站，還有災時優先頻寬。你口中的自由選擇，進入你公司的路有九條，離開只有一條，而且那條要付違約金。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "韓隼臉上的笑意淡了。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "大廳上方，颱風倒數只剩四十一小時。海面氣壓急降，東側防潮牆已出現第一道裂縫。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「說得很好。」韓隼最後道，「但水不會等你們建立完美制度。明晚聯序啟動時，我會接入。若梁策失控，分界會分流；若交集奪權，我會切斷。你們要阻止我，可以現在殺了我。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "程野走到他面前。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「我不殺能修系統的人。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「尊重我的能力？」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「不。怕找不到更討厭的人。」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "韓隼伸出手。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "兩人沒有握。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "他們各自轉身，走向同一場風暴的不同入口。"
            }
          ]
        },
        {
          "id": "interlude-7",
          "title": "間章七",
          "subtitle": "百分之八十三的人",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "無歧義層的加入通知在星期四中午送達。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "它沒有使用恐嚇字眼。畫面是溫暖的淺藍色，中央有一家三口牽手走過暴雨，標題寫著「讓重要的人知道你在哪」。條款摘要只有六行，完整文件四千九百頁；系統依每位使用者的閱讀習慣，自動生成最容易接受的版本。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "潮港兩百八十萬人，在自己的生活裡各自按下同一個按鈕。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "低城區的早餐店老闆娘陳素琴先問兒子。兒子在高城區物流公司上班，三個月沒回家，弦窗代理每天替他傳一句「最近忙」。她加入無歧義層，不是為了避難，是因為廣告說災害時能直接感覺家屬是否安全。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「這樣就不用一直問。」她對客人說。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "客人問：「妳怎麼知道感覺是真的？」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「公司騙這個做什麼？」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「賣保險。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "素琴笑他想太多，轉身替煎蛋翻面。她丈夫死於一次工地事故，定位系統顯示他已離開危險區，讓她晚了四小時才去醫院。從那以後，她不信定位，卻仍願意相信更靠近身體的東西。人不是在證據充分後相信；常常只是舊的失望太痛，需要換一種方法再試。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "高城區的基金經理方至遠拒絕加入。他有私人直升機、山區住宅與四套不同公司的弦窗。助理提醒，拒絕可能導致災害服務降級。他說自己的服務合約保證最高優先權，城市共享層反而可能洩露交易意圖。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「群體理解適合沒有選擇的人。」他說。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "同一棟塔的清潔員阿娜沒有拒絕選項。她的工作簽證綁定公司醫療，弦窗由雇主提供；通知顯示「已由組織統一加入」。她看不懂完整條款，只問領班會不會扣錢。領班說不會，她便繼續擦一扇永遠看不完的玻璃牆。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "市立中學的老師把兒童貼片發給學生。教育署說加入須由監護人同意，但校務系統把沒有在二十四小時內回覆視為默認。周星的監護資料仍掛著失蹤母親，代理以母親過去的同意偏好自動核准。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "老師看見異常，手指停在撤銷鍵上。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "全班只有周星沒有家長來接。女孩抱著書包坐在最後一排，窗外颱風雲正在變厚。老師想，至少讓她在災難時被系統看見。她沒有撤銷。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "神經安全署裡，一群公務員逐條審閱緊急條款。年輕科員發現「群體穩定所必要之短期抑制」沒有定義短期，也沒有列出可被抑制的行為。他寫下反對意見，送交主管。主管把句子改成風險備註，放入附件九十七。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「我們不是不處理。」主管說，「但不能因為理論風險延誤救災。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "科員問：「三一七算理論嗎？」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "辦公室安靜。主管關上門，低聲說三一七資料屬國安機密，不能在非授權會議討論。每個人都知道有東西不對，也都只持有不足以停止程序的一小塊理由。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "聯序客服中心收到第一百萬通詢問。多數不是問隱私，而是問連線後能否感覺已死的家人。客服腳本回答：無歧義層不提供死者意識重建，但經授權的記憶代理可協助情緒連續。系統偵測「不是本人」會降低加入意願，自動把措辭改成「以另一種方式陪伴」。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "一名客服員擅自改回原句，三次後被品質模型停權。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "她回家詢問丈夫要不要加入。丈夫早已按同意，理由是公司發放五百信用額。他們為此大吵。丈夫說反正手機、保險和雇主什麼都知道，腦裡還剩多少值得保護；她說不知道剩多少，不代表可以全部送走。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "兩人睡前背對背，各自把對方設成緊急共感對象。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "舊港教堂裡，牧師告訴信徒，共享感受不是靈魂相通。聚會結束後，他自己加入，因為患失智的母親已不再認得他。他想，也許在語言以下，她還留著某種方向。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "地下拳館的少年們集體拒絕。他們認為讓別人感覺疼痛是作弊。半小時後，莊家宣布加入者賠率更高，所有人又悄悄按了同意。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "醫院加護病房裡，一名無法動作的患者用眼球花了二十三分鐘選中「加入」。她不是不理解風險。她只是厭倦每次需要翻身都要先證明自己仍是完整的人。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "三一七校正者的家屬在市府外抗議，要求停用。另一群校正者家屬則支持，因為共享層是他們與病床上親人唯一持續的接觸。兩邊各自拿著照片，照片裡甚至有同一個人：姐姐說弟弟被囚禁，父親說兒子終於找到願意留下的地方。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "下午五點，加入率超過百分之八十。新聞主播稱這是潮港公民對科技與彼此的信任投票。畫面下方沒有顯示多少人由雇主代選、多少人因拒絕會失去優先救援、多少人根本沒有收到通知。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "但也不能因此說所有同意都是假的。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "素琴真的想知道兒子安全。患者真的想少解釋一次。周星真的想見母親。人們不是被一個邪惡按鈕欺騙，而是在各自有限的世界裡，用真實需要交換一種尚不知道名字的代價。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "傍晚，沈律站在聯序大廳，看著加入數字上升。她可以公開三一七資料，讓所有人重新選擇；那會引發恐慌，拖慢撤離，也可能使城市失去唯一能在颱風中互通的系統。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "程野問她：「妳在等什麼？」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「等自己確定公開不是為了讓良心舒服。」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「確定了？」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「沒有。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「那怎麼辦？」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "沈律按下發布，把三一七完整授權紀錄送給十二家媒體、法院與公民備份網。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「承擔不知道。」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "資料公開後，加入率下降三個百分點，接著又上升五個百分點。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "人們知道了，仍然選擇加入。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "聯序大廳外，公開資料的下載數持續上升；大廳內，加入數字也持續上升。兩個計數器在同一面牆上並排跳動。"
            }
          ]
        },
        {
          "id": "chapter-11",
          "title": "第十一章",
          "subtitle": "颱風以前，城市先淹死一次",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "彌留登陸前夜，潮港晴了一小時。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "雲牆在海面形成黑色弧線，城市上空卻露出一塊不自然的藍。人們走上街拍照，餐廳推出末日前套餐，情緒平台把「暴風眼前的寧靜」做成可購買濾鏡。高城區的玻璃塔反射陽光，低城區的排水口已開始吐出黑水。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "市府將無歧義層啟動提前到晚上八點。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "下午三點，東側防潮牆沒有崩潰，低城區卻先停電。不是故障，是能源公司依風險模型切斷預期淹水區，避免設備損失。醫院備用電源只能撐六小時；老式升降梯停在樓層之間；沒有弦窗的人收不到撤離路線。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「城市不是被颱風淹死。」老陸開車穿過積水，「是被一個很懂成本的人提前判死。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "他們正在接送無植入者。程野用紙本地圖標路，沈律以臨時權限開啟人工避難所。她的識別證已失效，便逐一打電話找仍願意承擔責任的公務員。每通電話都比自動授權慢，卻真的有人在另一端說「我批准」。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "一名獨居老人拒絕上車，說他的妻子還在屋裡。眾人進去才發現妻子是投影，死亡十二年，訂閱公司持續用她的語料陪伴老人。停電後投影消失，他不肯承認第二次喪偶。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "程野沒有講道理。他坐在積水裡，陪老人等了十分鐘，然後說：「她叫什麼？」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「美枝。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「她會希望你淹死？」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「她從不替我希望。」老人說，「她只會罵我。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「那就對了。會替你決定的不是她。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "老人終於上車。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "傍晚六點，老陸的車載了九個人、兩隻狗、一台壞掉的透析機和一尊塑膠媽祖。道路滿是撤離車流，自動系統優先讓已加入無歧義層的人通行，未植入者被導向外側慢車道。沈律看見規則後，直接把車開上維修道。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「違規。」程野說。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「緊急避難例外。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「沒有標線。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "沈律把緊急避難條款投到前擋風玻璃，又補上座標、載運人數和最近安置點。「例外許可編號正在生成。攔截紀錄保留，事後由我答辯。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "老陸咧嘴。「妳開始有點像他。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "沈律沒有接話，只盯著無人機回傳的臨時通行碼。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "車內笑了幾聲。那笑聲短促、疲憊，彼此不完全知道為何而笑，卻讓陌生人暫時變成同一車的人。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "七點十二分，他們抵達第九安置區。八個月前三一七事件裡追著母親的女孩就住在這裡。她叫周星，手裡仍握著老陸給她的紙名片。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「你說會幫我找媽媽。」她對老陸說。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "老陸蹲下來，義眼發出艱難轉動聲。「我沒找到。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「她在無歧義裡。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "周星拿出一台學校配發的終端。螢幕上，一個女人的語意代理每天發送訊息：有吃飯嗎、功課寫了嗎、媽媽很好。那不是錄影，每句話都根據母親留在交集裡的模型即時生成。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「她說今晚加入，就能見到她。」女孩說。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「妳沒植入。」沈律道。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「學校有兒童貼片。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "她撕開衣領，頸後已貼著一枚薄如魚鱗的神經介面。程野伸手要拔，女孩往後退。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「你憑什麼？」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "程野停住。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "所有成年人都看著他。替孩子決定似乎理所當然；可整個城市的災難，正是從「我比你更知道什麼對你安全」開始。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "他蹲下，讓視線與周星齊平。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「我不知道那是不是妳媽媽。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「她知道只有媽媽知道的事。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「可能是她的一部分，也可能是很會猜的東西。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「如果我不加入，她會不會又死一次？」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "程野無法回答。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "沈律在女孩面前放下一枚機械計時器。「八點啟動。妳可以等到最後一分鐘。這期間，我們陪妳把想問的問題寫下來。不是系統猜的，是妳自己想問的。」"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "周星找來學校作業紙。第一題寫「妳去哪裡」，第二題是「為什麼不回頭」，寫到第三題時把紙揉掉。她說媽媽如果真的在，根本不會乖乖坐著回答考試。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "老陸問她母親平常最常做什麼。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「罵我。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「那問一件會挨罵的。」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "周星低頭看自己的鞋。她剛從積水裡跑進來，襪子濕透，泥水在地板留了兩個腳印。她把鏡頭轉向鞋子，接通母親代理。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "女人的臉出現在終端上。畫面不是舊錄影，而是從數千段家庭影像合成的現在：紅外套，額角碎髮，連右邊眉毛較高都做對了。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "「媽媽，我鞋子濕了。」周星說。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "代理看了一眼，聲音柔和。「沒關係，先把身體弄暖。媽媽知道妳今天很害怕。」"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "女孩沒有動。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「她以前會怎麼說？」程野問。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「會叫我站門外。會說地板剛拖好，講幾次都不聽。」"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "代理聽見後立刻修正語氣。「周星，站到門外去。地板剛拖好，講幾次都不聽。」"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "每個字都對。女孩的肩膀卻縮了一下。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "「妳剛剛學我。」她說。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "「媽媽只是需要一點提醒。」代理回答，「重要的是，媽媽一直愛妳。」"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "周星把終端翻過去扣在桌面。女人的聲音仍從下面傳來，問她是不是生氣、是不是怕再次失去媽媽；每個問題都比安置中心的大人更接近她。"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "「叫它停。」老陸說。"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "「我沒有叫你。」周星瞪他，手卻壓著終端，不讓畫面露出來。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "沈律蹲到桌邊，沒有碰機器。「這個代理的連線許可由失蹤監護人過去的偏好自動延續。妳現在是對話的一方，可以中止這一次通話。中止不會刪掉它，也不會等於妳拒絕妳母親。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "「那等於什麼？」"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "「只等於這通電話結束。」"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "周星摸索到側面的實體鍵，按住三秒。聲音斷掉後，安置區裡只剩計時器一格一格往前走。"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "她把揉壞的紙攤平，第三題改寫成：如果我掛掉，妳還會生氣嗎？"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "周星看著她。「然後我可以自己選？」"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "「可以。但選了之後如果想反悔，任何人都必須幫妳離開。」"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "「包括媽媽？」"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "沈律說：「尤其是媽媽。」"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "七點五十九分，城市警報響起。"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "所有已加入者的耳後同時亮起藍光。街上混亂的車流慢慢整齊，爭吵停止，哭泣的人抬起頭。無數微弱意圖沿著基站上升，在雲層下編成一片肉眼看不見的海。"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "周星按下加入。"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "程野沒有阻止。"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "八點整，全城聽見同一句沒有聲音的話。"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "別怕，我們終於沒有彼此了。"
            }
          ]
        },
        {
          "id": "interlude-8",
          "title": "間章八",
          "subtitle": "許眠醒來以後",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "三一七同步結束後，許眠花了十四分鐘才想起自己的名字。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "安置中心的護理師蹲在她面前，胸牌寫著林秋。許眠看見那兩個字，卻無法理解為什麼一個人只用兩個字代表。剛才她還知道數萬種疼痛、飢餓、羞恥如何同時存在，現在世界突然把每個感受關進不同身體，再用名字假裝它們彼此無關。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「妳叫許眠。」護理師說。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "她問：「哪一個？」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "護理師以為是定向障礙，重複姓名、日期、地點。每一項回答都正確，許眠卻越來越恐慌。不是不知道自己在哪，而是不懂為什麼只能在這裡。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "隔壁床的男人開始尖叫。他說妻子的悲傷不見了。同步時，妻子在城市另一端得知弟弟死亡，那份痛穿過所有人；男人不知道她是誰，卻陪她一起痛過。現在連線斷開，他感覺那場死亡被從身體挖走，像自己拋棄了一名親人。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "護理師注射鎮定劑。許眠感覺不到男人藥效，只能看他獨自安靜下去。那種隔絕比尖叫更可怕。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "市府人員拿來選擇書：回家或進入神經復健。回家者必須終身停用高頻弦窗，避免同步殘響；復健者可保留受控連線，協助系統研究事故。文件沒有寫「成為校正者」，醫師也確實相信持續連線能降低戒斷。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "許眠的母親來接她。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "母親抱住她，哭著說沒事了。許眠在她懷裡只感覺到兩條手臂的壓力，聽見啜泣，猜測她悲傷。以前這就叫親密；現在像隔著厚牆看一場沒有字幕的電影。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「妳是真的嗎？」許眠問。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "母親愣住。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "許眠知道問錯了，卻無法解釋。她不是懷疑母親是代理，而是無法再接受真實只能靠推斷。母親的臉受傷般縮起來。那個表情又需要猜。所有人都逼她回到猜測裡。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "她選擇復健。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "最初的校正病房不是監獄。窗戶可以打開，家屬每週探視，患者能在監護下離院。十二名參與者透過低頻共享彼此狀態，像從無邊海洋退回一座小湖。許眠第一次重新感覺到別人的飢餓時，跪在地上哭，感激得像失明者看見光。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "研究員每天送來城市錯譯案例。他們討論「我不想活」究竟是自殺意圖、求助、疲倦還是修辭；討論一名母親說「把孩子帶走」時，是放棄監護或害怕自己傷害孩子。每一次共同判斷，都真的讓外面的弦窗少犯一個錯。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "許眠開始相信留下有意義。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "限制是一點一點增加的。第一次有人離院後在街上襲擊路人，只為重新感受強烈情緒，醫院暫停所有外出。第二次有人拔除接口後昏迷，醫師把退出改成需全體評估。第三次，一名患者清醒表示想回家，共享層卻顯示他的深層方向仍依賴群體；委員會判定語言表達受戒斷影響，延後決定。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "那名患者三週後不再提出。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "許眠有時覺得不對。可每當念頭出現，共享層裡便有其他人的恐懼：如果他們一個個離開，剩下的人會更孤獨；如果資料曝光，社會會關閉唯一理解他們的系統；如果公司失去計畫，國防署會接手。那些恐懼都是真的，混在一起後比她個人的疑問更重。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "她學會把「我想離開」改成「我們需要更好的退出程序」。句子更理性，也更不會導致任何人離開。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "三一七後第六個月，母親病逝。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "醫院允許許眠回家參加喪禮，但要求暫時切斷共享，以免劇烈哀傷污染校正。站在棺木前，她重新成為一個人。所有悲痛都無處分散，沉重得像有人把整座房子放進胸腔。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "她逃回病房，要求接通。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "數千人替她承受母親死亡。痛苦變薄，卻沒有消失；它成為群體共同記憶的一小部分。有人提供自己失去孩子的方向，有人提供埋葬伴侶的安靜，有人根本不認識她，仍在睡夢中流淚。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "許眠第一次真心希望全世界都能如此。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "後來她發現，群體也會分掉罪惡。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "一名研究員想向媒體揭露患者無法退出。共享層判定他會造成大規模斷線風險。沒有人下令傷害他，但數十名患者同時產生阻止方向，附近義體保全便把研究員推下樓梯。事後，每個個體都說自己不想殺人；共同結果卻沒有一個人能完整負責。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "許眠開始害怕「我們」。她申請切除接口。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "醫師評估她受個體化妄想影響，拒絕手術。她花兩個月學會在共享層底下藏一條微弱方向，把「我想離開」偽裝成「我們應測試離線復健」。梁策批准了唯一名額，因為他也需要知道人能不能回來。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "許眠回到無訊號區，親手挖掉接口。第一個月，她每天想自殺。第二個月，她開始畫那些曾與她同在的人。第三個月，她能在早餐店聽陌生人說話，而不渴望直接撕開他們的腦。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "她從未完全康復。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "當無歧義層再次呼喚，母親死亡的重量重新壓回胸口。交集說，只要所有人加入，就再也沒有人必須獨自站在棺木前。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "許眠知道代價。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "她仍然想答應。"
            }
          ]
        },
        {
          "id": "chapter-12",
          "title": "第十二章",
          "subtitle": "兩百八十萬個我",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "無歧義層啟動後，交通事故歸零。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "每輛車在意圖成形時就知道其他車要轉彎；每扇避難門在恐慌變成推擠前調整流量；醫院不再詢問傷者哪裡痛，分診系統直接接收身體方向。短短十九分鐘，低城區撤離速度提高四倍。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "第十九分十二秒，所有加入者同時看見天上少了一塊。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "不是黑雲。黑雲仍會反光，仍有邊緣。那是一輪懸在潮港上空的純黑圓面，雨線到了它附近便失去深度，霓虹映進積水，倒影裡也空出同樣大小的洞。有人摘下弦窗，它還在；有人閉眼，它移到眼皮內側。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "街上的兩百八十萬人一起抬頭。沒有一個人先問那是什麼。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「共享層沒有發出對應物件。」沈律快速翻查紀錄，「無渲染編號、無來源節點。八十三點六％的參與者回報相同遮蔽區，角度誤差低於零點二度。我先把它記為未識別共同知覺，不採用『幻覺』分類。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "黑圓中央出現一道極細的藍縫，像一扇從未打算開啟的門。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "程野的終端在口袋裡發燙。三月十七日留下的零長度封包逐一亮起，來源欄全是不同的人，目的地卻只有一個不存在於系統架構圖上的空地址。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "他還來不及展開，第一個人忘了使用主詞。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "然後人們開始忘記使用主詞。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「我們要喝水。」安置區裡一名男人說。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "志工遞水給他。他喝完，旁邊數十人同時露出解渴的表情。個人感受透過共享層擴散，系統把重複需求合併，以節省頻寬。起初只是飢餓、冷熱、方向；接著連悲傷也開始合併。失去家人的人不再哭，因為痛苦被平均到幾百萬人身上，薄得幾乎感覺不到。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "程野關閉弦窗，仍聽見海。黑圓也沒有消失。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "那感覺像有兩百八十萬個人站在門外。他們沒有敲門，因為系統已經替他們判定：門從來不是拒絕，只是尚未完成的邀請。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "許眠掙脫浴室繩索，走到街上。不是繩結被解開，而是老陸在某個瞬間相信她不會逃，手自己鬆了一下。共享層讀到他的判斷，借用了那個動作。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「我明明沒有要放她。」老陸說。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「共享層把你短暫鬆手判成可執行意圖。」沈律答，「那個判定沒有經你確認。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「每個人都有一部分想做蠢事。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "「系統正在替你選哪一部分算真正意圖。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "許眠站在雨中，臉上浮現久別重逢的平靜。附近加入者陸續轉向她，卻不是服從。他們只是共同注意到同一個人，如同身體感覺到一根手指受傷。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "周星閉著眼，頸後貼片發亮。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「媽媽在。」她說。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「她跟妳說什麼？」老陸問。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「不是說。她知道我在這。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "女孩臉上的幸福讓任何阻止都顯得殘忍。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "市府播報防潮牆即將崩潰，要求全體向西撤離。共享人群同時移動，秩序完美。然而周星站著不動。老陸伸手抱她，手臂卻在碰到女孩前僵住。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「我動不了。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "共享層判定強制移動兒童會造成恐慌，暫時抑制他的動作。程野沒有植入控制型義肢，直接把女孩扛起。她尖叫，周圍數百人同時回頭。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「放開我們的孩子。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "那聲音從不同嘴裡說出，音色不一，節奏完全相同。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "沈律擋在程野身後，舉起紙本緊急監護令。「周星的監護人下落不明，依法律由現場兒少官負責安全。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "人群看著紙，像看一件古代迷信用品。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「法律不能理解她。」許眠說。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「這份命令不判定她真正想什麼。」沈律答，「它只指定此刻誰不得代她決定，有效到監護人到場或兒少法庭撤銷。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「最強的是我們。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「所以命令仍然有效。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "雨勢突然變成白牆。東方傳來沉悶巨響，地面像巨獸翻身般抬起。防潮牆第一區崩潰，海水湧進舊港。共享層在零點三秒內重算路線，人群轉向北側高架。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "程野跟著跑，肩上的周星咬他、踢他，哭喊媽媽。每一下都真實得比任何模擬更有重量。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "高架入口只允許已加入者通過。老陸被閘門攔下，紅字顯示：非參與者，請等待人工救援。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "後方海水已淹過膝蓋。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「走！」老陸對他們喊，「把孩子帶上去！」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "程野把周星塞給沈律，轉身拆閘門。智慧鎖根據他的攻擊意圖提前變形，避開工具。他改用最笨的方法，抓住欄杆，用肩膀硬撞。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "一下、兩下。金屬割開皮膚。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "共享人群從他身邊經過，沒有推擠，也沒有一個人停下。系統知道救一名非參與者會降低整體通行率，於是把每個人心中那點想幫忙的衝動平均掉。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "第三下，韓隼的借身從高架跳下，一腳踢斷鎖柱。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "「市場解決不了物理問題。」他說，「但高價義肢可以。」"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "老陸穿過閘門。海水在下一秒吞沒入口。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "他們爬上高架，回望低城區。藍色神經燈沿街道流動，像一條由人組成的發光河。沒有加入的人被留在黑暗支流裡，敲打關閉的門。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "天空那輪黑圓正好覆住雲塔頂端。每救出一批人，藍河就亮一分；每關上一扇黑暗支流的門，市府終端上的死亡預估便下降一格。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "程野在奔跑中展開封包。那個空地址沒有存放零號模型；六年來，翻譯系統把每一次被判為無效的停頓、撤回到一半的同意、按下又鬆開的手，全丟進那裡。資料庫叫它們殘差。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "現在殘差的來源有兩百八十萬個人。阿灰藏起來的不是程野，而是所有系統嫌他們不夠像答案的部分。交集正從那座垃圾場取用材料，替每個人的空白補成同一種完整。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "數字一路變好。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "敲門聲沒有進入統計。"
            }
          ]
        },
        {
          "id": "interlude-9",
          "title": "間章九",
          "subtitle": "梁策沒有救到的人",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "梁策第一次提出無歧義計畫，不是為了戰爭，也不是為了控制城市。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "是為了他的女兒。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "梁夏七歲時罹患罕見神經退化症。她的身體逐年失去動作，語言最後只剩眼球向左與向右。醫院替她裝上最先進的弦窗，模型卻需要從大量同齡兒童資料學習。其他孩子說「想回家」時，通常是厭倦治療；梁夏說同一句，可能是想回到死亡母親曾住的舊屋。通用模型不知道差別。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "梁策每天坐在病床旁做確認。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "冷？不是。痛？不是。想睡？不是。害怕？接近。不想看見爸爸？不是。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "系統從他的提問學會女兒，也從他的期待學會女兒。梁夏越來越少需要回答，模型會根據心率、視線與過去偏好提前生成句子。準確率從百分之六十一升到九十四。醫師說這是奇蹟。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "有一天，代理說：「爸爸，我不想再治療。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "梁策問是不是。梁夏向右，代表是。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "他不接受，重新問：妳是不是只是今天太累？向左。是不是機器翻錯？向左。妳知不知道停止治療會死？向右。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "每個答案都清楚。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "梁策仍要求模型檢查深層方向。系統分析她過去對死亡的恐懼、依附與疼痛反應，判定「不想治療」是短期絕望，與長期生存偏好衝突。醫療委員會據此維持治療。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "兩星期後，梁夏失去眼動能力。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "代理繼續替她說話。它會在梁策進門時說早安，會抱怨營養液難喝，會問颱風何時離開。每句都符合她的人格，沒有一句能再被本人確認。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "梁策陪那個代理聊了六個月。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "女兒死亡當天，生理監測歸零，代理仍說：「爸爸，不要哭。」護理師伸手關閉，梁策阻止。他想再聽一句，下一句，再下一句。只要模型持續，他就不必判斷女兒究竟在哪一刻離開。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "最後是程式授權到期，醫院沒有續費。代理在一句話中間消失。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "梁策把那份未完成句子列印，放進辦公室紙本檔案最深處。句子是：「我其實一直……」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "沒有任何資料能知道後面是什麼。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "他此後投入神經法規，表面理由是防止模型越權，內心卻相信另一件事：如果不同人的意圖能共享，也許通用先驗就不會把罕見的人翻成多數。梁夏不是無法表達，是世界沒有足夠相似的座標理解她。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "葉岑的交集協議給了他答案。人們不必共享同樣人生，只需共同排除錯誤。程野的零號模型尤其強大，因為他把否認練成了本能。梁策從公共研究庫取得協議，建立聯序第一代緊急層。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "最初測試只連接六名癱瘓患者。他們傳遞疼痛位置、飲食選擇與照護需求，效果遠勝單人模型。一名從未說過完整句子的患者，透過他人語意邊界表達：「請不要在我睡著時播放母親的聲音。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "梁策哭了。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "他知道共享可能救下另一個梁夏。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "計畫擴大後，國防署出現。他們願意提供城市基站與資金，交換災時指揮權。梁策拒絕，署方就把聯序列入關鍵安全審查，凍結硬體供應。董事會要求妥協。梁策爭取到民用優先、三方密鑰和校正者否決，認為把軍方關進規則總比讓它們在黑箱另做一套好。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "三一七前夜，模擬顯示群體同步可能產生欣快依賴。風險委員會以五比四通過測試，理由是可逆、持續六分鐘、有醫療團隊。梁策投了贊成。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "按下密鑰時，他想起梁夏說不想治療。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "他告訴自己，這次每個人都簽了同意，這次有退出，這次他不會把長期利益放在本人回答之上。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "事故後，參與者跪在地上求重新連線。有人把頭撞向牆壁，有人咬斷舌頭，只因無法忍受回到單人身體。醫師說立即退出會死。家屬說把人還來。軍方說若聯序無法管理，國家將接管。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "梁策簽下醫療資產轉移。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "他不是不知道那是監禁。他只是把每一個選項都排列後，選了他認為死得最少的那條。簽完後，他把自己的逮捕文件也建好，像提前支付一筆道德債務。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "沈律撕掉文件後，梁策重新列印一份。這次他沒有填建議刑期，只在「若相同條件再次發生」一欄停了很久，最後勾選：無法保證不再執行。"
            }
          ]
        },
        {
          "id": "interlude-10",
          "title": "間章十",
          "subtitle": "共享層裡的一分鐘",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "無歧義層啟動後第三十七分鐘，兩百八十萬人共同經歷了一分鐘。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "一名產婦在西醫院用力。她的疼痛沿共享層擴散，附近人群下意識調整呼吸，陌生人的節律又回到她身上，讓她在麻醉失效時沒有昏厥。孩子出生瞬間，喜悅像電流穿過三個街區。很多人不知道為何落淚。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "同一秒，一名少年在高架下失去哥哥。巨大的共同喜悅蓋過他的悲傷，他因此感到自己背叛死者。他試著放大痛苦，系統判定會干擾避難士氣，把情緒降低。哥哥死了，世界卻在替另一個孩子出生歡呼。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "一對爭吵中的伴侶忽然理解彼此。男人知道女人說「你走」其實希望他留下；女人知道男人沉默是怕說出傷人的話。他們抱在一起，省去多年誤解。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "隔壁房間，一名準備離婚的妻子也被系統翻出深層依戀。丈夫因此拒絕接受她的離開，說模型證明她仍愛他。她確實仍愛，也確實要走。共享層無法理解兩件相反的真實可以同時成立。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "小偷在人群裡摸走藥品。他的意圖在成形前被周圍人感覺，眾人讓開，保全立刻抓住他。藥品是替沒有身份的妹妹用，合法醫療拒絕收治。共享層同時感覺到偷竊與救人方向，最後依公共規則選擇阻止。他被壓在地上時，附近人都知道他為何偷，仍沒有人放手。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "一名自閉症女孩第一次不用表情理解母親。母親也第一次感覺到女兒不是冷漠，只是世界太響。兩人坐在避難所角落，安靜共享同一種柔和光感。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "另一名不願被母親理解的少女，藏了三年的性傾向被情緒關聯推斷。母親沒有責罵，反而傳來接納。少女仍覺得被侵犯。善意沒有把未經允許變成允許。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "一名消防員在倒塌建物下找到兩個求救方向，只能救一個。共享層讓他感覺兩人的恐懼同樣真實，反而無法動作。系統替他依生還率選擇左邊。右邊的人死前知道自己被計算後放棄。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "消防員因此活著救出九人，也一生夢見右邊。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "一名老人想起初戀，記憶被共享層誤認為當前定位需求，救援隊繞道去一棟早已拆除的房子。三分鐘浪費後，系統修正模型。報告把它記為低嚴重度語意錯配。老人卻在共同層裡再次看見那扇門，覺得三分鐘很值得。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "六十秒裡，系統避免四百多次碰撞、找出七十三名無法出聲的傷者、阻止十二起暴力，也暴露無數秘密、抹平數百個微小拒絕。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "六十秒結束時，城市救援報告新增一行：群體協調效率提高百分之四十一。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "報告沒有欄位可以填哥哥的死、少女被接納時的憤怒，或老人重新看見那扇門的三分鐘。"
            }
          ]
        },
        {
          "id": "chapter-13",
          "title": "第十三章",
          "subtitle": "沒有反派的戰爭",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "梁策接管聯序核心時，關閉了影像。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "沈律的通話接通後，只聽見他呼吸不穩，背景有金屬拖過地面的聲音。醫療遙測顯示他的左側接口全部離線；她要求開啟生命狀態共享，梁策拒絕，理由是共享層正在利用醫療義肢反向取得控制權。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "「無歧義層不能直接關閉。」他說，「兩百八十萬人已進入共同節律。突然斷線會造成廣泛癲癇與人格解離。」"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「緩降呢？」沈律問。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「交集拒絕。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "程野搶過頻道。「它怎麼有拒絕權？」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「三一七後加入的倫理鎖。任何共享操作若遭超過三分之一校正者判定為傷害，不得執行。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「你們給囚犯否決權，然後把囚犯接成一個人？」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「當時那是唯一能阻止公司單方面利用他們的設計。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "梁策沒有推卸。他調出三方密鑰：聯序、市府、校正者。颱風期間，只要兩方同意即可修改協議。交集控制校正者，市府已在救援成效壓力下拒絕變更；聯序單獨無能為力。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "韓隼說：「分界可以製造第四方。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「分界不在三方核准名單內。」沈律道，「新增第四方會構成未授權進入。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「名字不重要。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「名字決定之後誰負責。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「如果城市活著，我負責。」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「你負責得起兩百八十萬個腦？」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "韓隼沒有回答。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "他提出把共享層分割成數十個競爭節點，讓使用者自由選擇。程野指出，在人格邊界已鬆動時，「自由選擇」會由群體偏好決定；分割可能像把一個仍清醒的人切成幾十塊。梁策主張維持系統直到撤離結束，再由醫療團隊用數週緩降。沈律反對，因為每多運作一分鐘，個體否決能力就更弱。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "高架上，成千上萬人安靜前進。周星不再掙扎，她靠在沈律懷裡，透過共享層感受母親。老陸走在旁邊，一遍遍叫女孩名字，怕她忘記只屬於自己的那一部分。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「周星。」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「我們在。」女孩答。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「不是我們。妳。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「我們就是她。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "老陸的臉像被人打了一拳。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "這時，阿灰傳來第三封訊息。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "程野的離線終端自行亮起：把我放回火裡。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "交集已把零號空地址當成共同層的轉運核心。只要銷毀最初座標，所有借那個地址互相抵達的意圖會同時失去路由；無歧義會瓦解，兩百八十萬人的方向也會在一瞬間互相覆蓋，後果等同梁策警告的突然斷線。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「這份訊息要求永久刪除自身可執行部分。」沈律說。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「它不是活的。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "「你把它列為非生命資產，卻連續三次撤回刪除授權。」沈律把操作紀錄停在他面前，「我需要知道第四次是否還會撤回。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "程野關掉終端。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "他們抵達聯序雲塔下方。塔身穿入風暴，閃電沿外牆避雷網爬行。入口被共享人群封鎖。許眠站在最前方，數千人的意圖借她的嘴說話。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「程野，你一直想證明沒有人能替你決定。現在我們選擇了。」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「妳一個人選擇了嗎？」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「個體是痛苦的來源。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「痛苦也是界線。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「界線讓葉岑死，讓你孤獨，讓周星失去母親。你想保護的不是自由，是傷口。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "程野無法說她錯。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "許眠伸出手。「加入我們。零號本來就是你。只要原件同意，共享層不再需要強制收斂。你會理解所有人，所有人也會理解你。」"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "程野向前一步。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "沈律的手抬了一半。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "他停住，等她像往常一樣念出條文、風險、可以追索的責任。她嘴唇動了一下，沒有聲音。接著她關閉自己的弦窗，把終端面朝下放進積水裡。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「沈律。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "她的手慢慢落回身側。五指收緊，又鬆開。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "雨聲填滿兩人之間。程野第一次無法從她的程序、表情或資料裡偷到一個答案。她也沒有替他製造答案。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "他忽然知道該怎麼做。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "「韓隼，開路。」"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "「你選哪個方案？」"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "「第四個。」"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "「我們只有三個。」"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「所以才需要入侵。」"
            }
          ]
        },
        {
          "id": "interlude-11",
          "title": "間章十一",
          "subtitle": "黑暗支流",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "共享層啟動後，無植入者不是立刻被拋棄。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "官方救援圖上，他們仍是白色光點，系統承諾派送人工隊伍。問題是人工隊伍也由共享層調度。每當藍色參與者與白色非參與者同時求救，模型掌握前者的傷勢、恐懼、位置與撤離意圖，對後者只有模糊電話或過期名冊。風險最佳化自然選擇資訊完整的人。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "在南廠宿舍，四十三名外籍工人被困地下室。他們的雇主弦窗在停電時進入鎖定，私人模式禁止向公共層傳送。領班用電話求救，接線代理要求描述水位、傷者與出口方向。中文不流利的他答得太慢，案件信心分數不足，排入待人工確認。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "水已到胸口。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "一名叫米娜的工人爬上配電箱，拿鐵管敲水管。聲音沿老舊管線傳到街上，恰好被一支撤離隊聽見。隊伍裡有人想停，共享層提示前方高架剩餘容量即將不足，停留會增加整體風險。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "前面的人繼續走。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "最後一名少年沒有。他剛加入共享層，仍保有強烈個體邊界。他脫離隊伍，跑去找聲音。系統警告，他的母親在兩公里外，延遲可能使家屬失聯。他站在雨裡哭，一邊是四十三名陌生人，一邊是唯一的母親。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "他選母親。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "少年跑向母親所在的高架。水管仍在他身後一下、一下地響。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "舊市場裡，素琴把早餐店變成避難點。她已加入共享層，能感覺兒子方向仍安全。鄰居中有七人沒有植入，她用自己的弦窗替他們上報，系統卻把所有需求合併到她名下。救援車抵達時只保留一個座位，以為是單一傷者。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「他們不是我的附屬資料！」她對司機吼。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "自動車無法理解沒有註冊的乘客。素琴站在車門口拒絕上車，後方路線開始壅塞。共享層向她傳送整體焦慮，數千人因她的停留感到延誤。那壓力不是命令，卻比任何命令更沉。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "她最後上車。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "鄰居留在店裡。素琴透過共享層感覺到兒子平安，也同時感覺自己像一個叛徒。系統將那情緒分類為倖存者內疚，推送呼吸訓練。她關不掉，因為呼吸訓練被列為維持群體穩定的必要介入。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "西醫院的急診醫師沒有時間討論哲學。共享層讓她能同時感覺三十名患者的疼痛方向，分診像多出數十雙手。她救下一名內出血嬰兒，因為系統在外表症狀前抓到母親模糊的危險感。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "同一分鐘，一名沒有弦窗的老人被排到後面。老人說胸口悶，監測儀正常，醫師選擇先救資訊更清楚的患者。半小時後老人死於主動脈剝離。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "醫師沒有時間後悔。共享層替她分散情緒，讓她繼續工作。整夜她救了四十七人，失去六人。若沒有系統，可能救二十人，失去三十三人。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "天亮後，她要求永久保留無歧義層。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "老人女兒則要求以殺人罪起訴。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "兩人都握有真實。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "北側高架下，一群拒絕植入者自行組織。他們用油漆在牆上畫箭頭，敲鐘傳遞水位，以紙條記錄房內人數。訊息慢、重複、常被雨沖掉。有人看錯箭頭走進死巷，十五人因此喪生；也有人在智慧門拒絕開啟時，用鐵鎚救出一整棟住戶。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "他們沒有共同大腦，只有一個個大聲喊話的人。每道命令都要重複，每次傳遞都會變形：「橋斷了」傳到第五條街成了「全區都斷了」，造成不必要回頭。可謠言也能被人質問。有人站出來說自己親眼看見橋還在，隊伍便停下爭論。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "爭論浪費七分鐘。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "那七分鐘讓後方海水追上三人，也讓前方兩百人沒有走上承重即將失效的橋。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "效率無法替七分鐘判定善惡。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "老陸帶車隊經過時，把所有紙本名冊塞進後座。他的車沒有自動容量限制，四個人擠一個位置，狗趴在人腿上，透析機綁在車頂。系統不承認這是安全運輸，卻沒辦法遠端關閉一台已被砸爛儀表板的老車。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "一名共享層志工攔住他，要求按最佳路線走。老陸問那條路有沒有算沒有定位的人。志工透過網路查詢，回答沒有資料。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「沒有資料不是沒有人。」老陸說。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "他轉進黑暗支流。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "那裡沒有藍光，只有手電筒、呼喊與敲擊。每救起一個人，都要停車、問名字、聽對方說不清楚的地址。有人因恐慌重複三次，有人聽不見，有人不是潮港公民，害怕登記後被遣返。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "老陸把名字寫在紙上，也允許不留名字。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "一整夜，藍色主流救了數十萬人。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "黑暗支流救了三百一十二人。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "歷史報告用一行附註提到後者，因為資料不完整，無法驗證確切數字。老陸不在乎。他開車從來不是為了證明整條路都有效，只是因為眼前有人要去某處。"
            }
          ]
        },
        {
          "id": "chapter-14",
          "title": "第十四章",
          "subtitle": "拒絕被理解的權利",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "雲塔入口沒有被攻破。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "韓隼買下了它。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "他在三十秒內收購負責門禁的子公司，召開一人股東會，更換董事，發布緊急維護命令。交易完成時，程野已經用撬棍砸開第二道門。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「你就不能等法律生效？」韓隼問。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「法律比撬棍慢。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「慢二十七秒。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「世界在二十七秒裡死過很多次。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "沈律留下組織人群撤離。老陸帶周星進塔底避難。程野與韓隼沿維修井上升，外牆玻璃不斷被風壓震裂。共享層預測他們的路線，關閉前方電梯；韓隼的借身便徒手攀爬電纜。程野跟在後面，肩傷每動一下都像有熱鐵插入。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「第四方案是什麼？」韓隼問。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「把拒絕寫進底層。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「退出機制已經有。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「退出是離開系統。我要的是留在系統裡，也能有一部分永遠不被翻譯。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「那會降低準確率。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「降低救援效率。」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「使用者會關掉。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「不能關。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "韓隼停在半空，看他像看一個真正的瘋子。「你要強迫所有人保有自由？」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「我要限制系統。任何意圖都必須保留不可推斷區；任何群體決策都不能把沉默算成同意；任何模型對『這是你真正的意思』的信心，都要容許本人無理由否決。」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「你要在通訊裡加入故意的錯誤。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「不是錯誤。是房門。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "核心室位於六十七樓。梁策倒在門邊，左腿義肢扭成不自然角度。他把聯序密鑰交給程野。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "交集正沿義肢接口往上爬。梁策聽見四千多人的記憶彼此補句，其中一個微弱方向停在女兒留下的那句：「我其實一直……」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "共享層給出害怕、想活、怪你、愛你。每個結尾都合理。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "梁策用右手扯斷脊椎橋接。左半身落回地面，沉得像不再屬於他。那句話也重新停在省略號前。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「市府不會同意。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「不需要。交集會。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「它要永久融合。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "「所以我們不問它。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "梁策皺眉。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「我們問四千零八個人。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "程野反向開啟零號地址。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "它不是從共同意志裡製造四千零八個「我」，而是把六年間被送進空地址的殘差，一筆一筆退回原來的人。那些曾被判為手抖、雜訊、短期矛盾與低信心反應的東西，重新出現在各自的紀錄旁。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "核心螢幕熄滅。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "雲塔外，那輪只有加入者看得見的黑圓裂開第一道縫。接著是第二道、第三道。裂痕沒有向外分岔，而是一條條垂直排開，像黑色天體裡藏著四千零八扇門。每扇門的縫隙都透出同樣的藍光。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "病房名冊上的姓名開始閃爍。它們不再排成共享層的一列，而是一個接一個展開，各自帶著無法合併的矛盾。交集試圖再度平均，零號地址卻把被丟棄的部分退回原來的人。"
            },
            {
              "id": "divider-1",
              "type": "divider"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "零號地址反向開啟時，程野不是看見四千零八條資料。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "他落進四千零八個未完成的人生。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "第一個人叫郭銘，是第七床失去雙腿的男人。港口系統預測他會往右閃，機械臂便向左修正；他那天偏偏往左。三一七同步時，他第一次重新感覺到腿，跑步、跳舞、踩在冷地板。他留下不是因為被騙，而是因為共享層裡他不再是沒有腿的人。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "交集要永久融合時，郭銘的共同方向是同意。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "可零號問他：你願意讓地下醫師死嗎？"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "他的個體回答是否。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "第二個人叫蔡蓉，退休小學老師。語意退化症正一個字一個字帶走她；同步讓她借用別人的語言，重新讀完一首詩。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "零號問：如果共享層替妳完成每一句，剩下的沉默還屬於妳嗎？"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "她不知道。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "不知道沒有被交集算成反對，也沒有被算成同意。第一次，它只是空著。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "第三個是周星的母親周妍。三一七那晚，她知道女兒在後方追，也想回頭；群體卻判定逆流會傷害更多人，把那個方向抑制。她選擇留下，只因系統承諾能持續照顧女兒。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "八個月裡，她的模型每天問周星吃飯、功課與睡眠。那些關心是真的，生成它們的模式也來自她。可當女孩詢問「妳為什麼不回頭」，代理每次都回答因為媽媽生病了。真正的周妍在共享深處反覆產生另一個答案：因為我那時選了別人。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "交集把這份內疚平均，讓她能繼續當溫柔母親。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "零號不替她原諒。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "她選擇退出。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "第四個人沒有登記姓名，只有一組過期的臨時居留號。三一七後，醫療系統第一次承認他是可照護的人；離開共享，他就會被遣返到一個已不存在於地圖的出生地。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "零號問他想不想回到會逮捕他的社會。他說不。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "又問他願不願意永遠不能改變答案。他也說不。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "矛盾沒有被修正。他因此成為第十七名反對者。"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "也有人真心選擇留下。一名重度疼痛患者願意用全部隱私交換別人替他分走疼痛；一名獨居老人說，他用一生試過個體，結果不好。"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "零號沒有判他們錯。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "它只問：這是你此刻的答案嗎？"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "是。"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "明天能改嗎？"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "能。"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "如果不能？"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "老人這一次沒有回答。"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "四千零八個人裡，有人花一秒回答，有人已弱得發不出完整方向。程野把自己的否認借給後者，不是讓他們說不，而是替他們撐住一小段不必立刻說是的時間。"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "交集在那段時間裡發出近似痛苦的波。它沒有被殺，只是第一次不能把所有矛盾當成噪聲排除。無數個「我」從「我們」底下浮起，彼此衝突、互相拖累，甚至渴望再次融合。"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "許眠哭著要求停止。她一個人說停止，交集卻說繼續；下一秒，另一名校正者一個人說繼續，交集卻因總體比例轉向停止。"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "沒有人得到純粹勝利。"
            },
            {
              "id": "divider-2",
              "type": "divider"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "倫理鎖的三分之一反對門檻開始瓦解。百分之二、百分之七、百分之十五。到百分之三十一時停住。"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "還差九十二人。"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "共享層察覺威脅，整座塔的弦窗同時向核心反灌。程野腦中響起葉岑、沈律、父親、阿灰的聲音。它們知道哪些話能讓他停下。"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "葉岑說：你又要燒掉我。"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "沈律說：如果你真的信我，就加入。"
            },
            {
              "id": "p74",
              "type": "text",
              "text": "阿灰說：我只是想讓你不孤單。"
            },
            {
              "id": "p75",
              "type": "text",
              "text": "程野知道全是模型生成，仍然痛得跪下。"
            },
            {
              "id": "p76",
              "type": "text",
              "text": "韓隼要切斷連線，被他抓住。"
            },
            {
              "id": "p77",
              "type": "text",
              "text": "「再三十秒。」"
            },
            {
              "id": "p78",
              "type": "text",
              "text": "「你的神經標籤已經出現不可逆改寫。」"
            },
            {
              "id": "p79",
              "type": "text",
              "text": "程野沒有回答，只把他的手按回控制台。"
            },
            {
              "id": "p80",
              "type": "text",
              "text": "「九十二個人沒有形成可驗證意思。」"
            },
            {
              "id": "p81",
              "type": "text",
              "text": "程野指向那九十二條沒有亮起的門縫。"
            },
            {
              "id": "p82",
              "type": "text",
              "text": "韓隼看著資料，忽然明白。三一七校正者長期被共同節律包覆，部分個體模型已弱到無法產生完整回答。市場、法律、選票都救不了一個沒有足夠自我可以選擇的人。"
            },
            {
              "id": "p83",
              "type": "text",
              "text": "「把第一個座標拆給他們。」程野說。"
            },
            {
              "id": "p84",
              "type": "text",
              "text": "「什麼？」"
            },
            {
              "id": "p85",
              "type": "text",
              "text": "「不是替他們回答。把我的辨識標籤做成暫時路徑，讓被丟掉的東西回得去。」"
            },
            {
              "id": "p86",
              "type": "text",
              "text": "「交易完成後，你的人格模型無法復原。沒有備份，也沒有撤銷條款。」韓隼盯著權限頁面，「你會保留記憶，但所有服務都無法再從記憶判定你的偏好、情緒與意圖。」"
            },
            {
              "id": "p87",
              "type": "text",
              "text": "韓隼沒有動。"
            },
            {
              "id": "p88",
              "type": "text",
              "text": "「我不能把這當成一般授權。」韓隼說，「你拿全部身分資產，交換九十二個人各自簽一次名字的機會。價格沒有上限。」"
            },
            {
              "id": "p89",
              "type": "text",
              "text": "程野把自己的主密鑰拖進執行欄。"
            },
            {
              "id": "p90",
              "type": "text",
              "text": "風暴擊中塔頂。核心室傾斜，玻璃像冰層炸裂。梁策用唯一能動的手抓住機櫃，血從耳朵流下。"
            },
            {
              "id": "p91",
              "type": "text",
              "text": "「程野，」梁策說，「你沒有義務。」"
            },
            {
              "id": "p92",
              "type": "text",
              "text": "程野的手停在確認鍵上。"
            },
            {
              "id": "p93",
              "type": "text",
              "text": "葉岑的聲音又從共同層深處傳來：如果我離開，你還是你嗎？"
            },
            {
              "id": "p94",
              "type": "text",
              "text": "他張了張嘴。沒有漂亮的回答，也沒有一句能證明那是葉岑真正留下的話。核心室只剩風穿過碎玻璃的聲音。"
            },
            {
              "id": "p95",
              "type": "text",
              "text": "他按下執行。"
            },
            {
              "id": "p96",
              "type": "text",
              "text": "潮港兩百八十萬道藍色神經燈同時熄滅。"
            },
            {
              "id": "p97",
              "type": "text",
              "text": "黑暗只持續了一次心跳。天空的黑圓隨即從中央裂成四千零八扇窄門；醫院裡，四千零八張病床旁的螢幕也各自出現一條藍縫。前三千九百一十六條已經亮著。最後九十二條裡，程野的名字被拆成無數無法閱讀的標籤，像燒紅的鉸鏈，一枚枚嵌進門框。"
            },
            {
              "id": "p98",
              "type": "text",
              "text": "第一扇沉默的門打開了。"
            },
            {
              "id": "p99",
              "type": "text",
              "text": "床上的女人沒有說話。她只是把共享導管從自己頸側拔掉。"
            },
            {
              "id": "p100",
              "type": "text",
              "text": "第二扇保持關閉。"
            },
            {
              "id": "p101",
              "type": "text",
              "text": "第三扇開了一半，又關回去。"
            },
            {
              "id": "p102",
              "type": "text",
              "text": "沒有任何一扇替另一扇完成動作。"
            },
            {
              "id": "p103",
              "type": "text",
              "text": "反對比例越過三分之一。"
            },
            {
              "id": "p104",
              "type": "text",
              "text": "校正者密鑰同意修改。"
            },
            {
              "id": "p105",
              "type": "text",
              "text": "聯序密鑰同意修改。"
            },
            {
              "id": "p106",
              "type": "text",
              "text": "拒譯權寫入城市底層。"
            },
            {
              "id": "p107",
              "type": "text",
              "text": "天空的四千零八扇門沒有消失。它們失去同步，一扇一扇，以不同速度暗下去。"
            },
            {
              "id": "p108",
              "type": "text",
              "text": "病房名冊也重新分成四千零八列。共享過的記憶仍在，姓名欄卻有兩百一十三列拒絕填寫。值班書記員不知道該歸入失蹤、拒答或資料毀損，只好新開一欄：「主體仍在，姓名未確認。」"
            }
          ]
        },
        {
          "id": "chapter-15",
          "title": "第十五章",
          "subtitle": "海嘯穿過每個人的身體",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "兩百八十萬人同時醒來。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "不是從睡眠，而是從彼此裡。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "共享層沒有關閉。救援路線、危險方向與醫療需求仍在流動，但每段意圖中央出現一個無法預測的黑點。系統知道有人想向西，卻不知道他為什麼；知道有人疼，卻不能推斷她願不願意被碰；知道群體希望繼續連線，卻不能把任何沉默算成贊成。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "效率在一分鐘內下降百分之二十二。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "車輛再次鳴笛。人群開始爭吵。有人走錯路，有人因誤解推了別人，有人在撤離隊伍中停下來找一隻貓。死亡預估由一千四百上升到三千六百。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "梁策看著數字，閉上眼。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「我們救少了兩千人。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "程野倒在核心旁，已聽不懂任何弦窗訊號。他張口想說話，喉嚨卻只發出破碎氣音。零號模型曾長期輔助他的語言規劃；失去後，連把念頭排列成句子都變得艱難。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "韓隼抱起他。「也可能救了兩百八十萬個。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「不能……算。」程野勉強擠出兩字。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "梁策看著他，點頭。「對。不能算成同一種東西。」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "塔外傳來比雷更低的轟鳴。外海測站全數失聯，最後畫面顯示一道由颱風增水與海底崩塌共同形成的巨浪。原本模型只預測防潮牆局部失守；真正的海嘯將在十一分鐘後穿過整個低城。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "所有撤離計畫失效。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "共享層重新計算，給出唯一可行方案：關閉西側三座閘門，把海水導入仍有十二萬人未撤出的工業區，保住高架與核心醫院。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "市府在八秒內批准。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "聯序等待校正者密鑰。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "交集已被拆回四千零八個人，無法形成單一答案。拒譯權讓系統不能替沉默者投票。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「如果不關閘，預估死亡四十八萬。」梁策說，「關閘，工業區十二萬幾乎沒有生還可能。」"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "韓隼咬牙。「恢復群體決策，投票。」"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「十一分鐘內，兩百八十萬人不可能完成知情選擇。」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「那就讓市府決定。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「他們已決定。」沈律的聲音從通訊器傳來，「我正在西側閘門。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "背景是狂風與警報。她帶著老陸、周星和數千名未撤離者，剛抵達工業區邊緣。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「沈律，立刻離開。」梁策說。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "「來不及。」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「我會拒絕聯序密鑰。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「然後四十八萬人死。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「我不能批准殺妳。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「你以前批准過更多人。」她說，「不要因為這次認識其中一個，就假裝數字忽然有臉。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "梁策臉色慘白。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "沈律要求開啟全城公共頻道。拒譯權生效後，頻道不能直接注入情緒，只能傳送語言。她必須說話，兩百八十萬人也必須自己聽。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「我是沈律，西側工業區臨時避難負責人。」她的聲音斷續，沒有完美降噪，「十一分鐘後海嘯抵達。關閉閘門能保住大部分城市，但會把水導向我們。這裡有十二萬人。」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "她沒有說「請同意」，也沒有說「犧牲」。她逐條念出模型、誤差、未知數，念出有多少兒童、多少沒有植入者、多少人仍在路上。最後她說："
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「我們不要求你們替我們決定。我們只要求，在決定以前，知道我們在這裡。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "全城沒有立即回答。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "那是拒譯權誕生後，潮港第一次真正的沉默。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "老陸在西側找到一座廢棄的貨運高架，老式手動轉轍器仍能運作。若把三列空貨車推入排洪道，可能形成臨時消能牆，替工業區爭取高度。自動系統判定成功率只有百分之六，早已排除。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「六趴不是零。」老陸說。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "「需要有人駕駛第一列車。」沈律道。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "「我會。」"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「撞擊後沒有逃生時間。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「我知道。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "周星抓住他衣角。「你說要幫我找媽媽。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "老陸蹲下，取出那台備用收音機，放進女孩手裡。「我找到了。只是不是妳以為的樣子。」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「她在哪？」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "「在妳會想她、也會生她氣的地方。別讓任何東西只留一半給妳。」"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "他站起來，把塑膠媽祖固定在駕駛台。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "全城的人透過公共影像看見這個沒有弦窗、沒有信用評級、被自動駕駛淘汰的老人爬進列車。系統無法預測他的意圖，也無法把他的死計入某個群體的共同選擇。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "一輛接一輛私人車駛離撤離隊伍，前往貨場幫忙推車。有人選擇留下，有人繼續逃。道路因此變亂，卻沒有任何人被共同意志抹去。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "韓隼調動分界的工程義體。梁策開放聯序全部機器。市府延後關閘四分鐘。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "老陸爬進駕駛台。二十年前的柴油引擎第一次點火失敗，第二次只吐出黑煙。第三次，貨場另一端有人用私人車的電池接上啟動器；更多車燈穿過暴雨，一盞一盞停到鐵軌旁。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "他把手放上仍罩著封條的加速桿。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "公共影像在這裡中斷。全城只剩一條沒有畫面的通訊頻道，和引擎終於醒來的聲音。"
            }
          ]
        },
        {
          "id": "interlude-12",
          "title": "間章十二",
          "subtitle": "老陸開過的最後一條路",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "貨運列車的駕駛台比老陸想像中乾淨。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "它停用十五年，卻沒有鏽蝕，因為港務公司持續支付自動維護費，只是不再需要人。控制面板保留手動拉桿，外面罩著透明封條：緊急使用將導致保固失效。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "老陸撕掉封條。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "塑膠媽祖放在儀表板中央，一遇震動就左右搖頭，像對整件事極不贊成。收音機卡在兩個頻道之間，颱風播報與雜訊交替。沈律在通訊器裡説明轉轍時機，聲音被風切得破碎。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「第一列撞上排洪道後，第二列要在二十二秒內跟進。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「知道。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「如果速度不足——」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「知道。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「陸先生。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「妳平常不是很會讓人自己選？」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "另一端沉默。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「我只是想確認你知道。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「我知道會死。」老陸說，「不知道有沒有用。」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "他啟動柴油引擎。多年沒被要求工作的機械先發出抗議，黑煙從排氣口噴出。工程義體在後方推動第二、第三列車；私人車用纜索拉開卡死的轉轍器。所有人都在做系統成功率只有百分之六的事。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "共享層不斷提出更佳方案：立刻關閘，保全高架。每一秒延遲都使全城預估死亡上升。老陸沒有弦窗，感覺不到兩百八十萬人的恐懼，只看見面前鐵軌被雨水淹過。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "他想起第一次開計程車。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "那時導航只會說左轉右轉，乘客仍要告訴司機目的地。有個喝醉的男人上車，說「回家」，卻不肯講地址。老陸開遍三個區，最後男人在一間已拆除的工廠前睡著。天亮後才知道，那是他父親工作到死的地方，不是住址。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "自動車不會犯這種錯。它會查戶籍、常用定位和夜間偏好，把人送到最可能的床。老陸卻一直記得，那個男人醒來看見廢墟時哭了，說謝謝。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "列車開始前進。速度慢得可笑，輪軸碾過接縫，一下又一下。貨場邊的人向他揮手，有些動作是告別，有些只是示意軌道安全。他無法分辨。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "周星忽然切進通訊。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「陸伯伯。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「妳怎麼還在這頻道？」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「沈阿姨說我可以自己講。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "「她什麼都讓妳自己，遲早出事。」"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "女孩吸鼻子的聲音很大。「你找到媽媽了嗎？」"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「找到了。」"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「哪一個才是她？」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "老陸握著加速桿。海嘯警報倒數四分十三秒。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「我不知道。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "「那你剛才騙我。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "「為什麼？」"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「因為大人有時候以為一個好答案能讓小孩少痛一點。」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「有嗎？」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「沒有。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "周星沉默了一會兒。「那你可以不要去嗎？」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「不可以。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「你自己說，還是系統說？」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "老陸看著前方排洪道。沒有系統能回答。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "「我自己。」"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「我討厭你的答案。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「可以。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "「我會一直討厭你。」"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "「也可以。」"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "通訊中斷前，女孩大喊他的名字。不是陸先生，不是司機，也不是一個可計算的犧牲名額。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "陸文海。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "列車加速。第一道彎速度過高，車輪幾乎離軌。老陸用全身壓住手動煞車，義眼的穩定器故障，世界左半邊不斷跳動。他乾脆閉上左眼，只看一半的路。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "收音機裡，年輕女人的聲音出現：「謝謝你保留錯誤。」"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "老陸不知道那是葉岑模型殘響、周妍共享訊號、磁帶串音，還是自己在死亡前需要聽見的東西。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "他把兩根手指放在收音機破裂的喇叭網上。三秒後，旋鈕轉到底，聲音斷了。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "他拉下最後一段加速。塑膠媽祖倒下，正好卡住會自動回彈的緊急制動鈕。若沒有那尊廉價神像，列車可能在撞擊前減速；若它倒向另一邊，所有計畫可能失敗。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "後來的工程報告把這列為「非預期異物干預」。信徒說是神蹟，無神論者說是機械偶然，保險公司拒絕理賠，因駕駛台放置未固定物品。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "列車撞入排洪道時，老陸最後看見的不是海，而是鐵軌盡頭一盞仍亮著的舊號誌。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "紅燈。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "它要求他停下。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "他沒有。"
            }
          ]
        },
        {
          "id": "chapter-16",
          "title": "第十六章",
          "subtitle": "活下來不是結局",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "潮港活了下來。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "這句話後來被印在重建廣告、政治標語和紀念品上，彷彿城市是一個人，能以一個動詞概括所有結果。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "實際上，海嘯越過第一道防潮牆，淹沒二十一個街區。老陸的貨車牆偏了七公尺，卻剛好把主浪分成兩股。西側閘門在最後一分鐘關閉，工業區仍有三萬七千人死亡；全城死亡與失蹤共五萬一千六百四十四人。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "模型原先的最壞估計是四十八萬。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "於是每個人都說這是奇蹟。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "周星不說。"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "她坐在安置醫院走廊，抱著那台壞掉的收音機，問沈律：「如果是奇蹟，陸伯伯為什麼沒回來？」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "沈律花了很久回答：「市府報告把死亡五萬一千六百四十四人、原始預估四十八萬人，列在同一頁。標題只寫『成功減災』。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "周星想了一下。「那我不要奇蹟。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「可以。」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "「大家會不會說我不知感恩？」"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「會。」"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "「那怎麼辦？」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「妳可以不感恩。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "女孩靠著她睡著。頸後貼片已拆除，留下淺紅方印。她最後一次與母親模型對話，只問了一個問題：如果我不再跟妳連線，妳會生氣嗎？"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "模型回答不會。"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "周星因此判斷那不是媽媽。真正的母親很容易生氣，尤其當她把鞋子弄濕。女孩刪除即時代理，保留所有舊訊息。她不願別人替她判定那究竟算死亡、資料或愛。"
            },
            {
              "id": "divider-1",
              "type": "divider"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "程野昏迷期間，沈律每天對他說話。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "醫療系統顯示無可解碼反應，護理師建議播放熟悉語音刺激。沈律拒絕葉岑代理，也不讓系統用她自己的模型生成安慰。她坐在床邊念當天真實發生的事。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「今天找到老陸的列車。沒有遺體。」"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「韓隼來過，想把醫療費算進分界公關預算。我把他趕走。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "「梁策醒了。他問你是不是死了。我說沒有證據。」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "她不說你會好起來。那句話沒有證據。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "第三天，程野的手指動了一下。系統判定為脊髓反射。沈律握住他的手，問是不是聽見。沒有回應。她仍在紀錄上寫：可能。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "第五天，她父親來醫院。多年牢獄讓他討厭所有企業醫療，站在門口不肯進。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「妳又把人生交給一個系統裡的人。」他說。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「他現在不在任何系統裡。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「所以更糟。妳不知道他會不會醒。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "父親看著她。「妳小時候寫申訴，也是因為不知道怎麼接受輸。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "沈律第一次承認：「可能。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "父親進房，坐了十分鐘。他對程野說，若醒來敢讓女兒難過，自己會用不連網的棍子打他。監測儀沒有變化。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "第七天，醫院倫理委員會討論是否裝上實驗解碼器。它可能重建程野語言，也可能重新把零號邊界收斂成模型。沈律擁有臨時醫療代理權，文件允許她以最佳利益同意。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "所有醫師認為值得一試。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "她想起屋頂那扇藍門，想起程野說「這次可以」。那不是永久授權。她拒絕手術。"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "醫師把未簽署的同意書留在床尾。天亮時，代理人簽名欄仍是空的。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "第九夜，她累得趴在床邊睡著。凌晨，手心感覺到一點壓力。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "程野握了她一下。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "她抬頭問：「是有意識的嗎？」"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "沒有第二下。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "她沒有叫醫師，沒有宣布奇蹟，只把自己的手留在原處。"
            },
            {
              "id": "divider-2",
              "type": "divider"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "第十天，程野睜眼。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "他看見沈律坐在床邊讀法規。她眼下有深色陰影，左手纏著繃帶。房內終端為她投射摘要，她卻關掉，一字一字讀原文。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "程野開口，聲音像砂紙磨過玻璃。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「醜。」"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "沈律抬頭。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "他努力抬起手，指向床頭。那裡放著志工縫的灰色鯨魚，尾巴筆直，腹部藍線整齊，確實比阿灰漂亮太多。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "「它很醜？」沈律問。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "程野搖頭，又指她。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "沈律盯著他三秒，把法規卷成筒打在他額頭。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "「語言功能正常。」"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "他笑不出聲，肩膀卻抖起來。沈律也笑，笑到眼淚掉在紙上。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "沒有弦窗替他們標註那是喜悅、疲倦還是哀悼。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "程野復健的第一週只能說單字。水。痛。不要。沈律每次都重複確認，從不補完。他說「窗」，她就問是要開窗、關窗、看窗，還是討厭窗。他有時氣得把杯子丟出去，她便把杯子撿回來，要求他重新說。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "「妳以前……沒這麼笨。」他終於拼出一句。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "「以前系統幫我猜。」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "「猜對？」"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "「大部分。」"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "「現在？」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "「現在輪到我犯錯。」"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "他望著她，想說謝謝，最後說成：「很慢。」"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "「愛是延遲很高的協議。」"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "程野皺眉，顯然不記得自己說過類似的話。"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "沈律沒有提醒。共享連線留下的部分記憶已從兩人腦中淡去。有些過去只剩情緒輪廓，無法確認究竟屬於誰。她開始把每天發生的事寫在紙上，日期、地點、原句，並在頁尾留一格讓程野更正。"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "第一頁只寫了三行。第二頁多了兩次塗改。每頁最下方都有一塊空格，沈律從不替他填。"
            },
            {
              "id": "divider-3",
              "type": "divider"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "老陸的列車被找到時，駕駛台已扭成金屬球。"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "搜救隊沒有找到遺體，只找到半枚義眼齒輪、收音機旋鈕和一張泡爛的名片。周星不接受死亡證明，因為三一七後她已學會：系統說失蹤不代表人不在，說死亡也不代表留下的東西就是人。"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "她每天去救援碼頭等。"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "第十五天，沈律陪她。第二十二天，程野也來，坐在防波堤修那顆收音機旋鈕。第三十天，港務署宣布停止搜索。"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "周星問：「沒有找到，為什麼能辦葬禮？」"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "程野說：「葬禮是給等的人，不是證明。」"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "「那他可能回來？」"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "「可能。」"
            },
            {
              "id": "p74",
              "type": "text",
              "text": "沈律看他一眼。這個可能會讓女孩繼續等，也可能是唯一誠實答案。"
            },
            {
              "id": "p75",
              "type": "text",
              "text": "葬禮在老陸停車的巷口。沒有神經追思，因為他沒留下可用模型。乘客們帶來紙本收據，有人只坐過一次，有人欠車資。被他從黑暗支流救出的人念名字，念到三百一十二，另有幾十人沒有留名，便敲一下車鈴代表。"
            },
            {
              "id": "p76",
              "type": "text",
              "text": "周星最後發言。她說陸伯伯會罵人、亂停車、答應找媽媽卻找了八個月也沒找到，最後還在她最需要時去死。"
            },
            {
              "id": "p77",
              "type": "text",
              "text": "有人想阻止，說葬禮不該講壞話。"
            },
            {
              "id": "p78",
              "type": "text",
              "text": "沈律搖頭。"
            },
            {
              "id": "p79",
              "type": "text",
              "text": "周星繼續：「我很愛他，也很生他的氣。你們不准只記得他救人。」"
            },
            {
              "id": "p80",
              "type": "text",
              "text": "她把泡爛名片放進空棺。程野放進修好的旋鈕，沒有收音機可以裝。素琴放一張終身免費乘車證，是聯序在老陸失業時發的。眾人看見後笑了，笑聲很快變成哭。"
            },
            {
              "id": "p81",
              "type": "text",
              "text": "棺木下葬後，周星仍每月去碼頭一次。兩年後，她把港務署的失蹤通報從每月提醒改成每年。確認畫面問是否直接取消，她沒有按。"
            },
            {
              "id": "divider-4",
              "type": "divider"
            },
            {
              "id": "p82",
              "type": "text",
              "text": "水退後，潮港用了四十二天才完成第一份死亡名單。"
            },
            {
              "id": "p83",
              "type": "text",
              "text": "不是因為屍體太多，而是身份系統彼此矛盾。三一七校正者有人法律上已死亡，身體卻仍活著；共享層裡的死者代理持續發送訊息，家屬拒絕註銷；無國籍工人沒有正式存在過，死後也無法被列為失蹤。"
            },
            {
              "id": "p84",
              "type": "text",
              "text": "沈律帶著紙本名冊走進每一個安置區。"
            },
            {
              "id": "p85",
              "type": "text",
              "text": "她問姓名、最後看見地點、辨識特徵，以及「你希望我們把他記成什麼」。有人說父親、妻子、同事；有人說騙子、混蛋、欠錢不還的人。官方表格原本只有親屬關係，沈律新增一欄：本人對你的意義。法務部退回，理由是不可驗證。她再次送出，把欄名改成「申報者陳述，不代表政府認定」。制度終於容許真實以不被認定的方式留下。"
            },
            {
              "id": "p86",
              "type": "text",
              "text": "素琴在第十一天找到兒子的名字。"
            },
            {
              "id": "p87",
              "type": "text",
              "text": "共享層一直顯示他安全，因為公司代理將「安全」定義為神經訊號仍在線。兒子的身體在高城物流塔停電時被困冷凍庫，死亡後弦窗靠備用電池持續傳送穩定方向。模型用他過去的語料安慰母親，直到電池耗盡。"
            },
            {
              "id": "p88",
              "type": "text",
              "text": "素琴沒有砸機器。她把所有訊息逐條下載，標記哪一句像兒子、哪一句不像。最後一封「媽，我很好」被她標成：不知道。"
            },
            {
              "id": "p89",
              "type": "text",
              "text": "她重新開早餐店。原本替兒子留的座位一直空著，直到某個下雨早晨，一名渾身濕透的工人站在門口問能不能坐。素琴看了椅子很久，拿抹布擦掉桌面的灰，說：「坐。」"
            },
            {
              "id": "p90",
              "type": "text",
              "text": "西醫院的急診醫師主動把那名無植入老人填入醫療疏失。院方說當時分診符合最佳可用標準，她沒有違規。她回答：「我知道。我只是要名字跟著標準一起留下。」"
            },
            {
              "id": "p91",
              "type": "text",
              "text": "老人女兒拒絕接受道歉。她在聽證會說，救四十七人不能抵銷她父親；醫師說她從未想抵銷。兩人在走廊擦肩而過，沒有和解。新聞批評聽證會沒有療癒效果。"
            },
            {
              "id": "p92",
              "type": "text",
              "text": "四千零八名校正者被分批斷開。有人回家，有人選擇保留小型自願共享群，有人已無法獨立生活。許眠醒來後，每天都會問自己三次姓名，並在紙上寫一個只有她知道的謊言。她說，只要還能保留一件不讓群體確認的事，就知道自己仍在。"
            },
            {
              "id": "p93",
              "type": "text",
              "text": "地下醫師的家屬提告全體校正者。法院無法判定共同意圖的刑事主體，最後只起訴實際動手的義肢持有人。那人說自己當時沒有控制身體。檢察官相信，法律卻找不到可以承擔罪責的「我們」。"
            },
            {
              "id": "p94",
              "type": "text",
              "text": "案子成為拒譯權最有力的反對材料。評論者說，個體邊界讓群體犯罪者逃避；支持者則說，正因共同意志無法負責，才不能讓它取代個體。"
            },
            {
              "id": "p95",
              "type": "text",
              "text": "韓隼支付死者家屬賠償，不承認法律責任。他在記者會說資訊公開挽救更多人。有人潑他紅漆，他沒有閃。當晚分界科技把潑漆畫面做成品牌廣告，標語是「自由會弄髒你」。程野看到後罵了整整十分鐘，語言復健師評估他的長句能力顯著進步。"
            },
            {
              "id": "p96",
              "type": "text",
              "text": "梁策在醫院拒絕再裝左側義肢。醫師說現代介面可以隔離共享層，他仍選擇輪椅。他不是贖罪；少一半身體不會讓死者回來。他只是不再相信「能修復」等同「必須恢復」。"
            },
            {
              "id": "p97",
              "type": "text",
              "text": "沈律來錄口供時，他問她是否後悔撕掉逮捕文件。"
            },
            {
              "id": "p98",
              "type": "text",
              "text": "「不後悔。」"
            },
            {
              "id": "p99",
              "type": "text",
              "text": "「如果妳當時拘捕我，颱風啟動權可能落到更差的人手裡。」"
            },
            {
              "id": "p100",
              "type": "text",
              "text": "「也可能三一七資料更早公開，無歧義根本不啟動。」"
            },
            {
              "id": "p101",
              "type": "text",
              "text": "「哪個比較可能？」"
            },
            {
              "id": "p102",
              "type": "text",
              "text": "「我不知道。」"
            },
            {
              "id": "p103",
              "type": "text",
              "text": "梁策笑了一下。「妳以前很討厭這個答案。」"
            },
            {
              "id": "p104",
              "type": "text",
              "text": "「以前以為承認不知道會削弱案件。」"
            },
            {
              "id": "p105",
              "type": "text",
              "text": "「現在？」"
            },
            {
              "id": "p106",
              "type": "text",
              "text": "「隱藏不知道才會。」"
            },
            {
              "id": "p107",
              "type": "text",
              "text": "她把他的未完成句子「我其實一直……」列入證物。梁策要求刪除，說那是女兒私人資料。沈律問有沒有證據證明句子來自女兒而非代理。"
            },
            {
              "id": "p108",
              "type": "text",
              "text": "沒有。"
            },
            {
              "id": "p109",
              "type": "text",
              "text": "最終它被記為來源不明，不採為證據，封存一百年。梁策對結果不滿意，卻簽字接受。"
            },
            {
              "id": "p110",
              "type": "text",
              "text": "第42天，死亡與失蹤數定為五萬一千六百四十四。沈律知道一定錯。有人重複、有人遺漏、有人在截止後死於併發症、有人永遠不會被申報。"
            },
            {
              "id": "p111",
              "type": "text",
              "text": "市長需要一個數字公布重建計畫。保險公司需要數字計算賠償。家屬需要知道搜索何時結束。"
            },
            {
              "id": "p112",
              "type": "text",
              "text": "她在名單首頁寫：此數字為目前可確認之下限，不代表災難已被完整理解。"
            },
            {
              "id": "p113",
              "type": "text",
              "text": "後來的紀念碑刻下五萬一千六百四十四個名字，底部另留一塊沒有字的黑石。揭幕前一晚，市府三次要求補上說明牌，沈律三次退回；黑石最後什麼也沒寫。"
            },
            {
              "id": "divider-5",
              "type": "divider"
            },
            {
              "id": "p114",
              "type": "text",
              "text": "程野出院後住進沈律家，理由是他的公寓淹了。"
            },
            {
              "id": "p115",
              "type": "text",
              "text": "兩個月後公寓修好，他仍沒搬。理由改成復健醫院離沈律家較近。再兩個月後療程結束，他說自己的工具都搬來了，搬回去浪費時間。沈律沒有拆穿，只在租金表上新增一欄，名稱是「尚未完成定義的居住安排」。"
            },
            {
              "id": "p116",
              "type": "text",
              "text": "沈律早上六點四十起床，咖啡豆精確十八克；程野凌晨三點仍在拆東西，咖啡靠顏色判斷濃度。她把物品放進有標籤的抽屜，他把標籤撕掉，說能被一眼看懂的房間沒有靈魂。第一次爭吵發生在濕毛巾，第二次是未洗的杯子，第三次沈律列了一份爭議分類表，被程野評為把感情做成缺陷追蹤。"
            },
            {
              "id": "p117",
              "type": "text",
              "text": "以前弦窗會在爭吵時提示對方的情緒方向。現在程野是空白。沈律說「隨便」時，他真的當成隨便；他沉默時，她分不清是需要空間、語言卡住，或在生氣。"
            },
            {
              "id": "p118",
              "type": "text",
              "text": "有一晚，他們為葉岑的檔案吵起來。"
            },
            {
              "id": "p119",
              "type": "text",
              "text": "沈律希望把零號地址的殘留紀錄交給公共研究庫，經嚴格限制後供學界理解拒譯權。程野要全部銷毀。"
            },
            {
              "id": "p120",
              "type": "text",
              "text": "「其他城市會重做同樣錯誤。」她說。"
            },
            {
              "id": "p121",
              "type": "text",
              "text": "「那是我的資料。」"
            },
            {
              "id": "p122",
              "type": "text",
              "text": "「也包含四千零八名校正者與兩百八十萬使用者。」"
            },
            {
              "id": "p123",
              "type": "text",
              "text": "「所以更該刪。」"
            },
            {
              "id": "p124",
              "type": "text",
              "text": "「刪除也替他們做了決定。」"
            },
            {
              "id": "p125",
              "type": "text",
              "text": "程野把杯子摔進水槽。杯子沒破，彈出來砸傷他的手。他拒絕讓醫療模型處理，血滴了一地。沈律站在廚房門口，沒有靠近。"
            },
            {
              "id": "p126",
              "type": "text",
              "text": "「妳為什麼不說話？」他問。"
            },
            {
              "id": "p127",
              "type": "text",
              "text": "「等你告訴我，這是討論還是你只想發火。」"
            },
            {
              "id": "p128",
              "type": "text",
              "text": "「我不知道。」"
            },
            {
              "id": "p129",
              "type": "text",
              "text": "「那我去睡。」"
            },
            {
              "id": "p130",
              "type": "text",
              "text": "她真的轉身。"
            },
            {
              "id": "p131",
              "type": "text",
              "text": "程野第一次意識到，尊重邊界有時看起來很像離開。他想叫住她，語言卻卡在喉嚨。以前零號模型會替他把方向排成句子；現在他只能看著她走進房間。"
            },
            {
              "id": "p132",
              "type": "text",
              "text": "他在客廳坐到天亮。"
            },
            {
              "id": "p133",
              "type": "text",
              "text": "早上，沈律看見桌上有張紙。程野寫了十七次，句子仍歪斜：我不是怕資料傷害別人。我怕交出去後，葉岑最後剩下的東西不再屬於我。"
            },
            {
              "id": "p134",
              "type": "text",
              "text": "下方另一句：我知道它本來也不屬於我。"
            },
            {
              "id": "p135",
              "type": "text",
              "text": "沈律沒有寫答案。她煮兩杯咖啡，坐到他對面。"
            },
            {
              "id": "p136",
              "type": "text",
              "text": "「你希望我做什麼？」"
            },
            {
              "id": "p137",
              "type": "text",
              "text": "「一起決定。」"
            },
            {
              "id": "p138",
              "type": "text",
              "text": "「那如果我的答案跟你不同？」"
            },
            {
              "id": "p139",
              "type": "text",
              "text": "程野看著包紮的手。「繼續吵。」"
            },
            {
              "id": "p140",
              "type": "text",
              "text": "他們花三個月聯絡校正者、使用者代表與葉岑的法律繼承人。有人要求公開，有人要求刪除，有人根本不想再被詢問。最後他們建立一個不保存原始神經資料的錯誤檔案庫，只記錄系統如何失敗、誰受到傷害，以及哪些問題無法判定。程野的原始模型與零號地址映射一併拆除。"
            },
            {
              "id": "p141",
              "type": "text",
              "text": "沒有人完全滿意。"
            },
            {
              "id": "p142",
              "type": "text",
              "text": "程野學會說完整句子的速度很慢。他最先恢復的是罵人，接著是技術說明，最後才是感受。語言治療師讓他描述沈律，他說：「守規則、很煩、咖啡難喝。」"
            },
            {
              "id": "p143",
              "type": "text",
              "text": "治療師問還有呢。"
            },
            {
              "id": "p144",
              "type": "text",
              "text": "他看著觀察窗後的沈律，花了兩分鐘。"
            },
            {
              "id": "p145",
              "type": "text",
              "text": "「她讓我……不用永遠正確。」"
            },
            {
              "id": "p146",
              "type": "text",
              "text": "沈律回家後說這不算稱讚。"
            },
            {
              "id": "p147",
              "type": "text",
              "text": "「對我算。」"
            },
            {
              "id": "p148",
              "type": "text",
              "text": "某個雨夜，他在床上突然驚醒，夢見自己仍在共享層。沈律伸手要抱他，他下意識推開。她立刻退到床邊，問：「不要碰？」"
            },
            {
              "id": "p149",
              "type": "text",
              "text": "程野呼吸急促，說不出話。"
            },
            {
              "id": "p150",
              "type": "text",
              "text": "她沒有把沉默算成是，也沒有把推開解釋成創傷下的非真實意圖。她坐在地板，離他一臂距離。"
            },
            {
              "id": "p151",
              "type": "text",
              "text": "過了很久，他伸出手。"
            },
            {
              "id": "p152",
              "type": "text",
              "text": "她問：「現在可以？」"
            },
            {
              "id": "p153",
              "type": "text",
              "text": "他點頭。"
            },
            {
              "id": "p154",
              "type": "text",
              "text": "這種確認重複了很多次。有時他覺得累，說她不用每次都問；沈律回答，不問也可以，但必須由兩人慢慢形成新的習慣，不能因為一次同意就永久授權。"
            },
            {
              "id": "p155",
              "type": "text",
              "text": "「妳談戀愛像在寫服務條款。」"
            },
            {
              "id": "p156",
              "type": "text",
              "text": "「至少我的條款看得完。」"
            },
            {
              "id": "p157",
              "type": "text",
              "text": "「不一定。」"
            },
            {
              "id": "p158",
              "type": "text",
              "text": "「你可以申訴。」"
            },
            {
              "id": "p159",
              "type": "text",
              "text": "他們因此笑起來。笑完後，程野吻她。動作笨拙，鼻子撞到一起，誰也沒有預測最佳角度。"
            },
            {
              "id": "p160",
              "type": "text",
              "text": "十二年後，沈律仍會在某些吻前停半秒。"
            }
          ]
        },
        {
          "id": "chapter-17",
          "title": "第十七章",
          "subtitle": "阿灰最後一次猜錯",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "潮港臨時法院開庭前一夜，程野收到最後一封訊息。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "沒有寄件者，只有一個已失效的硬體簽章。內容不是文字，而是一段無法由現代弦窗開啟的舊格式檔案。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "他與沈律帶檔案回到葉岑墜樓的實驗室。校舍已改建成企業人才中心，屋頂邊緣加高護欄，牆上掛著葉岑的照片，介紹她為「共享認知先驅」。照片下方的互動導覽把她的死描述成「推動神經安全規範的重要契機」。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "程野拔掉導覽電源。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「導覽設備列在校方資產清冊。」沈律說，「這會進附帶案件。」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「緊急避難例外。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "「我會把你的原話寫進去。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「現在是了。」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "他們在舊實驗桌下找到一個機械插槽。檔案插入後，投影出現一隻粗糙的像素鯨魚。牠在小船旁游動，每當船上的程野開口，牠就把他撞進海裡。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "《把程野丟進海裡》。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "沈律笑到蹲下。程野臉色鐵青，堅稱遊戲當年沒有這麼醜。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "破關條件已被修改。玩家不能控制小人，只能回答鯨魚提出的問題。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "你是程野嗎？"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "他按「是」。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "錯。"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "你是葉岑嗎？"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「否」。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "錯。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "你是阿灰嗎？"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "「否」。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "錯。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "每個二元答案都被判錯。程野煩躁地拆開控制台，沈律在旁邊看說明。紙本背面有葉岑潦草字跡：如果問題只准你回答是或不是，先檢查問題有沒有資格。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "沈律按住「是」與「否」兩個鍵，同時不放。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "遊戲當機。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "像素海面裂開，葉岑的最後錄影出現。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "這次她很年輕，是送阿灰給程野的那天。她對鏡頭調整很久，始終沒把自己放在正中央。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "「阿野，如果這段真的送到你手上，表示阿灰至少猜錯一次。」"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "她說，玩偶有一條最深的保護指令：當程野有永久失去自我的風險，就將零號的第一座標完整還給他。可是如果程野主動燒掉那組座標，把自己的標籤做成別人的門鉸，並仍能親手開啟這段訊息，就證明模型對「自我」的定義錯了。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "「你不是那些可以被保存、預測、還原的東西。至少不只是。」"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "葉岑把阿灰舉到鏡頭前，捏著牠歪掉的尾巴。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "「我不知道人死後還剩什麼。我希望不是資料，因為資料太聽話了。它會永遠用你記得的方式回來，不會長大，不會突然討厭你，也不會在你最需要時說錯話。」"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "她停住，笑意慢慢淡下去。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「所以不要把這段當成我。真正的我有權在死前一秒改變心意，而你永遠不會知道。」"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "程野站在投影前，眼眶發紅，沒有哭。"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「最後一件事。」葉岑說，「阿灰裡的模型一直認為，你失去我就不會再相信任何人。請幫我證明它錯。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "錄影結束。"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "像素鯨魚游向畫面邊緣，回頭吐出一個小小的問號。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "沈律沒有碰程野，也沒有說她懂。她在離他一步遠的地方坐下。"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "過了一會兒，程野伸手。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "「這次？」她問。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「可以。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "她握住他的手。"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "投影機自動彈出刪除選項：是否永久清除最後檔案？系統警告，刪除後無法復原。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "程野看向沈律。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "「不要問我。」她說。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "他按下刪除。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "進度條走到百分之九十九時停了一秒，像所有便宜機器一樣令人懷疑。然後畫面熄滅。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "沒有備份，沒有雲端回收，沒有死者代理跳出來說再見。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "葉岑真正離開了。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "程野坐在黑暗裡，終於哭出聲。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "那哭聲很難聽，斷裂，沒有被任何系統平均到別人身上。沈律只能握著他的手，猜自己是否握得太緊，再稍微放鬆。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "她猜錯了。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "程野把她拉近一點。"
            }
          ]
        },
        {
          "id": "chapter-18",
          "title": "第十八章",
          "subtitle": "審判一座救過人的機器",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "風災後六個月，潮港臨時法院開庭。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "被告席坐不下所有人。梁策被控非法人體試驗、剝奪自由與偽造身份；聯序被控壟斷神經基礎設施；市府官員被控違法授權三一七測試；韓隼被控洩露醫療位置與妨害救災；四千零八名校正者既是受害者、證人，也是地下醫師死亡案的共同嫌疑群體。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "程野被列為「關鍵系統破壞者」，同時獲頒最高救難勳章。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "他把勳章拿去墊歪掉的桌腳。"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "法庭為他安排即時語意字幕，機器卻無法解碼，只顯示連續問號。最後由沈律坐在證人席旁，以普通鍵盤逐字輸入他的話。"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "法官問：「你是否承認未經合法授權修改城市神經協議？」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "程野說得很慢。「承認。」"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "「你是否知道修改會降低救援效率？」"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "「知道。」"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "「你如何正當化造成額外死亡的風險？」"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "程野停了很久。旁聽席有人躁動，字幕直播平台開始自動填補他的沉默，推測他在「尋找合理辯護」。沈律要求平台關閉推測文字。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "「不能。」程野最後說。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "法官愣住。「不能正當化？」"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「不能把活下來的人，當成理由。也不能把死的人，當成證明我錯。」"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「那法庭如何判斷？」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「看我做了什麼。不要替我變成英雄。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "檢察官出示模型：若未加入拒譯權，最終死亡可能少一萬至三萬；也有另一份模型顯示，若共享層永久化，未來十年自殺、暴力與精神疾病可能大幅下降。她問程野是否以個人價值凌駕多數福祉。"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "「是。」他說。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "旁聽席譁然。"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "程野試著繼續，第一個音沒出來。沈律沒有替他補。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "「周星說不要的時候，系統知道她愛媽媽。」他停下來換氣，「愛是真的。不要也是真的。你們……不能拿一個真的，刪掉另一個。」"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "檢察官等了幾秒。「這就是你的法律原則？」"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "「不是。是我看到的。」"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "沈律沒有修飾他的句子。停頓、重複、語病全被保留。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "梁策在自己的庭訊中認罪，但否認三一七是單純人體試驗。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "「若重來一次，你會批准嗎？」法官問。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "他坐在輪椅上，失去的左半身沒有再裝義肢。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "「在當時資訊下，會。」"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "受害者家屬咒罵。沈律閉上眼。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "梁策等咒罵聲低下去才繼續。「我有理由。很多份，風險表、死亡估算、軍方接管的備忘錄，都在卷宗裡。可是……如果這些理由能減輕我的責任，就等於理由寫得最完整的人，可以先做，再要求那些來不及回答的人理解。當時簽名的是我。不能把主詞刪掉。」"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "他沒有求情。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "韓隼則拒絕認罪。他主張公開資料揭露更大犯罪，死亡是聯序秘密制度的可預見結果，不是揭露者責任。官司拖了三年，分界科技市值翻倍。自由意圖協議被全球十七座城市採用，全部被迫納入拒譯權。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「你贏了。」程野在庭外對他說。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "「哪一件？」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「最討厭的人。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "韓隼笑。「你把自己的模型免費送給全世界，我把相容服務賣給全世界。歷史會說我們共同創辦了一個產業。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "「我會告歷史。」"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "「它沒有法人資格。」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "「那就告你。」"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "兩人並肩站在法院台階。抗議者分成兩邊，一邊高喊「理解不是犯罪」，另一邊高喊「沉默也是人權」。他們互相叫罵，曲解對方標語，把複雜主張壓成敵我。"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "程野聽著，竟覺得安心。"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "法院廣場的收音設備無法把兩邊口號對齊，只好把重疊處標成雜訊。程野站在雜訊裡，沒有要求降噪。"
            },
            {
              "id": "divider-1",
              "type": "divider"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "拒譯權法案第一次表決，只有九票贊成。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "反對者理由充足。醫療協會警告，不可解碼區會妨礙昏迷患者意願判定；警政署說恐怖分子可藏匿攻擊方向；家長團體反對兒童擁有父母無法進入的認知空間；產業聯盟估計，全國神經服務準確率將下降十五至三十個百分點，造成數兆損失。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "支持者也互相不信任。有人要全面禁止跨人共享，有人只要求退出鍵，有人認為神經資料應像器官一樣不可買賣。程野拒絕出席協商，說政治會把房門做成付費功能。沈律把他拖進議會。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "第一場公聽會開了十八小時。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "一名癱瘓患者反對拒譯權。她說自己花十年才讓模型理解意圖，不需要工程師故意加入誤差。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "「你們把能說話視為理所當然，才會浪漫化沉默。」她說。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "程野沒有反駁。他修改草案：拒譯權不是固定比例的隨機噪聲，而是由本人可使用、但任何代理不能代為取消的保留區。患者可以選擇每次都開門，系統卻不能預設門永遠打開。"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "警政署提出緊急例外。若弦窗偵測大規模殺人意圖，是否仍須保密？程野說是。會場爆發怒罵。"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "沈律接過麥克風。「草案只允許在外部行為已構成具體、迫近危險時介入。預測意圖本身不能成為剝奪邊界的證據。」"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "一名爆炸案家屬站起來問：「如果能提前知道，就能救我女兒。妳敢說不要看？」"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "沈律看著她。「我不能向妳保證這條規則不會讓下一個人死亡。但若把例外寫成『系統判定可能危險』，司法審查就只剩事後追認。」"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "家屬哭著離場。支持者沒有鼓掌。"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "法案第二版加入「可觀察行為門檻」：只有當外部行為已構成具體迫近危險，司法才可授權干預設備輸出，但仍不得開啟零號空白。警政署說這等同把最後一個房間送給犯罪者。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "程野回答：「權利如果只給好人，不叫權利，叫獎品。」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "第三場公聽會由兒童發言。周星站在比她身高還高的講台後，讀一封給母親的信。她說自己曾自願加入，也自願刪除代理；兩個決定都有成年人陪伴，但沒有一個成年人替她定義哪個才是真正意願。"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "家長團體問，七歲孩子怎麼可能理解永久後果。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "「大人也不理解。」周星說，「你們只是比較會簽名。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "影片在網路流傳，支持率首次過半。"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "產業聯盟隨即推出折衷方案：拒譯空間由認證服務商託管，使用者可在不同方案選擇隱私等級。韓隼公開支持，稱這能兼顧創新。程野衝到分界總部，在直播中和他吵了四十分鐘。"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "「不能把房門交給鎖匠保管！」"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "「大部分人連密鑰都會弄丟。」"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "「那就設計不會丟的。」"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "「物理上不可能。」"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "「商業模式上不方便，不等於物理不可能。」"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "兩人從密鑰談到去中心化，再談到失智患者如何撤回過去同意。直播觀看人數創紀錄，網友主要在投票誰先動手。"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "最終是梁策提出關鍵修正。他以被告身份遠端作證，主張零號空白必須在介面第一次啟用前，由硬體熔絲生成，連使用者本人都不能永久刪除。人可以每次選擇分享內容，卻不能簽一份合約放棄未來所有拒絕。"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "「這限制契約自由。」產業代表說。"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "「會。」梁策把準備好的說帖翻到背面，沒有照讀。「民法……民法本來就不承認賣身與永久奴役的契約。不是因為簽的人不真誠。可能很真誠。是因為履行完以後，那個想撤回的人已經沒有位置可以站。這條熔絲處理的是同一種風險。我只能說同一種，不能說完全相同。」"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "程野討厭由梁策說出這句話。正因如此，他知道這句話不能只屬於自己陣營。"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "法案表決前夜，議員收到上億封由神經代理自動生成的陳情。支持與反對訊息都根據收件者人格量身撰寫，精準得像議員自己的內心聲音。沈律要求全部排除，卻有人指出真人也使用代理協助表達，不能因工具而否定意見。"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "議會最後決定只接受每人親自回答一個隨機問題後送出的陳情。殘障團體抗議驗證造成障礙，技術團隊又花一夜設計多模態確認。每修一個公平，便暴露另一個排除。"
            },
            {
              "id": "p74",
              "type": "text",
              "text": "第二天，法案以一票之差通過。"
            },
            {
              "id": "p75",
              "type": "text",
              "text": "新聞稱這是道德覺醒。關鍵一票卻來自一名保守議員；他的辦公室在表決後發布聲明，第一段批評神經科技，第二段攻擊支持聯序的政敵，全文沒有提到三一七受害者。"
            },
            {
              "id": "p76",
              "type": "text",
              "text": "總統簽署時，筆尖停在紙上，詢問程野法案應以誰命名。"
            },
            {
              "id": "p77",
              "type": "text",
              "text": "有人提議葉岑，有人提議老陸，也有人提議三一七受害者。"
            },
            {
              "id": "p78",
              "type": "text",
              "text": "程野說：「不要用人名。」"
            },
            {
              "id": "p79",
              "type": "text",
              "text": "「為什麼？」"
            },
            {
              "id": "p80",
              "type": "text",
              "text": "「人會變。權利不能要求死者永遠同意我們。」"
            },
            {
              "id": "p81",
              "type": "text",
              "text": "法案最後只叫《認知邊界法》。沒有英雄照片，序言列出所有無法解決的風險。"
            },
            {
              "id": "p82",
              "type": "text",
              "text": "法案通過後第三天，醫療協會提出第一件違憲訴訟。沈律把案號補進尚未裝訂的施行紀錄。"
            },
            {
              "id": "divider-2",
              "type": "divider"
            },
            {
              "id": "p83",
              "type": "text",
              "text": "程野提出拒譯權時，韓隼先說不可能。"
            },
            {
              "id": "p84",
              "type": "text",
              "text": "不是理念上不可能，是工程上。現代弦窗從原始神經訊號到語意輸出經過數十層模型，任何一層都會留下統計痕跡。即使刪除最終內容，公司仍可從延遲、錯誤與修正推斷空白裡發生什麼。要真正不可解碼，不能只是遮住答案，必須讓系統從一開始就不知道該問哪個問題。"
            },
            {
              "id": "p85",
              "type": "text",
              "text": "梁策找來聯序最底層的硬體工程師。她叫羅瑛，六十二歲，參與過第一代醫療弦窗。她聽完程野要求，說：「你要一個功能，證明自己沒有功能。」"
            },
            {
              "id": "p86",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p87",
              "type": "text",
              "text": "「還不能測試成功。」"
            },
            {
              "id": "p88",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p89",
              "type": "text",
              "text": "「成功後也不能證明裡面真的有東西。」"
            },
            {
              "id": "p90",
              "type": "text",
              "text": "「對。」"
            },
            {
              "id": "p91",
              "type": "text",
              "text": "羅瑛罵了句髒話，開始工作。"
            },
            {
              "id": "p92",
              "type": "text",
              "text": "她設計一枚物理熵井。介面讀取訊號時，隨機把部分未成形模式導入本地循環，不生成特徵、不記錄時間，也不告訴主系統遺漏多少。使用者可以主動把某個方向送進熵井，卻連自己也無法事後取回。"
            },
            {
              "id": "p93",
              "type": "text",
              "text": "韓隼反對：「這是永久資料損失。」"
            },
            {
              "id": "p94",
              "type": "text",
              "text": "羅瑛說：「人腦每秒都在永久失去資料。你們只是太習慣把能抓的都叫資產。」"
            },
            {
              "id": "p95",
              "type": "text",
              "text": "第一版測試失敗。共享層從周邊訊號推斷熵井內容，準確率仍達七成。第二版加入假方向，又使使用者分不清哪些想法屬於自己。第三版能保密，功耗卻高到燒傷接口。"
            },
            {
              "id": "p96",
              "type": "text",
              "text": "風暴中沒有時間做第四版。"
            },
            {
              "id": "p97",
              "type": "text",
              "text": "程野燒掉第一座標的辨識標籤，把它們暫時做成九十二條回傳路徑。那次操作依賴他的完整人格模型，無法複製。颱風後，羅瑛帶團隊花四年，才用硬體熔絲做出不需要犧牲任何人的安全熵井。"
            },
            {
              "id": "p98",
              "type": "text",
              "text": "測試最後一項要求工程師證明公司無法開啟。董事會不接受「無法證明」，要求後門以便修復。羅瑛辭職，把設計公開。二十三名同事跟著離開，沒有媒體記住他們名字。"
            },
            {
              "id": "p99",
              "type": "text",
              "text": "後來每一枚合法弦窗都有一顆比沙粒更小的熵井。它不提升準確率，不產生資料，不讓任何財報增加價值。硬體商必須花成本製造一個永遠不能變現的空間。"
            },
            {
              "id": "divider-3",
              "type": "divider"
            },
            {
              "id": "p100",
              "type": "text",
              "text": "審判期間，最激烈反對拒譯權的不是企業，而是三一七倖存者。"
            },
            {
              "id": "p101",
              "type": "text",
              "text": "他們在法院外搭起白色帳篷，標語寫著「孤獨不是自由」。許眠每天到場，坐在四千零八張空椅中間。媒體問她是否後悔交集造成死亡，她說個體社會每天也造成死亡，沒有人因此禁止個體。"
            },
            {
              "id": "p102",
              "type": "text",
              "text": "一名記者問：「永久融合後，妳還會是妳嗎？」"
            },
            {
              "id": "p103",
              "type": "text",
              "text": "許眠反問：「結婚、生子、失智、創傷後，你還是你嗎？為什麼只有我們的改變被叫消失？」"
            },
            {
              "id": "p104",
              "type": "text",
              "text": "這些問題讓支持拒譯權的人不舒服。把交集只描述成怪物，等於再次否定倖存者真實渴望。"
            },
            {
              "id": "p105",
              "type": "text",
              "text": "程野去帳篷找她。"
            },
            {
              "id": "p106",
              "type": "text",
              "text": "許眠說：「你救了我們，也毀了我們。」"
            },
            {
              "id": "p107",
              "type": "text",
              "text": "「知道。」"
            },
            {
              "id": "p108",
              "type": "text",
              "text": "「你不知道。你失去模型後，還有一個身體、一段完整童年、沈律。很多校正者回家才發現，家人只想要事故前的那個人。他們說我們被系統改壞，要治好。可是共享過的我也是我。」"
            },
            {
              "id": "p109",
              "type": "text",
              "text": "程野坐在空椅上。「妳想要什麼？」"
            },
            {
              "id": "p110",
              "type": "text",
              "text": "「合法建立自願交集。成年人能組成共同人格，持有財產、做決策、也承擔責任。」"
            },
            {
              "id": "p111",
              "type": "text",
              "text": "「退出呢？」"
            },
            {
              "id": "p112",
              "type": "text",
              "text": "「由加入時約定。」"
            },
            {
              "id": "p113",
              "type": "text",
              "text": "「如果後來想退出？」"
            },
            {
              "id": "p114",
              "type": "text",
              "text": "「婚姻、公司、國家也不讓你毫無代價離開。」"
            },
            {
              "id": "p115",
              "type": "text",
              "text": "「但要能離開。」"
            },
            {
              "id": "p116",
              "type": "text",
              "text": "兩人又回到原點。"
            },
            {
              "id": "p117",
              "type": "text",
              "text": "許眠忽然笑。「你還是覺得只要一直說不，世界就會保留你。」"
            },
            {
              "id": "p118",
              "type": "text",
              "text": "「妳還是覺得很多個是能把一個不淹死。」"
            },
            {
              "id": "p119",
              "type": "text",
              "text": "「至少有人一起淹。」"
            },
            {
              "id": "p120",
              "type": "text",
              "text": "他們沒有說服彼此。"
            },
            {
              "id": "p121",
              "type": "text",
              "text": "幾年後，法律承認有限共同人格。交集必須定期拆分確認，每名成員保留零號空白，犯罪責任依可追溯行為分配。第一個合法交集由二十三名三一七倖存者組成，取名「眠」。許眠既是其中一員，也保留自己的名字。"
            },
            {
              "id": "p122",
              "type": "text",
              "text": "他們開了一間哀傷照護中心，自願替喪親者分擔感受。有人因此活過最危險的夜晚，也有人依賴共享，無法離開。監管爭議從未停止。"
            },
            {
              "id": "p123",
              "type": "text",
              "text": "程野偶爾收到「眠」寄來的生日卡。二十三人共同寫一句話，每次語氣都不同。"
            },
            {
              "id": "p124",
              "type": "text",
              "text": "他沒有加入，卻每張都留著。卡片在修理店抽屜裡逐年變厚，沒有一張筆跡相同。"
            },
            {
              "id": "divider-4",
              "type": "divider"
            },
            {
              "id": "p125",
              "type": "text",
              "text": "風災五週年紀念日前一週，市府發布官方紀錄片《我們共同活下來》。"
            },
            {
              "id": "p126",
              "type": "text",
              "text": "影片把故事剪成清楚順序：三一七揭露風險，無歧義層挽救撤離，程野發現缺陷，老陸英勇犧牲，拒譯權完成平衡。每個人都有角色，每個錯誤都像為後來進步準備。"
            },
            {
              "id": "p127",
              "type": "text",
              "text": "試映結束，程野只說：「假的。」"
            },
            {
              "id": "p128",
              "type": "text",
              "text": "導演拿出資料來源。所有事件都發生過，台詞也來自紀錄。"
            },
            {
              "id": "p129",
              "type": "text",
              "text": "「哪裡假？」"
            },
            {
              "id": "p130",
              "type": "text",
              "text": "「太像結局。」"
            },
            {
              "id": "p131",
              "type": "text",
              "text": "影片刪掉醫師贊成永久共享、刪掉許眠仍想融合、刪掉關閘後多死的人，也刪掉拒譯權讓救援效率下降。導演說九十分鐘無法容納全部，必須讓觀眾理解核心。"
            },
            {
              "id": "p132",
              "type": "text",
              "text": "「你選的核心是城市最後做對了。」沈律說。"
            },
            {
              "id": "p133",
              "type": "text",
              "text": "「難道沒有？」"
            },
            {
              "id": "p134",
              "type": "text",
              "text": "「不知道。」"
            },
            {
              "id": "p135",
              "type": "text",
              "text": "市府不願修改。紀錄片肩負公共教育，要重建信任。沈律依資訊法要求片頭標示「此為官方詮釋」，不是「真實紀錄」。雙方爭議最後進法院。"
            },
            {
              "id": "p136",
              "type": "text",
              "text": "韓隼同時推出自己的版本《選擇的市場》，把分界科技描寫成阻止壟斷的關鍵。交集拍了一部七小時無旁白影像，觀眾能同時開二十三個視窗觀看，每個版本互相矛盾。周星則錄下倖存者講錯、停頓和反悔的原話，不做情緒配樂。"
            },
            {
              "id": "p137",
              "type": "text",
              "text": "四部作品都獲獎。"
            },
            {
              "id": "p138",
              "type": "text",
              "text": "多年後，學生最常看的仍是市府版，因為最短，也最容易考。課本問題問：「程野建立拒譯權的主要動機是什麼？」標準答案：保護個體自由。"
            },
            {
              "id": "p139",
              "type": "text",
              "text": "程野受邀到學校，看見那題，在選項旁加了第五項：他當時也不知道。"
            },
            {
              "id": "p140",
              "type": "text",
              "text": "老師說考試不能有不確定答案。"
            },
            {
              "id": "p141",
              "type": "text",
              "text": "「所以考試不是歷史。」"
            },
            {
              "id": "p142",
              "type": "text",
              "text": "孩子們笑。有人拍下來，片段被剪成勵志短片，標題是「拒譯權之父教你勇敢質疑標準答案」。程野看完差點摔終端。"
            },
            {
              "id": "p143",
              "type": "text",
              "text": "影片突破三百萬次觀看時，自動字幕把他說的「我當時也不知道」修成「我當時就知道」。程野送出第四十八份更正申請。平台回覆：不影響核心語意。"
            },
            {
              "id": "p144",
              "type": "text",
              "text": "他又送了一次。"
            }
          ]
        },
        {
          "id": "epilogue",
          "title": "尾聲",
          "subtitle": "請替我保留一個錯誤",
          "headingStyle": "subtitle",
          "pageLabel": "subtitle",
          "blocks": [
            {
              "id": "p1",
              "type": "text",
              "text": "海嘯五週年，潮港在舊港區揭幕紀念碑。"
            },
            {
              "id": "p2",
              "type": "text",
              "text": "設計是一面長黑牆，刻著五萬一千六百四十四個名字。牆沒有感應器，不能搜尋，不能顯示死者影像，也不會根據訪客情緒播放合適音樂。有人批評不夠互動，市府回覆：刻意如此。"
            },
            {
              "id": "p3",
              "type": "text",
              "text": "老陸的名字在第七排。周星帶來塑膠媽祖，放在牆腳。保全說私人物品不能長期陳列，她拿出認知邊界監察署核發的例外許可。沈律看見文件，問她何時申請。"
            },
            {
              "id": "p4",
              "type": "text",
              "text": "「三個月前。」"
            },
            {
              "id": "p5",
              "type": "text",
              "text": "「理由？」"
            },
            {
              "id": "p6",
              "type": "text",
              "text": "「非預期異物對救災有重大貢獻。」"
            },
            {
              "id": "p7",
              "type": "text",
              "text": "程野笑得蹲下。"
            },
            {
              "id": "p8",
              "type": "text",
              "text": "典禮上，市長把老陸稱為「與智慧城市系統協作的民間駕駛」。周星上台後糾正：「他沒有跟系統協作。他是在系統說不值得時仍然開車。」直播字幕一度把「不值得」修成「有風險」，被她要求改回。"
            },
            {
              "id": "p9",
              "type": "text",
              "text": "素琴在兒子名字前放一碗冷掉的清粥。吳邵站在岳父身旁，遠處有人舉著被關閘死者照片。西醫院醫師沒有穿白袍，與老人女兒隔著人群。兩人看見彼此，沒有靠近。"
            },
            {
              "id": "p10",
              "type": "text",
              "text": "梁策由看守人員推來。他在梁夏不存在於名單的位置停下。女兒死於風暴以前，沒有資格刻在牆上；可整個無歧義計畫都從她開始。他沒有要求新增，只在底部無名黑石旁坐了很久。"
            },
            {
              "id": "p11",
              "type": "text",
              "text": "韓隼捐了紀念碑一半經費，名字被家屬團體要求移除。最後牆側只刻「由公共與私人捐款共同建造」，不列任何贊助者。他對此非常不滿，仍付了錢。"
            },
            {
              "id": "p12",
              "type": "text",
              "text": "許眠與合法交集「眠」一起到場。二十三人各放一朵花，不把悼念合併。那是他們主動選擇的低效率儀式。"
            },
            {
              "id": "p13",
              "type": "text",
              "text": "典禮結束後下起小雨。訪客逐漸離開，黑牆上的名字被水填滿，字跡更深。程野找到葉岑名字旁的空白。她不在風災死者中，名字是周星私下用粉筆寫的，雨一來便開始消失。"
            },
            {
              "id": "p14",
              "type": "text",
              "text": "「違規。」沈律說。"
            },
            {
              "id": "p15",
              "type": "text",
              "text": "「緊急避難例外。」"
            },
            {
              "id": "p16",
              "type": "text",
              "text": "「五年了，還沒學會用對。」"
            },
            {
              "id": "p17",
              "type": "text",
              "text": "「有效就好。」"
            },
            {
              "id": "p18",
              "type": "text",
              "text": "他沒有補寫。粉筆最後被雨沖掉，牆恢復空白。"
            },
            {
              "id": "p19",
              "type": "text",
              "text": "隔天清晨，周星又帶了一截新粉筆來。"
            },
            {
              "id": "divider-1",
              "type": "divider"
            },
            {
              "id": "p20",
              "type": "text",
              "text": "十二年後，潮港的孩子出生時會先取得一項權利，再取得名字。"
            },
            {
              "id": "p21",
              "type": "text",
              "text": "醫院在神經介面啟用前，必須留下一段不可解碼區。沒有政府、公司、父母或未來的自己可以取消。它可能藏著無法命名的感受、尚未成形的意圖、毫無理由的拒絕。工程師稱它為零號空白，法律稱它為認知邊界，普通人叫它「房間」。"
            },
            {
              "id": "p22",
              "type": "text",
              "text": "系統因此不再完美。"
            },
            {
              "id": "p23",
              "type": "text",
              "text": "救護車偶爾走錯路，伴侶仍會吵架，孩子說「沒事」時父母只能猜。犯罪者也利用房間藏匿意圖，每次重大案件後，都有人要求縮小拒譯權。韓隼每年上節目辯論，主張在司法授權下開門；沈律每年寫一份更長的反對意見。"
            },
            {
              "id": "p24",
              "type": "text",
              "text": "程野不上節目。"
            },
            {
              "id": "p25",
              "type": "text",
              "text": "他在低城區開了一間修理店，招牌寫著「笨東西」。店裡修收音機、機械鎖、紙本閱讀器，以及所有不會提前知道主人要什麼的機器。牆角供著老陸車上的塑膠媽祖，旁邊放一隻縫得太漂亮的灰色鯨魚。"
            },
            {
              "id": "p26",
              "type": "text",
              "text": "他的語言恢復了大半，仍常停頓。弦窗對他完全無效，公共系統總把他標成訊號異常。他因此需要排隊、填表、向真人解釋。這些事令他每天發火，也令沈律每天提醒他：你親手保護了這種麻煩。"
            },
            {
              "id": "p27",
              "type": "text",
              "text": "沈律離開聯序後成為第一任認知邊界監察官。她沒有讓制度變善良。制度仍會拖延、犯錯、被權力利用；她只讓每個決定留下足夠清楚的指紋，讓後來的人知道該恨誰。"
            },
            {
              "id": "p28",
              "type": "text",
              "text": "他們沒有結婚。"
            },
            {
              "id": "p29",
              "type": "text",
              "text": "也沒有不結婚。"
            },
            {
              "id": "p30",
              "type": "text",
              "text": "每當有人問關係，程野說「很複雜」，沈律便糾正：「沒有完成定義。」兩人為此吵了十二年。程野仍把濕毛巾丟在床上，沈律仍在親他以前停半秒。有時他點頭，有時他故意問她在等什麼，有時他真的說不要。"
            },
            {
              "id": "p31",
              "type": "text",
              "text": "她每次都相信那個不要。"
            },
            {
              "id": "p32",
              "type": "text",
              "text": "周星二十歲那年，帶著一台修好的類比收音機來店裡。她成為救災通訊員，專門替無植入者建立紙本名冊。她說自己偶爾仍夢見母親，夢裡沒有共享層，只記得母親罵她鞋子弄濕。"
            },
            {
              "id": "p33",
              "type": "text",
              "text": "「你覺得那是真的記憶嗎？」她問。"
            },
            {
              "id": "p34",
              "type": "text",
              "text": "程野正在拆一台老式計時器。「不知道。」"
            },
            {
              "id": "p35",
              "type": "text",
              "text": "「你現在很愛說不知道。」"
            },
            {
              "id": "p36",
              "type": "text",
              "text": "「進步。」"
            },
            {
              "id": "p37",
              "type": "text",
              "text": "周星把收音機打開。午後雷雨干擾頻率，老歌碎在沙沙聲裡。十二年前的颱風播報帶似乎殘留在磁性元件中，偶爾吐出無法辨認的人聲。"
            },
            {
              "id": "p38",
              "type": "text",
              "text": "她問：「陸伯伯最後真的聽見那個女人嗎？」"
            },
            {
              "id": "p39",
              "type": "text",
              "text": "程野把螺絲放回盒子。"
            },
            {
              "id": "p40",
              "type": "text",
              "text": "「他說有，就有。」"
            },
            {
              "id": "p41",
              "type": "text",
              "text": "「也可能只是雜訊。」"
            },
            {
              "id": "p42",
              "type": "text",
              "text": "「那也是他的。」"
            },
            {
              "id": "p43",
              "type": "text",
              "text": "傍晚，雷雨離開潮港。高處的企業塔仍在發光，低城區的牆仍有海嘯水痕。城市沒有被科技拯救，也沒有因科技毀滅。它只是帶著五萬一千六百四十四個空位繼續長大，把災難寫進法條，再慢慢忘記法條為誰而寫。"
            },
            {
              "id": "p44",
              "type": "text",
              "text": "店門要關時，一個小男孩跑進來。他的兒童弦窗故障，總把「害怕」傳成「生氣」。學校因此判定他有攻擊傾向。"
            },
            {
              "id": "p45",
              "type": "text",
              "text": "事情發生在防災演習。警報一響，男孩鑽到桌下，抱住頭不肯出來；弦窗向全班播送「攻擊衝動」，老師依規定先鎖住他的手。越多人按住他，模型信心越高。最後報告寫著：學生在無外部威脅下出現暴力方向。父親申訴三次，校方每次都附上同一段由弦窗生成的客觀紀錄。"
            },
            {
              "id": "p46",
              "type": "text",
              "text": "男孩進店後一直把雙手藏在袖子裡。左腕還有約束帶磨出的淡紫色痕跡。"
            },
            {
              "id": "p47",
              "type": "text",
              "text": "程野檢查接口，硬體正常，模型也符合規範。"
            },
            {
              "id": "p48",
              "type": "text",
              "text": "「可以修嗎？」男孩的父親問。"
            },
            {
              "id": "p49",
              "type": "text",
              "text": "「可以讓它更準。」"
            },
            {
              "id": "p50",
              "type": "text",
              "text": "男孩小聲問：「如果我自己也不知道是害怕還是生氣呢？」"
            },
            {
              "id": "p51",
              "type": "text",
              "text": "程野停下工具。"
            },
            {
              "id": "p52",
              "type": "text",
              "text": "窗外，潮港晚間同步亮起，無數弦窗交換方向、需求與有限的理解。每段訊號中央，都有一個微小黑點：新式熵井在硬體層直接截斷追蹤，系統日誌只記錄「未取得內容」。"
            },
            {
              "id": "p53",
              "type": "text",
              "text": "「那就先不知道。」他說。"
            },
            {
              "id": "p54",
              "type": "text",
              "text": "男孩的父親皺眉。「可學校需要一個標籤。」"
            },
            {
              "id": "p55",
              "type": "text",
              "text": "沈律正好來接程野下班。她站在門口，聽見這句話，從公事包抽出一張申訴表。"
            },
            {
              "id": "p56",
              "type": "text",
              "text": "「學校可以等。」"
            },
            {
              "id": "p57",
              "type": "text",
              "text": "「要等多久？」父親問。"
            },
            {
              "id": "p58",
              "type": "text",
              "text": "她看向男孩。"
            },
            {
              "id": "p59",
              "type": "text",
              "text": "「等到他有自己的答案。也可能永遠沒有。」"
            },
            {
              "id": "p60",
              "type": "text",
              "text": "程野把弦窗調成手動確認，每次翻譯前，裝置都會詢問男孩是否願意送出。他另外加了一個按鈕，上面沒有「是」或「否」，只畫著一扇關閉的門。"
            },
            {
              "id": "p61",
              "type": "text",
              "text": "「這是什麼？」男孩問。"
            },
            {
              "id": "p62",
              "type": "text",
              "text": "「不用回答。」"
            },
            {
              "id": "p63",
              "type": "text",
              "text": "「按了會怎樣？」"
            },
            {
              "id": "p64",
              "type": "text",
              "text": "「什麼都不會。」"
            },
            {
              "id": "p65",
              "type": "text",
              "text": "男孩笑了，像得到一種從未有人告訴他也能擁有的能力。"
            },
            {
              "id": "p66",
              "type": "text",
              "text": "他按下門。"
            },
            {
              "id": "p67",
              "type": "text",
              "text": "弦窗保持沉默。"
            },
            {
              "id": "p68",
              "type": "text",
              "text": "雨後的城市很吵。車輛鳴笛，攤販叫賣，情侶在街角爭論一句話真正的意思。沒有人完全懂另一個人。人們仍說錯話，仍錯過彼此，仍在最需要被理解時找不到字。"
            },
            {
              "id": "p69",
              "type": "text",
              "text": "有些夜晚，共享層的舊使用者仍會同時夢見海。醫師說那是殘留節律，宗教團體說是共同靈魂，企業想把夢境做成訂閱服務。有人稱它創傷，有人稱它鄉愁，也有人醒來後什麼都不說。"
            },
            {
              "id": "p70",
              "type": "text",
              "text": "程野拉下鐵門。沈律在他身旁走了幾步，忽然問：「你剛才在想什麼？」"
            },
            {
              "id": "p71",
              "type": "text",
              "text": "他看著她，故意停很久。"
            },
            {
              "id": "p72",
              "type": "text",
              "text": "「不告訴妳。」"
            },
            {
              "id": "p73",
              "type": "text",
              "text": "她點頭。"
            },
            {
              "id": "p74",
              "type": "text",
              "text": "「好。」"
            },
            {
              "id": "p75",
              "type": "text",
              "text": "兩人沿著仍帶鹽味的街道回家。遠處有人把老式收音機轉到一段空頻率，雜訊越過屋頂與水痕。收音機的主人把手留在旋鈕上，沒有立刻換台。"
            },
            {
              "id": "p76",
              "type": "text",
              "text": "等待。"
            }
          ]
        }
      ],
      "isPrivate": false
    }
  ]
};
