import { useMemo } from 'react'
import { MengToSketchbookLandingPage } from '@designcodeio/threeui'
import type { ExperienceEntry } from '@/types'

interface ExperienceSketchbookProps {
  entries: ExperienceEntry[]
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildSketchbookDoc(entries: ExperienceEntry[]) {
  const rotations = [-1.4, 1.1, -0.8, 1.6, -1.2]

  const pages = entries
    .map((entry, index) => {
      const rotation = rotations[index % rotations.length]
      const highlights = entry.highlights
        .map((point) => `<li>${escapeHtml(point)}</li>`)
        .join('')
      const tags = entry.stack
        .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join('')

      const logo = entry.logoUrl
        ? `<img class="company-logo" src="${escapeHtml(entry.logoUrl)}" alt="${escapeHtml(entry.company)} logo" />`
        : ''

      return `
        <article class="page" style="--rotate: ${rotation}deg;">
          <span class="tape"></span>
          ${logo}
          <header class="page-header">
            <h2>${escapeHtml(entry.role)}</h2>
            <p class="company">${escapeHtml(entry.company)} &middot; ${escapeHtml(entry.location)}</p>
            <p class="dates">${escapeHtml(entry.startDate)} &ndash; ${escapeHtml(entry.endDate)}</p>
          </header>
          <ul class="highlights">${highlights}</ul>
          <div class="tags">${tags}</div>
        </article>
      `
    })
    .join('\n')

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        color-scheme: light;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100%;
        background: #f3ead9;
        background-image:
          radial-gradient(circle at 15% 20%, rgba(43, 39, 33, 0.05), transparent 45%),
          radial-gradient(circle at 85% 70%, rgba(43, 39, 33, 0.05), transparent 45%),
          repeating-linear-gradient(
            0deg,
            rgba(43, 39, 33, 0.05) 0px,
            rgba(43, 39, 33, 0.05) 1px,
            transparent 1px,
            transparent 32px
          );
        color: #2b2721;
        font-family: 'Newsreader', serif;
        padding: 48px 24px 80px;
      }
      .sketchbook-title {
        font-family: 'Instrument Serif', serif;
        font-size: 44px;
        text-align: center;
        margin: 0 0 8px;
      }
      .sketchbook-subtitle {
        text-align: center;
        margin: 0 auto 48px;
        max-width: 520px;
        color: rgba(43, 39, 33, 0.7);
        font-size: 17px;
      }
      .pages {
        display: grid;
        gap: 40px;
        max-width: 720px;
        margin: 0 auto;
      }
      .page {
        position: relative;
        background: #fffaf0;
        border: 1px solid rgba(43, 39, 33, 0.15);
        border-radius: 2px;
        padding: 28px 32px 24px;
        box-shadow: 0 10px 24px rgba(43, 39, 33, 0.12);
        transform: rotate(var(--rotate));
        transition: transform 0.25s ease;
      }
      .page:hover {
        transform: rotate(0deg) scale(1.01);
      }
      .tape {
        position: absolute;
        top: -14px;
        left: 50%;
        transform: translateX(-50%) rotate(-2deg);
        width: 90px;
        height: 26px;
        background: rgba(214, 178, 122, 0.55);
        border: 1px solid rgba(43, 39, 33, 0.1);
      }
      .company-logo {
        position: absolute;
        top: 24px;
        right: 28px;
        max-height: 28px;
        max-width: 110px;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      .page-header h2 {
        font-family: 'Instrument Serif', serif;
        font-size: 28px;
        margin: 8px 0 2px;
      }
      .company {
        margin: 0;
        font-weight: 500;
      }
      .dates {
        margin: 2px 0 16px;
        font-size: 14px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(43, 39, 33, 0.6);
      }
      .highlights {
        margin: 0 0 16px;
        padding-left: 20px;
      }
      .highlights li {
        margin-bottom: 8px;
        line-height: 1.5;
        font-size: 15.5px;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .tag {
        font-size: 12.5px;
        padding: 4px 10px;
        border: 1px solid rgba(43, 39, 33, 0.25);
        border-radius: 999px;
        color: rgba(43, 39, 33, 0.75);
      }
    </style>
  </head>
  <body>
    <h1 class="sketchbook-title">Field Notes</h1>
    <p class="sketchbook-subtitle">A page-by-page look at where I've worked and what I built along the way.</p>
    <div class="pages">
      ${pages}
    </div>
  </body>
</html>`
}

/**
 * Renders experience entries inside ThreeUI's MengToSketchbookLandingPage frame,
 * using its `srcDoc` escape hatch to swap the packaged Meng To document for our
 * own sketchbook-styled page built from real resume data. See
 * src/components/three/README.md for details on this pattern.
 */
export function ExperienceSketchbook({ entries }: ExperienceSketchbookProps) {
  const srcDoc = useMemo(() => buildSketchbookDoc(entries), [entries])

  return (
    <div className="h-[85vh] min-h-[640px] w-full overflow-hidden rounded-lg border border-border">
      <MengToSketchbookLandingPage srcDoc={srcDoc} className="h-full w-full" />
    </div>
  )
}
