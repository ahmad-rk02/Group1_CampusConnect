import React from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Girlshostel.css';
import { Table } from 'react-bootstrap';
import girlshostel from "../assets/girlshostel-img.jpg";

const Girlshostel = () => {
  return (

    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className='head-box-gh' >
        <Col>
          <h1 className="text-left-gh">HOSTEL</h1>
        </Col>
      </Row>

      <Row className="flex-nowrap left-index-gh just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar-gh' >
          <Card className="left-nav-gh" >
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-gh">
                <Link
                  to="/boyshostel"
                  className={location.pathname === "/boyshostel" ? "active-link" : ""}
                >
                  Boys Hostel
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-gh-01">
                <Link
                  to="/Girlshostel"
                  className={location.pathname === "/Girlshostel" ? "active-link" : ""}
                >
                  Girls Hostel
                </Link>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Card.Header className="gh-goldenn-1">
        <h4>Hostel Facilities</h4>
      </Card.Header>
      <Col className="girlshostel-text1">
        <p>Welcome to the heart of GCOEC hostel life, where comfort meets community amidst the serene greenery of our residential zone. Our hostels, both for boys and girls, are designed to support your academic journey while offering a vibrant, student-centered environment. Hostel admissions are granted based on merit and reservation rules as per government norms, with priority given to higher merit students for room allocation. The process follows the CAP round of engineering admissions, ensuring fairness and transparency.
        </p>
      </Col>

      <Card.Header className="gh-goldenn-2">
        <h4>Our Hostel Amenities</h4>
      </Card.Header>
      <Col className="girlshostel-text2">
        <ul>
          <li> Mess: Nutritious meals served daily</li>
          <li> Common Room: A space for socializing and relaxation</li>
          <li> Badminton Court: For sports and recreation</li>
          <li>RO Water Purifiers: Ensuring access to safe drinking water</li>
          <li>Newspapers & Magazines: Keeping students informed and engaged</li>
          <li>24-Hour Security: Ensuring the safety and well-being of all students</li>
          <li> Cleaning Services: Regular cleaning by dedicated staff</li>
        </ul>
      </Col>

      <Card.Header className="gh-goldenn-2">
        <h4>In-Room Features</h4>
      </Card.Header>
      <Col className="girlshostel-text2">
        <ul>
          <li>Well-lit rooms with an inviting ambiance</li>
          <li>Accommodation for two students per room</li>
          <li>Separate bed, table, chair, and cupboard for each student</li>
          <li>Ceiling fan and tube lights in every room</li>
        </ul>
      </Col>

      <Card.Header className="gh-goldenn-3">
        <h4>Girls Hostel</h4>
      </Card.Header>
      <Col className="girlshostel-text3">
        <p>Welcome to the heart of GCOEC hostel life, where comfort meets community amidst the serene greenery of our residential zone. Our hostels, both for boys and girls, are designed to support your academic journey while offering a vibrant, student-centered environment. Hostel admissions are granted based on merit and reservation rules as per government norms, with priority given to higher merit students for room allocation. The process follows the CAP round of engineering admissions, ensuring fairness and transparency.
        </p>
      </Col>

      <img
        src={girlshostel}
        alt="girlshostel"
        className="about-image-gh"
        style={{ width: '34%' }}
      />
      <Button type="submit" className="apply-button">
        Apply Now
      </Button>
      <Button type="submit" className="EN-button">
        Enquire Now
      </Button>
      <Button type="submit" className="HOSTEL-button">
        Hostel Rules & Regulations
      </Button>
      <Col>



        {/* Hostel Information Table */}
        <table className="hostel-info-table">
          <tbody>
            <tr>
              <th>Total Area</th>
              <td>2936 Sq.m</td>
            </tr>
            <tr>
              <th>No. of Rooms</th>
              <td>80</td>
            </tr>
            <tr>
              <th>Intake</th>
              <td>156</td>
            </tr>
            <tr>
              <th>Facilities</th>
              <td>
                Mess, Common Room, Badminton Court, RO-water purifier, News paper, Magazine, 24 hr Security, Sweepers
              </td>
            </tr>
          </tbody>
        </table>



        <Card.Header className="gh-goldenn-3">
          <h4>Hostel Committee Members</h4>
        </Card.Header>
        <table className="committee-table-gh">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name of Faculty/ Staff</th>
              <th>Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. D. K. Maghade</td>
              <td>Rector</td>
            </tr>

            <tr>
              <td>2</td>
              <td>-</td>
              <td>Warden (Girl's Hostel)</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Smt. Kanchan Khobragade</td>
              <td>Assistant</td>
            </tr>
          </tbody>
        </table>

      </Col>

    </Container>
  );
};

export default Girlshostel;