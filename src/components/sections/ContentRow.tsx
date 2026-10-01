import { useRef, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ContentRowProps {
  title: string
  children: ReactNode
}

/**
 * Netflix-style horizontally scrolling row. Pass any card components as
 * children — used by both the Work and Education pages so the scroll
 * behavior lives in exactly one place.
 */
export function ContentRow({ title, children }: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollByAmount = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const amount = container.clientWidth * 0.8
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="group/row relative mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <h2 className="liquid-text mb-4 w-fit text-xl font-bold">{title}</h2>

      <Button
        variant="secondary"
        size="icon"
        aria-label="Scroll left"
        onClick={() => scrollByAmount('left')}
        className="absolute top-1/2 left-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
      >
        <ChevronLeft className="size-5" />
      </Button>

      <div
        ref={scrollRef}
        className="no-scrollbar flex justify-center gap-4 overflow-x-auto scroll-smooth px-8 pt-16 pb-8 sm:px-10"
      >
        {children}
      </div>

      <Button
        variant="secondary"
        size="icon"
        aria-label="Scroll right"
        onClick={() => scrollByAmount('right')}
        className="absolute top-1/2 right-0 z-10 hidden translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
      >
        <ChevronRight className="size-5" />
      </Button>
    </section>
  )
}
