import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.experienceHeading}>Experience</h2>
      {/* Add your work or internship experience here */}
      <div className={styles.experienceEntry}>
        <div className={styles.experienceHeader}>
          <Image src="/Ojjus.png" alt="Ojuss AI Research Lab Pvt Ltd Logo" width={50} height={50} className={styles.experienceLogo} />
          <div>
            <h3 className={styles.experienceTitle}>AI Engineering Intern</h3>
            <p className={styles.experienceCompany}>Ojuss AI Research Lab Pvt Ltd - [April-2025]</p>
          </div>
        </div>
        <ul className={styles.experienceResponsibilities}>
          <li>Development</li>
          <li>Social media</li>
          {/* Add more responsibilities */}
        </ul>
      </div>
      <div className={styles.experienceEntry}>
        <div className={styles.experienceHeader}>
          <Image src="/Justcharge.jpeg" alt="Just Charge Media Logo" width={50} height={50} className={styles.experienceLogo} />
          <div>
            <h3 className={styles.experienceTitle}>Video editor</h3>
            <p className={styles.experienceCompany}>Just Charge Media - [March-2025]</p>
          </div>
        </div>
        <ul className={styles.experienceResponsibilities}>
          <li>Video Editor</li>
          <li>Content Writing</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
