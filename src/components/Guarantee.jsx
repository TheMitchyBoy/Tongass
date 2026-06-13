import Reveal from './ui/Reveal'

export default function Guarantee() {
  return (
    <section className="border-y border-mist-200 bg-white py-12">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-glacier-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fjord-700 ring-1 ring-glacier-400/20">
            Season guarantee
          </div>
          <p className="mt-4 font-display text-xl font-bold text-fjord-950 md:text-2xl">
            No mobile bookings before Labor Day? We work free until you get them.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fjord-700/65">
            Applies to Channel plans. We&apos;re betting on your cruise season — because we&apos;ve seen what happens when Ketchikan businesses get ship-day analytics and a site that works on the dock.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
