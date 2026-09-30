import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import AboutPage from '@/pages/AboutPage'
import ExperiencePage from '@/pages/ExperiencePage'
import WorkPage from '@/pages/WorkPage'
import EducationPage from '@/pages/EducationPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
