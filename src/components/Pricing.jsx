const plans = [
  {
    name: 'Harbor',
    price: '$2,400',
    period: 'one-time + $149/mo',
    description: 'Essential web presence for shops and small tour operators.',
    features: [
      '5-page mobile-first website',
      'Google Business setup',
      'Basic analytics dashboard',
      'Ship schedule widget',
      'SSL & hosting included',
      'Seasonal content updates (2x)',
    ],
    cta: 'Start with Harbor',
    highlighted: false,
  },
  {
    name: 'Channel',
    price: '$5,800',
    period: 'one-time + $349/mo',
    description: 'Full booking and analytics for growing cruise-season businesses.',
    features: [
      'Everything in Harbor',
      'Online booking & payments',
      'Tongass Analytics Pro',
      'Email marketing setup',
      'Multi-language (up to 3)',
      'Monthly optimization reports',
      'Priority ship-day support',
    ],
    cta: 'Go Channel',
    highlighted: true,
  },
  {
    name: 'Passage',
    price: 'Custom',
    period: 'tailored to your fleet',
    description: 'Enterprise solution for multi-location operators and franchises.',
    features: [
      'Everything in Channel',
      'Multi-location management',
      'Custom analytics & API access',
      'Kiosk & in-store displays',
      'Dedicated account manager',
      'Off-season marketing campaigns',
      'Annual strategy planning',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-fjord-600">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fjord-900 md:text-4xl">
            Invest once, earn all season
          </h2>
          <p className="mt-4 text-lg text-fjord-700/70">
            Most clients recover their investment within the first two weeks of cruise
            season. Every plan includes local support from our Ketchikan team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-fjord-900 text-white ring-2 ring-glacier-400 shadow-xl shadow-fjord-900/20'
                  : 'section-card'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-glacier-400 px-4 py-1 text-xs font-semibold text-fjord-950">
                  Most Popular
                </span>
              )}
              <h3
                className={`font-display text-xl font-semibold ${
                  plan.highlighted ? 'text-white' : 'text-fjord-900'
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4">
                <span
                  className={`font-display text-4xl font-bold ${
                    plan.highlighted ? 'text-glacier-400' : 'text-fjord-900'
                  }`}
                >
                  {plan.price}
                </span>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? 'text-white/50' : 'text-fjord-700/60'
                  }`}
                >
                  {plan.period}
                </p>
              </div>
              <p
                className={`mt-4 text-sm ${
                  plan.highlighted ? 'text-white/60' : 'text-fjord-700/70'
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? 'text-glacier-400' : 'text-fjord-600'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white/80' : 'text-fjord-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-glacier-400 text-fjord-950 hover:bg-glacier-300'
                    : 'bg-fjord-900 text-white hover:bg-fjord-800'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
