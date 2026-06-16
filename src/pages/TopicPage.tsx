import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Counter } from '@/components/ui/Counter'
import { SiteFooter } from '@/components/SiteFooter'
import { href } from '@/lib/router'
import { cn } from '@/lib/cn'
import {
  RIPPLE,
  LENS_EXTRAS,
  PAGE_ORDER,
  type Lens,
} from '@/lib/content'

/* accent token → literal Tailwind classes (kept literal for the JIT) */
const ACCENT_TEXT: Record<string, string> = {
  cobalt: 'text-cobalt',
  tangerine: 'text-tangerine',
  magenta: 'text-magenta',
  cyan: 'text-cyan',
}
const ACCENT_BORDER: Record<string, string> = {
  cobalt: 'border-cobalt',
  tangerine: 'border-tangerine',
  magenta: 'border-magenta',
  cyan: 'border-cyan',
}
const EASE = [0.16, 1, 0.3, 1] as const

export interface TopicPageProps {
  route: Lens
  /** The interactive centerpiece section for this force. */
  children: ReactNode
}

/**
 * One page per force. A consistent spine — claim → interactive evidence →
 * analysis → modern connection → primary sources → onward — so every force
 * is argued the same way, only the content changes.
 */
export function TopicPage({ route, children }: TopicPageProps) {
  const lens = RIPPLE.find((l) => l.id === route)!
  const extras = LENS_EXTRAS[route]
  const reduce = useReducedMotion()
  const accentText = ACCENT_TEXT[lens.accent] ?? 'text-acid'
  const accentBorder = ACCENT_BORDER[lens.accent] ?? 'border-acid'

  // Pager neighbors.
  const idx = PAGE_ORDER.indexOf(route)
  const prev = idx > 0 ? RIPPLE.find((l) => l.id === PAGE_ORDER[idx - 1])! : null
  const next =
    idx < PAGE_ORDER.length - 1
      ? RIPPLE.find((l) => l.id === PAGE_ORDER[idx + 1])!
      : null

  return (
    <article>
      {/* ============================================================
          HEADER — the page's claim
          ============================================================ */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden section-pad">
        {/* oversized faint backdrop numeral */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[clamp(-1rem,2vw,3rem)] top-1/2 -translate-y-1/2 select-none font-display text-[42vh] font-semibold leading-none text-ink/[0.035]"
        >
          {lens.numeral}
        </span>

        <div className="u-container relative">
          <div className="kicker mb-7 flex items-center gap-3">
            <span className={accentText}>Force {lens.numeral}</span>
            <span className="h-px w-10 bg-line-strong" aria-hidden />
            <span>{lens.label}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
            className="max-w-[18ch] font-display text-huge font-semibold leading-[0.95] tracking-tight text-ink"
          >
            {lens.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="measure mt-6 text-lg leading-relaxed text-mist sm:text-xl"
          >
            {lens.tagline}
          </motion.p>

          {/* the page-level thesis */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
            className={cn('mt-10 border-l-2 pl-5 sm:pl-6', accentBorder)}
          >
            <p className="kicker mb-2">Thesis</p>
            <p className="measure font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              {extras.thesis}
            </p>
          </motion.div>

          {/* framing context */}
          <Reveal delay={0.1}>
            <p className="measure mt-9 text-base leading-relaxed text-mist">
              {lens.context}
            </p>
          </Reveal>

          {/* scroll cue */}
          <div className="mt-12 flex items-center gap-3 text-faint">
            <span className="kicker">The evidence</span>
            <span className={cn('h-px w-12', accentBorder, 'border-t')} aria-hidden />
          </div>
        </div>
      </section>

      {/* ============================================================
          THE INTERACTIVE CENTERPIECE
          ============================================================ */}
      {children}

      {/* ============================================================
          ANALYSIS — causes, effects, significance
          ============================================================ */}
      <section className="relative border-t border-line section-pad">
        <div className="u-container">
          <Reveal>
            <SectionLabel index={lens.numeral}>
              Causes, effects &amp; significance
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-[20ch] font-display text-big font-semibold leading-[0.98] tracking-tight text-ink">
              What happened, and why it mattered.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {lens.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="border-t border-line pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className={cn('font-data text-sm', accentText)}>
                      {item.year}
                    </span>
                    {item.stat && (
                      <span className={cn('font-display text-big font-semibold leading-none', accentText)}>
                        <Counter
                          value={item.stat.value}
                          prefix={item.stat.prefix}
                          suffix={item.stat.suffix}
                          decimals={item.stat.decimals}
                        />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {item.blurb}
                  </p>
                  {item.stat && (
                    <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-faint">
                      {item.stat.label}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          THEN → NOW — connections to modern America
          ============================================================ */}
      <section className="relative border-t border-line bg-abyss section-pad">
        <div className="u-container">
          <Reveal>
            <SectionLabel index="↗">Connections to modern America</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="measure mt-6 text-balance text-lg leading-relaxed text-ink sm:text-xl">
              {extras.todayLede}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {extras.thenNow.map((tn, i) => (
              <Reveal key={tn.label} delay={i * 0.06}>
                <div className="lift h-full rounded-2xl bg-surface p-6">
                  <p className={cn('kicker mb-5', accentText)}>{tn.label}</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-faint">
                        Then · 2000s
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-mist">
                        {tn.then}
                      </p>
                    </div>
                    <div className={cn('border-t pt-4', accentBorder, 'border-t')}>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-faint">
                        Now · today
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink">
                        {tn.now}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRIMARY SOURCES
          ============================================================ */}
      <section className="relative border-t border-line section-pad">
        <div className="u-container">
          <Reveal>
            <SectionLabel index="§">Primary sources</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-[24ch] font-display text-big font-semibold leading-[0.98] tracking-tight text-ink">
              Where this information comes from.
            </h2>
          </Reveal>

          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl ring-line">
            {extras.sources.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <li className="grid gap-5 bg-surface p-6 sm:grid-cols-[auto_1fr] sm:gap-8 sm:p-8">
                  <div className="flex items-start gap-4 sm:flex-col sm:items-start sm:gap-3">
                    <span
                      className={cn(
                        'font-display text-big font-bold leading-none',
                        accentText,
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-faint">
                      {s.kind}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1 font-data text-sm text-mist">
                      {s.author} · {s.date}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-mist">
                      <span className={cn('font-semibold', accentText)}>
                        Context.{' '}
                      </span>
                      {s.context}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      <span className="font-semibold text-ink">
                        Bias &amp; perspective.{' '}
                      </span>
                      {s.bias}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          PAGER — onward to the next force
          ============================================================ */}
      <section className="relative border-t border-line bg-abyss py-16 sm:py-20">
        <div className="u-container grid gap-4 sm:grid-cols-2">
          {prev ? (
            <a
              href={href(prev.id)}
              className="group rounded-2xl bg-surface/60 p-6 ring-line transition-colors hover:bg-surface sm:p-7"
            >
              <p className="kicker text-faint">
                ← Force {prev.numeral}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">
                {prev.label}
              </p>
              <p className="mt-1 text-sm text-mist">{prev.headline}</p>
            </a>
          ) : (
            <a
              href={href('')}
              className="group rounded-2xl bg-surface/60 p-6 ring-line transition-colors hover:bg-surface sm:p-7"
            >
              <p className="kicker text-faint">← Home</p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">
                The thesis
              </p>
              <p className="mt-1 text-sm text-mist">All four forces, together.</p>
            </a>
          )}

          {next ? (
            <a
              href={href(next.id)}
              className="group rounded-2xl bg-surface/60 p-6 text-right ring-line transition-colors hover:bg-surface sm:p-7"
            >
              <p className="kicker justify-end text-faint">
                Force {next.numeral} →
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">
                {next.label}
              </p>
              <p className="mt-1 text-sm text-mist">{next.headline}</p>
            </a>
          ) : (
            <a
              href={href('')}
              className="group rounded-2xl bg-surface/60 p-6 text-right ring-line transition-colors hover:bg-surface sm:p-7"
            >
              <p className="kicker justify-end text-faint">Home →</p>
              <p className="mt-2 font-display text-xl font-semibold text-ink">
                Conclusion
              </p>
              <p className="mt-1 text-sm text-mist">How the decade added up.</p>
            </a>
          )}
        </div>
      </section>

      <SiteFooter />
    </article>
  )
}
