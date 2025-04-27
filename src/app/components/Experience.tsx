import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Experience</h2>
      {/* Add your work or internship experience here */}
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3 style={{ marginTop: '0', marginBottom: '5px', color: '#007bff' }}>AI Engineering Intern</h3>
        <p style={{ margin: '0 0 10px 0', fontStyle: 'italic' }}>Ojuss AI Research Lab Pvt Ltd - [Dates of Internship]</p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Development</li>
          <li>Social media</li>
          {/* Add more responsibilities */}
        </ul>
      </div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3 style={{ marginTop: '0', marginBottom: '5px', color: '#007bff' }}>Video editor</h3>
        <p style={{ margin: '0 0 10px 0', fontStyle: 'italic' }}>Just Charge Media - March-2025</p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Video Editor</li>
          <li>Content Writing</li>
        </ul>
      </div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3 style={{ marginTop: '0', marginBottom: '5px', color: '#007bff' }}>Job Title / Role</h3>
        <p style={{ margin: '0 0 10px 0', fontStyle: 'italic' }}>Company Name - Dates</p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
