import React from 'react';
import styles from './components.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerSection}>
      <p className={styles.footerText}>&copy; {new Date().getFullYear()} Aagam Jain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
