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
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate PRN input
    if (name === 'PRN' && /[^0-9]/.test(value)) {
      setError('PRN should contain only numbers.');
      return;
    } else {
      setError('');
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Mock credentials for testing
  const mockCredentials = {
    PRN: '2021033700996804',
    password: 'Password@123',
  };

  const validatePassword = (password) => {
    // Regex to check for at least one uppercase letter, one number, one special character, and at least 8 characters in total
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.PRN) {
      setError('PRN is required.');
      return;
    }

    if (isNaN(formData.PRN)) {
      setError('PRN should contain only numbers.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.');
      return;
    }

    if (formData.PRN === mockCredentials.PRN && formData.password === mockCredentials.password) {
      navigate('/grievanceform');
    } else {
      setError('Invalid PRN or password. Please try again.');
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
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="PRN" className="mb-3">
                  <Form.Control
                    type="text"
                    name="PRN"
                    value={formData.PRN}
                    onChange={handleChange}
                    placeholder="PRN number"
                    className="login-input"
                    pattern="[0-9]*"
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"} 
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