import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Intro loader: a count to 100 with the era stamp, then a curtain wipe.
 * Calls `onDone` once it has fully cleared so the hero can begin.
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const total = reduce ? 250 : 1700
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / total)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 250)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.span
            className="kicker mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            2000–2010
          </motion.span>
          <div className="font-display text-[clamp(4rem,16vw,11rem)] font-semibold leading-none tracking-[-0.04em]">
            {count}
            <span className="text-acid">%</span>
          </div>
          <div className="mt-6 h-px w-[min(60vw,22rem)] overflow-hidden bg-line">
            <motion.div
              className="grad-pop h-full w-full origin-left"
              style={{ scaleX: count / 100 }}
            />
          </div>
          <motion.span
            className="mt-6 max-w-xs text-center text-xs text-mist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading 2000 to 2010
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
