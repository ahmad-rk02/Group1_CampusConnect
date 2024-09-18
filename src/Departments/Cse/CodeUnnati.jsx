import React from 'react'
import './codeUnnati.css'
import codeunnatilogo from '../../assets/code-unnati-logo.jpg';
import background from '../../assets/code-unnati-logo.jpg'; // Replace with your image path


const CodeUnnati = ({ className }) => {
  return (
    <div className={className}>
      <div className='cse-code-unnati'>
      <h4 style={{ color: '#102C57' }} >Code Unnati</h4></div>
      <div className="code-unnati-wrapper">
      <div className="code-unnati-logo">
        <img
          src={codeunnatilogo}
          alt="Code Unnati Logo"
          className="code-unnati-img"
        />
      </div>
      <div className="code-unnati-container">
      <div className="code-unnati-text">
        <h2>CODE UNNATI PROGRAM</h2>
        <p>
        Coding training is essential for anyone pursuing careers in software development, web development, and data science. In software development, coding is the core skill that allows developers to create and improve software, solving complex problems with innovative solutions.
        </p>
        <p>
        For web development, knowing languages like HTML, CSS, and JavaScript is crucial for building responsive and attractive websites. As businesses increasingly focus on their online presence, the demand for skilled web developers is growing.
        </p>
        <p>
        In data science, coding is key to analyzing large datasets and gaining insights. Languages like Python and R help data scientists manipulate data, build models, and make informed decisions.
        </p>
      </div>
      </div>
    </div>

<div className="headline"><h1>Course Outline</h1></div>
    <div className="course-outline-container">
      
      
      {/* 2nd Year Section */}
      <div className="year-section light-bg">
        <div className="year-header">2nd Year</div>
        <div className="year-content">
          <div className="course-block">
           <div className="head2"> <h2 >Foundational Skills for I.R.4.0</h2></div>
            <ul>
              <li>Python Basic</li>
              <li>Python Advance</li>
              <li>Python Libraries: Numpy, Pandas, Matplotlib, Seaborn</li>
              <li>Artificial Intelligence Basics</li>
              <li>Industry Specific Tools - SAP</li>
            </ul>
          </div>
          <div className="capstone-block">
            <div className='head2'><h2 >Capstone Project</h2></div>
            <p><li>Creating prototypes to solve real-life problems. </li><li>Design thinking with creative solutions.</li></p>
            <div className="head4"><h4>Duration:</h4></div>
            <ul>
              <li>Core Deep Tech Offerings: 40hrs</li>
              <li>Industry Specific Module Offering: 10hrs</li>
              <li>Capstone Project: 20hrs</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className='upper-wave'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eadbc8" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,170.7C320,192,400,256,480,261.3C560,267,640,213,720,186.7C800,160,880,160,960,170.7C1040,181,1120,203,1200,197.3C1280,192,1360,160,1400,144L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
      </div>{/* 3rd Year Section */}
      <div className="year-section dark-bg">
        <div className="year-header2">3rd Year</div>
        <div className="year-content">
          <div className="course-block">
            <div className="head3"><h3>Advance Course</h3></div>
            <ul>
              <li>Machine Learning</li>
              <li>Internet of Things - IoT</li>
              <li>Deep Learning and Computer Vision with OpenVino Toolkit</li>
            </ul>
            <div className="head4"><h4>SAP Analytical Cloud</h4></div>
            <ul><li>SAP Essential</li>
                <li>SAP BTP ABAP Environment</li>
                <li>ABAP on Business Technology Platform</li>
                <li>Hands-on ABAP</li></ul>
          </div>
          <div className="capstone-block">
            <div className="head3"><h3>Capstone Project</h3></div>
            <p><li>Creating Prototypes to solve Real-life problems</li>
            <li>Design Thinking - way to solve problems with creative thinking.</li></p>
            <div className="head4"><h4>Duration:</h4></div>
            <ul>
              <li>Core Deep Tech Offerings  -  55hrs</li>
              <li>Industry Specific Module Offering   -  15hrs</li>
              <li>Employability Skills - 15hrs</li>
              <li>Capstone Project  -  30hrs</li>
            </ul>
          </div>
        </div><div className="lower-wave">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 1440 320"><path fill="#eadbc8" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,170.7C320,192,400,256,480,261.3C560,267,640,213,720,186.7C800,160,880,160,960,170.7C1040,181,1120,203,1200,197.3C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
      </div></div>
        

      {/* 4th Year Section */} 
      <div className="year-section light-bg">
       <div className="year-header">4th Year</div>
        <div className="year-content">
          <div className="course-block">
            <div className="head2"><h2 >Cyber Security in IoT</h2></div>
            <ul>
              <li>Introduction to IoT security</li>
              <li>Tools and methods</li>
              <li>Attacks, risks and countermeasures</li>
              <li>Cryptography and applications</li>
            </ul>
            <div className="head4"><h4>SAP Analytical Cloud</h4></div>
            <ul><li>Introduction to SAC</li>
                <li>Tools and methods</li>
                <li>Introduction to charts and styling </li>
                <li>chart visualizations and interactions</li></ul>
          </div>
          <div className="capstone-block"><div className="head2">
            <h2>Capstone Project</h2></div>
            <p><li>Creating prototypes to solve Real-life problems</li>
            <li> Design Thinking- Way to solve problems with creative thinking.</li></p>
            <div className="head2"><h4>Duration:</h4></div>
            <ul>
            <li>Core Deep Tech Offerings  -  20hrs</li>
            <li>Industry Specific Module Offering   -  20hrs</li>
            <li>Employability Skills - 15hrs</li>
            <li>Capstone Project  -  60hrs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div className="course-objective-container">
      <div className="course-objective-text">
        <h2>COURSE OBJECTIVES</h2>
        <p>
        Enable Student to adopt Industry 4.0 Technologies such as:
<li>Machine Learning</li>
<li>Internet of Things</li> 
<li>Deep Learning </li>
<li>Computer Vision</li>
<li>SAP Modules</li>
Student should leverage the center of excellence to learn IR4.0 technologies to enhance exponential career growth.
        </p>
        <p>
        Prerequisites:
<li>Basic knowledge of using internet and computer system.</li>
<li>Basic understanding of problem solving. </li>
<li>Introductory understanding of programming.</li>
<li>Elementary concepts of probability theory, statistics & continuous variable calculus.</li>
        </p>
       
      </div>
    </div>
  </div>
  );
};
export default CodeUnnati
