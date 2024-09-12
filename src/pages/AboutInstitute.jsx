import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './AboutVM.css';
import AboutInstituteImage from '../assets/AboutInstitute.jpg'; // Renamed import


const AboutInstitute = () => {
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
          <Col md={3}  className="left-sidebar ">
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

            <div class='side-heading-bottom py-5'>
            <div className="fs-4 fw-bold gcoec-text " style={{ color: '#EADBC8'}}>GCOEC</div>
            <h2 className="fw-bold text" style={{ color: '#102C57', lineHeight: '1.5' }}>
                     Delivering Wisdom Engineers</h2>

            </div>

          </Col>

          {/* Right Content Section */}
          <Col md={9} className="mt-4 content-card">
            {/* About Institute */}
            <Card className="mb-4 w-100 card-content">
              <Card.Body className="bg-white">
                <Row>
                  <Col md={12} className=" p-0 text-center mb-3">
                    <img
                      src={AboutInstituteImage}
                      alt="Institute"
                      className="about-image"
                    />
                  </Col>
                  <Card.Header className="bg-golden">
                    <h4>About Institute</h4>  
                  </Card.Header>

                  <Col md={12}>
                    <p style={{ marginTop: '20px' }}> 
                    Government College of Engineering Chandrapur is established in 1996 This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at Nagpur. Now a days, due to globalization there is stiff competition at the national & International level as well phenomenal growth in the technology. For this, competent technocrats & engineers are in great demand and to serve this requirement, Government College of Engineering,Chandrapur is taking efforts to produce high quality technocrats.
                    </p>
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

export default AboutInstitute; // Export the component
