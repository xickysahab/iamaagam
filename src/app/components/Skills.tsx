import React from 'react';
import Image from 'next/image';

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Skills</h2>
      <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <li style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Image src="/premierepro.png" alt="Premiere Pro Logo" width={60} height={60} style={{ marginRight: '8px' }} /> {/* Approximate 2cm to pixels */}
          Video editing
        </li>
        <li style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Image src="/python.png" alt="Python Logo" width={60} height={60} style={{ marginRight: '8px' }} /> {/* Approximate 2cm to pixels */}
          coding
        </li>
        <li style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <Image src="/AI.png" alt="AI Logo" width={60} height={60} style={{ marginRight: '8px' }} /> {/* Approximate 2cm to pixels */}
          Ai
        </li>
        {/* Add more skills here */}
      </ul>
    </section>
  );
};

export default Skills;
