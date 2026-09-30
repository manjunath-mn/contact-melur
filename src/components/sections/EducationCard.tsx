import type { EducationEntry } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface EducationCardProps {
  entry: EducationEntry
}

export function EducationCard({ entry }: EducationCardProps) {
  return (
    <Card className="w-80 flex-none border-border bg-card transition-transform duration-300 hover:scale-105 hover:border-primary/50">
      <CardHeader>
        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
          {entry.startYear} &ndash; {entry.endYear}
        </p>
        <CardTitle className="text-lg">{entry.institution}</CardTitle>
      </CardHeader>
      <CardContent>
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
