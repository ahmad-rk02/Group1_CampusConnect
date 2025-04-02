import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './Elecvm.css';
import lab1 from '../../assets/e1.jpg';
import lab2 from '../../assets/e2.jpg';
import lab3 from '../../assets/e3.jpg';
import lab4 from '../../assets/e4.jpg';
import lab5 from '../../assets/e5.jpg';
import lab6 from '../../assets/e6.jpg';
import lab7 from '../../assets/e7.jpg';
import lab8 from '../../assets/e8.jpg';
import lab9 from '../../assets/e9.jpg';


const Elecvm = ({ className }) => {
  const ElecTable = [
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
    { id: 2, name: 'Electrical Machines Lab', img: lab2, equipment: 'Various AC/DC motor- generator sets,1/3 phase load bank Electrical machine trainer' },
    { id: 3, name: 'High Voltage Lab', img: lab3, equipment: 'AC Power frequency HV testing transformer,Capacitance and Tan-Delta Measurement,Dielectric BDV Test Set' },
    { id: 4, name: 'Analog Electronics Lab', img: lab4, equipment: 'DSO, Function generator, Bread Board' },
    { id: 5, name: 'Computer Lab', img: lab5, equipment: 'MATLAB SIMULINK software 5 users, ETAP 10 users networking license' },
    { id: 6, name: 'Basic Electrical Engg Lab', img: lab6, equipment: 'Autotransformer (1/3 phase), Transformer,Variable inductor' },
    { id: 7, name: 'Network Analysis Lab', img: lab7, equipment: 'Theorem kits , RLC Q meter, Multimeter ' },
    { id: 8, name: 'Power Electronics Lab', img: lab8, equipment: 'DSP based Motion Control Kit, Vector control Drive unit' },
    { id: 9, name: 'Power System Lab', img: lab9, equipment: 'Transmission Line Simulator Equipment,Transmission Line protection, Alternator protection,Transformer Protection' },
  ];
  const displayedLabs = showFirstSet ? labs.slice(0, 5) : labs.slice(5, 10);


  return (
    <div className={className}>
      <div className="Elec-intro" id='vission-mission-elect'>
        <div className="Elec-intro-heading">
          <h3>Electrical Engineering</h3>
        </div>

        <div className="Elec-intro-box">
          <p className="first-para-small">
            The department focuses on creating skilled professionals, preparing students for industry, and developing their skills.
          </p>

          <div className="small-intro-heading">
            <h6>SCOPE & PROSPECTS</h6>
          </div>

          <div className="second-para-large">
            <p>
            Department is committed to impart quality education to develop globally competitive technical manpower compatible for industry and sustainable development of society and  pursue continuous development of infrastructure and enhance state-of-the art equipment to provide the students a technologically up-to-date and intellectually inspiring environment of learning, research, innovation and professional activity and instill in them ethical values.The Department has produced outstanding students and academic toppers, including the university topper securing Gold Medal 
            </p>
          </div>
        </div>
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/CO-EE.pdf'>Department course-outcome</a>
            </div>
      </div>

      <div className="Elec-vision">
        <div className="Elec-vision-heading">
          <h3>Vision</h3>
        </div>

        <div className="vision-content">
          <p>
          The department of Electrical engineering will be the centre of excellence in education, training and research that fosters entrepreneurship, employability and societal development.
          </p>
        </div>
      </div>

      <div className="Elec-mission">
        <div className="Elec-mission-heading">
          <h3>Mission</h3>
        </div>

        <div className="mission-content">
          <ul>
            <li> To produce Electrical Engineers of high caliber to serve society and nation.</li>
            <li>To develop excellent learning centre through interaction with industries R&D centers and academia</li>
            <li>To provide knowledge base and consultancy services to rural and tribal community around us for 
            their uplift and well being.</li>
            
          </ul>
        </div>
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/Instru-Vision%20mission%20PEO%20PSO-1.pdf'>Department PEO's & PSO</a>
            </div>
        </div>
      
      <div className='infra-Elec'>
      <div className="Elec-infra-head">
          <h3>Infrastructure</h3>
        </div>
        <Table className='Elec-table' striped bordered hover>
                      <thead  className='table-header-Elec'>
                        <tr>
                          <th>Facility</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody className="table-body-Elec">
                        {ElecTable.map((prog) => (
                          <tr>
                            
                            <td className='name-Elec-prog'>{prog.facility}</td>
                            <td>{prog.quantity}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className='right-'>
      <div className='infra-Elec'>
        <div className='Elec-mi-heading'>
          <h3 id='laboratories-elect' >Laboratories</h3>
        </div>
        {displayedLabs.map((lab) => (
          <div key={lab.id} className='lab-Elec'>
            <h4>{lab.id}. {lab.name}</h4>
            <img src={lab.img} alt={lab.name} className='lab-img-Elec' />
            <div className='lab-eq-Elec'>
              <h5>Equipment:</h5>
              <p className='tick'>{lab.equipment}</p>
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

export default Elecvm;
