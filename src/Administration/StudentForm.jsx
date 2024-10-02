import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './StudentForm.css';
import Gec from '../assets/Gec.png';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prnNumber: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'prnNumber' && /[^0-9]/.test(value)) {
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

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.prnNumber || !formData.password) {
      setError('PRN number and password are required.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long, with one uppercase letter, one number, and one special character.');
      return;
    }

    setIsLoading(true); // Set loading to true
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        prnNumber: formData.prnNumber,
        password: formData.password,
      });

      if (response.status===200) {
        navigate('/grievanceform');
      } 
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'An error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Set loading back to false
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required.');
      return;
    }
    alert(`A password reset link has been sent to ${email}.`);
    setShowModal(false);
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className="head-box-login">
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-login just">
        <Col md={2} className="left-sidebar-login">
          <Card className="left-nav-login">
            <ListGroup variant="flush">
              {['Principal and HOD', 'Student Section', 'Office', 'Committees', 'Tenders'].map((item, index) => (
                <ListGroup.Item key={index} className="left-nav-row-login">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                    {item}
                  </Link>
                </ListGroup.Item>
              ))}
              <ListGroup.Item className="left-nav-row-login-01">
                <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                  Grievance Form
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <div className="head-right-top-login" style={{ width: '70%', backgroundColor: '#eadbc8' }}>
            <h3 style={{ color: '#102C57' }}>Student Login</h3>
          </div>

          <div className="login-section">
            <div className="login-logo-container">
              <img src={Gec} alt="Logo" className="login-logo" />
            </div>

            <div className="login-form-container">
              {error && <Alert variant="danger" aria-live="assertive">{error}</Alert>} 

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="prnNumber" className="mb-3">
                  <Form.Control
                    type="text"
                    name="prnNumber"
                    value={formData.prnNumber}
                    onChange={handleChange}
                    placeholder="PRN number"
                    className="login-input"
                    pattern="[0-9]*"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="password" className="mb-3 position-relative">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="login-input"
                    required
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
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => e.key === 'Enter' && togglePasswordVisibility()}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </Form.Group>

                <Button type="submit" className="login-button w-100" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'LOGIN'}
                </Button>

                <div className="login-links">
                  <Link to="/studentsignup" className="login-link">Sign Up</Link>
                  <Link to="#" className="login-link" onClick={() => setShowModal(true)}>
                    Forgot password?
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="forgetpassword">
          <Form onSubmit={handleForgotPasswordSubmit}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Reset Link
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default LoginForm;
