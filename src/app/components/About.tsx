import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>About Me</h2>
      <p style={{ fontSize: '1.1em', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
        Hi, I'm Aagam Jain, a first-year AI engineering student at IIT Madras.
        I'm also currently interning at Ojuss AI Research Lab Pvt Ltd.
        I'm passionate about [mention your interests, e.g., artificial intelligence, software development, etc.].
        I enjoy [mention hobbies or what you like to do].
      </p>
    </section>
  );
};

export default About;
