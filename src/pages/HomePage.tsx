import { LazySection } from '@/components/layout/LazySection'
import AboutPage from '@/pages/AboutPage'
import ExperiencePage from '@/pages/ExperiencePage'
import WorkPage from '@/pages/WorkPage'
import EducationPage from '@/pages/EducationPage'
import ContactPage from '@/pages/ContactPage'

const sections = [
  { id: 'about', Component: AboutPage, minHeight: '100vh' },
  { id: 'experience', Component: ExperiencePage, minHeight: '150vh' },
  { id: 'work', Component: WorkPage, minHeight: '120vh' },
  { id: 'education', Component: EducationPage, minHeight: '100vh' },
  { id: 'contact', Component: ContactPage, minHeight: '100vh' },
]

/**
 * One continuous scrollable page — About, Experience, Recent Work, Education,
 * and Contact stacked in order, each lazy-mounted via LazySection as the user
 * scrolls near it. All nav routes (/, /experience, /work, ...) render this
 * same component so navigating is a scroll, not a remount; ScrollToSection
 * handles moving the viewport to the right section (which section mounts
 * eagerly on first load lives in SectionMountProvider, up in RootLayout, so
 * both it and ScrollToSection can share the same mount state).
 */
export default function HomePage() {
  return (
    <>
      {sections.map(({ id, Component, minHeight }) => (
        <LazySection key={id} id={id} minHeight={minHeight}>
          <Component />
        </LazySection>
      ))}
    </>
  )
}
