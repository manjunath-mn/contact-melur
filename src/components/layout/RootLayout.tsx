import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToSection } from '@/components/layout/ScrollToSection'
import { PortfolioToggle } from '@/components/layout/PortfolioToggle'
import { SectionMountProvider } from '@/components/layout/SectionMountContext'
import { navLinks } from '@/data/profile'

const sectionOrder = navLinks.map((link) => link.sectionId)

export function RootLayout() {
  const location = useLocation()
  // Captured once: the section a direct link (e.g. /work) points at, and
  // everything above it, mount eagerly so there's no empty gap to scroll
  // through before the target section is actually visible.
  const initialSectionId = useRef(
    navLinks.find((link) => link.path === location.pathname)?.sectionId ?? 'about',
  ).current
  const initialIndex = sectionOrder.indexOf(initialSectionId)
  const initialMounted = useRef(sectionOrder.slice(0, Math.max(0, initialIndex) + 1)).current

  return (
    <SectionMountProvider initialMounted={initialMounted}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <ScrollToSection />
        <Navbar />
        <PortfolioToggle />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SectionMountProvider>
  )
}
