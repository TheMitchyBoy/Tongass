import Reveal from './ui/Reveal'
import Button from './ui/Button'

export default function ShipDayBanner() {
  return (
    <Reveal>
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-card flex flex-col items-center justify-between gap-6 rounded-2xl border-glacier-400/30 bg-gradient-to-r from-white to-mist-100 p-6 ring-1 ring-glacier-400/20 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-glacier-400/15 ring-1 ring-glacier-400/25">
              <span className="text-2xl" role="img" aria-hidden="true">🚢</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-glacier-400">
                Free ship-day audit
              </p>
              <p className="font-display text-lg font-bold text-fjord-950 md:text-xl">
                Which ships should you staff up for this week?
              </p>
              <p className="mt-1 text-sm text-fjord-700/65">
                We&apos;ll show you passenger counts, peak hours, and what you&apos;re leaving on the table.
              </p>
            </div>
          </div>
          <Button href="#contact" variant="dark" className="shrink-0 whitespace-nowrap">
            Get My Free Audit
          </Button>
        </div>
      </div>
    </Reveal>
  )
}
