import React from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Boyshostel.css';
import { Table } from 'react-bootstrap';
import BoysHostel from "../assets/BoysHostel.jpg";

const Boyshostel = () => {
  return (

    <Container fluid className="p-0 w-100">
      {/* Header Section */}

      <Row className='head-box-bh' >
        <Col>
          <h1 className="text-left-bh">HOSTEL</h1>
        </Col>
      </Row>

      <Row className="flex-nowrap left-index-bh just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar-bh' >
          <Card className="left-nav-bh" >
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-bh-01">
                <Link
                  to="/boyshostel"
                  className={location.pathname === "/boyshostel" ? "active-link" : ""}
                >
                  Boys Hostel
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-bh">
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


      <Card.Header className="bg-goldenn-1">
        <h4>Hostel Facilities</h4>
      </Card.Header>
      <Col className="boyshostel-text1">
        <p>Welcome to the heart of GCOEC hostel life, where comfort meets community amidst the serene greenery of our residential zone. Our hostels, both for boys and girls, are designed to support your academic journey while offering a vibrant, student-centered environment. Hostel admissions are granted based on merit and reservation rules as per government norms, with priority given to higher merit students for room allocation. The process follows the CAP round of engineering admissions, ensuring fairness and transparency.
        </p>
      </Col>

      <Card.Header className="bg-goldenn-2">
        <h4>Our Hostel Amenities</h4>
      </Card.Header>
      <Col className="boyshostel-text2">
        <ul>
          <li> Mess: Nutritious meals served daily</li>
          <li> Common Room: A space for socializing and relaxation</li>
          <li> Badminton Court: For sports and recreation</li>
          <li>Gym: Fully equipped for fitness and wellness activities</li>
          <li>Guest Room: Available for visiting family and friends</li>
          <li>RO Water Purifiers: Ensuring access to safe drinking water</li>
          <li>Newspapers & Magazines: Keeping students informed and engaged</li>
          <li>24-Hour Security: Ensuring the safety and well-being of all students</li>
          <li> Cleaning Services: Regular cleaning by dedicated staff</li>
        </ul>
      </Col>

      <Card.Header className="bg-goldenn-2">
        <h4>In-Room Features</h4>
      </Card.Header>
      <Col className="boyshostel-text2">
        <ul>
          <li>Well-lit rooms with an inviting ambiance</li>
          <li>Accommodation for two students per room</li>
          <li>Separate bed, table, chair, and cupboard for each student</li>
          <li>Ceiling fan and tube lights in every room</li>
        </ul>
      </Col>

      <Card.Header className="bg-goldenn-3">
        <h4>Boys Hostel</h4>
      </Card.Header>
      <Col className="boyshostel-text3">
        <p>The Boys' Hostel at GCOEC is a dynamic and secure residence tailored to the unique needs of male students. Located within the vibrant campus, it provides modern amenities, comfortable rooms, and round-the-clock security. More than just a place to stay, the hostel fosters a strong sense of brotherhood, encouraging deep connections and supporting the overall personal and academic development of its residents.
        </p>
      </Col>

      <div >
      <img
        src={BoysHostel}
        alt="Boys Hostel"
        className="about-image-bh"
      />
      <div className='The-three-buttons-bh'>
      <Button type="submit" className="apply-button-bh">
        Apply Now
      </Button>
      <Button type="submit" className="EN-button-bh">
        Enquire Now
      </Button>
      <Button type="submit" className="HOSTEL-button-bh">
        Hostel Rules & Regulations
      </Button>
      </div>
      </div>

      <Col>



        {/* Hostel Information Table */}
        <table className="hostel-info-table-bh">
          <tbody>
            <tr>
              <th>Total Area</th>
              <td>3132 Sq.m</td>
            </tr>
            <tr>
              <th>No. of Rooms</th>
              <td>88</td>
            </tr>
            <tr>
              <th>Intake</th>
              <td>176</td>
            </tr>
            <tr>
              <th>Facilities</th>
              <td>
                Mess, Common Room, Badminton Court, Gym, Guest room, RO-Water Purifier, News paper, Magazine, 24 hr Security, Sweepers
              </td>
            </tr>
          </tbody>
        </table>



        <Card.Header className="bg-goldenn-4">
        <h4>Hostel Committee Members</h4>
      </Card.Header>
        <Col>
          <table className="committee-table-bh">
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
                <td>Prof. L. P. Nikhade</td>
                <td>Warden (Boy's Hostel)</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Mr. Prem Banjara</td>
                <td>Assistant</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Col>
    </Container>
  );
};

export default Boyshostel;