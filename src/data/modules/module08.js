export const module08 = {
  id: 8,
  levelId: 'level-1',
  title: 'Дни, месяцы, время',
  words: '137–156',
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
        { num: 137, word: 'Monday',    tr: '[ˈmʌndeɪ]',    ru: 'понедельник',              ex: 'I start work on Monday.',               exRu: 'Я начинаю работать в понедельник.' },
        { num: 138, word: 'Tuesday',   tr: '[ˈtjuːzdeɪ]',  ru: 'вторник',                  ex: 'We have a meeting on Tuesday.',         exRu: 'У нас встреча во вторник.' },
        { num: 139, word: 'Wednesday', tr: '[ˈwenzdeɪ]',   ru: 'среда',                    ex: 'She comes home late on Wednesday.',     exRu: 'В среду она возвращается домой поздно.' },
        { num: 140, word: 'Thursday',  tr: '[ˈθɜːzdeɪ]',   ru: 'четверг',                  ex: 'I go to the gym on Thursday.',          exRu: 'Я хожу в зал по четвергам.' },
        { num: 141, word: 'Friday',    tr: '[ˈfraɪdeɪ]',   ru: 'пятница',                  ex: 'Friday is my favourite day.',           exRu: 'Пятница — мой любимый день.' },
        { num: 142, word: 'Saturday',  tr: '[ˈsætədeɪ]',   ru: 'суббота',                  ex: 'We rest on Saturday.',                  exRu: 'В субботу мы отдыхаем.' },
        { num: 143, word: 'Sunday',    tr: '[ˈsʌndeɪ]',    ru: 'воскресенье',              ex: 'Sunday is a family day.',               exRu: 'Воскресенье — семейный день.' },
        { num: 144, word: 'week',      tr: '[wiːk]',       ru: 'неделя',                   ex: 'I work five days a week.',              exRu: 'Я работаю пять дней в неделю.' },
        { num: 145, word: 'month',     tr: '[mʌnθ]',       ru: 'месяц',                    ex: 'She visits us every month.',            exRu: 'Она навещает нас каждый месяц.' },
        { num: 146, word: 'year',      tr: '[jɪə]',        ru: 'год',                      ex: 'Next year I want to travel.',           exRu: 'В следующем году я хочу путешествовать.' },
        { num: 147, word: 'hour',      tr: '[ˈaʊə]',       ru: 'час',                      ex: 'The film is two hours long.',           exRu: 'Фильм длится два часа.' },
        { num: 148, word: 'minute',    tr: '[ˈmɪnɪt]',     ru: 'минута',                   ex: 'Wait five minutes, please.',            exRu: 'Подожди пять минут, пожалуйста.' },
        { num: 149, word: 'yesterday', tr: '[ˈjestədeɪ]',  ru: 'вчера',                    ex: 'I saw him yesterday.',                  exRu: 'Я видел его вчера.' },
        { num: 150, word: 'today',     tr: '[təˈdeɪ]',     ru: 'сегодня',                  ex: 'Today is a good day.',                  exRu: 'Сегодня хороший день.' },
        { num: 151, word: 'tomorrow',  tr: '[təˈmɒrəʊ]',   ru: 'завтра',                   ex: 'Call me tomorrow.',                     exRu: 'Позвони мне завтра.' },
        { num: 152, word: 'date',      tr: '[deɪt]',       ru: 'дата; число',              ex: 'What is the date today?',               exRu: 'Какое сегодня число?' },
        { num: 153, word: 'calendar',  tr: '[ˈkæləndə]',   ru: 'календарь',                ex: 'I check my calendar every morning.',    exRu: 'Каждое утро я проверяю календарь.' },
        { num: 154, word: 'early',     tr: '[ˈɜːli]',      ru: 'рано; ранний',             ex: 'She wakes up early every day.',         exRu: 'Каждый день она просыпается рано.' },
        { num: 155, word: 'late',      tr: '[leɪt]',       ru: 'поздно; поздний',          ex: 'I came home late last night.',          exRu: 'Прошлой ночью я пришёл домой поздно.' },
        { num: 156, word: 'next',      tr: '[nekst]',      ru: 'следующий; рядом',         ex: 'See you next week!',                    exRu: 'Увидимся на следующей неделе!' },
      ],
      note: {
        title: 'Заметка о произношении и предлогах',
        lines: [
          'Все дни недели — с заглавной буквы: Monday, Tuesday...',
          'Wednesday произносится [ˈwenzdeɪ] — средняя d не читается!',
          'hour — буква h не читается: [ˈaʊə]. Поэтому: an hour (не a hour).',
          'on + день недели: on Monday, on Friday.',
          'in + период: in the morning, in January, in 2024.',
          'at + точное время: at nine, at night.',
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
        { num: 1,  en: 'Monday is the hardest day of the week for most people.',   ru: 'Понедельник — самый тяжёлый день недели для большинства людей.', note: 'hardest — самый тяжёлый' },
        { num: 2,  en: 'I don\'t work on Saturday and Sunday — these are my days off.', ru: 'Я не работаю в субботу и воскресенье — это мои выходные.', note: 'days off — выходные дни' },
        { num: 3,  en: 'She has a doctor\'s appointment next Wednesday.',           ru: 'У неё приём у врача в следующую среду.',                      note: 'appointment — [əˈpɔɪntmənt] — запись' },
        { num: 4,  en: 'I called him yesterday, but he didn\'t answer.',            ru: 'Я звонил ему вчера, но он не ответил.',                       note: null },
        { num: 5,  en: 'Today is a busy day — I have three meetings.',             ru: 'Сегодня загруженный день — у меня три встречи.',              note: null },
        { num: 6,  en: 'See you tomorrow morning at nine!',                        ru: 'Увидимся завтра утром в девять!',                             note: null },
        { num: 7,  en: 'The meeting starts in twenty minutes. Hurry up!',          ru: 'Встреча начинается через двадцать минут. Поторопись!',        note: 'hurry up — поторопись' },
        { num: 8,  en: 'He worked there for ten years and then moved to another city.', ru: 'Он проработал там десять лет, а потом переехал в другой город.', note: null },
        { num: 9,  en: 'I check my calendar every morning before I start work.',   ru: 'Каждое утро перед началом работы я проверяю календарь.',      note: null },
        { num: 10, en: 'What date is your birthday? — The fifteenth of March.',    ru: 'Какого числа твой день рождения? — Пятнадцатого марта.',      note: 'the fifteenth of March — пятнадцатое марта' },
        { num: 11, en: 'The train was an hour late. We had to wait.',              ru: 'Поезд опоздал на час. Нам пришлось ждать.',                   note: 'had to wait — пришлось ждать' },
        { num: 12, en: 'She always comes early — never late.',                     ru: 'Она всегда приходит рано — никогда не опаздывает.',           note: null },
        { num: 13, en: 'I am tired this week. Next week will be easier, I hope.',  ru: 'Эту неделю я устал. Надеюсь, следующая будет спокойнее.',     note: 'easier — [ˈiːziə] — легче' },
        { num: 14, en: 'He left two months ago and hasn\'t called since.',         ru: 'Он уехал два месяца назад и с тех пор не звонил.',            note: 'hasn\'t called since — не звонил с тех пор' },
        { num: 15, en: 'Every minute counts when you are in a hurry.',             ru: 'Каждая минута на счету, когда торопишься.',                   note: 'in a hurry — в спешке' },
      ],
      note: {
        title: 'Обрати внимание — this/next/last без предлога',
        lines: [
          'this + period: This week is very busy.',
          'next + period: Next year I want to travel.',
          'last + period: Last month was quiet.',
          'Предлог in/on перед this/next/last НЕ нужен: I will call next Monday. ✓',
          'ago — сколько прошло: two days ago, a week ago.',
          'in — через сколько: in ten minutes, in an hour.',
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
      textTitle: '«Моя неделя»',
      original: [
        'My week starts on Monday. I wake up early — at seven in the morning. I work from Monday to Friday. Tuesday and Wednesday are my busiest days: I have meetings and a lot of things to do.',
        'Thursday is a little easier. I finish work at five and go home early. On Friday evening I feel happy — the week is almost over.',
        'Saturday and Sunday are my days. On Saturday I sleep late, cook something good and read. On Sunday I meet my family. We spend two or three hours together. It is always a good time.',
        'Next week will be busy too, but I am ready. I check my calendar every morning. I know what date is coming and what I need to do. I plan my time well, and this helps me a lot.',
        'Every month I try to do something new — go to a new place, meet a new person, or learn something interesting. Life is short. Every minute is important.',
      ],
      translation: [
        'Моя неделя начинается в понедельник. Я встаю рано — в семь утра. Я работаю с понедельника по пятницу. Вторник и среда — самые загруженные дни: у меня встречи и много дел.',
        'Четверг немного легче. Я заканчиваю работу в пять и иду домой пораньше. В пятницу вечером я чувствую радость — неделя почти закончена.',
        'Суббота и воскресенье — мои дни. В субботу я сплю подольше, готовлю что-нибудь вкусное и читаю. В воскресенье я встречаюсь с семьёй. Мы проводим два-три часа вместе. Это всегда хорошее время.',
        'На следующей неделе тоже будет много дел, но я готов. Каждое утро я проверяю календарь. Я знаю, какая дата наступает и что мне нужно сделать. Я хорошо планирую своё время, и это мне очень помогает.',
        'Каждый месяц я стараюсь делать что-то новое — ехать в новое место, знакомиться с новым человеком или учить что-то интересное. Жизнь коротка. Каждая минута важна.',
      ],
      vocab: [
        { word: 'busiest',  tr: '[ˈbɪziɪst]',    ru: 'самый загруженный' },
        { word: 'almost',   tr: '[ˈɔːlməʊst]',   ru: 'почти' },
        { word: 'over',     tr: '[ˈəʊvə]',        ru: 'закончен (здесь)' },
        { word: 'coming',   tr: '[ˈkʌmɪŋ]',       ru: 'наступающий, предстоящий' },
        { word: 'spend',    tr: '[spend]',         ru: 'проводить (время)' },
        { word: 'plan',     tr: '[plæn]',          ru: 'планировать' },
        { word: 'important',tr: '[ɪmˈpɔːtnt]',    ru: 'важный' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Предлоги с временными словами: on, in, at. This/next/last. Ago и in.',
      items: [
        {
          sentence: "on Monday / in the morning / at nine / in January",
          schema: 'on (конкретный день) / in (период) / at (точное время)',
          explanation: [
            'on — с конкретными днями: on Monday, on Friday evening, on the weekend.',
            'in — с более длинными периодами: in the morning, in January, in 2024, in the evening.',
            'at — с точным временем и фиксированными моментами: at nine, at night, at noon.',
          ],
          pattern: 'on / in / at + time expression',
          examples: [
            'I start work on Monday. — Я начинаю работать в понедельник.',
            'She wakes up early in the morning. — Она рано встаёт по утрам.',
            'The meeting is at ten. — Встреча в десять.',
          ],
        },
        {
          sentence: "This week is busy. Next week will be easier. Last month was quiet.",
          schema: 'this / next / last + time word (без предлога)',
          explanation: [
            'this — текущий: this week, this month, this year.',
            'next — следующий: next week, next Monday, next year.',
            'last — прошлый: last week, last Tuesday, last month.',
            'Предлог НЕ нужен: I will call next Monday. ✓ (не on next Monday)',
          ],
          pattern: 'this/next/last + week/month/year',
          examples: [
            'This week is very busy. — Эта неделя очень загружена.',
            'I will call next Monday. — Позвоню в следующий понедельник.',
            'Last year I went to Spain. — В прошлом году я ездил в Испанию.',
          ],
        },
        {
          sentence: "two days ago / in ten minutes",
          schema: 'ago (назад, прошлое) / in (через, будущее)',
          explanation: [
            'ago — сколько времени прошло (смотрим назад): two days ago, a week ago, three years ago.',
            'in — через сколько (смотрим вперёд): in ten minutes, in an hour, in two weeks.',
          ],
          pattern: '[time] ago / in [time]',
          examples: [
            'He left two months ago. — Он уехал два месяца назад.',
            'Call me in an hour. — Позвони мне через час.',
            'I saw her a week ago. — Я видел её неделю назад.',
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
            'On Monday I usually…',
            'Yesterday I…',
            'Next week I want to…',
            'Every month I…',
            'I prefer to wake up early because…',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'What day does the person\'s week start on?',   hint: 'С какого дня начинается его неделя?' },
            { q: 'Which days are the busiest?',                  hint: 'Какие дни самые загруженные?' },
            { q: 'What does he do on Saturday?',                 hint: 'Что он делает в субботу?' },
            { q: 'What does he check every morning?',            hint: 'Что он проверяет каждое утро?' },
            { q: 'What does he try to do every month?',          hint: 'Что он старается делать каждый месяц?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Сегодня понедельник, и у меня много дел.',  en: 'Today is Monday and I have a lot to do.' },
            { ru: 'Она пришла вчера вечером.',                 en: 'She came yesterday evening.' },
            { ru: 'Позвони мне через час.',                    en: 'Call me in an hour.' },
            { ru: 'Я видел его три дня назад.',                en: 'I saw him three days ago.' },
            { ru: 'На следующей неделе будет легче.',          en: 'Next week will be easier.' },
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
            { sentence: 'I work ___ Monday to Friday.',             options: 'from / on / in',      answer: 'from' },
            { sentence: 'She came home very ___. It was midnight.', options: 'late / early / next',  answer: 'late' },
            { sentence: 'We met ___ at the park.',                  options: 'today / yesterday / tomorrow', answer: 'yesterday' },
            { sentence: 'The meeting is in one ___. Get ready.',    options: 'minute / hour / week', answer: 'hour' },
            { sentence: 'See you ___ Monday!',                      options: 'last / this / next',   answer: 'next' },
            { sentence: 'I try to wake up ___ — before seven.',     options: 'early / late / soon',  answer: 'early' },
            { sentence: 'This ___ is very busy. I need a rest.',    options: 'day / week / month',   answer: 'week' },
            { sentence: 'He left three years ___.',                 options: 'ago / since / before', answer: 'ago' },
            { sentence: 'What ___ is it today?',                    options: 'time / date / year',   answer: 'date' },
            { sentence: 'I check my ___ every morning.',            options: 'phone / calendar / clock', answer: 'calendar' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: 'The meeting is 30 minutes from now.',                      answer: 'The meeting is in half an hour.' },
            { task: 'I saw her seven days ago.',                                answer: 'I saw her a week ago.' },
            { task: 'He never comes on time — always after the start.',         answer: 'He is always late.' },
            { task: 'She arrives before everyone else.',                        answer: 'She always comes early.' },
            { task: 'Today is not Monday — it is the day before Tuesday.',     answer: 'Today is Monday.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–8. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'A Good Week',
          original: [
            'It is Friday. The week is almost over, and I feel good.',
            'On Monday I had a lot of work. Tuesday was busy too — I had two meetings and many emails. But I planned my time well, and everything went fine.',
            'Wednesday was different. I woke up early, at six, and went for a walk before work. The morning was quiet and clean. I felt calm and ready.',
            'On Thursday I finished a big project. My manager said: "Good job." I felt happy and a little tired.',
            'Now it is Friday evening. I have nothing planned for tomorrow — just a long breakfast, a walk and maybe a book. Sunday I will meet a friend. We have not seen each other for three weeks.',
            'Next week will be busy again. But now — it is the weekend. And every minute of it is mine.',
          ],
          translation: [
            'Сейчас пятница. Неделя почти закончена, и я чувствую себя хорошо.',
            'В понедельник у меня было много работы. Вторник тоже был загруженным — два совещания и много писем. Но я хорошо спланировал время, и всё прошло нормально.',
            'Среда была другой. Я проснулся рано, в шесть, и перед работой пошёл на прогулку. Утро было тихим и свежим. Я чувствовал спокойствие и готовность.',
            'В четверг я закончил большой проект. Мой руководитель сказал: «Хорошая работа». Я был рад и немного устал.',
            'Сейчас пятничный вечер. На завтра у меня ничего не запланировано — только долгий завтрак, прогулка и, может быть, книга. В воскресенье я встречусь с другом. Мы не виделись три недели.',
            'На следующей неделе снова будет много дел. Но сейчас — выходные. И каждая их минута — моя.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 9,
    title: 'Модуль 9 — Дом: комнаты и мебель',
    preview: [
      'bedroom, bathroom, kitchen, living room (спальня, ванная, кухня, гостиная)',
      'door, window, wall, floor, ceiling (дверь, окно, стена, пол, потолок)',
      'table, chair, bed, sofa, shelf, lamp, mirror, carpet, curtain (стол, стул, кровать...)',
      'key, stairs (ключ, лестница)',
    ],
    tip: 'Попробуй описать свою неделю на английском — хотя бы 5 предложений. Используй on Monday / on Tuesday, this week, yesterday, tomorrow. Не думай о грамматике — просто скажи то, что думаешь.',
  },
}
