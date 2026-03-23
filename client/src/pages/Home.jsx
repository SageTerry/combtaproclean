import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Maintenance from '../components/Maintenance'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Maintenance />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
