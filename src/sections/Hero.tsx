import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useInView,
  type Variants,
} from 'framer-motion'
import { cn } from '@/lib/cn'

/* ============================================================
   THE DECADE · Hero — the curtain-raiser.
   Massive kinetic "THE DECADE" title with a masked per-line
   reveal, a slow morphing pop-gradient atmosphere, a faint
   CRT/early-web grid + scanlines, and a scroll-driven parallax
   exit that reads like a camera pulling away.
   ============================================================ */

/* Title lines, split for the staggered mask reveal. */
const TITLE_LINES = ['THE', 'DECADE'] as const

/* Easing — long, confident exponential-out. */
const EASE_OUT = [0.16, 1, 0.3, 1] as const

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.14,
    },
  },
}

/* Each masked line rises from beneath its own clip window. */
const lineVariants: Variants = {
  hidden: { y: '110%', rotate: 2 },
  show: {
    y: '0%',
    rotate: 0,
    transition: { duration: 1.15, ease: EASE_OUT },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE_OUT } },
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const atmosphereRef = useRef<HTMLDivElement>(null)
  const atmosphereInView = useInView(atmosphereRef, {
    margin: '200px 0px 200px 0px',
  })
  const reduceMotion = useReducedMotion()

  /* Scroll progress across the (over-tall) hero for the parallax exit. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  })

  /* Camera-move on exit: title pushes toward the lens + dissolves. */
  const titleScale = useTransform(p, [0, 1], [1, 1.32])
  const titleY = useTransform(p, [0, 1], ['0%', '-26%'])
  const titleOpacity = useTransform(p, [0, 0.55, 0.9], [1, 0.85, 0])
  const titleBlur = useTransform(p, [0, 1], ['blur(0px)', 'blur(6px)'])

  /* Background layers drift at different rates → parallax depth. */
  const blobY = useTransform(p, [0, 1], ['0%', '34%'])
  const blobScale = useTransform(p, [0, 1], [1, 1.18])
  const gridY = useTransform(p, [0, 1], ['0%', '14%'])
  const gridOpacity = useTransform(p, [0, 0.8], [1, 0.2])
  const subOpacity = useTransform(p, [0, 0.35], [1, 0])
  const subY = useTransform(p, [0, 0.5], ['0%', '-60%'])
  const cueOpacity = useTransform(p, [0, 0.18], [1, 0])

  /* With reduced motion, freeze the scroll-linked values to neutral. */
  const sx = (mv: typeof titleScale, fallback: number) =>
    reduceMotion ? fallback : mv
  const sv = <A, B>(mv: A, fallback: B): A | B =>
    reduceMotion ? fallback : mv

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="The Decade — prelude"
      className="relative w-full"
      style={{ height: reduceMotion ? '100svh' : '132svh' }}
    >
      {/* Sticky stage so content stays centered while the section scrolls past. */}
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden bg-void">
        {/* ---------- Atmosphere layer ---------- */}
        <div
          ref={atmosphereRef}
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          {/* Morphing pop-gradient blob */}
          <motion.div
            style={{
              y: sv(blobY, '0%'),
              scale: sx(blobScale, 1),
            }}
            className="absolute inset-0"
          >
            <motion.div
              className="grad-pop absolute left-1/2 top-1/2 h-[78vmin] w-[78vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.55] will-fx"
              style={{ filter: 'blur(90px)' }}
              animate={
                reduceMotion || !atmosphereInView
                  ? undefined
                  : {
                      scale: [1, 1.18, 0.92, 1.08, 1],
                      x: ['-50%', '-42%', '-58%', '-48%', '-50%'],
                      y: ['-50%', '-58%', '-44%', '-54%', '-50%'],
                      borderRadius: [
                        '46% 54% 60% 40% / 52% 44% 56% 48%',
                        '60% 40% 44% 56% / 40% 60% 40% 60%',
                        '38% 62% 56% 44% / 62% 38% 58% 42%',
                        '54% 46% 40% 60% / 46% 54% 50% 50%',
                        '46% 54% 60% 40% / 52% 44% 56% 48%',
                      ],
                    }
              }
              transition={{
                duration: 22,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            {/* Secondary cooler bloom for depth */}
            <motion.div
              className="absolute left-[28%] top-[62%] h-[44vmin] w-[44vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 will-fx"
              style={{
                background:
                  'radial-gradient(circle, var(--color-cyan), transparent 68%)',
                filter: 'blur(70px)',
              }}
              animate={
                reduceMotion || !atmosphereInView
                  ? undefined
                  : { x: [0, 60, -30, 0], y: [0, -40, 30, 0] }
              }
              transition={{
                duration: 26,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute right-[24%] top-[30%] h-[40vmin] w-[40vmin] translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 will-fx"
              style={{
                background:
                  'radial-gradient(circle, var(--color-magenta), transparent 68%)',
                filter: 'blur(72px)',
              }}
              animate={
                reduceMotion || !atmosphereInView
                  ? undefined
                  : { x: [0, -50, 40, 0], y: [0, 50, -25, 0] }
              }
              transition={{
                duration: 30,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Vignette to seat the type in darkness */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(120% 100% at 50% 42%, transparent 38%, rgba(6,6,9,0.55) 72%, var(--color-void) 100%)',
            }}
          />

          {/* CRT / early-web grid, drifting */}
          <motion.div
            style={{
              y: sv(gridY, '0%'),
              opacity: sv(gridOpacity, 0.45),
            }}
            className="absolute inset-0 opacity-45"
          >
            <motion.div
              className="absolute inset-[-20%]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(214,255,59,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(214,255,59,0.07) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
                maskImage:
                  'radial-gradient(80% 70% at 50% 45%, black, transparent 78%)',
                WebkitMaskImage:
                  'radial-gradient(80% 70% at 50% 45%, black, transparent 78%)',
              }}
              animate={
                reduceMotion ? undefined : { backgroundPositionY: [0, 64] }
              }
              transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>

          {/* Scanlines — faint CRT texture */}
          <div
            className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)',
            }}
          />

          {/* Sweeping scan beam (skipped under reduced motion) */}
          {!reduceMotion && (
            <motion.div
              className="absolute inset-x-0 h-[18vh]"
              style={{
                background:
                  'linear-gradient(to bottom, transparent, rgba(56,232,255,0.06), transparent)',
              }}
              animate={{ top: ['-20%', '120%'] }}
              transition={{
                duration: 9,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          )}
        </div>

        {/* ---------- Content layer ---------- */}
        <motion.div
          style={{
            scale: sx(titleScale, 1),
            y: sv(titleY, '0%'),
            opacity: sv(titleOpacity, 1),
            filter: sv(titleBlur, 'blur(0px)'),
          }}
          className="relative z-10 w-full will-fx"
        >
          <div className="u-container-wide flex flex-col items-center text-center">
            {/* Top eyebrow */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1, duration: 1, ease: EASE_OUT }}
              className="kicker mb-6 flex items-center gap-3 text-mist sm:mb-8"
            >
              <span className="text-acid">00</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden />
              <span>Prelude</span>
            </motion.p>

            {/* Kinetic masked title */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="font-display text-mega font-bold leading-[0.84] tracking-[-0.04em] text-ink"
            >
              {TITLE_LINES.map((line, i) => (
                <span
                  key={line}
                  className="block overflow-hidden pb-[0.06em]"
                >
                  <motion.span
                    variants={lineVariants}
                    className={cn(
                      'block will-fx',
                      i === TITLE_LINES.length - 1 &&
                        'text-gradient grad-pop',
                    )}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Supporting line */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.62, duration: 1, ease: EASE_OUT }}
              className="mt-7 max-w-[34ch] text-balance font-display text-big font-light leading-tight text-mist sm:mt-9"
            >
              When technology{' '}
              <span className="text-ink">exploded.</span>
            </motion.p>

            {/* Mono sub */}
            <motion.div
              style={{ opacity: sv(subOpacity, 1), y: sv(subY, '0%') }}
              className="mt-8 sm:mt-10"
            >
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.82, duration: 1, ease: EASE_OUT }}
                className="kicker flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-faint"
              >
                <span className="font-data text-steel">2000</span>
                <motion.span
                  aria-hidden
                  className="text-acid"
                  animate={
                    reduceMotion ? undefined : { opacity: [0.4, 1, 0.4] }
                  }
                  transition={{
                    duration: 2.4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.span>
                <span className="font-data text-steel">2010</span>
                <span className="mx-1 h-3 w-px bg-line-strong" aria-hidden />
                <span>Four forces · one decade</span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------- Scroll cue ---------- */}
        <motion.div
          style={{ opacity: sv(cueOpacity, 1) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1, ease: EASE_OUT }}
          className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-9"
        >
          <span className="kicker text-faint">Scroll</span>
          <span
            className="relative block h-12 w-px overflow-hidden bg-line-strong"
            aria-hidden
          >
            {!reduceMotion && (
              <motion.span
                className="absolute inset-x-0 top-0 h-4 bg-acid"
                animate={{ y: ['-100%', '320%'] }}
                transition={{
                  duration: 1.9,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 0.4,
                }}
              />
            )}
          </span>
        </motion.div>

        {/* Bottom seam fade into the next (iPod) chapter */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--color-void))',
          }}
          aria-hidden
        />
      </div>
    </section>
  )
}
