import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/profile'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

function NavItems({ className, onNavigate }: { className?: string; onNavigate?: () => void }) {
  return (
    <nav className={className}>
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'text-sm font-medium tracking-wide transition-colors hover:text-foreground',
              isActive ? 'text-foreground' : 'text-muted-foreground',
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
        scrolled ? 'bg-background/95 shadow-md backdrop-blur' : 'bg-gradient-to-b from-background/80 to-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLink to="/" className="text-2xl font-black tracking-tight text-primary">
          CONTACT MELUR
        </NavLink>

        <NavItems className="hidden items-center gap-8 md:flex" />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetHeader>
              <SheetTitle className="text-left text-primary">MELUR</SheetTitle>
            </SheetHeader>
            <NavItems className="mt-4 flex flex-col gap-6 px-4" />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
