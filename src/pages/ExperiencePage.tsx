import { PageHero } from '@/components/sections/PageHero'
import { ExperienceSketchbook } from '@/components/three/ExperienceSketchbook'
import { experience } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="My journey so far"
        subtitle="Flip through the roles, teams, and projects that shaped how I build."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ExperienceSketchbook entries={experience} />
      </section>
    </>
  )
}
