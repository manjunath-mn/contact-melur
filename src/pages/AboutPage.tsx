import { Link } from 'react-router-dom'
import { PageHero } from '@/components/sections/PageHero'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

export default function AboutPage() {
  const initials = profile.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <>
      <PageHero eyebrow="About Me" title={profile.name} subtitle={profile.tagline}>
        <Button asChild size="lg">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
          <Avatar className="size-28">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} />
            <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              {profile.role} &middot; {profile.location}
            </p>

            <div className="mt-4 space-y-4 text-muted-foreground">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-10 text-lg font-bold">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
