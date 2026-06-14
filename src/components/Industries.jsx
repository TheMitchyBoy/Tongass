import { useRef, useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const useCases = [
  {
    name: 'POS ↔ Booking Sync',
    description: 'Two-way inventory sync between Square and FareHarbor with webhook reliability.',
    icon: '🔗',
    hook: 'Eliminate double-bookings and manual spreadsheet updates.',
    type: 'Integration',
  },
  {
    name: 'Demand Forecasting',
    description: 'ML model predicting busy hours by ship, weather, and day-of-week.',
    icon: '🧠',
    hook: 'Staff correctly before passengers arrive — not after the rush.',
    type: 'Machine Learning',
  },
  {
    name: 'Custom Booking Widget',
    description: 'React component with live availability, wired to your POS inventory.',
    icon: '📱',
    hook: 'Real-time "3 spots left" badges that actually reflect stock.',
    type: 'Web Development',
  },
  {
    name: 'Alert Automation',
    description: 'Ship schedule → staffing gap detection → Slack notifications.',
    icon: '⚙️',
    hook: 'Know you\'re understaffed before the gangway opens.',
    type: 'Automation',
  },
  {
    name: 'CRM Data Pipeline',
    description: 'ETL from POS, booking, and web forms into HubSpot with custom fields.',
    icon: '📡',
    hook: 'One customer record across every touchpoint.',
    type: 'Data Pipeline',
  },
  {
    name: 'Kiosk Application',
    description: 'Touch-screen self-service booking with offline fallback for spotty Wi-Fi.',
    icon: '🖥️',
    hook: 'Queue management without hiring another counter person.',
    type: 'Web Development',
  },
  {
    name: 'API Gateway',
    description: 'Unified REST API routing bookings from web, kiosk, and partner widgets.',
    icon: '🌐',
    hook: 'One endpoint, every channel, every system updated.',
    type: 'API Development',
  },
  {
    name: 'Legacy Migration',
    description: 'Replace Excel workflows with proper software and automated reports.',
    icon: '🔧',
    hook: 'Stop copying numbers between tabs at 5 AM.',
    type: 'Modernization',
  },
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
    <section id="use-cases" className="bg-mist-50 py-24 md:py-32 dot-grid">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="Use Cases"
            title="Problems we solve with code"
            description="Real technical work for Ketchikan operators — integrations, automations, and ML models that replace manual processes."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {useCases.map((uc, i) => (
              <button
                key={uc.name}
                type="button"
                onClick={() => scrollTo(i)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? 'bg-fjord-950 text-white shadow-lg shadow-fjord-950/20'
                    : 'bg-white text-fjord-700 ring-1 ring-mist-200 hover:ring-glacier-400/30'
                }`}
              >
                {uc.icon} {uc.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </Reveal>

        <div ref={scrollRef} className="industry-scroll mt-10 pb-4">
          {useCases.map((useCase, i) => (
            <article
              key={useCase.name}
              className={`industry-card section-card flex flex-col rounded-2xl p-6 ${
                active === i ? 'active ring-2 ring-glacier-400/40' : ''
              }`}
              onClick={() => setActive(i)}
            >
              <span className="text-4xl" role="img" aria-hidden="true">{useCase.icon}</span>
              <span className="mt-4 inline-block w-fit rounded-full bg-glacier-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-glacier-400 ring-1 ring-glacier-400/20">
                {useCase.type}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-fjord-950">{useCase.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fjord-700/65">{useCase.description}</p>
              <p className="mt-3 text-xs font-medium text-glacier-400">{useCase.hook}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-fjord-950 transition hover:text-glacier-400"
                onClick={(e) => {
                  e.stopPropagation()
                  sessionStorage.setItem('projectType', useCase.type)
                }}
              >
                Discuss this use case
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
