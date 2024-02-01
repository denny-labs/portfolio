import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#AboutMe">About Me</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
