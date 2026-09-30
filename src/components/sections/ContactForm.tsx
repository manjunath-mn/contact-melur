import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  // No backend wired up yet — plug this into an email service (e.g. Formspree,
  // EmailJS, or your own API route) before relying on it to actually reach you.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-border bg-card">
        <CardContent className="py-10 text-center">
          <p className="text-lg font-semibold text-foreground">Thanks for reaching out!</p>
          <p className="mt-2 text-sm text-muted-foreground">
            I&apos;ll get back to you as soon as I can.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Send a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="What's this about?" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Tell me a bit more..." rows={5} required />
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
