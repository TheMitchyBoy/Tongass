import { useEffect, useState } from 'react'
import Button from './ui/Button'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)

      const contact = document.getElementById('contact')
      if (contact) {
        const rect = contact.getBoundingClientRect()
        setHide(rect.top < window.innerHeight * 0.6)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible || hide) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-mist-200 bg-white/95 p-3 shadow-[0_-8px_32px_rgba(10,35,66,0.12)] backdrop-blur-lg md:hidden">
      <div className="flex gap-2">
        <a
          href="tel:+19075550147"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-fjord-900/15 py-3 text-sm font-semibold text-fjord-950"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
        <Button href="#contact" variant="primary" className="flex-[2] !py-3">
          Start a Project
        </Button>
      </div>
    </div>
  )
}
