import { useEffect, useState } from 'react'
import Button from './ui/Button'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0.5 left-0 right-0 z-50 border-b border-white/5 bg-fjord-950/60 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? 'header-scrolled' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-glacier-400/25 to-aurora/10 ring-1 ring-white/10 transition group-hover:ring-glacier-400/40">
            <svg className="h-5 w-5 text-glacier-400 transition group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 20h20L12 3zm0 5.5L17.5 18h-11L12 8.5z" />
            </svg>
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Tongass Digital
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-glacier-400/70">
              Ketchikan, Alaska
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="ml-4 !px-5 !py-2.5 !text-sm">
            Free Consultation
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-fjord-950/95 px-6 py-5 backdrop-blur-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="mt-3 w-full"
            >
              Free Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
