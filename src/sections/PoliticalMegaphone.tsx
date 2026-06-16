import { useRef, useState } from 'react'
import type { FC, KeyboardEvent } from 'react'
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from 'framer-motion'
import { cn } from '@/lib/cn'
import { PressSurface } from '@/sections/political/PressSurface'
import { BlogSurface } from '@/sections/political/BlogSurface'
import { FeedSurface } from '@/sections/political/FeedSurface'

/* ================================================================== */
/*  POLITICAL FORCE — "Who holds the megaphone"                        */
/*  A clean, tap-between-three-steps look at how the medium of         */
/*  political voice shifted across the decade: institutions → citizens */
/*  → the network. Cobalt accent. Facts are fact-checked.              */
/* ================================================================== */

const EASE = [0.16, 1, 0.3, 1] as const

interface Step {
  id: string
  year: string
  who: string
  voice: string
  caption: string
  /** position of the power indicator, 0 = Institutions … 1 = Everyone */
  power: number
}

const STEPS: Step[] = [
  {
    id: 'press',
    year: '2001',
    who: 'The Press',
    voice: 'Voice = institutions',
    caption:
      'After 9/11, the USA PATRIOT Act, signed about 45 days later, expanded surveillance.',
    power: 0,
  },
  {
    id: 'bloggers',
    year: '2004',
    who: 'The Bloggers',
    voice: 'Voice = citizens',
    caption:
      'About 50M blogs were tracked by 2006, and the gatekeepers lost their monopoly.',
    power: 0.5,
  },
  {
    id: 'everyone',
    year: '2008',
    who: 'Everyone',
    voice: 'Voice = the network',
    caption:
      "Obama's online campaign raised about $750M, and he became the first Black US president.",
    power: 1,
  },
]

const POWER_LABEL = ['Institutions', 'A few', 'Everyone']

/* ------------------------------------------------------------------ */
/*  Period media surfaces — minimal CSS mockups, a few lines each      */
/* ------------------------------------------------------------------ */

const SURFACE: Record<string, FC> = {
  press: PressSurface,
  bloggers: BlogSurface,
  everyone: FeedSurface,
}

/* ------------------------------------------------------------------ */
/*  Power indicator — a 3-segment bar that shifts toward "Everyone"    */
/* ------------------------------------------------------------------ */

function PowerIndicator({
  power,
  reduce,
}: {
  power: number
  reduce: boolean
}) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.22em] text-faint">
        <span>Institutions</span>
        <span>Everyone</span>
      </div>
      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-ink/10"
        aria-hidden
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-cobalt"
          initial={false}
          animate={{ width: `${power * 100}%` }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.6, ease: EASE }
          }
        />
        {/* knob */}
        <motion.span
          className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt ring-2 ring-void"
          initial={false}
          animate={{ left: `${power * 100}%` }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.6, ease: EASE }
          }
        />
      </div>
    </div>
  )
}

/* ================================================================== */
/*  ROOT SECTION                                                       */
/* ================================================================== */

