export const module21 = {
  id: 21,
  levelId: 'level-1',
  title: 'Учёба и школа',
  words: '397–416',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 397–416 — учёба, школа, процесс обучения.',
      words: [
        { num: 397, word: 'school',    tr: '[skuːl]',       ru: 'школа',                               ex: 'She walked to school every morning — it was only ten minutes.',          exRu: 'Она ходила в школу пешком каждое утро — всего десять минут.' },
        { num: 398, word: 'lesson',    tr: '[ˈlesn]',       ru: 'урок',                                ex: 'The lesson starts at nine — don\'t be late.',                            exRu: 'Урок начинается в девять — не опаздывай.' },
        { num: 399, word: 'class',     tr: '[klɑːs]',       ru: 'класс; занятие; урок',               ex: 'There are twenty students in my class.',                                  exRu: 'В моём классе двадцать учеников.' },
        { num: 400, word: 'study',     tr: '[ˈstʌdi]',      ru: 'учиться; изучать; кабинет',          ex: 'She studies every evening — she is very disciplined.',                   exRu: 'Она учится каждый вечер — она очень дисциплинирована.' },
        { num: 401, word: 'learn',     tr: '[lɜːn]',        ru: 'учить; усваивать; узнавать',         ex: 'The best way to learn a language is to use it every day.',               exRu: 'Лучший способ выучить язык — использовать его каждый день.' },
        { num: 402, word: 'read',      tr: '[riːd]',        ru: 'читать',                              ex: 'He reads for an hour before bed every night.',                           exRu: 'Каждый вечер он час читает перед сном.' },
        { num: 403, word: 'write',     tr: '[raɪt]',        ru: 'писать',                              ex: 'Write your name at the top of the page.',                               exRu: 'Напиши своё имя вверху страницы.' },
        { num: 404, word: 'test',      tr: '[test]',        ru: 'тест; проверка; проверять',          ex: 'We have a test on Friday — I need to prepare.',                          exRu: 'В пятницу у нас тест — нужно подготовиться.' },
        { num: 405, word: 'student',   tr: '[ˈstjuːdnt]',  ru: 'студент; ученик',                    ex: 'She is a very motivated student — always asks questions.',               exRu: 'Она очень мотивированный студент — всегда задаёт вопросы.' },
        { num: 406, word: 'homework',  tr: '[ˈhəʊmwɜːk]', ru: 'домашнее задание',                   ex: 'I forgot to do my homework and had to explain it in class.',             exRu: 'Я забыл сделать домашнее задание и пришлось объяснять это на уроке.' },
        { num: 407, word: 'library',   tr: '[ˈlaɪbrəri]',  ru: 'библиотека',                         ex: 'I go to the library when I need to concentrate — it is quiet there.',    exRu: 'Я хожу в библиотеку, когда нужно сосредоточиться — там тихо.' },
        { num: 408, word: 'practise',  tr: '[ˈpræktɪs]',   ru: 'практиковать; упражняться',          ex: 'You need to practise speaking, not just reading grammar rules.',          exRu: 'Нужно практиковать речь, а не просто читать правила грамматики.' },
        { num: 409, word: 'improve',   tr: '[ɪmˈpruːv]',   ru: 'улучшать; совершенствоваться',       ex: 'Her English has improved a lot since she started watching films.',        exRu: 'Её английский сильно улучшился с тех пор, как она начала смотреть фильмы.' },
        { num: 410, word: 'correct',   tr: '[kəˈrekt]',    ru: 'исправлять; правильный',             ex: 'Please correct my mistakes — I want to know when I am wrong.',          exRu: 'Пожалуйста, исправляй мои ошибки — я хочу знать, когда ошибаюсь.' },
        { num: 411, word: 'repeat',    tr: '[rɪˈpiːt]',    ru: 'повторять',                          ex: 'Can you repeat that? I didn\'t quite catch it.',                         exRu: 'Можешь повторить? Я не совсем расслышал.' },
        { num: 412, word: 'mistake',   tr: '[mɪˈsteɪk]',   ru: 'ошибка',                             ex: 'Everyone makes mistakes — that is how you learn.',                       exRu: 'Все делают ошибки — именно так и учатся.' },
        { num: 413, word: 'difficult', tr: '[ˈdɪfɪkəlt]',  ru: 'трудный; сложный',                   ex: 'The exam was more difficult than I expected.',                           exRu: 'Экзамен оказался сложнее, чем я ожидал.' },
        { num: 414, word: 'easy',      tr: '[ˈiːzi]',       ru: 'лёгкий; простой',                    ex: 'The first chapter was easy — the second was much harder.',               exRu: 'Первая глава была лёгкой — вторая оказалась намного сложнее.' },
        { num: 415, word: 'course',    tr: '[kɔːs]',        ru: 'курс; блюдо (в ресторане)',          ex: 'She is taking an online English course — three times a week.',           exRu: 'Она проходит онлайн-курс английского — три раза в неделю.' },
        { num: 416, word: 'exam',      tr: '[ɪɡˈzæm]',     ru: 'экзамен',                            ex: 'He passed the exam on his second try.',                                  exRu: 'Он сдал экзамен со второй попытки.' },
      ],
      note: {
        title: 'study vs learn; practise vs practice',
        lines: [
          'study — процесс: сидеть, читать, готовиться: She is studying for her exam. — Она готовится к экзамену.',
          'learn — результат: усвоить, научиться: I learned ten new words today. — Сегодня я выучил десять слов.',
          'В британском английском: practise — глагол, practice — существительное. В американском: оба practice.',
        ],
      },
    },

    // ── БЛОК 2 ── ЖИВЫЕ ПРЕДЛОЖЕНИЯ ───────────────────────────────────────
    {
      id: 'sentences',
      type: 'sentences',
      title: 'Блок 2 — Живые предложения',
      intro: 'Примеры из реальной речи — читай и запоминай контекст.',
      items: [
        { num: 1,  en: 'She has been going to the same school for eight years — she knows every teacher there.',                         ru: 'Она ходит в одну и ту же школу уже восемь лет — знает там каждого учителя.', note: '' },
        { num: 2,  en: 'The lesson was supposed to start at ten, but the teacher arrived twelve minutes late.',                           ru: 'Урок должен был начаться в десять, но учитель пришёл на двенадцать минут позже.', note: 'was supposed to — должен был' },
        { num: 3,  en: 'I missed two classes last week and now I don\'t understand what is going on.',                                    ru: 'Я пропустил два занятия на прошлой неделе и теперь не понимаю, что происходит.', note: '' },
        { num: 4,  en: 'He studies architecture at university — his projects take hours to finish.',                                      ru: 'Он изучает архитектуру в университете — его проекты занимают часы.', note: 'architecture — [ˈɑːkɪtektʃə] — архитектура' },
        { num: 5,  en: 'You learn more from making mistakes than from reading textbooks.',                                                ru: 'Ты учишься больше, делая ошибки, чем читая учебники.', note: 'textbooks — учебники' },
        { num: 6,  en: 'She reads everything she can find — newspapers, novels, even instructions on packaging.',                        ru: 'Она читает всё, что попадается, — газеты, романы, даже инструкции на упаковках.', note: 'packaging — [ˈpækɪdʒɪŋ] — упаковка' },
        { num: 7,  en: 'Write down unfamiliar words when you read — do not skip them.',                                                  ru: 'Выписывай незнакомые слова, когда читаешь — не пропускай их.', note: 'unfamiliar — [ˌʌnfəˈmɪliə] — незнакомый' },
        { num: 8,  en: 'We have a vocabulary test tomorrow — I need to go over the list one more time.',                                 ru: 'Завтра у нас тест по словарному запасу — мне нужно ещё раз просмотреть список.', note: 'go over — просмотреть, повторить' },
        { num: 9,  en: 'The students asked so many questions that the teacher had no time to explain the last topic.',                   ru: 'Студенты задали так много вопросов, что у учителя не осталось времени объяснить последнюю тему.', note: '' },
        { num: 10, en: 'I left my homework at home and had to send a photo of it from my phone.',                                        ru: 'Я оставил домашнее задание дома и пришлось прислать его фотографию с телефона.', note: '' },
        { num: 11, en: 'The library near my house is open until nine — I go there after work sometimes.',                                ru: 'Библиотека рядом с домом работает до девяти — я иногда хожу туда после работы.', note: '' },
        { num: 12, en: 'The only way to improve your pronunciation is to listen and repeat — a lot.',                                    ru: 'Единственный способ улучшить произношение — слушать и повторять. Много.', note: 'pronunciation — [prəˌnʌnsiˈeɪʃn] — произношение' },
        { num: 13, en: 'She corrected my essay very carefully — every paragraph had notes in the margin.',                               ru: 'Она тщательно проверила моё эссе — в каждом абзаце были пометки на полях.', note: 'margin — [ˈmɑːdʒɪn] — поле (страницы)' },
        { num: 14, en: 'Don\'t be afraid of making mistakes — just try and then correct.',                                               ru: 'Не бойся делать ошибки — просто пробуй, потом исправляй.', note: '' },
        { num: 15, en: 'He passed the exam without taking a single course — he just read a lot on his own.',                            ru: 'Он сдал экзамен, не пройдя ни одного курса, — просто много читал самостоятельно.', note: '' },
      ],
      note: {
        title: 'test vs exam',
        lines: [
          'test — короткая проверка знаний, обычно по одной теме: vocabulary test, grammar test.',
          'exam — серьёзный экзамен, обычно официальный: final exam, entrance exam.',
          'В разговоре слова часто взаимозаменяемы, но в официальном контексте exam звучит весомее.',
        ],
      },
    },

    // ── БЛОК 3 ── МИНИ-ТЕКСТ ──────────────────────────────────────────────
    {
      id: 'text',
      type: 'mini-text',
      title: 'Блок 3 — Мини-текст',
      intro: 'Читай оригинал, потом проверяй себя по переводу.',
      original: [
        'Marco had failed his English exam twice. Not badly — but not well enough to pass. The third attempt was in six weeks.',
        'He sat in the library on a Monday evening and looked at his notes. He had studied before, of course. But perhaps he had studied the wrong things — reading rules instead of practising sentences.',
        'This time he decided to do it differently.',
        'He bought a notebook and wrote one page every day — about his morning, his work, something he had read. At first it was difficult. The sentences were short and simple. He made many mistakes. But he just kept writing.',
        'He also started reading easier texts — short articles, news summaries, things he could understand without stopping every sentence. Slowly he began to read faster.',
        'The hardest part was speaking. He had no one to practise with, so he spoke to himself — in the kitchen, while walking, before bed.',
        'On the day of the exam, he was nervous but ready. He passed.',
        'Not because the exam became easier. Because he stopped waiting to be ready and started doing the work.',
      ],
      translation: [
        'Марко провалил экзамен по английскому дважды. Не с треском — но и не достаточно хорошо, чтобы сдать. До третьей попытки оставалось шесть недель.',
        'В понедельник вечером он сидел в библиотеке и смотрел на свои записи. Он занимался раньше, конечно. Но, возможно, занимался не тем — читал правила вместо того, чтобы практиковать предложения.',
        'На этот раз он решил действовать иначе.',
        'Он купил блокнот и писал по одной странице каждый день — про своё утро, работу, что-то прочитанное. Поначалу было сложно. Предложения коротки и просты. Ошибок много. Но он просто продолжал писать.',
        'Он также начал читать более лёгкие тексты — короткие статьи, краткие новости, то, что можно понять не останавливаясь на каждом предложении. Постепенно начал читать быстрее.',
        'Самым трудным было говорение. Практиковаться было не с кем, и он говорил с собой — на кухне, на ходу, перед сном.',
        'В день экзамена он нервничал, но был готов. Он сдал.',
        'Не потому что экзамен стал легче. А потому что он перестал ждать готовности и начал делать дело.',
      ],
      vocab: [
        { word: 'failed',       tr: '[feɪld]',          ru: 'провалил' },
        { word: 'attempt',      tr: '[əˈtempt]',        ru: 'попытка' },
        { word: 'summaries',    tr: '[ˈsʌməriz]',       ru: 'краткие изложения' },
        { word: 'nervous',      tr: '[ˈnɜːvəs]',        ru: 'нервный, взволнованный' },
        { word: 'instead of',   tr: '—',                ru: 'вместо того чтобы' },
        { word: 'differently',  tr: '[ˈdɪfrəntli]',    ru: 'иначе, по-другому' },
        { word: 'slowly',       tr: '[ˈsləʊli]',        ru: 'медленно, постепенно' },
      ],
    },

    // ── БЛОК 4 ── ПОНИМАНИЕ СТРУКТУРЫ ─────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Ключевые паттерны модуля.',
      items: [
        {
          sentence:    'She is studying for her exam.',
          schema:      'study vs learn — процесс против результата.',
          explanation: 'study — это что ты делаешь (процесс занятий). learn — это что ты получаешь в итоге (выученный материал). She studied hard and learned a lot. — Она много занималась и многому научилась.',
          pattern:     'study + for/at/noun; learn + to do / noun.',
          examples:    ['She studies at university.', 'I learned to drive last year.', 'He studied history but learned very little.'],
        },
        {
          sentence:    'This lesson is easier than the last one.',
          schema:      'Степени сравнения — easy/difficult.',
          explanation: 'Короткие прилагательные (1–2 слога): easier, harder, simpler. Длинные (3+ слога): more difficult, more interesting.',
          pattern:     'easy → easier → the easiest; difficult → more difficult → the most difficult.',
          examples:    ['The exam was more difficult than I expected.', 'The hardest part was speaking.', 'This exercise is easier than the last one.'],
        },
        {
          sentence:    'Practise speaking every day.',
          schema:      'Глаголы учёбы + конструкция.',
          explanation: 'learn to do, practise + -ing, improve + noun, study + noun/for.',
          pattern:     'practise [doing]; improve [noun]; learn to [do].',
          examples:    ['Practise speaking every day.', 'She improved her writing.', 'I learned to read at five.'],
        },
      ],
    },

    // ── БЛОК 5 ── МЫСЛИМ НА АНГЛИЙСКОМ ───────────────────────────────────
    {
      id: 'thinking',
      type: 'thinking',
      title: 'Блок 5 — Мыслим на английском',
      intro: 'Упражнения для активного использования языка.',
      sections: [
        {
          type:   'continue',
          title:  '5.1. Продолжи фразу',
          prompt: 'Закончи предложение своими словами на английском:',
          items: [
            'At school, I was good at… but bad at…',
            'The most difficult thing about learning English for me is…',
            'I learn best when…',
            'One thing I want to improve in English is…',
            'The last time I made a mistake in English, I…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'How many times had Marco failed the exam before?',             hint: 'Сколько раз Марко провалил экзамен до этого?' },
            { q: 'What did he decide to do differently this time?',              hint: 'Что он решил делать иначе в этот раз?' },
            { q: 'How did he practise speaking if he had no one to talk to?',    hint: 'Как он практиковал речь, если не с кем было говорить?' },
            { q: 'Did Marco know every word on the exam paper?',                 hint: 'Марко знал каждое слово на экзамене?' },
            { q: 'According to the text, why did he pass?',                      hint: 'По тексту — почему он сдал?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Я делаю много ошибок, но это нормально — так и учатся.',      en: 'I make a lot of mistakes, but that is fine — that is how you learn.' },
            { ru: 'Ей нужно больше практиковать речь — она слишком много читает и мало говорит.', en: 'She needs to practise speaking more — she reads too much and speaks too little.' },
            { ru: 'Он сдал экзамен с первой попытки — молодец.',                 en: 'He passed the exam on his first attempt — well done.' },
            { ru: 'Этот курс сложнее, чем я ожидал, но очень интересный.',      en: 'This course is more difficult than I expected, but very interesting.' },
            { ru: 'Повтори, пожалуйста — я не совсем понял последнюю часть.',   en: 'Please repeat — I didn\'t quite understand the last part.' },
          ],
        },
      ],
    },

    // ── БЛОК 6 ── МИНИ-ПОВТОРЕНИЕ ─────────────────────────────────────────
    {
      id: 'review',
      type: 'review',
      title: 'Блок 6 — Мини-повторение',
      intro: 'Закрепляем пройденное.',
      sections: [
        {
          type:  'fill',
          title: '6.1. Вставь пропущенное слово',
          items: [
            { sentence: 'We have an English ___ on Thursday — ten grammar questions.',         answer: 'test' },
            { sentence: 'She ___ law at the university in the city centre.',                   answer: 'studies' },
            { sentence: 'I need to go to the ___ — it is quiet and I can concentrate.',        answer: 'library' },
            { sentence: "Don't be afraid to make ___. Everyone does.",                         answer: 'mistakes' },
            { sentence: 'Can you ___ the last sentence? I didn\'t catch it.',                  answer: 'repeat' },
            { sentence: 'His pronunciation has ___ a lot — he practises every day.',           answer: 'improved' },
            { sentence: 'She ___ her essay three times before sending it.',                    answer: 'corrected' },
            { sentence: 'The ___ starts at nine and finishes at ten thirty.',                  answer: 'lesson' },
            { sentence: 'He passed the ___ without taking any preparation classes.',           answer: 'exam' },
            { sentence: 'I didn\'t do my ___ last night — I was too tired.',                   answer: 'homework' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'She did not pass the exam.',        rephrased: 'She failed the exam.' },
            { original: 'I am taking a French class.',       rephrased: 'I am studying French.' },
            { original: 'This grammar point is not easy.',   rephrased: 'This grammar point is difficult.' },
            { original: 'He is getting better at writing.',  rephrased: 'His writing is improving.' },
            { original: 'She said the sentence again.',      rephrased: 'She repeated the sentence.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            'Anna had been learning English for two years. Her grammar was not bad. She could read short texts without too many problems. But when she tried to speak, everything seemed to disappear.',
            'One day her teacher gave the class a simple task: speak for two minutes about your week. No writing, no notes. Just talk.',
            'Anna went first. She was nervous. She forgot words. She repeated herself. She made mistakes she knew were mistakes even as she made them. It was difficult.',
            'But she kept going. She spoke about her week — the café she had found near the library, the lesson she had missed, the film she had watched on Wednesday evening.',
            'When she finished, the teacher smiled. "That was good," she said. "Not perfect. But good. You didn\'t stop."',
            'Anna thought about that on the way home. Maybe the point was to start — and then to improve.',
          ],
          translation: [
            'Анна учила английский два года. Грамматика у неё была неплохой. Короткие тексты она читала без особых трудностей. Но когда пыталась говорить, всё, казалось, куда-то исчезало.',
            'Однажды учитель дал классу простое задание: говорите о своей неделе в течение двух минут. Без записей. Просто говорите.',
            'Анна вышла первой. Она нервничала. Забывала слова. Повторялась. Делала ошибки. Это было сложно.',
            'Но она продолжала. Рассказывала о своей неделе — о кафе рядом с библиотекой, о пропущенном уроке, о фильме в среду вечером.',
            'Когда она закончила, учитель улыбнулась. «Это было хорошо. Не идеально. Но хорошо. Ты не останавливалась».',
            'Анна думала об этом по дороге домой. Может быть, смысл — начать, а потом улучшать.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      22,
    title:   'Хобби и отдых',
    preview: ['music, film, book, sport, game', 'draw, paint, cook, travel, swim, run', 'hobby, relax, fun, interest, favourite'],
    tip:     'Опиши свой последний экзамен или трудное задание по-английски в трёх предложениях. Используй слова difficult, mistake, improve, try.',
  },
}
