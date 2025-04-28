import React from 'react';
import Image from 'next/image';

const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>Experience</h2>
      {/* Add your work or internship experience here */}
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Image src="/Ojjus.png" alt="Ojuss AI Research Lab Pvt Ltd Logo" width={50} height={50} style={{ marginRight: '15px', borderRadius: '8px' }} />
          <div>
            <h3 style={{ marginTop: '0', marginBottom: '5px', color: '#aaff00' }}>AI Engineering Intern</h3>
            <p style={{ margin: '0', fontStyle: 'italic', fontSize: '1.1em', fontWeight: 'bold' }}>Ojuss AI Research Lab Pvt Ltd - [April-2025]</p>
          </div>
        </div>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Development</li>
          <li>Social media</li>
          {/* Add more responsibilities */}
        </ul>
      </div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Image src="/Justcharge.jpeg" alt="Just Charge Media Logo" width={50} height={50} style={{ marginRight: '15px', borderRadius: '8px' }} />
          <div>
            <h3 style={{ marginTop: '0', marginBottom: '5px', color: '#aaff00' }}>Video editor</h3>
            <p style={{ margin: '0', fontStyle: 'italic', fontSize: '1.1em', fontWeight: 'bold' }}>Just Charge Media - [March-2025]</p>
          </div>
        </div>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Video Editor</li>
          <li>Content Writing</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
