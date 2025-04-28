import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>About Me</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
        Hi, I'm Aagam Jain, a first-year AI Engineering student at IIT Madras, passionate about artificial intelligence, software development, and video editing. Currently, I am gaining hands-on experience as an intern at Ojuss AI Research Lab Pvt Ltd, where I am contributing to cutting-edge projects in AI research and development.
        Beyond academics, I enjoy playing cricket, traveling to new places, and constantly seeking opportunities to learn and grow. I am deeply driven by a passion for innovation and a commitment to building impactful solutions through technology.
      </p>
    </section>
  );
};

export default About;
