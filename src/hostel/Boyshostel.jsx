import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Boyshostel.css';

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
        <p>Welcome to the heart of GCOEC hostel life, where comfort meets community amidst the serene greenery of our residential zone. Our hostels, both for boys and girls, are designed to support your academic journey while offering a vibrant, student-centered environment. Hostel admissions are granted based on merit and reservation rules as per government norms, with priority given to higher merit students for room allocation. The process follows the CAP round of engineering admissions, ensuring fairness and transparency.
        </p>
      </Col>
    </Container>
  );
};

export default Boyshostel;