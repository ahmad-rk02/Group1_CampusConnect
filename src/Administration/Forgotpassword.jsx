import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Forgotpassword.css'; // Import the CSS file

const Forgotpassword = () => {
  const [enrollmentId, setEnrollmentId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (enrollmentId === '' || mobileNumber === '' || captcha === '') {
      setError('All fields are required');
      return;
    }
    setError('');
    // Handle OTP logic here
    alert('OTP Sent!');
  };

  return (
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


<div > 
        <div className='head-right-top-forgot' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
            <h3 style={{ color: '#102C57' }}>Forgot Password</h3>
          </div>  
         
      <form onSubmit={handleSendOTP} className="forgot-form">
        <div className="form-group">
          <label htmlFor="enrollmentId">Enrollment Id / Email Address*</label>
          <input
            type="text"
            id="enrollmentId"
            value={enrollmentId}
            onChange={(e) => setEnrollmentId(e.target.value)}
            placeholder="Enter Enrollment ID / Email ID"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number*</label>
          <div className="mobile-input">
            <select className="country-code">
              <option value="+91">+91(IN)</option>
            </select>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Mobile Number"
              className="form-control"
            />
          </div>
          <small>Do not put Zero (0) before the number.</small>
        </div>

        <div className="form-group">
          <label>Evaluate the arithmetic expression and enter the answer below*</label>
          <div className="captcha-input">
            <div className="captcha-box">8 - 4 =</div>
            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              placeholder="Enter Answer"
              className="form-control"
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn-submit">
          Send OTP
        </button>

        <button type="button" className="btn-secondary">
          Go to Login Page
        </button>
        
        
      </form>
         </div>
   
      </Row>
    </Container> 
  );
};

export default Forgotpassword;

