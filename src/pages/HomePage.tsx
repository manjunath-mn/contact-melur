import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { LazySection } from '@/components/layout/LazySection'
import { navLinks } from '@/data/profile'
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
 * handles moving the viewport to the right section.
 */
export default function HomePage() {
  const location = useLocation()
  // Captured once on first render: the section a direct link (e.g. /work)
  // points at, and everything above it, mount eagerly so there's no empty
  // gap to scroll through before the target section is actually visible.
  const initialSectionId = useRef(
    navLinks.find((link) => link.path === location.pathname)?.sectionId ?? 'about',
  ).current
  const initialIndex = sections.findIndex((section) => section.id === initialSectionId)

  return (
    <>
      {sections.map(({ id, Component, minHeight }, index) => (
        <LazySection key={id} id={id} forceMount={index <= initialIndex} minHeight={minHeight}>
          <Component />
        </LazySection>
      ))}
    </>
  )
}
