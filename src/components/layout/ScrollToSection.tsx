import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { navLinks } from '@/data/profile'

/**
 * All nav routes render the same single-page HomePage, so "navigating"
 * between them means scrolling to the matching section instead of a full
 * page load. The very first load jumps instantly (no animation fighting
 * with sections still lazy-mounting in); clicking a nav link afterwards
 * scrolls smoothly.
 */
export function ScrollToSection() {
  const { pathname } = useLocation()
  const hasScrolledOnce = useRef(false)

  useEffect(() => {
    const sectionId = navLinks.find((link) => link.path === pathname)?.sectionId ?? 'about'
    const target = document.getElementById(sectionId)
    if (!target) return

    target.scrollIntoView({ behavior: hasScrolledOnce.current ? 'smooth' : 'auto' })
    hasScrolledOnce.current = true
  }, [pathname])

  return null
}
