import { useState } from 'react'
import { SmoothScroll } from '@/lib/smooth-scroll'
import { Nav } from '@/components/Nav'
import { Loader } from '@/components/Loader'
import { Cursor } from '@/components/Cursor'
import { GrainOverlay } from '@/components/ui/GrainOverlay'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

import { Hero } from '@/sections/Hero'
import { ActIntro } from '@/sections/ActIntro'
import { IphoneMoment } from '@/sections/IphoneMoment'
import { EconomicChart } from '@/sections/EconomicChart'
import { SocialNetwork } from '@/sections/SocialNetwork'
import { PoliticalMegaphone } from '@/sections/PoliticalMegaphone'
import { Finale } from '@/sections/Finale'

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
      <Nav />

      <main id="main-content" tabIndex={-1} className="relative overflow-clip">
        <Hero />

        {/* Force I — Technological */}
        <ActIntro lensId="technological" sectionId="tech" />
        <IphoneMoment />

        {/* Force II — Economic */}
        <ActIntro lensId="economic" sectionId="economy" />
        <EconomicChart />

        {/* Force III — Social */}
        <ActIntro lensId="social" sectionId="society" />
        <SocialNetwork />

        {/* Force IV — Political */}
        <ActIntro lensId="political" sectionId="politics" />
        <PoliticalMegaphone />

        <Finale />
      </main>
    </SmoothScroll>
  )
}

export default App
