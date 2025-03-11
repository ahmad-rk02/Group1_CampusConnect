import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import './principalHods.css';

const API_BASE_URL = "http://localhost:1337/api";
const STRAPI_BASE_URL = "http://localhost:1337";

const PrincipalHods = () => {
  const [principal, setPrincipal] = useState(null);
  const [coordinator, setCoordinator] = useState(null);
  const [hods, setHods] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const departments = [
    "CSE", "ENTC", "Electrical", "Instrumentation", "Mechanical", "Civil"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Principal and Coordinator
        const [principalRes, coordinatorRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/gec-principal?populate=*`),
          axios.get(`${API_BASE_URL}/gug-coordinator?populate=*`),
        ]);

        // Fetch all HODs
        const hodPromises = departments.map(dept =>
          axios.get(`${API_BASE_URL}/${dept.toLowerCase()}-hod?populate=*`)
        );
        const hodResponses = await Promise.all(hodPromises);

        const hodsData = {};
        hodResponses.forEach((res, index) => {
          hodsData[departments[index]] = res.data.data;
        });

        setPrincipal(principalRes.data.data);
        setCoordinator(coordinatorRes.data.data);
        setHods(hodsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getPhotoUrl = (photoData, memberName = "Unknown") => {
    try {
      if (!photoData || !photoData.url) {
        return "/placeholder.jpg"; // Use a default placeholder image
      }
      return `${STRAPI_BASE_URL}${photoData.url}`;
    } catch (error) {
      console.error(`Error processing photo for ${memberName}:`, error);
      return "/placeholder.jpg";
    }
  };

  const handleDepartmentClick = (dept) => {
    setSelectedDepartment(dept);
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className="head-box-tender">
        <Col>
          <h1 className="text-left">Principal, Coordinator & HODs</h1>
        </Col>
      </Row>

      <Row className="left-index-tender">
        <Col md={3} xs={12} className="left-sidebar-tender">
          <Card className="left-nav-tender">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-tender-01">
                <Link to="/principalHods">Principal, Coordinator & HODs</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/studentSection">Student Section</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
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
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>Error loading data: {error.message}</p>
          ) : (
            <div className="faculty-container">
              {/* Principal Section */}
              <h3 className="faculty-heading">Principal</h3>
              {principal ? (
                <div className="faculty-card">
                  <img
                    src={getPhotoUrl(principal.photo, principal.name)}
                    alt={principal.name || "Principal"}
                    className="faculty-photo"
                  />
                  <div className="faculty-info">
                    <h2>{principal.name || "N/A"}</h2>
                    <h3>Principal</h3>
                    <h3>Education: {principal.education || "N/A"}</h3>
                    <h3>Contact: {principal.contact || "N/A"}</h3>
                    <a href={`mailto:${principal.email}`} className="faculty-email">
                      {principal.email || "N/A"}
                    </a>
                  </div>
                </div>
              ) : (
                <p>No Principal data found.</p>
              )}

              {/* Coordinator Section */}
              <h3 className="faculty-heading">GUG Coordinator</h3>
              {coordinator ? (
                <div className="faculty-card">
                  <img
                    src={getPhotoUrl(coordinator.photo, coordinator.name)}
                    alt={coordinator.name || "Coordinator"}
                    className="faculty-photo"
                  />
                  <div className="faculty-info">
                    <h2>{coordinator.name || "N/A"}</h2>
                    <h3>GUG Coordinator</h3>
                    <h3>Education: {coordinator.education || "N/A"}</h3>
                    <h3>Contact: {coordinator.contact || "N/A"}</h3>
                    <a href={`mailto:${coordinator.email}`} className="faculty-email">
                      {coordinator.email || "N/A"}
                    </a>
                  </div>
                </div>
              ) : (
                <p>No Coordinator data found.</p>
              )}

              {/* HODs Section */}
              <h3 className="faculty-heading">Head of Departments</h3>
              <div className="department-list">
                {departments.map(dept => (
                  <button
                    key={dept}
                    onClick={() => handleDepartmentClick(dept)}
                    className="department-btn"
                  >
                    {dept} Engineering
                  </button>
                ))}
              </div>

              {selectedDepartment && hods[selectedDepartment] && (
                <div className="faculty-card">
                  <img
                    src={getPhotoUrl(hods[selectedDepartment].photo, hods[selectedDepartment].name)}
                    alt={hods[selectedDepartment].name || `${selectedDepartment} HOD`}
                    className="faculty-photo"
                  />
                  <div className="faculty-info">
                    <h2>{hods[selectedDepartment].name || "N/A"}</h2>
                    <h3>Head of {selectedDepartment} Engineering</h3>
                    <h3>Education: {hods[selectedDepartment].education || "N/A"}</h3>
                    <h3>Contact: {hods[selectedDepartment].contact || "N/A"}</h3>
                    <a 
                      href={`mailto:${hods[selectedDepartment].email}`} 
                      className="faculty-email"
                    >
                      {hods[selectedDepartment].email || "N/A"}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PrincipalHods;
