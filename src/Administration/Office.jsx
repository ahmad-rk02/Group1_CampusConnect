// Office.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Office.css";

const Office = () => {
  const [sections, setSections] = useState([]);
  const [expanded, setExpanded] = useState({});

  const STRAPI_URL = "http://localhost:1337";

  useEffect(() => {
    axios
      .get(`${STRAPI_URL}/api/gec-offices?populate=*`)
      .then((response) => {
        const fetchedData = response.data.data.map((item) => ({
          id: item.id,
          name: item.name || "N/A",
          email: item.email || "N/A",
          designation: item.designation?.[0]?.children?.[0]?.text || "N/A",
          title: item.title || "N/A",
          contact: item.contact || "N/A",
          image: item.photo?.url ? `${STRAPI_URL}${item.photo.url}` : null,
        }));
        setSections(fetchedData);
      })
      .catch((error) => console.error("Error fetching data from Strapi:", error));
  }, []);

  const toggleExpand = (id, field) => {
    setExpanded((prev) => ({
      ...prev,
      [`${id}-${field}`]: !prev[`${id}-${field}`],
    }));
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className="head-box-tender">
        <Col>
          <h1 className="text-left">STUDENT SECTION</h1>
        </Col>
      </Row>

      <Row className="left-index-tender">
        <Col md={3} xs={12} className="left-sidebar-tender">
          <Card className="left-nav-tender">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/principalHods">Principal, Coordinator & HODs</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/studentSection">Student Section</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender-01">
                <Link to="/office">Office</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/committees">Committees</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/tenders">Tenders</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/login">Grievance Form</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={9} xs={12}>
          <div className="main-content">
            <h3 className="faculty-heading">OFFICE</h3>
            <div className="members-container">
              {sections.map((section) => (
                <div key={section.id} className="member-card">
                  <div className="member-image-wrapper">
                    {section.image ? (
                      <img src={section.image} alt={section.name} className="member-image" />
                    ) : (
                      <div className="no-image">No Image</div>
                    )}
                  </div>
                  <div className="member-details">
                    <h4 className="member-title">{section.title}</h4>
                    <p className="member-name">{section.name}</p>
                    <div className="member-info">
                      <span className="info-label">Email:</span>
                      <a href={`mailto:${section.email}`} className="info-value email-link">
                        {section.email}
                      </a>
                    </div>
                    <div className="member-info">
                      <span className="info-label">Contact:</span>
                      <span className="info-value">{section.contact}</span>
                    </div>
                    <div className="member-info">
                      <span className="info-label">Designation:</span>
                      <span className="info-value designation description">
                        {expanded[`${section.id}-designation`] || section.designation.length <= 50
                          ? section.designation
                          : `${section.designation.substring(0, 50)}...`}
                        {section.designation.length > 50 && (
                          <button
                            className="read-more-btn"
                            onClick={() => toggleExpand(section.id, "designation")}
                          >
                            {expanded[`${section.id}-designation`] ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Office;