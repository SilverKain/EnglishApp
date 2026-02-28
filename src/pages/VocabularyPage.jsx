import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { generateQuiz, calcMastery } from '../utils/quizGenerator'
import { useVocabulary } from '../hooks/useVocabulary'
import styles from './VocabularyPage.module.css'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function pctColor(pct) {
  if (pct >= 80) return '#4ade80'
  if (pct >= 50) return '#facc15'
  return '#f87171'
}

// ─── Word List Screen ─────────────────────────────────────────────────────────

function WordListScreen({ words, onStart, onClear }) {
  const [confirmClear, setConfirmClear] = useState(false)

  if (words.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>🎉</div>
        <h2 className={styles.emptyTitle}>Словарь пуст!</h2>
        <p className={styles.emptySub}>
          Слова, которые вызывают затруднения, будут появляться здесь после тестов.
        </p>
      </div>
    )
  }

  return (
    <div className={styles.listScreen}>
      <div className={styles.listHeader}>
        <div className={styles.listIcon}>📚</div>
        <h1 className={styles.listTitle}>Словарь</h1>
        <p className={styles.listSub}>
          {words.length} {wordCountLabel(words.length)} для повторения
        </p>
      </div>

      <div className={styles.wordTable}>
        <div className={styles.wordTableHead}>
          <span>#</span>
          <span>Слово</span>
          <span>Транскрипция</span>
          <span>Перевод</span>
        </div>
        {words.map((w) => (
          <div key={w.num} className={styles.wordRow}>
            <span className={styles.wordNum}>{w.num}</span>
            <span className={styles.wordEn}>{w.word}</span>
            <span className={styles.wordTr}>{w.tr}</span>
            <span className={styles.wordRu}>{w.ru}</span>
          </div>
        ))}
      </div>

      <div className={styles.listActions}>
        <button className={styles.startBtn} onClick={onStart}>
          📝 Запомнить слова
        </button>
        {confirmClear ? (
          <div className={styles.confirmRow}>
            <span className={styles.confirmText}>Очистить весь словарь?</span>
            <button className={styles.confirmYes} onClick={() => { onClear(); setConfirmClear(false) }}>
              Да, очистить
            </button>
            <button className={styles.confirmNo} onClick={() => setConfirmClear(false)}>
              Отмена
            </button>
          </div>
        ) : (
          <button className={styles.clearBtn} onClick={() => setConfirmClear(true)}>
            🗑 Очистить словарь
          </button>
        )}
      </div>
    </div>
  )
}

