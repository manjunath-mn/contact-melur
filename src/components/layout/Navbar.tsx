import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const sectionIds = navLinks.map((link) => link.sectionId)

function NavItems({
  className,
  activeId,
  onNavigate,
}: {
  className?: string
  activeId: string
  onNavigate?: () => void
}) {
  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={onNavigate}
          className={cn(
            'liquid-glass rounded-full px-3 py-1.5 text-sm font-medium tracking-wide transition-colors hover:text-foreground',
            activeId === link.sectionId ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'liquid-panel bg-background/95 shadow-md backdrop-blur'
          : 'bg-gradient-to-b from-background/80 to-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="liquid-text text-2xl tracking-tight text-primary">
          CONTACT MELUR
        </Link>

        <NavItems className="hidden items-center gap-8 md:flex" activeId={activeId} />

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle className="text-left text-primary">MELUR</SheetTitle>
            </SheetHeader>
            <NavItems
              className="mt-4 flex flex-col gap-6 px-4"
              activeId={activeId}
              onNavigate={() => setMobileOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
