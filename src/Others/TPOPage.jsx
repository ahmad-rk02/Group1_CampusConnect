import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup, Table, Carousel, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./TPOPage.css";
import { useNavigate } from "react-router-dom";

// Use environment variables from .env
const STRAPI_API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;
const STRAPI_MEDIA_BASE_URL = import.meta.env.VITE_STRAPI_MEDIA_BASE_URL;

const TPOPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("");
  const [newsOffset, setNewsOffset] = useState(0);
  const NEWS_PER_PAGE = 3;

  const navigate = useNavigate();

  // State for feedback form
  const [feedback, setFeedback] = useState({
    name: "",
    department: "",
    year: "",
    prn: "",
    message: ""
  });
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);
  const [feedbackError, setFeedbackError] = useState(null);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [employerFeedback, setEmployerFeedback] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    message: ""
  });
  const [employerFeedbackSubmitting, setEmployerFeedbackSubmitting] = useState(false);

  useEffect(() => {
    const collectionEndpoints = [
      "placement-records", "training-programs", "tpo-photo-galleries",
      "tpo-activities", "tpo-internships", "tpo-reports", "tpo-brochures",
      "tpo-news", "tpo-mous", "tpo-placement-policies", "tpo-nocs", "tpo-staffs", "tpo-offices"
    ];

    const fetchData = async () => {
      try {
        const results = await Promise.all([
          axios
            .get(`${STRAPI_API_BASE_URL}/api/tpo-desk?populate=*`)
            .then((res) => {
              console.log("Raw tpo-desk response:", res.data);
              const tpoDeskData = res.data.data?.attributes || res.data.data || null;
              console.log("Processed tpo-desk data:", tpoDeskData);
              return { "tpo-desk": tpoDeskData };
            })
            .catch((err) => {
              console.error("Error fetching tpo-desk:", err);
              return { "tpo-desk": null };
            }),
          ...collectionEndpoints.map(async (endpoint) => {
            try {
              const response = await axios.get(`${STRAPI_API_BASE_URL}/api/${endpoint}?populate=*`);
              const items = Array.isArray(response.data.data)
                ? response.data.data.map((item) => item.attributes || item)
                : [];
              console.log(`Data for ${endpoint}:`, items);
              return { [endpoint]: items };
            } catch (err) {
              console.error(`Error fetching ${endpoint}:`, err);
              return { [endpoint]: [] };
            }
          })
        ]);
        const fetchedData = Object.assign({}, ...results);
        console.log("Final fetched data:", fetchedData);
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

  const renderDescription = (description) => {
    if (!description) return <Card.Text className="text-muted text-justify">No description available</Card.Text>;
    if (!Array.isArray(description)) return <Card.Text className="text-muted text-justify">Invalid description format</Card.Text>;
    return description.map((paragraph, index) => {
      if (!paragraph?.children || !Array.isArray(paragraph.children)) {
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

  const getMediaUrl = (url) => {
    if (!url) return "N/A";
    return url.startsWith("http://") || url.startsWith("https://") ? url : `${STRAPI_MEDIA_BASE_URL}${url}`;
  };

  const handlePrevNews = () => {
    setNewsOffset((prev) => Math.max(prev - 1, 0));
  };

  const handleNextNews = () => {
    const totalNews = data["tpo-news"]?.length || 0;
    setNewsOffset((prev) => Math.min(prev + 1, totalNews - 1));
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const validatePRN = (prn) => {
    const prnRegex = /^\d{16}$/;
    return prnRegex.test(prn);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setFeedbackSubmitting(true);
    setFeedbackError(null);
    setFeedbackSuccess(false);

    if (!validatePRN(feedback.prn)) {
      setFeedbackError("PRN must be exactly 16 digits.");
      setFeedbackSubmitting(false);
      setShowModal(true);
      return;
    }

    try {
      const response = await axios.post(`${STRAPI_API_BASE_URL}/api/tpo-feedbacks`, {
        data: {
          name: feedback.name,
          department: feedback.department,
          year: feedback.year,
          prn: feedback.prn,
          message: feedback.message
        }
      });
      console.log("Feedback submitted successfully:", response.data);
      setFeedbackSuccess(true);
      setFeedback({ name: "", department: "", year: "", prn: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting feedback to Strapi:", error);
      setFeedbackError("Failed to submit feedback. Please try again.");
      setShowModal(true);
    } finally {
      setFeedbackSubmitting(false);
    }
  };

  const handleEmployerFeedbackChange = (e) => {
    const { name, value } = e.target;
    setEmployerFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmployerFeedbackSubmit = async (e) => {
    e.preventDefault();
    setEmployerFeedbackSubmitting(true);
    setFeedbackError(null);
    setFeedbackSuccess(false);

    try {
      const response = await axios.post(`${STRAPI_API_BASE_URL}/api/employer-feedbacks`, {
        data: {
          name: employerFeedback.name,
          company: employerFeedback.company,
          designation: employerFeedback.designation,
          email: employerFeedback.email,
          message: employerFeedback.message
        }
      });
      console.log("Employer feedback submitted successfully:", response.data);
      setFeedbackSuccess(true);
      setEmployerFeedback({ name: "", company: "", designation: "", email: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting employer feedback to Strapi:", error);
      setFeedbackError("Failed to submit feedback. Please try again.");
      setShowModal(true);
    } finally {
      setEmployerFeedbackSubmitting(false);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container fluid className="p-0 tpo-container">
      <Row className="header-design-tech text-white py-3 py-md-4">
        <Col className="header-align-tech d-flex align-items-center justify-content-center justify-content-md-start">
          <h1 className="display-5 fw-bold mb-0">TRAINING & PLACEMENT CELL</h1>
        </Col>
      </Row>

      <Row className="g-0">
        <Col xs={12} md={3} className="left-sidebar p-2 p-md-3">
          <Card className="left-nav">
            <ListGroup variant="flush">
              {[
                { name: "TPO Desk", id: "tpo-desk" },
                { name: "Placement Records", id: "placement-records" },
                { name: "Training & Programs", id: "training-programs" },
                { name: "T&P Photo Gallery", id: "tpo-photo-gallery" },
                { name: "T&P Activities", id: "tpo-activities" },
                { name: "T&P Internships", id: "tpo-internships" },
                { name: "T&P Reports", id: "tpo-reports" },
                { name: "T&P Brochure", id: "tpo-brochures" },
                { name: "T&P News", id: "tpo-news" },
                { name: "T&P MoUs", id: "tpo-mous" },
                { name: "T&P Placement Policy", id: "tpo-placement-policies" },
                { name: "T&P NOC", id: "tpo-nocs" },
                { name: "T&P Feedback", id: "tpo-feedback" },
                { name: "Employer Feedback", id: "employer-feedback" },
                { name: "T&P Contact", id: "tpo-contact" }
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
              {data["tpo-desk"] ? (
                <Card className="shadow-sm rounded-3 border-0">
                  <Row className="g-0 flex-column flex-md-row">
                    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center p-3">
                      {getMediaUrl(data["tpo-desk"]?.photo?.url) !== "N/A" ? (
                        <Card.Img
                          src={getMediaUrl(data["tpo-desk"]?.photo?.url)}
                          alt="TPO Photo"
                          className="img-fluid profile-img full-size-img"
                        />
                      ) : (
                        <p className="text-muted">N/A</p>
                      )}
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
              ) : (
                <p className="text-muted text-center">No TPO desk data available</p>
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
                  ) : Array.isArray(data["placement-records"]) && data["placement-records"].length > 0 ? (
                    data["placement-records"]
                      .filter((record) => record?.year)
                      .sort((a, b) => {
                        const yearA = parseInt(a.year.match(/\d{4}/)?.[0]) || 0;
                        const yearB = parseInt(b.year.match(/\d{4}/)?.[0]) || 0;
                        return yearB - yearA;
                      })
                      .map((record, index) => (
                        <tr key={record.id || index}>
                          <td>{index + 1}</td>
                          <td>{record.year || "N/A"}</td>
                          <td>{record.no_of_students_placed || "N/A"}</td>
                          <td>
                            {getMediaUrl(record.pdf?.url) !== "N/A" ? (
                              <a
                                href={getMediaUrl(record.pdf?.url)}
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
                      .filter((record) => record?.academic_year)
                      .sort((a, b) => {
                        const yearA = parseInt(a.academic_year.match(/\d{4}/)?.[0]) || 0;
                        const yearB = parseInt(b.academic_year.match(/\d{4}/)?.[0]) || 0;
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
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P Photo Gallery</h2>
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
                        Array.isArray(photo.image?.data) && photo.image.data.length > 0
                          ? photo.image.data.map((img, index) => (
                              <Carousel.Item key={`${photo.id}-${index}`}>
                                {getMediaUrl(img.attributes?.url) !== "N/A" ? (
                                  <img
                                    className="d-block w-100 carousel-img"
                                    src={getMediaUrl(img.attributes?.url)}
                                    alt={img.attributes?.caption || `Photo ${index + 1}`}
                                  />
                                ) : (
                                  <div className="d-block w-100 carousel-img text-center">
                                    <p className="text-muted">N/A</p>
                                  </div>
                                )}
                              </Carousel.Item>
                            ))
                          : []
                      ).length > 0 ? (
                        data["tpo-photo-galleries"]
                          .filter((photo) => !selectedYear || photo.year === selectedYear)
                          .flatMap((photo) =>
                            Array.isArray(photo.image?.data) && photo.image.data.length > 0
                              ? photo.image.data.map((img, index) => (
                                  <Carousel.Item key={`${photo.id}-${index}`}>
                                    {getMediaUrl(img.attributes?.url) !== "N/A" ? (
                                      <img
                                        className="d-block w-100 carousel-img"
                                        src={getMediaUrl(img.attributes?.url)}
                                        alt={img.attributes?.caption || `Photo ${index + 1}`}
                                      />
                                    ) : (
                                      <div className="d-block w-100 carousel-img text-center">
                                        <p className="text-muted">N/A</p>
                                      </div>
                                    )}
                                  </Carousel.Item>
                                ))
                              : []
                          )
                      ) : (
                        <div className="text-center p-3">
                          <p className="text-muted">No images available for this year</p>
                        </div>
                      )}
                  </Carousel>
                </>
              ) : (
                <p className="text-muted text-center">No photos available</p>
              )}
            </section>

            <section id="tpo-activities" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P Activities</h2>
              {loading ? (
                <p className="text-muted text-center">Loading activities...</p>
              ) : Array.isArray(data["tpo-activities"]) && data["tpo-activities"].length > 0 ? (
                <ul className="list-group shadow-sm rounded-3 activity-list">
                  {data["tpo-activities"]
                    .filter((activity) => activity?.title)
                    .sort((a, b) => {
                      const getYear = (title) => {
                        const match = title?.match(/\b(\d{4})-\d{4}\b/);
                        return match ? parseInt(match[1]) : 0;
                      };
                      return getYear(b.title) - getYear(a.title);
                    })
                    .map((activity, index) => (
                      <li key={activity.id || index} className="list-group-item py-2 py-md-3">
                        {getMediaUrl(activity.pdf?.url) !== "N/A" ? (
                          <a
                            href={getMediaUrl(activity.pdf?.url)}
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
              )}
            </section>

            <section id="tpo-internships" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P Internships</h2>
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
                  ) : Array.isArray(data["tpo-internships"]) && data["tpo-internships"].length > 0 ? (
                    data["tpo-internships"]
                      .filter((intern) => intern?.students_completed)
                      .sort((a, b) => (b.students_completed || 0) - (a.students_completed || 0))
                      .map((intern, index) => (
                        <tr key={intern.id || index}>
                          <td>{index + 1}</td>
                          <td>{intern.department || "N/A"}</td>
                          <td>{intern.students_completed || "N/A"}</td>
                          <td>
                            {getMediaUrl(intern.pdf?.url) !== "N/A" ? (
                              <a
                                href={getMediaUrl(intern.pdf?.url)}
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
                  )}
                </tbody>
              </Table>
            </section>

            <section id="tpo-news" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P News</h2>
              {loading ? (
                <p className="text-muted text-center">Loading news...</p>
              ) : Array.isArray(data["tpo-news"]) && data["tpo-news"].length > 0 ? (
                <div className="news-slider-container">
                  <div className="news-slider-wrapper">
                    <button
                      className="news-arrow prev-arrow"
                      onClick={handlePrevNews}
                      disabled={newsOffset === 0}
                      aria-label="Previous news"
                    >
                      ←
                    </button>

                    <div className="news-slider-content">
                      {data["tpo-news"]
                        .slice(newsOffset, newsOffset + 1)
                        .map((news, index) => (
                          <div className="news-card-container" key={news.id || index}>
                            <Card className="shadow-sm rounded-3 h-100 news-card">
                              {getMediaUrl(news.image?.url) !== "N/A" ? (
                                <Card.Img
                                  variant="top"
                                  src={getMediaUrl(news.image?.url)}
                                  alt={news.title || "News image"}
                                  className="news-img"
                                />
                              ) : (
                                <div className="text-center p-3">
                                  <p className="text-muted">N/A</p>
                                </div>
                              )}
                              <Card.Body>
                                <Card.Title className="fw-bold mb-2 mb-md-3">
                                  {news.title || "No Title"}
                                </Card.Title>
                                {renderDescription(news.description)}
                              </Card.Body>
                            </Card>
                          </div>
                        ))}
                    </div>

                    <button
                      className="news-arrow next-arrow"
                      onClick={handleNextNews}
                      disabled={newsOffset + 1 >= data["tpo-news"].length}
                      aria-label="Next news"
                    >
                      →
                    </button>
                  </div>

                  {data["tpo-news"].length > 1 && (
                    <div className="news-dots">
                      {data["tpo-news"].map((_, index) => (
                        <span
                          key={index}
                          className={`dot ${index === newsOffset ? "active" : ""}`}
                          onClick={() => setNewsOffset(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-muted text-center">No news available</p>
              )}
            </section>

            <section id="tpo-brochures" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P Brochures</h2>
              {loading ? (
                <p className="text-muted text-center">Loading documents...</p>
              ) : Array.isArray(data["tpo-brochures"]) && data["tpo-brochures"].length > 0 ? (
                <ul className="list-group shadow-sm rounded-3 document-list">
                  {data["tpo-brochures"]
                    .filter((item) => item?.title)
                    .sort((a, b) => {
                      const extractStartYear = (title) => {
                        const match = title.match(/(\d{4})[-–](\d{2,4})/) || title.match(/(\d{2})[-–](\d{2})/);
                        if (match) {
                          let year = match[1];
                          if (year.length === 2) {
                            year = parseInt(year) >= 50 ? `19${year}` : `20${year}`;
                          }
                          return parseInt(year);
                        }
                        return 0;
                      };
                      return extractStartYear(b.title) - extractStartYear(a.title);
                    })
                    .map((item, index) => (
                      <li key={item.id || index} className="list-group-item py-2 py-md-3">
                        {getMediaUrl(item.pdf?.url || item.image?.url) !== "N/A" ? (
                          <a
                            href={getMediaUrl(item.pdf?.url || item.image?.url)}
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
              )}
            </section>

            <section id="tpo-placement-policies" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P Policy</h2>
              {loading ? (
                <p className="text-muted text-center">Loading documents...</p>
              ) : Array.isArray(data["tpo-placement-policies"]) && data["tpo-placement-policies"].length > 0 ? (
                <ul className="list-group shadow-sm rounded-3 document-list">
                  {data["tpo-placement-policies"]
                    .filter((item) => item?.title)
                    .sort((a, b) => (b.title || "").localeCompare(a.title || ""))
                    .map((item, index) => (
                      <li key={item.id || index} className="list-group-item py-2 py-md-3">
                        {getMediaUrl(item.pdf?.url || item.image?.url) !== "N/A" ? (
                          <a
                            href={getMediaUrl(item.pdf?.url || item.image?.url)}
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
              )}
            </section>

            <section id="tpo-nocs" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P NOCs</h2>
              {loading ? (
                <p className="text-muted text-center">Loading documents...</p>
              ) : Array.isArray(data["tpo-nocs"]) && data["tpo-nocs"].length > 0 ? (
                <ul className="list-group shadow-sm rounded-3 document-list">
                  {data["tpo-nocs"]
                    .filter((item) => item?.title)
                    .map((item, index) => (
                      <li key={item.id || index} className="list-group-item py-2 py-md-3">
                        {getMediaUrl(item.pdf?.url || item.image?.url) !== "N/A" ? (
                          <a
                            href={getMediaUrl(item.pdf?.url || item.image?.url)}
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
              )}
            </section>

            <section id="tpo-mous" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">T&P MOUs</h2>
              {loading ? (
                <p className="text-muted text-center">Loading MOUs...</p>
              ) : Array.isArray(data["tpo-mous"]) && data["tpo-mous"].length > 0 ? (
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
                      .filter((mou) => mou?.date)
                      .sort((a, b) => {
                        const parseDate = (str) => {
                          if (!str) return new Date(0);
                          const [day, month, year] = str.split("/");
                          return new Date(`${year}-${month}-${day}`);
                        };
                        return parseDate(b.date) - parseDate(a.date);
                      })
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
              )}
            </section>

            <section id="tpo-feedback" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">Student Feedback</h2>
              <Card className="shadow-sm rounded-3 border-0">
                <Card.Body className="p-3 p-md-4">
                  <Form onSubmit={handleFeedbackSubmit}>
                    <Row className="g-3">
                      <Col xs={12} md={6}>
                        <Form.Group controlId="feedbackName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={feedback.name}
                            onChange={handleFeedbackChange}
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="feedbackDepartment">
                          <Form.Label>Department</Form.Label>
                          <Form.Select
                            name="department"
                            value={feedback.department}
                            onChange={handleFeedbackChange}
                            required
                          >
                            <option value="">Select Department</option>
                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</option>
                            <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="feedbackYear">
                          <Form.Label>Year</Form.Label>
                          <Form.Select
                            name="year"
                            value={feedback.year}
                            onChange={handleFeedbackChange}
                            required
                          >
                            <option value="">Select Year</option>
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                            <option value="Final">Final</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="feedbackPRN">
                          <Form.Label>PRN</Form.Label>
                          <Form.Control
                            type="text"
                            name="prn"
                            value={feedback.prn}
                            onChange={handleFeedbackChange}
                            placeholder="Enter 16-digit PRN"
                            maxLength={16}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="feedbackMessage">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={feedback.message}
                            onChange={handleFeedbackChange}
                            placeholder="Enter your feedback"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="feedback-buttons">
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={feedbackSubmitting}
                          className="mt-3 feedback-form"
                        >
                          {feedbackSubmitting ? "Submitting..." : "Submit Feedback"}
                        </Button>
                        <Button
                          variant="primary"
                          className="mt-3 feedback-form ms-2"
                          onClick={() => navigate("/TPOstuAdmin")}
                        >
                          View Feedback
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </section>

            <section id="employer-feedback" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">Employer Feedback</h2>
              <Card className="shadow-sm rounded-3 border-0">
                <Card.Body className="p-3 p-md-4">
                  <Form onSubmit={handleEmployerFeedbackSubmit}>
                    <Row className="g-3">
                      <Col xs={12} md={6}>
                        <Form.Group controlId="employerName">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={employerFeedback.name}
                            onChange={handleEmployerFeedbackChange}
                            placeholder="Enter your name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="companyName">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={employerFeedback.company}
                            onChange={handleEmployerFeedbackChange}
                            placeholder="Enter company name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="designation">
                          <Form.Label>Designation</Form.Label>
                          <Form.Control
                            type="text"
                            name="designation"
                            value={employerFeedback.designation}
                            onChange={handleEmployerFeedbackChange}
                            placeholder="Enter your designation"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group controlId="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={employerFeedback.email}
                            onChange={handleEmployerFeedbackChange}
                            placeholder="Enter your email"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Form.Group controlId="feedbackMessage">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="message"
                            value={employerFeedback.message}
                            onChange={handleEmployerFeedbackChange}
                            placeholder="Enter your feedback"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} className="feedback-buttons">
                        <Button
                          variant="primary"
                          type="submit"
                          disabled={employerFeedbackSubmitting}
                          className="mt-3 feedback-form"
                        >
                          {employerFeedbackSubmitting ? "Submitting..." : "Submit Feedback"}
                        </Button>
                        <Button
                          variant="primary"
                          className="mt-3 feedback-form ms-2"
                          onClick={() => navigate("/TPOempAdmin")}
                        >
                          View Feedback
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </section>

            <section id="tpo-contact" className="section-card mb-4 mb-md-5">
              <h2 className="section-title fw-bold mb-3 mb-md-4">TPO Contact</h2>
              {loading ? (
                <p className="text-muted text-center">Loading contact details...</p>
              ) : (
                <>
                  <h3 className="fw-bold mb-3">T&P Staff</h3>
                  {Array.isArray(data["tpo-staffs"]) && data["tpo-staffs"].length > 0 ? (
                    <Row className="g-3">
                      {data["tpo-staffs"].map((staff, index) => (
                        <Col xs={12} md={6} key={staff.id || index}>
                          <Card className="shadow-sm rounded-3 border-0 h-100">
                            <Card.Body className="p-3">
                              <Card.Title className="fw-bold">{staff.name || "N/A"}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {staff.designation || "N/A"}
                              </Card.Subtitle>
                              <p><strong>Department:</strong> {staff.description || "N/A"}</p>
                              <p>
                                <strong>Email:</strong>{" "}
                                <a href={`mailto:${staff.email}`} className="text-primary">
                                  {staff.email || "N/A"}
                                </a>
                              </p>
                              <p>
                                <strong>Mobile:</strong>{" "}
                                <a href={`tel:${staff.mobile}`} className="text-primary">
                                  {staff.mobile || "N/A"}
                                </a>
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p className="text-muted text-center">No staff details available</p>
                  )}

                  <h3 className="fw-bold mb-3 mt-4">T&P Office</h3>
                  {Array.isArray(data["tpo-offices"]) && data["tpo-offices"].length > 0 ? (
                    data["tpo-offices"].map((office, index) => (
                      <Card key={office.id || index} className="shadow-sm rounded-3 border-0">
                        <Card.Body className="p-3">
                          <p>{office.room_details || "N/A"}</p>
                          <p>{office.institute_name || "N/A"}</p>
                          <p>
                            <strong>Phone:</strong>{" "}
                            <a href={`tel:${office.phone}`} className="text-primary">
                              {office.phone || "N/A"}
                            </a>
                          </p>
                          <p><strong>Fax:</strong> {office.fax || "N/A"}</p>
                          <p>
                            <strong>Principal Email:</strong>{" "}
                            <a href={`mailto:${office.principal_email}`} className="text-primary">
                              {office.principal_email || "N/A"}
                            </a>
                          </p>
                          <p>
                            <strong>TPO Email:</strong>{" "}
                            <a href={`mailto:${office.tpo_email}`} className="text-primary">
                              {office.tpo_email || "N/A"}
                            </a>
                          </p>
                          <p>
                            <strong>Website:</strong>{" "}
                            <a
                              href={office.website || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary"
                            >
                              {office.website || "N/A"}
                            </a>
                          </p>
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <p className="text-muted text-center">No office details available</p>
                  )}
                </>
              )}
            </section>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="text-center">
          {feedbackSuccess ? (
            <>
              <FaCheckCircle size={50} color="green" className="mb-3" />
              <h5>Successfully Submitted</h5>
              <p>Your feedback has been submitted successfully!</p>
            </>
          ) : (
            <>
              <FaExclamationCircle size={50} color="red" className="mb-3" />
              <h5>Submission Failed</h5>
              <p>{feedbackError}</p>
            </>
          )}
          <Button variant="primary" onClick={handleCloseModal} className="feedback-form">
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default TPOPage;