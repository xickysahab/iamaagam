import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.skillsHeading}>Skills</h2>
      <ul className={styles.skillsList}>
        <li className={styles.skillItem}>
          <Image src="/premierepro.png" alt="Premiere Pro Logo" width={60} height={60} className={styles.skillLogo} /> {/* Approximate 2cm to pixels */}
          Video editing
        </li>
        <li className={styles.skillItem}>
          <Image src="/python.png" alt="Python Logo" width={60} height={60} className={styles.skillLogo} /> {/* Approximate 2cm to pixels */}
          coding
        </li>
        <li className={styles.skillItem}>
          <Image src="/AI.png" alt="AI Logo" width={60} height={60} className={styles.skillLogo} /> {/* Approximate 2cm to pixels */}
          Ai
        </li>
        {/* Add more skills here */}
      </ul>
    </section>
  );
};

export default Skills;