export function PoliticalMegaphone() {
  const reduce = useReducedMotion() ?? false
  const [active, setActive] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const headRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headRef, { once: true, margin: '-15% 0px' })

  const step = STEPS[active]
  const Surface = SURFACE[step.id]
  const powerLabel = POWER_LABEL[active]

  const onKeyDown = (e: KeyboardEvent) => {
    let next = active
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (active + 1) % STEPS.length
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')
      next = (active - 1 + STEPS.length) % STEPS.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = STEPS.length - 1
    else return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id="politics-viz"
      className="relative flex min-h-screen items-center overflow-hidden border-t border-line bg-abyss section-pad"
      aria-labelledby="politics-viz-heading"
    >
      {/* soft cobalt wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(46% 40% at 26% 36%, rgba(44,69,200,0.05), transparent 70%)',
        }}
      />

      <div ref={headRef} className="u-container relative">
        {/* kicker + heading + caption */}
        <div className="kicker mb-7 flex items-center gap-3">
          <span className="text-cobalt">Force IV</span>
          <span className="h-px w-10 bg-line-strong" aria-hidden />
          <span>Political</span>
        </div>

        <motion.h2
          id="politics-viz-heading"
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
          className="max-w-[18ch] font-display text-huge font-semibold leading-[0.95] tracking-tight text-ink"
        >
          The megaphone <span className="text-cobalt">changed hands.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
          className="mt-5 max-w-[44ch] text-lg leading-relaxed text-mist"
        >
          Who got to speak, and be heard, shifted across the decade. Tap a
          year.
        </motion.p>

        {/* a11y: data alternative for the screen reader */}
        <p className="sr-only">
          Across the decade, political voice moved from institutions to
          citizens to the whole network. In 2001 the press held the megaphone;
          after 9/11 the USA PATRIOT Act, signed about 45 days later, expanded
          surveillance. By 2004 bloggers held it; about 50 million blogs were
          tracked by 2006 and gatekeepers lost their monopoly. By 2008 everyone
          held it; Obama&apos;s web-powered campaign raised about 750 million
          dollars, much of it online, and he became the first Black US
          president.
        </p>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* ---- LEFT: tablist + power indicator ---- */}
          <div className="flex flex-col gap-7">
            <div
              role="tablist"
              aria-label="The shift in political voice, 2001 to 2008"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex flex-col gap-3"
            >
              {STEPS.map((s, i) => {
                const selected = i === active
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[i] = el
                    }}
                    role="tab"
                    id={`mega-tab-${s.id}`}
                    type="button"
                    aria-selected={selected}
                    aria-controls="mega-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={cn(
                      'group relative flex items-baseline gap-4 rounded-xl border px-5 py-4 text-left transition-colors',
                      selected
                        ? 'border-line-strong bg-surface'
                        : 'border-line bg-surface-2 hover:border-line-strong hover:bg-surface',
                    )}
                  >
                    {/* active rail */}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute inset-x-5 bottom-0 h-0.5 bg-ink transition-opacity',
                        selected ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    <span
                      className={cn(
                        'font-data text-sm tabular-nums transition-colors',
                        selected ? 'text-cobalt' : 'text-faint',
                      )}
                    >
                      {s.year}
                    </span>
                    <span className="flex flex-col">
                      <span
                        className={cn(
                          'self-start font-display text-xl font-semibold leading-tight transition-colors',
                          selected ? 'mark text-ink' : 'text-mist',
                        )}
                      >
                        {s.who}
                      </span>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">
                        {s.voice}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            {/* power indicator */}
            <div className="rounded-xl border border-line bg-surface-2 p-5">
              <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-faint">
                Who holds the power
              </p>
              <PowerIndicator power={step.power} reduce={reduce} />
              <p
                className="mt-3 font-data text-sm text-cobalt"
                aria-live="polite"
              >
                {powerLabel}
              </p>
            </div>
          </div>

          {/* ---- RIGHT: media surface + year + caption ---- */}
          <div
            role="tabpanel"
            id="mega-panel"
            aria-labelledby={`mega-tab-${step.id}`}
            tabIndex={0}
            className="flex flex-col gap-5"
          >
            {/* the framed media surface */}
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_35%,rgba(44,69,200,0.07),transparent_65%)] blur-2xl"
              />
              <div
                className="relative mx-auto aspect-[16/10] w-full max-w-[46rem] overflow-hidden rounded-2xl bg-surface"
                style={{
                  boxShadow:
                    'inset 0 0 0 1px var(--color-line), 0 1px 2px rgba(28,27,23,0.05), 0 16px 40px -24px rgba(28,27,23,0.25)',
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step.id}
                    className="absolute inset-0"
                    initial={reduce ? false : { opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.015 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: 0.5, ease: EASE }
                    }
                  >
                    <Surface />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* year + caption */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`cap-${step.id}`}
                className="flex items-start gap-4"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={
                  reduce ? { duration: 0 } : { duration: 0.4, ease: EASE }
                }
              >
                <span className="font-display text-big font-semibold leading-none text-cobalt">
                  {step.year}
                </span>
                <p className="max-w-[40ch] pt-1 text-sm leading-relaxed text-mist">
                  {step.caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
