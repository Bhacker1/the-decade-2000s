import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { useSmoothScroll } from '@/lib/smooth-scroll'
import { cn } from '@/lib/cn'

/* ============================================================
   The shared site footer — wordmark, span, credit, disclaimer,
   and a back-to-top control. Used at the foot of every page.
   ============================================================ */

export function SiteFooter() {
  const { scrollTo } = useSmoothScroll()
  const reduceMotion = useReducedMotion()

  return (
    <footer className="relative border-t border-line bg-void">
      {/* top edge accent */}
      <div aria-hidden className="grad-pop h-px w-full opacity-50" />

      <div className="u-container-wide pb-16 pt-24 sm:pb-20 sm:pt-32">
        {/* Back to top */}
        <Reveal>
          <button
            type="button"
            onClick={() => scrollTo(0, { duration: 1.8 })}
            className="group mx-auto mb-14 flex flex-col items-center gap-3 text-mist transition-colors duration-300 hover:text-ink sm:mb-16"
            aria-label="Back to top"
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-full ring-line transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-acid/60"
              aria-hidden
            >
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-acid"
                animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut',
                  repeat: Infinity,
                }}
              >
                <path
                  d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </span>
            <span className="kicker">Back to top</span>
          </button>
        </Reveal>

        {/* Wordmark + span */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Reveal>
            <div className="font-display text-mega font-bold leading-[0.82] tracking-[-0.04em] text-ink">
              THE <span className="text-gradient grad-chrome">DECADE</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="kicker flex items-center gap-3 text-mist">
              <span className="font-data text-steel">2000</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden />
              <span className="font-data text-steel">2010</span>
            </div>
          </Reveal>
        </div>

        {/* Credit + disclaimer */}
        <div className="mt-14 flex flex-col items-center gap-8 border-t border-line pt-10 sm:mt-16 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <Reveal className="max-w-md text-center sm:text-left">
            <p className="font-data text-sm leading-relaxed text-faint">
              A history project on how technology changed America from 2000 to
              2010, looked at across four forces.
            </p>
            <p className="font-data mt-2 border-t border-line pt-2 text-sm leading-relaxed text-faint">
              Dates and figures are historical; some are rounded for clarity.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="text-center sm:text-right">
            <div className="flex flex-col items-center gap-1.5 sm:items-end">
              <span className="kicker text-faint">A project on</span>
              <span className="font-display text-lg font-medium tracking-tight text-chrome">
                technology · 2000–2010
              </span>
              <span
                className={cn(
                  'mt-2 inline-flex items-center gap-2 font-data text-sm tracking-wide text-faint',
                )}
              >
                <span
                  aria-hidden
                  className="block h-1.5 w-1.5 rounded-full bg-acid"
                  style={{ boxShadow: '0 0 0 4px rgba(93,107,0,0.18)' }}
                />
                The end
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Oversized faint backdrop wordmark */}
      <div
        aria-hidden
        className="edge-mask-y pointer-events-none relative -mt-4 select-none overflow-hidden"
      >
        <div className="font-display whitespace-nowrap text-center text-[22vw] font-bold leading-none tracking-[-0.05em] text-ink/[0.03]">
          2000–2010
        </div>
      </div>
    </footer>
  )
}
