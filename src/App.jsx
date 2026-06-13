import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import WaterAmbience from './components/WaterAmbience'
import StickyCTA from './components/StickyCTA'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ShipDayBanner from './components/ShipDayBanner'
import Services from './components/Services'
import Analytics from './components/Analytics'
import Industries from './components/Industries'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <WaterAmbience />
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <StickyCTA />
      <main className="relative z-10 pb-20 md:pb-0">
        <Hero />
        <Stats />
        <div className="bg-mist-50 py-10">
          <ShipDayBanner />
        </div>
        <Services />
        <Analytics />
        <Industries />
        <Process />
        <Pricing />
        <Guarantee />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
