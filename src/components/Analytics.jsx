import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SectionWave from './SectionWave'
import TiltCard from './ui/TiltCard'

const tabs = ['Overview', 'Ships', 'Revenue']

const metrics = [
  { label: 'Revenue by Ship', value: '$12,400', ship: 'Norwegian Bliss', change: '+18%' },
  { label: 'Peak Hour', value: '10:30 AM', ship: 'All vessels', change: 'Tue–Thu' },
  { label: 'Conversion Rate', value: '4.2%', ship: 'Mobile visitors', change: '+0.8%' },
  { label: 'Avg. Order Value', value: '$87', ship: 'Pre-booked tours', change: '+34%' },
]

const barData = [
  { label: 'Bliss', value: 60 },
  { label: 'Summit', value: 45 },
  { label: 'Orion', value: 80 },
  { label: 'Eurodam', value: 35 },
  { label: 'Discovery', value: 70 },
  { label: 'Serenade', value: 55 },
  { label: 'Others', value: 40 },
]

const features = [
  {
    title: 'Cruise Schedule Integration',
    description:
      'Sync with Ketchikan port schedules. See which ships are docked and when the next wave arrives.',
  },
  {
    title: 'Passenger Journey Tracking',
    description:
      'Full path from Google search to in-store purchase. European vs. American cruise line insights.',
  },
  {
    title: 'Seasonal Forecasting',
    description:
      'Predict busy days weeks ahead. Staff smarter and run promotions on slow tender days.',
  },
  {
    title: 'Competitive Benchmarks',
    description:
      'See how your conversion rates compare to Creek Street, Thomas Basin, and Newtown peers.',
  },
]

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [hoveredBar, setHoveredBar] = useState(null)

  return (
    <section id="analytics" className="relative overflow-hidden pb-0 pt-24 underwater-section md:pt-32">
      <div className="hero-mesh">
        <div className="mesh-orb mesh-orb-2 !opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                label="Tongass Analytics Platform"
                title="Data built for the rhythm of cruise season"
                description="Generic analytics don't understand ship schedules. Ours does — because we live and work in Ketchikan."
                light
                align="left"
              />
            </Reveal>

            <div className="mt-10 space-y-3">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 80}>
                  <div className="group flex gap-4 rounded-xl p-4 transition hover:bg-white/5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-glacier-400/10 ring-1 ring-glacier-400/20 transition group-hover:bg-glacier-400/20">
                      <svg className="h-4 w-4 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/45">{feature.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200}>
            <TiltCard>
              <div className="glass-card rounded-3xl p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-white">Analytics Dashboard</h3>
                  <div className="flex gap-1 rounded-xl bg-white/5 p-1 ring-1 ring-white/5">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                          activeTab === tab
                            ? 'bg-glacier-400 text-fjord-950'
                            : 'text-white/40 hover:text-white/70'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {metrics.map((metric, i) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-white/5 p-4 ring-1 ring-white/5 transition hover:bg-white/8 hover:ring-glacier-400/20"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">{metric.label}</p>
                      <p className="mt-1 font-display text-2xl font-bold text-white">{metric.value}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[10px] text-white/25">{metric.ship}</span>
                        <span className="text-xs font-semibold text-glacier-400">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/5">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-white/35">
                    Weekly Revenue by Ship
                  </p>
                  <div className="flex h-36 items-end gap-2">
                    {barData.map((bar, i) => (
                      <div
                        key={bar.label}
                        className="flex flex-1 flex-col items-center gap-2"
                        onMouseEnter={() => setHoveredBar(i)}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        <div
                          className={`bar-animate w-full rounded-t-lg bg-gradient-to-t transition-all duration-300 ${
                            hoveredBar === i
                              ? 'from-glacier-400 to-glacier-300 shadow-lg shadow-glacier-400/30'
                              : 'from-glacier-400/40 to-glacier-400'
                          }`}
                          style={{
                            height: `${bar.value}%`,
                            animationDelay: `${i * 80}ms`,
                            transform: hoveredBar === i ? 'scaleY(1.05)' : undefined,
                            transformOrigin: 'bottom',
                          }}
                        />
                        <span className={`text-[10px] transition ${hoveredBar === i ? 'text-glacier-400' : 'text-white/25'}`}>
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
      <SectionWave from="deep" to="white" />
    </section>
  )
}
