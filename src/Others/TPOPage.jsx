import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Table, Carousel, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./TPOPage.css";

const STRAPI_URL = "http://localhost:1337/api/";
const BASE_URL = "http://localhost:1337";

const TPOPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");
  const [newsOffset, setNewsOffset] = useState(0); // State to track the current offset for news items
  const NEWS_PER_PAGE = 3; // Number of news items to display at a time

  useEffect(() => {
    const collectionEndpoints = [
      "placement-records", "training-programs", "tpo-photo-galleries",
      "tpo-activities", "tpo-internships", "tpo-reports", "tpo-brochures",
      "tpo-news", "tpo-mous", "tpo-placement-policies", "tpo-nocs"
    ];

    const fetchData = async () => {
      try {
        const results = await Promise.all([
          axios.get(`${STRAPI_URL}tpo-desk?populate=*`).then((res) => ({
            "tpo-desk": res.data.data
          })),
          ...collectionEndpoints.map(async (endpoint) => {
            const response = await axios.get(`${STRAPI_URL}${endpoint}?populate=*`);
            const items = response.data.data || [];
            console.log(`Data for ${endpoint}:`, items);
            return { [endpoint]: items };
          })
        ]);
        const fetchedData = Object.assign({}, ...results);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data from Strapi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getUniqueYears = () => {
    if (!Array.isArray(data["tpo-photo-galleries"])) return [];
    const years = data["tpo-photo-galleries"]
      .map((photo) => photo.year)
      .filter((year, index, self) => year && self.indexOf(year) === index);
    return years.sort((a, b) => b - a);
  };

  // Helper function to render rich text description
  const renderDescription = (description) => {
    if (!description) return "No description available";
    if (!Array.isArray(description)) return "Invalid description format";

    return description.map((paragraph, index) => {
      if (!paragraph.children || !Array.isArray(paragraph.children)) {
        return (
          <Card.Text key={index} className="text-muted text-justify">
            No description available
          </Card.Text>
        );
      }
      const textContent = paragraph.children.map((child) => child.text || "").join(" ");
      return (
        <Card.Text key={index} className="text-muted text-justify">
          {textContent || "No description available"}
        </Card.Text>
      );
    });
  };

  // Navigation handlers for news items
  const handlePrevNews = () => {
    setNewsOffset((prev) => Math.max(prev - NEWS_PER_PAGE, 0));
  };

  const handleNextNews = () => {
    const totalNews = data["tpo-news"]?.length || 0;
    setNewsOffset((prev) => Math.min(prev + NEWS_PER_PAGE, totalNews - NEWS_PER_PAGE));
  };

  return (
    <Container fluid className="p-0 tpo-container">
      <Row className="header-design-tech text-white py-3 py-md-4">
        <Col className="header-align-tech d-flex align-items-center justify-content-center justify-content-md-start">
          <h1 className="display-5 fw-bold mb-0">TRAINING AND PLACEMENT CELL</h1>
        </Col>
      </Row>

      <Row className="g-0">
        <Col xs={12} md={3} className="left-sidebar p-2 p-md-3">
          <Card className="left-nav shadow-sm rounded">
            <ListGroup variant="flush">
              {[
                { name: "TPO Desk", id: "tpo-desk" },
                { name: "Placement Records", id: "placement-records" },
                { name: "Training & Programs", id: "training-programs" },
                { name: "TPO Photo Gallery", id: "tpo-photo-gallery" },
                { name: "TPO Activities", id: "tpo-activities" },
                { name: "TPO Internships", id: "tpo-internships" },
                { name: "TPO Reports", id: "tpo-reports" },
                { name: "TPO Brochure", id: "tpo-brochures" },
                { name: "TPO News", id: "tpo-news" },
                { name: "TPO MoUs", id: "tpo-mous" },
                { name: "TPO Placement Policy", id: "tpo-placement-policies" },
                { name: "TPO NOC", id: "tpo-nocs" }
              ].map((item, index) => (
                <ListGroup.Item
                  key={index}
                  className="left-nav-item py-2 py-md-3 fw-medium"
                  onClick={() => handleScroll(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  {item.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col xs={12} md={9} className="content-section p-2 p-md-4">
          <div className="content-wrapper">
            <section id="tpo-desk" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO Desk</h2>
              {data["tpo-desk"] && (
                <Card className="shadow-sm rounded-3 border-0">
                  <Row className="g-0 flex-column flex-md-row">
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center p-3">
                      {(() => {
                        const photoUrl = data["tpo-desk"]?.photo?.url
                          ? `${BASE_URL}${data["tpo-desk"].photo.url}`
                          : "https://via.placeholder.com/200x200?text=No+Image";
                        return (
                          <Card.Img
                            src={photoUrl}
                            alt="TPO Photo"
                            className="img-fluid profile-img full-size-img"
                          />
                        );
                      })()}
                    </Col>
                    <Col xs={12} md={8}>
                      <Card.Body className="p-3 p-md-4">
                        <Card.Title className="fw-bold fs-4 fs-md-3">{data["tpo-desk"]?.name || "N/A"}</Card.Title>
                        <Card.Subtitle className="mb-2 mb-md-3 text-muted fs-6 fs-md-5">
                          {data["tpo-desk"]?.designation || "N/A"}
                        </Card.Subtitle>
                        {renderDescription(data["tpo-desk"]?.description)}
                        <p className="mt-2 mt-md-3">
                          <strong>Email:</strong>{" "}
                          <a href={`mailto:${data["tpo-desk"]?.email}`} className="text-primary">
                            {data["tpo-desk"]?.email || "N/A"}
                          </a>
                        </p>
                        <p>
                          <strong>Phone:</strong>{" "}
                          <a href={`tel:${data["tpo-desk"]?.phone}`} className="text-primary">
                            {data["tpo-desk"]?.phone || "N/A"}
                          </a>
                        </p>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              )}
            </section>

            <section id="placement-records" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">Placement Records</h2>
              <Table striped bordered hover responsive className="shadow-sm rounded-3">
                <thead className="table-dark">
                  <tr>
                    <th>S.No</th>
                    <th>Year/Batch</th>
                    <th>No. of Students Placed</th>
                    <th>Click Here</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center">Loading placement records...</td>
                    </tr>
                  ) : Array.isArray(data["placement-records"]) ? (
                    data["placement-records"].length > 0 ? (
                      data["placement-records"]
                        .filter(record => record && record.year)
                        .sort((a, b) => (b.year || "").localeCompare(a.year || ""))
                        .map((record, index) => (
                          <tr key={record.id || index}>
                            <td>{index + 1}</td>
                            <td>{record.year || "N/A"}</td>
                            <td>{record.no_of_students_placed || "N/A"}</td>
                            <td>
                              {record.pdf?.url ? (
                                <a
                                  href={`${BASE_URL}${record.pdf.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-primary"
                                >
                                  View PDF
                                </a>
                              ) : (
                                "N/A"
                              )}
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">No placement records available</td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">Error: Invalid placement records data</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </section>

            <section id="training-programs" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">Training and Programs</h2>
              <Table striped bordered hover responsive className="shadow-sm rounded-3">
                <thead className="table-dark">
                  <tr>
                    <th>S.No</th>
                    <th>Academic Year</th>
                    <th>Components</th>
                    <th>Beneficiary</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center">Loading training programs...</td>
                    </tr>
                  ) : Array.isArray(data["training-programs"]) && data["training-programs"].length > 0 ? (
                    data["training-programs"]
                      .filter(record => record && record.academic_year)
                      .sort((a, b) => {
                        const yearA = a.academic_year.match(/\d{4}/) ? parseInt(a.academic_year.match(/\d{4}/)[0]) : 0;
                        const yearB = b.academic_year.match(/\d{4}/) ? parseInt(b.academic_year.match(/\d{4}/)[0]) : 0;
                        return yearB - yearA;
                      })
                      .map((record, index) => (
                        <tr key={record.id || index}>
                          <td>{index + 1}</td>
                          <td>{record.academic_year || "N/A"}</td>
                          <td>{record.components || "N/A"}</td>
                          <td>{record.beneficiary || "N/A"}</td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">No training programs available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </section>

            <section id="tpo-photo-gallery" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO Photo Gallery</h2>
              {loading ? (
                <p className="text-muted text-center">Loading photo gallery...</p>
              ) : Array.isArray(data["tpo-photo-galleries"]) && data["tpo-photo-galleries"].length > 0 ? (
                <>
                  <Form.Group className="mb-3 mb-md-4 year-select" controlId="yearSelect">
                    <Form.Label className="fw-medium">Select Year:</Form.Label>
                    <Form.Select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="shadow-sm"
                    >
                      <option value="">All Years</option>
                      {getUniqueYears().map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Carousel className="shadow-sm rounded-3 gallery-carousel">
                    {data["tpo-photo-galleries"]
                      .filter((photo) => !selectedYear || photo.year === selectedYear)
                      .flatMap((photo) =>
                        photo.image.map((img, index) => (
                          <Carousel.Item key={`${photo.id}-${index}`}>
                            <img
                              className="d-block w-100 carousel-img"
                              src={img.url
                                ? `${BASE_URL}${img.url}`
                                : "https://via.placeholder.com/800x400?text=No+Image"}
                              alt={img.caption || `Photo ${index + 1}`}
                            />
                            <Carousel.Caption className="carousel-caption-custom">
                              <h3>{photo.year}</h3>
                            </Carousel.Caption>
                          </Carousel.Item>
                        ))
                      )}
                  </Carousel>
                </>
              ) : (
                <p className="text-muted text-center">No photos available</p>
              )}
            </section>

            <section id="tpo-activities" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO Activities</h2>
              {loading ? (
                <p className="text-muted text-center">Loading activities...</p>
              ) : Array.isArray(data["tpo-activities"]) ? (
                data["tpo-activities"].length > 0 ? (
                  <ul className="list-group shadow-sm rounded-3 activity-list">
                    {data["tpo-activities"].map((activity, index) => (
                      <li key={activity.id || index} className="list-group-item py-2 py-md-3">
                        {activity.pdf?.url ? (
                          <a
                            href={`${BASE_URL}${activity.pdf.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary fw-medium"
                          >
                            {activity.title || "Activity"}
                          </a>
                        ) : (
                          <span className="text-muted">{activity.title || "Activity"} (No PDF available)</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted text-center">No activities available</p>
                )
              ) : (
                <p className="text-muted text-center">Error: Invalid activities data</p>
              )}
            </section>

            <section id="tpo-internships" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO Internships</h2>
              <Table striped bordered hover responsive className="shadow-sm rounded-3">
                <thead className="table-dark">
                  <tr>
                    <th>S.No</th>
                    <th>Department</th>
                    <th>No. of Students Completed Training</th>
                    <th>Click Here</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center">Loading internships...</td>
                    </tr>
                  ) : Array.isArray(data["tpo-internships"]) ? (
                    data["tpo-internships"].length > 0 ? (
                      data["tpo-internships"]
                        .filter(intern => intern && intern.students_completed)
                        .sort((a, b) => (b.students_completed || 0) - (a.students_completed || 0))
                        .map((intern, index) => (
                          <tr key={intern.id || index}>
                            <td>{index + 1}</td>
                            <td>{intern.department || "N/A"}</td>
                            <td>{intern.students_completed || "N/A"}</td>
                            <td>
                              {intern.pdf?.url ? (
                                <a
                                  href={`${BASE_URL}${intern.pdf.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-primary"
                                >
                                  View PDF
                                </a>
                              ) : (
                                "N/A"
                              )}
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">No internships available</td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">Error: Invalid internships data</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </section>

            <section id="tpo-news" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO News</h2>
              {loading ? (
                <p className="text-muted text-center">Loading news...</p>
              ) : Array.isArray(data["tpo-news"]) && data["tpo-news"].length > 0 ? (
                <div className="news-slider">
                  <Row className="align-items-center">
                    <Col xs={1} className="text-center">
                      <Button
                        variant="outline-primary"
                        onClick={handlePrevNews}
                        disabled={newsOffset === 0}
                        className="news-arrow"
                      >
                        &larr;
                      </Button>
                    </Col>
                    <Col xs={10}>
                      <Row className="g-3">
                        {data["tpo-news"]
                          .slice(newsOffset, newsOffset + NEWS_PER_PAGE)
                          .map((news, index) => (
                            <Col xs={12} md={4} key={news.id || index}>
                              <Card className="shadow-sm rounded-3 h-100 news-card">
                                <Card.Img
                                  variant="top"
                                  src={news.image?.url
                                    ? `${BASE_URL}${news.image.url}`
                                    : "https://via.placeholder.com/300x200?text=No+Image"}
                                  alt={news.title || "News"}
                                  className="news-img"
                                />
                                <Card.Body>
                                  <Card.Title className="fw-bold">{news.title || "No Title"}</Card.Title>
                                  {renderDescription(news.description)}
                                </Card.Body>
                              </Card>
                            </Col>
                          ))}
                      </Row>
                    </Col>
                    <Col xs={1} className="text-center">
                      <Button
                        variant="outline-primary"
                        onClick={handleNextNews}
                        disabled={newsOffset + NEWS_PER_PAGE >= data["tpo-news"].length}
                        className="news-arrow"
                      >
                        &rarr;
                      </Button>
                    </Col>
                  </Row>
                </div>
              ) : (
                <p className="text-muted text-center">No news available</p>
              )}
            </section>

            {["tpo-brochures", "tpo-placement-policies", "tpo-nocs"].map((section) => (
              <section id={section} key={section} className="section-card mb-4 mb-md-5">
                <h2 className="section-title fw-bold mb-3 mb-md-4">{section.replace(/-/g, " ").toUpperCase()}</h2>
                {loading ? (
                  <p className="text-muted text-center">Loading documents...</p>
                ) : Array.isArray(data[section]) ? (
                  data[section].length > 0 ? (
                    <ul className="list-group shadow-sm rounded-3 document-list">
                      {data[section].map((item, index) => (
                        <li key={item.id || index} className="list-group-item py-2 py-md-3">
                          {item.pdf?.url || item.image?.url ? (
                            <a
                              href={item.pdf?.url ? `${BASE_URL}${item.pdf.url}` : `${BASE_URL}${item.image.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary fw-medium"
                            >
                              {item.title || "Document"}
                            </a>
                          ) : (
                            <span className="text-muted">{item.title || "Document"} (No file available)</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted text-center">No documents available</p>
                  )
                ) : (
                  <p className="text-muted text-center">Error: Invalid document data</p>
                )}
              </section>
            ))}

            <section id="tpo-mous" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO MOUs</h2>
              {loading ? (
                <p className="text-muted text-center">Loading MOUs...</p>
              ) : Array.isArray(data["tpo-mous"]) ? (
                data["tpo-mous"].length > 0 ? (
                  <Table striped bordered hover responsive className="shadow-sm rounded-3">
                    <thead className="table-dark">
                      <tr>
                        <th>S.No.</th>
                        <th>Name of Industry</th>
                        <th>Date of Signing MoU</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data["tpo-mous"]
                        .filter(mou => mou && mou.date)
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map((mou, index) => (
                          <tr key={mou.id || index}>
                            <td>{index + 1}</td>
                            <td>{mou.name || "N/A"}</td>
                            <td>{mou.date || "N/A"}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                ) : (
                  <p className="text-muted text-center">No MOUs available</p>
                )
              ) : (
                <p className="text-muted text-center">Error: Invalid MOUs data</p>
              )}
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TPOPage;