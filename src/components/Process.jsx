import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Technical Discovery',
    description:
      'We map your current systems — POS, booking, CRM, spreadsheets — and identify where code can replace manual work.',
  },
  {
    number: '02',
    title: 'Architecture & Spec',
    description:
      'API diagrams, data flow maps, and a scoped build plan with clear deliverables, timeline, and repo structure.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'Iterative development in a GitHub repo you own. Weekly demos, documented APIs, and test coverage.',
  },
  {
    number: '04',
    title: 'Deploy & Monitor',
    description:
      'CI/CD pipelines, staging environments, production deployment, and monitoring with alert hooks.',
  },
  {
    number: '05',
    title: 'Iterate & Maintain',
    description:
      'Feature additions, model retraining, dependency updates, and ongoing engineering support.',
  },
]

export default function Process() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-mist-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="How We Work"
            title="From discovery to deployed code in 4–8 weeks"
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 60}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`process-step flex w-full gap-5 rounded-2xl border border-transparent p-5 text-left ${
                    active === i ? 'active' : 'hover:bg-mist-50'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold transition ${
                      active === i
                        ? 'bg-glacier-400 text-fjord-950'
                        : 'bg-fjord-950 text-glacier-400'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-fjord-950">{step.title}</h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed transition ${
                        active === i ? 'text-fjord-700/70' : 'text-fjord-700/45'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="hidden lg:block">
            <div className="sticky top-32 overflow-hidden rounded-3xl bg-fjord-950 p-8 text-white">
              <div className="hero-mesh">
                <div className="mesh-orb mesh-orb-1 !h-64 !w-64 !opacity-40" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glacier-400">
                  Step {steps[active].number}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold">{steps[active].title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/55">{steps[active].description}</p>

                <div className="mt-8 flex gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                        i <= active ? 'bg-glacier-400' : 'bg-white/10'
                      }`}
                    />
                  ))}
                </div>

                <p className="mt-6 text-sm text-white/35">
                  {active + 1} of {steps.length} — click any step to explore
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
