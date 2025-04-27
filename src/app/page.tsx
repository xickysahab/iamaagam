import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Fade } from 'react-awesome-reveal';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Fade triggerOnce>
          <About />
        </Fade>
        <Fade triggerOnce>
          <Education />
        </Fade>
        <Fade triggerOnce>
          <Experience />
        </Fade>
        <Fade triggerOnce>
          <Skills />
        </Fade>
        <Fade triggerOnce>
          <Projects />
        </Fade>
        <Fade triggerOnce>
          <Contact />
        </Fade>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
