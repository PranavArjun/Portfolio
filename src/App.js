
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <TechnicalSkills/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
