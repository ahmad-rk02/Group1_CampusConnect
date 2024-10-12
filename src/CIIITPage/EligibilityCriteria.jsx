import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './EligibilityCriteria.css'

const EligibilityCriteria = () => {
  return (
    <div>
      
      <Container fluid className="p-0 w-100">
      <Row className='head-box-eligibilitycrt'>
        <Col>
          <h1 className="text-left">CIIIT - Center for Invention Innovation Incubation & Training</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-eligibilitycrt just">
        <Col md={2} className='left-sidebar-eligibilitycrt'>
          <Card className="left-nav-eligibilitycrt">
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
        <Card.Header className="gh-goldenn-3">
          <h4>Hostel Committee Members</h4>
        </Card.Header>
        <table className="committee-table-gh">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Course name</th>
              <th>Course code</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Computer Aided Product Design and Development (IDI)</td>
              <td>CIIIT/GCOE/001</td>
              <td>3 months - (2 Hours per day - Mon to Fri)</td>
            </tr>

            <tr>
              <td>2</td>
              <td></td>
              <td>Warden (Girl's Hostel)</td>
              <td></td>
            </tr>

            <tr>
              <td>3</td>
              <td>Smt. Kanchan Khobragade</td>
              <td>Assistant</td>
              <td></td>
            </tr>
          </tbody>
        </table>
         

        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default EligibilityCriteria
