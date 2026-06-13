import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SectionWave from './SectionWave'
import TiltCard from './ui/TiltCard'
import Button from './ui/Button'

const coreServices = [
  {
    icon: '📱',
    title: 'Mobile-First Websites',
    description:
      'Passengers search on their phones the moment they step off the gangway. Fast, thumb-friendly sites that load on ship Wi-Fi.',
    features: ['Sub-2s load times', 'Multi-language', 'Off-season modes'],
    span: 'col-span-12 md:col-span-7',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '📊',
    title: 'Passenger Analytics',
    description:
      'Revenue per ship, peak hours, and slow-day alerts. Staff smarter and run promos when tenders are light.',
    features: ['Ship-by-ship revenue', 'Peak hour heatmaps', 'YoY ship comparisons'],
    span: 'col-span-12 md:col-span-5',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '🛒',
    title: 'Pre-Tender Booking',
    description:
      'Capture tours, tables, and tastings while passengers are still on the ship. QR codes on gangway flyers and partner hotels.',
    features: ['Stripe & Square', 'Reserve now, pay at dock', 'QR ship marketing'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-salmon-400/10 to-transparent',
  },
  {
    icon: '📣',
    title: 'Port SEO & Google Business',
    description:
      'Rank for "things to do Ketchikan cruise port" and "food near berth 3." Photo updates on empty ship days.',
    features: ['Google Business', 'Port map listings', 'Review responses'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '✉️',
    title: 'Return-Visitor Email',
    description:
      'Capture emails at checkout. Auto-send when their ship returns next season — "Your ship docks in 14 days."',
    features: ['Welcome sequences', 'Return-ship campaigns', 'Review requests'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '🔗',
    title: 'POS & Inventory Sync',
    description:
      'Square, Clover, and FareHarbor integration so online availability matches what\'s actually in stock.',
    features: ['Real-time availability', '"3 spots left" badges', 'Booking system sync'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '🖥️',
    title: 'In-Store & Kiosk Displays',
    description:
      'Digital menus, queue screens, and self-service booking at your storefront. "Next ship in 42 min" for staff and customers.',
    features: ['Touch-screen catalogs', 'Ship schedule displays', 'Waitlist kiosks'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '🎨',
    title: 'Gallery & Story Pages',
    description:
      'Artist bios, cultural context, and authenticity storytelling for Native art galleries and Alaska-made retail.',
    features: ['Artist profiles', 'High-res mobile galleries', 'Duty-free info'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-salmon-400/10 to-transparent',
  },
  {
    icon: '🚢',
    title: 'Ship-Day On-Site Support',
    description:
      'We\'re on Front Street for your first major ship days after launch — tuning, troubleshooting, and training in real time.',
    features: ['Launch-week presence', 'Staff cheat sheets', 'Live dashboard coaching'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
]

const packages = [
  {
    name: 'Ship Day Starter',
    price: 'From $2,400',
    description: 'Website + analytics + Google Business + ship schedule widget. Live in 4–6 weeks.',
    includes: ['5-page mobile site', 'Basic analytics', 'GBP setup', 'Ship widget'],
    popular: false,
  },
  {
    name: 'Norwegian Day Package',
    price: 'From $1,200',
    description: 'Audit + promo landing page + staff cheat sheet for your biggest revenue ship.',
    includes: ['Ship revenue audit', 'Promo landing page', 'Staff ship-day guide', 'Peak hour report'],
    popular: true,
  },
  {
    name: 'Pre-Season Blitz',
    price: 'From $6,800',
    description: '4-week sprint before first May docking. Site, booking, analytics, and team training.',
    includes: ['Full site launch', 'Booking integration', 'Analytics Pro', '3 training sessions'],
    popular: false,
  },
  {
    name: 'Creek Street Bundle',
    price: 'Custom',
    description: 'Shared benchmarks for merchants on the same block. See how you compare — anonymously.',
    includes: ['Block-wide analytics', 'Shared ship alerts', 'Group SEO boost', 'Quarterly meetup'],
    popular: false,
  },
]

const addons = [
  {
    title: 'Competitor Visibility Report',
    description: 'See exactly what passengers find when they search your category before they reach your door.',
  },
  {
    title: 'Weather + Ship Alerts',
    description: 'Rain plus three ships? Push indoor experiences. Automated promos on slow tender days.',
  },
  {
    title: 'Duty-Free & Ship Delivery',
    description: 'Setup for jewelry, liquor, and gifts that passengers take back onboard.',
  },
  {
    title: 'Hiring Season Dashboard',
    description: 'Historical ship data to plan staffing — know which days need extra hands.',
  },
  {
    title: 'Shuttle & Hotel Widgets',
    description: 'White-label "what to do today" widgets for partners who touch every passenger.',
  },
  {
    title: 'Multi-Language Expansion',
    description: 'German and British English pages for European cruise lines.',
  },
]

const retainers = [
  { name: 'Ship-Day Monitoring', price: '$149/mo', detail: 'Weekly ship prep reports + slow-day promo suggestions' },
  { name: 'SEO & Google Business', price: '$199/mo', detail: 'Monthly ranking reports, photo updates, review responses' },
  { name: 'Analytics Pro', price: '$349/mo', detail: 'Full dashboard + quarterly strategy call' },
  { name: 'Off-Season Email', price: '$99/mo', detail: 'Keep your list warm Oct–Apr until ships return' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-mist-50 pt-24 pb-0 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-glacier-400/5 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-fjord-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Core services */}
        <Reveal>
          <SectionHeading
            label="Core Services"
            title="Built for the rhythm of cruise season"
            description="Every service ties back to ship schedules, mobile passengers, and dock-day revenue — not generic agency fluff."
          />
        </Reveal>

        <div className="bento-grid mt-16">
          {coreServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 50} className={`bento-item ${service.span}`}>
              <TiltCard className="h-full">
                <article className="section-card group relative flex h-full flex-col rounded-2xl p-7 transition hover:-translate-y-1">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 transition group-hover:opacity-100`}
                  />
                  <div className="relative z-10">
                    <span className="text-3xl" role="img" aria-hidden="true">{service.icon}</span>
                    <h3 className="mt-5 font-display text-xl font-bold text-fjord-950">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-fjord-700/65">{service.description}</p>
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

        {/* Productized packages */}
        <div id="packages" className="mt-28">
          <Reveal>
            <SectionHeading
              label="Popular Packages"
              title="Productized for Ketchikan ship days"
              description="Fixed scope, fixed timeline, clear deliverables. No open-ended agency billing."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 80}>
                <div
                  className={`section-card relative flex h-full flex-col rounded-2xl p-7 ${
                    pkg.popular ? 'ring-2 ring-glacier-400/40' : ''
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 right-6 rounded-full bg-glacier-400 px-3 py-0.5 text-xs font-bold text-fjord-950">
                      Best for first ship day
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-fjord-950">{pkg.name}</h3>
                    <span className="shrink-0 font-display text-lg font-bold text-glacier-400">{pkg.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fjord-700/65">{pkg.description}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-fjord-700">
                        <svg className="h-4 w-4 shrink-0 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="#contact" variant="outline" className="mt-6 w-full">
                    Ask about {pkg.name}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-28">
          <Reveal>
            <SectionHeading
              label="Add-Ons"
              title="Bolt-ons for specific ship-day problems"
              description="Layer these onto any package when you need something extra."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon, i) => (
              <Reveal key={addon.title} delay={i * 60}>
                <div className="section-card rounded-xl p-5 transition hover:border-glacier-400/30">
                  <h3 className="font-display font-semibold text-fjord-950">{addon.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fjord-700/65">{addon.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Retainers */}
        <div className="mt-28 pb-24 md:pb-32">
          <Reveal>
            <SectionHeading
              label="Season Retainers"
              title="Keep momentum May through September"
              description="Ongoing support tied to your ship calendar — not generic website maintenance."
            />
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-mist-200 bg-white">
            {retainers.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <div
                  className={`flex flex-col justify-between gap-2 px-6 py-5 sm:flex-row sm:items-center ${
                    i < retainers.length - 1 ? 'border-b border-mist-200' : ''
                  }`}
                >
                  <div>
                    <h3 className="font-display font-semibold text-fjord-950">{item.name}</h3>
                    <p className="mt-1 text-sm text-fjord-700/65">{item.detail}</p>
                  </div>
                  <span className="shrink-0 font-display text-lg font-bold text-glacier-400">{item.price}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <p className="text-sm text-fjord-700/65">
                Not sure which services fit? We&apos;ll map a plan to your ships and season on a free audit.
              </p>
              <Button href="#contact" variant="dark" className="mt-5">
                Book Free Ship-Day Audit
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <SectionWave from="white" to="deep" />
    </section>
  )
}
