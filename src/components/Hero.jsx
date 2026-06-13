export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <path
            d="M0,400 Q300,350 600,380 T1200,360 L1200,600 L0,600 Z"
            fill="rgba(45,212,191,0.15)"
          />
          <path
            d="M0,450 Q400,420 800,440 T1200,430 L1200,600 L0,600 Z"
            fill="rgba(255,255,255,0.05)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-glacier-400/30 bg-glacier-400/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-glacier-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-glacier-300">
                Built for Ketchikan&apos;s cruise season
              </span>
            </div>

            <h1 className="animate-fade-up animate-delay-1 font-display text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
              Turn dock-day crowds into{' '}
              <span className="text-glacier-400">year-round revenue</span>
            </h1>

            <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              We build high-converting websites and passenger analytics for Ketchikan shops,
              tours, galleries, and restaurants — so you capture every cruiser before they
              sail away.
            </p>

            <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-glacier-400 px-7 py-3.5 text-sm font-semibold text-fjord-950 transition hover:bg-glacier-300"
              >
                Get a Free Strategy Call
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                See What We Build
              </a>
            </div>

            <div className="animate-fade-up animate-delay-4 mt-10 flex flex-wrap gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <CheckIcon />
                Mobile-first for passengers on shore
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                Real-time cruise ship data
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="float-slow glass-card rounded-2xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-glacier-400">
                  Today&apos;s Ship Traffic
                </span>
                <span className="rounded-full bg-glacier-400/20 px-2.5 py-0.5 text-xs font-semibold text-glacier-300">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                <ShipRow name="Norwegian Bliss" passengers="3,800" time="7:00 AM" status="Docked" />
                <ShipRow name="Celebrity Summit" passengers="2,100" time="8:30 AM" status="Docked" />
                <ShipRow name="Viking Orion" passengers="930" time="11:00 AM" status="Arriving" />
              </div>
              <div className="mt-5 rounded-xl bg-white/5 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white">6,830</p>
                    <p className="text-xs text-white/50">Passengers ashore today</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-glacier-400">+23%</p>
                    <p className="text-xs text-white/50">vs. last week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl px-5 py-4">
              <p className="text-xs text-white/50">Website conversions</p>
              <p className="font-display text-2xl font-bold text-white">+147%</p>
              <p className="text-xs text-glacier-400">avg. after launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShipRow({ name, passengers, time, status }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-white/40">{passengers} passengers · {time}</p>
      </div>
      <span
        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
          status === 'Docked'
            ? 'bg-glacier-400/20 text-glacier-300'
            : 'bg-salmon-400/20 text-salmon-400'
        }`}
      >
        {status}
      </span>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-glacier-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
