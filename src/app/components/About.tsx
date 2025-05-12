import React from 'react';
import styles from './components.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.aboutHeading}>About Me</h2>
      <p className={styles.aboutText}>
        Driven by innovation and a passion for technology, I am Aagam Jain, a first-year AI Engineering student at IIT Madras.
        Currently, I’m honing my skills as an intern at Ojuss AI Research Lab Pvt Ltd, contributing to cutting-edge AI research and development. Beyond academics, I love playing cricket, exploring new places, and embracing every opportunity to learn and grow.
      </p>
    </section>
  );
};

export default About;
