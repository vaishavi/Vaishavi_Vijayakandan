import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects.js';
import { Timeline } from './components/Timeline.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Timeline/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
