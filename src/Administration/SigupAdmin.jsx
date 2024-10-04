import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
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
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for confirm password visibility

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

    // DTE Number validation
    if (!formData.dte) {
      valid = false;
      formErrors.dte = "DTE Number is required";
    } else if (isNaN(formData.dte) || formData.dte <= 0) {
      valid = false;
      formErrors.dte = "DTE Number must be a positive number";
    }

    // Committee validation
    if (!formData.committee) {
      valid = false;
      formErrors.committee = "Committee selection is required";
    }

    // Password validation
    if (!formData.password) {
      valid = false;
      formErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      valid = false;
      formErrors.password = "Password must be at least 8 characters long";
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      valid = false;
      formErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      valid = false;
      formErrors.confirmPassword = "Passwords do not match";
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
        dte: '',
        committee: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className='head-box-Admin-signup'>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-Admin-signup just">
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-Admin-signup'>
            <Card className="left-nav-Admin-signup">
              <ListGroup variant="flush">
                {/* Sidebar Links */}
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/committees" className={location.pathname === "/committees" ? "active-link" : ""}>
                    Committees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/tenders" className={location.pathname === "/tenders" ? "active-link" : ""}>
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup-01">
                  <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <div>
              <div className='head-right-top-Admin-signup' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
                <h3 style={{ color: '#102C57' }}>Admin SignUp</h3>
              </div>
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

                <Form.Group controlId="formCommittee" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>Committee</Form.Label>
                  <Form.Select
                    name="committee"
                    value={formData.committee}
                    onChange={handleChange}
                    className={`input-box-Admin-signup ${errors.committee && 'is-invalid'}`}
                  >
                    <option value="">Select committee</option>
                    <option value="1">Anti Ragging Committee</option>
                    <option value="2">Grievance Redressal Committee</option>
                    <option value="3">Internal Complaint Committee</option>
                    <option value="4">SC/ST, Women/Girls Complaint Committee</option>
                    <option value="5">Online Grievance Form</option>
                  </Form.Select>
                  {errors.committee && <div className="invalid-feedback">{errors.committee}</div>}
                </Form.Group>

                <Form.Group controlId="formDTE" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>DTE Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="dte"
                    value={formData.dte}
                    onChange={handleChange}
                    placeholder="Enter DTE Number"
                    className={`input-box-Admin-signup ${errors.dte && 'is-invalid'}`}
                  />
                  {errors.dte && <div className="invalid-feedback">{errors.dte}</div>}
                </Form.Group>

                {/* Password Field */}
                <Form.Group controlId="formPassword" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className={`input-box-Admin-signup ${errors.password && 'is-invalid'}`}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
                    </button>
                  </div>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </Form.Group>

                {/* Confirm Password Field */}
                <Form.Group controlId="formConfirmPassword" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className='field-name-Admin-signup'>Confirm Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className={`input-box-Admin-signup ${errors.confirmPassword && 'is-invalid'}`}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <i className={`bi ${showConfirmPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
                    </button>
                  </div>
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </Form.Group>

                <Button variant="primary" type="submit" className='sub-btn-Admin-signup'>
                  Sign Up
                </Button>

                <div className='to-admin-login'>
                  <p className='text-Admin-signup'>
                    Already have an account?
                  </p>
                  <Link to="/adminlogin" className="Adminlogin-link-Admin-signup">Login</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SignupAdmin;
