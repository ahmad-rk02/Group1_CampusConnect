import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SignupAdmin.css';
import Gec from '../assets/Gec.png';

const SignupAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    dte: '',
    committee: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [userId, setUserId] = useState(null);
  const [resendTimer, setResendTimer] = useState(60);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.fullname) {
      valid = false;
      formErrors.fullname = "Full Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      valid = false;
      formErrors.email = "A valid email is required";
    }

    const dtePattern = /^DTE\d{4}4004$/;
    if (!formData.dte) {
      valid = false;
      formErrors.dte = "DTE Number is required";
    } else if (!dtePattern.test(formData.dte)) {
      valid = false;
      formErrors.dte = "Enter valid DTE Number";
    }

    if (!formData.committee) {
      valid = false;
      formErrors.committee = "Committee selection is required";
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!formData.password) {
      valid = false;
      formErrors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      valid = false;
      formErrors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    if (!formData.confirmPassword) {
      valid = false;
      formErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      valid = false;
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);
    return valid;
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/users/admin/signup`, {
          fullname: formData.fullname,
          email: formData.email,
          dte: formData.dte,
          committee: formData.committee,
          password: formData.password,
        });

        console.log('Signup Response:', response.data);
        setUserId(response.data.userId);
        setShowOTPModal(true);
        setResendTimer(60); // Start the resend timer
      } catch (error) {
        console.error('Signup Error:', error);
        if (error.response && error.response.status === 409) {
          setErrorMessage('User already exists. Please try logging in.');
        } else {
          setErrorMessage('Registration failed. Please try again later.');
        }
        setShowErrorModal(true);
      }
    }
  };

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.replace(/[^0-9]/g, '');
    setOtp(newOtp);
    
    // Auto-focus to next input
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setErrorMessage('Please enter a complete 6-digit OTP');
      setShowErrorModal(true);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/verify-signup-otp`, {
        email: formData.email,
        otp: otpString,
      });

      console.log('OTP Verification Response:', response.data);
      setShowOTPModal(false);
      setShowSuccessModal(true);
      setFormData({
        fullname: '',
        email: '',
        dte: '',
        committee: '',
        password: '',
        confirmPassword: '',
      });
      setOtp(['', '', '', '', '', '']);
      setErrors({});
    } catch (error) {
      console.error('OTP Verification Error:', error);
      setErrorMessage('Invalid or expired OTP. Please try again or resend OTP.');
      setShowErrorModal(true);
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/resend-signup-otp`, {
        email: formData.email,
      });
      console.log('Resend OTP Response:', response.data);
      setResendTimer(60); // Reset timer
      setOtp(['', '', '', '', '', '']); // Clear current OTP
      document.getElementById('otp-input-0').focus(); // Focus first input
    } catch (error) {
      console.error('Resend OTP Error:', error);
      setErrorMessage('Failed to resend OTP. Please try again.');
      setShowErrorModal(true);
    }
  };

  // Timer effect
  useEffect(() => {
    if (showOTPModal && resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showOTPModal, resendTimer]);

  return (
    <div>
      <Container fluid className="p-0 w-100">
        <Row className="head-box-Admin-signup">
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-Admin-signup just">
          <Col md={2} className="left-sidebar-Admin-signup">
            <Card className="left-nav-Admin-signup">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/principalHods" className={location.pathname === "" ? "active-link" : ""}>
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/studentSection" className={location.pathname === "" ? "active-link" : ""}>
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/office" className={location.pathname === "" ? "active-link" : ""}>
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/committees" className={location.pathname === "/committees" ? "active-link" : ""}>
                    Committees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup">
                  <Link to="/tenders" className={location.pathname === "/tenders" ? "active-link" : ""}>
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-Admin-signup-01">
                  <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <div className="head-right-top-Admin-signup" style={{ backgroundColor: "#eadbc8" }}>
              <h3 style={{ color: '#102C57' }}>Admin SignUp</h3>
            </div>

            <div className="form-section-Admin-signup">
              <Form onSubmit={handleSubmit} className="whole-form-Admin-signup">
                <div className="Admin-signup-logo-container">
                  <img src={Gec} alt="Logo" className="Admin-signup-logo" />
                </div>

                <Form.Group controlId="formFullName" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className="field-name-Admin-signup">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className={`input-box-Admin-signup ${errors.fullname && 'is-invalid'}`}
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className="field-name-Admin-signup">E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter E-mail"
                    className={`input-box-Admin-signup ${errors.email && 'is-invalid'}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </Form.Group>

                <Form.Group controlId="formDTE" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className="field-name-Admin-signup">DTE Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="dte"
                    value={formData.dte}
                    onChange={handleChange}
                    placeholder="Enter DTE Number"
                    className={`input-box-Admin-signup ${errors.dte && 'is-invalid'}`}
                  />
                  {errors.dte && <div className="invalid-feedback">{errors.dte}</div>}
                </Form.Group>

                <Form.Group controlId="formCommittee" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className="field-name-Admin-signup">Committee</Form.Label>
                  <Form.Select
                    name="committee"
                    value={formData.committee}
                    onChange={handleChange}
                    className={`input-box-Admin-signup ${errors.committee && 'is-invalid'}`}
                  >
                    <option value="">Select committee</option>
                    <option value="Anti Ragging Committee">Anti Ragging Committee</option>
                    <option value="Grievance Redressal Committee">Grievance Redressal Committee</option>
                    <option value="Internal Complaint Committee">Internal Complaint Committee</option>
                    <option value="SC/ST, Women/Girls Complaint Committee">SC/ST, Women/Girls Complaint Committee</option>
                    <option value="Online Grievance Form">Online Grievance Form</option>
                  </Form.Select>
                  {errors.committee && <div className="invalid-feedback">{errors.committee}</div>}
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className="field-name-Admin-signup">Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className={`input-box-Admin-signup ${errors.password && 'is-invalid'}`}
                    />
                    <button
                      type="button"
                      className="custom-eye-button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
                    </button>
                  </div>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3 whole-field-Admin-signup">
                  <Form.Label className="field-name-Admin-signup">Confirm Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className={`input-box-Admin-signup ${errors.confirmPassword && 'is-invalid'}`}
                    />
                    <button
                      type="button"
                      className="custom-eye-button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <i className={`bi ${showConfirmPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
                    </button>
                  </div>
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </Form.Group>

                <Button variant="primary" type="submit" className="sub-btn-Admin-signup">
                  Sign Up
                </Button>

                <div className="to-admin-login">
                  <p className="text-Admin-signup">Already have an account?</p>
                  <Link to="/adminlogin" className="Adminlogin-link-Admin-signup">Login</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Success Modal */}
        <Modal
          show={showSuccessModal}
          onHide={() => {
            setShowSuccessModal(false);
            navigate('/adminlogin');
          }}
          centered
          className="custom-modal"
        >
          <Modal.Header className="modal-header-success">
            <Modal.Title>
              <i className="bi bi-check-circle-fill me-2"></i>
              Registration Successful!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-success">
            <p>Your admin account has been successfully created. You can now log in to access the dashboard.</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer-success">
            <Button
              variant="success"
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/adminlogin');
              }}
            >
              Go to Login
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Error Modal */}
        <Modal
          show={showErrorModal}
          onHide={() => setShowErrorModal(false)}
          centered
          className="custom-modal"
        >
          <Modal.Header className="modal-header-error">
            <Modal.Title>
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              Registration Failed
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-error">
            <p>{errorMessage}</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer-error">
            <Button variant="danger" onClick={() => setShowErrorModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* OTP Modal */}
        <Modal
          show={showOTPModal}
          onHide={() => setShowOTPModal(false)}
          centered
          className="otp-modal"
        >
          <Modal.Header closeButton className="otp-modal-header">
            <Modal.Title className="otp-modal-title">
              <div className="otp-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#102C57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Verify Your Email</h3>
              <p className="otp-instructions">We've sent a 6-digit code to <strong>{formData.email}</strong></p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="otp-modal-body">
            <Form onSubmit={handleOTPSubmit}>
              <div className="otp-input-container">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Form.Control
                    key={index}
                    type="text"
                    maxLength="1"
                    className="otp-digit-input"
                    value={otp[index]}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    id={`otp-input-${index}`}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              
              <div className="otp-timer-container">
                {resendTimer > 0 ? (
                  <p className="otp-timer">Resend OTP in {resendTimer} seconds</p>
                ) : (
                  <Button 
                    variant="link" 
                    onClick={handleResendOTP} 
                    className="otp-resend-btn"
                  >
                    Resend OTP
                  </Button>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="otp-verify-btn"
                disabled={otp.join('').length !== 6}
              >
                Verify & Continue
              </Button>
              
              <div className="otp-help-text">
                <p>Didn't receive the code? Check your spam folder or <a href="#" onClick={handleResendOTP}>resend</a></p>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default SignupAdmin;