import { useEffect, useState } from 'react'

/* ============================================================
   A tiny hash router — zero dependencies, static-host friendly.
   Routes are hash paths: #/  ·  #/technological  ·  #/economic …
   Hash links work natively (no JS needed to navigate), so the
   site degrades gracefully and survives a hard refresh.
   ============================================================ */

/** Read the current route slug ('' for home). */
function readRoute(): string {
  if (typeof window === 'undefined') return ''
  return window.location.hash.replace(/^#\/?/, '').split(/[?#]/)[0]
}

/** Subscribe to the current route slug. */
export function useRoute(): string {
  const [route, setRoute] = useState(readRoute)
  useEffect(() => {
    const onChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

/** Build an href for a route slug — use on <a> for native navigation. */
export const href = (route: string): string => `#/${route}`

/** Programmatic navigation (kept for non-anchor triggers). */
export function navigate(route: string): void {
  const target = href(route)
  if (window.location.hash !== target) window.location.hash = target
}
