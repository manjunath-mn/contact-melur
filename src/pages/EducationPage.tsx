import { PageHero } from '@/components/sections/PageHero'
import { ContentRow } from '@/components/sections/ContentRow'
import { EducationCard } from '@/components/sections/EducationCard'
import { education } from '@/data/education'

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Where it started"
        subtitle="Degrees, certifications, and the learning that shaped how I build."
      />

      <section className="py-10">
        <ContentRow title="Education">
          {education.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </ContentRow>
      </section>
    </>
  )
}