function wordCountLabel(n) {
  if (n % 100 >= 11 && n % 100 <= 19) return 'слов'
  const r = n % 10
  if (r === 1) return 'слово'
  if (r >= 2 && r <= 4) return 'слова'
  return 'слов'
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({ question, total, idx, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (opt) => {
    if (revealed) return
    setSelected(opt)
    setRevealed(true)
    onAnswer(question.id, opt === question.correct)
  }

  const isCorrect = selected === question.correct

  return (
    <div className={styles.questionWrap}>
      {/* Progress */}
      <div className={styles.qProgress}>
        <div className={styles.qProgressBar}>
          <div
            className={styles.qProgressFill}
            style={{ width: `${((idx + 1) / total) * 100}%` }}
          />
        </div>
        <span className={styles.qProgressLabel}>{idx + 1} / {total}</span>
      </div>

      {/* Type badge */}
      <div className={styles.qType}>
        {question.type === 'en-ru' ? (
          <span className={styles.qTypeBadge} style={{ background: '#6366f133', color: '#818cf8' }}>
            Перевод
          </span>
        ) : (
          <span className={styles.qTypeBadge} style={{ background: '#10b98133', color: '#34d399' }}>
            Контекст
          </span>
        )}
      </div>

      {/* Question body */}
      <div className={styles.qBody}>
        {question.type === 'en-ru' ? (
          <>
            <p className={styles.qPrompt}>{question.prompt}</p>
            <div className={styles.qWordCard}>
              <span className={styles.qWord}>{question.questionWord}</span>
              <span className={styles.qTr}>{question.transcription}</span>
            </div>
          </>
        ) : (
          <>
            <p className={styles.qPrompt}>{question.prompt}</p>
            <div className={styles.qContextCard}>
              <span className={styles.qContextRu}>«{question.contextRu}»</span>
            </div>
          </>
        )}
      </div>

      {/* Options */}
      <div className={styles.options}>
        {question.options.map((opt) => {
          let cls = styles.option
          if (revealed) {
            if (opt === question.correct) cls += ' ' + styles.optCorrect
            else if (opt === selected) cls += ' ' + styles.optWrong
            else cls += ' ' + styles.optDim
          }
          return (
            <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
              {opt}
            </button>
          )
        })}
      </div>

      {/* Feedback */}
      {revealed && (
        <div className={`${styles.feedback} ${isCorrect ? styles.feedbackOk : styles.feedbackBad}`}>
          {isCorrect ? (
            <span>✅ Верно!</span>
          ) : (
            <span>
              ❌ Правильный ответ: <strong>{question.correct}</strong>
            </span>
          )}
          {question.type === 'context' && (
            <span className={styles.feedbackHint}>{question.contextEn}</span>
          )}
        </div>
      )}

      {revealed && (
        <button className={styles.nextBtn} onClick={onNext}>
          {idx + 1 < total ? 'Следующий вопрос →' : 'Показать результаты'}
        </button>
      )}
    </div>
  )
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function ResultsScreen({ words, answers, removedCount, onRetake, onBack }) {
  const { masteredCount, totalWords, percent } = calcMastery(words, answers)
  const correctAnswers = Object.values(answers).filter(Boolean).length
  const totalAnswers = Object.keys(answers).length

  const wordResults = words.map((w) => ({
    word: w,
    enRu: answers[`${w.num}-en-ru`],
    ctx: answers[`${w.num}-context`],
    mastered: answers[`${w.num}-en-ru`] === true && answers[`${w.num}-context`] === true,
  }))

  return (
    <div className={styles.results}>
      <div className={styles.resBigPct} style={{ color: pctColor(percent) }}>
        {percent}%
      </div>
      <p className={styles.resSubtitle}>
        {masteredCount} из {totalWords} слов усвоено
      </p>
      <p className={styles.resAnswers}>
        Правильных ответов: {correctAnswers} / {totalAnswers}
      </p>

      {removedCount > 0 && (
        <div className={styles.resRemovedBadge}>
          🎉 {removedCount} {wordCountLabel(removedCount)} удалено из словаря!
        </div>
      )}

      {/* Word-by-word breakdown */}
      <div className={styles.resTable}>
        <div className={styles.resTableHead}>
          <span>Слово</span>
          <span>Перевод</span>
          <span>Контекст</span>
          <span>Итог</span>
        </div>
        {wordResults.map(({ word, enRu, ctx, mastered }) => (
          <div
            key={word.num}
            className={`${styles.resRow} ${mastered ? styles.resRowOk : styles.resRowBad}`}
          >
            <span className={styles.resWord}>{word.word}</span>
            <span>{enRu == null ? '—' : enRu ? '✅' : '❌'}</span>
            <span>{ctx == null ? '—' : ctx ? '✅' : '❌'}</span>
            <span className={styles.resMark}>{mastered ? '⭐' : '○'}</span>
          </div>
        ))}
      </div>

      <div className={styles.resActions}>
        <button className={styles.retakeBtn} onClick={onRetake}>
          🔄 Повторить
        </button>
        <button className={styles.backBtn} onClick={onBack}>
          ← К словарю
        </button>
      </div>
    </div>
  )
}

// ─── Main VocabularyPage ──────────────────────────────────────────────────────

function VocabularyPage() {
  const navigate = useNavigate()
  const { vocabulary, removeMasteredWords } = useVocabulary()

  const [phase, setPhase] = useState('list')   // 'list' | 'quiz' | 'results'
  const [questions, setQuestions] = useState([])
  const [quizWords, setQuizWords] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [removedCount, setRemovedCount] = useState(0)

  const startQuiz = useCallback(() => {
    const words = [...vocabulary]
    setQuizWords(words)
    setQuestions(generateQuiz(words))
    setCurrentIdx(0)
    setAnswers({})
    setRemovedCount(0)
    setPhase('quiz')
  }, [vocabulary])

  const handleAnswer = useCallback((qId, correct) => {
    setAnswers((prev) => ({ ...prev, [qId]: correct }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((i) => i + 1)
    } else {
      // Compute mastered words and remove from vocabulary
      setAnswers((prev) => {
        const masteredWords = quizWords.filter(
          (w) => prev[`${w.num}-en-ru`] === true && prev[`${w.num}-context`] === true
        )
        if (masteredWords.length > 0) {
          removeMasteredWords(masteredWords.map((w) => w.num))
          setRemovedCount(masteredWords.length)
        }
        return prev
      })
      setPhase('results')
    }
  }, [currentIdx, questions.length, quizWords, removeMasteredWords])

  const handleClear = useCallback(() => {
    removeMasteredWords(vocabulary.map((w) => w.num))
  }, [vocabulary, removeMasteredWords])

  return (
    <PageLayout backLabel="← На главную" backTo="/">
      <div className={styles.wrap}>
        {phase === 'list' && (
          <WordListScreen
            words={vocabulary}
            onStart={startQuiz}
            onClear={handleClear}
          />
        )}

        {phase === 'quiz' && questions.length > 0 && (
          <QuestionScreen
            key={currentIdx}
            question={questions[currentIdx]}
            total={questions.length}
            idx={currentIdx}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {phase === 'results' && (
          <ResultsScreen
            words={quizWords}
            answers={answers}
            removedCount={removedCount}
            onRetake={startQuiz}
            onBack={() => setPhase('list')}
          />
        )}
      </div>
    </PageLayout>
  )
}

export default VocabularyPage
