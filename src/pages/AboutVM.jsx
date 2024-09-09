import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './AboutVM.css';

const AboutVM = () => {
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
          {/* Institute Vision */}
          <Card className="mb-4 w-100"> {/* Full width Card */}
            <Card.Header className="bg-golden"> {/* Custom class for golden background */}
              <h4>Institute Vision</h4>
            </Card.Header>
            <Card.Body className="bg-white"> {/* Custom class for white background */}
              <Row>
                <Col md={9}>
                  <p>
                    To excel in technical education having focus on innovative design, 
                    entrepreneurship development, enhancing employability rate, and 
                    developing environment-friendly society.
                  </p>
                </Col>
                <Col md={3}>
                  <img
                    src="AboutVission.jpg"
                    alt="Vision"
                    style={{ width: '100%' }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Institute Mission */}
          <Card className="w-100"> {/* Full width Card */}
            <Card.Header className="bg-golden"> {/* Custom class for golden background */}
              <h4>Institute Mission</h4>
            </Card.Header>
            <Card.Body className="bg-white"> {/* Custom class for white background */}
              <Row>
                <Col md={9}>
                  <ul>
                    <li>To educate and train undergraduate and research students for practicing professionalism, ethical approach, leadership, and entrepreneurship ability.</li>
                    <li>To nurture a conducive environment for learning.</li>
                    <li>To develop proficient technocrats catering to the needs of industry, society, and the environment.</li>
                    <li>To enhance rapport with distinguished institutes, industries, and alumni for excellence in education, research, and consultancy.</li>
                  </ul>
                </Col>
                <Col md={3}>
                  <img
                    src="AboutMission.jpg"
                    alt="Mission"
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

export default AboutVM;
