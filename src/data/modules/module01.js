export const module01 = {
  id: 1,
  levelId: 'level-1',
  title: 'Я и моя жизнь',
  words: '1–18',
  wordCount: 18,
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
        { num: 1,  word: 'I',             tr: '[aɪ]',          ru: 'я',                                    ex: 'I am here.',                      exRu: 'Я здесь.' },
        { num: 2,  word: 'am / is / are', tr: '[æm / ɪz / ɑː]', ru: 'быть (есть, являюсь)',               ex: 'I am happy.',                     exRu: 'Я счастлив.' },
        { num: 3,  word: 'my',            tr: '[maɪ]',          ru: 'мой, моя, моё',                       ex: 'My name is Tom.',                 exRu: 'Моё имя — Том.' },
        { num: 4,  word: 'name',          tr: '[neɪm]',         ru: 'имя',                                  ex: 'What is your name?',              exRu: 'Как тебя зовут?' },
        { num: 5,  word: 'you',           tr: '[juː]',          ru: 'ты, вы',                               ex: 'You are right.',                  exRu: 'Ты прав.' },
        { num: 6,  word: 'your',          tr: '[jɔː]',          ru: 'твой, ваш',                            ex: 'Your coffee is ready.',           exRu: 'Твой кофе готов.' },
        { num: 7,  word: 'he / she / it', tr: '[hiː / ʃiː / ɪt]', ru: 'он / она / оно',                  ex: 'She is my friend.',               exRu: 'Она моя подруга.' },
        { num: 8,  word: 'his / her',     tr: '[hɪz / hɜː]',   ru: 'его / её',                             ex: 'His car is old.',                 exRu: 'Его машина старая.' },
        { num: 9,  word: 'we',            tr: '[wiː]',          ru: 'мы',                                   ex: 'We live in Moscow.',              exRu: 'Мы живём в Москве.' },
        { num: 10, word: 'live',          tr: '[lɪv]',          ru: 'жить',                                 ex: 'I live in a small city.',         exRu: 'Я живу в маленьком городе.' },
        { num: 11, word: 'work',          tr: '[wɜːk]',         ru: 'работать; работа',                     ex: 'She works every day.',            exRu: 'Она работает каждый день.' },
        { num: 12, word: 'have',          tr: '[hæv]',          ru: 'иметь',                                ex: 'I have a dog.',                   exRu: 'У меня есть собака.' },
        { num: 13, word: 'like',          tr: '[laɪk]',         ru: 'нравиться, любить',                    ex: 'I like coffee.',                  exRu: 'Мне нравится кофе.' },
        { num: 14, word: 'and',           tr: '[ænd]',          ru: 'и',                                    ex: 'I work and study.',               exRu: 'Я работаю и учусь.' },
        { num: 15, word: 'in',            tr: '[ɪn]',           ru: 'в',                                    ex: 'She lives in Paris.',             exRu: 'Она живёт в Париже.' },
        { num: 16, word: 'a / an',        tr: '[ə / æn]',       ru: 'один, какой-то (артикль)',             ex: 'He has a cat.',                   exRu: 'У него есть кошка.' },
        { num: 17, word: 'the',           tr: '[ðə / ðiː]',     ru: 'этот, тот (определённый артикль)',     ex: 'The cat is sleeping.',            exRu: 'Кошка спит.' },
        { num: 18, word: 'good',          tr: '[ɡʊd]',          ru: 'хороший, хорошо',                      ex: 'It is a good day.',               exRu: 'Это хороший день.' },
      ],
      note: {
        title: 'Заметка об артиклях',
        lines: [
          'a / an — «один из многих», впервые упоминаем предмет: I have a cat. (просто какая-то кошка)',
          'the — «тот самый», уже известный предмет: The cat is sleeping. (та самая кошка, о которой мы знаем)',
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
        { num: 1,  en: 'My name is Anna.',                           ru: 'Моё имя — Анна. (Меня зовут Анна.)',     note: null },
        { num: 2,  en: 'I live in Moscow.',                          ru: 'Я живу в Москве.',                        note: null },
        { num: 3,  en: 'I work in an office.',                       ru: 'Я работаю в офисе.',                      note: 'office — [ˈɒfɪs] — офис' },
        { num: 4,  en: 'She is my sister.',                          ru: 'Она моя сестра.',                         note: 'sister — [ˈsɪstə] — сестра' },
        { num: 5,  en: 'He is a good man.',                          ru: 'Он хороший человек.',                     note: 'man — [mæn] — мужчина, человек' },
        { num: 6,  en: 'I have a small apartment.',                  ru: 'У меня есть небольшая квартира.',         note: 'apartment — [əˈpɑːtmənt] — квартира' },
        { num: 7,  en: 'We like this city.',                         ru: 'Нам нравится этот город.',                note: 'city — [ˈsɪti] — город' },
        { num: 8,  en: 'Your name is Max, right?',                   ru: 'Тебя зовут Макс, верно?',                 note: 'right — [raɪt] — верно, правильно' },
        { num: 9,  en: 'She works in a hospital.',                   ru: 'Она работает в больнице.',                note: 'hospital — [ˈhɒspɪtl] — больница' },
        { num: 10, en: 'It is a good book.',                         ru: 'Это хорошая книга.',                      note: 'book — [bʊk] — книга' },
        { num: 11, en: 'His name is Peter and her name is Lisa.',    ru: 'Его зовут Пётр, а её зовут Лиза.',        note: null },
        { num: 12, en: 'I live and work in the same city.',          ru: 'Я живу и работаю в одном городе.',        note: 'same — [seɪm] — тот же, одинаковый' },
        { num: 13, en: 'We have a good team.',                       ru: 'У нас хорошая команда.',                  note: 'team — [tiːm] — команда' },
        { num: 14, en: 'She likes her work.',                        ru: 'Ей нравится её работа.',                  note: null },
        { num: 15, en: 'I am not from Moscow.',                      ru: 'Я не из Москвы.',                         note: 'not — [nɒt] — не' },
      ],
      note: {
        title: 'Обрати внимание',
        lines: [
          'После he / she / it глагол получает -s на конце:',
          'I work → She works',
          'I like → He likes',
          'I live → It lives',
          'Это не сложное правило. Просто привыкай видеть эту букву.',
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
      textTitle: '«Привет, меня зовут Алекс»',
      original: [
        'My name is Alex. I am 28 years old. I live in Moscow. It is a big city, but I like it here.',
        'I work in a small company. My work is not easy, but it is interesting. I like my job.',
        'I have a small apartment in the city. It is not big, but it is good. I live alone — but I have a cat. Her name is Luna. She is grey and very lazy. But she is my favourite friend.',
        'My friend Pavel lives in the same city. He is a good man. He works in a hospital. His work is important.',
        'We like to meet on weekends. We drink coffee and talk. It is a good time.',
        'I am happy here. My life is simple, but it is good.',
      ],
      translation: [
        'Меня зовут Алекс. Мне 28 лет. Я живу в Москве. Это большой город, но он мне нравится.',
        'Я работаю в небольшой компании. Моя работа нелёгкая, но интересная. Мне нравится моя работа.',
        'У меня небольшая квартира в городе. Она не большая, но хорошая. Я живу один — но у меня есть кошка. Её зовут Луна. Она серая и очень ленивая. Но она — мой любимый друг.',
        'Мой друг Павел живёт в том же городе. Он хороший человек. Он работает в больнице. Его работа важна.',
        'Мы любим встречаться по выходным. Мы пьём кофе и разговариваем. Это хорошее время.',
        'Я счастлив здесь. Моя жизнь простая, но она хорошая.',
      ],
      vocab: [
        { word: 'years old',  tr: '[jɪəz əʊld]',    ru: 'лет (возраст)' },
        { word: 'big',        tr: '[bɪɡ]',           ru: 'большой' },
        { word: 'here',       tr: '[hɪə]',           ru: 'здесь' },
        { word: 'company',    tr: '[ˈkʌmpəni]',      ru: 'компания' },
        { word: 'easy',       tr: '[ˈiːzi]',         ru: 'лёгкий' },
        { word: 'interesting',tr: '[ˈɪntrəstɪŋ]',   ru: 'интересный' },
        { word: 'job',        tr: '[dʒɒb]',          ru: 'работа, место работы' },
        { word: 'alone',      tr: '[əˈləʊn]',        ru: 'один (в одиночестве)' },
        { word: 'grey',       tr: '[ɡreɪ]',          ru: 'серый' },
        { word: 'lazy',       tr: '[ˈleɪzi]',        ru: 'ленивый' },
        { word: 'favourite',  tr: '[ˈfeɪvərɪt]',    ru: 'любимый' },
        { word: 'important',  tr: '[ɪmˈpɔːtnt]',    ru: 'важный' },
        { word: 'meet',       tr: '[miːt]',          ru: 'встречаться' },
        { word: 'weekends',   tr: '[ˌwiːkˈendz]',   ru: 'выходные дни' },
        { word: 'talk',       tr: '[tɔːk]',          ru: 'разговаривать' },
        { word: 'simple',     tr: '[ˈsɪmpl]',        ru: 'простой' },
        { word: 'happy',      tr: '[ˈhæpi]',         ru: 'счастливый' },
        { word: 'life',       tr: '[laɪf]',          ru: 'жизнь' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Посмотрим на несколько предложений из текста и разберём, как они построены.',
      items: [
        {
          sentence: 'My name  |  is  |  Alex.',
          schema: 'КТО/ЧТО  →  ЧТО ДЕЛАЕТ  →  КТО/ЧТО',
          explanation: [
            'My name — это «кто / что» (подлежащее).',
            'is — это связка «есть / является».',
            'Alex — это ответ.',
          ],
          pattern: '[имя/слово] is [что-то]',
          examples: [
            'The city is big. — Город большой.',
            'Her cat is grey. — Её кошка серая.',
            'My work is interesting. — Моя работа интересная.',
          ],
        },
        {
          sentence: 'I  |  live  |  in Moscow.',
          schema: 'КТО  →  ДЕЙСТВИЕ  →  ГДЕ',
          explanation: ['Порядок: КТО → ЧТО ДЕЛАЕТ → ГДЕ / КОГДА / КАК'],
          pattern: null,
          examples: [
            'I work in a company. → Я работаю в компании.',
            'She lives in this city. → Она живёт в этом городе.',
            'We meet on weekends. → Мы встречаемся по выходным.',
          ],
        },
        {
          sentence: 'I  |  have  |  a cat.',
          schema: 'КТО  →  ДЕЙСТВИЕ  →  ЧТО',
          explanation: [
            'I have — у меня есть.',
            'He has — у него есть. (have → has после he/she/it)',
            'We have — у нас есть.',
          ],
          pattern: null,
          examples: [
            'I have a dog. — У меня есть собака.',
            'She has a good job. — У неё хорошая работа.',
            'We have a small team. — У нас маленькая команда.',
          ],
        },
        {
          sentence: 'I  |  am not  |  from Moscow.',
          schema: 'Отрицание',
          explanation: [
            'Чтобы сказать «не», добавляем not после глагола am / is / are:',
            "I am not → Я не...",
            "She is not → Она не...",
            "They are not → Они не...",
          ],
          pattern: "I'm not / She isn't / They aren't",
          examples: [],
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
            'My name is…',
            'I live in…',
            'I work in…',
            'I have…',
            'I like…',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него. Можно одним-двумя словами.',
          type: 'questions',
          items: [
            { q: 'What is Alex\'s name?',  hint: 'Как его зовут?' },
            { q: 'Where does he live?',    hint: 'Где он живёт?' },
            { q: 'Does Alex like his job?',hint: 'Ему нравится его работа?' },
            { q: 'What is his cat\'s name?',hint: 'Как зовут его кошку?' },
            { q: 'Who is Pavel?',          hint: 'Кто такой Павел?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Меня зовут Катя.',           en: 'My name is Katya.' },
            { ru: 'Я живу в маленьком городе.', en: 'I live in a small city.' },
            { ru: 'У меня есть собака.',        en: 'I have a dog.' },
            { ru: 'Она работает в больнице.',   en: 'She works in a hospital.' },
            { ru: 'Это хорошая работа.',        en: 'It is a good job.' },
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
          hint: 'Выбери правильное слово из скобок и вставь в предложение.',
          type: 'fill',
          items: [
            { sentence: 'My ___ is Anna.',                options: 'name / work / city',   answer: 'name' },
            { sentence: 'I ___ in Moscow.',               options: 'have / live / like',   answer: 'live' },
            { sentence: 'She ___ in a hospital.',         options: 'is / works / lives',   answer: 'works' },
            { sentence: 'He ___ a good friend.',          options: 'have / is / are',       answer: 'is' },
            { sentence: 'I ___ coffee every morning.',    options: 'live / like / work',    answer: 'like' },
            { sentence: 'We ___ a small apartment.',      options: 'have / is / are',       answer: 'have' },
            { sentence: 'Her cat ___ grey.',              options: 'am / is / are',         answer: 'is' },
            { sentence: 'I am not ___ here.',             options: 'from / in / and',       answer: 'from' },
            { sentence: 'His name ___ Pavel.',            options: 'are / am / is',         answer: 'is' },
            { sentence: 'It is a ___ day.',               options: 'good / have / my',      answer: 'good' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами. Используй слова из модуля.',
          type: 'rephrase',
          items: [
            { task: 'Alex is from Moscow. He lives there.',             answer: 'Alex lives in Moscow.' },
            { task: 'Luna is Alex\'s cat. She belongs to him.',         answer: "It is his cat." },
            { task: 'Pavel and Alex are friends. They are in the same city.', answer: 'Pavel lives in the same city as Alex.' },
            { task: 'Alex enjoys his work.',                            answer: 'Alex likes his job.' },
            { task: 'Alex is not unhappy.',                             answer: 'Alex is happy.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Читай медленно. Все слова из этого модуля тебе уже знакомы.',
          type: 'reading',
          textTitle: 'Her name is Sofia.',
          original: [
            'Her name is Sofia. She is 25 years old. She lives in a big city. She works in a small office.',
            'Sofia has a cat. His name is Tom. He is black and very lazy. But she likes him. He is her favourite.',
            "Sofia's friend is Anna. Anna is a good person. She lives in the same city. They meet on weekends and drink coffee.",
            'Sofia likes her life. It is simple, but it is good.',
          ],
          translation: [
            'Её зовут София. Ей 25 лет. Она живёт в большом городе. Она работает в небольшом офисе.',
            'У Софии есть кот. Его зовут Том. Он чёрный и очень ленивый. Но ей он нравится. Он её любимец.',
            'Подруга Софии — Анна. Анна хороший человек. Она живёт в том же городе. Они встречаются по выходным и пьют кофе.',
            'Софии нравится её жизнь. Она простая, но хорошая.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 2,
    title: 'Модуль 2 — Мой день и мой дом',
    preview: [
      'go (идти), come (приходить), see (видеть), know (знать)',
      'house (дом), room (комната), street (улица)',
      'every day (каждый день), morning (утро), night (ночь)',
      'eat (есть/кушать), drink (пить), sleep (спать)',
    ],
    tip: 'Возьми 3–5 слов из этого модуля и составь 2–3 предложения о себе. Напиши их. Не ищи сложных слов — используй то, что уже знаешь. Это лучшее упражнение.',
  },
}
