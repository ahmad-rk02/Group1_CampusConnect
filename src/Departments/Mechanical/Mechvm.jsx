import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './Mechvm.css';
import lab1 from '../../assets/I1.jpg';
import lab3 from '../../assets/i2.jpg';
import lab4 from '../../assets/i3.jpg';
import lab5 from '../../assets/i3.jpg';
import lab6 from '../../assets/i4.jpg';
import lab7 from '../../assets/i5.jpg';
import lab8 from '../../assets/i6.jpg';
import lab9 from '../../assets/i7.jpg';
import lab10 from '../../assets/i8.jpg';

const Mechvm = ({ className }) => {
  const MechTable = [
    {  facility: 'Number of Classrooms', quantity: '03'},
    {  facility: 'Number of Laboratories', quantity: '10'},
    {  facility: 'Tutorial Rooms', quantity: '03'},
    {  facility: 'Faculty Cabins', quantity: '14'},
    {  facility: 'Number of Computers', quantity: '40'},
    {  facility: 'Number of Projectors', quantity: '04'},
    {  facility: 'Number of laptops', quantity: '03'},
    {  facility: 'Seminar hall', quantity: '01'},
  ];
  
    const [showFirstSet, setShowFirstSet] = useState(true);
  
  const labs = [
    { id: 1, name: 'Biomedical Instrumentation Lab', img: lab1, equipment: 'Bio Signal Simulator, X-Ray Machine Simulator, External Pace Maker,EEG Machine Simulator' },
    { id: 2, name: 'Analytical Instrumentation Lab', img: lab2, equipment: 'Fetal Monitoring System Trainer, PC based Lang analyzer,Hemo Dialysis Trainer Internal,' },
    { id: 3, name: 'Digital Signal Processing Lab', img: lab3, equipment: 'Desktop,Printers, Scanners,UPS,License Softwares- Automation Studio, MATLAB, LabVIEW,etc.' },
    { id: 4, name: 'Advance Process Control Lab', img: lab4, equipment: 'Multi Brand PLC Training System,DCS Trainer with SCADA,PLC Based Electro-Hydraulic Trainer' },
    { id: 5, name: 'Control System Lab', img: lab5, equipment: 'Control Logix Training System,Multi Process Trainer,Control Valve Characteristics Trainer,MATLAB based Heat Exchanger System' },
    { id: 6, name: 'Applied Electronics Lab', img: lab6, equipment: 'Universal IC Tester,Dual channel DSO,Dual power supply DC,Function generator,Multifunction Unit' },
    { id: 7, name: 'Sensor & Transducer Lab', img: lab7, equipment: 'Speed Measurement,LVDT setup,Tachometer,pH meter,Universal Calibrator,Pressure Measurement' },
    { id: 8, name: 'Electronics Measurement Lab', img: lab8, equipment: 'Digital LCR Meter,Bench Top DMM,AC & DC Bridges,CRO, Multimeter' },
    { id: 9, name: 'Microcontroller Lab', img: lab9, equipment: 'Traffic Control, Stepper Motor Control, DC Motor Control Cards,Intelligent Universal Programmer,Microcontroller Developer ' },
    { id: 10, name: 'Project Lab', img: lab10, equipment: 'CRO,Multi-meters,Computers with Matlab ,Hydraulic Trainer,DCS' }
  ];
  const displayedLabs = showFirstSet ? labs.slice(0, 5) : labs.slice(5, 10);


  return (
    <div className={className}>
      <div className="mech-intro">
        <div className="mech-intro-heading">
          <h3>Mechanical Engineering</h3>
        </div>

        <div className="mech-intro-box">
          <p className="first-para-small">
            The department focuses on creating skilled professionals, preparing students for industry, and developing their skills.
          </p>

          <div className="small-intro-heading">
            <h6>SCOPE & PROSPECTS</h6>
          </div>

          <div className="second-para-large">
            <p>
            The department offers a well-structured curriculum with practical and industrial exposure through visits, projects, and training. Students engage in co-curricular and extracurricular activities under MESA, including competitions, expert lectures, and sports. With qualified faculty involved in research and development, the department ensures quality education. Graduates secure placements or pursue higher studies
            </p>
          </div>
        </div>
        <div className='course-outcome'>
            <a href='https://www.gcoec.ac.in/gcoec/cos/Mech_Course%20Outcomes.pdf'>Department course-outcome</a>
            </div>
      </div>

      <div className="mech-vision">
        <div className="mech-vision-heading">
          <h3>Vision</h3>
        </div>

        <div className="vision-content">
          <p>
          To be the most most sought after academic centre that transforms students in to globally competent Mechanical Engineers for industry and society.
          </p>
        </div>
      </div>

      <div className="mech-mission">
        <div className="mech-mission-heading">
          <h3>Mission</h3>
        </div>

        <div className="mission-content">
          <ul>
          <li>To facilitate environment for students and faculty to excel in the field of mechanical engineering.</li>
            <li>To strengthen students to meet intellectual, ethical and career challenges in employment/self-employment.</li>
            <li>To develop collaborations with industries, research & development organizations and educational institutions for excellence in teaching, research and consultancy practices.</li>
            
          </ul>
        </div>
        <div className='course-outcome'>
        <a href='https://www.gcoec.ac.in/gcoec/cos/mech-Vision-Mission-PEOs-POs-PSOs.pdf'>Department PEO's & PSO</a>
        </div>
        </div>
      
      <div className='infra-mech'>
      <div className="mech-infra-head">
          <h3>Infrastructure</h3>
        </div>
        <Table className='mech-table' striped bordered hover>
                      <thead  className='table-header-mech'>
                        <tr>
                          <th>Facility</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                      <tbody className="table-body-mech">
                        {MechTable.map((prog) => (
                          <tr>
                            
                            <td className='name-mech-prog'>{prog.facility}</td>
                            <td>{prog.quantity}</td>
                            
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <div className='right-'>
      <div className='infra-mech'>
        <div className='mech-mi-heading'>
          <h3>Laboratories</h3>
        </div>
        {displayedLabs.map((lab) => (
          <div key={lab.id} className='lab-mech'>
            <h4>{lab.id}. {lab.name}</h4>
            <img src={lab.img} alt={lab.name} className='lab-img-mech' />
            <div className='lab-eq-mech'>
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

export default Mechvm;
