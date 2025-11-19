import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Categories from './components/Categories'
import Offers from './components/Offers'
import Testimonials from './components/Testimonials'
import VisitUs from './components/VisitUs'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhyUs />
        <Categories />
        <Offers />
        <Testimonials />
        <VisitUs />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
