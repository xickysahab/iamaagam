import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '20px', backgroundColor: '#34495e', color: '#ecf0f1', textAlign: 'center', marginTop: '40px' }}>
      <p style={{ margin: '0', fontSize: '1em' }}>&copy; {new Date().getFullYear()} Aagam Jain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
