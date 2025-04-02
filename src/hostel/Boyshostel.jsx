import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Boyshostel.css';
import BoysHostel from "../assets/BoysHostel.jpg";

const Boyshostel = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = `${import.meta.env.VITE_STRAPI_API_BASE_URL}/api/gec-boys-hostels`;


  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCommitteeMembers(data.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className='head-box-bh'>
        <Col>
          <h1 className="text-left-bh">HOSTEL</h1>
        </Col>
      </Row>

      {/* Left Sidebar */}
      <Row className="flex-nowrap left-index-bh just">
        <Col md={2} className='left-sidebar-bh'>
          <Card className="left-nav-bh">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-bh-01">
                <Link to="/boyshostel">Boys Hostel</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-bh">
                <Link to="/Girlshostel">Girls Hostel</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Hostel Information */}
      <Card.Header className="bg-goldenn-1">
        <h4>Hostel Facilities</h4>
      </Card.Header>
      <Col className="boyshostel-text1">
        <p>
          Welcome to the heart of GCOEC hostel life, where comfort meets community amidst the serene greenery of our residential zone.
          Our hostels, both for boys and girls, are designed to support your academic journey while offering a vibrant, student-centered environment.
        </p>
      </Col>

      {/* Hostel Amenities */}
      <Card.Header className="bg-goldenn-2">
        <h4>Our Hostel Amenities</h4>
      </Card.Header>
      <Col className="boyshostel-text2">
        <ul>
          <li>Mess: Nutritious meals served daily</li>
          <li>Common Room: A space for socializing and relaxation</li>
          <li>Badminton Court: For sports and recreation</li>
          <li>Gym: Fully equipped for fitness and wellness activities</li>
          <li>Guest Room: Available for visiting family and friends</li>
          <li>RO Water Purifiers: Ensuring access to safe drinking water</li>
          <li>Newspapers & Magazines: Keeping students informed and engaged</li>
          <li>24-Hour Security: Ensuring safety and well-being</li>
          <li>Cleaning Services: Regular cleaning by dedicated staff</li>
        </ul>
      </Col>

      {/* Boys Hostel Section */}
      <Card.Header className="bg-goldenn-3">
        <h4>Boys Hostel</h4>
      </Card.Header>
      <Col className="boyshostel-text3">
        <p>
          The Boys' Hostel at GCOEC provides modern amenities, comfortable rooms, and round-the-clock security.
          More than just a place to stay, it fosters a strong sense of brotherhood, encouraging deep connections among students.
        </p>
      </Col>

      <div>
        <img src={BoysHostel} alt="Boys Hostel" className="about-image-bh" />
        <div className='The-three-buttons-bh'>
          <Button className="apply-button-bh">Apply Now</Button>
          <Button className="EN-button-bh">Enquire Now</Button>
          <Button className="HOSTEL-button-bh">Hostel Rules & Regulations</Button>
        </div>
      </div>

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
            <td>Mess, Common Room, Badminton Court, Gym, Guest room, RO-Water Purifier, Newspaper, Magazine, 24 hr Security, Sweepers</td>
          </tr>
        </tbody>
      </table>

      {/* Hostel Committee Members - Fetch from Strapi */}
      <Card.Header className="bg-goldenn-4">
        <h4>Hostel Committee Members</h4>
      </Card.Header>
      <Col>
        <table className="committee-table-bh">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name of Faculty/Staff</th>
              <th>Responsibility</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="3">Loading...</td></tr>
            ) : committeeMembers.length > 0 ? (
              committeeMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.sr_no}</td>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="3">No Data Available</td></tr>
            )}
          </tbody>
        </table>
      </Col>
    </Container>
  );
};

export default Boyshostel;