import logo from './assets/img/Logo.png';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects.js';
import { Timeline } from './components/Timeline.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import ParticleBackground from './components/Particles/ParticleBackground';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <div className="content">
        <NavBar />
        <Banner />
        <About/>
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;




