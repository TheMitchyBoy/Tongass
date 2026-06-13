import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TiltCard from './ui/TiltCard'

const services = [
  {
    icon: '📱',
    title: 'Mobile-First Websites',
    description:
      'Passengers search on their phones the moment they step off the gangway. Fast, thumb-friendly sites that load on ship Wi-Fi.',
    features: ['Sub-2s load times', 'Online booking', 'Multi-language'],
    span: 'col-span-12 md:col-span-7',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '📊',
    title: 'Passenger Analytics',
    description:
      'Know which ships drive your best customers. Track conversion rates by vessel and peak hours on Creek Street.',
    features: ['Ship-by-ship tracking', 'Peak hour heatmaps', 'Season reports'],
    span: 'col-span-12 md:col-span-5',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '🛒',
    title: 'E-Commerce & Pre-Booking',
    description:
      'Let passengers book tours or pre-order gifts before they leave the ship. Capture revenue on the tender ride.',
    features: ['Stripe & Square', 'Gift certificates', 'QR marketing'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-salmon-400/10 to-transparent',
  },
  {
    icon: '📣',
    title: 'Local SEO & Discovery',
    description:
      'Rank when passengers search "things to do Ketchikan" at 7 AM. Optimized for cruise port queries.',
    features: ['Google Business', 'Port map listings', 'Review management'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '✉️',
    title: 'Email & Retargeting',
    description:
      'Follow up when their ship returns next season. Turn one-time visitors into repeat customers.',
    features: ['Welcome sequences', 'Return campaigns', 'Seasonal promos'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-aurora/10 to-transparent',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="What We Build"
            title="Everything a cruise-season business needs online"
            description="From the ship horn across Tongass Narrows to the last tender at 4 PM — your digital presence works as hard as your front-line staff."
          />
        </Reveal>

        <div className="bento-grid mt-16">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80} className={`bento-item ${service.span}`}>
              <TiltCard className="h-full">
                <article className="section-card group relative flex h-full flex-col rounded-2xl p-7 transition hover:-translate-y-1">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 transition group-hover:opacity-100`}
                  />
                  <div className="relative z-10">
                    <span className="text-3xl" role="img" aria-hidden="true">{service.icon}</span>
                    <h3 className="mt-5 font-display text-xl font-bold text-fjord-950">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-fjord-700/65">
                      {service.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-mist-100 px-3 py-1 text-xs font-medium text-fjord-700 ring-1 ring-mist-200 transition group-hover:bg-glacier-400/10 group-hover:ring-glacier-400/20"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
