import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Forgotpassword.css'; // Import the CSS file

const Forgotpassword = () => {
  const [enrollmentId, setEnrollmentId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaExpression, setCaptchaExpression] = useState('');
  const [captchaResult, setCaptchaResult] = useState(null); // Store the actual result of the CAPTCHA
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Function to generate a random arithmetic expression
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    const num2 = Math.floor(Math.random() * 10); // Random number between 0 and 9
    const operators = ['+', '-', '*']; // Arithmetic operators
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];

    // Create the expression and calculate its result
    let expression = `${num1} ${randomOperator} ${num2}`;
    let result = eval(expression); // Evaluate the arithmetic expression

    // Set the state with the expression and its result
    setCaptchaExpression(expression);
    setCaptchaResult(result);
  };

  // Run the CAPTCHA generator when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (enrollmentId === '' || mobileNumber === '' || captchaAnswer === '') {
      setError('All fields are required');
      return;
    }
    // Check if the captcha is correct
    if (parseInt(captchaAnswer) !== captchaResult) {
      setError('Invalid CAPTCHA answer');
      return;
    }

    setError('');
    // Handle OTP logic here
    alert('OTP Sent!');
    navigate('/forgotpassword2'); // Redirect to reset password page
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

        <div> 
          <div className='head-right-top-forgot' style={{ width: "70%", backgroundColor: "#eadbc8" }}>
            <h3 style={{ color: '#102C57' }}>Forgot Password</h3>
          </div>  
         <div className='pass'>
          <form onSubmit={handleSendOTP} className="forgot-form">
            <div className="form-group">
              <label htmlFor="enrollmentId">PRN no./ Email Address*</label>
              <input
                type="text"
                id="PRN no."
                value={enrollmentId}
                onChange={(e) => setEnrollmentId(e.target.value)}
                placeholder="Enter PRN no. / Email ID"
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
                <div className="captcha-box">{captchaExpression} =</div> {/* Display the generated expression */}
                <input
                  type="text"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  placeholder="Enter Answer"
                  className="form-control"
                />
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn-submit">
              Send OTP
            </button>

            <button type="button" className="btn-secondary" onClick={() => navigate('/studentform')}>
              Go to Login Page
            </button>
          </form>
          </div>
        </div>
      </Row>
    </Container> 
  );
};

export default Forgotpassword;
