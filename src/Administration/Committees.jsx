import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Table } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Committees.css";

const Committees = () => {
  const [committeeData, setCommitteeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;

  const location = useLocation();

  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-committees?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch committee data");
        }
        const result = await response.json();
        const sortedData = Array.isArray(result.data)
          ? result.data.sort((a, b) => {
              const dateA = new Date(a.committee_date);
              const dateB = new Date(b.committee_date);
              return dateB - dateA;
            })
          : [];

        setCommitteeData(sortedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCommitteeData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="head-box-committee-clg">
          <Col>
            <h1 className="text-left">COMMITTEES</h1>
          </Col>
        </Row>

        <Row className="left-index-committee-clg">
          {/* Left Sidebar */}
          <Col md={2} xs={12} className="left-sidebar-committee-clg">
            <Card className="left-nav-committee-clg">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/principalHods"
                    className={location.pathname === "/principalHods" ? "active-link" : ""}
                  >
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/studentSection"
                    className={location.pathname === "/studentSection" ? "active-link" : ""}
                  >
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/office"
                    className={location.pathname === "/office" ? "active-link" : ""}
                  >
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg-01">
                  <Link
                    to="/committees"
                    className={location.pathname === "/committees" ? "active-link" : ""}
                  >
                    Committees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/tenders"
                    className={location.pathname === "/tenders" ? "active-link" : ""}
                  >
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/login"
                    className={location.pathname === "/login" ? "active-link" : ""}
                  >
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Main Content */}
          <Col md={9} xs={12} className="committee-div">
            <div className="head-right-top-committee-clg">
              <h3 style={{ color: "#102C57", backgroundColor: "rgb(234,219,200)", padding: "10px" }}>
                GCOEC Committees
              </h3>
            </div>

            <div className="committee-clg-table-cont">
              <Table className="committee-clg-table" striped bordered hover>
                <thead className="table-header-committee-clg">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name of Committees</th>
                    <th>Dated</th>
                    <th>Official Circular/Form</th>
                    <th>Incharge</th>
                  </tr>
                </thead>
                <tbody className="table-body-committee-clg">
                  {committeeData.map((committee, index) => (
                    <tr key={committee.id || index}>
                      <td>{index + 1}</td>
                      <td className="name-of-committees">{committee.committee_name || "N/A"}</td>
                      <td>{committee.committee_date || "N/A"}</td>
                      <td className="table-row-committee-clg">
                        {committee.official_circular?.url ? (
                          <a
                            href={committee.official_circular.url} // Direct Cloudinary URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="document-link"
                          >
                            <i className="bi bi-file-earmark-pdf"></i> Circular
                          </a>
                        ) : (
                          "N/A"
                        )}
                      </td>
                      <td>{committee.committee_incharge || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Committees;