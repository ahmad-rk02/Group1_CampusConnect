
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./PrincipalDesk.css";
import principaldesk from "../assets/principaldesk.jpg";

const PrincipalDesk = () => {
  const location = useLocation();
  const [principalData, setPrincipalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;
  useEffect(() => {
    const fetchPrincipalData = async () => { 
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-principal`);
        if (!response.ok) {
          throw new Error("Failed to fetch principal data");
        }
        const result = await response.json();
        setPrincipalData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPrincipalData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design-pd text-white">
          <Col className="header-align-pd">
            <h1 className="text-left ">ABOUT US</h1>
          </Col>
        </Row>

        <Row className="flex-nowrap left-index-pd">
          {/* Left Sidebar */}
          <Col md={3} className="left-sidebar-pd">
            <Card className="left-nav-pd">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-pd">
                  <Link
                    to="/aboutinstitute"
                    className={
                      location.pathname === "/aboutinstitute"
                        ? "active-link"
                        : ""
                    }
                  >
                    About Institute
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-pd">
                  <Link
                    to="/principaldesk"
                    className={
                      location.pathname === "/principaldesk"
                        ? "active-link"
                        : ""
                    }
                  >
                    Principal's Desk
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-pd">
                  <Link
                    to="/aboutvm"
                    className={
                      location.pathname === "/aboutvm" ? "active-link" : ""
                    }
                  >
                    Vision and Mission
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Right Content Section */}
          <Col md={9} className="mt-4 content-card-pd">
            <Card className="mb-4 w-100 card-content-pd">
              <Card.Header className="bg-golden-pd">
                <h4>About Principal</h4>
              </Card.Header>
              <Card.Body className="bg-white-pd">
                <Row className="right-row">
                  <Col md={12} className="p-0 text-center mb-3">
                    <img
                      src={principaldesk}
                      alt="PrincipalDesk"
                      className="about-image-pd"
                    />
                  </Col>

                  <Col md={12} className="right-para-principal-desk">
                    {principalData && (
                      <>
                        <h4
                          className="principal-name-pd"
                          style={{ marginRight: "100px" }}
                        >
                          Dr. {principalData.name}
                        </h4>
                        <p>
                          Principal of Government College of Engineering
                          Chandrapur.
                          <br />
                          Email:{" "}
                          <a
                            href={`mailto:${principalData.email}`}
                            className="email-link"
                          >
                            {principalData.email}
                          </a>
                        </p>
                        <p>Education: {principalData.education}</p>
                        {principalData.description.map((paragraph, index) => (
                          <p key={index}>{paragraph.children[0].text}</p>
                        ))}
                      </>
                    )}
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

export default PrincipalDesk;