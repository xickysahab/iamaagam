import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Education</h2>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3 style={{ marginTop: '0', marginBottom: '5px', color: '#007bff' }}>Indian Institute of Technology Madras</h3>
        <p style={{ margin: '0 0 10px 0', fontStyle: 'italic' }}>First Year AI Engineering Student</p>
        {/* Add degree, dates, relevant coursework, etc. */}
      </div>
    </section>
  );
};

export default Education;
