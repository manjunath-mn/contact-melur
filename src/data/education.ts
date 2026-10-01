import type { EducationEntry } from '@/types'
import leedsBeckettLogo from '@/assets/logos/leeds-beckett.svg'
import vtuLogo from '@/assets/logos/vtu.png'

export const education: EducationEntry[] = [
  {
    id: 'leeds-beckett-msc',
    institution: 'Leeds Beckett University',
    degree: 'MSc',
    field: 'Advanced Computer Science',
    startYear: 2025,
    endYear: 2026,
    description: 'Leeds, UK',
    highlights: ['Cloud Computing', 'Intelligent Systems & Robotics', 'Software Engineering', 'Data Science'],
    logoUrl: leedsBeckettLogo,
  },
  {
    id: 'vtu-be',
    institution: 'Visvesvaraya Technological University',
    degree: 'BE',
    field: 'Information Science',
    startYear: 2016,
    endYear: 2020,
    description:
      'India · Publication: "Toll Plaza Penalty Collection System" (Android Studio, ASP.NET) — presented & published at ICCMC 2019, IEEE Xplore Digital Library.',
    highlights: ['Java', 'Data Mining', 'Python', 'Machine Learning'],
    logoUrl: vtuLogo,
  },
]
