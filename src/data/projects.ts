import type { Project } from '@/types'
import leedsBeckettLogo from '@/assets/logos/leeds-beckett.svg'

export const projects: Project[] = [
  {
    id: 'apitestgenx',
    title: 'ApiTestGenX',
    category: 'Featured Projects',
    description:
      'AI-powered API test generation platform — designed and shipped solo from wireframe to a deployed, publicly demoable build. React.js frontend, Node.js/Express backend, with an AI test-generation pipeline using prompt engineering to drive LLM output, returning structured JSON/HTML reports and lifting API test coverage without manual test-writing.',
    tags: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Prompt Engineering'],
    year: 2026,
    organization: 'MSc Dissertation · Leeds Beckett University',
    logoUrl: leedsBeckettLogo,
    liveUrl: 'https://api-test-generator-topaz.vercel.app/',
    repoUrl: 'https://github.com/manjunath-mn/api-test-generator',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Featured Projects',
    description:
      'A fully responsive personal site built with Next.js and hosted on Vercel to showcase production projects and live demos to recruiters.',
    tags: ['Next.js', 'Vercel', 'React'],
    year: 2025,
    liveUrl: 'https://portfolio-vert-nu-42.vercel.app/',
    repoUrl: 'https://github.com/manjunath-mn/portfolio',
    organization: 'Personal Project',
  },
  {
    id: 'uniconvert',
    title: 'UniConvert',
    category: 'Featured Projects',
    description:
      'A full-stack unit converter — React.js/TypeScript frontend calling a Spring Boot REST API for Length, Weight, and Temperature conversions, with client-side validation and handling for the backend’s error responses.',
    tags: ['React.js', 'TypeScript', 'Spring Boot', 'REST APIs'],
    year: 2025,
    repoUrl: 'https://github.com/manjunath-mn/unit-converter-frontend',
    organization: 'Personal Project',
  },
]

export const categories = Array.from(new Set(projects.map((p) => p.category)))
