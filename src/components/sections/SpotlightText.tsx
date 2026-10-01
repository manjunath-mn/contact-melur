import { useRef, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightTextProps {
  text: string
  className?: string
  /** Radius of the brightened circle around the pointer, in px. */
  radius?: number
}

/**
 * Renders dim text with a small bright "spotlight" circle that follows the
 * pointer on hover, instead of brightening the whole block at once. Works by
 * layering an identical bright copy of the text on top, clipped to a circle
 * at the pointer position — not a mask-image (those can mask by luminance
 * instead of alpha depending on the browser; clip-path is a plain geometric
 * clip, no such ambiguity).
 */
export function SpotlightText({ text, className, radius = 70 }: SpotlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const handleMove = (event: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => ref.current?.style.setProperty('--spotlight-radius', `${radius}px`)}
      onMouseLeave={() => ref.current?.style.setProperty('--spotlight-radius', '0px')}
      className={cn('relative block', className)}
    >
      {text}
      <span aria-hidden="true" className="spotlight-overlay pointer-events-none absolute inset-0 text-foreground">
        {text}
      </span>
    </span>
  )
}
