const metrics = [
  { label: 'Revenue by Ship', value: '$12,400', ship: 'Norwegian Bliss', change: '+18%' },
  { label: 'Peak Hour', value: '10:30 AM', ship: 'All vessels', change: 'Tue–Thu' },
  { label: 'Conversion Rate', value: '4.2%', ship: 'Mobile visitors', change: '+0.8%' },
  { label: 'Avg. Order Value', value: '$87', ship: 'Pre-booked tours', change: '+34%' },
]

const features = [
  {
    title: 'Cruise Schedule Integration',
    description:
      'Automatically sync with Ketchikan port schedules. Your dashboard shows which ships are docked, how many passengers are ashore, and when the next wave arrives.',
  },
  {
    title: 'Passenger Journey Tracking',
    description:
      'See the full path from Google search to in-store purchase. Understand which marketing channels work for European vs. American cruise lines.',
  },
  {
    title: 'Seasonal Forecasting',
    description:
      'Predict busy days weeks ahead using historical ship data. Staff smarter, stock better, and run promotions on slow tender days.',
  },
  {
    title: 'Competitive Benchmarks',
    description:
      'Anonymous aggregated data shows how your conversion rates compare to similar businesses on Creek Street, Thomas Basin, and Newtown.',
  },
]

export default function Analytics() {
  return (
    <section id="analytics" className="bg-fjord-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-glacier-400">
              Tongass Analytics Platform
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Data built for the rhythm of cruise season
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Generic analytics tools don&apos;t understand that your business runs on ship
              schedules, not calendar months. Ours does — because we live and work in
              Ketchikan.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-glacier-400/15">
                    <svg className="h-4 w-4 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/50">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">
                Analytics Dashboard
              </h3>
              <span className="text-xs text-white/40">Week of May 12, 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-white/40">{metric.label}</p>
                  <p className="mt-1 font-display text-2xl font-bold text-white">
                    {metric.value}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-white/30">{metric.ship}</span>
                    <span className="text-xs font-medium text-glacier-400">{metric.change}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-white/5 p-4">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
                Weekly Revenue by Ship
              </p>
              <div className="flex items-end gap-2 h-32">
                <Bar height="60%" label="Bliss" />
                <Bar height="45%" label="Summit" />
                <Bar height="80%" label="Orion" />
                <Bar height="35%" label="Eurodam" />
                <Bar height="70%" label="Discovery" />
                <Bar height="55%" label="Serenade" />
                <Bar height="40%" label="Others" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bar({ height, label }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div
        className="w-full rounded-t-md bg-gradient-to-t from-glacier-400/40 to-glacier-400"
        style={{ height }}
      />
      <span className="text-[10px] text-white/30">{label}</span>
    </div>
  )
}
