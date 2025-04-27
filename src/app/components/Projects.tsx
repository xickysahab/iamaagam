import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: '40px 20px' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Projects</h2>
      {/* Add your project components or list here */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#007bff' }}><a href="https://iamaagam.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Website Developed</a></h3>
          <p style={{ margin: '0 0 10px 0' }}>View it live <a href="https://iamaagam.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>here</a>.</p>
          {/* Add links to project repo or demo */}
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
          <Image src="/Build AI.png" alt="Build AI Achievement" width={300} height={200} style={{ borderRadius: '8px', objectFit: 'contain', marginBottom: '10px' }} />
          <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#007bff' }}>Build AI Achievement</h3>
        </div>
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
          <Image src="/prompt design.png" alt="Prompt Design Example" width={300} height={200} style={{ borderRadius: '8px', objectFit: 'contain', marginBottom: '10px' }} />
          <h3 style={{ marginTop: '0', marginBottom: '10px', color: '#007bff' }}>Prompt Design Example</h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
