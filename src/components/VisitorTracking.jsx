import { useEffect, useState } from 'react'
import {
  hasConsent,
  initTracking,
  onConsentChange,
  trackPageView,
  trackScrollDepth,
  trackSectionView,
  trackCtaClick,
  trackOutboundLink,
  trackEvent,
} from '../lib/tracking'

const SECTIONS = [
  'services',
  'code',
  'automation',
  'use-cases',
  'pricing',
  'faq',
  'contact',
]

const SCROLL_MILESTONES = [25, 50, 75, 100]

export default function VisitorTracking() {
  const [consented, setConsented] = useState(hasConsent())

  useEffect(() => onConsentChange(setConsented), [])

  useEffect(() => {
    if (consented) initTracking()
  }, [consented])

  useEffect(() => {
    if (!consented) return

    const onHashChange = () => trackPageView()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [consented])

  useEffect(() => {
    if (!consented) return

    const reached = new Set()

    function onScroll() {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      if (height <= 0) return

      const percent = Math.min(100, Math.round((scrollTop / height) * 100))
      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone)
          trackScrollDepth(milestone)
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [consented])

  useEffect(() => {
    if (!consented) return

    const seen = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (!id || seen.has(id)) continue
          seen.add(id)
          trackSectionView(id)
        }
      },
      { threshold: 0.35 },
    )

    const timer = setTimeout(() => {
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }
    }, 500)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [consented])

  useEffect(() => {
    if (!consented) return

    function onClick(e) {
      const trackable = e.target.closest('[data-track]')
      if (trackable) {
        trackCtaClick(
          trackable.getAttribute('data-track'),
          trackable.getAttribute('data-track-location') || 'unknown',
        )
        return
      }

      const anchor = e.target.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (href.startsWith('tel:')) {
        trackCtaClick('phone_call', anchor.textContent?.trim() || 'phone')
      } else if (href.startsWith('mailto:')) {
        trackCtaClick('email_click', anchor.textContent?.trim() || 'email')
      } else if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        trackOutboundLink(href, anchor.textContent?.trim() || 'link')
      } else if (href.startsWith('#')) {
        trackCtaClick(`nav_${href.slice(1)}`, 'navigation')
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [consented])

  useEffect(() => {
    if (!consented) return

    const onUnload = () => trackEvent('session_end')
    window.addEventListener('beforeunload', onUnload)
    return () => window.removeEventListener('beforeunload', onUnload)
  }, [consented])

  return null
}
