const stats = [
  { value: '1.3M+', label: 'Cruise passengers through Ketchikan annually' },
  { value: '4–6 hrs', label: 'Average time passengers spend ashore' },
  { value: '78%', label: 'Search on mobile before buying locally' },
  { value: '3 min', label: 'Decision window before they walk past your door' },
]

export default function Stats() {
  return (
    <section className="border-b border-mist-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-3xl font-bold text-fjord-900 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fjord-700/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
