import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import person1Image from '../assets/person1.png'; // Replace with actual image paths
import person2Image from '../assets/person2.png';
import person3Image from '../assets/person3.png';
import './welcomepage.css';

function WelcomeSection() {
  return (
    <Container fluid className="my-5 px-3 px-md-5 welcome-section">
      <Row className="align-items-start">
        {/* Welcome Section */}
        <Col xs={12} md={8} className="mb-4 wel">
          <h3 className="fw-bold text-center text-md-start">
            Welcome to{' '}
            <span style={{ color: '#0066cc', textDecoration: 'underline' }}>
              Government College of Engineering, Chandrapur
            </span>
          </h3>
          <p className="text-center text-md-start">
            Government College of Engineering Chandrapur is established in 1996 This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at Nagpur. Now a days, due to globalization there is stiff competition at the national & International level as well phenomenal growth in the technology. For this, competent technocrats & engineers are in great demand and to serve this requirement, Government College of Engineering,Chandrapur is taking efforts to produce high quality technocrats.
          </p>
          {/* <div className="d-flex justify-content-center justify-content-md-start">
            <Button variant="link" className="text-primary fw-bold">
              READ MORE →
            </Button>
          </div> */}
        </Col>

        {/* Key People Section */}
        <Col xs={12} md={4} className="key-people-section">
          <h5 className="fw-bold text-center text-md-start">Key People</h5>

          {/* Individual Cards for Key People */}
          <Card className="mb-3 border-0">
            <Row className="g-0 align-items-center">
              <Col xs={4} md={4} className="text-center">
                <Card.Img src={person1Image} alt="Shri V C Rastogi" className="img-fluid rounded-circle" />
              </Col>
              <Col xs={8} md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold mb-1" style={{ fontSize: '1rem' }}>Shri XYZ</Card.Title>
                  <Card.Text className="mb-0">Principal Secretary, Higher & Technical Education</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3 border-0">
            <Row className="g-0 align-items-center">
              <Col xs={4} md={4} className="text-center">
                <Card.Img src={person2Image} alt="Dr. Vinod Mohitkar" className="img-fluid rounded-circle" />
              </Col>
              <Col xs={8} md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold mb-1" style={{ fontSize: '1rem' }}>Dr. Vinod Mohitkar</Card.Title>
                  <Card.Text className="mb-0">Director, Technical Education, MS Mumbai</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <Card className="mb-3 border-0">
            <Row className="g-0 align-items-center">
              <Col xs={4} md={4} className="text-center">
                <Card.Img src={person3Image} alt="Dr. R. P. Borkar" className="img-fluid rounded-circle" />
              </Col>
              <Col xs={8} md={8}>
                <Card.Body>
                  <Card.Title className="fw-bold mb-1" style={{ fontSize: '1rem' }}>Dr. Prashant V. Washimkar</Card.Title>
                  <Card.Text className="mb-0">Principal</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeSection;
