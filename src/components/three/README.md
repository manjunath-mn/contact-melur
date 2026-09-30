# ThreeUI snippet slot

[threeui.com](https://threeui.com) is a gallery of copy-paste Three.js/WebGL/shader
snippets (some free, some paid "PRO") — not an npm package. There is no
`npm install threeui`; you copy the HTML/JS/GLSL for a snippet you like and
adapt it into a React component here.

## How to swap in a real snippet

1. Pick a snippet on threeui.com (Hero, Backgrounds, Buttons, etc.) and copy its code.
2. Most snippets are vanilla JS that create/mount a `<canvas>` and drive it with
   `three` (and sometimes `gsap` or raw WebGL/GLSL). Install what the snippet needs, e.g.:

   ```bash
   npm install three
   npm install -D @types/three
   ```

3. Wrap the snippet in a component that mounts on a `ref` and cleans up on unmount,
   for example replacing `HeroBackdrop.tsx`:

   ```tsx
   import { useEffect, useRef } from 'react'
   import * as THREE from 'three'

   export function HeroBackdrop() {
     const containerRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
       const container = containerRef.current
       if (!container) return

       // ...paste the ThreeUI snippet's scene/renderer/animate setup here,
       // appending renderer.domElement to `container` instead of document.body...

       return () => {
         // dispose renderer/scene, cancel the animation frame, remove the canvas
       }
     }, [])

     return <div ref={containerRef} className="absolute inset-0 -z-10" />
   }
   ```

4. Keep the component's exported name/props the same (`HeroBackdrop`, or add new
   ones like `ContactScene`) so the pages that import it don't need to change.

## Where these slots are used

- `HeroBackdrop` — full-bleed animated background behind each page's hero banner
  (`src/components/sections/PageHero.tsx`).
- `ExperienceSketchbook` — uses the real `@designcodeio/threeui` package (the
  Sketchbook landing page is one of the rare ThreeUI items published as an
  actual npm component, not a copy-paste snippet).

Add further slots the same way (e.g. an animated button or a 3D asset) and drop
them into `ContentRow` cards or the Contact page as you like.

## `@designcodeio/threeui` components: fixed documents, not data-driven

Some ThreeUI "landing page" components (`MengToSketchbookLandingPage`,
`KageLandingPage`, etc.) render a **fixed, byte-for-byte original HTML
document** inside a sandboxed `<iframe>` — their own demo content, not yours.
Their only configurable props are cosmetic (`className`, `style`, and for a
few of them a typography/color `recipe`). There is no prop for passing in
your own headings, copy, or data.

There is one real escape hatch, confirmed by reading the compiled source in
`node_modules/@designcodeio/threeui/lib-dist/shaders/landing-pages/LandingPages.js`:
every one of these components accepts an optional **`srcDoc`** prop (a raw
HTML string). When present, it's passed straight to the iframe's `srcDoc`
attribute instead of the packaged `sourceUrl`, which completely replaces the
rendered content — while still getting the component's sandboxing,
`is-ready` fade-in, and sizing behavior.

`ExperienceSketchbook.tsx` uses exactly this: it builds a full HTML document
from `src/data/experience.ts` (Google Fonts, paper/sketchbook styling, one
"page" per job) and passes it as `srcDoc` to `MengToSketchbookLandingPage`.
Follow the same pattern for other ThreeUI landing-page components if you want
their sandboxed-iframe treatment with your own content instead of the demo.
