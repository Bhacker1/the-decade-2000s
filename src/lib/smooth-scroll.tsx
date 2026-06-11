import {
  createContext,
  useContext,
  useEffect,
  useRef,
} from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type ScrollTarget = number | string | HTMLElement

interface SmoothScrollCtx {
  scrollTo: (target: ScrollTarget, opts?: { offset?: number; duration?: number }) => void
}

const Ctx = createContext<SmoothScrollCtx>({ scrollTo: () => {} })

/** Access programmatic smooth-scroll (used by nav). */
export function useSmoothScroll() {
  return useContext(Ctx)
}

/**
 * Wraps the app in a Lenis smooth-scroll instance that is wired into the
 * GSAP ticker so ScrollTrigger stays perfectly in sync. Honors
 * prefers-reduced-motion by falling back to native scrolling.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Let layout settle, then sync triggers.
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 300)

    return () => {
      window.clearTimeout(refresh)
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo: SmoothScrollCtx['scrollTo'] = (target, opts) => {
    const lenis = lenisRef.current
    if (lenis) {
      lenis.scrollTo(target, { offset: opts?.offset ?? 0, duration: opts?.duration ?? 1.4 })
      return
    }
    // Reduced-motion / fallback path
    const el =
      typeof target === 'string' ? document.querySelector(target) : target
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }

  return <Ctx.Provider value={{ scrollTo }}>{children}</Ctx.Provider>
}
