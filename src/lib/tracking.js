const CONSENT_KEY = 'ketchikancode_tracking_consent'
const VISITOR_KEY = 'ketchikancode_visitor_id'
const SESSION_KEY = 'ketchikancode_session_id'

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || 'x71136z8w9'
const ENDPOINT = import.meta.env.VITE_TRACKING_ENDPOINT

let initialized = false
let sessionStart = Date.now()
const consentListeners = new Set()

function notifyConsentChange() {
  for (const listener of consentListeners) {
    listener(hasConsent())
  }
}

export function onConsentChange(listener) {
  consentListeners.add(listener)
  return () => consentListeners.delete(listener)
}

function readConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

function writeConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* private browsing */
  }
}

function getOrCreateId(key) {
  try {
    let id = localStorage.getItem(key)
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem(key, id)
    }
    return id
  } catch {
    return crypto.randomUUID()
  }
}

function getSessionId() {
  try {
    let id = sessionStorage.getItem(SESSION_KEY)
    if (!id) {
      id = crypto.randomUUID()
      sessionStorage.setItem(SESSION_KEY, id)
    }
    return id
  } catch {
    return crypto.randomUUID()
  }
}

function parseUtmParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_term: params.get('utm_term') || undefined,
    utm_content: params.get('utm_content') || undefined,
  }
}

export function getVisitorContext() {
  return {
    visitor_id: getOrCreateId(VISITOR_KEY),
    session_id: getSessionId(),
    page_path: window.location.pathname + window.location.hash,
    page_url: window.location.href,
    page_title: document.title,
    referrer: document.referrer || 'direct',
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen_width: window.screen.width,
    screen_height: window.screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    device_type: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
    ...parseUtmParams(),
  }
}

function loadScript(src, async = true) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = async
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

function initGA4() {
  if (!GA_ID || window.gtag) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    send_page_view: false,
    anonymize_ip: true,
  })

  return loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
}

function initClarity() {
  if (!CLARITY_ID) return
  if (document.querySelector(`script[src*="clarity.ms/tag/${CLARITY_ID}"]`)) return

  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = 'https://www.clarity.ms/tag/' + i
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', CLARITY_ID)
}

export function hasConsent() {
  return readConsent() === 'accepted'
}

export function hasDeclined() {
  return readConsent() === 'declined'
}

export function acceptTracking() {
  writeConsent('accepted')
  initTracking()
  notifyConsentChange()
}

export function declineTracking() {
  writeConsent('declined')
  notifyConsentChange()
}

export function initTracking() {
  if (initialized || !hasConsent()) return
  initialized = true
  sessionStart = Date.now()

  initGA4()
    ?.then(() => {
      trackPageView()
      trackEvent('session_start', { engagement_time_msec: 0 })
    })
    .catch(() => {})

  initClarity()

  const context = getVisitorContext()
  if (GA_ID && window.gtag) {
    window.gtag('set', 'user_properties', {
      device_type: context.device_type,
      visitor_id: context.visitor_id,
    })
  }
}

async function sendToEndpoint(event, properties) {
  if (!ENDPOINT) return

  try {
    await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        properties,
        context: getVisitorContext(),
        timestamp: new Date().toISOString(),
      }),
      keepalive: true,
    })
  } catch {
    /* endpoint optional */
  }
}

export function trackEvent(event, properties = {}) {
  if (!hasConsent()) return

  const payload = {
    ...getVisitorContext(),
    ...properties,
    engagement_time_msec: Date.now() - sessionStart,
  }

  if (GA_ID && window.gtag) {
    window.gtag('event', event, properties)
  }

  if (CLARITY_ID && window.clarity) {
    window.clarity('event', event)
  }

  sendToEndpoint(event, payload)
}

export function trackPageView() {
  if (!hasConsent()) return

  const context = getVisitorContext()

  if (GA_ID && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: context.page_path,
      page_title: context.page_title,
      page_location: context.page_url,
    })
  }

  trackEvent('page_view', {
    page_path: context.page_path,
    referrer: context.referrer,
  })
}

export function trackOutboundLink(url, label) {
  trackEvent('click_outbound', { link_url: url, link_label: label })
}

export function trackCtaClick(label, location) {
  trackEvent('cta_click', { cta_label: label, cta_location: location })
}

export function trackFormSubmit(formName, fields = {}) {
  trackEvent('form_submit', { form_name: formName, ...fields })
}

export function trackSectionView(sectionId) {
  trackEvent('section_view', { section_id: sectionId })
}

export function trackScrollDepth(percent) {
  trackEvent('scroll_depth', { percent })
}

export function isTrackingConfigured() {
  return Boolean(GA_ID || CLARITY_ID || ENDPOINT)
}
