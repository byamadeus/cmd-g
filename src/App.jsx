import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Capabilities />
      <Team />
      <Footer />
    </div>
  )
}
