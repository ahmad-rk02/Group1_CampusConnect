import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './StudentForm.css';
import Gec from '../assets/Gec.png';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    PRN: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

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

    // PRN validation (non-empty and only numeric)
    if (!formData.PRN) {
      valid = false;
      formErrors.PRN = "PRN is required";
    } else if (isNaN(formData.PRN)) {
      valid = false;
      formErrors.PRN = "PRN should contain only numbers";
    }

    // Password validation (non-empty and specific pattern)
    if (!formData.password) {
      valid = false;
      formErrors.password = "Password is required";
    } else {
      const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!passwordPattern.test(formData.password)) {
        valid = false;
        formErrors.password = "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character";
      }
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Mock credentials check
      const mockCredentials = {
        PRN: '2021033700996804',
        password: 'Password@123',
      };

      if (formData.PRN === mockCredentials.PRN && formData.password === mockCredentials.password) {
        navigate('/grievanceform');
      } else {
        setErrors({ general: 'Invalid PRN or password. Please try again.' });
      }

      if (formData.PRN === mockCredentials.PRN && formData.password === mockCredentials.password) {
        localStorage.setItem('loggedIn', true); // Set login status in localStorage
        navigate('/grievanceform');
      } else {
        setErrors({ general: 'Invalid PRN or password. Please try again.' });
      }
      
    }
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className='head-box-login'>
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-login just">
        <Col md={2} className='left-sidebar-login'>
          <Card className="left-nav-login">
            <ListGroup variant="flush">
              {/* Sidebar Links */}
              <ListGroup.Item className="left-nav-row-login">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Principal and HOD
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-login">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Student Section
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-login">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Office
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-login">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Committees
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-login">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Tenders
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-login-01">
                <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                  Grievance Form
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <div className='head-right-top-login' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
            <h3 style={{ color: '#102C57' }}>Student Login</h3>
          </div>

          <div className="login-section">
            <div className="login-logo-container">
              <img src={Gec} alt="Logo" className="login-logo" />
            </div>

            <div className="login-form-container">
              {errors.general && <Alert variant="danger">{errors.general}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="PRN" className="mb-3">
                  <Form.Control
                    type="text"
                    name="PRN"
                    value={formData.PRN}
                    onChange={handleChange}
                    placeholder="PRN number"
                    className={`login-input ${errors.PRN && 'is-invalid'}`}
                  />
                  {errors.PRN && <div className="invalid-feedback">{errors.PRN}</div>}
                </Form.Group>

                <Form.Group controlId="password" className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`login-input ${errors.password && 'is-invalid'}`}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}

                  {!errors.password && (
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                  )}
                  
                </Form.Group>

                <Button type="submit" className="login-button">
                  LOGIN
                </Button>

                <div className="login-links">
                  <Link to="/studentsignup" className="login-link">Sign Up</Link>
                  <Link to="/forgotpassword" className="login-link">Forgot password?</Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
