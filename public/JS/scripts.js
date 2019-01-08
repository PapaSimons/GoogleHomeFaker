//Fallback scripts
var fallbacks = [
    {
        lang: "en-GB",
        texts: ["fall",
             "back"]
    },
    {
        lang: "zh-CN",
        texts: ["对不起，我没听清楚。可以再重复吗",
             "对不起，我没听清楚"]
    },
    {
        lang: "id-ID",
        texts: ["bagus",
             "satu"]
    }
  ];

var allscripts = [
    {
        lang: "en-GB",
        fallbacks: ["Sorry, I did not catch that, can you repeat again? Remember, start with goo goo",
                     "Sorry, can you repeat that again?"],
        scripts:[{
                    title: "set up",
                    texts: [
                        "(GG) I am Goo goo, what is your name?",
                        "(Sarah) (answers)",
                        "(GG) Nice to meet you Sarah. I can play music, notify your upcoming events, connect with your friends and family and many other fun stuff. Lets get started.",
                        "(GG) Nice to meet you Sarah, Lets get started!",
                        "(GG)Repeat the following sentence: Goo goo, is it going to rain?’",
                        "(Sarah) (repeats sentence)",
                        "(GG) No it will not rain tonight",
                        "(GG) Sorry, I did not catch that, can you repeat again? Remember, start with goo goo",
                        "(GG) Excellent, repeat the following sentence: Goo goo, what is the time now? ",
                        "(Sarah) (ask question) What s the time now?",
                        "(GG) It is 1 35 in the afternoon",
                       "(GG) Are you there? Remember to start your question with Goo goo.",
                        "(GG) Okay, you're doing great! I want to know a bit about yourself.",
                        "(GG) What is your favourite music?",
                        "(Sarah) (Answers)",
                        "(GG) That is always a good choice! Are you a homely person or do you like to be outdoors from time to time?",
                        "(Sarah) (Answers)",
                        "(GG) That is a good choice! What is your hobby.",
                        "(Sarah) (Answers)",
                        "(GG)Thank you!Seems like you are ready to go.", 
                        "(GG)Remember, to ask me anything, start by saying goo goo! I will pop in from time to time."
                  ]
              },
                {
                    title: "exercise",
                    texts: [
                "(GG) Hey Sarah, you have been sitting for the last couple hours. Shall we do a quick stretch?",
                "(Sarah) (answers)",
                "(GG) Great!The next exercise will help loosen those stiff back due to sitting",
                "(GG) Lets stand up, okay",
                "(GG) Now shake your arms",
                "(GG) ok good",
                "(GG)now shake your left leg", 
                "(GG)good, now shake your right leg",  
                "(GG)Great job Sarah!, see you again soon"
              ]
              },
                {
                    title: "music",
                    texts: [
                    "(GG) it seems like you are resting, would you like me to play some soothing music for you?",
                    "(Sarah) (answers)",
                    "(GG) (Plays jazz from a radio station)"
                ]

              },
                {
                    title: "outdoor",
                    texts: [
                    "(GG) Hey Sarah, it is a good day, would you like to go out?",
                    "(GG)okay, shall I remind you in the next hour?",
                    "(GG)great! have a good day"
                  ]
              }
              ,
                {
                    title: "invite",
                    texts: [
                     "(GG) Hey Sarah, it is been a while since Johnny come by. Do you want to invite him over?",
                     "(Sarah) (answers)",
                     "(GG) When shall we invite him over? Your schedule is free this week",
                     "(Sarah) (answers)",
                     "(GG)Got it, messaging him an invite now."
                  ]
              }
            ]
    },
    {
        lang: "zh-CN",
        fallbacks: ["对不起，我没听清楚。可以再重复吗？记得使用 goo goo 开始。"
                   ],
        scripts:[{
                title: "Set up",
                texts: [
                    "(GG) 我是 Goo goo – 你叫什么名字？",
                    "(Sarah) I am Sarah",
                    "(GG) 你好 Sarah，我可以播音乐，给你通知将开始的事件，跟你的亲戚朋友沟通，还有更多！来，我们开始吧",
                    "(GG) 你好 Sarah，我们开始吧！",
                    "(GG)在我之后重复，Goo goo 现在要下雨了吗",
                    "(Sarah) (repeats sentence)",
                    "(GG) 现在不会下雨，当前乌节路的天气是多云的， 温度是 32 度， 将不会下雨",
                    "(GG) 对不起，我没听清楚。可以再重复吗？记得使用 goo goo 开始。",
                    "(GG) 在我之后重复，Goo goo 现在几点",
                    "(Sarah) (ask question) Whats the time now?",
                    "(GG) 现在是 1 点 35 分",
                   "(GG) 你在吗？记得问问题得使用 goo goo 开始。",
                    "(GG) OK 你在做的好！我想对你有点了解",
                    "(GG) 你最喜欢听什么音乐",
                    "(Sarah) (Answers)",
                    "(GG) 好的选择！你是比较喜欢呆在家或出去走走？",
                    "(Sarah) (Answers)",
                    "(GG) T说得好！你有什么爱好？",
                    "(Sarah) (Answers)",
                    "(GG)谢谢！随着时间，我们会变的更亲切。到时，你已经准备好了。为了学更多提示，记得看看Goo goo的质料",
                    "(GG)记得问问题得使用 goo goo 开始！我会有时自动发启!"
              ]
          },
            {
                title: "exercise",
                texts: [
            "(GG) 嗨 Sarah，你已经坐了几个小时， 我们伸展一下好吗？",
            "(Sarah) (answers)",
            "(GG) 好！这一个体操会让你的背部肌肉放松一点",
            "(GG) 我们由站直开始，手放旁边。",
            "(GG) 站姿，左手抓住右手手腕，先往头顶上方伸展",
            "(GG) 再往左侧弯，直到你右侧和腰部有繃緊感",
            "(GG)持续 5秒，然后还边",
            "(GG)Now return to standing position.",
            "(GG)这就结束我们的体操，做的好Sarah!"
          ]
          },
            {
                title: "music",
                texts: [
                "(GG) 你先在好像在休息，要不要我播一些放松音乐给你？",
                "(Sarah) (answers)",
                "(GG) (Plays jazz from a radio station)"
            ]

          },
            {
                title: "outdoor",
                texts: [
                "(GG) 嗨 Sarah，今天天气不错 – 25 度又无可能下雨， 好机会出门散步！"
              ]
          }
          ,
            {
                title: "invite",
                texts: [
                    "(GG) 嗨 Sarah，Johnny 蛮久没过来了， 要不要请他过来",
                    "(Sarah) (answers)",
                    "(GG) 我应该几时请他过来？你这星期的日程是有空的",
                    "(Sarah) (answers)",
                    "(GG)好的，我现在就发给他一个请帖",
              ]
          }
        ]
    },
    {
        lang: "id-ID",
        fallbacks: [" Maaf, saya tidak begitu pasti,tolong ulang lagi. Ingat, mulakan cakapan mu dengan Goo Goo",
                     "Maaf ulang lagi"],
        scripts:[{
                title: "set up",
                texts: [
                        "(GG) Saya Gugu, apa nama kamu?",
                        "(Sarah) (answers)",
                        "(GG) Apa kabar Sarah. Saya boleh main musik, memberitahu acara akan datang, tolong mengeratkan silaturahim dan lain lain lagi. Jom mula",
                        "(GG) Apa kabar Sarah, jom mula",
                        "(GG)Ulang ayat ini: Goo goo, ini hari akan hujan?’",
                        "(Sarah) (repeats sentence)",
                        "(GG) Tidak, sekarang cuaca musim panas, tak akan hujan hari ini",
                        "(GG) Maaf, saya tidak begitu pasti,tolong ulang lagi. Ingat, mulakan cakapan mu dengan Goo Goo",
                        "(GG) Bagus,Ulang ayat ini: Goo goo, pukul berapa sekerang’",
                        "(Sarah) (ask question)",
                        "(GG) Sekarang waktunya satu petang",
                        "(GG) Baik sekali! Sekarang saya mahu mengenali Sarah lebih lanjut",
                        "(GG) Apa musik kegemaran mu",
                        "(Sarah) (Answers)",
                        "(GG) Ini pilihan baik! Apakah hobi kamu?",
                        "(Sarah) (Answers)",
                        "(GG)Terima kasih. Nampaknya Sarah sudah bersedia",  
                        "(GG)Ingat, jika kamu mahu cakap dengan saya, mulakan cakapan mu dengan Goo Goo!"

              ]
          },
            {
                title: "exercise",
                texts: [
                   "(GG) Hey Sarah, nampaknya kamu telah duduk di sofa ber jam jam. Ayu, kita melakukan renganan badan pantas. ",
                   "(Sarah) (answers)",
                   "(GG) Baik! Latihan seterusnya akan meringankan otot otot yang perit kerana duduk terlalu lama",
                   "(GG) Berdiri, okay?",
                "(GG) Angkat tangan anda ke atas kepala.",
                "(GG) Tarik nafas dalam dan stretch",
                "(GG) Hembus nafas dan ringangkan tangan",
                "(GG)Syabas! Esok kita senaman lagi"
               

          ]
          },
            {
                title: "music",
                texts: [
                    "(GG) namapaknya kamu sedang berehat, kamu mahukan saya bermain muzik yang menenangkan?",
                    "(Sarah) (answers)",
                    "(GG) ..Plays jazz from a radio station..",
                    "(GG) okay selamat malam"
            ]

          },
            {
                title: "outdoor",
                texts: [
                    "(GG) Hei Sarah, cuaca hari ini baik, mahu pergi jalan jalan? ",
                    "(Sarah)(answers)",   
                    "(GG)Okay, jumpa lagi",  
                    "(GG)bagus! jalan baik baik" 
              ]
          }
          ,
            {
                title: "invite",
                texts: [
                   "(GG) Hey Sarah, Telah lama Johnny tidak mengziarahi rumah, mahu saya menjemputnya kemari?",
                   "(Sarah) (answers)",
                   "(GG) Bila yah?",
                   "(Sarah) (answers)",
                   "(GG)okei! saya akan mesejnya"
              ]
          }
        ]
    }
];