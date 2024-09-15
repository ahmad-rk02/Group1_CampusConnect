import React from 'react'
import './codeUnnati.css'
import codeunnatilogo from '../../assets/code-unnati-logo.jpg';

const CodeUnnati = () => {
  return (
    <div>
      <div className='cse-code-unnati'>
      <h3 style={{ color: '#102C57' }} >Code Unnati</h3></div>
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
    </div>
  );
};
export default CodeUnnati

