import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'Python', logo: './Assets/python.jpg', level: 80 },
    { name: 'Java', logo: './Assets/java.jpg', level: 90 },
    { name: 'React', logo: './Assets/react.jpg', level: 80 },
    { name: 'HTML', logo: './Assets/html-5.jpg', level: 90 },
    { name: 'CSS', logo: './Assets/css.jpg', level: 80 },
    { name: 'JavaScript', logo: './Assets/java-script.jpg', level: 90 },
    { name: 'Pandas', logo: './Assets/pandas.jpg', level: 80 },
    { name: 'Matplotlib', logo: './Assets/matplotlib.jpg', level: 90 },
    { name: 'Seaborn', logo: './Assets/seaborn.jpg', level: 80 },
    { name: 'Power BI', logo: './Assets/powerbi.jpg', level: 90 },
    { name: 'Tableau', logo: './Assets/tableau.jpg', level: 80 },
    { name: 'Microsoft Excel', logo: './Assets/excel.jpg', level: 90 },
    { name: 'MySQL', logo: './Assets/mysql.jpg', level: 80 },
    { name: 'SQL Server', logo: './Assets/sql-server.jpg', level: 90 },
    { name: 'MongoDB', logo: './Assets/mongodb.jpg', level: 80 },
    { name: 'Jupyter Notebook', logo: './Assets/jupyter.jpg', level: 90 },
    { name: 'Colab', logo: './Assets/colab.jpg', level: 80 },
    { name: 'VS Code', logo: './Assets/vscode.jpg', level: 90 },
    { name: 'GIT', logo: './Assets/git.jpg', level: 80 },
    { name: 'Dataspell', logo: './Assets/dataspell.jpg', level: 90 },
    { name: 'Datagrip', logo: './Assets/datagrip.jpg', level: 80 }
    // Add more skills as needed
  ];

  return (
    <div>
      <h2>Skills</h2>
      <div className="skills-section">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <img src={require('./Assets/datagrip.jpg')} alt={skill.name} className='pic' />
            {/* <div className="level-range">{skill.level}%</div> */}
            <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
