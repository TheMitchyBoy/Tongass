import { useEffect, useState } from 'react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import SectionWave from './SectionWave'

const testimonials = [
  {
    quote:
      'They built a two-way sync between our Square POS and FareHarbor in three weeks. We haven\'t manually updated inventory since. Zero double-bookings all season.',
    name: 'Sarah Lindqvist',
    business: 'Creek Street Trading Co.',
    location: 'Front St',
    type: 'POS Integration',
    metric: '0 manual syncs',
  },
  {
    quote:
      'The demand forecasting model tells us which days need extra guides before we even see the ship schedule. Staffing accuracy went from guesswork to 91% hit rate.',
    name: 'Mike Tlingit',
    business: 'Rainforest Anglers',
    location: 'Thomas Basin',
    type: 'ML Pipeline',
    metric: '91% forecast accuracy',
  },
  {
    quote:
      'We had booking data in FareHarbor, sales in Square, and customers in a spreadsheet. Tongass built a pipeline that feeds everything into one dashboard. Saved 8 hours a week.',
    name: 'Elena Vasquez',
    business: 'Totem Heritage Gallery',
    location: 'Creek Street',
    type: 'Data Pipeline',
    metric: '8 hrs/week saved',
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
            label="Client Results"
            title="Code that solved real problems"
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
                    <p className="text-sm text-fjord-700/55">{t.business} · {t.type}</p>
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
              <p className="text-xs text-fjord-700/50">{item.type} · {item.business}</p>
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
