import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CoursesDetails.css';
import courssed from '../assets/IDI-2.jpg';
import course from '../assets/IDI-4.jpg';
import pva1 from '../assets/PVA-1.jpg';
import pva2 from '../assets/PVA-2.jpg';
import plm1 from '../assets/PLM-1.jpg';
import plm2 from '../assets/PLM-2.jpg';
import veb4 from '../assets/VEB-4.jpg';
import veb2 from '../assets/VEB-2.jpg';
import ace1 from '../assets/ACE-1.jpg';
import ace3 from '../assets/ACE-3.jpg';
import iot2 from '../assets/IOT-2.jpg';
import iot3 from '../assets/IOT-3.jpg';
import dm2 from '../assets/DM-2.jpg';
import dm4 from '../assets/DM-4.jpg';
import mes1 from '../assets/MES-1.jpg';
import mes2 from '../assets/MES-2.jpg';
import am1 from '../assets/AM-1.jpg';
import am3 from '../assets/AM-3.jpg';
const CoursesDetails = () => {
  return (
    <div>
      
      <Container fluid className="p-0 w-100">
      <Row className='head-box-coursesdetls'>
        <Col>
          <h1 className="text-left">CIIIT - Center for Invention Innovation Incubation & Training</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-coursesdetls just">
        <Col md={2} className='left-sidebar-coursesdetls'>
          <Card className="left-nav-coursesdetls">
            <ListGroup variant="flush">

            <ListGroup.Item className="left-nav-row-AbtCiiit-01">
                <Link to="/aboutciiit" className={location.pathname === "/aboutciiit" ? "active-link" : ""}>
                  About CIIIT
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="/coursesdetails" className={location.pathname === "/coursesdetails" ? "active-link" : ""}>
                  Courses Details
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="/eligibilitycriteria" className={location.pathname === "/eligibilitycriteria" ? "active-link" : ""}>
                  Eligibility Criteria
                </Link>
              </ListGroup.Item>
              
              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="https://www.gcoec.ac.in/gcoec/PDF/Adm-CIIIT-Form.pdf" className={location.pathname === "https://www.gcoec.ac.in/gcoec/PDF/Adm-CIIIT-Form.pdf" ? "active-link" : ""}>
                  Admission Form
                </Link>
              </ListGroup.Item>    

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Brochure.pdf" className={location.pathname === "https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Brochure.pdf" ? "active-link" : ""}>
                  CIIIT Brochure
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="/ciiitcontact" className={location.pathname === "/ciiitcontact" ? "active-link" : ""}>
                  CIIIT Contact
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Leaflet.pdf" className={location.pathname === "https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Leaflet.pdf" ? "active-link" : ""}>
                  CIIIT Leaflet
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="/trainingconducted" className={location.pathname === "/trainingconducted" ? "active-link" : ""}>
                  Training Conducted
                </Link>
              </ListGroup.Item>


            </ListGroup>
          </Card>
        </Col>

        <Col>
        <div className='ciiit-heading'>
        <h1>CENTERS UNDER CIIIT</h1>
        </div>
        <div className='ciiit-hed'> 
          <h4>01.Innovation Design and Incubation Center </h4>
        </div>
        <div className='c-para'>
         <p>Design Engineering (Innovation Design and Incubation Center) facilitates experiential learning pertaining to product design and engineering. Innovation Design and Incubation center provides industry environment with the latest technology tools (such as PTC CREO etc) used by major industries for product design & engineering. This center consists of high-end- industrial workstations, which are loaded with advanced tools used for Product Design and Engineering.</p>
         </div>
         <div className="coures1">
          <img
          src={courssed}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={course}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>CREO Basic Modules, CREO Advanced Modules</li>
          <li>Design Thinking & Innovation Process</li>
          <li>Product Design and Development</li>
          <li>Regulations</li>
          <li>Industrial Best Practices</li>
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Construction Equipments, Locomotive</li>
          <li>Industrial Heavy Machinery, Consumer Goods, Oil and Gas</li>
          <li>Manufacturing Industries, Steel Industries,</li>
          <li>Electricals and Electronics etc.</li>
        </ul>
        <h6>course code : CIIIT/GCOE/001</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>


      <div className='ciiit-hed'> 
          <h4>02.Product Verification Analysis Center</h4>
        </div>
        <div className='c-para'>
         <p>This center facilitates experiental learning pertaining to product validation. Product Verification Analysis Center provides an industry environment with the latest technology tools used by major industries for product validation and optimization of design. This center consist of simulation software technology that enables engineers to validate and optimize their design using virtual prototypes. These technologies help companies to improve quality, save time, and reduce costs associated with design and test of manufactured products. These software's (such as MSC Nastran, Patran etc) are used by leading manufacturers for linear and nonlinear finite element abalysis (FEA), fluid dynamics (CFD), advanced material modeling, acoustics, fluidstructure interaction (FSI), multi-physics, optimization, fatigue and durability, multi-body dynamics, controls, and manufacturing process simulation.</p>
         </div>
         <div className="coures1">
          <img
          src={pva1}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={pva2}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>MSC Modules such as MSC Apex, MSC Patran, MSC Nastran, Adams Studio, MSC Nastran Explicit-Dytran-Based etc.</li>
          <li>MSC Advanced Modules such as Simufact Forming Hub, Simufact Forming, Simufact Welding, Simufact Additive, ScFLOW-Standard Set-prepost, ScFLOW-HPC-8 Solver, ScFLOW etc.</li>
          <li>Design Thinking & Innovation Process</li>
          <li>Product Design and Development</li>
          <li>Industrial Best Practices</li>
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Consumer Goods, Construction & Agricultural Equipments, Industrila Heavy Machinery, Manufacturing Indutries, Steel Industries, Electricals and Electronics</li>
        </ul>
        <h6>course code : CIIIT/GCOE/002</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>

      <div className='ciiit-hed'> 
          <h4>03.Product Lifecycle Management Center</h4>
        </div>
        <div className='c-para'>
         <p>
         This center facilitates experiental learning pertaining to product Product Lifecycle Management (PLM). Product Lifecycle Management (PLM) is the process of managing the entire lifecycle of a product from inception, through engineering design and manufacture. Product file cycle management is the integration of all aspects of a product, taking it from conception through thye product life cycle (PLC) to the disposal of the product and components. PTC Windchill is a Product Lifecycle Management (PLM) software product that is offered by PTC. Windchill user base ranges from individuals to large corporations area like Aerospace & Defense, Automotive, Electronics & High-Tech, Industrial Products, Medical Devices, Retail, Footware & Apparel.</p>
         </div>
         <div className="coures1">
          <img
          src={plm1}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={plm2}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>CREO Basic Modules, CREO Advanced Modules</li>
          <li>Windchill Design Thinking & Innovation Process, Product Design and Development</li>
          <li>Product Lifecycle Management</li>
          <li>Industrial Best Practices</li>
          
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Construction Equipments, Locomotive Industrial Heavy Machinery, Consumer Goods, Oil & Gas, Manufacturing Industries, Steel Industries, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/003</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>
      
      <div className='ciiit-hed'> 
          <h4>04.Value Engineering and Benchmarking Center</h4>
        </div>
        <div className='c-para'>
         <p>
         This center facilitates experiental learning pertaining to various systems and sub-systems. This competency center consist of different machinery that will enable teardown and benchmarking. The Value Engineering and Benchmarking Center consists of Powertrain, Chassis System, Body Engineering, Electrical & Electronic System and Integrated Vehicle Assemblies. While executing any task, better understandings of physical system and its complexity will help deliver the required results effectively. Exploring the domain is nothing but understanding of why and how things works, which improves the depth of knowledge. This enables students to make a solid foundation in engineering application by working on real life assemblies and components. Benchmarking center is facility for conducting benchmark studies, study cost effective design, instill the principles of Value Engineering, frugal design in students. This also helps to understand the philosophy of exploring ideas for innovative products keeping product value in sight. The lab will consist of different machainery that will enable teardown and benchmarking.</p>
         </div>
         <div className="coures1">
          <img
          src={veb4}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={veb2}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>Cut Section of Advanced Vehicle</li>
          <li>Car Lift, Teardown tools</li>
          <li>Design Thinking & Innovation Process</li>
          <li>Value Engineering Tools and Techniques</li>
          <li>Product Design and Developmentt</li>
          <li>Industrial Best Practices</li>
          
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Construction Equipments, Agricultural Equipments, Industrial Heavy Machinery, Manufacturing Industries, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/004</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>

      <div className='ciiit-hed'> 
      <h4>05.Autonomous Connected Electrified (ACE) </h4>
        </div>
        <div className='c-para'>
         <p>
         This center is a specialized center which enable students to develop skills in electric vehicle autonomous connected cars technology. Electric vehicles hold significant potential for not only transforming how the world moves, but also for increasing energy security and reducing carbon emissions and other pollutants. Transportation accounts for about one-fifth of global energy use, and passager vehicles account for about ten percent of energy-related carbon dioxide emissions. With the rapid rise in personal vehicle wonership around the globe, demand for fuel will continue to increase along with carbon emissions unless there is a shift in transportation. There are a variety of clean vehicle technologies and fuels in development and in use, but electric vehicles represent one of the most promising technologies for reducing oil use and cutting emissions. This market is still developing, however, and there are many challenges, particularly with technology integration, optimization, and scale-up.</p>
         </div>
         <div className="coures1">
          <img
          src={ace1}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={ace3}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>Computer Aided Engineering Tools</li>
          <li>Product Lifecycle Management Tools</li>
          <li>Virtual Test Drive</li>
          <li>Electric Vehicle Kit and EV Components and Tools</li>
          <li>Internet of Things</li>
          <li>Product Design and Development & Industrial Best Practices</li>      
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Construction Equipments, Agricultural Equipments, Industrial Heavy Machinery, Manufacturing Industries, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/005</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>

      <div className='ciiit-hed'> 
      <h4>06.Mechatronics and IoT Center</h4>
        </div>
        <div className='c-para'>
         <p>
         
This center also acts as hub for various research activities related to internet of Things and next generation technologies. Mechatronics Center will act as an incubation center for advance technologies in the Automotive electronics field and will provide the basic Automotive E&E architecture platform on which students will be able to experiment. research and inoovate on the upcoming trends<br/>
Mechatronics is an integration of interdisciplinary technologies mainly mechanical, electronics and electrical. Today every industry is facing a challenge to integrate and automate many features for any system, with mechatronics it is now easy to have simplified designs, rapid machine setups, cost effectiveness, quick development trails, optimized performance, productivity and reliability. The rise of IoT will soon bring the factory of the future to reality. Such as ThingWorx platform which is the fastest way to unlock the value of the physical-digital convergence of the IoT.
</p>
         </div>
         <div className="coures1">
          <img
          src={iot2}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={iot3}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>ThingWorx Industrial Connectivity</li>
          <li>Internet of Things Hardware</li>
          <li>Sensors and other accessories</li>
          <li>Data Analytics Tools</li>
          <li>Electric and Electronic Components</li>
          <li>Industrial Best Practices</li>      
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Construction Equipment's, Locomotive Industrial Heavy Machinery, Oil and Gas, Consumer Goods, Manufacturing Industries, IT Industry, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/006</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>

      <div className='ciiit-hed'> 
      <h4>07.Digital Manufacturing Center</h4>
        </div>
        <div className='c-para'>
         <p>
         
         This center facilitates experiental learning pertaining to various manufacturing processes which are used in manufacturing industries. This center consists of Computer Integrated Manufacturing, Digital Manufacturing, Industrial Robotics. This center will help students to understand, perform digital simulation and actual manufacturing of components, program industrial robot as per various manufacturing processes such as welding, material handling, ultrasonic welding etc. It also helps students to understand and select suitable method of manufacturing based on function, materials, applications, cost constraints, cycle time etc.<br/>
         Today extensive automation is practiced in partically every type of manufacturing and assembly process. Some of the larger processes include electrical power generation, oil refining, plastics, cement plants, fertilizer plants, automobile and truck assembly, aircraft production, glass manufacturing, food and beverage processing, canning bottling and manufacture of various kinds of parts. Robots are also used to assemble electronic circuit boards and Automotive industry.
</p>
         </div>
         <div className="coures1">
          <img
          src={dm2}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={dm4}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>Digital Manufacturing Software</li>
          <li>Industrial Robotics with Industrial Applications</li>
          <li>Assembly Line & Industrial Best Practices</li>      
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Locomotive, Consumer Goods, Manufacturing Industries, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/007</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>

      <div className='ciiit-hed'> 
      <h4>08.Manufacturing Execution System (MES) Center
      </h4>
        </div>
        <div className='c-para'>
        <p>This center facilitates experiental learning pertaining to various manufacturing processes which are used in manufacturing industries. This center consists of Computer Integrated Manufacturing, Digital Manufacturing, Industrial Robotics. This center will help students to understand, perform digital simulation and actual manufacturing of components, program industrial robot as per various manufacturing processes such as welding, material handling, ultrasonic welding etc. It also helps students to understand and select suitable method of manufacturing based on function, materials, applications, cost constraints, cycle time etc.<br/>
         Today extensive automation is practiced in partically every type of manufacturing and assembly process. Some of the larger processes include electrical power generation, oil refining, plastics, cement plants, fertilizer plants, automobile and truck assembly, aircraft production, glass manufacturing, food and beverage processing, canning bottling and manufacture of various kinds of parts. Robots are also used to assemble electronic circuit boards and Automotive industry.
</p>
         </div>
         <div className="coures1">
          <img
          src={mes1}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={mes2}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>Conveyor with PLC</li>
          <li>Pick to light Sensor Integration</li>
          <li>Factory Magix Software and Industrial Robotics with Industrial Applications</li>
          <li>Assembly Line & Industrial Best Practices</li>      
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Construction Equipment's, Locomotive Industrial Heavy Machinery, Oil and Gas, Consumer Goods, Manufacturing Industries, IT Industry, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/008</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>

      <div className='ciiit-hed'> 
      <h4>09.Advanced Manufacturing Center</h4>
        </div>
        <div className='c-para'>
         <p>
         
         This Advanced manufacturing Center is an industry environment for experiential learning of various advance manufacturing processes used in different industries. It is equiped with the latest industrial equipment's for VMC programming, Additive Manufacturing , Reverse Engineering, Laser cutting etc.<br/>
         Advance manufacturing is the production of complex machines through the application of advancements in science in manufacturing processes and product design. It is the utilization of enabling technologies, incorporating design and business process innovation to deliver high value-added processes and products in ways that are novel and competitive. Advanced manufacturing covers a whole host of new industrial processes that improve upon traditional methods in quality, speed, and cost.
</p>
         </div>
         <div className="coures1">
          <img
          src={am1}
          alt="course detail"
          className="course-img1"
        />
      </div>
      <div className="course2">
          <img
          src={am3}
          alt="Course detail"
          className="course-img2"
        />
      </div>
      <div className='feature-ciiit'>
      <h5>Key Enablers :</h5>
      <ul>
          <li>High End Industrial Workstations</li>
          <li>TVertical Machining Center</li>
          <li>Hydraulic Press and Tools Set</li>
          <li>NC Programming Software</li>
          <li>Industrial 3D Printer Plastics</li>
          <li>Industrial Best Practices</li>      
        </ul>
        <h5>Career Opportunities :</h5>
      <ul>
          <li>Automotive Industries, Aerospace Engineering, Construction Equipment's, Locomotive, Industrial Heavy Machinery, Consumer Goods, Manufacturing Industries, Steel Industries, Electricals and Electronics etc.
          </li>
        </ul>
        <h6>course code : CIIIT/GCOE/009</h6>
        <h6> Duration : 3 months - (2 Hours per day - Mon to Fri)</h6>
      </div>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default CoursesDetails
