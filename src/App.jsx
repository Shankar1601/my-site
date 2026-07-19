import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import BackgroundBlobs from './components/BackgroundBlobs';
import './index.css';

function App() {
  return (
    <>
      {/* Surreal ambient background logic */}
      <BackgroundBlobs />
      
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      {/* Footer & Meta */}
      <Footer />
    </>
  );
}

export default App;