import { useEffect, useRef, useState, type ReactNode } from 'react'

interface LazySectionProps {
  id: string
  children: ReactNode
  /** Mount immediately instead of waiting for the viewport — used for the
   * section a deep link (e.g. /work) points at, and everything above it, so
   * there's no empty gap to scroll through on first load. */
  forceMount?: boolean
  /** Rough expected height, used only for the unmounted placeholder so the
   * page doesn't jump once the real content mounts in. */
  minHeight?: string
}

/**
 * Mounts its children only once the section is about to enter the viewport,
 * instead of rendering every page's content (including the heavy sandboxed
 * Experience sketchbook) up front. Stays mounted permanently afterwards.
 */
export function LazySection({ id, children, forceMount = false, minHeight = '60vh' }: LazySectionProps) {
  const [mounted, setMounted] = useState(forceMount)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mounted) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true)
          observer.disconnect()
        }
      },
      { rootMargin: '800px 0px 800px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [mounted])

  return (
    <div id={id} ref={ref} className="scroll-mt-16">
      {mounted ? children : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  )
}
