import type { EducationEntry } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface EducationCardProps {
  entry: EducationEntry
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <Card className="relative w-80 min-h-[380px] flex-none origin-bottom border-border bg-card transition-all duration-300 ease-out hover:z-10 hover:scale-110 hover:border-primary/50 hover:shadow-2xl hover:shadow-black/40">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-lg font-medium text-primary">
            {entry.startYear} &ndash; {entry.endYear}
          </p>
          {entry.logoUrl ? (
            <img
              src={entry.logoUrl}
              alt={`${entry.institution} logo`}
              className="h-8 w-auto max-w-28 flex-none object-contain object-right"
            />
          ) : null}
        </div>
        <CardTitle className="mt-1 text-lg">{entry.institution}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm font-medium text-foreground">
          {entry.degree}, {entry.field}
        </p>
        {entry.description ? (
          <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
        ) : null}
        {entry.highlights && entry.highlights.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary">
                {highlight}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
