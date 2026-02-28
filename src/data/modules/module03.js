export const module03 = {
  id: 3,
  levelId: 'level-1',
  title: 'Люди, общение и действия',
  words: '38–57',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ─────────────────────────────────────────────
    // БЛОК 1 — СПИСОК СЛОВ
    // ─────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      words: [
        { num: 38, word: 'say',            tr: '[seɪ]',              ru: 'говорить (что-то сказать)',          ex: 'She says hello every morning.',    exRu: 'Она говорит «привет» каждое утро.' },
        { num: 39, word: 'tell',           tr: '[tel]',              ru: 'рассказывать, сообщать',              ex: 'Tell me your name.',               exRu: 'Скажи мне своё имя.' },
        { num: 40, word: 'ask',            tr: '[ɑːsk]',             ru: 'спрашивать',                          ex: 'I want to ask a question.',        exRu: 'Я хочу задать вопрос.' },
        { num: 41, word: 'think',          tr: '[θɪŋk]',             ru: 'думать',                              ex: 'I think it is a good idea.',       exRu: 'Я думаю, это хорошая идея.' },
        { num: 42, word: 'people',         tr: '[ˈpiːpl]',           ru: 'люди',                                ex: 'Many people live here.',           exRu: 'Здесь живёт много людей.' },
        { num: 43, word: 'friend',         tr: '[frend]',            ru: 'друг',                                ex: 'He is my best friend.',            exRu: 'Он мой лучший друг.' },
        { num: 44, word: 'family',         tr: '[ˈfæməli]',          ru: 'семья',                               ex: 'My family lives in Moscow.',       exRu: 'Моя семья живёт в Москве.' },
        { num: 45, word: 'child / children', tr: '[tʃaɪld / ˈtʃɪldrən]', ru: 'ребёнок / дети',              ex: 'She has two children.',            exRu: 'У неё двое детей.' },
        { num: 46, word: 'old',            tr: '[əʊld]',             ru: 'старый; пожилой',                     ex: 'He is 70 years old.',              exRu: 'Ему 70 лет.' },
        { num: 47, word: 'young',          tr: '[jʌŋ]',              ru: 'молодой',                             ex: 'She is young and active.',         exRu: 'Она молодая и активная.' },
        { num: 48, word: 'new',            tr: '[njuː]',             ru: 'новый',                               ex: 'I have a new phone.',              exRu: 'У меня новый телефон.' },
        { num: 49, word: 'other',          tr: '[ˈʌðə]',             ru: 'другой, другие',                      ex: 'The other room is bigger.',        exRu: 'Другая комната больше.' },
        { num: 50, word: 'need',           tr: '[niːd]',             ru: 'нуждаться, нужно',                    ex: 'I need some help.',                exRu: 'Мне нужна помощь.' },
        { num: 51, word: 'can',            tr: '[kæn]',              ru: 'мочь, уметь',                         ex: 'I can speak English.',             exRu: 'Я умею говорить по-английски.' },
        { num: 52, word: 'help',           tr: '[help]',             ru: 'помогать; помощь',                    ex: 'Can you help me?',                 exRu: 'Ты можешь мне помочь?' },
        { num: 53, word: 'give',           tr: '[ɡɪv]',              ru: 'давать',                              ex: 'Give me your number.',             exRu: 'Дай мне свой номер.' },
        { num: 54, word: 'get',            tr: '[ɡet]',              ru: 'получать; доставать; становиться',    ex: 'I get a message every day.',       exRu: 'Я получаю сообщение каждый день.' },
        { num: 55, word: 'back',           tr: '[bæk]',              ru: 'назад; обратно',                      ex: 'She comes back at eight.',         exRu: 'Она возвращается в восемь.' },
        { num: 56, word: 'thing',          tr: '[θɪŋ]',              ru: 'вещь, предмет; штука',                ex: 'I need some things from the shop.', exRu: 'Мне нужно несколько вещей из магазина.' },
        { num: 57, word: 'well',           tr: '[wel]',              ru: 'хорошо; ну... (вводное слово)',        ex: 'She speaks English well.',         exRu: 'Она хорошо говорит по-английски.' },
      ],
      note: {
        title: 'Заметка о say / tell и о глаголе can',
        lines: [
          'say — просто произносить слова: He says «goodbye». (Он говорит «пока».)',
          'tell — рассказывать кому-то что-то: Tell me the story. (Расскажи мне историю.)',
          'can — после него всегда чистый глагол: I can speak. Can you help? I can\'t do it.',
        ],
      },
    },

    // ─────────────────────────────────────────────
    // БЛОК 2 — ЖИВЫЕ ПРЕДЛОЖЕНИЯ
    // ─────────────────────────────────────────────
    {
      id: 'sentences',
      type: 'sentences',
      title: 'Блок 2 — Живые предложения',
      intro: 'Читай каждое предложение вслух. После прочтения — посмотри на перевод.',
      items: [
        { num: 1,  en: 'I think this is a good idea.',                    ru: 'Я думаю, это хорошая идея.',                          note: 'idea — [aɪˈdɪə] — идея' },
        { num: 2,  en: 'Can you help me, please?',                        ru: 'Ты можешь помочь мне, пожалуйста?',                    note: null },
        { num: 3,  en: 'She tells me about her family every time we meet.', ru: 'Она рассказывает мне о своей семье каждый раз, когда мы встречаемся.', note: 'every time — каждый раз; about — о, про' },
        { num: 4,  en: "My family is not big — just me, my wife, and our child.", ru: 'Моя семья небольшая — только я, жена и наш ребёнок.', note: 'wife — жена; our — наш' },
        { num: 5,  en: 'I need a new phone. Mine is very old.',            ru: 'Мне нужен новый телефон. Мой очень старый.',            note: 'mine — мой (без существительного)' },
        { num: 6,  en: 'He is young, but he works very well.',            ru: 'Он молодой, но работает очень хорошо.',                 note: null },
        { num: 7,  en: 'People in this city are friendly.',               ru: 'Люди в этом городе дружелюбные.',                       note: 'friendly — [ˈfrendli] — дружелюбный' },
        { num: 8,  en: "I can't find the other room.",                    ru: 'Я не могу найти другую комнату.',                       note: 'find — найти' },
        { num: 9,  en: 'She gives me good advice.',                       ru: 'Она даёт мне хороший совет.',                           note: 'advice — [ədˈvaɪs] — совет' },
        { num: 10, en: 'I ask my friend a question and he thinks for a moment.', ru: 'Я задаю другу вопрос, и он думает секунду.',   note: 'question — вопрос; moment — момент' },
        { num: 11, en: 'She gets back home at nine every evening.',       ru: 'Она возвращается домой в девять каждый вечер.',         note: null },
        { num: 12, en: 'I say «good morning» to my neighbours.',         ru: 'Я говорю «доброе утро» своим соседям.',                 note: 'neighbours — [ˈneɪbəz] — соседи' },
        { num: 13, en: 'Do you need anything?',                           ru: 'Тебе что-нибудь нужно?',                               note: 'anything — что-нибудь' },
        { num: 14, en: 'She knows many people in this city. She is very social.', ru: 'Она знает много людей в этом городе. Она очень общительная.', note: 'social — общительный' },
        { num: 15, en: 'I can tell you one important thing.',             ru: 'Я могу сказать тебе одну важную вещь.',                 note: null },
      ],
      note: {
        title: 'Обрати внимание',
        lines: [
          'I think (that) + утверждение → I think it is a good idea.',
          'can стоит прямо перед глаголом: I can help. She can speak. Can you come?',
          'I need — необходимость: I need sleep. I want — желание: I want ice cream.',
        ],
      },
    },

    // ─────────────────────────────────────────────
    // БЛОК 3 — МИНИ-ТЕКСТ
    // ─────────────────────────────────────────────
    {
      id: 'text',
      type: 'mini-text',
      title: 'Блок 3 — Мини-текст',
      textTitle: '«Мой лучший друг»',
      original: [
        'I want to tell you about my best friend. His name is Sergey. He is 30 years old. We are the same age.',
        'Sergey is a kind and funny person. He can make people laugh. When I feel bad, I call him. He always says the right thing. He can help me think better.',
        'He has a family — a wife and two children. His children are young — three and five years old. He says that family is the most important thing in his life.',
        "Sergey lives in the other part of the city. So we don't see each other every day. But we call and message. I always get a message from him in the morning — he says «good morning» to all his friends.",
        'I need good people in my life. And Sergey is one of them. I think everyone needs a friend like him.',
      ],
      translation: [
        'Я хочу рассказать тебе о моём лучшем друге. Его зовут Сергей. Ему 30 лет. Мы одного возраста.',
        'Сергей добрый и весёлый человек. Он умеет рассмешить людей. Когда мне плохо, я ему звоню. Он всегда говорит нужные слова. Он помогает мне думать лучше.',
        'У него есть семья — жена и двое детей. Его дети маленькие — три и пять лет. Он говорит, что семья — самое важное в его жизни.',
        'Сергей живёт в другом районе города. Поэтому мы не видимся каждый день. Но мы созваниваемся и переписываемся. Каждое утро я получаю от него сообщение — он пишет «доброе утро» всем своим друзьям.',
        'Мне нужны хорошие люди в жизни. И Сергей — один из них. Я думаю, каждому нужен такой друг, как он.',
      ],
      vocab: [
        { word: 'best',     tr: '[best]',    ru: 'лучший' },
        { word: 'same',     tr: '[seɪm]',   ru: 'одинаковый, тот же' },
        { word: 'age',      tr: '[eɪdʒ]',   ru: 'возраст' },
        { word: 'kind',     tr: '[kaɪnd]',  ru: 'добрый' },
        { word: 'funny',    tr: '[ˈfʌni]',  ru: 'смешной, весёлый' },
        { word: 'call',     tr: '[kɔːl]',   ru: 'звонить' },
        { word: 'always',   tr: '[ˈɔːlweɪz]', ru: 'всегда' },
        { word: 'right',    tr: '[raɪt]',   ru: 'правильный, нужный' },
        { word: 'better',   tr: '[ˈbetə]',  ru: 'лучше' },
        { word: 'part',     tr: '[pɑːt]',   ru: 'часть, район' },
        { word: 'message',  tr: '[ˈmesɪdʒ]', ru: 'сообщение' },
        { word: 'everyone', tr: '[ˈevriwʌn]', ru: 'каждый, все' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Как выражать мнение и как работает can.',
      items: [
        {
          sentence: 'I think it is a good idea.',
          schema: 'I think (that) + утверждение',
          explanation: [
            'I think ... — я думаю, что...',
            'Слово that после think можно опускать — смысл не изменится.',
          ],
          pattern: 'I think + предложение',
          examples: [
            'I think she is right. — Я думаю, она права.',
            'I think we need help. — Я думаю, нам нужна помощь.',
            'I think he can do it. — Я думаю, он может это сделать.',
          ],
        },
        {
          sentence: 'I can help.',
          schema: 'КТО  |  can  |  ГЛАГОЛ (чистый)',
          explanation: [
            'can — особый глагол. После него всегда чистый глагол.',
            'Отрицание: I cannot / can\'t.',
            'Вопрос: Can you help me?',
          ],
          pattern: 'can + глагол',
          examples: [
            "I can't help. — Я не могу помочь.",
            'Can she speak? — Она умеет говорить?',
            'They can come. — Они могут прийти.',
          ],
        },
        {
          sentence: 'I need sleep.',
          schema: 'I need (необходимость) vs I want (желание)',
          explanation: [
            'I need — мне нужно (без этого нельзя): I need sleep.',
            'I want — я хочу (просто хочется): I want ice cream.',
            'Оба + to перед следующим глаголом: I need to sleep. I want to eat.',
          ],
          pattern: 'need/want + to + глагол',
          examples: [
            'I need to sleep. — Мне нужно поспать.',
            'I want to eat. — Я хочу поесть.',
            'She needs help. — Ей нужна помощь.',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 5 — МЫСЛИМ НА АНГЛИЙСКОМ
    // ─────────────────────────────────────────────
    {
      id: 'thinking',
      type: 'thinking',
      title: 'Блок 5 — Мыслим на английском',
      sections: [
        {
          subtitle: '5.1. Продолжи фразу',
          hint: 'Попробуй продолжить каждую фразу на английском. Нет правильного ответа — важно попробовать.',
          type: 'continue',
          items: [
            'I think...',
            'I need...',
            'Can you...?',
            'My friend can...',
            'I want to tell you about...',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'How old is Sergey?',                          hint: 'Сколько лет Сергею?' },
            { q: 'Does Sergey have children?',                  hint: 'У Сергея есть дети?' },
            { q: 'What does Sergey say is the most important thing?', hint: 'Что Сергей считает самым важным?' },
            { q: 'Do they see each other every day?',           hint: 'Они видятся каждый день?' },
            { q: 'What does Sergey send every morning?',        hint: 'Что Сергей отправляет каждое утро?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Я думаю, это хорошая идея.',   en: 'I think it is a good idea.' },
            { ru: 'Ты можешь мне помочь?',        en: 'Can you help me?' },
            { ru: 'Мне нужен новый телефон.',     en: 'I need a new phone.' },
            { ru: 'У неё двое детей.',            en: 'She has two children.' },
            { ru: 'Он всегда говорит нужные слова.', en: 'He always says the right thing.' },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 6 — МИНИ-ПОВТОРЕНИЕ
    // ─────────────────────────────────────────────
    {
      id: 'review',
      type: 'review',
      title: 'Блок 6 — Мини-повторение',
      sections: [
        {
          subtitle: '6.1. Вставь пропущенное слово',
          hint: 'Выбери правильное слово из скобок.',
          type: 'fill',
          items: [
            { sentence: 'I ___ this is a good idea.',        options: 'think / need / say',      answer: 'think' },
            { sentence: 'Can you ___ me?',                   options: 'help / tell / give',      answer: 'help' },
            { sentence: 'She has two ___.',                  options: 'family / children / people', answer: 'children' },
            { sentence: 'He is 70 years ___.',               options: 'young / old / new',       answer: 'old' },
            { sentence: 'I ___ a new phone.',                options: 'can / need / think',      answer: 'need' },
            { sentence: 'Tell ___ your name.',               options: 'me / I / my',             answer: 'me' },
            { sentence: 'She speaks English very ___.',      options: 'good / well / nice',      answer: 'well' },
            { sentence: 'I always ___ back home at nine.',   options: 'get / give / ask',        answer: 'get' },
            { sentence: 'He gives me good ___.',             options: 'thing / advice / back',   answer: 'advice' },
            { sentence: '___ you speak French?',             options: 'Do / Can / Are',          answer: 'Can' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: "She is not old. She is 25.",              answer: 'She is young.' },
            { task: 'I need to speak with you.',               answer: 'I want to tell you something.' },
            { task: 'He is my close friend.',                  answer: 'He is my best friend.' },
            { task: 'I got a different phone.',                answer: 'I have a new phone now.' },
            { task: 'Is it possible for you to come tomorrow?', answer: 'Can you come tomorrow?' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1, 2 и 3. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'My Neighbour',
          original: [
            'My neighbour\'s name is Viktor. He is an old man — maybe 75 years old. But he is very active and happy.',
            'Every morning I see him on the street. He always says «good morning» and smiles. He can talk to anyone. People like him.',
            'Viktor lives alone. His family lives in another city. But he says he is fine. He has good neighbours and good friends.',
            'Sometimes I help him get things from the shop. He always says «thank you» and gives me tea. We sit and talk. He tells me about his life — it is interesting.',
            'I think old people have a lot to say. We just need to ask and listen.',
          ],
          translation: [
            'Моего соседа зовут Виктор. Он пожилой человек — может быть, 75 лет. Но он очень активный и счастливый.',
            'Каждое утро я вижу его на улице. Он всегда говорит «доброе утро» и улыбается. Он умеет разговаривать с любым человеком. Люди его любят.',
            'Виктор живёт один. Его семья живёт в другом городе. Но он говорит, что у него всё хорошо.',
            'Иногда я помогаю ему взять продукты из магазина. Он всегда говорит «спасибо» и угощает меня чаем. Мы садимся и разговариваем.',
            'Я думаю, у пожилых людей есть что рассказать. Нам просто нужно спросить и послушать.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 4,
    title: 'Модуль 4 — Время, действия и движение',
    preview: [
      'make (делать/создавать), take (брать/занимать), put (класть), leave (уходить)',
      'before / after (до / после), always / never / sometimes (всегда / никогда / иногда)',
      'again (снова), last (прошлый), first (первый)',
      'soon (скоро), already (уже), still (всё ещё)',
    ],
    tip: 'Напиши 3–5 предложений о ком-то, кого ты знаешь — друге, соседе, коллеге. Используй слова: think, tell, can, need, old/young, family.',
  },
}
