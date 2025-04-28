import React from 'react';
import Image from 'next/image';

const Education: React.FC = () => {
  return (
    <section id="education" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>Education</h2>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <Image src="/IIT madras.png" alt="IIT Madras Logo" width={50} height={50} style={{ marginRight: '15px', objectFit: 'contain' }} />
        <div>
          <h3 style={{ marginTop: '0', marginBottom: '5px', color: 'var(--primary-color)' }}>Indian Institute of Technology Madras</h3>
          <p style={{ margin: '0 0 10px 0', fontStyle: 'italic' }}>First Year AI Engineering Student</p>
            {/* Add degree, dates, relevant coursework, etc. */}
          </div>
        </div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
        <Image src="/Bvm logo.jpg" alt="Bhai Parmanad Vidya Mandir Logo" width={50} height={50} style={{ marginRight: '15px', objectFit: 'contain' }} />
        <div>
          <h3 style={{ marginTop: '0', marginBottom: '5px', color: 'var(--primary-color)' }}>Bhai Parmanad Vidya Mandir</h3>
          <p style={{ margin: '0 0 10px 0', fontStyle: 'italic' }}>Completed Schooling from Science Background</p>
          {/* Add degree, dates, relevant coursework, etc. */}
        </div>
      </div>
    </section>
  );
};

export default Education;
