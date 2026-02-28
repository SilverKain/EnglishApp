import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ConceptPage from './pages/ConceptPage'
import LevelPage from './pages/LevelPage'
import ModulePage from './pages/ModulePage'
import QuizPage from './pages/QuizPage'
import { module01 } from './data/modules/module01'
import { module02 } from './data/modules/module02'
import { module03 } from './data/modules/module03'
import { module04 } from './data/modules/module04'
import { module05 } from './data/modules/module05'

const M1_PATH = '/level-1/module/1'
const M1_QUIZ = '/level-1/module/1/quiz'
const M2_PATH = '/level-1/module/2'
const M2_QUIZ = '/level-1/module/2/quiz'
const M3_PATH = '/level-1/module/3'
const M3_QUIZ = '/level-1/module/3/quiz'
const M4_PATH = '/level-1/module/4'
const M4_QUIZ = '/level-1/module/4/quiz'
const M5_PATH = '/level-1/module/5'
const M5_QUIZ = '/level-1/module/5/quiz'

function App() {
  return (
    <BrowserRouter basename="/EnglishApp">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/level-1" element={<LevelPage levelId="level-1" />} />
        <Route path="/level-2" element={<LevelPage levelId="level-2" />} />
        <Route path="/level-3" element={<LevelPage levelId="level-3" />} />
        <Route path={M1_PATH} element={<ModulePage moduleData={module01} backPath="/level-1" quizPath={M1_QUIZ} />} />
        <Route path={M1_QUIZ} element={<QuizPage   moduleData={module01} backPath={M1_PATH} />} />
        <Route path={M2_PATH} element={<ModulePage moduleData={module02} backPath="/level-1" quizPath={M2_QUIZ} />} />
        <Route path={M2_QUIZ} element={<QuizPage   moduleData={module02} backPath={M2_PATH} />} />
        <Route path={M3_PATH} element={<ModulePage moduleData={module03} backPath="/level-1" quizPath={M3_QUIZ} />} />
        <Route path={M3_QUIZ} element={<QuizPage   moduleData={module03} backPath={M3_PATH} />} />
        <Route path={M4_PATH} element={<ModulePage moduleData={module04} backPath="/level-1" quizPath={M4_QUIZ} />} />
        <Route path={M4_QUIZ} element={<QuizPage   moduleData={module04} backPath={M4_PATH} />} />
        <Route path={M5_PATH} element={<ModulePage moduleData={module05} backPath="/level-1" quizPath={M5_QUIZ} />} />
        <Route path={M5_QUIZ} element={<QuizPage   moduleData={module05} backPath={M5_PATH} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
