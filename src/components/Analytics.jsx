import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SectionWave from './SectionWave'
import TiltCard from './ui/TiltCard'

const tabs = ['Pipelines', 'Models', 'Integrations']

const metrics = [
  { label: 'Sync Jobs Today', value: '847', detail: 'Square ↔ FareHarbor', change: '99.8% uptime' },
  { label: 'ML Accuracy', value: '91.2%', detail: 'Demand forecast', change: '+2.1% this week' },
  { label: 'API Requests', value: '12.4K', detail: 'Last 24 hours', change: 'p99: 142ms' },
  { label: 'Automations Run', value: '34', detail: 'Scheduled today', change: '0 failures' },
]

const barData = [
  { label: 'Mon', value: 55 },
  { label: 'Tue', value: 72 },
  { label: 'Wed', value: 68 },
  { label: 'Thu', value: 85 },
  { label: 'Fri', value: 60 },
  { label: 'Sat', value: 45 },
  { label: 'Sun', value: 30 },
]

const features = [
  {
    title: 'Automated Data Pipelines',
    description:
      'ETL jobs that pull from POS, booking, and CRM systems on schedule — clean data ready for dashboards and ML training.',
  },
  {
    title: 'Machine Learning Models',
    description:
      'Demand forecasting, staffing optimization, and anomaly detection trained on your actual transaction history.',
  },
  {
    title: 'Cross-Platform Sync',
    description:
      'Real-time inventory and booking sync across Square, FareHarbor, Stripe, and custom APIs with retry logic.',
  },
  {
    title: 'Monitoring & Alerting',
    description:
      'Webhook health checks, pipeline failure alerts, and model drift detection — problems caught before ship day.',
  },
]

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('Pipelines')
  const [hoveredBar, setHoveredBar] = useState(null)

  return (
    <section id="automation" className="relative overflow-hidden pb-0 pt-24 underwater-section md:pt-32">
      <div className="hero-mesh">
        <div className="mesh-orb mesh-orb-2 !opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                label="Automation & ML"
                title="Software that runs while you run your business"
                description="We build the pipelines, models, and integrations that replace manual work — not another marketing dashboard."
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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
                  <h3 className="font-display text-lg font-bold text-white">Ops Dashboard</h3>
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
                        <span className="text-[10px] text-white/25">{metric.detail}</span>
                        <span className="text-xs font-semibold text-glacier-400">{metric.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/5">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-white/35">
                    Weekly Pipeline Runs
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
