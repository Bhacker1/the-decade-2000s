import { useCallback, useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import type { PanInfo } from 'framer-motion'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Counter } from '@/components/ui/Counter'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/cn'
import { IPHONE_APPS, IPHONE_DOCK, QUOTES, TIMELINE } from '@/lib/content'
import type { PhoneApp } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

/* ------------------------------------------------------------------ */
/*  Small environment guards (mobile / reduced motion fallbacks)       */
/* ------------------------------------------------------------------ */

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return reduced
}

const IPHONE_EVENT = TIMELINE.find((t) => t.id === 'iphone')

/* ================================================================== */
/*  ACT 1 — THE MORPH                                                   */
/*  Three identities converge into one device as you scroll.           */
/* ================================================================== */

const TRIAD = [
  { id: 'ipod', label: 'an iPod', sub: 'widescreen · touch controls' },
  { id: 'phone', label: 'a phone', sub: 'revolutionary' },
  { id: 'net', label: 'an internet communicator', sub: 'the whole web' },
] as const

function MorphAct({ reduced }: { reduced: boolean }) {
  // Clean, legible stacked reveal — the three identities resolve into one,
  // each line fading up in sequence. No scroll-scrub (which overlapped).
  const reveal = (i: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-12% 0px' },
    transition: {
      duration: reduced ? 0 : 0.7,
      delay: reduced ? 0 : i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  })

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* ambient bloom */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,255,59,0.18),transparent_62%)] blur-2xl" />
      </div>

      <div className="relative flex flex-col items-center gap-7">
        <SectionLabel className="justify-center">
          The Moment · Jan 9, 2007
        </SectionLabel>

        <motion.p
          {...reveal(0)}
          className="font-mono text-xs uppercase tracking-[0.32em] text-mist"
        >
          Three things —
        </motion.p>

        <ul className="flex flex-col items-center gap-2">
          {TRIAD.map((t, i) => (
            <motion.li
              key={t.id}
              {...reveal(1 + i)}
              className="text-big font-display tracking-tight text-chrome"
            >
              {t.label}
            </motion.li>
          ))}
        </ul>

        <motion.p
          {...reveal(4)}
          className="font-mono text-xs uppercase tracking-[0.32em] text-mist"
        >
          are not three separate devices.
        </motion.p>

        <motion.h2
          {...reveal(5)}
          className="text-giant font-display leading-[0.9] tracking-tight"
        >
          <span className="text-mist">…one device.</span>{' '}
          <span className="grad-pop text-gradient">iPhone.</span>
        </motion.h2>

        {/* the quote */}
        <motion.figure {...reveal(6)} className="mt-6 max-w-xl">
          <blockquote className="text-balance font-display text-lg text-mist sm:text-xl">
            “{QUOTES.iphone.text}”
          </blockquote>
          <figcaption className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-faint">
            {QUOTES.iphone.attribution}
          </figcaption>
        </motion.figure>
      </div>
    </div>
  )
}

/* ================================================================== */
/*  SLIDE TO UNLOCK                                                     */
/* ================================================================== */

