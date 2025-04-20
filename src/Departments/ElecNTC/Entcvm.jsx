import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './Entcvm.css';
import lab1 from '../../assets/e1.jpg';
import lab2 from '../../assets/e2.jpg';
import lab3 from '../../assets/e3.jpg';
import lab4 from '../../assets/e4.jpg';
import lab5 from '../../assets/e5.jpg';
import lab6 from '../../assets/e6.jpg';
import lab7 from '../../assets/e7.jpg';
import lab8 from '../../assets/e8.jpg';
import lab9 from '../../assets/e9.jpg';


const Entcvm = ({ className }) => {
  const entcTable = [
    {  facility: 'Number of Classrooms', quantity: '03'},
    {  facility: 'Number of Laboratories', quantity: '10'},
    {  facility: 'Tutorial Rooms', quantity: '02'},
    {  facility: 'Faculty Cabins', quantity: '04'},
    {  facility: 'Number of Computers', quantity: '30'},
    {  facility: 'Number of Projectors', quantity: '05'},
    {  facility: 'Number of laptops', quantity: '03'},
  ];
  
    const [showFirstSet, setShowFirstSet] = useState(true);
  
  const labs = [
    { id: 1, name: 'Electrical Instrumentation Lab', img: lab1, equipment: 'Various measuring bridges, power supply, Insulation Tester' },
    { id: 2, name: 'Electrical Machines Lab', img: lab2, equipment: 'Various AC/DC motor- generator sets,1/3 phase load bank entctrical machine trainer' },
    { id: 3, name: 'High Voltage Lab', img: lab3, equipment: 'AC Power frequency HV testing transformer,Capacitance and Tan-Delta Measurement,Dientctric BDV Test Set' },
    { id: 4, name: 'Analog entctronics Lab', img: lab4, equipment: 'DSO, Function generator, Bread Board' },
    { id: 5, name: 'Computer Lab', img: lab5, equipment: 'MATLAB SIMULINK software 5 users, ETAP 10 users networking license' },
    { id: 6, name: 'Basic entctrical Engg Lab', img: lab6, equipment: 'Autotransformer (1/3 phase), Transformer,Variable inductor' },
    { id: 7, name: 'Network Analysis Lab', img: lab7, equipment: 'Theorem kits , RLC Q meter, Multimeter ' },
    { id: 8, name: 'Power entctronics Lab', img: lab8, equipment: 'DSP based Motion Control Kit, Vector control Drive unit' },
    { id: 9, name: 'Power System Lab', img: lab9, equipment: 'Transmission Line Simulator Equipment,Transmission Line protection, Alternator protection,Transformer Protection' },
  ];
  const displayedLabs = showFirstSet ? labs.slice(0, 5) : labs.slice(5, 10);


  return (
    <div className={className}>
      <div className="entc-intro" id='vission-mission-entc' >
        <div className="entc-intro-heading">
          <h3>Electronics & Telecommunication Engineering</h3>
        </div>

        <div className="entc-intro-box">
          <p className="first-para-small">
            The department focuses on creating skilled professionals, preparing students for industry, and developing their skills.
          </p>

          <div className="small-intro-heading">
            <h6>SCOPE & PROSPECTS</h6>
          </div>

          <div className="second-para-large">
            <p>
            The department features state-of-the-art laboratories in Electronics, Microprocessors, Microcontrollers, and Computer Science, equipped with advanced testing and measuring instruments. It hosts the ASET (Association of Electronics & Telecommunication Students), organizing various co-curricular and extracurricular activities. Committed to quality education, the department fosters globally competitive technical talent, promotes research and innovation, and continuously upgrades infrastructure to provide a technologically advanced and intellectually inspiring learning environment.
            </p>
          </div>
        </div>
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/PDF/ETC_COs.pdf'>Department course-outcome</a>
            </div>
      </div>

      <div className="entc-vision">
        <div className="entc-vision-heading">
          <h3>Vision</h3>
        </div>

        <div className="vision-content">
          <p>
          To Excel in developing Electronics engineering with special skills in telecommunication engineering in pursuit to continuous human prosperity.
          </p>
        </div>
      </div>

      <div className="entc-mission">
        <div className="entc-mission-heading">
          <h3>Mission</h3>
        </div>

        <div className="mission-content">
          <ul>
            <li>  To develop modern infrastructure with conducive student friendly learning environment.</li>
            <li>To establish knowledge networking with prevalent institution and organizations globally in general and specific in this region.</li>
            <li> To impart basic electronics engineering skill particularly in the field of telecommunication and specific to wireless communication.</li>
            
          </ul>
        </div>
        <div className='course-outcome'>
            <a href="https://www.gcoec.ac.in/gcoec/cos/ETC-V-M-PSO-PEO.pdf">Department PEO's & PSO</a>
            </div>
        </div>
      
      <div className='infra-entc'>
      <div className="entc-infra-head">
          <h3>Infrastructure</h3>
        </div>
        <Table className='entc-table' striped bordered hover>
                      <thead  className='table-header-entc'>
                        <tr>
                          <th>Facility</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody className="table-body-entc">
                        {entcTable.map((prog) => (
                          <tr>
                            
                            <td className='name-entc-prog'>{prog.facility}</td>
                            <td>{prog.quantity}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className='right-'>
      <div className='infra-entc'>
        <div className='entc-mi-heading'>
          <h3 id='laboratories-entc' >Laboratories</h3>
        </div>
        {displayedLabs.map((lab) => (
          <div key={lab.id} className='lab-entc'>
            <h4>{lab.id}. {lab.name}</h4>
            <img src={lab.img} alt={lab.name} className='lab-img-entc' />
            <div className='lab-eq-entc'>
              <h5>Equipment:</h5>
              <p className='tick'>{lab.equipment}</p>
            </div>
          </div>
        ))}
        <button className='but-toggle-button' onClick={() => setShowFirstSet(!showFirstSet)}>
          {showFirstSet ? 'Next' : 'Previous'}
        </button>
      </div>
      <div className='course-outcome'>
            <a href="https://www.gcoec.ac.in/gcoec/cos/ETC-V-M-PSO-PEO.pdf">Major Equipments </a>
            </div>

    </div>

        </div> 
    </div>
  );
};

export default Entcvm;
