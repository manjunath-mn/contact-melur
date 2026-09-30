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
    <section className="group/row relative py-6">
      <h2 className="mb-4 px-4 text-xl font-bold sm:px-6">{title}</h2>

      <Button
        variant="secondary"
        size="icon"
        aria-label="Scroll left"
        onClick={() => scrollByAmount('left')}
        className="absolute top-1/2 left-1 z-10 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
      >
        <ChevronLeft className="size-5" />
      </Button>

      <div
        ref={scrollRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-6"
      >
        {children}
      </div>

      <Button
        variant="secondary"
        size="icon"
        aria-label="Scroll right"
        onClick={() => scrollByAmount('right')}
        className="absolute top-1/2 right-1 z-10 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
      >
        <ChevronRight className="size-5" />
      </Button>
    </section>
  )
}
