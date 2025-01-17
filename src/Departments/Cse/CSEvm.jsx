import React from 'react';
import './CSEvm.css';

const CSEvm = ({ className }) => {
  return (
    <div className={className}>
      <div className="cse-intro" id='vission-mission-cse'>
        <div className="cse-intro-heading">
          <h3>Computer Science & Engineering</h3>
        </div>

        <div className="cse-intro-box">
          <p className="first-para-small">
            The department focuses on creating skilled professionals, preparing students for industry, and developing their skills.
          </p>

          <div className="small-intro-heading">
            <h6>SCOPE & PROSPECTS</h6>
          </div>

          <div className="second-para-large">
            <p>
              As technology grows, the demand for computer engineers rises, with India as a major IT hub. The department admits 60 students yearly, offering support for technical events and providing high-speed internet, modern software, and well-equipped labs. Graduates secure placements in top companies like TCS, Oracle, and Cognizant. The student association, ACSES, organizes various technical and cultural activities.
            </p>
          
        </div>
        </div>
          <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/CSE_Couse%20Outcome.pdf'>Department Course Outcomes</a>
            </div>
      </div>

      <div className="cse-vision">
        <div className="cse-vision-heading">
          <h3>Vision</h3>
        </div>

        <div className="vision-content">
          <p>
            To provide quality technical education in the field of Computer Science and Engineering by keeping pace with emerging technology to create competent professionals.
          </p>
        </div>
      </div>

      <div className="cse-mission">
        <div className="cse-mission-heading">
          <h3>Mission</h3>
        </div>

        <div className="mission-content">
          <ul>
            <li>To develop analytical and technical competency for better performance in industry, academic and entrepreneurship.</li>
            <li>To provide innovation labs to keep up with new developments in the area of Computer Science and Engineering.</li>
            <li>To develop Computer Science professionals with high morals and ethical values.</li>
            <li>To fulfill the expectations of society by creating resourceful and responsible engineers.</li>
          </ul>
        </div>
      </div>

      <div className='vision-mission-link'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/CSE-Vision%20mission%20PEO%20PSO.pdf'>Vision, Mission, PEO's & PSO</a>
            </div>

    </div>
  );
};

export default CSEvm;
