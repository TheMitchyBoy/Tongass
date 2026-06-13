import { useState } from 'react'

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

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-fjord-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-glacier-400">
              Get Started
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Ready before the next ship docks?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              Book a free 30-minute strategy call. We&apos;ll review your current online
              presence, walk through ship-day opportunities, and show you what&apos;s possible
              — no pressure, no jargon.
            </p>

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                label="Office"
                value="2417 Tongass Ave, Suite 204"
                sub="Ketchikan, AK 99901"
              />
              <ContactItem
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                label="Phone"
                value="(907) 555-0147"
                sub="Mon–Fri, 8 AM – 5 PM AKST"
              />
              <ContactItem
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                label="Email"
                value="hello@tongassdigital.com"
                sub="We respond within one business day"
              />
            </div>
          </div>

          <div className="section-card rounded-2xl p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-glacier-400/15">
                  <svg className="h-8 w-8 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-fjord-900">
                  Mahsie&apos; (Thank you)!
                </h3>
                <p className="mt-3 max-w-sm text-sm text-fjord-700/70">
                  We&apos;ll be in touch within one business day to schedule your free strategy
                  call. Gunalchéesh for reaching out.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-semibold text-fjord-900">
                  Request Your Free Consultation
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First Name" id="firstName" required />
                  <Field label="Last Name" id="lastName" required />
                </div>
                <Field label="Business Name" id="business" required />
                <Field label="Email" id="email" type="email" required />
                <Field label="Phone" id="phone" type="tel" />
                <div>
                  <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-fjord-900">
                    Business Type
                  </label>
                  <select
                    id="type"
                    required
                    className="w-full rounded-xl border border-mist-200 bg-mist-100 px-4 py-3 text-sm text-fjord-900 outline-none transition focus:border-glacier-400 focus:ring-2 focus:ring-glacier-400/20"
                  >
                    <option value="">Select your industry</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fjord-900">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What ships do you see most? What's your biggest challenge during cruise season?"
                    className="w-full resize-none rounded-xl border border-mist-200 bg-mist-100 px-4 py-3 text-sm text-fjord-900 outline-none transition placeholder:text-fjord-700/40 focus:border-glacier-400 focus:ring-2 focus:ring-glacier-400/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-fjord-900 py-3.5 text-sm font-semibold text-white transition hover:bg-fjord-800"
                >
                  Book My Free Strategy Call
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value, sub }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-glacier-400/15 text-glacier-400">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-white/40">{label}</p>
        <p className="mt-0.5 font-medium text-white">{value}</p>
        <p className="text-sm text-white/50">{sub}</p>
      </div>
    </div>
  )
}

function Field({ label, id, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fjord-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full rounded-xl border border-mist-200 bg-mist-100 px-4 py-3 text-sm text-fjord-900 outline-none transition focus:border-glacier-400 focus:ring-2 focus:ring-glacier-400/20"
      />
    </div>
  )
}
