import { useMemo, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { NASDAQ_ARC } from '@/lib/content'

/* ==================================================================
   ECONOMIC FORCE — the NASDAQ arc.
   A clean line+area chart of the decade's W-shaped boom and bust.
   The line draws on as the chart scrolls into view (pathLength).
   One accent: tangerine.
   ================================================================== */

// Tangerine, as literal values for SVG stroke / glow.
const TANGERINE = 'rgb(255, 122, 24)'

// Chart viewBox geometry. Generous padding so dot labels never clip.
const VB = { w: 1000, h: 560 }
const PAD = { top: 96, right: 120, bottom: 88, left: 96 }
const PLOT = {
  w: VB.w - PAD.left - PAD.right,
  h: VB.h - PAD.top - PAD.bottom,
}

// Y domain padded a touch beyond the real min/max for breathing room.
const VALUES = NASDAQ_ARC.map((p) => p.value)
const Y_MIN = Math.min(...VALUES)
const Y_MAX = Math.max(...VALUES)
const Y_LO = Y_MIN - (Y_MAX - Y_MIN) * 0.16
const Y_HI = Y_MAX + (Y_MAX - Y_MIN) * 0.1

// Place points evenly across the plot for clean, legible spacing.
function xAt(i: number): number {
  const n = NASDAQ_ARC.length - 1
  return PAD.left + (PLOT.w * i) / n
}
function yAt(value: number): number {
  const t = (value - Y_LO) / (Y_HI - Y_LO)
  return PAD.top + PLOT.h * (1 - t)
}

// Whether a point's label sits above or below its dot, to avoid the line.
// First peak above, the two troughs below, the highs above.
const LABEL_BELOW = [false, true, false, true, false]

export function EconomicChart() {
  const reduced = useReducedMotion()
  const chartRef = useRef<HTMLDivElement>(null)
  const inView = useInView(chartRef, { once: true, margin: '-12% 0px' })
  // Draw once it's in view (or immediately if motion is reduced).
  const draw = inView || reduced

  const points = useMemo(
    () =>
      NASDAQ_ARC.map((p, i) => ({
        ...p,
        x: xAt(i),
        y: yAt(p.value),
        below: LABEL_BELOW[i],
      })),
    [],
  )

  const linePath = useMemo(
    () => points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' '),
    [points],
  )

  const areaPath = useMemo(() => {
    const base = VB.h - PAD.bottom
    const last = points[points.length - 1]
    const top = points.map((p) => `L ${p.x} ${p.y}`).join(' ')
    return `M ${points[0].x} ${base} ${top} L ${last.x} ${base} Z`
  }, [points])

  // Horizontal reference gridlines (purely decorative, very faint).
  const grid = [0.25, 0.5, 0.75].map((t) => PAD.top + PLOT.h * t)

  // Reduced-motion: render the final, fully drawn state with no animation.
  const lineAnim = reduced
    ? { initial: { pathLength: 1 }, animate: { pathLength: 1 } }
    : {
        initial: { pathLength: 0 },
        animate: draw ? { pathLength: 1 } : { pathLength: 0 },
      }

  return (
    <section
      id="economy-viz"
      className="relative overflow-hidden bg-void"
      aria-labelledby="economy-viz-heading"
    >
      {/* ambient tangerine bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[70vmin] w-[80vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,24,0.10),transparent_62%)] blur-3xl"
      />

      <div className="section-pad u-container relative">
        {/* ---- minimal header ---- */}
        <header className="mb-12 flex flex-col gap-5 sm:mb-16">
          <SectionLabel index="II">The Economy · 2000–2010</SectionLabel>
          <h2
            id="economy-viz-heading"
            className="max-w-3xl font-display text-huge font-semibold leading-[0.92] tracking-tight text-ink"
          >
            Two crashes,{' '}
            <span className="text-tangerine">one decade.</span>
          </h2>
          <p className="max-w-md text-mist">
            The NASDAQ across the 2000s — boom, bust, and back.
          </p>
        </header>

        {/* ---- the chart ---- */}
        <div ref={chartRef} className="relative">
          {/* horizontal scroll on small screens so labels stay legible */}
          <div className="-mx-[clamp(1.25rem,5vw,5rem)] overflow-x-auto px-[clamp(1.25rem,5vw,5rem)] pb-2 sm:mx-0 sm:px-0">
            <div className="min-w-[680px] sm:min-w-0">
              <svg
                viewBox={`0 0 ${VB.w} ${VB.h}`}
                className="h-auto w-full"
                role="img"
                aria-labelledby="economy-viz-heading"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="econ-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={TANGERINE} stopOpacity="0.34" />
                    <stop offset="55%" stopColor={TANGERINE} stopOpacity="0.1" />
                    <stop offset="100%" stopColor={TANGERINE} stopOpacity="0" />
                  </linearGradient>
                  <filter
                    id="econ-glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* faint baseline + gridlines */}
                <g aria-hidden stroke="rgba(255,255,255,0.07)" strokeWidth="1">
                  {grid.map((gy) => (
                    <line key={gy} x1={PAD.left} y1={gy} x2={VB.w - PAD.right} y2={gy} />
                  ))}
                </g>
                <line
                  aria-hidden
                  x1={PAD.left}
                  y1={VB.h - PAD.bottom}
                  x2={VB.w - PAD.right}
                  y2={VB.h - PAD.bottom}
                  stroke="rgba(255,255,255,0.16)"
                  strokeWidth="1"
                />

                {/* area fill — fades in once the line has drawn */}
                <motion.path
                  aria-hidden
                  d={areaPath}
                  fill="url(#econ-area)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: draw ? 1 : 0 }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 1, delay: 0.9, ease: 'easeOut' }
                  }
                />

                {/* the line — draws on via pathLength */}
                <motion.path
                  aria-hidden
                  d={linePath}
                  fill="none"
                  stroke={TANGERINE}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#econ-glow)"
                  initial={lineAnim.initial}
                  animate={lineAnim.animate}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 1.9, ease: [0.16, 1, 0.3, 1] }
                  }
                />

                {/* points + labels */}
                {points.map((p, i) => {
                  const labelY = p.below ? p.y + 34 : p.y - 26
                  const valueY = p.below ? p.y + 58 : p.y - 50
                  // appearance timing tracks the line's draw progress
                  const dotDelay = reduced ? 0 : 0.35 + (i / (points.length - 1)) * 1.55
                  return (
                    <g key={p.label}>
                      {/* connector tick */}
                      <motion.line
                        aria-hidden
                        x1={p.x}
                        y1={p.y}
                        x2={p.x}
                        y2={p.below ? p.y + 18 : p.y - 14}
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: draw ? 1 : 0 }}
                        transition={{ duration: 0.4, delay: dotDelay }}
                      />

                      {/* dot */}
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        r="6.5"
                        fill="#060609"
                        stroke={TANGERINE}
                        strokeWidth="3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          draw
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={
                          reduced
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 420, damping: 22, delay: dotDelay }
                        }
                        style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                      />

                      {/* label + value */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: draw ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: dotDelay + 0.1 }}
                      >
                        <text
                          x={p.x}
                          y={labelY}
                          textAnchor="middle"
                          className="fill-mist font-mono"
                          style={{
                            fontSize: '17px',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {p.label}
                        </text>
                        <text
                          x={p.x}
                          y={valueY}
                          textAnchor="middle"
                          className="fill-tangerine font-data"
                          style={{ fontSize: '26px', fontWeight: 600 }}
                        >
                          {p.value.toLocaleString()}
                        </text>
                      </motion.g>
                    </g>
                  )
                })}

                {/* year ticks along the baseline */}
                <g aria-hidden>
                  {points.map((p) => (
                    <text
                      key={`yr-${p.year}`}
                      x={p.x}
                      y={VB.h - PAD.bottom + 34}
                      textAnchor="middle"
                      className="fill-faint font-mono"
                      style={{ fontSize: '15px', letterSpacing: '0.12em' }}
                    >
                      {p.year}
                    </text>
                  ))}
                </g>

                {/* y-axis caption — the index, top-left */}
                <text
                  aria-hidden
                  x={PAD.left}
                  y={PAD.top - 36}
                  className="fill-faint font-mono"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                  }}
                >
                  NASDAQ Composite · index
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* visually-hidden data table — the chart's accessible alternative */}
        <table className="sr-only">
          <caption>NASDAQ Composite index across the 2000s</caption>
          <thead>
            <tr>
              <th scope="col">When</th>
              <th scope="col">Moment</th>
              <th scope="col">Index value</th>
            </tr>
          </thead>
          <tbody>
            {NASDAQ_ARC.map((p) => (
              <tr key={p.label}>
                <td>{p.when}</td>
                <td>{p.label}</td>
                <td>{p.value.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* bottom edge fade for a seamless seam with the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-void to-transparent"
      />
    </section>
  )
}
