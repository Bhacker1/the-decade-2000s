import { motion, useReducedMotion } from 'framer-motion'
import type { Lens } from '@/lib/content'
import { NASDAQ_ARC, SOCIAL_NODES } from '@/lib/content'

/* ============================================================
   ForceVisual — one self-contained illustration per force.
   Built from SVG so it inherits the section's accent color
   (via `currentColor`) and the site's grain/dark palette, so
   it sits seamlessly in the page with no external images.
   ============================================================ */

const EASE = [0.16, 1, 0.3, 1] as const

export function ForceVisual({ lens, accent }: { lens: Lens; accent: string }) {
  const reduce = useReducedMotion()
  const color = `var(--color-${accent})`

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative mx-auto w-full max-w-[480px]"
      style={{ color }}
    >
      {/* ambient accent glow behind the art */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 45%, color-mix(in srgb, currentColor 14%, transparent), transparent 70%)',
        }}
      />
      <div className="overflow-hidden rounded-2xl border border-line bg-surface/50">
        {lens === 'technological' && <TechArt reduce={!!reduce} />}
        {lens === 'economic' && <MarketArt />}
        {lens === 'social' && <NetworkArt />}
        {lens === 'political' && <MegaphoneArt />}
      </div>
    </motion.div>
  )
}

/* ---- Technological: a phone with connectivity arcs over a faint grid ---- */
function TechArt({ reduce }: { reduce: boolean }) {
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" role="img" aria-label="A connected smartphone">
      {/* faint backdrop grid */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.1">
        {[60, 120, 180, 240, 300, 360].map((x) => (
          <line key={`v${x}`} x1={x} y1="20" x2={x} y2="260" />
        ))}
        {[60, 120, 180, 240].map((y) => (
          <line key={`h${y}`} x1="20" y1={y} x2="380" y2={y} />
        ))}
      </g>

      {/* connectivity arcs radiating from the phone */}
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {[1, 2, 3].map((r, i) => (
          <motion.path
            key={r}
            d={`M ${150 - r * 26} 96 A ${r * 30} ${r * 30} 0 0 1 ${150 + r * 26} 96`}
            strokeWidth={3 - i * 0.5}
            opacity={0.55 - i * 0.13}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.55 - i * 0.13 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: EASE }}
          />
        ))}
        <circle cx="150" cy="96" r="3.5" fill="currentColor" stroke="none" />
      </g>

      {/* the phone */}
      <g transform="translate(232 70)">
        <rect x="0" y="0" width="96" height="170" rx="16" fill="currentColor" opacity="0.1" />
        <rect
          x="0" y="0" width="96" height="170" rx="16"
          fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.85"
        />
        <rect x="34" y="9" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.5" />
        {/* app dots */}
        <g fill="currentColor" opacity="0.55">
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <circle key={`${r}-${c}`} cx={26 + c * 22} cy={44 + r * 26} r="5" />
            )),
          )}
        </g>
        <circle cx="48" cy="153" r="7" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      </g>

      {/* scattered "nodes" the device talks to */}
      <g fill="currentColor" opacity="0.4">
        <circle cx="60" cy="210" r="4" />
        <circle cx="110" cy="235" r="3" />
        <circle cx="40" cy="150" r="3" />
      </g>
    </svg>
  )
}

