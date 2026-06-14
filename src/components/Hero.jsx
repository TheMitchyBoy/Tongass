import { useEffect, useState } from 'react'
import Button from './ui/Button'
import Marquee from './Marquee'
import SectionWave from './SectionWave'
import TiltCard from './ui/TiltCard'

const terminalLines = [
  { type: 'cmd', text: '$ ketchikancode deploy --project creek-street-sync' },
  { type: 'out', text: '✓ Square inventory connected' },
  { type: 'out', text: '✓ FareHarbor webhooks registered' },
  { type: 'out', text: '✓ ML demand model trained (R² 0.91)' },
  { type: 'out', text: '✓ React booking widget deployed' },
  { type: 'success', text: '→ Live at https://api.ketchikancode.com' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 500)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <section className="hero-gradient hero-underwater noise-overlay relative overflow-x-hidden pb-0">
      <div className="hero-mesh">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
        <div className="hero-grid" />
        <div className="hero-bubbles" />
      </div>

      <div className="relative pt-24 md:pt-28">
        <Marquee />

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pb-28 md:pt-16">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="animate-fade-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-glacier-400/20 bg-glacier-400/5 px-4 py-2 backdrop-blur-sm">
                <span className="pulse-dot relative h-2 w-2 rounded-full bg-glacier-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-glacier-300">
                  Custom code · Ketchikan-built · You own the source
                </span>
              </div>

              <h1 className="font-display text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Website coding &amp;{' '}
                <span className="text-gradient-animate">development services</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/55">
                We write the code — custom websites, API integrations, workflow automation,
                and machine learning pipelines for Ketchikan businesses. Square to FareHarbor,
                POS to CRM, web to warehouse.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#contact" variant="primary">
                  Discuss Your Project
                  <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button href="#code" variant="secondary">
                  See Code Examples
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
                {['Python & React development', 'Cross-platform integrations', 'Automation & ML pipelines'].map((item) => (
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
                <div className="glass-card overflow-hidden rounded-3xl">
                  <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-salmon-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-aurora/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-glacier-400/80" />
                    <span className="ml-2 text-[10px] font-mono text-white/35">terminal — ketchikancode-cli</span>
                  </div>
                  <div className="space-y-1.5 p-5 font-mono text-sm">
                    {terminalLines.slice(0, visibleLines).map((line, i) => (
                      <p
                        key={i}
                        className={`transition-all duration-300 ${
                          line.type === 'cmd'
                            ? 'text-white/80'
                            : line.type === 'success'
                              ? 'text-glacier-400'
                              : 'text-white/45'
                        }`}
                      >
                        {line.text}
                      </p>
                    ))}
                    {visibleLines < terminalLines.length && (
                      <span className="inline-block h-4 w-2 animate-pulse bg-glacier-400/60" />
                    )}
                  </div>
                </div>
              </TiltCard>

              <div className="float-delay absolute -bottom-4 -left-4 hidden rounded-2xl glass-card px-5 py-4 sm:block lg:-left-8">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Integrations</p>
                <p className="font-display text-2xl font-bold text-gradient">12+</p>
                <p className="text-xs text-glacier-400/80">platforms connected</p>
              </div>

              <div className="float-slow absolute -right-2 -top-4 hidden rounded-2xl glass-card px-4 py-3 sm:block lg:-right-6">
                <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Stack</p>
                <p className="text-sm font-semibold text-white">Python · React · ML</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionWave from="shallow" to="white" height={64} />
    </section>
  )
}
