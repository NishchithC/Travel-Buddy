import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f7fa', padding: '20px' }}>
      <h1>About Us</h1>
      <section style={{ marginBottom: '20px' }}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide users with a seamless platform for managing trips and finances. We aim to simplify the process of planning travel, budgeting, and managing bookings while offering personalized assistance.
        </p>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>Our Vision</h2>
        <p>
          We envision a world where traveling is more accessible, affordable, and stress-free. By integrating technology with human-centered design, we aim to be the most trusted platform for travelers worldwide.
        </p>
      </section>
      <section style={{ marginBottom: '20px' }}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Centricity:</strong> We prioritize the needs and satisfaction of our users.</li>
          <li><strong>Innovation:</strong> We continuously improve our platform with new features and technology.</li>
          <li><strong>Integrity:</strong> We operate with transparency and honesty in all our dealings.</li>
          <li><strong>Sustainability:</strong> We strive to minimize our environmental impact and encourage sustainable travel.</li>
        </ul>
      </section>
      <section>
        <h2>Our Team</h2>
        <p>
          We are a diverse group of passionate professionals working together to create the best experience for our users. From software engineers to customer support agents, our team is dedicated to helping travelers achieve their goals.
        </p>
      </section>
    </div>
  );
};

export default About;
