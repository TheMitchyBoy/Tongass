import { useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'

const faqs = [
  {
    q: 'How fast can you launch before cruise season?',
    a: 'Most Harbor and Channel packages go live in 4–6 weeks. We prioritize businesses that need to be ready before the first major ship days in May — book a call by March and we\'ll map a timeline to your opening day.',
  },
  {
    q: 'Do you work with my POS or booking system?',
    a: 'Yes. We integrate with Square, Stripe, FareHarbor, Rezdy, and most systems Ketchikan tour operators and shops already use. If you\'re on paper and spreadsheets, we\'ll set you up from scratch.',
  },
  {
    q: 'What if I only make money May through September?',
    a: 'That\'s exactly who we build for. Our analytics track ship-by-ship revenue so you know which days matter. Off-season retainers are lower, and we help you capture emails for return visitors next season.',
  },
  {
    q: 'How do I know this will pay for itself?',
    a: 'One extra $80 tour booking per ship day covers Harbor in under three weeks. Channel clients average 147% more mobile conversions after launch. We\'ll run the math for your business on a free strategy call — no guesswork.',
  },
  {
    q: 'Are you actually local to Ketchikan?',
    a: 'Yes. We\'re on Tongass Ave, we watch ship days in person, and we answer the phone during Alaska business hours. We know Berth 1 from Ward Cove and which streets fill up on Norwegian days.',
  },
  {
    q: 'Can passengers book on their phones before they leave the ship?',
    a: 'That\'s the core of what we build. Mobile-first sites that load on ship Wi-Fi, with pre-booking for tours, tables, and gifts — so you capture revenue during the tender ride to dock.',
  },
  {
    q: 'What\'s the Norwegian Day Package?',
    a: 'It\'s for businesses that already have a site but want to maximize revenue from their biggest ship. We audit which vessel drives the most traffic, build a promo landing page, and give your staff a cheat sheet for that ship\'s peak hours.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. Season retainers include ship-day monitoring, SEO, analytics calls, and off-season email — all priced monthly and tied to your cruise calendar, not generic maintenance.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-mist-50 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Questions Ketchikan owners ask before season starts"
            description="Straight answers — no agency jargon."
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="section-card overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-base font-semibold text-fjord-950 md:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist-100 text-fjord-700 transition-transform duration-300 ${
                      open === i ? 'rotate-45 bg-glacier-400/15 text-glacier-400' : ''
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-fjord-700/70">{faq.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
