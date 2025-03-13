import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Girlshostel.css';
import girlshostel from "../assets/girlshostel-img.jpg";

const Girlshostel = () => {
  const [committeeMembers, setCommitteeMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:1337/api/gec-girl-hostels"; 

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
      <Row className='head-box-gh'>
        <Col>
          <h1 className="text-left-gh">HOSTEL</h1>
        </Col>
      </Row>

      {/* Left Sidebar */}
      <Row className="flex-nowrap left-index-gh">
        <Col md={2} className='left-sidebar-gh'>
          <Card className="left-nav-gh">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-gh">
                <Link to="/boyshostel">Boys Hostel</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-gh-01">
                <Link to="/Girlshostel">Girls Hostel</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Hostel Information */}
      <div className='Right-row-gh'>
        <Card.Header className="gh-goldenn-1">
          <h4>Hostel Facilities</h4>
        </Card.Header>
        <Col className="girlshostel-text1">
          <p>
            Welcome to the heart of GCOEC hostel life, where comfort meets community amidst the serene greenery of our residential zone.
            Our hostels, both for boys and girls, are designed to support your academic journey while offering a vibrant, student-centered environment.
            Hostel admissions are granted based on merit and reservation rules as per government norms, with priority given to higher merit students for room allocation.
          </p>
        </Col>

        {/* Hostel Amenities */}
        <Card.Header className="gh-goldenn-2">
          <h4>Our Hostel Amenities</h4>
        </Card.Header>
        <Col className="girlshostel-text2">
          <ul>
            <li>Mess: Nutritious meals served daily</li>
            <li>Common Room: A space for socializing and relaxation</li>
            <li>Badminton Court: For sports and recreation</li>
            <li>RO Water Purifiers: Ensuring access to safe drinking water</li>
            <li>Newspapers & Magazines: Keeping students informed and engaged</li>
            <li>24-Hour Security: Ensuring safety and well-being</li>
            <li>Cleaning Services: Regular cleaning by dedicated staff</li>
          </ul>
        </Col>

        {/* In-Room Features */}
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

        {/* Girls Hostel Section */}
        <Card.Header className="gh-goldenn-3">
          <h4>Girls Hostel</h4>
        </Card.Header>
        <Col className="girlshostel-text3">
          <p>
            The Girls' Hostel at GCOEC offers a secure, comfortable, and nurturing environment.
            Hostel admissions are based on merit and government reservation policies, with priority given to higher merit students.
          </p>
        </Col>

        <div>
          <img src={girlshostel} alt="Girls Hostel" className="about-image-gh" />
          <div className='The-three-buttons-gh'>
            <Button className="apply-button-gh">Apply Now</Button>
            <Button className="EN-button-gh">Enquire Now</Button>
            <Button className="HOSTEL-button-gh">Hostel Rules & Regulations</Button>
          </div>
        </div>

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
              <td>Mess, Common Room, Badminton Court, RO-Water Purifier, Newspaper, Magazine, 24 hr Security, Sweepers</td>
            </tr>
          </tbody>
        </table>

        {/* Hostel Committee Members - Fetch from Strapi */}
        <Card.Header className="gh-goldenn-3">
          <h4>Hostel Committee Members</h4>
        </Card.Header>
        <Col>
          <table className="committee-table-gh">
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
      </div>
    </Container>
  );
};

export default Girlshostel;
