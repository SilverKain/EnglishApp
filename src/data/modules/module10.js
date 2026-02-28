export const module10 = {
  id: 10,
  levelId: 'level-1',
  title: 'Семья и родственники',
  words: '177–196',
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
        { num: 177, word: 'mother',   tr: '[ˈmʌðə]',    ru: 'мать, мама',                    ex: 'My mother makes the best soup.',         exRu: 'Моя мама готовит лучший суп.' },
        { num: 178, word: 'father',   tr: '[ˈfɑːðə]',   ru: 'отец, папа',                    ex: 'My father works in the city centre.',    exRu: 'Мой папа работает в центре города.' },
        { num: 179, word: 'sister',   tr: '[ˈsɪstə]',   ru: 'сестра',                        ex: 'I have one sister — she is younger than me.', exRu: 'У меня есть одна сестра — она младше меня.' },
        { num: 180, word: 'brother',  tr: '[ˈbrʌðə]',   ru: 'брат',                          ex: 'My brother lives in another city.',      exRu: 'Мой брат живёт в другом городе.' },
        { num: 181, word: 'son',      tr: '[sʌn]',       ru: 'сын',                           ex: 'Their son is five years old.',           exRu: 'Их сыну пять лет.' },
        { num: 182, word: 'daughter', tr: '[ˈdɔːtə]',   ru: 'дочь',                          ex: 'She has one daughter and two sons.',     exRu: 'У неё одна дочь и двое сыновей.' },
        { num: 183, word: 'husband',  tr: '[ˈhʌzbənd]', ru: 'муж',                           ex: 'Her husband works late every day.',      exRu: 'Её муж работает допоздна каждый день.' },
        { num: 184, word: 'wife',     tr: '[waɪf]',      ru: 'жена',                          ex: 'His wife is a doctor.',                  exRu: 'Его жена — врач.' },
        { num: 185, word: 'parents',  tr: '[ˈpeərənts]',ru: 'родители',                      ex: 'My parents live in a small town.',       exRu: 'Мои родители живут в небольшом городке.' },
        { num: 186, word: 'grandma',  tr: '[ˈɡrænmɑː]', ru: 'бабушка',                       ex: 'Grandma always bakes something on Sunday.', exRu: 'Бабушка всегда что-нибудь печёт в воскресенье.' },
        { num: 187, word: 'grandpa',  tr: '[ˈɡrænpɑː]', ru: 'дедушка',                       ex: 'Grandpa tells great stories about the past.', exRu: 'Дедушка рассказывает замечательные истории о прошлом.' },
        { num: 188, word: 'aunt',     tr: '[ɑːnt]',      ru: 'тётя',                          ex: 'My aunt lives next door to my parents.', exRu: 'Моя тётя живёт по соседству с моими родителями.' },
        { num: 189, word: 'uncle',    tr: '[ˈʌŋkl]',    ru: 'дядя',                          ex: 'My uncle is funny and very loud.',       exRu: 'Мой дядя весёлый и очень громкий.' },
        { num: 190, word: 'cousin',   tr: '[ˈkʌzn]',    ru: 'двоюродный брат/сестра',        ex: 'I grew up with my cousin — we were like siblings.', exRu: 'Я вырос с двоюродным братом — мы были как родные.' },
        { num: 191, word: 'baby',     tr: '[ˈbeɪbi]',   ru: 'младенец; малыш',               ex: 'The baby started walking last week.',    exRu: 'Малыш начал ходить на прошлой неделе.' },
        { num: 192, word: 'grow up',  tr: '[ɡrəʊ ʌp]',  ru: 'расти, вырастать',              ex: 'I grew up in a small village.',          exRu: 'Я вырос в небольшой деревне.' },
        { num: 193, word: 'love',     tr: '[lʌv]',       ru: 'любить; любовь',                ex: 'I love my family very much.',            exRu: 'Я очень люблю свою семью.' },
        { num: 194, word: 'miss',     tr: '[mɪs]',       ru: 'скучать (по кому-то)',          ex: 'I miss my parents when I am away.',      exRu: 'Когда меня нет дома, я скучаю по родителям.' },
        { num: 195, word: 'visit',    tr: '[ˈvɪzɪt]',   ru: 'навещать; визит',               ex: 'We visit my grandparents every summer.', exRu: 'Каждое лето мы навещаем бабушку и дедушку.' },
        { num: 196, word: 'together', tr: '[təˈɡeðə]',  ru: 'вместе',                        ex: 'We always eat dinner together.',         exRu: 'Мы всегда ужинаем вместе.' },
      ],
      note: {
        title: 'Заметки о произношении и значениях',
        lines: [
          'daughter произносится [ˈdɔːtə] — буквы gh не читаются (как в night, light).',
          'son произносится [sʌn] — звучит как sun (солнце). Это омофоны.',
          'miss — два значения: скучать (I miss you.) и пропустить (I missed the bus.).',
          'Притяжательный падеж: my mother\'s kitchen, my father\'s car, Anna\'s sister.',
          'Мн.ч. с апострофом: my parents\' house, my sisters\' room.',
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
        { num: 1,  en: 'My mother always knows when something is wrong.',           ru: 'Моя мама всегда знает, когда что-то не так.',               note: 'something is wrong — что-то не так' },
        { num: 2,  en: 'My father taught me how to cook and how to drive.',         ru: 'Папа научил меня готовить и водить машину.',                 note: 'taught — [tɔːt] — научил; drive — водить машину' },
        { num: 3,  en: 'My sister and I are very different, but we are close.',     ru: 'Мы с сестрой очень разные, но мы близки.',                  note: 'close — [kləʊs] — близкие, дружные' },
        { num: 4,  en: 'I talk to my brother on the phone almost every day.',       ru: 'Я общаюсь с братом по телефону почти каждый день.',          note: null },
        { num: 5,  en: 'Their son is only three, but he already speaks two languages.', ru: 'Их сыну всего три года, но он уже говорит на двух языках.', note: 'languages — [ˈlæŋɡwɪdʒɪz] — языки' },
        { num: 6,  en: 'She calls her daughter every evening before bed.',          ru: 'Каждый вечер перед сном она звонит дочери.',                 note: null },
        { num: 7,  en: 'Her husband cooks dinner on weekdays — she does it on weekends.', ru: 'Её муж готовит ужин в будни — она готовит в выходные.',  note: 'weekdays — будние дни; weekends — выходные' },
        { num: 8,  en: 'His wife is calm and kind. They are a good match.',         ru: 'Его жена спокойная и добрая. Они хорошая пара.',             note: 'match — пара, сочетание' },
        { num: 9,  en: 'I call my parents every Sunday — it is our tradition.',     ru: 'Каждое воскресенье я звоню родителям — это наша традиция.', note: 'tradition — [trəˈdɪʃn] — традиция' },
        { num: 10, en: 'My grandma lives alone, so we visit her every week.',       ru: 'Бабушка живёт одна, поэтому мы навещаем её каждую неделю.', note: 'alone — [əˈləʊn] — одна, в одиночестве' },
        { num: 11, en: 'My grandpa worked as a doctor for forty years.',            ru: 'Мой дедушка проработал врачом сорок лет.',                  note: null },
        { num: 12, en: 'My aunt makes the best cake I have ever eaten.',            ru: 'Моя тётя готовит лучший торт, который я когда-либо пробовал.', note: 'ever eaten — когда-либо пробовал' },
        { num: 13, en: 'My uncle always makes everyone laugh. He is very funny.',   ru: 'Мой дядя всегда смешит всех. Он очень смешной.',            note: 'makes everyone laugh — смешит всех' },
        { num: 14, en: 'My cousin and I grew up in the same street. We know each other very well.', ru: 'Мы с двоюродным братом выросли на одной улице. Мы очень хорошо знаем друг друга.', note: 'each other — друг друга' },
        { num: 15, en: 'When the whole family is together, the house feels alive.', ru: 'Когда вся семья вместе, дом оживает.',                       note: 'feels alive — оживает, наполняется жизнью' },
      ],
      note: {
        title: 'Обрати внимание — притяжательный падеж (\'s)',
        lines: [
          'my mother\'s kitchen — кухня моей мамы.',
          'my brother\'s car — машина моего брата.',
          'Anna\'s daughter — дочь Анны.',
          'Если слово заканчивается на s (мн. ч.): my parents\' house, my sisters\' room.',
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
      textTitle: '«Воскресный обед»',
      original: [
        'Every Sunday my family gets together for lunch. It is our tradition, and I love it.',
        'My parents live in the same town as me, so it is easy. My sister comes with her husband and their two children. My brother drives in from the next town — it takes him about an hour. My aunt and uncle come sometimes too, when they are not busy.',
        'My mother and grandmother cook together. They start early in the morning. By noon the whole house smells of food. My grandfather sits in his chair and reads the newspaper. My father and uncle talk about sport or cars — always loudly.',
        'The children run around the living room. The baby sits on the carpet and plays. My cousin and I sit in the kitchen and catch up — we don\'t see each other much during the week.',
        'When everyone sits down at the table, it gets loud and warm. We eat, talk and laugh. It lasts two or three hours.',
        'Then everyone goes home. The house is quiet again. But I always feel happy after these Sundays. It reminds me what matters most.',
      ],
      translation: [
        'Каждое воскресенье моя семья собирается на обед. Это наша традиция, и я её обожаю.',
        'Мои родители живут в том же городе, что и я, так что добраться легко. Сестра приезжает с мужем и двумя детьми. Брат едет на машине из соседнего города — это занимает около часа. Иногда приходят тётя и дядя — если не заняты.',
        'Мама и бабушка готовят вместе. Они начинают рано утром. К полудню весь дом пропитан запахом еды. Дедушка сидит в своём кресле и читает газету. Папа с дядей разговаривают о спорте или машинах — всегда громко.',
        'Дети бегают по гостиной. Малыш сидит на ковре и играет. Мы с двоюродным братом сидим на кухне и болтаем — в течение недели мы почти не видимся.',
        'Когда все садятся за стол, становится шумно и тепло. Мы едим, разговариваем и смеёмся. Это длится два-три часа.',
        'Потом все расходятся по домам. Дом снова тихий. Но после таких воскресений я всегда чувствую себя счастливым. Это напоминает мне, что самое главное.',
      ],
      vocab: [
        { word: 'gets together', tr: '—',                  ru: 'собирается (о группе людей)' },
        { word: 'noon',          tr: '[nuːn]',             ru: 'полдень' },
        { word: 'smells of',     tr: '—',                  ru: 'пахнет чем-то' },
        { word: 'newspaper',     tr: '[ˈnjuːzˌpeɪpə]',    ru: 'газета' },
        { word: 'catch up',      tr: '—',                  ru: 'поговорить, узнать новости друг у друга' },
        { word: 'lasts',         tr: '[lɑːsts]',           ru: 'длится' },
        { word: 'reminds',       tr: '[rɪˈmaɪndz]',        ru: 'напоминает' },
        { word: 'matters',       tr: '[ˈmætəz]',           ru: 'важно, имеет значение' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: "Притяжательный падеж ('s). Глагол have для описания семьи. Miss, love, visit",
      items: [
        {
          sentence: "my mother's bag / my parents' house",
          schema: "имя/существительное + 's → чей-то предмет",
          explanation: [
            "my mother's bag — сумка моей мамы.",
            "my father's car — машина моего папы.",
            "Anna's sister — сестра Анны.",
            "Множественное число с -s: my parents' house (только апостроф, без второго s).",
            "Форма 'of' тоже есть, но 's звучит естественнее для людей: my father's car ✓.",
          ],
          pattern: "[имя]'s + существительное",
          examples: [
            "My brother's phone is new. — Телефон моего брата новый.",
            "Anna's grandma lives nearby. — Бабушка Анны живёт рядом.",
            "My parents' house is big. — Дом моих родителей большой.",
          ],
        },
        {
          sentence: "I have two brothers. She has a daughter. He doesn't have a sister.",
          schema: 'have / has — говорим о наличии родственников',
          explanation: [
            'I/you/we/they have: I have two brothers.',
            'he/she/it has: She has a daughter.',
            'Отрицание: He doesn\'t have a sister.',
            'Вопрос: Do you have any cousins?',
            'Разговорная форма: I\'ve got a brother = I have a brother.',
          ],
          pattern: 'have / has + родственник',
          examples: [
            'I have one sister and two brothers. — У меня одна сестра и два брата.',
            'Does she have any children? — У неё есть дети?',
            'He doesn\'t have any cousins. — У него нет двоюродных братьев.',
          ],
        },
        {
          sentence: "I love my family. I miss my parents. I visit my grandma.",
          schema: 'love / miss / visit + существительное или герундий',
          explanation: [
            'I love my family. — Я люблю свою семью.',
            'I miss my parents. — Я скучаю по родителям.',
            'I visit my grandma every month. — Я навещаю бабушку каждый месяц.',
            'После miss и love можно ставить герундий (-ing): I miss talking to her.',
            'I love spending time with my family.',
          ],
          pattern: 'love/miss/visit + noun/-ing',
          examples: [
            'I miss you. — Я скучаю по тебе.',
            'I love spending time with grandma. — Я люблю проводить время с бабушкой.',
            'We visit them every summer. — Мы навещаем их каждое лето.',
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
            'My mother always…',
            'I grew up…',
            'When my whole family gets together…',
            'I miss… because…',
            'My favourite family tradition is…',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'Who cooks on Sunday lunch?',                   hint: 'Кто готовит на воскресный обед?' },
            { q: 'What do the father and uncle talk about?',     hint: 'О чём разговаривают папа и дядя?' },
            { q: 'Where do the children play?',                  hint: 'Где играют дети?' },
            { q: 'Where do the cousins sit and catch up?',       hint: 'Где сидят двоюродные братья?' },
            { q: 'How does the person feel after these Sundays?',hint: 'Как он себя чувствует после таких воскресений?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'У меня есть старший брат и младшая сестра.',      en: 'I have an older brother and a younger sister.' },
            { ru: 'Моя мама живёт в другом городе, и я скучаю по ней.', en: 'My mother lives in another city and I miss her.' },
            { ru: 'Каждое лето мы навещаем бабушку и дедушку.',      en: 'Every summer we visit our grandma and grandpa.' },
            { ru: 'Муж моей сестры очень смешной.',                  en: "My sister's husband is very funny." },
            { ru: 'Мне нравится, когда вся семья вместе.',           en: 'I love it when the whole family is together.' },
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
            { sentence: 'I live with my ___ and ___.',             options: 'mother / brother / father',   answer: 'mother' },
            { sentence: 'She has one ___ and two ___.',            options: 'daughter / sons / son',       answer: 'daughter' },
            { sentence: 'My ___ always bakes cake on Sundays.',    options: 'grandpa / grandma / uncle',  answer: 'grandma' },
            { sentence: 'I ___ my parents when I travel.',         options: 'love / miss / visit',        answer: 'miss' },
            { sentence: 'We ___ my grandparents every month.',     options: 'love / miss / visit',        answer: 'visit' },
            { sentence: 'My ___ and I grew up in the same town.',  options: 'aunt / cousin / uncle',      answer: 'cousin' },
            { sentence: 'Her ___ is a doctor.',                    options: 'wife / husband / father',    answer: 'husband' },
            { sentence: 'They always have dinner ___.',            options: 'alone / together / apart',   answer: 'together' },
            { sentence: 'My ___ is only six months old.',          options: 'son / baby / cousin',        answer: 'baby' },
            { sentence: 'My father ___ up in a small village.',    options: 'grew / grow / grown',        answer: 'grew' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: 'That car belongs to my father.',                              answer: "That is my father's car." },
            { task: 'She has no brothers or sisters.',                             answer: "She doesn't have any siblings." },
            { task: 'He is the child of my aunt.',                                answer: 'He is my cousin.' },
            { task: 'She is not at home — she is at her grandmother\'s.',         answer: 'She is visiting her grandma.' },
            { task: 'I haven\'t spoken to him for a long time and I think about him.', answer: 'I really miss him.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–10. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'Far from Home',
          original: [
            'My name is Dmitri. I am 28 years old. I have been living in London for two years now. I came here for work, and I like my life here — but sometimes I miss home very much.',
            'My family is back in Russia. My mother and father live in Kazan. My younger sister is still at university. My grandparents live in a small town not far from the city.',
            'I call my parents every Sunday. My mother always asks if I eat well and sleep enough. My father asks about work. My sister sends me photos of our dog and the old neighbourhood.',
            'Last year I went home for two weeks in summer. My grandma cooked every day — soup, bread, pies. My grandpa and I walked in the evenings and talked. My sister and I stayed up late, like when we were children.',
            'On the last day, my whole family came for dinner. We sat around the big table in my parents\' kitchen. It was loud and warm, and very full. I didn\'t want to leave.',
            'Back in London, the flat felt quiet. But I looked at the photos on my phone — my mother\'s smile, my grandpa\'s face, the table full of food — and I felt okay. They are far, but they are always with me.',
          ],
          translation: [
            'Меня зовут Дмитрий. Мне 28 лет. Я уже два года живу в Лондоне. Я приехал сюда ради работы, и моя жизнь здесь мне нравится — но иногда я очень скучаю по дому.',
            'Моя семья осталась в России. Мама и папа живут в Казани. Младшая сестра ещё учится в университете. Бабушка и дедушка живут в небольшом городке недалеко от города.',
            'Каждое воскресенье я звоню родителям. Мама всегда спрашивает, хорошо ли я ем и высыпаюсь ли. Папа спрашивает про работу. Сестра присылает фотографии нашей собаки и старого района.',
            'В прошлом году я приезжал домой на две недели летом. Бабушка готовила каждый день — суп, хлеб, пироги. Мы с дедушкой ходили гулять по вечерам и разговаривали. Мы с сестрой засиживались допоздна, как в детстве.',
            'В последний день вся семья собралась на ужин. Мы сидели за большим столом на кухне у родителей. Было шумно, тепло и очень тесно. Я не хотел уезжать.',
            'Вернувшись в Лондон, я почувствовал, что в квартире тихо. Но я посмотрел на фотографии в телефоне — улыбка мамы, лицо дедушки, стол с едой — и мне стало хорошо. Они далеко, но они всегда со мной.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 11,
    title: 'Модуль 11 — Тело человека',
    preview: [
      'head, face, eye, ear, nose, mouth, hand, arm, leg, back (голова, лицо, глаз...)',
      'hurt, pain, feel sick, tired, healthy, strong, weak (болеть, боль, чувствовать себя плохо...)',
      'doctor, hospital, medicine, rest, sleep (врач, больница, лекарство...)',
    ],
    tip: 'Расскажи о своей семье на английском — хотя бы 5 предложений. Используй I have..., My mother is..., My brother lives..., We visit... Попробуй добавить \'s: my mother\'s job, my sister\'s husband.',
  },
}
