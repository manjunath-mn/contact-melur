import type { ReactNode } from 'react'
import { HeroBackdrop } from '@/components/three/HeroBackdrop'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative z-0 overflow-hidden pt-16">
      <HeroBackdrop />
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 pb-10 sm:px-6">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="liquid-text max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h2>
        {subtitle ? (
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  )
}
