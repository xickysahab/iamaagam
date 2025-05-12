import React from 'react';
import Image from 'next/image';
import styles from './components.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.pfpContainer} pfp-container`}>
        <Image src="/Aagam.JPG" alt="Aagam Jain" width={150} height={150} className={styles.pfpImage} /> {/* Approximate 5cm to pixels */}
      </div>
      <div>
        <h1 className={`${styles.name} name-hover`}>Aagam Jain</h1>
        <p className={styles.title}>AI Engineering Student</p>
      </div>
    </header>
  );
};

export default Header;
