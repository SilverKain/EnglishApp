export const module07 = {
  id: 7,
  levelId: 'level-1',
  title: 'Цвета и описания предметов',
  words: '117–136',
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
        { num: 117, word: 'white',  tr: '[waɪt]',      ru: 'белый',                          ex: 'She wears a white shirt.',              exRu: 'Она носит белую рубашку.' },
        { num: 118, word: 'black',  tr: '[blæk]',      ru: 'чёрный',                         ex: 'I have a black cat.',                   exRu: 'У меня чёрная кошка.' },
        { num: 119, word: 'red',    tr: '[red]',       ru: 'красный',                        ex: 'He drives a red car.',                  exRu: 'Он ездит на красной машине.' },
        { num: 120, word: 'blue',   tr: '[bluː]',      ru: 'синий, голубой',                 ex: 'The sky is blue today.',                exRu: 'Сегодня небо синее.' },
        { num: 121, word: 'green',  tr: '[ɡriːn]',     ru: 'зелёный',                        ex: 'There is a big green park near my house.', exRu: 'Рядом с моим домом большой зелёный парк.' },
        { num: 122, word: 'big',    tr: '[bɪɡ]',       ru: 'большой',                        ex: 'They live in a big house.',             exRu: 'Они живут в большом доме.' },
        { num: 123, word: 'small',  tr: '[smɔːl]',     ru: 'маленький',                      ex: 'I have a small room.',                  exRu: 'У меня маленькая комната.' },
        { num: 124, word: 'long',   tr: '[lɒŋ]',       ru: 'длинный; долгий',                ex: 'It was a long day.',                    exRu: 'Это был долгий день.' },
        { num: 125, word: 'short',  tr: '[ʃɔːt]',      ru: 'короткий; невысокий',            ex: 'She has short hair.',                   exRu: 'У неё короткие волосы.' },
        { num: 126, word: 'old',    tr: '[əʊld]',      ru: 'старый',                         ex: 'This is a very old building.',          exRu: 'Это очень старое здание.' },
        { num: 127, word: 'new',    tr: '[njuː]',      ru: 'новый',                          ex: 'I have a new phone.',                   exRu: 'У меня новый телефон.' },
        { num: 128, word: 'fast',   tr: '[fɑːst]',     ru: 'быстрый; быстро',                ex: 'He is a fast runner.',                  exRu: 'Он быстрый бегун.' },
        { num: 129, word: 'slow',   tr: '[sləʊ]',      ru: 'медленный; медленно',             ex: 'The internet is very slow today.',      exRu: 'Сегодня интернет очень медленный.' },
        { num: 130, word: 'clean',  tr: '[kliːn]',     ru: 'чистый',                         ex: 'Keep your room clean.',                 exRu: 'Держи свою комнату в чистоте.' },
        { num: 131, word: 'dirty',  tr: '[ˈdɜːti]',    ru: 'грязный',                        ex: 'My shoes are dirty after the walk.',    exRu: 'Мои ботинки грязные после прогулки.' },
        { num: 132, word: 'heavy',  tr: '[ˈhevi]',     ru: 'тяжёлый',                        ex: 'This bag is very heavy.',               exRu: 'Эта сумка очень тяжёлая.' },
        { num: 133, word: 'light',  tr: '[laɪt]',      ru: 'лёгкий; свет',                   ex: 'I need a light jacket.',                exRu: 'Мне нужна лёгкая куртка.' },
        { num: 134, word: 'look',   tr: '[lʊk]',       ru: 'выглядеть; смотреть',            ex: 'You look tired today.',                 exRu: 'Сегодня ты выглядишь усталым.' },
        { num: 135, word: 'feel',   tr: '[fiːl]',      ru: 'чувствовать(ся)',                ex: 'I feel great today.',                   exRu: 'Сегодня я чувствую себя отлично.' },
        { num: 136, word: 'seem',   tr: '[siːm]',      ru: 'казаться',                       ex: 'It seems like a good idea.',            exRu: 'Это кажется хорошей идеей.' },
      ],
      note: {
        title: 'Заметка о look, feel, seem — после них идёт прилагательное',
        lines: [
          'You look tired. ✓ (не tiredly) — я это вижу по твоему виду.',
          'She feels happy. ✓ — внутреннее состояние.',
          'It seems easy. ✓ — моё мнение.',
          'light — два значения: лёгкий (вес): a light bag; свет: Turn on the light.',
          'Сравнение: big → bigger, small → smaller, fast → faster, slow → slower.',
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
        { num: 1,  en: 'She always wears black. It\'s her favourite colour.',        ru: 'Она всегда носит чёрное. Это её любимый цвет.',               note: 'colour — [ˈkʌlə] — цвет' },
        { num: 2,  en: 'The new office is much bigger than the old one.',            ru: 'Новый офис намного больше старого.',                          note: 'much bigger — намного больше' },
        { num: 3,  en: 'I feel tired but happy after a long walk.',                  ru: 'После долгой прогулки я чувствую себя усталым, но счастливым.', note: null },
        { num: 4,  en: 'It seems like it\'s going to rain. Take an umbrella.',       ru: 'Похоже, будет дождь. Возьми зонт.',                          note: 'umbrella — [ʌmˈbrelə] — зонт' },
        { num: 5,  en: 'My old laptop is very slow. I need a new one.',              ru: 'Мой старый ноутбук очень медленный. Мне нужен новый.',        note: 'laptop — [ˈlæptɒp] — ноутбук' },
        { num: 6,  en: 'You look different today. Did you cut your hair?',           ru: 'Ты сегодня выглядишь иначе. Ты постригся?',                  note: 'cut — [kʌt] — стричь, резать' },
        { num: 7,  en: 'The bag is too heavy. Can you help me carry it?',            ru: 'Сумка слишком тяжёлая. Ты можешь помочь мне нести её?',      note: 'carry — [ˈkæri] — нести' },
        { num: 8,  en: 'She keeps her apartment very clean. Everything has its place.', ru: 'Она держит квартиру очень чистой. У всего есть своё место.', note: null },
        { num: 9,  en: 'The red jacket looks great on you.',                         ru: 'Красная куртка тебе очень идёт.',                            note: 'looks great on you — идёт тебе' },
        { num: 10, en: 'It\'s a short walk from here — just five minutes.',          ru: 'Отсюда идти недолго — всего пять минут.',                    note: null },
        { num: 11, en: 'I prefer light food in the summer — salads, fruit, vegetables.', ru: 'Летом я предпочитаю лёгкую еду — салаты, фрукты, овощи.', note: 'prefer — [prɪˈfɜː] — предпочитать' },
        { num: 12, en: 'The streets look dirty after the rain.',                     ru: 'После дождя улицы выглядят грязными.',                       note: null },
        { num: 13, en: 'He seems quiet today. Maybe something happened.',            ru: 'Сегодня он кажется тихим. Может быть, что-то случилось.',    note: 'happened — [ˈhæpənd] — случилось' },
        { num: 14, en: 'I feel better after a short sleep.',                         ru: 'После короткого сна я чувствую себя лучше.',                 note: null },
        { num: 15, en: 'This green tea is from Japan. It has a very light taste.',   ru: 'Этот зелёный чай из Японии. У него очень лёгкий вкус.',      note: 'taste — [teɪst] — вкус' },
      ],
      note: {
        title: 'Обрати внимание — сравнение прилагательных',
        lines: [
          'Короткие (1–2 слога) + -er: big → bigger, small → smaller, fast → faster',
          'Удвоение согласной: big → bigger, hot → hotter',
          'Длинные (3+ слога) + more: more expensive, more interesting',
          'Сравниваем с than: This bag is heavier than that one.',
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
      textTitle: '«Старый город»',
      original: [
        'I live in a new part of the city. The buildings are white and clean. The streets are wide and fast — cars go quickly, people walk quickly. Everything looks modern and efficient.',
        'But sometimes I go to the old part of the city. It is very different. The buildings there are old — some are hundreds of years old. The streets are narrow and slow. The colours are warm: dark red, yellow, brown.',
        'When I walk there, I feel different. Something about it seems calm and quiet. I don\'t know why, but I always feel better in the old streets than in the new ones.',
        'There is a small green park in the middle of the old city. It looks like it hasn\'t changed in a long time. Old people sit on the benches. Children play on the green grass. A black cat sleeps in the sun.',
        'I stayed there for a short while last Sunday. I sat, looked around, and felt happy. I didn\'t count the time. I just looked and felt.',
      ],
      translation: [
        'Я живу в новой части города. Здания белые и чистые. Улицы широкие и быстрые — машины едут быстро, люди ходят быстро. Всё выглядит современным и эффективным.',
        'Но иногда я хожу в старую часть города. Там всё совсем по-другому. Здания старые — некоторым сотни лет. Улицы узкие и тихие. Цвета тёплые: тёмно-красный, жёлтый, коричневый.',
        'Когда я хожу там, я чувствую себя иначе. В этом месте есть что-то спокойное и тихое. Я не знаю почему, но в старых улицах мне всегда лучше, чем в новых.',
        'В центре старого города есть небольшой зелёный парк. Похоже, он не менялся уже долгое время. Пожилые люди сидят на скамейках. Дети играют на зелёной траве. Чёрная кошка спит на солнце.',
        'В прошлое воскресенье я остался там ненадолго. Я сидел, смотрел вокруг и чувствовал себя счастливым. Я не считал время. Просто смотрел и чувствовал.',
      ],
      vocab: [
        { word: 'buildings',    tr: '[ˈbɪldɪŋz]',    ru: 'здания' },
        { word: 'wide',         tr: '[waɪd]',         ru: 'широкий' },
        { word: 'modern',       tr: '[ˈmɒdən]',       ru: 'современный' },
        { word: 'efficient',    tr: '[ɪˈfɪʃnt]',      ru: 'эффективный' },
        { word: 'narrow',       tr: '[ˈnærəʊ]',       ru: 'узкий' },
        { word: 'calm',         tr: '[kɑːm]',         ru: 'спокойный' },
        { word: 'benches',      tr: '[ˈbentʃɪz]',     ru: 'скамейки' },
        { word: 'grass',        tr: '[ɡrɑːs]',        ru: 'трава' },
        { word: 'stayed',       tr: '[steɪd]',        ru: 'остался' },
        { word: 'looked around',tr: '—',              ru: 'смотрел вокруг' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Прилагательные в двух позициях. Сравнительная степень. Look/feel/seem + прилагательное.',
      items: [
        {
          sentence: "a big house / The house is big.",
          schema: 'прилагательное ПЕРЕД существительным / ПОСЛЕ глагола-связки',
          explanation: [
            'Позиция 1 — перед существительным: a big house, a new car, a clean room.',
            'Позиция 2 — после глагола-связки (is/are/look/feel/seem): The house is big.',
            'Оба варианта правильные — просто разные конструкции.',
            'The car looks new. / The room feels clean.',
          ],
          pattern: 'adj + noun / noun + is + adj',
          examples: [
            'a dirty street — грязная улица.',
            'The street is dirty. — Улица грязная.',
            'a fast car / The car is fast.',
          ],
        },
        {
          sentence: "This bag is heavier than that one.",
          schema: 'короткие → -er than / длинные → more … than',
          explanation: [
            'Короткие прилагательные (1–2 слога): big → bigger, small → smaller, fast → faster.',
            'Если заканчивается на гласную + согласную — удваивай: big → bigger, hot → hotter.',
            'Длинные прилагательные (3+ слога): more expensive than, more interesting than.',
          ],
          pattern: '[adj]-er than / more [adj] than',
          examples: [
            'My room is smaller than yours. — Моя комната меньше твоей.',
            'This laptop is slower than mine. — Этот ноутбук медленнее моего.',
            'This route is more comfortable than that one.',
          ],
        },
        {
          sentence: "You look tired. She feels happy. It seems easy.",
          schema: 'look / feel / seem + прилагательное (не наречие!)',
          explanation: [
            'look — я это вижу по внешнему виду: You look tired.',
            'feel — внутреннее состояние: I feel great.',
            'seem — моё общее впечатление: It seems expensive.',
            'После этих глаголов всегда прилагательное: look good ✓ (не well в этом контексте).',
          ],
          pattern: 'look/feel/seem + adjective',
          examples: [
            'You look tired today. — Ты выглядишь усталым сегодня.',
            'I feel better now. — Сейчас мне лучше.',
            'It seems like a good idea. — Кажется, это хорошая идея.',
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
            'I feel...',
            'My room is...',
            'It seems like...',
            'I prefer... because it looks...',
            'The old part of my city...',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'Where does the person live?',                       hint: 'Где он живёт?' },
            { q: 'How does the old part of the city feel?',           hint: 'Каким ощущается старый район?' },
            { q: 'What does the park look like?',                     hint: 'Как выглядит парк?' },
            { q: 'What was the black cat doing?',                     hint: 'Что делала чёрная кошка?' },
            { q: 'How did the person feel in the old park?',          hint: 'Как он себя чувствовал в старом парке?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Ты выглядишь усталым сегодня.',         en: 'You look tired today.' },
            { ru: 'Этот ноутбук медленнее, чем мой.',      en: 'This laptop is slower than mine.' },
            { ru: 'Её комната чистая и маленькая.',        en: 'Her room is clean and small.' },
            { ru: 'Мне кажется, это хорошая идея.',        en: 'It seems like a good idea.' },
            { ru: 'После прогулки я чувствую себя лучше.', en: 'I feel better after a walk.' },
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
            { sentence: 'You ___ tired. Are you okay?',                options: 'seem / feel / look',   answer: 'look' },
            { sentence: 'My new laptop is much ___ than my old one.',  options: 'faster / more fast / fast', answer: 'faster' },
            { sentence: 'I prefer ___ food — salads and vegetables.',  options: 'heavy / light / dirty', answer: 'light' },
            { sentence: 'The room was very ___. I cleaned it right away.', options: 'clean / dirty / old', answer: 'dirty' },
            { sentence: 'She has ___ hair and blue eyes.',             options: 'short / slow / white', answer: 'short' },
            { sentence: 'This box is too ___. I can\'t lift it.',      options: 'fast / heavy / long', answer: 'heavy' },
            { sentence: 'The new café looks very ___. Let\'s go in.',  options: 'clean / dirty / slow', answer: 'clean' },
            { sentence: 'It ___ like it\'s going to rain.',            options: 'feels / seems / looks', answer: 'seems' },
            { sentence: 'My phone is old and ___. I need a new one.',  options: 'slow / big / long',    answer: 'slow' },
            { sentence: 'I ___ great today — I slept well.',           options: 'look / seem / feel',   answer: 'feel' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: 'My bag weighs a lot.',               answer: 'My bag is very heavy.' },
            { task: 'He is not tall.',                    answer: 'He is short.' },
            { task: 'The streets have not been cleaned.', answer: 'The streets are dirty.' },
            { task: 'I feel a lot of energy today.',      answer: 'I feel great today.' },
            { task: 'Her apartment is not big.',          answer: 'She has a small apartment.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–7. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'The New Neighbour',
          original: [
            'A new neighbour moved in last week. Her name is Irina. She is young — maybe 25 or 26. She seems quiet and friendly.',
            'Her apartment is on the same floor as mine. Every morning I hear her leave at seven — always on time, always fast.',
            'Yesterday I saw her in the hall. She was carrying a heavy bag — full of food from the shop, I think. I helped her. She smiled and said thank you.',
            'She has short dark hair and always wears black or dark blue. She looks like someone who knows exactly what she wants.',
            'I don\'t know much about her yet. But she feels like a good person. Quiet, clean, organised. I feel glad she moved in.',
          ],
          translation: [
            'На прошлой неделе въехала новая соседка. Её зовут Ирина. Она молодая — может быть, 25 или 26 лет. Она кажется тихой и дружелюбной.',
            'Её квартира на том же этаже, что и моя. Каждое утро я слышу, как она уходит в семь — всегда вовремя, всегда быстро.',
            'Вчера я увидел её в коридоре. Она несла тяжёлую сумку — полную продуктов из магазина, я думаю. Я помог ей. Она улыбнулась и сказала спасибо.',
            'У неё короткие тёмные волосы и она всегда носит чёрное или тёмно-синее. Она выглядит как человек, который точно знает, чего хочет.',
            'Я пока не знаю о ней многого. Но она ощущается как хороший человек. Тихая, аккуратная, организованная. Я рад, что она въехала.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 8,
    title: 'Модуль 8 — Дни, месяцы, время',
    preview: [
      'Monday, Tuesday... Sunday (понедельник, вторник... воскресенье)',
      'week, month, year, hour, minute (неделя, месяц, год, час, минута)',
      'yesterday, today, tomorrow (вчера, сегодня, завтра)',
      'date, calendar, early, late, next (дата, календарь, рано, поздно, следующий)',
    ],
    tip: 'Опиши три вещи у себя дома, используя прилагательные из этого модуля. Потом сравни их: My table is bigger than my desk. My phone is newer than my laptop. Составь хотя бы 4–5 таких пар.',
  },
}
