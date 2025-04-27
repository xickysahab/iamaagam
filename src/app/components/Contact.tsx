import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Contact</h2>
      <p style={{ fontSize: '1.1em' }}>You can reach me at: <a href="mailto:jainaagam908@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>jainaagam908@gmail.com</a></p>
      <p style={{ fontSize: '1.1em' }}>GitHub: <a href="https://github.com/xickysahab/iamaagam.git" style={{ color: '#007bff', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">https://github.com/xickysahab/iamaagam.git</a></p>
      {/* Add links to social media or contact form */}
    </section>
  );
};

export default Contact;
