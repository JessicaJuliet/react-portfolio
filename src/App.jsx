import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProfessionalProjects from "./components/ProfessionalProjects";




const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <ProfessionalProjects />
      <Projects />
      <Footer />
    </>
  )
}

export default App