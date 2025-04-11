import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './Cvlvm.css';
import lab1 from '../../assets/e1.jpg';
import lab2 from '../../assets/e2.jpg';
import lab3 from '../../assets/e3.jpg';
import lab4 from '../../assets/e4.jpg';
import lab5 from '../../assets/e5.jpg';
import lab6 from '../../assets/e6.jpg';
import lab7 from '../../assets/e7.jpg';
import lab8 from '../../assets/e8.jpg';
import lab9 from '../../assets/e9.jpg';


const Cvlvm = ({ className }) => {
  const cvlTable = [
    {  facility: 'Number of Classrooms', quantity: '02'},
    {  facility: 'Number of Laboratories', quantity: '09'},
    {  facility: 'Tutorial Rooms', quantity: 'NA'},
    {  facility: 'Faculty Cabins', quantity: '06'},
    {  facility: 'Number of Computers', quantity: '41'},
    {  facility: 'Number of Projector', quantity: '01'},
    {  facility: 'Number of laptop', quantity: '01'},
    {  facility: 'Number of printer', quantity: '01'},
    {  facility: 'Number of plotters', quantity: '06'},
  ];
  
    const [showFirstSet, setShowFirstSet] = useState(true);
  
  const labs = [
    { id: 1, name: 'Material Testing Lab', img: lab1, equipment: 'Compression Testing Machine,Ultrasonic Pulse,Velocity Tester,Concrete Rebound Hammer' },
    { id: 2, name: 'Surveying Lab', img: lab2, equipment: 'Total Station' },
    { id: 3, name: 'Fluid Mechanics Lab', img: lab3, equipment: 'Tilting Flume 6m' },
    { id: 4, name: 'Soil Mechanics Lab', img: lab4, equipment: 'CBR apparatus,Consolidation Apparatus,Unconfined Compression Test Apparatus' },
    { id: 5, name: 'Environmental Engineering', img: lab5, equipment: 'High Volume Dust Sampler BOD incubetter' },
    { id: 6, name: 'Engineering Mechanics Lab', img: lab6, equipment: '-----' },
    { id: 7, name: 'Strength of Material Lab', img: lab7, equipment: 'Torsion Testing Machine,Rockwell cum Brinells Hardness Testing Machine,Universal Tensile Testing Machine' },
    { id: 8, name: 'Computer Lab', img: lab8, equipment: 'STAAD pro software,NISA Software,36 inch Plotter' },
    { id: 9, name: 'Engineering Geology Lab', img: lab9, equipment: '----' },
  ];
  const displayedLabs = showFirstSet ? labs.slice(0, 5) : labs.slice(5, 10);


  return (
    <div className={className}>
      <div className="cvl-intro" id='vission-mission-cvl'>
        <div className="cvl-intro-heading">
          <h3>Civil Engineering</h3>
        </div>

        <div className="cvl-intro-box">
          <p className="first-para-small">
            The department focuses on creating skilled professionals, preparing students for industry, and developing their skills.
          </p>

          <div className="small-intro-heading">
            <h6>SCOPE & PROSPECTS</h6>
          </div>

          <div className="second-para-large">
            <p>
            Civil engineers play a vital role in shaping society by building essential infrastructure like homes, roads, bridges, and water systems. Often called an evergreen branch, civil engineering offers diverse career opportunities, from jobs to entrepreneurship. The department aims to produce skilled engineers who can innovate and lead future advancements. With a curriculum covering structural design, transportation, water resource management, and project planning, the department is equipped with modern laboratories for teaching, research, and consultancy.
            </p>
          </div>
        </div>
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/PDF/Course%20Outcome_Civil.pdf'>Department course-outcome</a>
            </div>
      </div>

      <div className="cvl-vision">
        <div className="cvl-vision-heading">
          <h3>Vision</h3>
        </div>

        <div className="vision-content">
          <p>
          To impart knowledge and excellence in civil engineers with high technical competencies and
promotes high- end research to meet the current and future challenges in civil engineering
          </p>
        </div>
      </div>

      <div className="cvl-mission">
        <div className="cvl-mission-heading">
          <h3>Mission</h3>
        </div>

        <div className="mission-content">
          <ul>
            <li> To produce civil engineers of high caliber, technical skills and ethical values to serve the
            society and nation.</li>
            <li>To make the department a centre of excellence in the field of civil engineering and allied
            research.</li>
            <li>To impart knowledge and activities to students with emphasis in developing the
leadership qualities and teamwork.</li>
            
          </ul>
        </div>
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/Instru-Vision%20mission%20PEO%20PSO-1.pdf'>Department PEO's & PSO</a>
            </div>
        </div>
      
      <div className='infra-cvl'>
      <div className="cvl-infra-head">
          <h3>Infrastructure</h3>
        </div>
        <Table className='cvl-table' striped bordered hover>
                      <thead  className='table-header-cvl'>
                        <tr>
                          <th>Facility</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody className="table-body-cvl">
                        {cvlTable.map((prog) => (
                          <tr>
                            
                            <td className='name-cvl-prog'>{prog.facility}</td>
                            <td>{prog.quantity}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className='right-'>
      <div className='infra-cvl'>
        <div className='cvl-mi-heading'>
          <h3 id='laboratories-cvl' >Laboratories</h3>
        </div>
        {displayedLabs.map((lab) => (
          <div key={lab.id} className='lab-cvl'>
            <h4>{lab.id}. {lab.name}</h4>
            <img src={lab.img} alt={lab.name} className='lab-img-cvl' />
            <div className='lab-eq-cvl'>
              <h5>Equipment:</h5>
              
              <p className='tick'>{lab.equipment}</p></div>
            
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

export default Cvlvm;
