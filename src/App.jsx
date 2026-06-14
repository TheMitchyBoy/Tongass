import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import WaterAmbience from './components/WaterAmbience'
import StickyCTA from './components/StickyCTA'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import CodeExamples from './components/CodeExamples'
import Analytics from './components/Analytics'
import Industries from './components/Industries'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VisitorTracking from './components/VisitorTracking'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <VisitorTracking />
      <CookieConsent />
      <WaterAmbience />
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <StickyCTA />
      <main className="relative z-10 pb-20 md:pb-0">
        <Hero />
        <Stats />
        <Services />
        <CodeExamples />
        <Analytics />
        <Industries />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
