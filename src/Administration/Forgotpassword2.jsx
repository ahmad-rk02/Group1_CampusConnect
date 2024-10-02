import React, { useState } from 'react';
import { Container, Form, Button, Row, Card, Col, ListGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Forgotpassword2.css'; // Custom styles

const Forgotpassword2 = () => {
  const [enrollmentId, setEnrollmentId] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!enrollmentId || !otp || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Reset the error
    setError('');

    // Submit the form (You can add your form submission logic here)
    alert('Form submitted successfully!');
    navigate('/studentform'); 
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Basic password strength validation
    if (newPassword.length < 6) {
      setPasswordStrength('Very weak');
    } else if (newPassword.length >= 6 && newPassword.length < 10) {
      setPasswordStrength('Weak');
    } else {
      setPasswordStrength('Strong');
    }
  };

  return (

    <>
    <Container fluid className="p-0 w-100">
      <Row className='head-box-forgot'>
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-forgot">
        <Col md={2} className='left-sidebar-forgot'>
          <Card className="left-nav-login">
            <ListGroup variant="flush">
              {/* Sidebar Links */}
              <ListGroup.Item className="left-nav-row-forgot">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Principal and HOD
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-forgot">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Student Section
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-forgot">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Office
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-forgot">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Committees
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-forgot">
                <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                  Tenders
                </Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-forgot">
                <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                  Grievance Form
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        </Row>
        </Container>

    <Container className="mt-5">
    <div className='head-right-top-forgot2' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
            <h3 style={{ color: '#102C57' }}>Forgot Password</h3>
          </div>  
      <Form onSubmit={handleSubmit} className="forgot-form">
        {/* Enrollment ID / Email */}
        <Form.Group controlId="formEnrollmentId" className="mb-3">
          <Form.Label>PRN no. / Email Address*</Form.Label>
          <Form.Control
            type="email"
            placeholder="PRN no. / Email ID"
            value={enrollmentId}
            onChange={(e) => setEnrollmentId(e.target.value)}
            required
          />
        </Form.Group>

        {/* One Time Password (OTP) */}
        <Form.Group controlId="formOtp" className="mb-3">
          <Form.Label>One Time Password*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Type in password here..."
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <Form.Text className={passwordStrength === 'Very weak' ? 'text-danger' : 'text-muted'}>
            {passwordStrength}
          </Form.Text>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group controlId="formConfirmPassword" className="mb-3">
          <Form.Label>Confirm Password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        {/* Error Message */}
        {error && <p className="text-danger">{error}</p>}

        {/* Submit and Login buttons */}
        <Row>
          <Col md={6}>
            <Button type="submit" variant="primary2" className="w-100">
              Submit
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="secondary2"
              className="w-100"
              onClick={() => navigate('/studentform')}
            >
              Go to Login Page
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
    </>
  );
};

export default Forgotpassword2;

      
    
