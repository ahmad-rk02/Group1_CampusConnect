import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SignupAdmin.css';
import Gec from '../assets/Gec.png';

const SignupAdmin = () => {


  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    dte: '',
    committee: '',
    password: '',
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

    // Semester validation
    if (!formData.committee) {
      valid = false;
      formErrors.committee = "Please select committee";
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
        universityNumber: '',
        semester: '',
        grievanceType: '',
        message: '',
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
        <Row className='head-box-Admin-signup
        '>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-Admin-signup
         just" >
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-Admin-signup
          ' >
            <Card className="left-nav-Admin-signup" >
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link
                    to="/committees"
                    className={location.pathname === "/committees" ? "active-link" : ""}
                  >
                    Commiittees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link
                    to="/tenders"
                    className={location.pathname === "/tenders" ? "active-link" : ""}
                  >
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup-01">
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
              <div className='head-right-top-Admin-signup' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
                <h3 style={{ color: '#102C57' }} >Sign Up

                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="35px" viewBox="0 0 20 20" width="40px" fill="#102C57"><g><g><rect fill="none" height="20" width="20" /></g></g><g><polygon points="4.59,16.59 6,18 14,10 6,2 4.59,3.41 11.17,10" /></g></svg>

                  Admin Registration</h3></div>
            </div>


            <div className='form-section-Admin-signup'>
              <Form onSubmit={handleSubmit} className='whole-form-Admin-signup'>

              {submitted && (
                  <Alert variant="success" className='mb-3'>
                   Signed Up Successfully!
                  </Alert>
                )}

<div className="Admin-signup-logo-container">
              <img src={Gec} alt="Logo" className="Admin-signup-logo" />
            </div>

                <Form.Group controlId="formFullName" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className={`input-box-Admin-signup ${errors.fullname && 'is-invalid'}`}
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter E-mail"
                    className={`input-box-Admin-signup ${errors.email && 'is-invalid'}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </Form.Group>

                <Form.Group controlId="formdteNumber" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>DTE Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="dte"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter DTE Number"
                    className={`input-box-Admin-signup ${errors.phone && 'is-invalid'}`}
                  />
                  {errors.dte && <div className="invalid-feedback">{errors.dte}</div>}
                </Form.Group>


                <Form.Group controlId="formcommittee" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>committee</Form.Label>
                  <Form.Select
                    name="committee"
                    value={formData.committee}
                    onChange={handleChange} 
                    className={`input-box-Admin-signup sem-dd ${errors.semester && 'is-invalid'}`}
                  >
                    <option value="1">Select committee</option>
                    <option value="1">Committee 1</option>
                    <option value="2">Committee 2</option>
                    <option value="3">Committee 3</option>
                    <option value="4">Committee 4</option>
                    <option value="5">Committee 5</option>
                  </Form.Select>
                  {errors.committee && <div className="invalid-feedback">{errors.committee}</div>}
                </Form.Group>

      

                <Button variant="primary" type="submit" className='sub-btn-Admin-signup'>
                  Sign Up
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default SignupAdmin