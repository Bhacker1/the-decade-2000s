import { Hero } from '@/sections/Hero'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Counter } from '@/components/ui/Counter'
import { SiteFooter } from '@/components/SiteFooter'
import { ForceVisual } from '@/components/ForceVisual'
import { cn } from '@/lib/cn'
import {
  RIPPLE,
  PAGE_ORDER,
  FORCE_ANCHOR,
  DECADE_THESIS,
  type RippleLens,
} from '@/lib/content'

const ACCENT_TEXT: Record<string, string> = {
  cobalt: 'text-cobalt',
  tangerine: 'text-tangerine',
  magenta: 'text-magenta',
  cyan: 'text-cyan',
}
const ACCENT_BG: Record<string, string> = {
  cobalt: 'bg-cobalt',
  tangerine: 'bg-tangerine',
  magenta: 'bg-magenta',
  cyan: 'bg-cyan',
}

const FORCES = PAGE_ORDER.map((id) => RIPPLE.find((l) => l.id === id)!)

/**
 * The whole site on one page: a short title, the decade-wide thesis, a compact
 * summary of each of the four forces with its key numbers, and a brief close.
 */
export function HomePage() {
  return (
    <>
      <Hero />

      {/* ---- The thesis ---- */}
      <section className="relative border-t border-line bg-void section-pad">
        <div className="u-container">
          <Reveal>
            <SectionLabel index="✦">The short version</SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-7 max-w-[22ch] font-display text-huge font-semibold leading-[0.95] tracking-tight text-ink">
              A decade of{' '}
              <span className="text-gradient grad-pop">transformation</span>,
              not just progress.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="measure mt-8 text-balance text-lg leading-relaxed text-mist sm:text-xl">
              {DECADE_THESIS.claim}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="measure mt-6 text-base leading-relaxed text-mist">
              There were four main factors that changed. Here they are.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- The four forces, each a short summary ---- */}
      {FORCES.map((force, i) => (
        <ForceSummary key={force.id} force={force} alt={i % 2 === 1} />
      ))}

      {/* ---- Close ---- */}
      <section className="relative border-t border-line bg-void section-pad">
        <div className="u-container text-center">
          <Reveal>
            <SectionLabel index="∞" className="justify-center">
              In the end
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="measure mx-auto mt-8 text-balance text-lg leading-relaxed text-mist sm:text-xl">
              {DECADE_THESIS.body}
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  One compact section per force: label, headline, summary, numbers. */
/* ------------------------------------------------------------------ */

function ForceSummary({ force, alt }: { force: RippleLens; alt: boolean }) {
  const accentText = ACCENT_TEXT[force.accent] ?? 'text-acid'
  const stats = force.items.filter((it) => it.stat)

  return (
    <section
      id={FORCE_ANCHOR[force.id]}
      aria-label={`Force ${force.numeral}: ${force.label}`}
      className={cn(
        'relative scroll-mt-24 border-t border-line section-pad',
        alt ? 'bg-abyss' : 'bg-void',
      )}
    >
      <div className="u-container">
        <Reveal>
          <div className="kicker flex items-center gap-3">
            <span
              aria-hidden
              className={cn('h-2.5 w-2.5 rounded-full', ACCENT_BG[force.accent])}
            />
            <span className={accentText}>Force {force.numeral}</span>
            <span className="h-px w-10 bg-line-strong" aria-hidden />
            <span>{force.label}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-[20ch] font-display text-big font-semibold leading-[0.98] tracking-tight text-ink">
            {force.headline}
          </h2>
        </Reveal>

        {/* body + illustration, sides alternate down the page */}
        <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-16">
          <div className={cn(alt && 'lg:order-2')}>
            <Reveal delay={0.1}>
              <p className="measure text-base leading-relaxed text-mist sm:text-lg">
                {force.context}
              </p>
            </Reveal>

            {stats.length > 0 && (
              <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map((it, i) => (
                  <Reveal key={it.title} delay={0.14 + i * 0.06}>
                    <div className="border-t border-line pt-5">
                      <div
                        className={cn(
                          'font-display text-big font-semibold leading-none',
                          accentText,
                        )}
                      >
                        <Counter
                          value={it.stat!.value}
                          prefix={it.stat!.prefix}
                          suffix={it.stat!.suffix}
                          decimals={it.stat!.decimals}
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {it.stat!.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>

          <div className={cn(alt && 'lg:order-1')}>
            <ForceVisual lens={force.id} accent={force.accent} />
          </div>
        </div>
      </div>
    </section>
  )
}
