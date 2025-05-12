import React from 'react';
import styles from './components.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactHeading}>Contact</h2>
      <p className={styles.contactText}>You can reach me at: <a href="mailto:jainaagam908@gmail.com" className={styles.contactLink}>jainaagam908@gmail.com</a></p>
      <p className={styles.contactText}>GitHub: <a href="https://github.com/xickysahab/iamaagam.git" className={styles.contactLink} target="_blank" rel="noopener noreferrer">https://github.com/xickysahab/iamaagam.git</a></p>
      <p className={styles.contactText}>LinkedIn: <a href="https://www.linkedin.com/in/aagam-jain-29a5a3185" className={styles.contactLink} target="_blank" rel="noopener noreferrer">www.linkedin.com/in/aagam-jain-29a5a3185</a></p>
      {/* Add links to social media or contact form */}
    </section>
  );
};

export default Contact;
