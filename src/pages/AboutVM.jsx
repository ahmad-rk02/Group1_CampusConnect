import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './AboutVM.css';
import AboutMission from '../assets/AboutMission.jpg';
import AboutVission from '../assets/AboutVission.jpg';

const AboutVM = () => {
  const location = useLocation(); // Get the current route
  
  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design text-white py-3">
          <Col className="header-align">
            <h1 className="text-left ">ABOUT US</h1>
          </Col>
        </Row>

        <Row className="flex-nowrap left-index">
          {/* Left Sidebar */}
          <Col md={3} className="left-sidebar"> 
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Link
                    to="/aboutinstitute"
                    className={location.pathname === "/aboutinstitute" ? "active-link" : ""}
                  >
                    About Institute
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    to="/principaldesk"
                    className={location.pathname === "/principaldesk" ? "active-link" : ""}
                  >
                    Principal's Desk
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link
                    to="/aboutvm"
                    className={location.pathname === "/aboutvm" ? "active-link" : ""}
                  >
                    Vision and Mission
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Right Content Section */}
          <Col md={9} className="mt-4 content-card">
            {/* Institute Vision */}
            <Card className="mb-4 w-100 card-content"> 
              <Card.Header className="bg-golden"> 
                <h4>Institute Vision</h4>
              </Card.Header>
              <Card.Body className="bg-white"> 
                <Row>
                  <Col md={3}>
                    <img
                      src={AboutVission}
                      alt="Vision"
                      style={{ width: '50%' }}
                    />
                  </Col>

                  <Col md={9}>
                    <p>
                      To excel in technical education having focus on innovative design,
                      entrepreneurship development, enhancing employability rate, and
                      developing environment-friendly society.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Institute Mission */}
            <Card className="w-100 card-content"> 
              <Card.Header className="bg-golden"> 
                <h4>Institute Mission</h4>
              </Card.Header>
              <Card.Body className="bg-white">
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
                      src={AboutMission}
                      alt="Mission"
                      style={{ width: '50%' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutVM;