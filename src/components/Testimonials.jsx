import { useEffect, useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SectionWave from './SectionWave'

const testimonials = [
  {
    quote:
      'Before Tongass, we had no idea Norwegian Bliss days were worth 2x our slow ships. We staff up accordingly and revenue jumped 40% in one season. Paid for itself in the first two weeks.',
    name: 'Sarah Lindqvist',
    business: 'Creek Street Trading Co.',
    location: 'Front St, Berth 2 walkable',
    type: 'Gift Shop',
    metric: '+40% revenue',
  },
  {
    quote:
      'We were losing charters to operators with better mobile sites. Now boats fill from pre-bookings before passengers hit Thomas Basin. Avg. 6 extra seats per ship day.',
    name: 'Mike Tlingit',
    business: 'Rainforest Anglers',
    location: 'Thomas Basin',
    type: 'Tour Operator',
    metric: '+6 seats/ship day',
  },
  {
    quote:
      'I can see exactly when Summit passengers browse our gallery — 10:30 AM peak. We shifted hours and added online holds. Gallery traffic up 60% on ship days.',
    name: 'Elena Vasquez',
    business: 'Totem Heritage Gallery',
    location: 'Creek Street',
    type: 'Art Gallery',
    metric: '+60% ship-day traffic',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  function goTo(index) {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const t = testimonials[current]

  return (
    <section className="bg-mist-50 pb-0 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <Reveal>
          <SectionHeading
            label="Local Results"
            title="Ketchikan businesses already winning with Tongass"
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="section-card overflow-hidden rounded-3xl p-8 md:p-12">
              <div
                key={current}
                className="testimonial-slide"
                style={{
                  animation: `fade-slide-${direction > 0 ? 'next' : 'prev'} 0.5s ease`,
                }}
              >
                <div className="flex items-start justify-between">
                  <svg className="h-10 w-10 text-glacier-400/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span className="rounded-full bg-glacier-400/10 px-3 py-1 text-xs font-bold text-glacier-400 ring-1 ring-glacier-400/20">
                    {t.metric}
                  </span>
                </div>

                <p className="mt-6 font-display text-xl leading-relaxed font-medium text-fjord-900 md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="mt-8 flex items-center gap-4 border-t border-mist-200 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fjord-900 to-fjord-700 font-display text-sm font-bold text-glacier-400">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-fjord-950">{t.name}</p>
                    <p className="text-sm text-fjord-700/55">{t.business} · {t.location}</p>
                  </div>
                </footer>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-glacier-400' : 'w-2 bg-mist-200 hover:bg-mist-200/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 hidden gap-4 md:grid md:grid-cols-3">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-2xl border p-5 text-left transition ${
                i === current
                  ? 'border-glacier-400/40 bg-white shadow-md'
                  : 'border-transparent bg-white/50 hover:bg-white'
              }`}
            >
              <p className="text-sm font-semibold text-fjord-950">{item.name}</p>
              <p className="text-xs text-fjord-700/50">{item.business}</p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-slide-next {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-slide-prev {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      <SectionWave from="white" to="fjord" />
    </section>
  )
}
