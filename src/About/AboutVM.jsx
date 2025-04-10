import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './AboutVM.css';
import AboutMission from '../assets/AboutMission.jpg';
import AboutVission from '../assets/AboutVission.jpg';

const AboutVM = () => {
  const location = useLocation();
  
  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className="header-design-vm text-white">
        <Col className="header-align-vm">
          <h1 className="text-left">ABOUT VISSION & MISSION</h1>
        </Col>
      </Row>

      <Row className=" left-index-vm">
        {/* Left Sidebar */}
        <Col xs={12} md={3} className="left-sidebar-vm"> 
          <Card className="left-nav-vm">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-vm">
                <Link to="/aboutinstitute" className={location.pathname === "/aboutinstitute" ? "active-link" : ""}>
                  About Institute
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-vm">
                <Link to="/principaldesk" className={location.pathname === "/principaldesk" ? "active-link" : ""}>
                  Principal's Desk
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-vm">
                <Link to="/aboutvm" className={location.pathname === "/aboutvm" ? "active-link" : ""}>
                  Vision and Mission
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Right Content Section */}
        <Col xs={12} md={9} className="mt-4 content-card-vm">
          <Card className="mb-4 w-100 card-content-vm">
            <Card.Header className="bg-golden-vm"> 
              <h4>Institute Vision</h4>
            </Card.Header>
            <Card.Body className="bg-white-vm"> 
              <Row>
                <Col xs={12} sm={3}>
                  <img src={AboutVission} alt="Vision" className="vision-img" />
                </Col>
                <Col xs={12} sm={9}>
                  <p className="text-medium">
                    To excel in technical education having focus on innovative design,
                    entrepreneurship development, enhancing employability rate, and
                    developing an environment-friendly society.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="w-100 card-content-vm"> 
            <Card.Header className="bg-golden-vm"> 
              <h4>Institute Mission</h4>
            </Card.Header>
            <Card.Body className="bg-white-vm">
              <Row>
                <Col xs={12} sm={9}>
                  <ul className="miss-vm">
                    <li>To educate and train undergraduate and research students for practicing professionalism, ethical approach, leadership, and entrepreneurship ability.</li>
                    <li>To nurture a conducive environment for learning.</li>
                    <li>To develop proficient technocrats catering to the needs of industry, society, and the environment.</li>
                    <li>To enhance rapport with distinguished institutes, industries, and alumni for excellence in education, research, and consultancy.</li>
                  </ul>
                </Col>
                <Col xs={12} sm={3}>
                  <img src={AboutMission} alt="Mission" className="mission-img" />
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
