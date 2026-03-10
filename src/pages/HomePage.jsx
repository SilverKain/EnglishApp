import { Link } from 'react-router-dom'
import { levels } from '../data/courseData'
import { useVocabulary } from '../hooks/useVocabulary'
import Header from '../components/Header'
import styles from './HomePage.module.css'

const navCards = [
  {
    path: '/concept',
    label: 'Концепция',
    description: 'Почему 3000 слов, как строится язык, принципы курса',
    icon: '📖',
    color: '#6366f1',
    accent: 'rgba(99,102,241,0.12)',
    border: 'rgba(99,102,241,0.3)',
  },
  ...levels.map((l) => ({
    path: l.path,
    label: `Содержание ${l.title}`,
    description: `${l.subtitle} · ${l.words} · ${l.totalModules} модулей`,
    icon: l.id === 'level-1' ? '🟢' : l.id === 'level-2' ? '🔵' : '🩷',
    color: l.color,
    accent: `${l.color}18`,
    border: `${l.color}44`,
  })),
]

function HomePage() {
  const { vocabulary } = useVocabulary()
  return (
    <div className={styles.page}>
      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>Курс английского языка</div>
          <h1 className={styles.heroTitle}>
            English <span className={styles.heroAccent}>3000</span>
          </h1>
          <p className={styles.heroSub}>
            3000 самых частотных слов — и ты поймёшь 85% того, что слышишь и читаешь.
            Без зубрёжки. Только живые тексты и практика.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3000</span>
              <span className={styles.statLabel}>слов</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>150</span>
              <span className={styles.statLabel}>модулей</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>уровня</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section id="contents" className={styles.nav}>
        <div className={styles.navInner}>
          <p className={styles.navHint}>Выбери раздел</p>
          <div className={styles.cards}>
            {navCards.map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className={styles.card}
                style={{
                  '--card-accent': card.accent,
                  '--card-border': card.border,
                  '--card-color': card.color,
                }}
              >
                <span className={styles.cardIcon}>{card.icon}</span>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>{card.label}</span>
                  <span className={styles.cardDesc}>{card.description}</span>
                </div>
                <span className={styles.cardArrow}>→</span>
              </Link>
            ))}

            {/* Vocabulary card */}
            <Link
              to="/vocabulary"
              className={styles.card}
              style={{
                '--card-accent': 'rgba(251,191,36,0.1)',
                '--card-border': 'rgba(251,191,36,0.35)',
                '--card-color': '#fbbf24',
              }}
            >
              <span className={styles.cardIcon}>📚</span>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>Словарь</span>
                <span className={styles.cardDesc}>
                  {vocabulary.length > 0
                    ? `${vocabulary.length} слов для повторения`
                    : 'Слова с ошибками в тестах'}
                </span>
              </div>
              {vocabulary.length > 0 && (
                <span className={styles.vocabBadge}>{vocabulary.length}</span>
              )}
              <span className={styles.cardArrow}>→</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>English 3000 — курс для тех, кто хочет реальную свободу в языке</p>
      </footer>
    </div>
  )
}

export default HomePage
