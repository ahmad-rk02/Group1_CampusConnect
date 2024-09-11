import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './AboutInstitute.css';

const AboutInstitute = () => {
  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className="bg-primary text-white py-3">
        <Col>
          <h1 className="text-center">ABOUT US</h1>
        </Col>
      </Row>
      
      <Row noGutters className="flex-nowrap left-index">
        {/* Left Sidebar */}
        <Col md={3} className="">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>About Institute</ListGroup.Item>
              <ListGroup.Item>Principal's Desk</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Vision and Mission</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Right Content Section */}
        <Col md={9} className="mt-4">
          {/* About Institute */}
          <Card className="mb-4 w-100"> {/* Full width Card */}
            <Card.Header className="bg-golden"> {/* Custom class for golden background */}
              <h4>About Institute</h4>
            </Card.Header>
            <Card.Body className="bg-white"> {/* Custom class for white background */}
              <Row>
                <Col md={9}>
                  <p>
                  Government College of Engineering Chandrapur is established in 1996 This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at Nagpur. Now a days, due to globalization there is stiff competition at the national & International level as well phenomenal growth in the technology. For this, competent technocrats & engineers are in great demand and to serve this requirement, Government College of Engineering,Chandrapur is taking efforts to produce high quality technocrats. 
                  </p>
                </Col>
                <Col md={3}>
                  <img
                    src="about institute.jpg"
                    alt="Vision"
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutInstitute;
