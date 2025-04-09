import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './AboutCIIIT.css'
import ciiitlogo from '../assets/ciiit-logo.gif';
import compon from '../assets/coem.jpg';
const AboutCIIIT = () => {
  return (
    <div>
      

      <Container fluid className="p-0-w-100">
      <Row className='head-box-AbtCiiit'>
        <Col>
          <h1 className="text-left head-ciiit">CIIIT - Center for Invention Innovation Incubation & Training</h1>
        </Col>
      </Row>

      <Row noGutters className="left-index-AbtCiiit just">
        <Col md={2} className='left-sidebar-AbtCiiit'>
          <Card className="left-nav-AbtCiiit">
            <ListGroup variant="flush">

              <ListGroup.Item className="left-nav-row-AbtCiiit-01">
                <Link to="/aboutciiit" className={location.pathname === "/aboutciiit" ? "active-link" : ""}>
                  About CIIIT
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="/coursesdetails" className={location.pathname === "/coursesdetails" ? "active-link" : ""}>
                  CIIIT Labs
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
                  Brochure
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="/ciiitcontact" className={location.pathname === "/ciiitcontact" ? "active-link" : ""}>
                  Contact
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit">
                <Link to="https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Leaflet.pdf" className={location.pathname === "https://www.gcoec.ac.in/gcoec/PDF/CIIIT-Leaflet.pdf" ? "active-link" : ""}>
                  Leaflet
                </Link>
              </ListGroup.Item>


            </ListGroup>
          </Card>
        </Col>

        <Col>
        <div className='ciiit-heading'>
        <h1>About CIIIT</h1>
      </div>
      <div className="ciiit-logo">
        <img
          src={ciiitlogo}
          alt="Code Unnati Logo"
          className="ciiit-img"
        />
      </div>
      <div className='ciiit-heading2'>
        <h2>CENTER FOR INVENTION,<br/>
        INNOVATION,<br/>   
        INCUBATION & TRAINING  (CIIIT)<br/>  
        CHANDRAPUR-MAHARASHTRA</h2>
      </div>
      <div className="compon">
        <img
          src={compon}
          alt="goverment clg of eng"
          className="com-img"
        />
      </div >

      <div className="para">
       <p>Government College of Engineering, Chandrapur (GCoEC) in association with Tata Technologies Ltd. and Collector office Chandrapur, has set-up the bench mark of excellence in Engineering & Technology education in Chandrapur. GCoEC - TATA Technologies - Center for Invention, Innovation, Incubation & Training (CIIIT) is at par with the world class technologies. The major objective of CIIIT is, hand-holding of inventors, innovators, entrepreneurs to develop professional and industry centric technical skills. The most important thing is that any one from ITI, Diploma, Degree, Post-graduate, PhD research scholar and Industry persons can visit, connect and avail the facilities at CIIIT. The facility is open to all the aspirants in region for technical associations and upgradations. CIIIT comprises of centers for Innovation Design and Incubation Centre, Product Verification Analysis Centre, Product Lifecycle Management Centre, Value Engineering and Benchmarking Centre, Autonomous Connected Electrified Centre, Mechatronics and IOT Centre, Digital Manufacturing Centre, Manufacturing Execution System Centre, Advance Manufacturing Centre.</p>
       <p>GCoEC-TATA Technologies-CIIIT provides hands-on practical exposure to Arc-welding Robot, Pick-n-place Robot, CNC-VMC machines, Manufacturing Execution system, 3-D printing & 3-D scanning, Machine learning & IIoT, Windchild. GCoEC-TATA CIIIT has started making the remarkable difference to the professional profiles of PG & UG students of the region. Mostly, it is in the form of design, development & fabrication of innovative products, publishing patent, research articles & copy rights etc. This has resulted in value additions and hence improved their employment opportunities. The course contents and training designed for the students of CIIIT enables the competency development in modern engineering tools which is necessary for product design, development, manufacturing and provide the students to gain insights to Industry 4.0 and other disruptive technologies.</p>

       <p>CIIIT comprises of modern shop-floor machines and equipments. Further, the availability of about 10 professional softwares like, MSC Nastran, Patran, Adams machinery studio, 3-D Experience, Delmia, ScFLOW, Marc, Easy5, FEAST and i-get-it adds tremendous technological values to visionary technocrats of next generation.</p>


       <p>The training modules available at CIIIT also provides the opportunity to become entrepreneurs. GCoEC-TATA CIIIT assures to strengthen the industry-academia partnership, impart the qualitative improvement in technical education, create skilled workforce to cater to current and future industrial landscape of the region.</p>
       <p>With modern equipments and sophisticated technologies, GCoEC-TATA CIIIT ensures employability to the trained-students in industry-specific domains. The modern technical facility and skill-development training comprises of most of the perquisites that are essential qualifications for UG and PG students for employability and placement in multi-national companies.
       The objective of this project is to establish "Center for Invention, Innovation, Incubation & Training (CIIIT)" to facilitate Innovation & skill development for students, industry professionals who can be eventually absorbed as skilled resources in the industry and creating entrepreneurships and unemployed youth who want to upgrade their skills to latest technologies in an Industry environment that makes Industry Ready Professionals.</p>

        </div>
        <div className='ciiit-heading'>
        <h1>Objectives of CIIIT </h1>
      </div>

      <div className='ciiit-content'>
        <ul>
          <li>Promote Invention, Innovation and Incubation under the mentorship of industry experts.</li>
          <li>Strengthen GCOEC's Vision & Mission of innovation entrepreneurship and skill development including all the nearby colleges.</li>
          <li>Enable Industry-Academia partnerships.</li>
          <li>Leverages advanced competency centers and expertise of the Industry subject matter experts (SMEs) for training the students, industry professionals and unemployed youth with industry relevant skills and competencies in industry environment.</li>
          <li>Enables competency development in modern engineering tools necessary for product design, development and manufacturing and provide students to gain insights of industry 4.0 and other disruptive technologies.</li>
        </ul>
      </div>
        </Col>
      </Row>
    </Container>
      

    </div>
  )
}

export default AboutCIIIT
