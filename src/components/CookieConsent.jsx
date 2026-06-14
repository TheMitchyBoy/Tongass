import { useEffect, useState } from 'react'
import {
  acceptTracking,
  declineTracking,
  hasConsent,
  hasDeclined,
  isTrackingConfigured,
} from '../lib/tracking'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isTrackingConfigured()) return
    if (!hasConsent() && !hasDeclined()) {
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function handleAccept() {
    acceptTracking()
    setVisible(false)
  }

  function handleDecline() {
    declineTracking()
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-mist-200 bg-white/95 p-4 shadow-[0_-8px_32px_rgba(10,35,66,0.12)] backdrop-blur-lg md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-2xl md:border">
      <p className="text-sm font-semibold text-fjord-950">Analytics &amp; usage tracking</p>
      <p className="mt-2 text-xs leading-relaxed text-fjord-700/70">
        We use cookies and analytics to understand how visitors use our site — pages viewed,
        buttons clicked, scroll depth, device type, and traffic source. This helps us improve
        our services. You can accept or decline.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 rounded-full bg-fjord-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-fjord-800"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={handleDecline}
          className="flex-1 rounded-full border border-fjord-900/15 px-4 py-2.5 text-xs font-semibold text-fjord-950 transition hover:bg-mist-50"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
