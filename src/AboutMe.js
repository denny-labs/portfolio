// src/components/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-page">

      <div className="topic-section">

        <div className="topic-content">
          <h2>About Me</h2>
          <p>
          Welcome to my corner of the web! I'm Dennis Abraham, and I'm passionate about exploring the frontiers of technology. 
          With a solid foundation in data science and machine learning, 
          I find joy in unraveling complex patterns and deriving meaningful insights from data.
          </p>
        </div>

        <div className="topic-content">
          <h2>Data Science and Mchine Learning</h2>
          <p>
          My journey into the world of data science has been a fascinating exploration of turning 
          raw data into actionable intelligence. From predictive modeling to statistical analysis, 
          I enjoy leveraging the power of algorithms to solve real-world problems.
          </p>
        </div>

        <div className="topic-content">
          <h2>Programe Expertise</h2>
          <p>
          Proficient in both Core Java and Python, I have a knack for translating ideas into code. 
          Whether it's building robust applications or diving into the intricacies of machine learning 
          libraries, I find joy in the art of programming.
          </p>
        </div>

        <div className="topic-content">
          <h2>Blockchain Enthusiast</h2>
          <p>
          Venturing into the realms of blockchain and smart contracts, I've been exploring the decentralized 
          future. With a foundational knowledge of blockchain technology and experience in React JS, 
          I'm excited about the potential to revolutionize industries through transparent and secure 
          decentralized systems.
          </p>
        </div>

        <div className="topic-content">
          <h2>Why this blog?</h2>
          <p>
          This blog is my platform to share insights, discoveries, and experiences in the ever-evolving 
          tech landscape. Join me on this journey as I navigate through the exciting intersections of 
          data science, machine learning, programming, and blockchain.<br/>
          <br/>Let's embark on this exploration together!
          </p>
        </div>

      </div>
      <div className='myself'>
        <img src={require('./Assets/dennis.jpg')} alt='Dennis' className='me'></img>
        <h2>DENNIS ABRAHAM R</h2>
        <h3>Chennai, Tamil Nadu, India</h3>
      </div>

    </div>
  );
};

export default AboutMe;
