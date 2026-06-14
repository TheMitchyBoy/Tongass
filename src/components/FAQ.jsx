import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const faqs = [
  {
    q: 'What technologies do you work with?',
    a: 'Python, TypeScript, React, FastAPI, Node.js, PostgreSQL, Docker, AWS, and TensorFlow/scikit-learn for ML. We integrate with Square, Stripe, FareHarbor, HubSpot, QuickBooks, Clover, and custom APIs.',
  },
  {
    q: 'Do I own the code you write?',
    a: 'Yes — every project ships in a GitHub repository you own. Full source code, documentation, and deployment configs. No vendor lock-in.',
  },
  {
    q: 'Can you integrate with my existing POS or booking system?',
    a: 'That\'s our specialty. We build two-way syncs between Square, FareHarbor, Stripe, Clover, Rezdy, and most systems Ketchikan operators already use. If it has an API, we can connect it.',
  },
  {
    q: 'What does a machine learning project look like?',
    a: 'We start with your historical data — transactions, bookings, ship schedules. Train a model for demand forecasting or staffing optimization, deploy it as an API endpoint, and set up automated retraining. Typical ML pipeline: 3–4 weeks.',
  },
  {
    q: 'How is this different from a marketing agency?',
    a: 'We write code, not ad copy. Custom websites with real booking logic, API integrations that replace manual data entry, Python automations that run on schedule, and ML models trained on your data. No SEO packages or social media retainers.',
  },
  {
    q: 'Are you local to Ketchikan?',
    a: 'Yes. We\'re on Tongass Ave. We understand the systems local operators use, the ship schedule constraints, and the seasonal rhythm. We can sit down with your team and map your actual workflows.',
  },
  {
    q: 'What does ongoing support look like?',
    a: 'Engineering retainers — bug fixes, feature additions, dependency updates, integration monitoring, and ML model retraining. Priced monthly, scoped to hours. Not generic "website maintenance."',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Integration sprints: 2–3 weeks. Automation builds: 2–3 weeks. Full stack launches: 6–8 weeks. ML pipelines: 3–4 weeks. We scope every project with a clear timeline before starting.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-mist-50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Questions about our development services"
            description="Straight answers about code, integrations, and how we work."
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="section-card overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-base font-semibold text-fjord-950 md:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist-100 text-fjord-700 transition-transform duration-300 ${
                      open === i ? 'rotate-45 bg-glacier-400/15 text-glacier-400' : ''
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-fjord-700/70">{faq.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
