export interface NavLink {
  label: string
  path: string
  sectionId: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  bio: string[]
  location: string
  email: string
  phone?: string
  avatarUrl?: string
  heroPortraitUrl?: string
  heroBlurb?: string
  socials: SocialLink[]
  skills: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  imageUrl?: string
  liveUrl?: string
  repoUrl?: string
  year: number
  organization?: string
  logoUrl?: string
}

export interface ExperienceEntry {
  id: string
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  stack: string[]
  highlights: string[]
}

export interface EducationEntry {
  id: string
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | 'Present'
  description?: string
  highlights?: string[]
  logoUrl?: string
}
