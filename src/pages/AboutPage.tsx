import { Link } from 'react-router-dom'
import { ProfileHero } from '@/components/sections/ProfileHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

export default function AboutPage() {
  return (
    <>
      <ProfileHero
        name={profile.name}
        tagline={profile.tagline}
        blurb={profile.heroBlurb}
        portraitUrl={profile.heroPortraitUrl}
      >
        <Button asChild size="lg">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </ProfileHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          {profile.role} &middot; {profile.location}
        </p>

        <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <h2 className="liquid-text mt-10 w-fit text-lg font-bold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </section>
    </>
  )
}
