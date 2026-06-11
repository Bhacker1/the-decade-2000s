import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Counter } from '@/components/ui/Counter'
import { cn } from '@/lib/cn'
import { SOCIAL_NODES } from '@/lib/content'

/* ------------------------------------------------------------------ */
/*  Layout — five platforms placed as a calm constellation.            */
/*  Coordinates are percentages of the stage box (responsive),         */
/*  hand-tuned for generous, balanced spacing.                         */
/* ------------------------------------------------------------------ */

const POSITIONS = [
  { x: 16, y: 28 }, // Wikipedia
  { x: 80, y: 20 }, // MySpace
  { x: 50, y: 54 }, // Facebook (center anchor)
  { x: 19, y: 78 }, // YouTube
  { x: 83, y: 74 }, // Twitter
] as const

/** Links between the nodes — every node tied to the central graph. */
const LINKS: ReadonlyArray<readonly [number, number]> = [
  [2, 0],
  [2, 1],
  [2, 3],
  [2, 4],
  [0, 1],
  [3, 4],
]

const NODES = SOCIAL_NODES.map((node, i) => ({ ...node, ...POSITIONS[i] }))

export function SocialNetwork() {
  const reduced = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { once: true, margin: '-20% 0px' })
  const [active, setActive] = useState<number | null>(null)

  const show = reduced ? true : inView

  return (
    <section id="social-viz" className="section-pad relative overflow-hidden border-t border-line bg-abyss">
      {/* ambient magenta wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 50% at 50% 46%, rgba(184,13,98,0.06), transparent 72%)',
        }}
      />

      <div className="u-container relative">
        {/* ---- Heading ---- */}
        <header className="max-w-2xl">
          <p className="kicker">III · Social</p>
          <h2 className="mt-5 text-huge">The world gets connected.</h2>
          <p className="mt-5 max-w-md text-mist">
            Five platforms wired a generation together — one new connection at a
            time.
          </p>
        </header>

        {/* ---- Constellation stage ---- */}
        <div
          ref={stageRef}
          className="relative mx-auto mt-16 aspect-[4/3] w-full max-w-4xl sm:mt-20 sm:aspect-[16/9]"
          onMouseLeave={() => setActive(null)}
        >
          {/* connecting lines */}
          <svg
            aria-hidden
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {LINKS.map(([a, b], i) => {
              const from = NODES[a]
              const to = NODES[b]
              const lit = active === a || active === b
              return (
                <motion.line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={lit ? 'var(--color-magenta)' : 'rgba(28,27,23,0.8)'}
                  strokeWidth={0.3}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  style={{ opacity: lit ? 0.9 : 0.32 }}
                  initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                  animate={
                    show
                      ? { pathLength: 1, opacity: lit ? 0.9 : 0.32 }
                      : undefined
                  }
                  transition={{
                    pathLength: {
                      duration: 1.1,
                      delay: 0.5 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: { duration: 0.3 },
                  }}
                />
              )
            })}
          </svg>

          {/* platform nodes */}
          {NODES.map((node, i) => {
            const dim = active !== null && active !== i
            return (
              <div
                key={node.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <motion.div
                  initial={reduced ? false : { opacity: 0, scale: 0.4 }}
                  animate={show ? { opacity: 1, scale: 1 } : undefined}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.13,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* cheap continuous float (paused under reduced motion) */}
                  <motion.div
                    animate={
                      reduced
                        ? undefined
                        : { y: [0, i % 2 === 0 ? -7 : 7, 0] }
                    }
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <NodeTile
                      node={node}
                      dim={dim}
                      onActivate={() => setActive(i)}
                    />
                  </motion.div>
                </motion.div>
              </div>
            )
          })}
        </div>

        {/* ---- Headline stat ---- */}
        <div className="mt-16 flex flex-col items-center text-center sm:mt-20">
          <Counter
            value={500}
            suffix="M"
            className="mark text-giant font-display font-semibold leading-none text-ink"
          />
          <p className="mt-4 max-w-xs text-mist">people on Facebook by 2010</p>
        </div>

        {/* screen-reader alternative for the visual data */}
        <p className="sr-only">
          A network of five platforms that connected the world in the 2000s:{' '}
          {SOCIAL_NODES.map((n) => `${n.name} (${n.year})`).join(', ')}. By 2010,
          500 million people were on Facebook.
        </p>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  A single platform tile — its hue, glyph and label.                 */
/* ------------------------------------------------------------------ */

interface NodeTileProps {
  node: (typeof NODES)[number]
  dim: boolean
  onActivate: () => void
}

function NodeTile({ node, dim, onActivate }: NodeTileProps) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      aria-label={`${node.name}, launched ${node.year}`}
      className={cn(
        'group flex flex-col items-center gap-3 outline-none transition-opacity duration-300',
        dim ? 'opacity-40' : 'opacity-100',
      )}
    >
      <span
        aria-hidden
        className="grid h-16 w-16 place-items-center rounded-2xl font-display text-2xl font-semibold text-ink ring-line transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 sm:h-20 sm:w-20 sm:text-3xl"
        style={{
          background: `linear-gradient(155deg, ${node.hue}, ${node.hue}33)`,
          boxShadow: `0 0 0 4px ${node.hue}26, inset 0 0 0 1px rgba(28,27,23,0.10)`,
        }}
      >
        {node.glyph}
      </span>
      <span className="flex flex-col items-center leading-tight">
        <span className="font-display text-sm font-medium text-ink">
          {node.name}
        </span>
        <span className="font-data text-xs text-faint">{node.year}</span>
      </span>
    </button>
  )
}
