const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First Websites',
    description:
      'Passengers search on their phones the moment they step off the gangway. We build fast, thumb-friendly sites that load on ship Wi-Fi and convert browsers into buyers.',
    features: ['Sub-2s load times', 'Online booking integration', 'Multi-language support'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Passenger Analytics',
    description:
      'Know which ships drive your best customers. Track foot traffic patterns, conversion rates by vessel, and peak shopping hours along Creek Street and the cruise docks.',
    features: ['Ship-by-ship revenue tracking', 'Peak hour heatmaps', 'Season-over-season reports'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'E-Commerce & Pre-Booking',
    description:
      'Let passengers book tours, reserve tables, or pre-order gifts before they even leave the ship. Capture revenue during the 20-minute tender ride to Berth 3.',
    features: ['Stripe & Square integration', 'Gift certificate sales', 'QR code ship marketing'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'Local SEO & Discovery',
    description:
      'Rank when passengers search "things to do Ketchikan" or "salmon fishing near cruise port." We optimize for the exact queries cruisers type at 7 AM.',
    features: ['Google Business optimization', 'Cruise port map listings', 'Review management'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email & Retargeting',
    description:
      'Collect emails at checkout and follow up when their ship returns next season. Turn one-time visitors into repeat customers across multiple Alaska itineraries.',
    features: ['Automated welcome sequences', 'Return-visitor campaigns', 'Seasonal promo calendars'],
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Kiosk & In-Store Displays',
    description:
      'Digital menus, interactive product catalogs, and self-service booking screens for your Creek Street storefront. Reduce lines during peak ship hours.',
    features: ['Touch-screen catalogs', 'Real-time inventory sync', 'Ship schedule displays'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-fjord-600">
            What We Build
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fjord-900 md:text-4xl">
            Everything a cruise-season business needs online
          </h2>
          <p className="mt-4 text-lg text-fjord-700/70">
            From the moment a ship horn echoes across Tongass Narrows to the last tender
            back at 4 PM — your digital presence works as hard as your front-line staff.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="section-card group rounded-2xl p-7 transition hover:border-glacier-400/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-fjord-900 text-glacier-400 transition group-hover:bg-glacier-400 group-hover:text-fjord-950">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-fjord-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fjord-700/70">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-fjord-700">
                    <svg className="h-4 w-4 shrink-0 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
