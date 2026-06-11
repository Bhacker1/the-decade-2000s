import { useEffect, useState } from 'react'
import { SECTIONS } from '@/lib/content'
import { useSmoothScroll } from '@/lib/smooth-scroll'
import { cn } from '@/lib/cn'

/**
 * Fixed chrome: a wordmark + year range across the top, and a vertical
 * dot-rail on the right that tracks the active section and scroll-jumps.
 */
export function Nav() {
  const { scrollTo } = useSmoothScroll()
  const [active, setActive] = useState(SECTIONS[0].id)

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Top bar */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[65] flex items-center justify-between px-[clamp(1.25rem,5vw,3.5rem)] py-5 mix-blend-difference">
        <button
          type="button"
          onClick={() => scrollTo(0)}
          className="pointer-events-auto font-display text-sm font-semibold tracking-[0.04em] text-ink"
        >
          THE&nbsp;DECADE
        </button>
        <span className="font-data text-xs tracking-[0.2em] text-ink">
          2000 — 2010
        </span>
      </header>

      {/* Right dot-rail */}
      <nav
        aria-label="Section navigation"
        className="fixed right-[clamp(0.9rem,2vw,1.6rem)] top-1/2 z-[65] hidden -translate-y-1/2 flex-col items-end gap-3.5 md:flex"
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(`#${s.id}`)}
              className="group flex items-center gap-3 py-1.5 -my-1.5"
              aria-label={`Go to ${s.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={cn(
                  'font-data text-[0.62rem] tracking-[0.15em] text-mist opacity-0 transition-all duration-300 group-hover:opacity-100',
                  isActive && 'opacity-100 text-ink',
                )}
              >
                {s.label}
              </span>
              <span
                className={cn(
                  'h-px transition-all duration-300',
                  isActive
                    ? 'w-8 bg-acid'
                    : 'w-4 bg-steel/50 group-hover:w-6 group-hover:bg-ink',
                )}
              />
            </button>
          )
        })}
      </nav>

      {/* Mobile bottom dot-bar */}
      <nav
        aria-label="Section navigation"
        className="glass pointer-events-auto fixed inset-x-0 bottom-[max(0.9rem,env(safe-area-inset-bottom))] z-[65] mx-auto flex w-max max-w-[calc(100vw-1.5rem)] items-center gap-1 rounded-full px-2 py-1.5 md:hidden"
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollTo(`#${s.id}`)}
              className="group relative flex h-10 min-w-10 items-center justify-center rounded-full px-2"
              aria-label={`Go to ${s.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  isActive ? 'w-5 bg-acid' : 'w-1.5 bg-steel/50',
                )}
              />
            </button>
          )
        })}
      </nav>
    </>
  )
}
