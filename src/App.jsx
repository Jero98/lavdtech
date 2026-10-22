import About from './components/About.jsx'
import Benefits from './components/Benefits.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Navbar from './components/Navbar.jsx'
import Problem from './components/Problem.jsx'
import Results from './components/Results.jsx'
import Solution from './components/Solution.jsx'
import Specs from './components/Specs.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <HowItWorks />
        <Results />
        <Benefits />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
