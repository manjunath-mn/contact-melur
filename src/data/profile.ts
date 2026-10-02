import type { NavLink, Profile } from '@/types'
import heroPortrait from '@/assets/hero-portrait.png'

export const profile: Profile = {
  name: 'Manjunath Melur Nagaraj',
  role: 'Front-End Developer',
  tagline: 'Turning designs into fast, accessible React experiences.',
  bio: [
    "Hi, I'm Manjunath — a front-end developer based in Manchester, UK with 3+ years of commercial experience building, maintaining, and shipping features on live, customer-facing web applications using HTML, CSS, JavaScript, and React.js.",
    'I led a legacy-to-React migration that cut page load time by 60%, and built a Storybook-documented component library now used across an entire product line. I’m comfortable working inside existing codebases, converting Figma/wireframe designs into accessible, cross-browser UI, and collaborating closely with senior developers in an agile team.',
    'I’m currently completing an MSc in Advanced Computer Science at Leeds Beckett University (May 2026), and I’m eligible for the UK Graduate visa from June 2026.',
  ],
  location: 'Manchester, UK',
  email: 'manjunathnmelur@gmail.com',
  phone: '+44 7747 988414',
  // TODO: swap in your real LinkedIn profile photo (drop the file in src/assets
  // and point this at it, e.g. avatarUrl: linkedinPhoto — see src/pages/AboutPage.tsx).
  avatarUrl: undefined,
  heroPortraitUrl: heroPortrait,
  heroBlurb: 'OPEN TO FRONT-END ROLES AND FREELANCE COLLABORATIONS ACROSS THE UK.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/manjunath-mn' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manjunath-melur-nagaraj-89396415a/' },
    { label: 'Portfolio', href: 'https://portfolio-vert-nu-42.vercel.app/' },
  ],
  skills: [
    'React.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Node.js',
    'Express.js',
    'GraphQL (Apollo Client)',
    'REST API Design',
    'Storybook',
    'Styled-Components',
    'Git/GitLab',
    'Webpack & Babel',
    'CI/CD',
    'Agile',
  ],
}

export const navLinks: NavLink[] = [
  { label: 'About Me', path: '/', sectionId: 'about' },
  { label: 'Experience', path: '/experience', sectionId: 'experience' },
  { label: 'Recent Work', path: '/work', sectionId: 'work' },
  { label: 'Education', path: '/education', sectionId: 'education' },
  { label: 'Contact Me', path: '/contact', sectionId: 'contact' },
]
