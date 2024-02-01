import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div>
      <div className="about-section">
        <div className="text-content">
          <h2>SCHOOL</h2>
          <p>
            I have completed my schooling from a prestegious foundation Velammal Vdhyashram. The schooling
            nourished me with explicit knowledge to make my self valuable in the later part of my life.
            Embedding a strong foundation with extensive education pattern, they played a vital part in making
            me what Iam today.
          </p>
        </div>
        <div>
          <img className="image" src={require('./Assets/school.jpg')} alt="school" />
        </div>
      </div>

      <div className="about-section">
        <div>
          <img className="image" src={require('./Assets/college.jpg')} alt="college" />
        </div>
        <div className="text-content">
          <h2>COLLEGE</h2>
          <p>
            Currently pursuing and yet to complete my Bachelors degree in the field of Artificial Intelligence 
            and Data Science from a reknown educational foundation Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala
            Engineering College. With a greate support in various ways including campus placements opportunities
            and enabling a fruitful journey in my life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
