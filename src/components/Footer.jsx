export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-fjord-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-glacier-400/20">
                <svg className="h-5 w-5 text-glacier-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L2 20h20L12 3zm0 5.5L17.5 18h-11L12 8.5z" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-white">
                Tongass Digital
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              Websites and analytics technology for Ketchikan businesses that serve cruise
              ship passengers. Locally owned, locally operated.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/40">
              <li><a href="#services" className="transition hover:text-glacier-400">Website Design</a></li>
              <li><a href="#analytics" className="transition hover:text-glacier-400">Passenger Analytics</a></li>
              <li><a href="#services" className="transition hover:text-glacier-400">E-Commerce</a></li>
              <li><a href="#services" className="transition hover:text-glacier-400">Local SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/40">
              <li><a href="#industries" className="transition hover:text-glacier-400">Industries</a></li>
              <li><a href="#pricing" className="transition hover:text-glacier-400">Pricing</a></li>
              <li><a href="#contact" className="transition hover:text-glacier-400">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Tongass Digital LLC. Ketchikan, Alaska.
          </p>
          <p className="text-xs text-white/30">
            Proudly serving businesses from Berth 1 to Ward Cove.
          </p>
        </div>
      </div>
    </footer>
  )
}
