const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We visit your shop or tour office, watch a ship day in action, and map how passengers currently find you — or don\'t.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description:
      'Custom wireframes built around your busiest hours, top-selling products, and the ships that matter most to your revenue.',
  },
  {
    number: '03',
    title: 'Build & Integrate',
    description:
      'Website launch with analytics, booking tools, and POS integration. We handle everything — you keep running your business.',
  },
  {
    number: '04',
    title: 'Launch Before Ships Arrive',
    description:
      'Go live before the season starts. We train your team, set up dashboards, and monitor your first ship days together.',
  },
  {
    number: '05',
    title: 'Season-Long Optimization',
    description:
      'Weekly reports, A/B testing, and adjustments based on real passenger data. Your site gets smarter every ship day.',
  },
]

export default function Process() {
  return (
    <section className="border-y border-mist-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-fjord-600">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fjord-900 md:text-4xl">
            From first call to first ship day in 4–6 weeks
          </h2>
        </div>

        <div className="mt-14 space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 md:gap-10">
              {index < steps.length - 1 && (
                <div className="absolute left-[23px] top-14 hidden h-[calc(100%-2rem)] w-px bg-mist-200 md:left-[27px] md:block" />
              )}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fjord-900 font-display text-sm font-bold text-glacier-400 md:h-14 md:w-14 md:text-base">
                {step.number}
              </div>
              <div className="pb-10 md:pb-12">
                <h3 className="font-display text-xl font-semibold text-fjord-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-fjord-700/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
