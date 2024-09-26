import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './StudentSignUp.css';

const StudentSignUp = () => {


  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    prnNumber: '',
    semester: '',
    branch: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

     // Check if any field is empty
     for (let field in formData) {
      if (!formData[field]) {
        valid = false;
        formErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    }

    // Fullname validation
    if (!formData.fullname) {
      valid = false;
      formErrors.fullname = "Full Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      valid = false;
      formErrors.email = "A valid email is required";
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      valid = false;
      formErrors.phone = "A valid 10-digit phone number is required";
    }

    // University Number validation
    if (!formData.universityNumber) {
      valid = false;
      formErrors.universityNumber = "University number is required";
    }

    // Semester validation
    if (!formData.semester) {
      valid = false;
      formErrors.semester = "Please select your semester";
    }

    // Grievance Type validation
    if (!formData.grievanceType) {
      valid = false;
      formErrors.grievanceType = "Grievance type is required";
    }

    // Message validation
    if (!formData.message) {
      valid = false;
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        prnNumber: '',
        semester: '',
        branch: '',
      });
      setErrors({});
    } else {
      setSubmitted(false);
    }
  }


  return (
    <div>

      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className='head-box-grivnce'>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-grivnce just" >
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-grivnce' >
            <Card className="left-nav-grivnce" >
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to="/committees"
                    className={location.pathname === "/committees" ? "active-link" : ""}
                  >
                    Commiittees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to="/tenders"
                    className={location.pathname === "/tenders" ? "active-link" : ""}
                  >
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce-01">
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

          <Col>

            <div>
              <div className='head-right-top-grivnce' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
                <h3 style={{ color: '#102C57' }} >Student Login

                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="35px" viewBox="0 0 20 20" width="40px" fill="#102C57"><g><g><rect fill="none" height="20" width="20" /></g></g><g><polygon points="4.59,16.59 6,18 14,10 6,2 4.59,3.41 11.17,10" /></g></svg>

                  Register Here</h3></div>
            </div>


            <div className='form-section-grivnce'>
              <Form onSubmit={handleSubmit} className='whole-form-grivnce'>

              {submitted && (
                  <Alert variant="success" className='mb-3'>
                    Grievance form submitted successfully!
                  </Alert>
                )}

                <Form.Group controlId="formFullName" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className={`input-box-grivnce ${errors.fullname && 'is-invalid'}`}
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter E-mail"
                    className={`input-box-grivnce ${errors.email && 'is-invalid'}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </Form.Group>

                <Form.Group controlId="formPhoneNumber" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className={`input-box-grivnce ${errors.phone && 'is-invalid'}`}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </Form.Group>

                <Form.Group controlId="formUniversityNumber" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>University Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="universityNumber"
                    value={formData.universityNumber}
                    onChange={handleChange}
                    placeholder="Enter University Number"
                    className={`input-box-grivnce ${errors.universityNumber && 'is-invalid'}`}
                  />
                   {errors.universityNumber && <div className="invalid-feedback">{errors.universityNumber}</div>}
                </Form.Group>

                <Form.Group controlId="formSemester" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Semester</Form.Label>
                  <Form.Select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange} 
                    className={`input-box-grivnce sem-dd ${errors.semester && 'is-invalid'}`}
                  >
                    <option value="">Select Semester</option>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                    <option value="5">Semester 5</option>
                    <option value="6">Semester 6</option>
                    <option value="7">Semester 7</option>
                    <option value="8">Semester 8</option>
                  </Form.Select>
                  {errors.semester && <div className="invalid-feedback">{errors.semester}</div>}
                </Form.Group>

                <Form.Group controlId="formGrievanceType" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Grievance Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="grievanceType"
                    value={formData.grievanceType}
                    onChange={handleChange}
                    placeholder="Enter Grievance Type"
                    className={`input-box-grivnce ${errors.grievanceType && 'is-invalid'}`}
                  />
                   {errors.grievanceType && <div className="invalid-feedback">{errors.grievanceType}</div>}
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Message</Form.Label>
                  <Form.Control
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`message-box ${errors.message && 'is-invalid'}`}
 />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </Form.Group>

                <Button variant="primary" type="submit" className='sub-btn-grivnce'>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default StudentSignUp