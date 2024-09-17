import React from 'react'
import './codeUnnati.css'
import codeunnatilogo from '../../assets/code-unnati-logo.jpg';

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
