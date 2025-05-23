import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CIIITLeaflet.css'

const CIIITLeaflet = () => {
  return (
    <div>
      
      <Container fluid className="p-0 w-100">
      <Row className='head-box-leafLetciiit'>
        <Col>
          <h1 className="text-left">CIIIT - Center for Invention Innovation Incubation & Training</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-leafLetciiit just">
        <Col md={2} className='left-sidebar-leafLetciiit'>
          <Card className="left-nav-leafLetciiit">
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
          
         

        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default CIIITLeaflet
