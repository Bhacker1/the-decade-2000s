import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { RIPPLE, PAGE_ORDER, FORCE_ANCHOR } from '@/lib/content'
import { useSmoothScroll } from '@/lib/smooth-scroll'
import { cn } from '@/lib/cn'

/* accent token → literal Tailwind classes (kept literal for the JIT) */
const ACCENT_TEXT: Record<string, string> = {
  cobalt: 'text-cobalt',
  tangerine: 'text-tangerine',
  magenta: 'text-magenta',
  cyan: 'text-cyan',
}

/** The four forces, in reading order, with their numerals + accents + anchors. */
const PAGES = PAGE_ORDER.map((id) => {
  const lens = RIPPLE.find((l) => l.id === id)!
  return { ...lens, anchor: FORCE_ANCHOR[id] }
})

/** Highlight the section currently in view as you scroll. */
function useActiveSection(): string {
  const [active, setActive] = useState('')
  useEffect(() => {
    const ids = ['main-content', ...PAGES.map((p) => p.anchor)]
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id === 'main-content' ? '' : visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return active
}

/**
 * Fixed top chrome: the wordmark scrolls to the top; a centered row of the
 * four forces smooth-scrolls to each section and tracks the one in view; the
 * year-range sits on the right. A glass bottom bar mirrors the links on mobile.
 */
export function SiteNav() {
  const { scrollTo } = useSmoothScroll()
  const active = useActiveSection()

  const go = (anchor: string) => (e: MouseEvent) => {
    e.preventDefault()
    scrollTo(`#${anchor}`, { offset: -72 })
  }
  const goTop = (e: MouseEvent) => {
    e.preventDefault()
    scrollTo(0)
  }

  return (
    <>
      {/* Top bar */}
      <header className="glass pointer-events-auto fixed inset-x-0 top-0 z-[65] flex items-center justify-between gap-4 px-[clamp(1rem,4vw,2.5rem)] py-3">
        <a
          href="#main-content"
          onClick={goTop}
          className={cn(
            'font-display text-sm font-semibold tracking-[0.04em] transition-colors',
            active === '' ? 'text-ink' : 'text-mist hover:text-ink',
          )}
        >
          THE&nbsp;DECADE
        </a>

        {/* Center force links (desktop) */}
        <nav
          aria-label="Section navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {PAGES.map((p) => {
            const isActive = active === p.anchor
            return (
              <a
                key={p.id}
                href={`#${p.anchor}`}
                onClick={go(p.anchor)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group relative rounded-full px-3 py-1.5 font-data text-[0.72rem] tracking-[0.08em] transition-colors',
                  isActive ? 'text-ink' : 'text-mist hover:text-ink',
                )}
              >
                <span
                  className={cn(
                    'mr-1.5 font-semibold',
                    isActive ? ACCENT_TEXT[p.accent] : 'text-faint',
                  )}
                >
                  {p.numeral}
                </span>
                {p.label}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-acid"
                  />
                )}
              </a>
            )
          })}
        </nav>

        <span className="hidden font-data text-xs tracking-[0.2em] text-mist sm:inline">
          2000–2010
        </span>
      </header>

      {/* Mobile bottom bar */}
      <nav
        aria-label="Section navigation"
        className="glass pointer-events-auto fixed inset-x-0 bottom-[max(0.6rem,env(safe-area-inset-bottom))] z-[65] mx-auto flex w-max max-w-[calc(100vw-1rem)] items-center gap-0.5 rounded-full px-1.5 py-1.5 md:hidden"
      >
        <a
          href="#main-content"
          onClick={goTop}
          aria-label="Top"
          aria-current={active === '' ? 'true' : undefined}
          className={cn(
            'rounded-full px-3 py-1.5 font-data text-[0.66rem] tracking-[0.06em] transition-colors',
            active === '' ? 'bg-surface text-ink' : 'text-mist',
          )}
        >
          Top
        </a>
        {PAGES.map((p) => {
          const isActive = active === p.anchor
          return (
            <a
              key={p.id}
              href={`#${p.anchor}`}
              onClick={go(p.anchor)}
              aria-label={p.label}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'rounded-full px-2.5 py-1.5 font-data text-[0.66rem] font-semibold tracking-[0.06em] transition-colors',
                isActive ? cn('bg-surface', ACCENT_TEXT[p.accent]) : 'text-mist',
              )}
            >
              {p.numeral}
            </a>
          )
        })}
      </nav>
    </>
  )
}
