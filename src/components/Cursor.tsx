import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Minimal custom cursor — a ring that trails the pointer and swells over
 * interactive elements. Only mounts on fine-pointer (mouse) devices and
 * never on reduced-motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hot, setHot] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement | null
      setHot(Boolean(target?.closest('a, button, [data-cursor="hot"]')))
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-acid"
        animate={{
          width: hot ? 46 : 22,
          height: hot ? 46 : 22,
          backgroundColor: hot ? 'rgba(214,255,59,0.12)' : 'rgba(214,255,59,0)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      />
    </motion.div>
  )
}
