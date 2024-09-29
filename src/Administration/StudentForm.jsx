import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Modal } from 'react-bootstrap';
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
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [email, setEmail] = useState(''); // State for the email input in the forgot password modal

  const handleChange = (e) => {
    const { name, value } = e.target;

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

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.PRN && !formData.password) {
      setError('PRN number and password is required.');
      return;
    }

    if (formData.PRN=='') {
      setError('PRN is required.');
      return;
    }

    if (formData.password=='') {
      setError('Password is required.');
      return;
    }

    // Mock credentials for testing
    if (formData.PRN === '2021033700996804' && formData.password === 'Password@123') {
      navigate('/grievanceform');
    } else {
      setError('Invalid PRN or password. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission (e.g., send a password reset email)
    alert(`A password reset link has been sent to ${email}.`);
    setShowModal(false); // Close the modal after submission
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
          <div className="head-right-top-login" style={{ width: '70%', backgroundColor: '#eadbc8' }}>
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
                    className={`login-input ${errors.PRN && 'is-invalid'}`}
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
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </Form.Group>

                <Button type="submit" className="login-button">
                  LOGIN
                </Button>

                <div className="login-links">
                  <Link to="/studentsignup" className="login-link">
                    Sign Up
                  </Link>
                  {/* Trigger the modal when clicking "Forgot password?" */}
                  <Link to="#" className="login-link" onClick={() => setShowModal(true)}>
                    Forgot password?
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
  {/* Forgot Password Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered >
    
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className='forgetpassword'>
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