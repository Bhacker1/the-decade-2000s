import { useState } from 'react'
import { SmoothScroll } from '@/lib/smooth-scroll'
import { SiteNav } from '@/components/SiteNav'
import { Loader } from '@/components/Loader'
import { Cursor } from '@/components/Cursor'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { HomePage } from '@/pages/HomePage'

/**
 * The whole experience lives on one page: a title screen, the decade-wide
 * thesis, a short summary of each of the four forces, and a close. The nav
 * smooth-scrolls between sections.
 */
function App() {
  const [, setLoaded] = useState(false)

  return (
    <SmoothScroll>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[110] rounded bg-acid px-4 py-2 font-data text-sm font-medium text-void focus:not-sr-only focus-visible:not-sr-only"
      >
        Skip to content
      </a>
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <GrainOverlay />
      <ScrollProgress />
      <SiteNav />

      <main id="main-content" tabIndex={-1} className="relative overflow-clip">
        <HomePage />
      </main>
    </SmoothScroll>
  )
}

export default App
