import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './AdminLogin.css';
import Gec from '../assets/Gec.png';
import axios from 'axios';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ dte: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({ text: '', icon: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dte' && /[^0-9]/.test(value)) {
      setError('DTE Number should contain only numbers.');
      return;
    } else {
      setError('');
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.dte || !formData.password) {
      setError('DTE and Password are required.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/users/admin/login', {
        dte: formData.dte,
        password: formData.password,
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        setModalMessage({ text: 'Login Successful!', icon: faCheckCircle });
        setShowModal(true);

        setTimeout(() => {
          setShowModal(false);
          navigate('/adminprofile');
        }, 2000);
      }
    } catch (error) {
      setModalMessage({ text: 'Login Denied!', icon: faExclamationCircle });
      setShowModal(true);
      setError(error.response?.data?.message || 'Invalid Credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className='head-box-loginA'>
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row className="flex-nowrap left-index-loginA just">
        <Col md={2} className='left-sidebar-loginA'>
          <Card className="left-nav-loginA">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-loginA"><Link to="">Principal and HOD</Link></ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA"><Link to="">Student Section</Link></ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA"><Link to="">Office</Link></ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA"><Link to="/committees">Committees</Link></ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA"><Link to="/tenders">Tenders</Link></ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA-01"><Link to="/login">Grievance Form</Link></ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col className='cont-loginA'>
          <div className='head-right-top-loginA' style={{ backgroundColor: "#eadbc8" }}>
            <h3 style={{ color: '#102C57' }}>Admin Login</h3>
          </div>

          <div className="loginA-section">
            <div className="loginA-logo-container">
              <img src={Gec} alt="Logo" className="login-logo" />
            </div>

            <div className="loginA-form-container">
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="AadminDTE" className="mb-3">
                  <Form.Control
                    type="text"
                    name="dte"
                    value={formData.dte}
                    onChange={handleChange}
                    placeholder="DTE number"
                    className="login-input"
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

                <Button type="submit" className="login-button w-100" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'LOGIN'}
                </Button>

                <div className="loginA-links">
                  <Link to="/signupadmin" className="login-link">Sign Up</Link>
                  <Link to="/forgetadmin" className="login-link">Forgot password?</Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>

      {/* Modal for Success or Failure */}
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
