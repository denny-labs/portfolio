import React from 'react';
import './Skills.css';

const Skills = () => {
    return(
        <div className='skill'>
            <h1>Skills</h1>
            <div className='skills-section'>
                <div className='language'>
                    <h3>Languages</h3>
                    <img src = {require('./Assets/java.jpg')} alt = "java" className='pic'></img>
                    <div className="progress-bar" style={{ width: `80%` }}><p><b>80%</b></p></div><br/>
                    <img src = {require('./Assets/python.jpg')} alt = "python" className='pic'></img>
                    <div className="progress-bar" style={{ width: `70%` }}><p><b>70%</b></p></div>
                </div>
                <div className='webdev'>
                    <h3>Web Development</h3>
                    <img src = {require('./Assets/react.jpg')} alt = "react" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div><br/>
                    <img src = {require('./Assets/html-5.jpg')} alt = "html" className='pic'></img>
                    <div className="progress-bar" style={{ width: `70%` }}><p><b>70%</b></p></div><br/>
                    <img src = {require('./Assets/css.jpg')} alt = "css" className='pic'></img>
                    <div className="progress-bar" style={{ width: `80%` }}><p><b>80%</b></p></div><br/>
                    <img src = {require('./Assets/java-script.jpg')} alt = "js" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%`}}><p><b>60%</b></p></div>
                </div>
                <div className='analytics'>
                    <h3>Analytics tools</h3>
                    <img src = {require('./Assets/pandas.jpg')} alt = "pandas" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div><br/>
                    <img src = {require('./Assets/matplotlib.jpg')} alt = "matplotlib" className='pic'></img>
                    <div className="progress-bar" style={{ width: `50%` }}><p><b>50%</b></p></div><br/>
                    <img src = {require('./Assets/seaborn.jpg')} alt = "seaborn" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div><br/>
                    <img src = {require('./Assets/powerbi.jpg')} alt = "power bi" className='pic'></img>
                    <div className="progress-bar" style={{ width: `70%` }}><p><b>70%</b></p></div><br/>
                    <img src = {require('./Assets/tableau.jpg')} alt = "tableau" className='pic'></img>
                    <div className="progress-bar" style={{ width: `70%` }}><p><b>70%</b></p></div><br/>
                    <img src = {require('./Assets/excel.jpg')} alt = "ms excel" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div>
                </div>
                <div className='db'>
                    <h3>Databases</h3>
                    <img src = {require('./Assets/mysql.jpg')} alt = "MySQL" className='pic'></img>
                    <div className="progress-bar" style={{ width: `80%` }}><p><b>80%</b></p></div><br/>
                    <img src = {require('./Assets/sql-server.jpg')} alt = "SQL" className='pic'></img>
                    <div className="progress-bar" style={{ width: `70%` }}><p><b>70%</b></p></div><br/>
                    <img src = {require('./Assets/mongodb.jpg')} alt = "mongodb" className='pic'></img>
                    <div className="progress-bar" style={{ width: `70%` }}><p><b>70%</b></p></div>
                </div>
                <div className='analytics'>
                    <h4>Tools and Technologies</h4>
                    <img src = {require('./Assets/jupyter.jpg')} alt = "jupyter" className='pic'></img>
                    <div className="progress-bar" style={{ width: `80%` }}><p><b>80%</b></p></div><br/>
                    <img src = {require('./Assets/colab.jpg')} alt = "google colab" className='pic'></img>
                    <div className="progress-bar" style={{ width: `80%` }}><p><b>80%</b></p></div><br/>
                    <img src = {require('./Assets/vscode.jpg')} alt = "vs code" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div><br/>
                    <img src = {require('./Assets/git.jpg')} alt = "GIT" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div><br/>
                    <img src = {require('./Assets/dataspell.jpg')} alt = "Data spell" className='pic'></img>
                    <div className="progress-bar" style={{ width: `60%` }}><p><b>60%</b></p></div><br/>
                    <img src = {require('./Assets/datagrip.jpg')} alt = "Data grip" className='pic'></img>
                    <div className="progress-bar" style={{ width: `50%` }}><p><b>50%</b></p></div>
                </div>
            </div>
            
        </div>
    );
};

export default Skills;