import Header from './components/Header'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'
import WaterAmbience from './components/WaterAmbience'
import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Stats from './components/Stats'
import Services from './components/Services'
import Analytics from './components/Analytics'
import Industries from './components/Industries'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <WaterAmbience />
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Services />
        <WaveDivider top="white" bottom="deep" height={72} />
        <Analytics />
        <WaveDivider top="fjord" bottom="mist" height={72} />
        <Industries />
        <WaveDivider top="mist" bottom="white" height={56} />
        <Process />
        <Pricing />
        <WaveDivider top="white" bottom="mist" height={56} />
        <Testimonials />
        <WaveDivider top="mist" bottom="fjord" height={72} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
