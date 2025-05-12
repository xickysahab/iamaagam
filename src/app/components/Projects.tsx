import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.projectsHeading}>Projects</h2>
      {/* Add your project components or list here */}
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}><a href="https://iamaagam.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Website Developed</a></h3>
          <p className={styles.projectDescription}>View it live <a href="https://iamaagam.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectDescriptionLink}>here</a>.</p>
          {/* Add links to project repo or demo */}
        </div>
        <div className={`${styles.projectCard} ${styles.projectCardCentered}`}>
          <Image src="/Build AI.png" alt="Build AI Achievement" width={300} height={200} className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Build AI Achievement</h3>
        </div>
        <div className={`${styles.projectCard} ${styles.projectCardCentered}`}>
          <Image src="/prompt design.png" alt="Prompt Design Example" width={300} height={200} className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Prompt Design Example</h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
