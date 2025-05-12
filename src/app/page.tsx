import React, { useEffect, useRef } from 'react';
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
  useEffect(() => {
    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll('.parallax-section');
      parallaxSections.forEach(section => {
        const background = section.querySelector('.parallax-background');
        if (background) {
          const scrollPosition = window.scrollY;
          const sectionTop = (section as HTMLElement).getBoundingClientRect().top + scrollPosition;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const viewportHeight = window.innerHeight;

          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.max(0, Math.min(sectionHeight, viewportHeight - (sectionTop - scrollPosition), sectionTop + sectionHeight - scrollPosition));

          // Calculate the scroll progress within the visible part of the section
          const scrollProgress = (scrollPosition - (sectionTop - viewportHeight)) / (sectionHeight + viewportHeight);

          // Adjust the parallax speed (0.5 means half the scroll speed)
          const parallaxSpeed = 0.3;
          const translateY = (scrollProgress - 0.5) * sectionHeight * parallaxSpeed;

          (background as HTMLElement).style.transform = `translateY(${translateY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Apply initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="parallax-section">
          <div className="parallax-background"></div>
          <Fade triggerOnce>
            <About />
          </Fade>
        </div>
        <div className="parallax-section">
           <div className="parallax-background"></div>
          <Fade triggerOnce>
            <Education />
          </Fade>
        </div>
        <div className="parallax-section">
           <div className="parallax-background"></div>
          <Fade triggerOnce>
            <Experience />
          </Fade>
        </div>
        <div className="parallax-section">
           <div className="parallax-background"></div>
          <Fade triggerOnce>
            <Skills />
          </Fade>
        </div>
        <div className="parallax-section">
           <div className="parallax-background"></div>
          <Fade triggerOnce>
            <Projects />
          </Fade>
        </div>
        <div className="parallax-section">
           <div className="parallax-background"></div>
          <Fade triggerOnce>
            <Contact />
          </Fade>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
