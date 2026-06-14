import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './ui/Reveal'

const stats = [
  { value: 12, suffix: '+', label: 'Platforms integrated (Square, FareHarbor, Stripe, HubSpot…)' },
  { value: 847, suffix: '', label: 'Automated sync jobs run daily across client systems' },
  { value: 91, suffix: '%', label: 'Average ML model accuracy on demand forecasts' },
  { value: 100, suffix: '%', label: 'Source code ownership — every repo is yours' },
]

export default function Stats() {
  return (
    <section className="relative -mt-px bg-mist-50 py-16 dot-grid">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat }) {
  const [ref, inView] = useInView()
  const count = useCountUp(stat.value, inView)

  const display = `${Math.round(count)}${stat.suffix}`

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-mist-200 bg-white p-6 transition hover:border-glacier-400/30 hover:shadow-lg hover:shadow-glacier-400/5"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-glacier-400/5 transition group-hover:bg-glacier-400/10" />
      <p className="font-display text-4xl font-extrabold tracking-tight text-fjord-950 md:text-5xl">
        <span className="text-gradient">{display}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-fjord-700/65">{stat.label}</p>
    </div>
  )
}
