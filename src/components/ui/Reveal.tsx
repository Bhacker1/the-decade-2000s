import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Seconds to delay the reveal. */
  delay?: number
  /** Initial vertical offset in px. */
  y?: number
  className?: string
  /** Animate every time it enters the viewport (default: once). */
  repeat?: boolean
}

/**
 * Fade + slide reveal driven by viewport entry. The workhorse for
 * section content. Respects reduced motion automatically via Framer.
 */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  repeat = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
