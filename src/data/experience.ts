import type { ExperienceEntry } from '@/types'
import agilepointLogo from '@/assets/logos/agilepoint-dark.svg'
import weirLogo from '@/assets/logos/weir.svg'

export const experience: ExperienceEntry[] = [
  {
    id: 'agilepoint-software-engineer',
    role: 'Software Engineer',
    company: 'AgilePoint Software India',
    location: 'Bengaluru, India',
    startDate: 'Apr 2022',
    endDate: 'Jan 2025',
    logoUrl: agilepointLogo,
    stack: ['React.js', 'TypeScript', 'Node.js', 'GraphQL', 'Apollo Client', 'Styled-Components', 'Storybook'],
    highlights: [
      'Developed a legacy JavaScript-to-React.js migration that cut initial page load time by ~60%, modernising the experience for every user of the product.',
      'Built and documented a reusable UI component library (Sliders, TreeView, Accordion, Buttons, Popups) in Storybook, standardising UI across all modules and cutting onboarding time for new developers.',
      'Converted designer wireframes and mockups into pixel-perfect, accessible interfaces meeting W3C standards, working directly with the UX/UI team.',
      'Replaced over-fetching REST calls with GraphQL (Apollo Client) queries, mutations and subscriptions, shrinking payload size on data-heavy screens.',
      'Designed and maintained Node.js/Express REST APIs powering end-to-end CRUD flows for the platform.',
      'Ran cross-browser and cross-device QA to guarantee a consistent experience across resolutions and platforms.',
      'Reviewed peer code and led a component clean-up initiative that mentored other developers on maintainable patterns.',
    ],
  },
  {
    id: 'agilepoint-software-engineer-trainee',
    role: 'Software Engineer Trainee',
    company: 'AgilePoint Software India',
    location: 'Bengaluru, India',
    startDate: 'Sep 2021',
    endDate: 'Mar 2022',
    logoUrl: agilepointLogo,
    stack: ['React Hooks', 'Redux', 'Context API', 'JavaScript', 'Refactoring'],
    highlights: [
      'Refactored class-based components and HOCs into React Hooks, cutting boilerplate and simplifying state logic across the codebase.',
      'Built a dynamic authorisation-module UI (React, Redux, Context API) supporting 70+ integrations, including Kafka and Blockchain.',
      'Replaced unnecessary third-party dependencies with native solutions, shrinking bundle size and improving runtime performance.',
    ],
  },
  {
    id: 'weir-ensci-intern',
    role: 'Web Development Intern',
    company: 'Weir EnSci',
    location: 'Bengaluru, India',
    startDate: 'Jan 2020',
    endDate: 'Aug 2020',
    logoUrl: weirLogo,
    stack: ['ASP.NET', 'Web APIs', 'Postman', 'Visual Studio'],
    highlights: [
      "Built and tested REST APIs (Postman, Visual Studio, ASP.NET) for the live 'Total Cost of Acquisition' tool used across the shipping and mining industries.",
    ],
  },
]
