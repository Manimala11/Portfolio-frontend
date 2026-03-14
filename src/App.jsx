import About from './components/About';
import { Certificate } from './components/Certificate';
import Contact from './components/Contact'
import Education from './components/Education';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
   <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certificate/>
      <Contact/>
   </>
  )
}

export default App;