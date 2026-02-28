import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { useReadModules } from '../hooks/useReadModules'
import { useQuizResults } from '../hooks/useQuizResults'
import styles from './ModulePage.module.css'

// ─── Block renderers ────────────────────────────────────────────────────────

function WordListBlock({ block }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{block.title}</h2>

      {/* Desktop: таблица */}
      <div className={`${styles.tableOuter} ${styles.wordTableOuter}`}>
        <table className={styles.wordTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Слово</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th>Пример</th>
              <th>Перевод</th>
            </tr>
          </thead>
          <tbody>
            {block.words.map((w) => (
              <tr key={w.num}>
                <td className={styles.tdNum}>{w.num}</td>
                <td className={styles.tdWord}>{w.word}</td>
                <td className={styles.tdTr}>{w.tr}</td>
                <td className={styles.tdRu}>{w.ru}</td>
                <td className={styles.tdEx}>{w.ex}</td>
                <td className={styles.tdExRu}>{w.exRu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: карточки */}
      <div className={styles.wordCards}>
        {block.words.map((w) => (
          <div key={w.num} className={styles.wordCard}>
            <div className={styles.wordCardTop}>
              <span className={styles.wordCardNum}>{w.num}</span>
              <span className={styles.wordCardWord}>{w.word}</span>
              <span className={styles.wordCardTr}>{w.tr}</span>
            </div>
            <div className={styles.wordCardRu}>{w.ru}</div>
            <div className={styles.wordCardEx}>
              <span>{w.ex}</span>
              <span className={styles.wordCardExRu}>{w.exRu}</span>
            </div>
          </div>
        ))}
      </div>

      {block.note && (
        <div className={styles.note}>
          <strong>{block.note.title}:</strong>
          {block.note.lines.map((l, i) => <p key={i}>{l}</p>)}
        </div>
      )}
    </div>
  )
}

function SentencesBlock({ block }) {
  const [shownIdx, setShownIdx] = useState(new Set())
  const toggle = (i) =>
    setShownIdx((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{block.title}</h2>
      {block.intro && <p className={styles.intro}>{block.intro}</p>}
      <div className={styles.sentenceList}>
        {block.items.map((s) => (
          <div key={s.num} className={styles.sentenceItem} onClick={() => toggle(s.num)}>
            <span className={styles.sentNum}>{s.num}.</span>
            <div className={styles.sentBody}>
              <p className={styles.sentEn}>{s.en}</p>
              {shownIdx.has(s.num) && (
                <div className={styles.sentReveal}>
                  <p className={styles.sentRu}>{s.ru}</p>
                  {s.note && <p className={styles.sentNote}>{s.note}</p>}
                </div>
              )}
              {!shownIdx.has(s.num) && (
                <span className={styles.sentHint}>нажми, чтобы увидеть перевод</span>
              )}
            </div>
          </div>
        ))}
      </div>
      {block.note && (
        <div className={styles.note}>
          <strong>{block.note.title}:</strong>
          {block.note.lines.map((l, i) => <p key={i}>{l}</p>)}
        </div>
      )}
    </div>
  )
}

function MiniTextBlock({ block }) {
  const [showTranslation, setShowTranslation] = useState(false)
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{block.title}</h2>
      <h3 className={styles.textTitle}>{block.textTitle}</h3>

      <div className={styles.textCard}>
        <p className={styles.textLabel}>Оригинал</p>
        {block.original.map((p, i) => <p key={i} className={styles.textPara}>{p}</p>)}
      </div>

      <button
        className={styles.revealBtn}
        onClick={() => setShowTranslation((v) => !v)}
      >
        {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
      </button>

      {showTranslation && (
        <div className={`${styles.textCard} ${styles.textCardRu}`}>
          <p className={styles.textLabel}>Перевод</p>
          {block.translation.map((p, i) => <p key={i} className={styles.textPara}>{p}</p>)}
        </div>
      )}

      <div className={styles.vocabSection}>
        <p className={styles.vocabTitle}>Слова из текста, которые могут быть незнакомы:</p>
        <div className={styles.tableOuter}>
          <table className={styles.vocabTable}>
            <thead>
              <tr><th>Слово</th><th>Транскрипция</th><th>Перевод</th></tr>
            </thead>
            <tbody>
              {block.vocab.map((v, i) => (
                <tr key={i}>
                  <td className={styles.tdWord}>{v.word}</td>
                  <td className={styles.tdTr}>{v.tr}</td>
                  <td>{v.ru}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function StructureBlock({ block }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{block.title}</h2>
      {block.intro && <p className={styles.intro}>{block.intro}</p>}
      <div className={styles.structureList}>
        {block.items.map((item, i) => (
          <div key={i} className={styles.structureItem}>
            <div className={styles.structureSchema}>
              <code>{item.sentence}</code>
              <span className={styles.structureArrow}>{item.schema}</span>
            </div>
            <ul className={styles.structureExpl}>
              {item.explanation.map((e, j) => <li key={j}>{e}</li>)}
            </ul>
            {item.pattern && (
              <div className={styles.structurePattern}><code>{item.pattern}</code></div>
            )}
            {item.examples.length > 0 && (
              <ul className={styles.structureExamples}>
                {item.examples.map((ex, j) => <li key={j}>{ex}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function RevealItem({ children, answer }) {
  const [shown, setShown] = useState(false)
  return (
    <div className={styles.revealItem}>
      <div className={styles.revealQ}>{children}</div>
      <button className={styles.revealSmallBtn} onClick={() => setShown((v) => !v)}>
        {shown ? 'Скрыть' : 'Ответ'}
      </button>
      {shown && <div className={styles.revealAnswer}>{answer}</div>}
    </div>
  )
}

function ThinkingBlock({ block }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{block.title}</h2>
      {block.sections.map((sec, si) => (
        <div key={si} className={styles.thinkSection}>
          <h3 className={styles.thinkSubtitle}>{sec.subtitle}</h3>
          {sec.hint && <p className={styles.intro}>{sec.hint}</p>}

          {sec.type === 'continue' && (
            <ol className={styles.continueList}>
              {sec.items.map((item, i) => (
                <li key={i} className={styles.continueItem}>{item}</li>
              ))}
            </ol>
          )}

          {sec.type === 'questions' && (
            <div className={styles.questionList}>
              {sec.items.map((item, i) => (
                <div key={i} className={styles.questionItem}>
                  <span className={styles.qNum}>{i + 1}.</span>
                  <div>
                    <p className={styles.qEn}>{item.q}</p>
                    <p className={styles.qHint}>{item.hint}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {sec.type === 'translate' && (
            <div className={styles.translateList}>
              {sec.items.map((item, i) => (
                <RevealItem key={i} answer={item.en}>
                  <span className={styles.tNum}>{i + 1}.</span> {item.ru}
                </RevealItem>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ReviewBlock({ block }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{block.title}</h2>
      {block.sections.map((sec, si) => (
        <div key={si} className={styles.thinkSection}>
          <h3 className={styles.thinkSubtitle}>{sec.subtitle}</h3>
          {sec.hint && <p className={styles.intro}>{sec.hint}</p>}

          {sec.type === 'fill' && (
            <div className={styles.fillList}>
              {sec.items.map((item, i) => (
                <RevealItem key={i} answer={item.answer}>
                  <span className={styles.tNum}>{i + 1}.</span>{' '}
                  {item.sentence}{' '}
                  <span className={styles.fillOptions}>({item.options})</span>
                </RevealItem>
              ))}
            </div>
          )}

          {sec.type === 'rephrase' && (
            <div className={styles.rephraseList}>
              {sec.items.map((item, i) => (
                <RevealItem key={i} answer={item.answer}>
                  <span className={styles.tNum}>{i + 1}.</span> {item.task}
                </RevealItem>
              ))}
            </div>
          )}

          {sec.type === 'reading' && (
            <MiniReadingBlock sec={sec} />
          )}
        </div>
      ))}
    </div>
  )
}

function MiniReadingBlock({ sec }) {
  const [showTr, setShowTr] = useState(false)
  return (
    <>
      <div className={styles.textCard}>
        <p className={styles.textLabel}>{sec.textTitle}</p>
        {sec.original.map((p, i) => <p key={i} className={styles.textPara}>{p}</p>)}
      </div>
      <button className={styles.revealBtn} onClick={() => setShowTr((v) => !v)}>
        {showTr ? 'Скрыть перевод' : 'Показать перевод'}
      </button>
      {showTr && (
        <div className={`${styles.textCard} ${styles.textCardRu}`}>
          {sec.translation.map((p, i) => <p key={i} className={styles.textPara}>{p}</p>)}
        </div>
      )}
    </>
  )
}

// ─── Block dispatcher ───────────────────────────────────────────────────────

function renderBlock(block) {
  switch (block.type) {
    case 'word-list':  return <WordListBlock   key={block.id} block={block} />
    case 'sentences':  return <SentencesBlock  key={block.id} block={block} />
    case 'mini-text':  return <MiniTextBlock   key={block.id} block={block} />
    case 'structure':  return <StructureBlock  key={block.id} block={block} />
    case 'thinking':   return <ThinkingBlock   key={block.id} block={block} />
    case 'review':     return <ReviewBlock     key={block.id} block={block} />
    default: return null
  }
}

// ─── Main page ───────────────────────────────────────────────────────────────

function quizScoreColor(pct) {
  if (pct >= 80) return '#4ade80'
  if (pct >= 50) return '#facc15'
  return '#f87171'
}

function ModulePage({ moduleData, backPath, quizPath }) {
  const { isRead, toggleRead } = useReadModules()
  const { results } = useQuizResults()
  const navigate = useNavigate()
  const read = isRead(moduleData.id)
  const quizResult = results[moduleData.id] || null

  const handleMarkRead = () => {
    toggleRead(moduleData.id)
  }

  const handleFinish = () => {
    if (!read) toggleRead(moduleData.id)
    navigate(backPath || '/level-1')
  }

  return (
    <PageLayout backLabel="← К содержанию" backTo={backPath || '/level-1'}>
      {/* Module header */}
      <div className={styles.moduleHeader}>
        <div className={styles.moduleMeta}>
          <span className={styles.moduleLevel}>LEVEL 1</span>
          <span className={styles.moduleDot}>·</span>
          <span className={styles.moduleWords}>Слова {moduleData.words}</span>
        </div>
        <h1 className={styles.moduleTitle}>
          <span className={styles.moduleNum}>
            Модуль {String(moduleData.id).padStart(2, '0')}
          </span>
          {moduleData.title}
        </h1>
        <div className={styles.moduleStatus}>
          <button
            className={`${styles.readToggle} ${read ? styles.readToggleOn : ''}`}
            onClick={handleMarkRead}
          >
            {read ? '✅ Прочитан' : '○ Отметить как прочитанный'}
          </button>
        </div>
      </div>

      {/* Blocks */}
      <div className={styles.blocks}>
        {moduleData.blocks.map(renderBlock)}
      </div>

      {/* Next module */}
      {moduleData.next && (
        <div className={styles.nextBlock}>
          <p className={styles.nextLabel}>Что дальше</p>
          <p className={styles.nextTitle}>Модуль {moduleData.next.id} — {moduleData.next.title.replace(/^Модуль \d+ — /, '')}</p>
          <ul className={styles.nextPreview}>
            {moduleData.next.preview.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
          {moduleData.next.tip && (
            <div className={styles.tipBox}>
              <strong>Совет:</strong> {moduleData.next.tip}
            </div>
          )}
        </div>
      )}

      {/* Quiz + Finish buttons */}
      <div className={styles.finishWrap}>
        {quizPath && (
          <Link to={quizPath} className={styles.quizBtn}>
            🎯 Проверить знания{quizResult ? <span className={styles.quizScore} style={{ color: quizScoreColor(quizResult.percent) }}>&nbsp;{quizResult.percent}%</span> : null}
          </Link>
        )}
        <button className={styles.finishBtn} onClick={handleFinish}>
          {read ? '← Вернуться к содержанию' : '✅ Завершить модуль и отметить прочитанным'}
        </button>
      </div>
    </PageLayout>
  )
}

export default ModulePage
