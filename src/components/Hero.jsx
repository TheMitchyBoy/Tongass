import { useEffect, useState } from 'react'
import Button from './ui/Button'
import Marquee from './Marquee'
import HeroWaves from './HeroWaves'
import TiltCard from './ui/TiltCard'

const ships = [
  { name: 'Norwegian Bliss', passengers: 3800, time: '7:00 AM', status: 'Docked' },
  { name: 'Celebrity Summit', passengers: 2100, time: '8:30 AM', status: 'Docked' },
  { name: 'Viking Orion', passengers: 930, time: '11:00 AM', status: 'Arriving' },
]

export default function Hero() {
  const [passengerCount, setPassengerCount] = useState(0)
  const target = 6830

  useEffect(() => {
    let start = null
    let frame
    const duration = 2200

    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setPassengerCount(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(step)
    }

    const timer = setTimeout(() => {
      frame = requestAnimationFrame(step)
    }, 600)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero-gradient hero-underwater noise-overlay relative overflow-hidden">
      <div className="hero-mesh">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
        <div className="hero-grid" />
        <div className="hero-bubbles" />
      </div>

      <div className="relative pt-24 md:pt-28">
        <Marquee />

        <div className="mx-auto max-w-6xl px-6 pb-36 pt-12 md:pb-44 md:pt-16">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="animate-fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-glacier-400/20 bg-glacier-400/5 px-4 py-2 backdrop-blur-sm">
                <span className="pulse-dot relative h-2 w-2 rounded-full bg-glacier-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-glacier-300">
                  Built for Ketchikan&apos;s cruise season
                </span>
              </div>

              <h1 className="font-display text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Turn dock-day crowds into{' '}
                <span className="text-gradient-animate">year-round revenue</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
                We build high-converting websites and passenger analytics for Ketchikan shops,
                tours, galleries, and restaurants — so you capture every cruiser before they
                sail away.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#contact" variant="primary">
                  Get a Free Strategy Call
                  <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button href="#services" variant="secondary">
                  See What We Build
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
                {['Mobile-first for passengers on shore', 'Real-time cruise ship data', 'Local Ketchikan team'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-white/40">
                    <svg className="h-4 w-4 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <TiltCard className="float-slow">
                <div className="glass-card rounded-3xl p-6 md:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-glacier-400">
                      Today&apos;s Ship Traffic
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-glacier-400/15 px-3 py-1 text-xs font-semibold text-glacier-300 ring-1 ring-glacier-400/20">
                      <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-glacier-400" />
                      Live
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {ships.map((ship, i) => (
                      <ShipRow key={ship.name} {...ship} delay={i * 150} />
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-3xl font-bold tabular-nums text-white">
                          {passengerCount.toLocaleString()}
                        </p>
                        <p className="mt-0.5 text-xs text-white/40">Passengers ashore today</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-glacier-400">+23%</p>
                        <p className="text-xs text-white/35">vs. last week</p>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-glacier-400 to-aurora transition-all duration-1000" />
                    </div>
                  </div>
                </div>
              </TiltCard>

              <div className="float-delay absolute -bottom-4 -left-4 hidden rounded-2xl glass-card px-5 py-4 sm:block lg:-left-8">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Conversions</p>
                <p className="font-display text-2xl font-bold text-gradient">+147%</p>
                <p className="text-xs text-glacier-400/80">avg. after launch</p>
              </div>

              <div className="float-slow absolute -right-2 -top-4 hidden rounded-2xl glass-card px-4 py-3 sm:block lg:-right-6">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Berth 3</p>
                <p className="text-sm font-semibold text-white">3 ships docked</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroWaves />
    </section>
  )
}

function ShipRow({ name, passengers, time, status, delay }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800 + delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className={`flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/5 transition-all duration-500 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
      }`}
    >
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-white/35">{passengers.toLocaleString()} passengers · {time}</p>
      </div>
      <span
        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          status === 'Docked'
            ? 'bg-glacier-400/15 text-glacier-300 ring-1 ring-glacier-400/20'
            : 'bg-salmon-400/15 text-salmon-400 ring-1 ring-salmon-400/20'
        }`}
      >
        {status}
      </span>
    </div>
  )
}
