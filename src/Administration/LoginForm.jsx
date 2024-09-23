import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css';
import Gec from '../assets/Gec.png';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adminDTE: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate Admin DTE input
    if (name === 'adminDTE' && /[^0-9]/.test(value)) {
      setError('Admin DTE should contain only numbers.');
      return;
    } else {
      setError(''); // Clear error if input is valid
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const mockCredentials = {
    adminDTE: '123456',
    password: 'Password@123',
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.adminDTE) {
      setError('Admin DTE is required.');
      return;
    }

    if (isNaN(formData.adminDTE)) {
      setError('Admin DTE should contain only numbers.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must contain at least one letter, one number, and one special character.');
      return;
    }

    if (
      formData.adminDTE === mockCredentials.adminDTE &&
      formData.password === mockCredentials.password
    ) {
      navigate('/grievanceform');
    } else {
      setError('Invalid Admin DTE number or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle visibility state
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
                <Link to="/loginform" className={location.pathname === "/loginform" ? "active-link" : ""}>
                  Grievance Form
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <div className='head-right-top-login' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
            <h3 style={{ color: '#102C57' }}>Admin Login</h3>
          </div>

          <div className="login-section">
            <div className="login-logo-container">
              <img src={Gec} alt="Logo" className="login-logo" />
            </div>

            <div className="login-form-container">
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="adminDTE" className="mb-3">
                  <Form.Control
                    type="text"
                    name="adminDTE"
                    value={formData.adminDTE}
                    onChange={handleChange}
                    placeholder="Admin DTE Number"
                    className="login-input"
                    pattern="[0-9]*" // Restrict input to numbers only
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"} // Toggle input type based on visibility
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="login-input"
                  />
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
                </Form.Group>

                <Button type="submit" className="login-button">
                  LOGIN
                </Button>

                <div className="login-links">
                  <Link to="/signup" className="login-link">Sign Up</Link>
                  <Link to="/forgot-password" className="login-link">Forgot password?</Link>
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
