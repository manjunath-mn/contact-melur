import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { profile } from '@/data/profile'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Me"
        title="Let's work together"
        subtitle="Have a project in mind or just want to say hi? Send a message below."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="size-5 text-primary" />
            <a href={`mailto:${profile.email}`} className="text-sm hover:text-primary">
              {profile.email}
            </a>
          </div>
          {profile.phone ? (
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-primary" />
              <a href={`tel:${profile.phone}`} className="text-sm hover:text-primary">
                {profile.phone}
              </a>
            </div>
          ) : null}
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-primary" />
            <span className="text-sm text-muted-foreground">{profile.location}</span>
          </div>

          <div className="flex gap-4 pt-2">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  )
}
