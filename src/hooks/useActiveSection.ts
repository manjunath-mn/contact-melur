import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently most visible, independent of the URL
 * (the URL only changes when a nav link is clicked, not while free-scrolling
 * through the single-page layout) — used to highlight the active nav item.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visibleRatios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        let topId = sectionIds[0]
        let topRatio = 0
        for (const id of sectionIds) {
          const ratio = visibleRatios.get(id) ?? 0
          if (ratio > topRatio) {
            topRatio = ratio
            topId = id
          }
        }
        if (topRatio > 0) setActiveId(topId)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-64px 0px 0px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
