import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Projects</h2>
      {/* Add your project components or list here */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#007bff' }}>Project Title 1</h3>
          <p style={{ margin: '0 0 10px 0' }}>Brief description of Project 1.</p>
          {/* Add links to project repo or demo */}
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#007bff' }}>Project Title 2</h3>
          <p style={{ margin: '0 0 10px 0' }}>Brief description of Project 2.</p>
          {/* Add links to project repo or demo */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
