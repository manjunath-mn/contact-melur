import { PageHero } from '@/components/sections/PageHero'
import { ContentRow } from '@/components/sections/ContentRow'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { categories, projects } from '@/data/projects'

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recent Work"
        title="What I've been building"
        subtitle="A selection of projects across web, backend, and mobile."
      />

      <section className="py-10">
        {categories.map((category) => (
          <ContentRow key={category} title={category}>
            {projects
              .filter((project) => project.category === category)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </ContentRow>
        ))}
      </section>
    </>
  )
}