function SlideToUnlock({
  onUnlock,
  reduced,
}: {
  onUnlock: () => void
  reduced: boolean
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [range, setRange] = useState(0)
  const knob = 56

  useEffect(() => {
    const measure = () => {
      const w = trackRef.current?.offsetWidth ?? 0
      setRange(Math.max(0, w - knob - 8))
    }
    measure()
    window.addEventListener('resize', measure)
    // A late web-font swap can change the track width after first paint, so
    // re-measure once fonts are ready (guarded for environments without it).
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure)
    }
    return () => window.removeEventListener('resize', measure)
  }, [])

  const hintOpacity = useTransform(x, [0, range * 0.7], [1, 0])
  const fillOpacity = useTransform(x, [0, range], [0, 0.85])
  const fillWidth = useTransform(x, (v) => v + knob - 8)

  const handleEnd = (_e: unknown, info: PanInfo) => {
    if (info.offset.x >= range * 0.7) {
      x.set(range)
      onUnlock()
    } else {
      x.set(0)
    }
  }

  return (
    <div
      ref={trackRef}
      className="relative h-[58px] w-full overflow-hidden rounded-full bg-black/55 ring-1 ring-white/10"
      role="group"
      aria-label="Slide to unlock"
    >
      {/* fill that follows the knob */}
      <motion.div
        aria-hidden
        className="absolute inset-y-1 left-1 rounded-full bg-gradient-to-r from-white/5 to-white/20"
        style={{ width: fillWidth, opacity: fillOpacity }}
      />

      {/* shimmering hint text */}
      <motion.span
        className="iphone-shimmer pointer-events-none absolute inset-0 flex items-center justify-center pl-10 text-[15px] font-medium tracking-wide"
        style={{ opacity: hintOpacity }}
        aria-hidden
      >
        slide to unlock
      </motion.span>

      {/* the draggable knob — also a real button for keyboard/click a11y */}
      <motion.button
        type="button"
        drag={reduced ? false : 'x'}
        dragConstraints={{ left: 0, right: range }}
        dragElastic={0}
        dragMomentum={false}
        style={{ x }}
        onDragEnd={handleEnd}
        onClick={() => {
          // tap / keyboard activation unlocks immediately (and is the
          // primary path under reduced motion).
          x.set(range)
          onUnlock()
        }}
        aria-label={
          reduced ? 'Unlock iPhone' : 'Slide or press to unlock iPhone'
        }
        className="absolute left-1 top-1 grid h-[50px] w-[56px] place-items-center rounded-full bg-gradient-to-b from-[#fbfbfb] to-[#c9ccd2] text-[#1b1b22] shadow-[0_2px_8px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-acid"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <style>{`
        @keyframes iphone-shine {
          0% { background-position: -160% 0; }
          100% { background-position: 260% 0; }
        }
        .iphone-shimmer {
          color: rgba(255,255,255,0.32);
          background: linear-gradient(100deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0) 65%);
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: iphone-shine 2.6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .iphone-shimmer { animation: none; color: rgba(255,255,255,0.55); -webkit-text-fill-color: rgba(255,255,255,0.55); }
        }
      `}</style>
    </div>
  )
}

/* ================================================================== */
/*  STATUS BAR                                                          */
/* ================================================================== */

function StatusBar({ dark = false }: { dark?: boolean }) {
  const tone = dark ? 'text-white' : 'text-white'
  return (
    <div
      className={cn(
        'flex h-7 shrink-0 items-center justify-between px-3 text-[11px] font-semibold',
        tone,
      )}
      aria-hidden
    >
      <span className="flex items-center gap-1">
        {/* signal bars */}
        <span className="flex items-end gap-[2px]">
          {[5, 7, 9, 11].map((h, i) => (
            <span
              key={h}
              className="w-[3px] rounded-[1px] bg-white"
              style={{ height: h, opacity: i < 3 ? 1 : 0.35 }}
            />
          ))}
        </span>
        <span className="ml-1 tracking-tight">AT&amp;T</span>
      </span>
      <span className="font-data tracking-tight">9:41 AM</span>
      <span className="flex items-center gap-1">
        <span className="tracking-tight">100%</span>
        <span className="relative inline-block h-[11px] w-[22px] rounded-[3px] border border-white/80">
          <span className="absolute inset-[1.5px] rounded-[1px] bg-white" />
          <span className="absolute -right-[3px] top-1/2 h-[5px] w-[2px] -translate-y-1/2 rounded-r bg-white/80" />
        </span>
      </span>
    </div>
  )
}

/* ================================================================== */
/*  APP ICON                                                            */
/* ================================================================== */

