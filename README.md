# Manjunath Melur Nagaraj — Portfolio

A personal portfolio site inspired by Netflix's dark, editorial UI — one continuous scrollable page (About, Experience, Recent Work, Education, Contact), each section lazy-mounted as you scroll near it.

## Tech stack

**Core**
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server & build
- [React Router](https://reactrouter.com/) (v7) — nav routes all render the same single-page layout and scroll to the matching section rather than navigating away

**Styling & UI**
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) on [Radix UI](https://www.radix-ui.com/) primitives (`button`, `card`, `sheet`, `input`, `textarea`, etc. in `src/components/ui/`)
- [Geist](https://vercel.com/font) & Geist Mono via [Fontsource](https://fontsource.org/) (self-hosted, no Google Fonts CDN dependency)
- [lucide-react](https://lucide.dev/) — icons
- Custom "liquid glass" CSS (sheen-sweep buttons/nav, frosted navbar, shimmer headings) — see the comments in `src/index.css`

**3D / animation**
- [@designcodeio/threeui](https://threeui.com/) — the Experience page's "Field Notes" sketchbook visual (real resume data rendered inside its sandboxed iframe via a custom `srcDoc`, documented in `src/components/three/README.md`)

**Forms**
- Contact form posts to [Formspree](https://formspree.io/)

**Tooling**
- [Oxlint](https://oxc.rs/) — linting

## Project structure

```
src/
├── App.tsx                  # Route definitions
├── main.tsx                 # App entry
├── pages/                   # One file per nav section (About, Experience, Work, Education, Contact)
│   └── HomePage.tsx          # Composes all sections into the single continuous page
├── components/
│   ├── layout/                # Navbar, Footer, RootLayout, scroll/lazy-mount machinery
│   ├── sections/               # Reusable content blocks (hero, cards, content rows, contact form)
│   ├── three/                    # ThreeUI integration + its own README on the srcDoc pattern used
│   └── ui/                         # shadcn/ui primitives
├── data/                     # Your actual content — edit these to update the site
│   ├── profile.ts             # Name, bio, skills, socials, hero image
│   ├── experience.ts          # Work history (Experience page)
│   ├── projects.ts            # Featured projects (Recent Work page)
│   └── education.ts           # Degrees & certifications
├── hooks/
├── lib/
└── types/                    # Shared TypeScript types for the data above
```

## Getting started

**Prerequisites:** Node 20+ and npm.

```bash
npm install
npm run dev
```

Opens the dev server at `http://localhost:5173` (or the next free port).

### Other scripts

```bash
npm run build     # Type-check + production build to dist/
npm run preview   # Preview the production build locally
npm run lint       # Run Oxlint
```

## Editing content

Your actual name, bio, skills, work history, projects, and education all live in `src/data/*.ts` — edit those files directly rather than the page components to update what the site shows.

The contact form needs a Formspree endpoint to actually deliver messages — set it in `src/components/sections/ContactForm.tsx` (`FORMSPREE_ENDPOINT`).
