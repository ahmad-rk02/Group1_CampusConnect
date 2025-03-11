import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Studentlogin.css';
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
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({ icon: null, text: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errorMessages = [];

    if (!formData.prnNumber) {
      errorMessages.push('PRN number is required.');
    }
    if (!formData.password) {
      errorMessages.push('Password is required.');
    }
    if (errorMessages.length > 0) {
      setError(errorMessages.join(' '));
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/users/student/login', {
        prnNumber: formData.prnNumber,
        password: formData.password,
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        
        // Show success modal
        setModalMessage({ icon: faCheckCircle, text: 'Login Successful!' });
        setShowModal(true);

        // Redirect after a short delay
        setTimeout(() => {
          navigate('/studentprofile');
        }, 2000);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'Invalid Credentials');
      
      // Show failure modal
      setModalMessage({ icon: faExclamationTriangle, text: 'Login Denied!' });
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className="head-box-login">
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row noGutters className="left-index-login">
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
          <div className="head-right-top-login-1">
            <h3 style={{ color: '#102C57' }}>Student Login</h3>
          </div>

          <div className="login-section">
            <div className="login-logo-container">
              <img src={Gec} alt="Logo" className="login-logo" />
            </div>

            <div className="login-form-container">
              {error && <Alert variant="danger">{error}</Alert>}

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
                    role="button"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </Form.Group>

                <Button type="submit" className="login-button w-100" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'LOGIN'}
                </Button>

                <div className="login-links">
                  <Link to="/studentsignup" className="login-link">Sign Up</Link>
                  <Link to="/forgetstudent" className="login-link">Forgot password?</Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      {/* Modal for Login Success or Failure */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          <FontAwesomeIcon icon={modalMessage.icon} size="3x" color={modalMessage.icon === faCheckCircle ? 'green' : 'red'} />
          <h4 className="mt-3">{modalMessage.text}</h4>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default LoginForm;
