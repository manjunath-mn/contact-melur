import { useEffect, useState } from 'react'
import { ArrowLeftRight, X } from 'lucide-react'

// The other portfolio (projects/portfolio) is a separate Next.js app —
// different framework, different build system — so rather than a risky
// source-level merge, this overlays the already-deployed live site in an
// iframe when toggled. Confirmed it allows framing (no X-Frame-Options /
// frame-ancestors CSP on the response) before building this.
const ALT_PORTFOLIO_URL = 'https://portfolio-vert-nu-42.vercel.app/'

export function PortfolioToggle() {
  const [showAlt, setShowAlt] = useState(false)

  useEffect(() => {
    if (!showAlt) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowAlt(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [showAlt])

  return (
    <>
      {/* Positioning lives on this outer wrapper, not the liquid-glass button
          itself: .liquid-glass hardcodes position:relative in unlayered CSS,
          which beats Tailwind's `fixed` utility (layered) regardless of class
          order — confirmed by testing, the button rendered pinned to the
          document flow instead of the viewport corner. */}
      <div className="fixed top-20 right-4 z-[60] sm:right-6">
        <button
          type="button"
          onClick={() => setShowAlt((prev) => !prev)}
          aria-label={showAlt ? 'Switch back to this portfolio' : 'Switch to the other portfolio design'}
          aria-pressed={showAlt}
          title={showAlt ? 'Back to this portfolio' : 'Try the other portfolio'}
          className="liquid-glass flex size-11 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground shadow-lg backdrop-blur-md"
        >
          {showAlt ? <X className="size-5" /> : <ArrowLeftRight className="size-5" />}
        </button>
      </div>

      {showAlt ? (
        <div className="fixed inset-0 z-50 bg-background">
          <iframe
            src={ALT_PORTFOLIO_URL}
            title="Alternate portfolio design"
            className="h-full w-full border-0"
          />
        </div>
      ) : null}
    </>
  )
}
