import { useEffect, useState } from 'react'
import Button from './ui/Button'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-fjord-950/90 shadow-lg shadow-fjord-950/20 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-fjord-950/80 via-fjord-950/40 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-glacier-400/25 to-aurora/10 ring-1 ring-white/10 transition group-hover:ring-glacier-400/40">
            <svg className="h-5 w-5 text-glacier-400 transition group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L2 20h20L12 3zm0 5.5L17.5 18h-11L12 8.5z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Tongass Digital
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-glacier-400/70">
              Ketchikan, Alaska
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+19075550147"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-glacier-300 md:flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (907) 555-0147
          </a>
          <Button href="#contact" variant="primary" className="!px-4 !py-2.5 !text-sm lg:!px-5">
            Free Audit
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 lg:hidden"
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
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
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
            <a
              href="tel:+19075550147"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-glacier-400"
              onClick={() => setOpen(false)}
            >
              (907) 555-0147
            </a>
            <Button href="#contact" variant="primary" className="mt-3 w-full">
              Free Ship-Day Audit
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
