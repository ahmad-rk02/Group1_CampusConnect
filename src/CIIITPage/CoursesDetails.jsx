import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CoursesDetails.css'

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

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/aboutciiit" className={location.pathname === "/aboutciiit" ? "active-link" : ""}>
                  About CIIIT
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/admissionform" className={location.pathname === "/admissionform" ? "active-link" : ""}>
                  Admission Form
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/centersunderciiit" className={location.pathname === "/centersunderciiit" ? "active-link" : ""}>
                  Centers Under CIIIT
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/ciiitbrochure" className={location.pathname === "/ciiitbrochure" ? "active-link" : ""}>
                  CIIIT Brochure
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/ciiitcontact" className={location.pathname === "/ciiitcontact" ? "active-link" : ""}>
                  CIIIT Contact
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/ciiitleaflet" className={location.pathname === "/ciiitleaflet" ? "active-link" : ""}>
                  CIIIT Leaflet
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls-01">
                <Link to="/coursesdetails" className={location.pathname === "/coursesdetails" ? "active-link" : ""}>
                  Courses Details
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/eligibilitycriteria" className={location.pathname === "/eligibilitycriteria" ? "active-link" : ""}>
                  Eligibility Criteria
                </Link>
              </ListGroup.Item>

              <ListGroup.Item className="left-nav-row-coursesdetls">
                <Link to="/trainingconducted" className={location.pathname === "/trainingconducted" ? "active-link" : ""}>
                  Training Conducted
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

export default CoursesDetails
