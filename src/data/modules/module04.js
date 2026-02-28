export const module04 = {
  id: 4,
  levelId: 'level-1',
  title: 'Время, действия и движение',
  words: '58–76',
  wordCount: 19,
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
        { num: 58, word: 'make',      tr: '[meɪk]',       ru: 'делать, создавать',                    ex: 'I make coffee every morning.',   exRu: 'Я делаю кофе каждое утро.' },
        { num: 59, word: 'take',      tr: '[teɪk]',       ru: 'брать; занимать (время)',              ex: 'It takes 20 minutes.',           exRu: 'Это занимает 20 минут.' },
        { num: 60, word: 'put',       tr: '[pʊt]',        ru: 'класть, ставить',                      ex: 'I put my keys on the table.',    exRu: 'Я кладу ключи на стол.' },
        { num: 61, word: 'leave',     tr: '[liːv]',       ru: 'уходить; оставлять',                   ex: 'I leave home at eight.',         exRu: 'Я ухожу из дома в восемь.' },
        { num: 62, word: 'before',    tr: '[bɪˈfɔː]',    ru: 'до, перед',                             ex: 'I eat before work.',             exRu: 'Я ем перед работой.' },
        { num: 63, word: 'after',     tr: '[ˈɑːftə]',    ru: 'после',                                 ex: 'We talk after dinner.',          exRu: 'Мы разговариваем после ужина.' },
        { num: 64, word: 'always',    tr: '[ˈɔːlweɪz]',  ru: 'всегда',                                ex: 'She always drinks tea.',         exRu: 'Она всегда пьёт чай.' },
        { num: 65, word: 'never',     tr: '[ˈnevə]',      ru: 'никогда',                               ex: 'I never go there.',              exRu: 'Я никогда туда не хожу.' },
        { num: 66, word: 'sometimes', tr: '[ˈsʌmtaɪmz]', ru: 'иногда',                                ex: 'Sometimes I work from home.',    exRu: 'Иногда я работаю из дома.' },
        { num: 67, word: 'often',     tr: '[ˈɒfn]',       ru: 'часто',                                 ex: 'He often comes late.',           exRu: 'Он часто приходит поздно.' },
        { num: 68, word: 'again',     tr: '[əˈɡen]',      ru: 'снова, опять',                          ex: 'Say it again, please.',          exRu: 'Скажи это снова, пожалуйста.' },
        { num: 69, word: 'first',     tr: '[fɜːst]',      ru: 'первый; сначала',                       ex: 'First I eat, then I go.',        exRu: 'Сначала я ем, потом иду.' },
        { num: 70, word: 'last',      tr: '[lɑːst]',      ru: 'прошлый; последний',                    ex: 'I saw him last week.',           exRu: 'Я видел его на прошлой неделе.' },
        { num: 71, word: 'soon',      tr: '[suːn]',       ru: 'скоро',                                 ex: 'She will come soon.',            exRu: 'Она скоро придёт.' },
        { num: 72, word: 'already',   tr: '[ɔːlˈredi]',  ru: 'уже',                                   ex: 'I already know this.',           exRu: 'Я уже знаю это.' },
        { num: 73, word: 'still',     tr: '[stɪl]',       ru: 'всё ещё, до сих пор',                  ex: 'He still works here.',           exRu: 'Он всё ещё работает здесь.' },
        { num: 74, word: 'just',      tr: '[dʒʌst]',      ru: 'только что; просто',                    ex: 'I just came home.',              exRu: 'Я только что пришёл домой.' },
        { num: 75, word: 'start',     tr: '[stɑːt]',      ru: 'начинать(ся)',                          ex: 'The film starts at seven.',      exRu: 'Фильм начинается в семь.' },
        { num: 76, word: 'stop',      tr: '[stɒp]',       ru: 'останавливать(ся), прекращать',         ex: 'Stop! I need to think.',         exRu: 'Стоп! Мне нужно подумать.' },
      ],
      note: {
        title: 'Заметка о наречиях частотности',
        lines: [
          'always / never / often / sometimes стоят ПЕРЕД основным глаголом:',
          'I always drink coffee. She never eats meat.',
          'Но ПОСЛЕ глагола be: I am always busy. She is never late.',
          'sometimes может стоять и в начале: Sometimes I work from home.',
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
        { num: 1,  en: 'I always make breakfast before I go to work.',   ru: 'Я всегда готовлю завтрак, прежде чем идти на работу.',  note: 'before I go — прежде чем я иду' },
        { num: 2,  en: 'She never leaves her phone at home.',            ru: 'Она никогда не оставляет телефон дома.',                 note: null },
        { num: 3,  en: 'How long does it take to get there?',            ru: 'Сколько времени занимает, чтобы добраться туда?',        note: 'how long — как долго' },
        { num: 4,  en: 'I put my bag on the chair and sit down.',        ru: 'Я кладу сумку на стул и сажусь.',                        note: 'sit down — садиться' },
        { num: 5,  en: 'First I check my messages, then I start work.',  ru: 'Сначала я проверяю сообщения, потом начинаю работать.',  note: 'check — проверять' },
        { num: 6,  en: 'We often talk after work.',                      ru: 'Мы часто разговариваем после работы.',                   note: null },
        { num: 7,  en: 'I already know what I want to do.',              ru: 'Я уже знаю, что хочу делать.',                           note: null },
        { num: 8,  en: 'Stop thinking about it. Just do it.',            ru: 'Перестань думать об этом. Просто сделай это.',            note: null },
        { num: 9,  en: 'She still lives in the same apartment.',         ru: 'Она всё ещё живёт в той же квартире.',                   note: null },
        { num: 10, en: 'I sometimes come home very late.',               ru: 'Иногда я прихожу домой очень поздно.',                   note: null },
        { num: 11, en: 'Last week I went to see my parents.',            ru: 'На прошлой неделе я ездил к родителям.',                 note: 'went — прошедшее время от go; parents — родители' },
        { num: 12, en: "He just called me. I'll call him back soon.",    ru: 'Он только что позвонил мне. Я скоро ему перезвоню.',     note: 'call back — перезвонить' },
        { num: 13, en: "Let's start again from the beginning.",          ru: 'Давай начнём снова с начала.',                           note: "let's — давай(те); beginning — начало" },
        { num: 14, en: 'Take your time. There is no rush.',              ru: 'Не торопись. Спешить некуда.',                           note: 'take your time — не торопись; rush — спешка' },
        { num: 15, en: 'I always feel better after a good sleep.',       ru: 'После хорошего сна я всегда чувствую себя лучше.',       note: 'feel better — чувствовать себя лучше' },
      ],
      note: {
        title: 'Обрати внимание — разница make и do',
        lines: [
          'make — создаёшь что-то: make coffee, make a plan, make a mistake',
          'do — выполняешь действие: do work, do homework, do sport',
          'make → coffee / dinner / a phone call / a decision / a mistake',
          'do → work / homework / exercise / the dishes',
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
      textTitle: '«Новое начало»',
      original: [
        'Last year I decided to change my life. I was always tired. I never had enough time. I often started things and never finished them. I put everything off until tomorrow — and tomorrow never came.',
        'One day I stopped and thought: what do I really want?',
        'I made a simple plan. First, I started going to bed earlier. Before that, I never slept enough. Then I stopped taking my phone to bed. I put it in the other room.',
        'After just one week, I already felt different. I woke up before my alarm. I made breakfast slowly. I left home without rushing.',
        'Now I still work the same job. I still live in the same place. But something has changed. I start each day on time. I never skip breakfast. I sometimes take a short walk before work.',
        "It doesn't take much to change. Just stop and start again — but do it better this time.",
      ],
      translation: [
        'В прошлом году я решил изменить свою жизнь. Я всегда был уставшим. У меня никогда не было достаточно времени. Я часто начинал дела и никогда не заканчивал их. Я откладывал всё на завтра — а завтра так и не наступало.',
        'Однажды я остановился и подумал: чего я на самом деле хочу?',
        'Я составил простой план. Сначала я начал ложиться спать раньше. До этого я никогда не высыпался. Потом я перестал брать телефон в кровать. Я стал оставлять его в другой комнате.',
        'Уже через неделю я почувствовал себя иначе. Я просыпался до будильника. Я не торопясь готовил завтрак. Я уходил из дома без спешки.',
        'Сейчас я всё ещё работаю на той же работе. Живу в том же месте. Но кое-что изменилось. Я начинаю каждый день вовремя. Никогда не пропускаю завтрак. Иногда перед работой прогуливаюсь немного.',
        'Для перемен не нужно много. Просто остановись и начни заново — но на этот раз лучше.',
      ],
      vocab: [
        { word: 'decided',   tr: '[dɪˈsaɪdɪd]', ru: 'решил' },
        { word: 'tired',     tr: '[ˈtaɪəd]',     ru: 'уставший' },
        { word: 'enough',    tr: '[ɪˈnʌf]',      ru: 'достаточно' },
        { word: 'finished',  tr: '[ˈfɪnɪʃt]',    ru: 'закончил' },
        { word: 'put off',   tr: '—',             ru: 'откладывать' },
        { word: 'really',    tr: '[ˈrɪəli]',      ru: 'на самом деле, действительно' },
        { word: 'earlier',   tr: '[ˈɜːliə]',      ru: 'раньше' },
        { word: 'alarm',     tr: '[əˈlɑːm]',      ru: 'будильник' },
        { word: 'slowly',    tr: '[ˈsləʊli]',     ru: 'медленно' },
        { word: 'rushing',   tr: '[ˈrʌʃɪŋ]',      ru: 'торопясь' },
        { word: 'skip',      tr: '[skɪp]',         ru: 'пропускать' },
        { word: 'this time', tr: '—',              ru: 'на этот раз' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Наречия частотности, конструкция it takes, и слова already / still / just.',
      items: [
        {
          sentence: 'I always drink coffee.',
          schema: 'КТО → always/never/often/sometimes → ГЛАГОЛ',
          explanation: [
            '1. Перед основным глаголом: I always drink coffee.',
            '2. После глагола be: I am always busy.',
            '3. sometimes может быть в начале: Sometimes I work from home.',
          ],
          pattern: 'always/never/often/sometimes + глагол',
          examples: [
            'I never eat meat. — Я никогда не ем мясо.',
            'He is often late. — Он часто опаздывает. (после be)',
            'She sometimes works late. — Она иногда работает допоздна.',
          ],
        },
        {
          sentence: 'It takes 20 minutes to get to work.',
          schema: 'It takes + ВРЕМЯ + to + ГЛАГОЛ',
          explanation: [
            'Эта конструкция отвечает на вопрос «сколько времени занимает?»',
            'How long does it take? — Сколько времени это занимает?',
          ],
          pattern: 'It takes + время + to + глагол',
          examples: [
            'It takes an hour to cook dinner. — На ужин уходит час.',
            'How long does it take? — Сколько это занимает?',
            'It takes 5 minutes. — Это занимает 5 минут.',
          ],
        },
        {
          sentence: 'I already know. She still works. I just came.',
          schema: 'already / still / just — перед основным глаголом',
          explanation: [
            'already — уже (произошло): I already know.',
            'still — всё ещё (продолжается): She still works here.',
            'just — только что: I just came home.',
          ],
          pattern: 'already / still / just + глагол',
          examples: [
            'I already ate. — Я уже поел.',
            'He still lives here. — Он всё ещё живёт здесь.',
            'I just called you. — Я только что тебе позвонил.',
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
          hint: 'Попробуй продолжить каждую фразу на английском.',
          type: 'continue',
          items: [
            'I always...',
            'I never...',
            'First I..., then I...',
            'It takes... to...',
            'I just...',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'What did the person decide to do last year?', hint: 'Что он решил сделать?' },
            { q: 'What was the first thing he changed?',        hint: 'Что он изменил первым?' },
            { q: "Where did he start putting his phone?",       hint: 'Куда он стал класть телефон?' },
            { q: 'How did he feel after one week?',             hint: 'Как он себя чувствовал через неделю?' },
            { q: 'Does he still live in the same place?',       hint: 'Он всё ещё живёт там же?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Я всегда готовлю кофе перед работой.',   en: 'I always make coffee before work.' },
            { ru: 'Она никогда не опаздывает.',              en: 'She is never late.' },
            { ru: 'Сначала я ем, потом иду на работу.',     en: 'First I eat, then I go to work.' },
            { ru: 'Это занимает 30 минут.',                  en: 'It takes 30 minutes.' },
            { ru: 'Я только что пришёл домой.',             en: 'I just came home.' },
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
            { sentence: 'I ___ make breakfast before work.',       options: 'always / never / already',  answer: 'always' },
            { sentence: 'She ___ leaves her phone at home.',       options: 'always / never / soon',     answer: 'never' },
            { sentence: '___ I drink tea, then I go.',             options: 'First / Last / After',      answer: 'First' },
            { sentence: 'How long does it ___?',                   options: 'make / take / put',         answer: 'take' },
            { sentence: 'I ___ know this word.',                   options: 'already / still / just',    answer: 'already' },
            { sentence: 'He ___ works in the same office.',        options: 'often / still / last',      answer: 'still' },
            { sentence: 'The film ___ at eight.',                  options: 'stops / starts / leaves',   answer: 'starts' },
            { sentence: 'I ___ came home five minutes ago.',       options: 'soon / just / again',       answer: 'just' },
            { sentence: 'We talk ___ dinner every day.',           options: 'before / after / soon',     answer: 'after' },
            { sentence: '___ again from the beginning.',           options: 'Make / Start / Put',        answer: 'Start' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: "She hasn't stopped working here.",           answer: 'She still works here.' },
            { task: 'I came home five minutes ago.',              answer: 'I just came home.' },
            { task: 'Before I start, I check everything.',        answer: 'First I check everything, then I start.' },
            { task: 'He is very punctual. He is never late.',     answer: 'He always comes on time.' },
            { task: 'How much time does this need?',              answer: 'How long does it take?' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–4. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'Small Changes',
          original: [
            "My friend Anna is not the same person she was last year. She often said she was tired and never had time for anything. She always put things off.",
            "Then one day she decided to start small. First, she stopped using her phone in the morning. She started making breakfast slowly and eating before work. It takes her just 15 minutes — but it changed everything.",
            "Now she always leaves home on time. She often takes a walk after work. She calls her friends again — she stopped doing that before.",
            "I still see the same Anna — kind, funny, busy. But she looks better now. She says: «I just changed a few small things. And it already feels very different.»",
          ],
          translation: [
            "Моя подруга Анна — уже не тот человек, которым она была в прошлом году. Она часто говорила, что устала и никогда не успевает ничего. Она всегда всё откладывала.",
            "А потом однажды решила начать с малого. Сначала перестала пользоваться телефоном по утрам. Начала не торопясь готовить завтрак и есть перед работой. У неё уходит всего 15 минут — но это изменило всё.",
            "Теперь она всегда уходит из дома вовремя. Часто после работы ходит на прогулку. Снова звонит друзьям — раньше она перестала это делать.",
            "Я всё ещё вижу ту же Анну — добрую, весёлую, занятую. Но она выглядит лучше. Она говорит: «Я просто изменила несколько мелочей. И уже чувствуется совсем по-другому».",
          ],
        },
      ],
    },
  ],

  next: {
    id: 5,
    title: 'Модуль 5 — Еда и напитки',
    preview: [
      'buy (покупать), pay (платить), cost (стоить), price (цена)',
      'food (еда), water (вода), bread (хлеб), milk (молоко), meat (мясо)',
      'shop (магазин), hungry (голодный), thirsty (хочется пить)',
      'much/many (много), enough (достаточно), too (слишком)',
    ],
    tip: 'Опиши один день из своей прошлой недели. Используй always, never, sometimes, first, after, just. Дай себе 5 минут — и напиши хотя бы 5 предложений.',
  },
}
