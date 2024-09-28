import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './AdminForm.css';
import Gec from '../assets/Gec.png';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    adminDTE: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'adminDTE' && /[^0-9]/.test(value)) {
      setError('DTE Number should contain only numbers.');
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
    adminDTE: '2021033700996804',
    password: 'Password@123',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.adminDTE && !formData.password) {
      setError('DTE number and password is required.');
      return;
    }

    if (formData.adminDTE=='') {
      setError('PRN is required.');
      return;
    }

    if (formData.password=='') {
      setError('Password is required.');
      return;
    }

    if (formData.adminDTE === mockCredentials.adminDTE && formData.password === mockCredentials.password) {
      navigate('/home');
    } else {
      setError('Invalid DTE number or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container fluid className="p-0 w-100">
      <Row className='head-box-loginA'>
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-loginA just">
        <Col md={2} className='left-sidebar-loginA'>
          <Card className="left-nav-loginA">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-loginA">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Principal and HOD
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Student Section
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Office
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA">
                <Link to="/committees" className={location.pathname === "/committees" ? "active-link" : ""}>
                  Committees
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA">
                <Link to="/tenders" className={location.pathname === "/tenders" ? "active-link" : ""}>
                  Tenders
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-loginA-01">
                <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                  Grievance Form
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <div className='head-right-top-loginA' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
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
                    name="adminDTE"
                    value={formData.adminDTE}
                    onChange={handleChange}
                    placeholder="DTE number"
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

                <Button type="submit" className="loginA-button">
                  LOGIN
                </Button>

                <div className="loginA-links">
                  <Link to="/signupadmin" className="login-link">Sign Up</Link>
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
