import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionLabelProps {
  index?: string
  children: ReactNode
  className?: string
}

/** The mono kicker used above section headings: `01 — The Pocket`. */
export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <div className={cn('kicker flex items-center gap-3', className)}>
      {index && <span className="text-acid">{index}</span>}
      <span className="h-px w-8 bg-line-strong" aria-hidden />
      <span>{children}</span>
    </div>
  )
}