/* ---- Economic: the real NASDAQ arc as a small area+line chart ---- */
function MarketArt() {
  const W = 400
  const H = 280
  const PAD = { t: 40, r: 30, b: 46, l: 30 }
  const values = NASDAQ_ARC.map((p) => p.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const lo = min - (max - min) * 0.15
  const hi = max + (max - min) * 0.12
  const xAt = (i: number) =>
    PAD.l + ((W - PAD.l - PAD.r) * i) / (NASDAQ_ARC.length - 1)
  const yAt = (v: number) =>
    PAD.t + (H - PAD.t - PAD.b) * (1 - (v - lo) / (hi - lo))

  const pts = NASDAQ_ARC.map((p, i) => ({ ...p, x: xAt(i), y: yAt(p.value) }))
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const base = H - PAD.b
  const area = `M ${pts[0].x} ${base} ${pts
    .map((p) => `L ${p.x} ${p.y}`)
    .join(' ')} L ${pts[pts.length - 1].x} ${base} Z`

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="The NASDAQ across the 2000s: a peak, two crashes, and a recovery">
      <defs>
        <linearGradient id="fv-mkt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1={PAD.l} y1={base} x2={W - PAD.r} y2={base} stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <motion.path
        d={area}
        fill="url(#fv-mkt)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      />
      {pts.map((p, i) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="4.5" fill="var(--color-void)" stroke="currentColor" strokeWidth="2.5" />
          <text
            x={p.x}
            y={base + 22}
            textAnchor="middle"
            className="fill-faint font-mono"
            style={{ fontSize: 12, letterSpacing: '0.08em' }}
          >
            {p.year}
          </text>
          {(i === 0 || i === pts.length - 1) && (
            <text
              x={p.x}
              y={p.y - 12}
              textAnchor="middle"
              fill="currentColor"
              className="font-data"
              style={{ fontSize: 13, fontWeight: 600 }}
            >
              {p.value.toLocaleString()}
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}

/* ---- Social: the platform constellation ---- */
const NODE_POS = [
  { x: 70, y: 70 }, // Wikipedia
  { x: 330, y: 58 }, // MySpace
  { x: 200, y: 150 }, // Facebook (center)
  { x: 80, y: 220 }, // YouTube
  { x: 320, y: 210 }, // Twitter
]
const NODE_LINKS: ReadonlyArray<readonly [number, number]> = [
  [2, 0],
  [2, 1],
  [2, 3],
  [2, 4],
  [0, 1],
  [3, 4],
]

function NetworkArt() {
  const nodes = SOCIAL_NODES.map((n, i) => ({ ...n, ...NODE_POS[i] }))
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" role="img" aria-label="Five platforms connected as a network">
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.3">
        {NODE_LINKS.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: EASE }}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <motion.g
          key={n.name}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: EASE }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle cx={n.x} cy={n.y} r={i === 2 ? 26 : 21} fill="currentColor" opacity="0.12" />
          <circle
            cx={n.x}
            cy={n.y}
            r={i === 2 ? 26 : 21}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.8"
          />
          <text
            x={n.x}
            y={n.y + 1}
            textAnchor="middle"
            dominantBaseline="central"
            fill="currentColor"
            className="font-display"
            style={{ fontSize: i === 2 ? 22 : 18, fontWeight: 600 }}
          >
            {n.glyph}
          </text>
          <text
            x={n.x}
            y={n.y + (i === 2 ? 42 : 36)}
            textAnchor="middle"
            className="fill-mist font-mono"
            style={{ fontSize: 10, letterSpacing: '0.06em' }}
          >
            {n.name}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}

/* ---- Political: a megaphone whose voice fans out to everyone ---- */
function MegaphoneArt() {
  const dots = [
    [250, 70], [290, 60], [330, 80], [360, 110],
    [255, 110], [300, 100], [340, 130], [365, 160],
    [260, 150], [300, 145], [340, 175], [300, 195],
    [255, 195], [340, 210], [290, 225],
  ] as const
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" role="img" aria-label="A voice broadcasting out to many people">
      {/* broadcast arcs */}
      <g fill="none" stroke="currentColor" strokeLinecap="round" opacity="0.5">
        {[1, 2, 3].map((r, i) => (
          <motion.path
            key={r}
            d={`M ${150} ${140 - r * 28} A ${r * 30} ${r * 30} 0 0 1 ${150} ${140 + r * 28}`}
            strokeWidth={3 - i * 0.6}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 - i * 0.12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: EASE }}
          />
        ))}
      </g>

      {/* megaphone */}
      <g transform="translate(60 110)" fill="currentColor">
        <path d="M0 8 L40 8 L78 -28 L78 88 L40 52 L0 52 Z" opacity="0.16" />
        <path
          d="M0 8 L40 8 L78 -28 L78 88 L40 52 L0 52 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <rect x="-16" y="8" width="18" height="44" rx="4" fill="currentColor" opacity="0.85" />
      </g>

      {/* the "everyone" the voice reaches */}
      <g fill="currentColor">
        {dots.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={3.5}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.65, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.04, ease: EASE }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        ))}
      </g>
    </svg>
  )
}
