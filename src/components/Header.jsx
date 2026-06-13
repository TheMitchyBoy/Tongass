import { useState } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-fjord-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-glacier-400/20">
            <svg className="h-5 w-5 text-glacier-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 20h20L12 3zm0 5.5L17.5 18h-11L12 8.5z" />
            </svg>
          </div>
          <div>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Tongass Digital
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-glacier-400/80">
              Ketchikan, Alaska
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-glacier-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-glacier-400 px-5 py-2 text-sm font-semibold text-fjord-950 transition hover:bg-glacier-300"
          >
            Free Consultation
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-fjord-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-glacier-400 px-5 py-2.5 text-center text-sm font-semibold text-fjord-950"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
