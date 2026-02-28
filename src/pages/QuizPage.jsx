import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { generateQuiz, calcMastery } from '../utils/quizGenerator'
import { useQuizResults } from '../hooks/useQuizResults'
import { useVocabulary } from '../hooks/useVocabulary'
import styles from './QuizPage.module.css'

// ─── Intro screen ─────────────────────────────────────────────────────────────

function IntroScreen({ moduleData, prevResult, onStart }) {
  const words = moduleData.blocks.find((b) => b.type === 'word-list')?.words || []
  return (
    <div className={styles.intro}>
      <div className={styles.introIcon}>🎯</div>
      <h1 className={styles.introTitle}>Тест по модулю {moduleData.id}</h1>
      <p className={styles.introSub}>{moduleData.title}</p>

      <div className={styles.introStats}>
        <div className={styles.introStat}>
          <span className={styles.introStatNum}>{words.length}</span>
          <span className={styles.introStatLbl}>слов</span>
        </div>
        <div className={styles.introStatDiv} />
        <div className={styles.introStat}>
          <span className={styles.introStatNum}>{words.length * 2}</span>
          <span className={styles.introStatLbl}>вопросов</span>
        </div>
        <div className={styles.introStatDiv} />
        <div className={styles.introStat}>
          <span className={styles.introStatNum}>2</span>
          <span className={styles.introStatLbl}>типа</span>
        </div>
      </div>

      <div className={styles.introTypes}>
        <div className={styles.introType}>
          <span className={styles.introTypeBadge} style={{ background: '#6366f133', color: '#818cf8' }}>Перевод</span>
          <span className={styles.introTypeDesc}>Слово по-английски → выбери русский перевод</span>
        </div>
        <div className={styles.introType}>
          <span className={styles.introTypeBadge} style={{ background: '#10b98133', color: '#34d399' }}>Контекст</span>
          <span className={styles.introTypeDesc}>Русский пример → найди нужное английское слово</span>
        </div>
      </div>

      {prevResult && (
        <div className={styles.prevResult}>
          <span className={styles.prevResultLabel}>Прошлый результат:</span>
          <span
            className={styles.prevResultPct}
            style={{ color: pctColor(prevResult.percent) }}
          >
            {prevResult.percent}%
          </span>
          <span className={styles.prevResultDetail}>
            ({prevResult.masteredCount ?? prevResult.learnedCount}/{prevResult.totalWords} слов)
          </span>
        </div>
      )}

      <button className={styles.startBtn} onClick={onStart}>
        {prevResult ? 'Пройти ещё раз' : 'Начать тест'}
      </button>
    </div>
  )
}

// ─── Question screen ──────────────────────────────────────────────────────────

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
          <div className={styles.qProgressFill} style={{ width: `${((idx + 1) / total) * 100}%` }} />
        </div>
        <span className={styles.qProgressLabel}>{idx + 1} / {total}</span>
      </div>

      {/* Type badge */}
      <div className={styles.qType}>
        {question.type === 'en-ru' ? (
          <span className={styles.qTypeBadge} style={{ background: '#6366f133', color: '#818cf8' }}>Перевод</span>
        ) : (
          <span className={styles.qTypeBadge} style={{ background: '#10b98133', color: '#34d399' }}>Контекст</span>
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
            <span>❌ Правильный ответ: <strong>{question.correct}</strong></span>
          )}
          {question.type === 'context' && (
            <span className={styles.feedbackHint}>
              {question.contextEn}
            </span>
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

// ─── Results screen ───────────────────────────────────────────────────────────

function pctColor(pct) {
  if (pct >= 80) return '#4ade80'
  if (pct >= 50) return '#facc15'
  return '#f87171'
}

function ResultsScreen({ words, answers, moduleData, onRetake, onBack }) {
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

      {/* Word-by-word breakdown */}
      <div className={styles.resTable}>
        <div className={styles.resTableHead}>
          <span>Слово</span>
          <span>Перевод</span>
          <span>Контекст</span>
          <span>Итог</span>
        </div>
        {wordResults.map(({ word, enRu, ctx, mastered }) => (
          <div key={word.num} className={`${styles.resRow} ${mastered ? styles.resRowOk : styles.resRowBad}`}>
            <span className={styles.resWord}>{word.word}</span>
            <span>{enRu == null ? '—' : enRu ? '✅' : '❌'}</span>
            <span>{ctx == null ? '—' : ctx ? '✅' : '❌'}</span>
            <span className={styles.resMark}>{mastered ? '⭐' : '○'}</span>
          </div>
        ))}
      </div>

      <div className={styles.resActions}>
        <button className={styles.retakeBtn} onClick={onRetake}>
          🔄 Пройти ещё раз
        </button>
        <button className={styles.backBtn} onClick={onBack}>
          ← К модулю
        </button>
      </div>
    </div>
  )
}

// ─── Main QuizPage ────────────────────────────────────────────────────────────

function QuizPage({ moduleData, backPath }) {
  const navigate = useNavigate()
  const { results, saveResult } = useQuizResults()
  const { addWordsToVocab } = useVocabulary()

  const words = moduleData.blocks.find((b) => b.type === 'word-list')?.words || []
  const prevResult = results[moduleData.id] || null

  const [phase, setPhase] = useState('intro')       // 'intro' | 'quiz' | 'results'
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})         // { questionId: boolean }

  const startQuiz = useCallback(() => {
    setQuestions(generateQuiz(words))
    setCurrentIdx(0)
    setAnswers({})
    setPhase('quiz')
  }, [words])

  const handleAnswer = useCallback((qId, correct) => {
    setAnswers((prev) => ({ ...prev, [qId]: correct }))
  }, [])

  const handleNext = useCallback(() => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((i) => i + 1)
    } else {
      // Save results & show results screen
      setPhase('results')
      setAnswers((prev) => {
        // Add words that were NOT mastered to personal vocabulary
        const unmasteredWords = words.filter(
          (w) => prev[`${w.num}-en-ru`] !== true || prev[`${w.num}-context`] !== true
        )
        if (unmasteredWords.length > 0) {
          addWordsToVocab(unmasteredWords)
        }
        const { masteredCount, totalWords, percent } = calcMastery(words, prev)
        const correctAnswers = Object.values(prev).filter(Boolean).length
        saveResult(moduleData.id, {
          masteredCount,
          learnedCount: masteredCount,
          totalWords,
          percent,
          score: correctAnswers,
          total: questions.length,
        })
        return prev
      })
    }
  }, [currentIdx, questions.length, words, moduleData.id, saveResult, addWordsToVocab])

  const handleRetake = useCallback(() => {
    startQuiz()
    setPhase('quiz')
  }, [startQuiz])

  return (
    <PageLayout backLabel="← К модулю" backTo={backPath || '/level-1'}>
      <div className={styles.quizWrap}>

        {phase === 'intro' && (
          <IntroScreen
            moduleData={moduleData}
            prevResult={prevResult}
            onStart={startQuiz}
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
            words={words}
            answers={answers}
            moduleData={moduleData}
            onRetake={() => { startQuiz(); setPhase('quiz') }}
            onBack={() => navigate(backPath || '/level-1')}
          />
        )}

      </div>
    </PageLayout>
  )
}

export default QuizPage
