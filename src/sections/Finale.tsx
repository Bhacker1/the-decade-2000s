import { useMemo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'
import { TIMELINE, QUOTES } from '@/lib/content'
import { useSmoothScroll } from '@/lib/smooth-scroll'

/* ============================================================
   Chapter 07 · A New Canvas — the resolution.
   2010 closes the decade: the iPad opens a third category
   (a magazine you can hold) and Instagram closes the loop
   (camera-first, built for the phone in your pocket). Then a
   grand closing statement, the "stay foolish" coda, and the
   site footer with a back-to-top control.

   Calm, conclusive, premium. After the crescendo of The
   Numbers, this section breathes.
   ============================================================ */

const accentVar = (accent: string) => `var(--color-${accent})`
const withAlpha = (accent: string, alpha: number) =>
  `color-mix(in srgb, var(--color-${accent}) ${Math.round(alpha * 100)}%, transparent)`

/* The arc of the decade, distilled — drives the closing ribbon. */
const ARC = [
  'iPod',
  'iTunes',
  'Web 2.0',
  'iPhone',
  'App Store',
  'iPad',
] as const

export function Finale() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  /* The two milestones that close the decade, pulled from the spine. */
  const ipad = useMemo(() => TIMELINE.find((e) => e.id === 'ipad'), [])
  const instagram = useMemo(
    () => TIMELINE.find((e) => e.id === 'instagram'),
    [],
  )

  return (
    <section
      id="finale"
      ref={sectionRef}
      className="relative overflow-hidden bg-void"
    >
      {/* Ambient closing bloom — warm, settling, never loud. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 70% at 50% -6%, rgba(214,255,59,0.07), transparent 55%), radial-gradient(90% 80% at 84% 30%, rgba(56,232,255,0.06), transparent 60%), radial-gradient(90% 80% at 12% 64%, rgba(255,46,154,0.05), transparent 62%)',
        }}
      />

      {/* ============================================================
          PART A — Chapter 07: A New Canvas
          ============================================================ */}
      <div className="section-pad u-container-wide relative">
        <header className="max-w-4xl">
          <Reveal>
            <SectionLabel>A New Canvas</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-huge font-semibold leading-[0.92] tracking-tight text-ink">
              2010 opens a{' '}
              <span className="relative inline-block">
                <span className="text-gradient grad-pop">third category</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full grad-pop opacity-60"
                />
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-mist sm:text-lg">
              Bigger than a phone, lighter than a laptop — the iPad turned
              software into something you could hold like a magazine. And
              Instagram, born for the camera already in your pocket, closed the
              loop the decade had been drawing all along.
            </p>
          </Reveal>
        </header>

        {/* ---- The canvas stage: iPad + Instagram ---- */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 sm:mt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* The iPad device */}
          <div className="order-2 lg:order-1">
            <IpadDevice reduceMotion={!!reduceMotion} />
          </div>

          {/* The two closing milestones */}
          <div className="order-1 space-y-6 lg:order-2">
            {ipad && (
              <Reveal>
                <MilestoneCard
                  date={ipad.date}
                  title={ipad.title}
                  subtitle={ipad.subtitle}
                  blurb={ipad.blurb}
                  metric={ipad.metric}
                  accent={ipad.accent}
                  glyph="▭"
                />
              </Reveal>
            )}
            {instagram && (
              <Reveal delay={0.08}>
                <MilestoneCard
                  date={instagram.date}
                  title={instagram.title}
                  subtitle={instagram.subtitle}
                  blurb={instagram.blurb}
                  metric={instagram.metric}
                  accent={instagram.accent}
                  glyph="◉"
                />
              </Reveal>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================
          PART B — The grand outro
          ============================================================ */}
      <Outro reduceMotion={!!reduceMotion} />

      {/* ============================================================
          PART C — The footer
          ============================================================ */}
      <Footer reduceMotion={!!reduceMotion} />
    </section>
  )
}

/* ============================================================
   The iPad — a clean CSS/SVG device. Aluminum unibody, glass
   front, a softly drifting on-screen "page" reading content.
   ============================================================ */

function IpadDevice({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <Reveal y={40}>
      <div className="relative mx-auto w-full max-w-[440px]">
        {/* halo */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 blur-3xl"
          style={{
            background:
              'radial-gradient(60% 55% at 50% 45%, rgba(67,102,255,0.22), transparent 70%)',
          }}
        />

        <motion.div
          className="relative aspect-[3/4] w-full will-fx"
          initial={reduceMotion ? undefined : { rotateX: 6, y: 8 }}
          whileInView={reduceMotion ? undefined : { rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1400 }}
        >
          {/* Aluminum body */}
          <div
            className="relative h-full w-full rounded-[8%] p-[3.4%]"
            style={{
              background:
                'linear-gradient(150deg, #e9edf2 0%, #b9bfca 26%, #d6dbe2 52%, #8e949f 78%, #c3c9d2 100%)',
              boxShadow:
                '0 40px 90px -30px rgba(0,0,0,0.8), 0 10px 30px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 6px rgba(0,0,0,0.28)',
            }}
          >
            {/* Glossy edge sheen */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[8%]"
              style={{
                background:
                  'linear-gradient(125deg, rgba(255,255,255,0.5), transparent 28%, transparent 72%, rgba(255,255,255,0.18))',
              }}
            />

            {/* Black bezel + glass */}
            <div className="relative grid h-full w-full place-items-center rounded-[5%] bg-[#0b0b10] p-[5.6%] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              {/* Front camera */}
              <span
                aria-hidden
                className="absolute left-1/2 top-[2.4%] h-[1.6%] w-[1.6%] -translate-x-1/2 rounded-full bg-[#1a1a22] ring-1 ring-white/10"
              />
              {/* Home button */}
              <span
                aria-hidden
                className="absolute bottom-[2%] left-1/2 grid aspect-square w-[7%] -translate-x-1/2 place-items-center rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 38%, #14141b, #050507)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 2px 4px rgba(0,0,0,0.8)',
                }}
              >
                <span className="block h-[34%] w-[34%] rounded-[22%] ring-1 ring-white/25" />
              </span>

              {/* The screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[3%] bg-[#0a0a0f]">
                <IpadScreen reduceMotion={reduceMotion} />
                {/* Glass reflection sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(120deg, rgba(255,255,255,0.12) 0%, transparent 26%, transparent 72%, rgba(255,255,255,0.05) 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* reflection on the floor */}
        <div
          aria-hidden
          className="mx-auto mt-2 h-10 w-[72%] rounded-full"
          style={{
            background:
              'radial-gradient(60% 100% at 50% 0%, rgba(0,0,0,0.5), transparent 75%)',
            filter: 'blur(6px)',
          }}
        />
      </div>
    </Reveal>
  )
}

/* The on-screen "magazine you can hold" — an elegant editorial page. */
function IpadScreen({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="flex h-full w-full flex-col bg-[#0d0d13]">
      {/* status bar */}
      <div className="flex items-center justify-between px-[6%] pt-[4%] text-[clamp(0.42rem,1.7vw,0.6rem)] text-mist">
        <span className="font-data tracking-tight">9:41</span>
        <span className="kicker text-[0.85em] text-faint">A New Canvas</span>
        <span className="flex items-center gap-1" aria-hidden>
          <span className="block h-[0.7em] w-[0.5em] rounded-[1px] bg-mist/70" />
          <span className="font-data">100%</span>
        </span>
      </div>

      {/* hero band */}
      <div className="relative mx-[6%] mt-[5%] overflow-hidden rounded-[2.5%]">
        <div
          className="grad-pop aspect-[16/7] w-full opacity-90"
          style={{
            maskImage:
              'radial-gradient(120% 140% at 30% 0%, #000, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(120% 140% at 30% 0%, #000, transparent 90%)',
          }}
        />
        <div className="absolute inset-0 flex items-end p-[5%]">
          <span className="font-display text-[clamp(0.7rem,3vw,1.3rem)] font-bold leading-[0.9] tracking-tight text-void">
            THE
            <br />
            DECADE
          </span>
        </div>
        {/* sweeping highlight on the page */}
        {!reduceMotion && (
          <motion.span
            aria-hidden
            className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/15"
            animate={{ left: ['-33%', '140%'] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 3.5,
            }}
          />
        )}
      </div>

      {/* headline + text columns (magazine layout) */}
      <div className="mt-[5%] px-[6%]">
        <div className="kicker text-[clamp(0.34rem,1.4vw,0.5rem)] text-acid">
          2010 · The Edition
        </div>
        <div className="mt-[3%] h-[clamp(3px,1.1vw,5px)] w-[78%] rounded-full bg-ink/85" />
        <div className="mt-[3%] h-[clamp(3px,1.1vw,5px)] w-[55%] rounded-full bg-ink/55" />
      </div>

      <div className="mt-[5%] grid flex-1 grid-cols-2 gap-[5%] px-[6%] pb-[6%]">
        {[0, 1].map((col) => (
          <div key={col} className="space-y-[8%]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[clamp(2px,0.7vw,3px)] rounded-full bg-mist/25"
                style={{ width: `${92 - ((i + col) % 4) * 14}%` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   A milestone card — date · title · subtitle · blurb · metric.
   ============================================================ */

interface MilestoneCardProps {
  date: string
  title: string
  subtitle: string
  blurb: string
  metric?: { value: string; label: string }
  accent: string
  glyph: string
}

function MilestoneCard({
  date,
  title,
  subtitle,
  blurb,
  metric,
  accent,
  glyph,
}: MilestoneCardProps) {
  const color = accentVar(accent)
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-surface/40 p-6 ring-line transition-colors duration-500 hover:bg-surface sm:p-7">
      {/* accent rail */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-px"
        style={{ background: color, opacity: 0.6 }}
      />
      {/* corner glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: color }}
      />

      <div className="flex items-start gap-4">
        {/* monogram tile */}
        <div
          className="relative grid h-12 w-12 shrink-0 place-items-center rounded-[28%] ring-line"
          style={{
            background: `linear-gradient(155deg, ${withAlpha(accent, 0.95)}, ${withAlpha(accent, 0.4)})`,
            boxShadow: `0 12px 30px -14px ${color}, inset 0 1px 0 rgba(255,255,255,0.3)`,
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] top-[8%] h-[40%] rounded-[40%]"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0))',
            }}
          />
          <span className="font-display text-xl font-bold leading-none text-void">
            {glyph}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold leading-none tracking-tight text-ink">
              {title}
            </h3>
            <span className="font-data shrink-0 text-[0.7rem] tracking-wide text-faint">
              {date}
            </span>
          </div>
          <p
            className="mt-1.5 text-sm font-medium"
            style={{ color }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-mist">{blurb}</p>

      {metric && (
        <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
          <span
            className="font-display text-2xl font-bold leading-none tracking-tight"
            style={{ color }}
          >
            {metric.value}
          </span>
          <span className="kicker text-faint">{metric.label}</span>
        </div>
      )}
    </div>
  )
}

/* ============================================================
   The grand outro — closing statement + reflective summary +
   the "stay foolish" coda. Scroll-linked atmosphere drift.
   ============================================================ */

function Outro({ reduceMotion }: { reduceMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  /* Slow parallax on the closing word as the resolution scrolls in. */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const driftY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 0.7, 0.3],
  )

  return (
    <div
      ref={ref}
      className="relative border-t border-line bg-abyss/60 py-[clamp(7rem,18vh,15rem)]"
    >
      {/* full-bleed pop glow, drifting */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          opacity: reduceMotion ? 0.4 : glowOpacity,
          background:
            'radial-gradient(70% 60% at 50% 50%, rgba(214,255,59,0.10), transparent 60%), radial-gradient(60% 50% at 22% 38%, rgba(56,232,255,0.08), transparent 62%), radial-gradient(60% 50% at 80% 64%, rgba(255,46,154,0.08), transparent 62%)',
        }}
      />

      {/* hairline grid texture, masked */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(246,246,243,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(246,246,243,0.04) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(70% 60% at 50% 50%, black, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(70% 60% at 50% 50%, black, transparent 78%)',
        }}
      />

      <div className="u-container relative text-center">
        <Reveal>
          <p className="kicker mb-8 inline-flex items-center gap-3 text-mist">
            <span className="text-acid">2010</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden />
            <span>The resolution</span>
          </p>
        </Reveal>

        {/* The grand statement — held at text-huge so the Footer's
            text-mega wordmark stays the unambiguous final crescendo
            (text-mega is reserved for the Hero/Footer bookend pair). */}
        <motion.h2
          style={{ y: reduceMotion ? 0 : driftY }}
          className="font-display text-huge font-bold leading-[0.86] tracking-[-0.03em] text-ink will-fx"
        >
          <Reveal y={40}>
            <span className="block">Everything</span>
          </Reveal>
          <Reveal y={40} delay={0.08}>
            <span className="block text-gradient grad-pop">changed.</span>
          </Reveal>
        </motion.h2>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-9 max-w-[44ch] text-balance font-display text-big font-light leading-tight text-mist">
            The future arrived — and never left.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mx-auto mt-8 max-w-[64ch] text-balance text-base leading-relaxed text-mist sm:text-lg">
            It was never just the gadgets. In ten years the technology rewired
            the economy, the way we connect, and who holds power — knowledge,
            money, friendship, news, and a camera, all folded into a single
            sheet of glass — and the world never looked back.
          </p>
        </Reveal>

        {/* the arc ribbon */}
        <Reveal delay={0.28}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-3">
            {ARC.map((step, i) => (
              <span key={step} className="flex items-center gap-x-2 sm:gap-x-3">
                <span className="rounded-full bg-surface/60 px-3 py-1.5 font-data text-[0.7rem] tracking-wide text-chrome ring-line">
                  {step}
                </span>
                {i < ARC.length - 1 && (
                  <span aria-hidden className="text-acid">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        {/* the coda quote */}
        <Reveal delay={0.34}>
          <figure className="mx-auto mt-16 max-w-2xl">
            <blockquote className="font-display text-big font-light leading-tight tracking-tight text-ink">
              <span className="text-gradient grad-pop">
                “{QUOTES.foolish.text}”
              </span>
            </blockquote>
            <figcaption className="kicker mt-5 text-faint">
              {QUOTES.foolish.attribution}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  )
}

/* ============================================================
   The footer — wordmark, span, credit, disclaimer, back-to-top.
   ============================================================ */

function Footer({ reduceMotion }: { reduceMotion: boolean }) {
  const { scrollTo } = useSmoothScroll()

  return (
    <footer className="relative border-t border-line bg-void">
      {/* top edge accent */}
      <div aria-hidden className="grad-pop h-px w-full opacity-50" />

      {/* Extra breathing room above the wordmark so the eye resolves the
          Outro's closing statement before the text-mega bookend lands. */}
      <div className="u-container-wide pb-16 pt-24 sm:pb-20 sm:pt-32">
        {/* Back to top — full-width inviting control */}
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
              THE{' '}
              <span className="text-gradient grad-chrome">DECADE</span>
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

        {/* Credit + disclaimer + meta row */}
        <div className="mt-14 flex flex-col items-center gap-8 border-t border-line pt-10 sm:mt-16 sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <Reveal className="max-w-md text-center sm:text-left">
            <p className="text-sm leading-relaxed text-mist">
              An interactive showcase — designed &amp; built as a flagship
              experience.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-faint">
              Dates and figures are historical; some are rounded for clarity.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="text-center sm:text-right">
            <div className="flex flex-col items-center gap-1.5 sm:items-end">
              <span className="kicker text-faint">A journey through</span>
              <span className="font-display text-lg font-medium tracking-tight text-chrome">
                technology · 2000—2010
              </span>
              <span
                className={cn(
                  'mt-2 inline-flex items-center gap-2 font-data text-[0.7rem] tracking-wide text-faint',
                )}
              >
                <span
                  aria-hidden
                  className="block h-1.5 w-1.5 rounded-full bg-acid"
                  style={{ boxShadow: '0 0 8px var(--color-acid)' }}
                />
                End of transmission
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Oversized faint backdrop wordmark for depth */}
      <div
        aria-hidden
        className="edge-mask-y pointer-events-none relative -mt-4 select-none overflow-hidden"
      >
        <div className="font-display whitespace-nowrap text-center text-[22vw] font-bold leading-none tracking-[-0.05em] text-ink/[0.03]">
          2000 — 2010
        </div>
      </div>
    </footer>
  )
}
