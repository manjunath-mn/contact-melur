import { cn } from '@/lib/utils'

interface HeroBackdropProps {
  className?: string
}

/**
 * Placeholder for a ThreeUI (threeui.com) hero scene/shader snippet.
 * See src/components/three/README.md for how to swap in a real snippet.
 * This CSS-only version keeps the layout looking good until you do.
 */
export function HeroBackdrop({ className }: HeroBackdropProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden bg-background', className)}>
      <div className="absolute -top-1/3 left-1/2 h-[140%] w-[140%] -translate-x-1/2 animate-pulse rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,var(--background)_75%)]" />
    </div>
  )
}
