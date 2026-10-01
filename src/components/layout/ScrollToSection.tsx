import { useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { navLinks } from '@/data/profile'
import { useSectionMount } from '@/components/layout/SectionMountContext'

const sectionOrder = navLinks.map((link) => link.sectionId)

/**
 * All nav routes render the same single-page HomePage, so "navigating"
 * between them means scrolling to the matching section instead of a full
 * page load.
 *
 * Before scrolling, it force-mounts every section up to the target —
 * synchronously, via flushSync — rather than letting them lazy-mount as the
 * scroll passes them. Without this, a jump straight to e.g. Contact from the
 * top computes scrollIntoView's target against still-lazy sections'
 * *placeholder* heights; as those sections pop in with their real (taller)
 * height while the scroll is already happening, the page grows underneath it
 * and it lands short of the real section. Confirmed by testing — a direct
 * measurement showed it landing 627px short of Contact's real position.
 *
 * flushSync can't run synchronously here, though: React Router's own
 * navigation is still mid-commit when this effect fires, and React rejects
 * a reentrant flushSync in that window. Deferring to a microtask lets that
 * commit settle first.
 *
 * The very first load jumps instantly; clicking a nav link afterwards
 * scrolls smoothly.
 */
export function ScrollToSection() {
  const { pathname } = useLocation()
  const { mountUpTo } = useSectionMount()
  const hasScrolledOnce = useRef(false)

  useEffect(() => {
    const sectionId = navLinks.find((link) => link.path === pathname)?.sectionId ?? 'about'

    queueMicrotask(() => {
      flushSync(() => {
        mountUpTo(sectionOrder, sectionId)
      })

      const target = document.getElementById(sectionId)
      if (!target) return

      target.scrollIntoView({ behavior: hasScrolledOnce.current ? 'smooth' : 'auto' })
      hasScrolledOnce.current = true
    })
  }, [pathname, mountUpTo])

  return null
}
