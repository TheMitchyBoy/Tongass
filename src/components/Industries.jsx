const industries = [
  {
    name: 'Gift & Souvenir Shops',
    description: 'Showcase Alaska-made products with ship-friendly checkout and duty-free info.',
    icon: '🎁',
  },
  {
    name: 'Salmon & Wildlife Tours',
    description: 'Fill every seat with pre-booking, real-time availability, and weather updates.',
    icon: '🐟',
  },
  {
    name: 'Native Art Galleries',
    description: 'Tell authentic stories behind totems, carvings, and textiles that resonate with visitors.',
    icon: '🎨',
  },
  {
    name: 'Restaurants & Cafés',
    description: 'Digital menus, waitlist management, and "near the port" SEO for hungry passengers.',
    icon: '🍽️',
  },
  {
    name: 'Adventure Excursions',
    description: 'Zipline, kayak, and helicopter tours with instant booking and liability waivers online.',
    icon: '🏔️',
  },
  {
    name: 'Jewelry & Gem Stores',
    description: 'High-resolution galleries, comparison tools, and ship-boarding delivery options.',
    icon: '💎',
  },
  {
    name: 'Breweries & Distilleries',
    description: 'Tasting room schedules synced to ship arrivals. Sell bottles they can carry back onboard.',
    icon: '🍺',
  },
  {
    name: 'Transportation & Shuttles',
    description: 'Route maps from Berth 1–4, real-time pickup scheduling, and group rate calculators.',
    icon: '🚌',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-fjord-600">
            Who We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fjord-900 md:text-4xl">
            Built for every business the cruise ships bring to your door
          </h2>
          <p className="mt-4 text-lg text-fjord-700/70">
            Whether you&apos;re on Front Street, Mission Street, or out by Ward Cove — if
            cruise passengers are your customers, we know how to reach them.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="section-card rounded-2xl p-6 transition hover:border-fjord-600/20 hover:shadow-md"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {industry.icon}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-fjord-900">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fjord-700/70">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
