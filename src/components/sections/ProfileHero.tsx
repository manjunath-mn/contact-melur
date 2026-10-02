import type { ReactNode } from 'react'
import { SpotlightText } from '@/components/sections/SpotlightText'

interface ProfileHeroProps {
  name: string
  tagline?: string
  blurb?: string
  portraitUrl?: string
  children?: ReactNode
}

/**
 * Hero layout modeled on 1367 Studio's homepage (awwwards.com/sites/1367-studio):
 * a tall right-aligned portrait, a big two-tone headline bottom-left, and a
 * small tracked blurb + CTA bottom-right. Built on top of this site's own
 * dark Netflix-style background rather than the reference's cream page —
 * only a barely-there warm glow nods to it.
 */
export function ProfileHero({ name, tagline, blurb, portraitUrl, children }: ProfileHeroProps) {
  return (
    <section className="relative z-0 flex min-h-[90vh] items-end overflow-hidden pt-16">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: 'radial-gradient(60% 60% at 75% 35%, rgba(243,234,217,0.07), transparent 70%)',
        }}
      />

      {portraitUrl ? (
        <div className="absolute inset-y-0 right-0 -z-10 w-full sm:w-3/5 md:w-1/2">
          <img src={portraitUrl} alt={name} className="h-full w-full object-cover object-top" />
          {/* The source photo has a solid cream backdrop baked into the pixels
              (not real transparency), so a painted vignette fades it into the
              dark page on all sides instead of showing a hard rectangle. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 70% at 55% 42%, transparent 45%, var(--background) 90%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ) : null}

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 pb-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
        <h1 className="hyphens-none max-w-xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl">
          <span className="liquid-text block text-foreground">{name}</span>
          {tagline ? (
            <SpotlightText text={tagline} className="mt-1 font-normal text-muted-foreground" />
          ) : null}
        </h1>

        {blurb || children ? (
          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            {blurb ? (
              <p className="hyphens-none max-w-xs text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {blurb}
              </p>
            ) : null}
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
