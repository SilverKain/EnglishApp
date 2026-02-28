export const module32 = {
  id: 32,
  levelId: 'level-1',
  title: 'Путешествие',
  words: '617–636',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 617–636 — путешествия, транспорт, маршруты и туризм.',
      words: [
        { num: 617, word: 'travel',      tr: '[ˈtrævəl]',       ru: 'путешествовать; путешествие', ex: 'She has travelled to more than twenty countries — each one changed her a little.',     exRu: 'Она побывала в более чем двадцати странах — каждая немного изменила её.' },
        { num: 618, word: 'trip',        tr: '[trɪp]',           ru: 'поездка; путешествие',        ex: 'They took a short trip to the coast for the weekend — nothing planned, just drove.',  exRu: 'На выходных они съездили на побережье — ничего не планировали, просто поехали.' },
        { num: 619, word: 'journey',     tr: '[ˈdʒɜːni]',        ru: 'путь; поездка (процесс)',     ex: 'The journey from London to Edinburgh takes about four hours by train.',               exRu: 'Путь из Лондона в Эдинбург занимает около четырёх часов на поезде.' },
        { num: 620, word: 'flight',      tr: '[flaɪt]',          ru: 'рейс; перелёт',               ex: 'Her flight was delayed by two hours — she read an entire novel at the gate.',         exRu: 'Её рейс задержали на два часа — она прочитала целый роман у гейта.' },
        { num: 621, word: 'ticket',      tr: '[ˈtɪkɪt]',         ru: 'билет',                       ex: 'He bought the tickets three months in advance — half the price.',                    exRu: 'Он купил билеты за три месяца вперёд — вдвое дешевле.' },
        { num: 622, word: 'passport',    tr: '[ˈpɑːspɔːt]',      ru: 'паспорт',                     ex: 'She always puts her passport in the same pocket — this way she never loses it.',     exRu: 'Она всегда кладёт паспорт в один и тот же карман — так она его никогда не теряет.' },
        { num: 623, word: 'luggage',     tr: '[ˈlʌɡɪdʒ]',        ru: 'багаж',                       ex: 'He travels with carry-on luggage only — no waiting at the belt, no lost bags.',      exRu: 'Он путешествует только с ручной кладью — никакого ожидания у ленты, никаких потерянных сумок.' },
        { num: 624, word: 'hotel',       tr: '[həʊˈtel]',         ru: 'гостиница; отель',            ex: 'The hotel was small but the location was perfect — ten minutes from everything.',    exRu: 'Отель был небольшим, но расположение — идеальным: десять минут до всего.' },
        { num: 625, word: 'book',        tr: '[bʊk]',            ru: 'бронировать; книга',           ex: 'She booked the room six weeks in advance — there was nothing left closer to the date.', exRu: 'Она забронировала номер за шесть недель — ближе к дате ничего не осталось.' },
        { num: 626, word: 'arrive',      tr: '[əˈraɪv]',         ru: 'прибывать; приезжать',        ex: 'They arrived late — the restaurant was still open, but only just.',                  exRu: 'Они прибыли поздно — ресторан был ещё открыт, но едва-едва.' },
        { num: 627, word: 'depart',      tr: '[dɪˈpɑːt]',        ru: 'отправляться; вылетать',      ex: 'The train departs at six-fifteen — set two alarms.',                               exRu: 'Поезд отправляется в шесть пятнадцать — поставь два будильника.' },
        { num: 628, word: 'border',      tr: '[ˈbɔːdə]',         ru: 'граница',                     ex: 'They crossed the border by bus — a two-hour queue, nothing unusual.',               exRu: 'Они пересекли границу на автобусе — очередь на два часа, ничего необычного.' },
        { num: 629, word: 'customs',     tr: '[ˈkʌstəmz]',       ru: 'таможня',                     ex: 'At customs she was asked to open her bag — they found three oranges and a lot of questions.', exRu: 'На таможне её попросили открыть сумку — нашли три апельсина и много вопросов.' },
        { num: 630, word: 'destination', tr: '[ˌdestɪˈneɪʃən]',  ru: 'пункт назначения; место',     ex: 'She chose her destination by opening a map and pointing at random.',                 exRu: 'Она выбирала пункт назначения, открывая карту и указывая наугад.' },
        { num: 631, word: 'tourist',     tr: '[ˈtʊərɪst]',       ru: 'турист',                      ex: 'He didn\'t want to look like a tourist — but he had a guidebook, a camera and no sense of direction.', exRu: 'Он не хотел выглядеть как турист — но у него был путеводитель, фотоаппарат и полное отсутствие ориентации.' },
        { num: 632, word: 'local',       tr: '[ˈləʊkəl]',        ru: 'местный; местный житель',     ex: 'She always asks locals where to eat — better results than any app.',                 exRu: 'Она всегда спрашивает местных, где поесть — результаты лучше, чем у любого приложения.' },
        { num: 633, word: 'abroad',      tr: '[əˈbrɔːd]',        ru: 'за рубежом; за границу',      ex: 'He had never lived abroad before — the first month was hard, the second was interesting.', exRu: 'Прежде он никогда не жил за границей — первый месяц был тяжёлым, второй — интересным.' },
        { num: 634, word: 'return',      tr: '[rɪˈtɜːn]',        ru: 'возвращение; возвращаться; обратный', ex: 'A return ticket is cheaper if you book both ways together.',              exRu: 'Обратный билет дешевле, если бронировать оба направления вместе.' },
        { num: 635, word: 'pack',        tr: '[pæk]',            ru: 'паковать(ся); складывать чемодан', ex: 'She packs the night before — never the morning of.',                        exRu: 'Она складывает чемодан накануне вечером — никогда не утром в день отъезда.' },
        { num: 636, word: 'guide',       tr: '[ɡaɪd]',           ru: 'гид; путеводитель; руководить', ex: 'Their guide knew the city from childhood — every story was personal.',          exRu: 'Их гид знал город с детства — каждая история была личной.' },
      ],
      note: {
        title: 'trip / travel / journey; luggage — неисчисляемое; arrive in vs arrive at',
        lines: [
          'travel — деятельность в целом, неисч.: She loves travel. / He travels a lot. Также глагол.',
          'trip — конкретная поездка, кратковременная: a business trip, a day trip. Считается: two trips.',
          'journey — сам процесс пути из A в B: a long journey, the journey home. Считается: a five-hour journey.',
          'luggage — неисчисляемое: a piece of luggage, some luggage. Нельзя: a luggage, two luggages.',
          'arrive in + город/страна: She arrived in Paris. arrive at + конкретное место: He arrived at the hotel. Нельзя: arrive to.',
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
        { num: 1,  en: 'She has been travelling for three months — no fixed plan, no return ticket.',                         ru: 'Она путешествует уже три месяца — без чёткого плана, без обратного билета.', note: '' },
        { num: 2,  en: 'It was a short trip — four days, two cities, one very good meal.',                                    ru: 'Это была короткая поездка — четыре дня, два города, один очень хороший ужин.', note: '' },
        { num: 3,  en: 'The journey by train took seven hours — but the view was worth every minute.',                        ru: 'Путь на поезде занял семь часов — но вид из окна стоил каждой минуты.', note: '' },
        { num: 4,  en: 'Her flight was cancelled — she spent the night at the airport and arrived a day late.',               ru: 'Её рейс отменили — она провела ночь в аэропорту и прибыла на день позже.', note: '' },
        { num: 5,  en: 'He forgot his passport at home — they turned the car around forty kilometres from the airport.',      ru: 'Он забыл паспорт дома — они развернулись в сорока километрах от аэропорта.', note: '' },
        { num: 6,  en: 'She packed light — one bag, everything in it, nothing unnecessary.',                                  ru: 'Она упаковалась налегке — одна сумка, всё в ней, ничего лишнего.', note: '' },
        { num: 7,  en: 'The hotel room was small — but clean, quiet and had a window onto the street.',                       ru: 'Номер в отеле был маленьким — зато чистым, тихим и с окном на улицу.', note: '' },
        { num: 8,  en: 'He booked the train tickets the week before — the last seats in the quiet carriage.',                 ru: 'Он купил билеты на поезд за неделю — последние места в тихом вагоне.', note: 'carriage — вагон' },
        { num: 9,  en: 'They arrived at the border at night — the queue moved slowly but steadily.',                          ru: 'Они прибыли к границе ночью — очередь двигалась медленно, но без остановок.', note: '' },
        { num: 10, en: 'At customs he declared everything he had — it made the process much faster.',                         ru: 'На таможне он задекларировал всё, что имел, — это значительно ускорило процедуру.', note: 'declared — задекларировал' },
        { num: 11, en: 'She chose a destination she had never heard of — that was the whole point.',                          ru: 'Она выбрала место, о котором никогда не слышала, — именно в этом и был смысл.', note: '' },
        { num: 12, en: 'The local man drew them a map on a napkin — it was more accurate than Google.',                       ru: 'Местный житель нарисовал им карту на салфетке — она оказалась точнее, чем Google.', note: '' },
        { num: 13, en: 'He had lived abroad for two years when he finally felt at home there.',                               ru: 'Он жил за границей уже два года, когда наконец почувствовал себя там как дома.', note: '' },
        { num: 14, en: 'Their guide told them to ignore the tourist menu and ask for what the kitchen actually makes.',       ru: 'Их гид посоветовал игнорировать туристическое меню и спрашивать, что кухня готовит на самом деле.', note: 'ignore — игнорировать' },
        { num: 15, en: 'She bought a return ticket but never used the second half — she decided to stay.',                    ru: 'Она купила билет туда-обратно, но так и не воспользовалась второй половиной — решила остаться.', note: '' },
      ],
      note: {
        title: 'have been to vs have gone to',
        lines: [
          'have been to — побывал и вернулся: She has been to Brazil. — Она была в Бразилии (и уже дома).',
          'have gone to — уехал и ещё там: He has gone to Brazil. — Он уехал в Бразилию (его сейчас нет здесь).',
          'Have you ever been to…? — Ты когда-нибудь бывал в…? → Yes, I went there in 2019. (Past Simple с конкретным временем)',
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
        'Marc had a plan. He always had a plan. Three days in Lisbon, four in Porto, one night in Sintra. Printed maps, booked hotels, reserved restaurants. His friends called him a "professional tourist."',
        'On the second day in Lisbon, his bag was stolen. Passport, cash, one of his two cameras. Not the good one — which was lucky — but his backup battery, his printed itinerary and his notebook.',
        'He spent three hours at the police station and another two at the embassy. His Lisbon schedule was gone. He had no printed maps, no restaurant reservations, no plan.',
        'He walked. He had the city and his feet and a phone with twelve percent battery. He stopped when something looked interesting. He ate where locals ate. He got lost in Alfama and found a bar with no sign where a man played guitar very quietly and nobody seemed to want to leave.',
        'He didn\'t make it to Porto. He didn\'t see Sintra.',
        'He stayed in Lisbon an extra day. Then another.',
        'On the train home, he tried to write down what he had done. He couldn\'t quite remember the order. But he remembered the bar, the guitar, the feeling of not knowing what came next.',
        'He decided he liked that feeling.',
      ],
      translation: [
        'У Марка был план. У него всегда был план. Три дня в Лиссабоне, четыре в Порту, одна ночь в Синтре. Распечатанные карты, забронированные отели, зарезервированные рестораны. Друзья называли его «профессиональным туристом».',
        'На второй день в Лиссабоне у него украли сумку. Паспорт, наличные, одна из двух камер. Не основная — что было удачей, — но резервный аккумулятор, распечатанный маршрут и блокнот.',
        'Он провёл три часа в полицейском участке и ещё два в посольстве. Его лиссабонский план рухнул. Распечатанных карт нет, брони в ресторанах нет, плана нет.',
        'Он пошёл пешком. У него был город, его ноги и телефон с двенадцатью процентами заряда. Он останавливался, когда что-то казалось интересным. Ел там, где едят местные. Заблудился в Алфаме и нашёл бар без вывески, где мужчина очень тихо играл на гитаре, и никто не хотел уходить.',
        'До Порту он не добрался. Синтру не увидел.',
        'Он остался в Лиссабоне ещё на один день. Потом ещё на один.',
        'В поезде домой он попытался записать, что́ он делал. Вспомнить порядок не получалось. Но он помнил бар, гитару, ощущение незнания того, что будет дальше.',
        'Он решил, что ему нравится это ощущение.',
      ],
      vocab: [
        { word: 'itinerary',    tr: '[aɪˈtɪnərəri]',  ru: 'маршрут; план поездки' },
        { word: 'embassy',      tr: '[ˈembəsi]',       ru: 'посольство' },
        { word: 'neighbourhood', tr: '[ˈneɪbəhʊd]',   ru: 'квартал; район' },
        { word: 'backup',       tr: '[ˈbækʌp]',        ru: 'резервный; запасной' },
        { word: 'tangled',      tr: '[ˈtæŋɡəld]',      ru: 'запутанный; лабиринтный' },
        { word: 'steep',        tr: '[stiːp]',          ru: 'крутой (о подъёме)' },
        { word: 'reserved',     tr: '[rɪˈzɜːvd]',      ru: 'зарезервированный; забронированный' },
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
          sentence:    'go on a trip / book a flight / check in / go through customs / board a plane / travel light',
          schema:      'Глагольные конструкции о путешествии.',
          explanation: 'go on a trip / journey — отправиться в поездку. book a flight / hotel — забронировать рейс/отель. check in (to a hotel) — заселиться в отель. check out (of a hotel) — выселиться. go through customs — пройти таможню. board a plane / train — сесть на самолёт/поезд. land (at an airport) — приземлиться. get lost — заблудиться. travel light — путешествовать налегке.',
          pattern:     'Verb + [предлог/объект].',
          examples:    ['She checked in to the hotel at noon.', 'They went through customs with no problems.', 'He always travels light — one bag, no checked luggage.'],
        },
        {
          sentence:    'Have you ever been to Japan? — Yes, I went there in 2019.',
          schema:      'Past Simple vs Present Perfect в рассказах о путешествии.',
          explanation: 'Have you ever been to…? — опыт без конкретного времени → Present Perfect. Yes, I went there in 2019. — конкретное время → Past Simple. I have visited twelve countries. — опыт в целом → Present Perfect. Last summer I travelled through Italy. — конкретное прошлое → Past Simple.',
          pattern:     'Опыт (ever/never) → Present Perfect. Конкретная дата/период → Past Simple.',
          examples:    ['Have you ever been to Japan?', 'She has been to twenty countries.', 'Last year he travelled across Europe by train.'],
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
            'The best trip I have ever taken was…',
            'When I travel, I always pack…',
            'I prefer travelling by… because…',
            'One place I would like to visit is… because…',
            'Living abroad would be… for me because…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'What was Marc\'s original plan, and what happened on the second day?',         hint: 'Каков был первоначальный план Марка и что случилось на второй день?' },
            { q: 'What did he do after losing his bag?',                                          hint: 'Что он делал после потери сумки?' },
            { q: 'How did he explore Lisbon without his printed maps?',                           hint: 'Как он изучал Лиссабон без распечатанных карт?' },
            { q: 'What did he find in Alfama?',                                                   hint: 'Что он нашёл в Алфаме?' },
            { q: 'What did he realise on the train home?',                                        hint: 'Что он понял в поезде домой?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Она забронировала отель за два месяца вперёд — все номера с видом на море уже разобрали.', en: 'She booked the hotel two months in advance — all the rooms with a sea view were already taken.' },
            { ru: 'Его рейс был задержан на три часа, но он всё равно успел на стыковку.',                   en: 'His flight was delayed by three hours, but he still made his connection.' },
            { ru: 'Она путешествовала налегке — один рюкзак, никакого чемодана.',                            en: 'She travelled light — one backpack, no suitcase.' },
            { ru: 'Местные жители посоветовали им ресторан без вывески в переулке.',                         en: 'The locals recommended a restaurant with no sign in a side street.' },
            { ru: 'Ты когда-нибудь жил за границей? — Да, два года в Германии.',                             en: 'Have you ever lived abroad? — Yes, two years in Germany.' },
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
            { sentence: 'She went on a business ___ to Berlin — three days, two meetings, one cancelled flight.',   answer: 'trip' },
            { sentence: 'The ___ from Moscow to Vladivostok takes about six days by train.',                       answer: 'journey' },
            { sentence: 'He forgot to pack his ___ — they turned back at the airport.',                            answer: 'passport' },
            { sentence: 'She always travels with carry-on ___ only — faster and simpler.',                         answer: 'luggage' },
            { sentence: 'They ___ the hotel online two months in advance.',                                        answer: 'booked' },
            { sentence: 'The plane ___ at seven in the morning — they left the house at four.',                    answer: 'departs' },
            { sentence: 'She asked a ___ for directions — much better than a map app.',                            answer: 'local' },
            { sentence: 'He had never been ___ before — this was his first trip outside his country.',             answer: 'abroad' },
            { sentence: 'At ___ she was asked to declare everything over the limit.',                              answer: 'customs' },
            { sentence: 'Their ___ spoke three languages and knew every street by name.',                          answer: 'guide' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'She got to the hotel at midnight.',      rephrased: 'She arrived at the hotel at midnight.' },
            { original: 'He left the country.',                   rephrased: 'He went abroad.' },
            { original: 'She reserved the tickets earlier.',      rephrased: 'She booked the tickets in advance.' },
            { original: 'They moved through the border checkpoint.', rephrased: 'They crossed the border.' },
            { original: 'He came back from his trip.',            rephrased: 'He returned from his trip.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            'Anna didn\'t like moving fast. She took the train when she could, even if it took longer. She preferred arriving tired from looking out of windows rather than from airport queues.',
            'She had been travelling for two weeks when she reached a small town she hadn\'t planned to stop in. The train was delayed for forty minutes. She got off to find a coffee. She found a market instead.',
            'The market was small — a dozen stalls, mostly food. A woman was selling jars of something dark and unnamed. Anna pointed. The woman opened one and held it up. It smelled of something between honey and smoke.',
            'She bought two jars. She had no idea what they were.',
            'She missed the next train too. It didn\'t feel like missing anything.',
            'She stayed two nights in that town. When she finally boarded the train south, her bag was slightly heavier — two mystery jars, a notebook and a postcard she had found but never sent.',
            'She wasn\'t sure where she was going next. She looked at the map and pointed.',
          ],
          translation: [
            'Анна не любила двигаться быстро. Она ездила на поезде, когда могла, — даже если это занимало дольше. Она предпочитала приезжать уставшей от смотрения в окно, а не от очередей в аэропорту.',
            'Она путешествовала уже две недели, когда добралась до маленького городка, в котором не планировала останавливаться. Поезд задержали на сорок минут. Она вышла, чтобы найти кофе. Вместо этого нашла рынок.',
            'Рынок был небольшим — дюжина лотков, в основном еда. Женщина продавала банки с чем-то тёмным и без подписи. Анна указала пальцем. Женщина открыла одну и поднесла. Пахло чем-то средним между мёдом и дымом.',
            'Она купила две банки. Понятия не имела, что это.',
            'Следующий поезд она тоже пропустила. Это не ощущалось как потеря.',
            'Она провела в этом городке две ночи. Когда она наконец садилась в поезд на юг, её сумка была чуть тяжелее — две таинственные банки, блокнот и открытка, которую она нашла, но так и не отправила.',
            'Куда она едет дальше, она не была уверена. Она посмотрела на карту и указала пальцем.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      33,
    title:   'Здоровье и самочувствие',
    preview: ['feel, pain, hurt, ill, sick, fever', 'cough, cold, doctor, medicine, symptom, treatment', 'recover, rest, healthy, fit, appointment, prescription'],
    tip:     'Опиши своё последнее путешествие — или мечту о путешествии — в пяти предложениях по-английски. Используй: trip, arrive, book, luggage, destination.',
  },
}
