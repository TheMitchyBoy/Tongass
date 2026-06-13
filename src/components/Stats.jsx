import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './ui/Reveal'

const stats = [
  { value: 1.3, suffix: 'M+', decimals: 1, label: 'Cruise passengers through Ketchikan annually' },
  { value: 5, suffix: ' hrs', prefix: '4–', label: 'Average time passengers spend ashore', skipCount: true },
  { value: 78, suffix: '%', label: 'Search on mobile before buying locally' },
  { value: 3, suffix: ' min', label: 'Decision window before they walk past your door' },
]

export default function Stats() {
  return (
    <section className="relative bg-mist-50 py-16 water-surface dot-grid">
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
  const count = useCountUp(stat.skipCount ? 0 : stat.value, inView && !stat.skipCount)

  const display = stat.skipCount
    ? `${stat.prefix || ''}${stat.value}${stat.suffix}`
    : `${stat.decimals ? count.toFixed(stat.decimals) : Math.round(count)}${stat.suffix}`

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
