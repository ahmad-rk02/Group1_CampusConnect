import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './CSEvm.css';
import lab1 from '../../assets/1-lab.png';
import lab2 from '../../assets/lab-2.png';
import lab3 from '../../assets/lab-3.png';

const CSEvm = ({ className }) => {
  const CSETable = [
    {  facility: 'Number of Classrooms', quantity: '02'},
    {  facility: 'Number of Laboratories', quantity: '04'},
    {  facility: 'Tutorial Rooms', quantity: '--'},
    {  facility: 'Faculty Cabins', quantity: '01'},
    {  facility: 'Number of Computers', quantity: '100'},
    {  facility: 'Number of Projectors', quantity: '01'},
    {  facility: 'Number of laptops', quantity: '02'},
  ];
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
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/CSE-Vision%20mission%20PEO%20PSO.pdf'>Department PEO's & PSO</a>
            </div>
      </div>
      <div className='infra-cse'>
            <div className="cse-infra-head">
                <h3>Infrastructure</h3>
              </div>
              <Table className='cse-table' striped bordered hover>
                            <thead  className='table-header-cse'>
                              <tr>
                                <th>Facility</th>
                                <th>Quantity</th>
                              </tr>
                            </thead>
                            <tbody className="table-body-cse">
                              {CSETable.map((prog) => (
                                <tr>
                                  
                                  <td className='name-cse-prog'>{prog.facility}</td>
                                  <td>{prog.quantity}</td>
                                  
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                          <div className='right-'>
      <div className='infra-cse'>
        <div className='headlab'>
          <h1>Laboratories</h1>
        </div>
        <div>
                    <div className='lab-1'> 
                    <h4>01.Computer Laboratory-118 </h4>
                    </div>
                    <img
                    src={lab1}
                    alt="lab-1"
                    className="lab-img2"
                  /><div className="lab-eq">
                  <h5>Equipment:</h5>
                  <p>
                  Desktop,Computer, 
                  Printer,Scanner
                  </p>
                  </div>
                  <div className='lab-2'> 
                    <h4>02.Computer Laboratory-119 </h4>
                    </div>
                    <img
                    src={lab2}
                    alt="lab-1"
                    className="lab-img2"
                  />
                  <div className="lab-eq">
                  <h5>Equipment:</h5>
                  <p>
                  Desktop,
                  Computer, 
                  Printer
                  </p>
                  </div><div className='lab-2'> 
                    <h4>03.Computer Laboratory-120 </h4>
                    </div>
                    <img
                    src={lab3}
                    alt="lab-1"
                    className="lab-img2"
                  />
                  <div className="lab-eq">
                  <h5>Equipment:</h5>
                  <p>
                  Desktop,Computer, 
                  Printer
                  </p>
                  </div>
                  </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CSEvm;
