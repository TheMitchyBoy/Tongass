import { useState } from 'react'
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

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
                title="Ready before the next ship docks?"
                description="Book a free 30-minute strategy call. We'll review your online presence and show you what's possible — no pressure, no jargon."
                light
                align="left"
              />
            </Reveal>

            <div className="mt-10 space-y-5">
              {[
                { label: 'Office', value: '2417 Tongass Ave, Suite 204', sub: 'Ketchikan, AK 99901', icon: '📍' },
                { label: 'Phone', value: '(907) 555-0147', sub: 'Mon–Fri, 8 AM – 5 PM AKST', icon: '📞' },
                { label: 'Email', value: 'hello@tongassdigital.com', sub: 'Response within one business day', icon: '✉️' },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className="group flex gap-4 rounded-xl p-3 transition hover:bg-white/5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-glacier-400/10 text-lg ring-1 ring-glacier-400/20 transition group-hover:bg-glacier-400/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
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
                      We&apos;ll be in touch within one business day. Gunalchéesh for reaching out.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-bold text-fjord-950">
                      Request Your Free Consultation
                    </h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="First Name" id="firstName" required focused={focused} setFocused={setFocused} />
                      <Field label="Last Name" id="lastName" required focused={focused} setFocused={setFocused} />
                    </div>
                    <Field label="Business Name" id="business" required focused={focused} setFocused={setFocused} />
                    <Field label="Email" id="email" type="email" required focused={focused} setFocused={setFocused} />
                    <Field label="Phone" id="phone" type="tel" focused={focused} setFocused={setFocused} />
                    <div>
                      <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-fjord-900">Business Type</label>
                      <select id="type" required className="input-modern">
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fjord-900">Tell us about your business</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="What ships do you see most? What's your biggest challenge?"
                        className="input-modern resize-none"
                      />
                    </div>
                    <Button type="submit" variant="dark" className="w-full">
                      Book My Free Strategy Call
                    </Button>
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

function Field({ label, id, type = 'text', required = false, focused, setFocused }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fjord-900">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className={`input-modern ${focused === id ? 'ring-2 ring-glacier-400/20' : ''}`}
        onFocus={() => setFocused(id)}
        onBlur={() => setFocused(null)}
      />
    </div>
  )
}
