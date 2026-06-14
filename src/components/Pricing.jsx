import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TiltCard from './ui/TiltCard'
import Button from './ui/Button'

const plans = [
  {
    name: 'Integration',
    price: '$3,200',
    period: 'one-time + $149/mo monitoring',
    description: 'Connect two platforms with two-way sync, error handling, and documentation.',
    roi: 'Replaces 5–10 hours/week of manual data entry between systems.',
    features: [
      'API audit & mapping',
      'Two-way data sync',
      'Webhook reliability layer',
      'Error monitoring & alerts',
      'GitHub repo you own',
      'Integration documentation',
    ],
    cta: 'Start Integration',
    highlighted: false,
  },
  {
    name: 'Full Stack',
    price: '$8,500',
    period: 'one-time + $199/mo support',
    description: 'Custom web app + API backend + integrations + automation pipeline.',
    roi: 'Complete system replacing spreadsheets, manual syncs, and template websites.',
    features: [
      'React web application',
      'API backend (Python/Node)',
      '2 platform integrations',
      'Automation pipeline',
      'CI/CD deployment',
      'ML baseline model',
      'Priority engineering support',
    ],
    cta: 'Build Full Stack',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'scoped to your systems',
    description: 'Multi-system architecture for operators with complex integration needs.',
    roi: 'Multi-location operators typically consolidate 4–6 systems into one pipeline.',
    features: [
      'Everything in Full Stack',
      'Multi-location data warehouse',
      'Custom ML model suite',
      'API gateway for partners',
      'Dedicated engineer',
      'SLA & on-call support',
      'Quarterly architecture review',
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
            title="Engineering projects with clear scope"
            description="Fixed-price builds with documented code you own. Retainers for ongoing development — not marketing maintenance."
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-medium text-fjord-700">
            <span className="text-glacier-400">Automation Build</span> — Replace a manual workflow with Python automation. From $2,800, delivered in 2–3 weeks.
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
