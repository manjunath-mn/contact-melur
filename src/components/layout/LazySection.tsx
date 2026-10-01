import { useEffect, useRef, type ReactNode } from 'react'
import { useSectionMount } from '@/components/layout/SectionMountContext'

interface LazySectionProps {
  id: string
  children: ReactNode
  /** Rough expected height, used only for the unmounted placeholder so the
   * page doesn't jump once the real content mounts in. */
  minHeight?: string
}

/**
 * Mounts its children only once the section is about to enter the viewport,
 * instead of rendering every page's content (including the heavy sandboxed
 * Experience sketchbook) up front. Stays mounted permanently afterwards.
 *
 * Mount state lives in SectionMountContext (not local state) so that
 * ScrollToSection can force sections to mount ahead of a programmatic jump —
 * see that component for why: scrolling to a still-lazy section drifts off
 * target as sections upstream pop from placeholder to real height mid-flight.
 */
export function LazySection({ id, children, minHeight = '60vh' }: LazySectionProps) {
  const { mountedIds, markMounted } = useSectionMount()
  const mounted = mountedIds.has(id)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mounted) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          markMounted(id)
          observer.disconnect()
        }
      },
      { rootMargin: '800px 0px 800px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted, id, markMounted])

  return (
    <div id={id} ref={ref} className="scroll-mt-16">
      {mounted ? children : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  )
}
