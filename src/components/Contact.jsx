import { useEffect, useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import TiltCard from './ui/TiltCard'

const businessTypes = [
  'Gift & Souvenir Shop',
  'Tour Operator',
  'Restaurant / Café',
  'Art Gallery',
  'Adventure Excursion',
  'Jewelry Store',
  'Other',
]

const seasonMonths = [
  'May 2026',
  'April 2026 — need to launch ASAP',
  'Already open / mid-season',
  'Planning for 2027',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)
  const [businessType, setBusinessType] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem('businessType')
    if (stored && businessTypes.includes(stored)) {
      setBusinessType(stored)
      sessionStorage.removeItem('businessType')
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-fjord-950 py-24 md:py-32">
      <div className="hero-mesh">
        <div className="mesh-orb mesh-orb-3 !opacity-25" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionHeading
                label="Get Started"
                title="Free 15-minute ship-day audit"
                description="We'll tell you which ships matter to your business, what's broken on mobile, and whether you can launch before your next busy day. No pitch deck — just answers."
                light
                align="left"
              />
            </Reveal>

            <div className="mt-10 space-y-5">
              {[
                { label: 'Office', value: '2417 Tongass Ave, Suite 204', sub: 'Ketchikan, AK 99901', href: null },
                { label: 'Phone', value: '(907) 555-0147', sub: 'Mon–Fri, 8 AM – 5 PM AKST', href: 'tel:+19075550147' },
                { label: 'Email', value: 'hello@tongassdigital.com', sub: 'We respond within one business day', href: 'mailto:hello@tongassdigital.com' },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className="group flex gap-4 rounded-xl p-3 transition hover:bg-white/5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-glacier-400/10 text-glacier-400 ring-1 ring-glacier-400/20">
                      {item.label === 'Office' && '📍'}
                      {item.label === 'Phone' && '📞'}
                      {item.label === 'Email' && '✉️'}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-white transition hover:text-glacier-300">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{item.value}</p>
                      )}
                      <p className="text-sm text-white/40">{item.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150}>
            <TiltCard>
              <div className="glass-card-light rounded-3xl p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-glacier-400/15 ring-1 ring-glacier-400/30">
                      <svg className="h-10 w-10 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-fjord-950">Mahsie&apos;!</h3>
                    <p className="mt-2 text-sm text-fjord-700/65">
                      We&apos;ll call you within one business day to schedule your ship-day audit.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-bold text-fjord-950">
                      Book Your Free Audit
                    </h3>
                    <p className="text-sm text-fjord-700/65">3 fields. Under 60 seconds.</p>

                    <Field label="Your Name" id="name" required focused={focused} setFocused={setFocused} />
                    <Field label="Business Name" id="business" required focused={focused} setFocused={setFocused} />
                    <Field label="Phone" id="phone" type="tel" required focused={focused} setFocused={setFocused} placeholder="(907) 555-0100" />

                    <div>
                      <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-fjord-900">Business Type</label>
                      <select
                        id="type"
                        required
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="input-modern"
                      >
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="season" className="mb-1.5 block text-sm font-medium text-fjord-900">When do you need to be live?</label>
                      <select id="season" required className="input-modern">
                        <option value="">Select a timeframe</option>
                        {seasonMonths.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    <Button type="submit" variant="dark" className="w-full">
                      Book My Free Ship-Day Audit
                    </Button>

                    <p className="text-center text-xs text-fjord-700/50">
                      Prefer to talk now?{' '}
                      <a href="tel:+19075550147" className="font-medium text-glacier-400 hover:underline">
                        Call (907) 555-0147
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, type = 'text', required = false, placeholder, focused, setFocused }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fjord-900">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className={`input-modern ${focused === id ? 'ring-2 ring-glacier-400/20' : ''}`}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
      />
    </div>
  )
}
