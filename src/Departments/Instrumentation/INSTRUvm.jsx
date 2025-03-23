import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './INSTRUvm.css';
import lab1 from '../../assets/1-lab.png';
import lab2 from '../../assets/lab-2.png';
import lab3 from '../../assets/lab-3.png';


const INSTRUvm = ({ className }) => {
  const INSTRUTable = [
    {  facility: 'Number of Classrooms', quantity: '03'},
    {  facility: 'Number of Laboratories', quantity: '10'},
    {  facility: 'Tutorial Rooms', quantity: '01'},
    {  facility: 'Faculty Cabins', quantity: '08'},
    {  facility: 'Number of Computers', quantity: '45'},
    {  facility: 'Number of Projectors', quantity: '04'},
    {  facility: 'Number of laptops', quantity: '06'},
    {  facility: 'Digital library', quantity: '01'},
    {  facility: 'Seminar hall', quantity: '01'},
  ];
  
    const [showFirstSet, setShowFirstSet] = useState(true);
  
  const labs = [
    { id: 1, name: 'Computer Laboratory-118', img: lab1, equipment: 'Desktop, Computer, Printer, Scanner' },
    { id: 2, name: 'Computer Laboratory-119', img: lab2, equipment: 'Desktop, Computer, Printer' },
    { id: 3, name: 'Computer Laboratory-120', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 4, name: 'Computer Laboratory-121', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 5, name: 'Computer Laboratory-122', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 6, name: 'Computer Laboratory-123', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 7, name: 'Computer Laboratory-124', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 8, name: 'Computer Laboratory-125', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 9, name: 'Computer Laboratory-126', img: lab3, equipment: 'Desktop, Computer, Printer' },
    { id: 10, name: 'Computer Laboratory-127', img: lab3, equipment: 'Desktop, Computer, Printer' }
  ];
  const displayedLabs = showFirstSet ? labs.slice(0, 5) : labs.slice(5, 10);


  return (
    <div className={className}>
      <div className="instru-intro">
        <div className="instru-intro-heading">
          <h3>Instrumentation Engineering</h3>
        </div>

        <div className="instru-intro-box">
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
      </div>

      <div className="instru-vision">
        <div className="instru-vision-heading">
          <h3>Vision</h3>
        </div>

        <div className="vision-content">
          <p>
          The department of Instrumentation engineering envisions to emerge as an innovator in the field of industrial automation and product development.
          </p>
        </div>
      </div>

      <div className="instru-mission">
        <div className="instru-mission-heading">
          <h3>Mission</h3>
        </div>

        <div className="mission-content">
          <ul>
            <li>To educate and train Instrumentation Engineering students to be motivated, proactive and professionally developed individuals for successful employment/self-employment.</li>
            <li>To inculcate students with fundamental engineering base for the development of component, products and systems.</li>
            <li>To train students to undertake global challenges by adapting safe practices.</li>
            
          </ul>
        </div></div>
      
      <div className='infra-instru'>
      <div className="instru-infra-head">
          <h3>Infrastructure</h3>
        </div>
        <Table className='instru-table' striped bordered hover>
                      <thead  className='table-header-instru'>
                        <tr>
                          <th>Facility</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody className="table-body-instru">
                        {INSTRUTable.map((prog) => (
                          <tr>
                            
                            <td className='name-instru-prog'>{prog.facility}</td>
                            <td>{prog.quantity}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className='right-'>
      <div className='infra-instru'>
        <div className='instru-mi-heading'>
          <h3>Laboratories</h3>
        </div>
        {displayedLabs.map((lab) => (
          <div key={lab.id} className='lab-instru'>
            <h4>{lab.id}. {lab.name}</h4>
            <img src={lab.img} alt={lab.name} className='lab-img-instru' />
            <div className='lab-eq-instru'>
              <h5>Equipment:</h5>
              <p>{lab.equipment}</p>
            </div>
          </div>
        ))}
        <button className='but-toggle-button' onClick={() => setShowFirstSet(!showFirstSet)}>
          {showFirstSet ? 'Next' : 'Previous'}
        </button>
      </div>
    </div>

        </div> 
    </div>
  );
};

export default INSTRUvm;
