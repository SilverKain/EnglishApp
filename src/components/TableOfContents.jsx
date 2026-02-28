import { levels } from '../data/courseData'
import styles from './TableOfContents.module.css'

function TableOfContents() {
  return (
    <section id="contents" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>ЧАСТЬ 2</span>
          <h2 className={styles.sectionTitle}>Содержание курса</h2>
          <p className={styles.sectionSubtitle}>
            ~60 модулей · 3000 слов · три уровня
          </p>
        </div>

        <div className={styles.levels}>
          {levels.map((level) => (
            <div key={level.id} className={styles.level}>
              <div
                className={styles.levelHeader}
                style={{ borderColor: level.color }}
              >
                <div className={styles.levelLabel} style={{ color: level.color }}>
                  {level.title}
                </div>
                <div className={styles.levelSubtitle}>{level.subtitle}</div>
                <div className={styles.levelDesc}>{level.description}</div>
              </div>

              <div className={styles.modules}>
                {level.modules.map((mod) => (
                  <div
                    key={mod.id}
                    className={`${styles.moduleCard} ${mod.available ? styles.available : styles.locked}`}
                  >
                    <div className={styles.moduleNumber}>
                      {String(mod.id).padStart(2, '0')}
                    </div>
                    <div className={styles.moduleInfo}>
                      <div className={styles.moduleTitle}>{mod.title}</div>
                      <div className={styles.moduleMeta}>
                        <span className={styles.moduleWords}>
                          Слова {mod.words}
                        </span>
                        <span className={styles.moduleTopics}>{mod.topics}</span>
                      </div>
                    </div>
                    <div className={styles.moduleAction}>
                      {mod.available ? (
                        <button className={styles.btnStart}>Начать →</button>
                      ) : (
                        <span className={styles.comingSoon}>Скоро</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TableOfContents
