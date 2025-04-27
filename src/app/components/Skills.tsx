import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Skills</h2>
      <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <li style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontWeight: 'bold' }}>Skill 1</li>
        <li style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontWeight: 'bold' }}>Skill 2</li>
        <li style={{ margin: '10px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontWeight: 'bold' }}>Skill 3</li>
        {/* Add more skills here */}
      </ul>
    </section>
  );
};

export default Skills;
