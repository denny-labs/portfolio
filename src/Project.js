import React from 'react';
import './Project.css';

const Project = () => {
    return(
        <div className='project'>
           <br/><br/> <h2>Projects</h2>
            <div className='project-section'>
                <div className='project1'>
                    <h3>Crime Data Management System</h3>
                    <img className="pimage" src={require('./Assets/crime.jpg')} alt="project" />
                    <p>
                    The Crime Data Management System (CDMS) is an innovative solution designed to a
                    ddress the challenges of efficiently managing and analyzing large volumes of 
                    crime-related data. Traditional crime data management systems often face scalability 
                    issues and performance bottlenecks as the volume of data grows.<br/> To overcome these 
                    limitations, our proposed system leverages the power of a distributed memory system to 
                    enhance data storage, retrieval, and processing capabilities.<br/>
                    The CDMS employs a distributed architecture that utilizes multiple nodes interconnected 
                    in a network, each equipped with its own memory and processing capabilities. <br/>
                    This design allows for the parallel processing of crime data, enabling faster and more 
                    efficient data management. The system is designed to handle diverse types of crime data, 
                    including incident reports, suspect information, witness statements, and other relevant 
                    records.
                    </p>
                </div>
                <div className='project2'>
                    <h3>Survey Hub: a review data collector and modeller</h3>
                    <img className="pimage" src={require('./Assets/data.jpg')} alt="project"/>
                    <p>
                    The Survey Hub presented in this project is a comprehensive solution designed to 
                    streamline the process of gathering, organizing, and modeling diverse datasets. 
                    In today's data-driven world, the ability to efficiently manage and model data is 
                    critical for informed decision-making in various domains.<br/> The CMS addresses this 
                    need by providing a unified platform for data collection, organization, and 
                    modeling, offering users the tools necessary for insightful analysis and decision 
                    support.<br/>
                    The Survey Hub supports the collection of a wide array of data types, including structured, 
                    semi-structured, and unstructured data. Users can define custom data collection 
                    templates, ensuring flexibility in capturing data relevant to their specific needs.<br/>
                    All collected data is stored in a centralized repository, facilitating easy access, 
                    retrieval, and management. <br/>The repository employs efficient data storage techniques, 
                    optimizing resource utilization and ensuring quick data retrieval.
                    </p>
                </div>
                <div className='project3'>
                    <h3>Student Monitoring System</h3>
                    <img className="pimage" src={require('./Assets/class.jpg')} alt="project"/>
                    <p>
                    The Student Monitoring System(SMS) is a cutting-edge project aimed at enhancing the 
                    monitoring and security measures within educational institutions. Traditional methods 
                    of student attendance tracking and monitoring are often labor-intensive and prone to 
                    inaccuracies. <br/>The SMS leverages advanced face recognition technology to automate 
                    attendance tracking, ensuring a more efficient and secure environment for both students 
                    and faculty.<br/>The SMS employs state-of-the-art face recognition algorithms to 
                    automatically identify and record student attendance. This eliminates the need for 
                    manual attendance taking, reducing administrative workload and minimizing errors.<br/>
                    The system provides real-time monitoring capabilities, allowing educators and 
                    administrators to track student movements within the educational premises. <br/>
                    Alerts can be configured for unauthorized access or unusual activities, enhancing 
                    overall security.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Project;
