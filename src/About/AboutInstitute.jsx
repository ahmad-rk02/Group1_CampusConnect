import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; 
import './AboutInstitute.css';
import AboutInstituteImage from '../assets/AboutInstitute.jpg'; 

const AboutInstitute = () => {
  const location = useLocation(); 

  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design-ai text-white">
          <Col className="header-align-ai">
            <h1 className="text-left ">ABOUT US</h1>
          </Col>
        </Row>

        <Row className="left-index-ai">

          {/* Left Sidebar */}
          <Col md={3} sm={12} className="left-sidebar-ai mb-4">
            <Card className="left-nav-ai">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-ai">
                  <Link to="/aboutinstitute" className={location.pathname === "/aboutinstitute" ? "active-link" : ""}>
                    About Institute
                  </Link>
                </ListGroup.Item >
                <ListGroup.Item className="left-nav-row-ai">
                  <Link to="/principaldesk" className={location.pathname === "/principaldesk" ? "active-link" : ""}>
                    Principal's Desk
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-ai">
                  <Link to="/aboutvm" className={location.pathname === "/aboutvm" ? "active-link" : ""}>
                    Vision and Mission
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            <div className='side-heading-bottom-ai'>
              <div className="fs-4 fw-bold gcoec-text" style={{ color: '#EADBC8'}}>GCOEC</div>
              <h2 className="fw-bold text" style={{ color: '#102C57', lineHeight: '1.5' }}>
                Delivering Wisdom Engineers
              </h2>
            </div>
          </Col>

          {/* Right Content Section */}
          <Col md={9} sm={12} className="content-card-ai">
            {/* About Institute */}
            <Card className="mb-4 card-content-ai border-0">
              <Card.Body className="bg-white">
                <Row>
                  <Col xs={12} className="text-center mb-3">
                    <img src={AboutInstituteImage} alt="Institute" className="about-image-ai" />
                  </Col>
                  <Card.Header className="bg-golden-ai">
                    <h4>About Institute</h4>  
                  </Card.Header>
                  <Col xs={12}>
                    <p className="about-text">
                      Government College of Engineering Chandrapur is established in 1996. This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at Nagpur. Nowadays, due to globalization, there is stiff competition at the national & international level as well as phenomenal growth in technology. For this, competent technocrats & engineers are in great demand, and to serve this requirement, Government College of Engineering, Chandrapur is taking efforts to produce high-quality technocrats.
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

export default AboutInstitute;