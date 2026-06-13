import Reveal from './ui/Reveal'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-fjord-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <Reveal className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-glacier-400/25 to-aurora/10 ring-1 ring-white/10">
                <svg className="h-5 w-5 text-glacier-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L2 20h20L12 3zm0 5.5L17.5 18h-11L12 8.5z" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold text-white">Tongass Digital</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/35">
              2417 Tongass Ave, Ketchikan. Websites and ship-day analytics for cruise-season
              businesses — locally owned, locally operated.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h4 className="text-sm font-bold text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/35">
              {[
                { label: 'Core Services', href: '#services' },
                { label: 'Packages', href: '#packages' },
                { label: 'Passenger Analytics', href: '#analytics' },
                { label: 'Pricing', href: '#pricing' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-glacier-400">{item.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <h4 className="text-sm font-bold text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/35">
              {[
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-glacier-400">{item.label}</a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Tongass Digital LLC. Ketchikan, Alaska.
          </p>
          <p className="text-xs text-white/25">
            Proudly serving businesses from Berth 1 to Ward Cove.
          </p>
        </div>
      </div>
    </footer>
  )
}
