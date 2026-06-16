import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Lens } from '@/lib/content'
import { RIPPLE } from '@/lib/content'
import { Counter } from '@/components/ui/Counter'
import { cn } from '@/lib/cn'

/* accent token → literal Tailwind classes (kept literal so the JIT keeps them) */
const ACCENT_TEXT: Record<string, string> = {
  cobalt: 'text-cobalt',
  tangerine: 'text-tangerine',
  magenta: 'text-magenta',
  cyan: 'text-cyan',
}
const EASE = [0.16, 1, 0.3, 1] as const

export interface ActIntroProps {
  lensId: Lens
  sectionId: string
}

/**
 * One calm, readable screen per "Force" (Technological / Economic / Social /
 * Political). Force label, a big headline, one supporting line, and three key
 * facts — generous whitespace, easy to skim.
 */
export function ActIntro({ lensId, sectionId }: ActIntroProps) {
  const lens = RIPPLE.find((l) => l.id === lensId)!
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const accentText = ACCENT_TEXT[lens.accent] ?? 'text-acid'

  // Three facts — prefer the ones carrying a headline number.
  const facts = [...lens.items]
    .sort((a, b) => (b.stat ? 1 : 0) - (a.stat ? 1 : 0))
    .slice(0, 3)

  return (
    <section
      id={sectionId}
      ref={ref}
      aria-label={`Force ${lens.numeral}: ${lens.label}`}
      className="relative flex min-h-screen items-center overflow-hidden border-t border-line section-pad"
    >
      {/* Oversized, very faint backdrop numeral */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[clamp(-1rem,2vw,3rem)] top-1/2 -translate-y-1/2 select-none font-display text-[42vh] font-semibold leading-none text-ink/[0.035]"
      >
        {lens.numeral}
      </span>

      <div className="u-container relative">
        {/* kicker */}
        <div className="kicker mb-7 flex items-center gap-3">
          <span className={accentText}>Force {lens.numeral}</span>
          <span className="h-px w-10 bg-line-strong" aria-hidden />
          <span>{lens.label}</span>
        </div>

        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.85, ease: EASE }}
          className="max-w-[18ch] font-display text-huge font-semibold leading-[0.95] tracking-tight text-ink"
        >
          {lens.headline}
        </motion.h2>

        {/* one supporting line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
          className="measure mt-6 text-lg leading-relaxed text-mist sm:text-xl"
        >
          {lens.tagline}
        </motion.p>

        {/* three key facts */}
        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-3">
          {facts.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: reduce ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.7, delay: 0.18 + i * 0.1, ease: EASE }}
              className="border-t border-line pt-6"
            >
              {f.stat ? (
                <div className={cn('font-display text-big font-semibold leading-none', accentText)}>
                  <Counter
                    value={f.stat.value}
                    prefix={f.stat.prefix}
                    suffix={f.stat.suffix}
                    decimals={f.stat.decimals}
                  />
                </div>
              ) : (
                <div className={cn('font-data text-sm', accentText)}>{f.year}</div>
              )}
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
