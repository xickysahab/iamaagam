import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

const Education: React.FC = () => {
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.educationHeading}>Education</h2>
      <div className={styles.educationEntry}>
        <Image src="/IIT madras.png" alt="IIT Madras Logo" width={50} height={50} className={styles.educationLogo} />
        <div>
          <h3 className={styles.educationDegree}>Indian Institute of Technology Madras</h3>
          <p className={styles.educationInstitution}>First Year AI Engineering Student</p>
            {/* Add degree, dates, relevant coursework, etc. */}
          </div>
        </div>
      <div className={styles.educationEntry}>
        <Image src="/Bvm logo.jpg" alt="Bhai Parmanad Vidya Mandir Logo" width={50} height={50} className={styles.educationLogo} />
        <div>
          <h3 className={styles.educationDegree}>Bhai Parmanad Vidya Mandir</h3>
          <p className={styles.educationInstitution}>Completed Schooling from Science Background</p>
          {/* Add degree, dates, relevant coursework, etc. */}
        </div>
      </div>
    </section>
  );
};

export default Education;
