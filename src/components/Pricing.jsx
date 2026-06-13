import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TiltCard from './ui/TiltCard'
import Button from './ui/Button'

const plans = [
  {
    name: 'Harbor',
    price: '$2,400',
    period: 'one-time + $149/mo',
    description: 'Essential web presence for shops and small tour operators.',
    roi: '1 extra $80 sale per ship day pays this off in ~3 weeks.',
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
    roi: 'Avg. 147% more mobile conversions after launch. Most clients break even in 2 weeks.',
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
    roi: 'Multi-berth operators typically see 30–50% lift in pre-booked revenue.',
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
    <section id="pricing" className="bg-mist-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="Pricing"
            title="Invest once, earn all season"
            description="Transparent pricing. No surprise fees. Every plan includes local Ketchikan support and ship-schedule integration."
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-fjord-700">
            <span className="text-glacier-400">Ship Day Starter</span> — Website + analytics + Google Business + ship widget. One package, one price, live in 4–6 weeks.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <TiltCard className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition ${
                    plan.highlighted
                      ? 'bg-fjord-950 text-white ring-2 ring-glacier-400 shadow-2xl shadow-glacier-400/10'
                      : 'section-card'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-glacier-400 to-aurora px-4 py-1 text-xs font-bold text-fjord-950">
                      Most Popular
                    </span>
                  )}

                  <h3 className={`font-display text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-fjord-950'}`}>
                    {plan.name}
                  </h3>

                  <div className="mt-5">
                    <span className={`font-display text-5xl font-extrabold tracking-tight ${plan.highlighted ? 'text-gradient' : 'text-fjord-950'}`}>
                      {plan.price}
                    </span>
                    <p className={`mt-1 text-sm ${plan.highlighted ? 'text-white/45' : 'text-fjord-700/55'}`}>
                      {plan.period}
                    </p>
                  </div>

                  <p className={`mt-4 rounded-xl px-3 py-2.5 text-xs font-medium leading-relaxed ${
                    plan.highlighted ? 'bg-glacier-400/10 text-glacier-300' : 'bg-mist-100 text-fjord-700'
                  }`}>
                    {plan.roi}
                  </p>

                  <p className={`mt-4 text-sm ${plan.highlighted ? 'text-white/55' : 'text-fjord-700/65'}`}>
                    {plan.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-glacier-400' : 'text-fjord-600'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={plan.highlighted ? 'text-white/75' : 'text-fjord-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={plan.highlighted ? 'primary' : 'dark'}
                    className={`mt-8 w-full ${!plan.highlighted ? '!bg-fjord-950' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
