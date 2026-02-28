import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ConceptPage from './pages/ConceptPage'
import LevelPage from './pages/LevelPage'
import ModulePage from './pages/ModulePage'
import QuizPage from './pages/QuizPage'
import VocabularyPage from './pages/VocabularyPage'
import { module01 } from './data/modules/module01'
import { module02 } from './data/modules/module02'
import { module03 } from './data/modules/module03'
import { module04 } from './data/modules/module04'
import { module05 } from './data/modules/module05'
import { module06 } from './data/modules/module06'
import { module07 } from './data/modules/module07'
import { module08 } from './data/modules/module08'
import { module09 } from './data/modules/module09'
import { module10 } from './data/modules/module10'
import { module11 } from './data/modules/module11'
import { module12 } from './data/modules/module12'
import { module13 } from './data/modules/module13'
import { module14 } from './data/modules/module14'
import { module15 } from './data/modules/module15'
import { module16 } from './data/modules/module16'
import { module17 } from './data/modules/module17'
import { module18 } from './data/modules/module18'
import { module19 } from './data/modules/module19'
import { module20 } from './data/modules/module20'

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
const M6_PATH = '/level-1/module/6'
const M6_QUIZ = '/level-1/module/6/quiz'
const M7_PATH = '/level-1/module/7'
const M7_QUIZ = '/level-1/module/7/quiz'
const M8_PATH = '/level-1/module/8'
const M8_QUIZ = '/level-1/module/8/quiz'
const M9_PATH = '/level-1/module/9'
const M9_QUIZ = '/level-1/module/9/quiz'
const M10_PATH = '/level-1/module/10'
const M10_QUIZ = '/level-1/module/10/quiz'
const M11_PATH = '/level-1/module/11'
const M11_QUIZ = '/level-1/module/11/quiz'
const M12_PATH = '/level-1/module/12'
const M12_QUIZ = '/level-1/module/12/quiz'
const M13_PATH = '/level-1/module/13'
const M13_QUIZ = '/level-1/module/13/quiz'
const M14_PATH = '/level-1/module/14'
const M14_QUIZ = '/level-1/module/14/quiz'
const M15_PATH = '/level-1/module/15'
const M15_QUIZ = '/level-1/module/15/quiz'
const M16_PATH = '/level-1/module/16'
const M16_QUIZ = '/level-1/module/16/quiz'
const M17_PATH = '/level-1/module/17'
const M17_QUIZ = '/level-1/module/17/quiz'
const M18_PATH = '/level-1/module/18'
const M18_QUIZ = '/level-1/module/18/quiz'
const M19_PATH = '/level-1/module/19'
const M19_QUIZ = '/level-1/module/19/quiz'
const M20_PATH = '/level-1/module/20'
const M20_QUIZ = '/level-1/module/20/quiz'

function App() {
  return (
    <BrowserRouter basename="/EnglishApp">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
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
        <Route path={M6_PATH} element={<ModulePage moduleData={module06} backPath="/level-1" quizPath={M6_QUIZ} />} />
        <Route path={M6_QUIZ} element={<QuizPage   moduleData={module06} backPath={M6_PATH} />} />
        <Route path={M7_PATH} element={<ModulePage moduleData={module07} backPath="/level-1" quizPath={M7_QUIZ} />} />
        <Route path={M7_QUIZ} element={<QuizPage   moduleData={module07} backPath={M7_PATH} />} />
        <Route path={M8_PATH} element={<ModulePage moduleData={module08} backPath="/level-1" quizPath={M8_QUIZ} />} />
        <Route path={M8_QUIZ} element={<QuizPage   moduleData={module08} backPath={M8_PATH} />} />
        <Route path={M9_PATH} element={<ModulePage moduleData={module09} backPath="/level-1" quizPath={M9_QUIZ} />} />
        <Route path={M9_QUIZ} element={<QuizPage   moduleData={module09} backPath={M9_PATH} />} />
        <Route path={M10_PATH} element={<ModulePage moduleData={module10} backPath="/level-1" quizPath={M10_QUIZ} />} />
        <Route path={M10_QUIZ} element={<QuizPage   moduleData={module10} backPath={M10_PATH} />} />
        <Route path={M11_PATH} element={<ModulePage moduleData={module11} backPath="/level-1" quizPath={M11_QUIZ} />} />
        <Route path={M11_QUIZ} element={<QuizPage   moduleData={module11} backPath={M11_PATH} />} />
        <Route path={M12_PATH} element={<ModulePage moduleData={module12} backPath="/level-1" quizPath={M12_QUIZ} />} />
        <Route path={M12_QUIZ} element={<QuizPage   moduleData={module12} backPath={M12_PATH} />} />
        <Route path={M13_PATH} element={<ModulePage moduleData={module13} backPath="/level-1" quizPath={M13_QUIZ} />} />
        <Route path={M13_QUIZ} element={<QuizPage   moduleData={module13} backPath={M13_PATH} />} />
        <Route path={M14_PATH} element={<ModulePage moduleData={module14} backPath="/level-1" quizPath={M14_QUIZ} />} />
        <Route path={M14_QUIZ} element={<QuizPage   moduleData={module14} backPath={M14_PATH} />} />
        <Route path={M15_PATH} element={<ModulePage moduleData={module15} backPath="/level-1" quizPath={M15_QUIZ} />} />
        <Route path={M15_QUIZ} element={<QuizPage   moduleData={module15} backPath={M15_PATH} />} />
        <Route path={M16_PATH} element={<ModulePage moduleData={module16} backPath="/level-1" quizPath={M16_QUIZ} />} />
        <Route path={M16_QUIZ} element={<QuizPage   moduleData={module16} backPath={M16_PATH} />} />
        <Route path={M17_PATH} element={<ModulePage moduleData={module17} backPath="/level-1" quizPath={M17_QUIZ} />} />
        <Route path={M17_QUIZ} element={<QuizPage   moduleData={module17} backPath={M17_PATH} />} />
        <Route path={M18_PATH} element={<ModulePage moduleData={module18} backPath="/level-1" quizPath={M18_QUIZ} />} />
        <Route path={M18_QUIZ} element={<QuizPage   moduleData={module18} backPath={M18_PATH} />} />
        <Route path={M19_PATH} element={<ModulePage moduleData={module19} backPath="/level-1" quizPath={M19_QUIZ} />} />
        <Route path={M19_QUIZ} element={<QuizPage   moduleData={module19} backPath={M19_PATH} />} />
        <Route path={M20_PATH} element={<ModulePage moduleData={module20} backPath="/level-1" quizPath={M20_QUIZ} />} />
        <Route path={M20_QUIZ} element={<QuizPage   moduleData={module20} backPath={M20_PATH} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
