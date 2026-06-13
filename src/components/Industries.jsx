import { useRef, useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const industries = [
  { name: 'Gift & Souvenir Shops', description: 'Alaska-made products with ship-friendly checkout and duty-free info.', icon: '🎁' },
  { name: 'Salmon & Wildlife Tours', description: 'Pre-booking, real-time availability, and weather updates.', icon: '🐟' },
  { name: 'Native Art Galleries', description: 'Authentic stories behind totems, carvings, and textiles.', icon: '🎨' },
  { name: 'Restaurants & Cafés', description: 'Digital menus, waitlists, and "near the port" SEO.', icon: '🍽️' },
  { name: 'Adventure Excursions', description: 'Zipline, kayak, helicopter tours with instant online booking.', icon: '🏔️' },
  { name: 'Jewelry & Gem Stores', description: 'High-res galleries and ship-boarding delivery options.', icon: '💎' },
  { name: 'Breweries & Distilleries', description: 'Tasting schedules synced to ship arrivals.', icon: '🍺' },
  { name: 'Transportation & Shuttles', description: 'Route maps from Berth 1–4 and group rate calculators.', icon: '🚌' },
]

export default function Industries() {
  const scrollRef = useRef(null)
  const [active, setActive] = useState(0)

  function scrollTo(index) {
    setActive(index)
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index]
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <section id="industries" className="bg-mist-50 py-24 md:py-32 dot-grid">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="Who We Serve"
            title="Built for every business cruise ships bring to your door"
            description="Front Street, Mission Street, or Ward Cove — if cruise passengers are your customers, we know how to reach them."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                type="button"
                onClick={() => scrollTo(i)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-fjord-950 text-white shadow-lg shadow-fjord-950/20'
                    : 'bg-white text-fjord-700 ring-1 ring-mist-200 hover:ring-glacier-400/30'
                }`}
              >
                {ind.icon} {ind.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={scrollRef} className="industry-scroll mt-10 pb-4">
          {industries.map((industry, i) => (
            <article
              key={industry.name}
              className={`industry-card section-card cursor-pointer rounded-2xl p-6 ${
                active === i ? 'active ring-2 ring-glacier-400/40' : ''
              }`}
              onClick={() => setActive(i)}
            >
              <span className="text-4xl" role="img" aria-hidden="true">{industry.icon}</span>
              <h3 className="mt-5 font-display text-lg font-bold text-fjord-950">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fjord-700/65">{industry.description}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-glacier-400 opacity-0 transition group-hover:opacity-100">
                Learn more
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
