import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '40px 20px', backgroundColor: '#2c3e50', color: '#ecf0f1', textAlign: 'center' }}>
      <h1 style={{ margin: '0 0 10px 0', fontSize: '3em', fontWeight: 'bold' }}>Aagam Jain</h1>
      <p style={{ margin: '0', fontSize: '1.5em', color: '#bdc3c7' }}>AI Engineering Student</p>
    </header>
  );
};

export default Header;
