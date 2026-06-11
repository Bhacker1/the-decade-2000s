/** Fixed film-grain + vignette overlay. Pure decoration, no pointer events. */
export function GrainOverlay() {
  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55]"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 0%, transparent 55%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </>
  )
}
