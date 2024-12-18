import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CIIITContact.css'

const CIIITContact = () => {
  return (
    <div>
      
      <Container fluid className="p-0 w-100">
      <Row className='head-box-cntctciiit'>
        <Col>
          <h1 className="text-left">CIIIT - Center for Invention Innovation Incubation & Training</h1>
        </Col>
      </Row>

      <Row noGutters className="left-index-cntctciiit just">
        <Col md={2} className='left-sidebar-cntctciiit'>
          <Card className="left-nav-cntctciiit">
            <ListGroup variant="flush">

            <ListGroup.Item className="left-nav-row-AbtCiiit">
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
                  Brochure
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-AbtCiiit-01">
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
        <div className='ciiit-heading-contact'>
        <h1> CIIIT contact</h1>
      </div>  
      <h3 className='con-ciiit'>CENTER FOR INVENTION, INNOVATION,<br/> INCUBATION & TRAINING (CIIIT)</h3>
         <div className='ciiit-contact'>
          <h4>  Chief Coordinator :</h4>
          <p>  Dr. Ganesh R. Chavhan<br/>  Assistant Professor, Department of Mechanical Engineering,<br/>  Email: ganeshchavhan@gcoec.ac.in | Mobile: +919765658597</p>
         <h4>  Program Director :</h4>
         <p>  Dr. Arun Kohli<br/>  Assistant Professor, Department of Mechanical Engineering,<br/>  Email: arun.Kohli@tatatechnologies.com| Mobile: +919028745918</p>
         <h4>  CIIIT Office :</h4>
         <p>  CENTER FOR INVENTION, INNOVATION, INCUBATION & TRAINING (CIIIT)<br/>  1st Floor, Academic Main Building,<br/>  Government College of Engineering Chandrapur. M.S.<br/>  Ph: 07172-227334 Fax: 07172-227664<br/>  E-mail :- chiefcoordinatorciiit@gcoec.ac.in<br/>  E-mail (Principal):- principal.gcoechandrapur@dtemaharashtra.gov.in<br/>  Institute Website: - www.gcoec.ac.in</p>
         <h4>  Connectivity :</h4>
         <p>  Road on Ballarshah Rd 264<br/>  Rail: Chandrapur 5km<br/>  Email: Nearest Airport: Nagpur 164km (3 hrs)</p>
         
         </div>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default CIIITContact
