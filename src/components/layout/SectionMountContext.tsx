import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface SectionMountContextValue {
  mountedIds: Set<string>
  markMounted: (id: string) => void
  /** Mounts `targetId` and every id before it in `orderedIds`, synchronously
   * enough (paired with flushSync by the caller) that the DOM reflects real
   * content — not placeholder heights — before anything measures position. */
  mountUpTo: (orderedIds: string[], targetId: string) => void
}

const SectionMountContext = createContext<SectionMountContextValue | null>(null)

export function SectionMountProvider({
  initialMounted,
  children,
}: {
  initialMounted: string[]
  children: ReactNode
}) {
  const [mountedIds, setMountedIds] = useState<Set<string>>(() => new Set(initialMounted))

  const markMounted = useCallback((id: string) => {
    setMountedIds((prev) => (prev.has(id) ? prev : new Set(prev).add(id)))
  }, [])

  const mountUpTo = useCallback((orderedIds: string[], targetId: string) => {
    const targetIndex = orderedIds.indexOf(targetId)
    if (targetIndex === -1) return
    setMountedIds((prev) => {
      const next = new Set(prev)
      for (let i = 0; i <= targetIndex; i++) next.add(orderedIds[i])
      return next
    })
  }, [])

  return (
    <SectionMountContext.Provider value={{ mountedIds, markMounted, mountUpTo }}>
      {children}
    </SectionMountContext.Provider>
  )
}

export function useSectionMount() {
  const ctx = useContext(SectionMountContext)
  if (!ctx) throw new Error('useSectionMount must be used within SectionMountProvider')
  return ctx
}
