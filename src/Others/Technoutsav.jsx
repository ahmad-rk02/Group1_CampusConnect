import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import TechnoutsavGallery from "./TechnoutsavGallery";
import TechnoBanner from "./TechnoBanner";

const Technoutsav = () => {
  const location = useLocation();

  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className="header-design-tech text-white">
        <Col className="header-align-tech">
          <h1 className="text-left">TECHNOUTSAV</h1>
        </Col>
      </Row>

      <Row className="left-index-tech">
        {/* Left Sidebar */}
        <Col md={3} sm={12} className="left-sidebar-tech mb-4">
          <Card className="left-nav-tech">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-tech">
                <Link to="/technoutsav" className={location.pathname === "/technoutsav" ? "active-link" : ""}>
                  About Technoutsav
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tech">
                <Link to="/technoutsavgallery" className={location.pathname === "/technoutsavgallery" ? "active-link" : ""}>
                  Technoutsav Photo Gallery
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Right Content Section */}
        <Col md={9} sm={12} className="content-card-tech">
          {location.pathname === "/technoutsavgallery" ? (
            <TechnoutsavGallery />
          ) : (
            <Card className="mb-4 card-content-tech border-0">
              <Card.Body className="bg-white card-body">
                <Row>
                  <Card.Header className="bg-golden-tech">
                    <h4>About Technoutsav</h4>
                  </Card.Header>
                  <Col xs={12}>
                    <p className="about-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta perspiciatis, obcaecati facilis iusto exercitationem aliquid maxime, commodi nostrum neque ut harum veniam nihil voluptatem rem reiciendis. Quae, ea iure! Vel.
                    </p>
                  </Col>
                  <div>
                    <TechnoBanner />
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

export default Technoutsav;
