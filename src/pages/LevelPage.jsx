import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { levels } from '../data/courseData'
import { useReadModules } from '../hooks/useReadModules'
import { useQuizResults } from '../hooks/useQuizResults'
import styles from './LevelPage.module.css'

// Module paths (for levels with available content)
const MODULE_PATHS = {
  1:  '/level-1/module/1',
  2:  '/level-1/module/2',
  3:  '/level-1/module/3',
  4:  '/level-1/module/4',
  5:  '/level-1/module/5',
  6:  '/level-1/module/6',
  7:  '/level-1/module/7',
  8:  '/level-1/module/8',
  9:  '/level-1/module/9',
  10: '/level-1/module/10',
  11: '/level-1/module/11',
  12: '/level-1/module/12',
  13: '/level-1/module/13',
  14: '/level-1/module/14',
  15: '/level-1/module/15',
}

function quizPctColor(pct) {
  if (pct >= 80) return '#4ade80'
  if (pct >= 50) return '#facc15'
  return '#f87171'
}

function LevelPage({ levelId }) {
  const level = useMemo(() => levels.find((l) => l.id === levelId), [levelId])
  const { isRead, toggleRead } = useReadModules()
  const { results } = useQuizResults()

  if (!level) return null

  const readCount = level.modules.filter((m) => isRead(m.id)).length
  const progress = Math.round((readCount / level.totalModules) * 100)

  return (
    <PageLayout backLabel="← На главную">
      {/* Level header */}
      <div className={styles.levelHeader}>
        <span className={styles.badge} style={{ color: level.color, borderColor: `${level.color}44`, background: `${level.color}12` }}>
          {level.title}
        </span>
        <h1 className={styles.title}>{level.subtitle}</h1>
        <p className={styles.desc}>{level.description}</p>
      </div>

      {/* Meta + progress (full width, same as module list) */}
      <div className={styles.metaRow}>
        <div className={styles.metaItem}>
          <span className={styles.metaNum}>{level.totalModules}</span>
          <span className={styles.metaLabel}>модулей</span>
        </div>
        <div className={styles.metaDivider} />
        <div className={styles.metaItem}>
          <span className={styles.metaNum}>{level.words}</span>
          <span className={styles.metaLabel}>слов</span>
        </div>
        <div className={styles.metaDivider} />
        <div className={styles.metaItem}>
          <span className={styles.metaNum} style={{ color: level.color }}>{readCount}</span>
          <span className={styles.metaLabel}>прочитано</span>
        </div>
      </div>

      <div className={styles.progressRow}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%`, background: level.color }}
          />
        </div>
        <span className={styles.progressLabel}>{readCount} / {level.totalModules}</span>
      </div>

      {/* Module list */}
      <div className={styles.moduleList}>
        {level.modules.map((mod) => {
          const isAvailable = mod.status === 'ready'
          const read = isRead(mod.id)
          const modulePath = MODULE_PATHS[mod.id]

          const inner = (
            <>
              <span className={styles.modNum} style={isAvailable ? { color: level.color } : {}}>
                {String(mod.id).padStart(2, '0')}
              </span>
              <div className={styles.modInfo}>
                <span className={styles.modTitle}>{mod.title}</span>
                <span className={styles.modWords}>{mod.words}</span>
              </div>
              {isAvailable && (
                <>
                  {results[mod.id] != null && (
                    <span
                      className={styles.quizPct}
                      style={{ color: quizPctColor(results[mod.id].percent) }}
                      title={`Тест: ${results[mod.id].percent}% слов усвоено`}
                    >
                      {results[mod.id].percent}%
                    </span>
                  )}
                  <button
                    className={`${styles.readBtn} ${read ? styles.readBtnOn : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleRead(mod.id)
                    }}
                    title={read ? 'Нажми, чтобы снять отметку' : 'Отметить как прочитанный'}
                  >
                    {read ? '✅' : '○'}
                  </button>
                </>
              )}
              {!isAvailable && (
                <span className={styles.comingSoon}>Скоро</span>
              )}
            </>
          )

          if (isAvailable && modulePath) {
            return (
              <Link
                key={mod.id}
                to={modulePath}
                className={`${styles.moduleRow} ${styles.rowReady}`}
              >
                {inner}
              </Link>
            )
          }

          return (
            <div
              key={mod.id}
              className={`${styles.moduleRow} ${isAvailable ? styles.rowReady : styles.rowSoon}`}
            >
              {inner}
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}

export default LevelPage
