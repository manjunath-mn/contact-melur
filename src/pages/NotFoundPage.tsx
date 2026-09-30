import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">404</p>
      <h1 className="text-4xl font-black">Lost your way?</h1>
      <p className="text-muted-foreground">This page doesn&apos;t exist.</p>
      <Button asChild>
        <Link to="/">Back to home</Link>
      </Button>
    </section>
  )
}