function AppIcon({
  app,
  onOpen,
}: {
  app: PhoneApp
  onOpen: (app: PhoneApp) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(app)}
      className="group flex flex-col items-center gap-1 outline-none"
      aria-label={`Open ${app.name}`}
    >
      <motion.span
        layoutId={`icon-${app.name}`}
        whileTap={{ scale: 0.86 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-[22%] text-[clamp(18px,5.5vw,26px)] shadow-[0_2px_6px_rgba(0,0,0,0.5)] ring-1 ring-black/30 transition-transform group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-acid"
        style={{ background: app.bg }}
      >
        {/* glossy top highlight — the original iOS gloss */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-[22%] bg-gradient-to-b from-white/45 to-transparent"
        />
        <span className="relative drop-shadow-sm">{app.glyph}</span>
      </motion.span>
      <span className="max-w-full truncate text-[10px] font-medium leading-tight text-white/95 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
        {app.name}
      </span>
    </button>
  )
}

/* ================================================================== */
/*  FAUX APP SCREEN — themed content per app                            */
/* ================================================================== */

function appCopy(name: string): { title: string; lines: string[] } {
  const map: Record<string, { title: string; lines: string[] }> = {
    Safari: {
      title: 'Safari',
      lines: [
        'The real internet — not the “mobile web.”',
        'Pinch to zoom. Double-tap a column to fit.',
        'apple.com',
      ],
    },
    Mail: {
      title: 'Mail',
      lines: ['Inbox (1)', 'Rich HTML email, in your pocket.', 'Push, then pull-to-check.'],
    },
    Phone: {
      title: 'Phone',
      lines: ['Visual Voicemail', 'Tap a name. No menus, no keypad dance.', 'Favorites · Recents · Contacts'],
    },
    iPod: {
      title: 'iPod',
      lines: ['Cover Flow', 'Flick through album art with a finger.', '1,000 songs, again — in here too.'],
    },
    Maps: {
      title: 'Maps',
      lines: ['Find current location', 'Drag the world with one finger.', 'Traffic · Satellite · Hybrid'],
    },
    YouTube: {
      title: 'YouTube',
      lines: ['Featured', 'The whole web’s video, on a screen in hand.', 'Most Viewed · Top Rated'],
    },
    Weather: {
      title: 'Weather',
      lines: ['Cupertino · 72°', 'A whole forecast at a glance.', 'Swipe between cities.'],
    },
    Photos: {
      title: 'Photos',
      lines: ['Camera Roll', 'Flick, pinch, and rotate your library.', 'Tap to fill the glass.'],
    },
    Calendar: {
      title: 'Calendar',
      lines: ['Today', 'Day · Week · List, in your pocket.', 'June 29 — release day.'],
    },
    Notes: {
      title: 'Notes',
      lines: ['New Note', 'Type with a keyboard that isn’t there.', 'Your finger is the only stylus.'],
    },
    Stocks: {
      title: 'Stocks',
      lines: ['AAPL ▲', 'Markets, refreshed in your hand.', 'Tap a ticker for the chart.'],
    },
    Settings: {
      title: 'Settings',
      lines: ['Airplane Mode', 'Wi-Fi · Sounds · Brightness', 'It just works.'],
    },
  }
  return (
    map[name] ?? {
      title: name,
      lines: [
        'A single sheet of glass.',
        'Multi-touch. No stylus. No keyboard.',
        'Your finger is the only one you’ll ever need.',
      ],
    }
  )
}

function AppScreen({
  app,
  onClose,
}: {
  app: PhoneApp
  onClose: () => void
}) {
  const copy = appCopy(app.name)
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col bg-[#0c0c10]"
      initial={{ opacity: 0, scale: 0.18 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.18 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      style={{ originX: 0.5, originY: 0.55 }}
      role="group"
      aria-label={`${app.name} app`}
    >
      <StatusBar dark />

      {/* nav bar */}
      <div className="relative flex h-11 shrink-0 items-center justify-center border-b border-white/10 bg-gradient-to-b from-white/10 to-transparent px-3">
        <button
          type="button"
          onClick={onClose}
          className="absolute left-2 flex items-center gap-1 rounded-md px-2 py-1 text-[12px] text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-acid"
          aria-label="Back to home screen"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Home
        </button>
        <span className="text-[14px] font-semibold text-white">
          {copy.title}
        </span>
      </div>

      {/* app body */}
      <div className="flex-1 overflow-hidden p-5">
        <div className="flex items-center gap-3">
          <span
            className="grid h-12 w-12 place-items-center overflow-hidden rounded-[22%] text-2xl ring-1 ring-black/30"
            style={{ background: app.bg }}
            aria-hidden
          >
            {app.glyph}
          </span>
          <div>
            <p className="text-[15px] font-semibold text-white">{copy.title}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              version 1.0 · 2007
            </p>
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {copy.lines.map((line, i) => (
            <motion.li
              key={line}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + i * 0.07, duration: 0.4 }}
              className="rounded-xl bg-white/[0.04] px-3 py-2.5 text-[13px] leading-snug text-white/80 ring-1 ring-white/5"
            >
              {line}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

/* ================================================================== */
/*  THE DEVICE — lock screen, springboard, app                         */
/* ================================================================== */

type Phase = 'locked' | 'home'

function PhoneDevice({ reduced }: { reduced: boolean }) {
  const [phase, setPhase] = useState<Phase>('locked')
  const [openApp, setOpenApp] = useState<PhoneApp | null>(null)

  const handleHome = useCallback(() => {
    if (openApp) setOpenApp(null)
  }, [openApp])

  // Esc closes an open app; closing returns to springboard.
  useEffect(() => {
    if (!openApp) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenApp(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openApp])

  return (
    <div className="relative mx-auto w-[clamp(248px,78vw,320px)]">
      {/* ALUMINUM BEZEL */}
      <div className="relative aspect-[320/520] rounded-[44px] bg-gradient-to-b from-[#f4f6f8] via-[#aeb3bb] to-[#6f747d] p-[3px] shadow-[0_30px_60px_-28px_rgba(28,27,23,0.38),0_0_0_1px_rgba(255,255,255,0.18)_inset]">
        <div className="relative h-full w-full rounded-[42px] bg-gradient-to-b from-[#2a2c30] to-[#0c0d10] p-[10px]">
          {/* GLASS */}
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[30px] bg-black ring-1 ring-white/10">
            {/* earpiece + camera */}
            <div className="flex items-center justify-center gap-3 py-2" aria-hidden>
              <span className="h-[5px] w-9 rounded-full bg-[#1c1c20] ring-1 ring-white/5" />
            </div>

            {/* ---- SCREEN STACK ---- */}
            <div className="relative flex-1 overflow-hidden rounded-[6px]">
              <AnimatePresence>
                {phase === 'locked' && (
                  <LockScreen
                    key="lock"
                    reduced={reduced}
                    onUnlock={() => setPhase('home')}
                  />
                )}
              </AnimatePresence>

              {phase === 'home' && (
                <HomeScreen onOpen={(a) => setOpenApp(a)} />
              )}

              <AnimatePresence>
                {openApp && (
                  <AppScreen app={openApp} onClose={() => setOpenApp(null)} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* HOME BUTTON (below glass, on chin) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[6px] flex justify-center">
        <button
          type="button"
          onClick={handleHome}
          disabled={!openApp}
          aria-label="Home button — return to home screen"
          className={cn(
            'pointer-events-auto grid h-[34px] w-[34px] place-items-center rounded-full bg-gradient-to-b from-[#16171a] to-[#050506] ring-1 ring-white/15 transition',
            openApp
              ? 'cursor-pointer hover:ring-acid/60'
              : 'cursor-default opacity-90',
          )}
        >
          <span className="block h-[13px] w-[13px] rounded-[4px] border border-white/45" />
        </button>
      </div>
    </div>
  )
}

/* ---- LOCK SCREEN ---- */

function LockScreen({
  onUnlock,
  reduced,
}: {
  onUnlock: () => void
  reduced: boolean
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', opacity: 0.6 }}
      transition={{ type: 'spring', stiffness: 240, damping: 30 }}
    >
      {/* classic clouds wallpaper, abstracted */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a2a55_0%,#1f6fc0_45%,#7fc4ff_100%)]" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 [background:radial-gradient(60%_30%_at_30%_70%,rgba(255,255,255,0.55),transparent_60%),radial-gradient(50%_24%_at_75%_82%,rgba(255,255,255,0.45),transparent_60%)]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />
        <div className="flex flex-1 flex-col items-center pt-6">
          <p className="font-data text-[13px] font-medium text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
            Tuesday, June 29
          </p>
          <p className="mt-1 font-data text-[56px] font-light leading-none text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
            9:41
          </p>
        </div>
        <div className="px-4 pb-5">
          <SlideToUnlock onUnlock={onUnlock} reduced={reduced} />
        </div>
      </div>
    </motion.div>
  )
}

/* ---- HOME SCREEN / SPRINGBOARD ---- */

function HomeScreen({ onOpen }: { onOpen: (app: PhoneApp) => void }) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col"
      initial={{ opacity: 0, scale: 1.06 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* dark linen-ish wallpaper */}
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#23252b,#070708)]"
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar dark />

        {/* app grid */}
        <div className="grid flex-1 grid-cols-4 content-start gap-x-3 gap-y-4 px-4 pt-3">
          {IPHONE_APPS.map((app) => (
            <AppIcon key={app.name} app={app} onOpen={onOpen} />
          ))}
        </div>

        {/* page dots */}
        <div className="flex items-center justify-center gap-1.5 pb-2" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        </div>

        {/* DOCK */}
        <div className="mx-2 mb-3 grid grid-cols-4 gap-3 rounded-[20px] border-t border-white/10 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm">
          {IPHONE_DOCK.map((app) => (
            <AppIcon key={app.name} app={app} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ================================================================== */
/*  COPY COLUMN                                                         */
/* ================================================================== */

function CopyColumn() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <div ref={ref} className="flex flex-col gap-7">
      <p className="kicker">Hands on the glass</p>

      <motion.h2
        className="font-display text-huge font-semibold leading-[0.92] tracking-tight text-ink"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Reinventing the phone,
        <br />
        <span className="grad-pop text-gradient">one finger at a time.</span>
      </motion.h2>

      <motion.p
        className="max-w-md text-mist"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        No stylus. No plastic keyboard. No menus to bury you. Just a single
        sheet of glass and multi-touch — pinch, flick, tap. The most natural
        pointing device anyone ever shipped was the one already attached to
        your hand.
      </motion.p>

      <blockquote className="border-l-2 border-acid/60 pl-4">
        <p className="font-display text-base text-chrome">
          “{QUOTES.iphoneTriad.text}”
        </p>
        <cite className="mt-2 block font-mono text-[0.66rem] uppercase not-italic tracking-[0.28em] text-faint">
          {QUOTES.iphoneTriad.attribution}
        </cite>
      </blockquote>

      {/* meta row: dates + stat */}
      <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 sm:grid-cols-3">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">
            Unveiled
          </p>
          <p className="mt-1 font-data text-sm text-ink">
            {IPHONE_EVENT?.date ?? 'Jan 9, 2007'}
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">
            Released
          </p>
          <p className="mt-1 font-data text-sm text-ink">Jun 29, 2007</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-faint">
            First-gen units sold
          </p>
          <p className="mt-1">
            <Counter
              value={6.1}
              decimals={1}
              suffix="M"
              className="text-big font-display text-acid"
            />
          </p>
        </div>
      </div>

      <p className="max-w-md text-sm text-mist">
        Try it. Slide to unlock — then tap an icon to open it, and press the
        home button to come back. Keyboard works too:{' '}
        <span className="font-mono text-ink">Enter</span> to unlock,{' '}
        <span className="font-mono text-ink">Esc</span> to go home.
      </p>
    </div>
  )
}

/* ================================================================== */
/*  ROOT SECTION                                                        */
/* ================================================================== */

export function IphoneMoment() {
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLElement>(null)
  const deviceWrapRef = useRef<HTMLDivElement>(null)

  // Subtle entrance for the device — a settle from below as it scrolls in.
  useGSAP(
    () => {
      if (reduced || window.innerWidth < 768) return
      const el = deviceWrapRef.current
      if (!el) return
      gsap.fromTo(
        el,
        { y: 70, rotateX: 10, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          ease: 'power3.out',
          duration: 1.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 1,
          },
        },
      )
    },
    { scope: rootRef, dependencies: [reduced] },
  )

  return (
    <section
      id="iphone"
      ref={rootRef}
      className="relative overflow-hidden border-t border-line bg-abyss"
      aria-labelledby="iphone-heading"
    >
      <h2 id="iphone-heading" className="sr-only">
        The Moment — Apple reinvents the phone, January 9, 2007
      </h2>

      {/* top edge fade for a seamless seam with the prior section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-void to-transparent"
      />

      {/* ACT 1 — THE MORPH */}
      <MorphAct reduced={reduced} />

      {/* ACT 2 — THE INTERACTIVE iPHONE */}
      <div className="section-pad u-container relative">
        {/* faint backdrop bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[70vmin] w-[70vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,13,98,0.05),transparent_62%)] blur-3xl"
        />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* COPY */}
          <CopyColumn />

          {/* DEVICE */}
          <div
            ref={deviceWrapRef}
            className="[perspective:1200px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <PhoneDevice reduced={reduced} />
          </div>
        </div>
      </div>

      {/* bottom edge fade toward the App Store explosion */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-void to-transparent"
      />
    </section>
  )
}
