import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative w-72 min-h-[420px] flex-none origin-bottom border-border bg-card transition-all duration-300 ease-out hover:z-10 hover:scale-110 hover:border-primary/50 hover:shadow-2xl hover:shadow-black/40">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-semibold tracking-wide text-primary uppercase">{project.category}</p>
          <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
        </div>
        <CardTitle className="mt-1 text-lg">{project.title}</CardTitle>
        {project.logoUrl || project.organization ? (
          <div className="mt-2 flex items-center gap-2">
            {project.logoUrl ? (
              <img
                src={project.logoUrl}
                alt={`${project.organization ?? project.title} logo`}
                className="h-5 w-auto max-w-28 object-contain object-left"
              />
            ) : null}
            {project.organization && !project.logoUrl ? (
              <span className="text-xs text-muted-foreground">{project.organization}</span>
            ) : null}
          </div>
        ) : null}
      </CardHeader>
      <CardContent className={project.liveUrl || project.repoUrl ? undefined : 'pb-4'}>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(project.liveUrl || project.repoUrl) && (
        <CardFooter className="gap-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
            >
              <ExternalLink className="size-4" /> Live
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
            >
              <Code2 className="size-4" /> Code
            </a>
          ) : null}
        </CardFooter>
      )}
    </Card>
  )
}
