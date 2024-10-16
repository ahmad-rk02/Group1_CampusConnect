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
        <Card.Header className="ciiit-cd">
          <h4> Courses Details / Fees</h4>
        </Card.Header>
        <table className="ciiit-cdetail-gh">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Admission Type</th>
              <th>Condition</th>
              <th>Admission Criteria</th>
              <th>Course Fee (each course, in Rs.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pursuing B.E./B.Tech. 3rd/4th year in engineering & technology within Chandrapur (Maharashtra) district - College/Institute</td>
              <td>Students must submit College Bonafide Letter from their respective college for enrolments, then only admission will be done under Student Admission Criteria.</td>
              <td>Student Admission Criteria</td>
              <td>3,000/-</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Student Pursuing B.E./B.Tech. 3rd/4th year in engineering & technology from out of Chandrapur (Maharashtra) district - College/Institute</td>
              <td>Students must submit College Bonafide Letter from their respective college for enrolments, then only admission will be done under Student Admission Criteria.</td>
              <td>Open Admission Criteria</td>
              <td>4,500/-</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Minimum Degree/Diploma Passed in engineering & technology</td>
              <td>Need to submit last Passing education certificate</td>
              <td>Open Admission Criteria</td>
              <td>7,000/-</td>
            </tr>

            <tr>
              <td>4</td>
              <td>Industry Sponsor</td>
              <td>Letter from respective Organization</td>
              <td>Industry Engagement</td>
              <td>10,000/-</td>
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
