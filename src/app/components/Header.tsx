import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '40px 20px', backgroundColor: '#2c3e50', color: '#ecf0f1', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="pfp-container" style={{ marginRight: '20px' }}>
        <Image src="/Aagam.JPG" alt="Aagam Jain" width={150} height={150} style={{ borderRadius: '50%', objectFit: 'cover' }} /> {/* Approximate 5cm to pixels */}
      </div>
      <div>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '3em', fontWeight: 'bold' }}>Aagam Jain</h1>
        <p style={{ margin: '0', fontSize: '1.5em', color: '#bdc3c7' }}>AI Engineering Student</p>
      </div>
    </header>
  );
};

export default Header;
