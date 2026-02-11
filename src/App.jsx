import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Questionario from "./components/Questionario"

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <Features />

      <Pricing />

      <Testimonials />

      
      <Questionario />

      <Footer />
    </div>
  )
}

export default App
