import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Focus from './components/Focus'
import Languages from './components/Languages'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'
export default function App() {
  useScrollReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Focus />
        <Skills />
        <Education />
        <Languages />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
