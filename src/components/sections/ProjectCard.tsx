import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '@/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-72 flex-none border-border bg-card transition-transform duration-300 hover:scale-105 hover:border-primary/50">
      <CardHeader>
        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
          {project.category} &middot; {project.year}
        </p>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
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
