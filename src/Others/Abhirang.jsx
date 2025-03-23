import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import AbhirangGallery from "./AbhirangGallery";
import AbhirangBanner from "./AbhirangBanner";


const Abhirang = () => {
  const location = useLocation();

  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className="header-design-tech text-white">
        <Col className="header-align-tech">
          <h1 className="text-left">ABHIRANG</h1>
        </Col>
      </Row>

      <Row className="left-index-tech">
        {/* Left Sidebar */}
        <Col md={3} sm={12} className="left-sidebar-tech mb-4">
          <Card className="left-nav-tech">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-tech">
                <Link to="/abhirang" className={location.pathname === "/abhirang" ? "active-link" : ""}>
                  About Abhirang
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tech">
                <Link to="/abhiranggallery" className={location.pathname === "/abhiranggallery" ? "active-link" : ""}>
                  AbhirangPhoto Gallery
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Right Content Section */}
        <Col md={9} sm={12} className="content-card-tech">
          {location.pathname === "/abhiranggallery" ? (
            <AbhirangGallery />
          ) : (
            <Card className="mb-4 card-content-tech border-0">
              <Card.Body className="bg-white card-body">
                <Row>
                  <Card.Header className="bg-golden-tech">
                    <h4>About Abhirang</h4>
                  </Card.Header>
                  <Col xs={12}>
                    <p className="about-text">
                    Abhirang is the vibrant cultural festival of Government College of Engineering, Chandrapur, where talent meets celebration! This electrifying fest is packed with thrilling performances, including dance and singing competitions, orchestra, drama, DJ night, a grand feast, and many more fun-filled activities. Whether you're a performer, a music lover, or just here for the vibes, Abhirang promises unforgettable moments of rhythm, creativity, and joy. Get ready to experience the magic of art and culture like never before! 🎭🎶🔥
                    </p>
                  </Col>
                  <div>
                    <AbhirangBanner />
                  </div>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Abhirang;
