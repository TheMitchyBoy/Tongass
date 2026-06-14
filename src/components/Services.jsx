import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TiltCard from './ui/TiltCard'
import Button from './ui/Button'

const coreServices = [
  {
    icon: '💻',
    title: 'Custom Website Development',
    description:
      'Hand-coded React sites and web apps — fast on mobile, built for ship Wi-Fi, with real booking and inventory logic under the hood.',
    features: ['React & TypeScript', 'Headless CMS', 'Mobile-first performance'],
    span: 'col-span-12 md:col-span-7',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '🔗',
    title: 'Cross-Platform Integration',
    description:
      'Connect Square, Stripe, FareHarbor, Clover, QuickBooks, HubSpot, and custom APIs so data flows without manual entry.',
    features: ['REST & GraphQL APIs', 'Webhook handlers', 'Two-way sync'],
    span: 'col-span-12 md:col-span-5',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '⚙️',
    title: 'Workflow Automation',
    description:
      'Scheduled jobs, alert pipelines, and data transforms that replace spreadsheets — ship schedules to Slack, inventory to booking systems.',
    features: ['Python scripts', 'Cron & event triggers', 'Slack/email alerts'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-salmon-400/10 to-transparent',
  },
  {
    icon: '🧠',
    title: 'Machine Learning',
    description:
      'Demand forecasting, staffing models, and anomaly detection trained on your historical data — not generic dashboards.',
    features: ['Demand prediction', 'Staffing optimization', 'Anomaly alerts'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '📡',
    title: 'API Development',
    description:
      'Custom backends and microservices that power booking widgets, kiosks, partner portals, and mobile apps.',
    features: ['FastAPI / Node.js', 'Auth & rate limiting', 'OpenAPI docs'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '🗄️',
    title: 'Data Pipelines',
    description:
      'ETL from POS, booking, and CRM systems into a single warehouse for reporting, ML training, and business intelligence.',
    features: ['PostgreSQL / BigQuery', 'Scheduled ETL', 'Custom dashboards'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
  {
    icon: '📱',
    title: 'Booking & Kiosk Apps',
    description:
      'Touch-screen kiosks, self-service booking flows, and real-time availability components wired to your live inventory.',
    features: ['React frontends', 'Live inventory', 'Offline fallback'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-aurora/10 to-transparent',
  },
  {
    icon: '🔧',
    title: 'Legacy System Modernization',
    description:
      'Replace paper logs and Excel workflows with proper software — migrate data, build APIs, and train your team.',
    features: ['Data migration', 'API wrappers', 'Staff training'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-salmon-400/10 to-transparent',
  },
  {
    icon: '🛠️',
    title: 'Ongoing Dev Support',
    description:
      'Bug fixes, feature additions, dependency updates, and monitoring — your codebase stays healthy season to season.',
    features: ['GitHub repos you own', 'CI/CD pipelines', 'On-call support'],
    span: 'col-span-12 sm:col-span-6 md:col-span-4',
    accent: 'from-glacier-400/10 to-transparent',
  },
]

const packages = [
  {
    name: 'Integration Sprint',
    price: 'From $3,200',
    description: 'Connect two platforms in 2–3 weeks. Square ↔ FareHarbor, POS ↔ CRM, or booking ↔ inventory.',
    includes: ['API audit', 'Two-way sync', 'Error monitoring', 'Documentation'],
    popular: false,
  },
  {
    name: 'Automation Build',
    price: 'From $2,800',
    description: 'Replace a manual workflow with a Python automation — alerts, reports, data transforms, scheduled jobs.',
    includes: ['Workflow mapping', 'Script development', 'Slack/email hooks', 'Runbook docs'],
    popular: true,
  },
  {
    name: 'Full Stack Launch',
    price: 'From $8,500',
    description: 'Custom website + integrations + automation in a 6–8 week build. Everything wired together.',
    includes: ['React web app', 'API backend', '2 integrations', 'ML baseline model'],
    popular: false,
  },
  {
    name: 'ML Pipeline',
    price: 'Custom',
    description: 'Demand forecasting or staffing model trained on your data, deployed with automated retraining.',
    includes: ['Data audit', 'Model training', 'API endpoint', 'Quarterly retrain'],
    popular: false,
  },
]

const addons = [
  {
    title: 'Additional API Integration',
    description: 'Add another platform to an existing sync — QuickBooks, HubSpot, Rezdy, or a custom endpoint.',
  },
  {
    title: 'Real-Time Dashboard',
    description: 'Custom React dashboard pulling live data from your integrations and ML models.',
  },
  {
    title: 'Webhook Reliability Layer',
    description: 'Retry logic, dead-letter queues, and alerting when third-party webhooks fail.',
  },
  {
    title: 'Mobile App Shell',
    description: 'React Native wrapper around your booking flow for a branded iOS/Android experience.',
  },
  {
    title: 'Data Warehouse Setup',
    description: 'PostgreSQL or BigQuery with scheduled ETL from all your business systems.',
  },
  {
    title: 'CI/CD & DevOps',
    description: 'GitHub Actions pipelines, Docker containers, staging environments, and deployment automation.',
  },
]

const retainers = [
  { name: 'Dev Support', price: '$199/mo', detail: 'Bug fixes, small features, dependency updates, uptime monitoring' },
  { name: 'Integration Monitoring', price: '$149/mo', detail: 'Webhook health checks, sync alerts, monthly integration report' },
  { name: 'ML Model Maintenance', price: '$299/mo', detail: 'Retraining, drift detection, accuracy reports, feature updates' },
  { name: 'Full Engineering Retainer', price: '$1,200/mo', detail: '20 hours/month of development across web, API, automation, and ML' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-mist-50 pt-24 pb-0 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-glacier-400/5 blur-3xl" />
        <div className="absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-fjord-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            label="Development Services"
            title="Code that connects your business systems"
            description="We write software — websites, APIs, automations, and ML models. No marketing fluff, no template sites. Real engineering for Ketchikan operators."
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

        <div id="packages" className="mt-28">
          <Reveal>
            <SectionHeading
              label="Project Packages"
              title="Scoped builds with clear deliverables"
              description="Fixed scope, documented code, GitHub repos you own. No open-ended agency billing."
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
                      Most requested
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
                    Discuss {pkg.name}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <SectionHeading
              label="Add-Ons"
              title="Extend any project"
              description="Layer these onto existing builds when you need more capability."
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

        <div className="mt-28 pb-24 md:pb-32">
          <Reveal>
            <SectionHeading
              label="Engineering Retainers"
              title="Keep your systems running and improving"
              description="Ongoing development support — not generic website maintenance."
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
                Not sure what you need? We&apos;ll map your systems and recommend a build on a free technical consult.
              </p>
              <Button href="#contact" variant="dark" className="mt-5">
                Book a Technical Consult
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
