import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert, Modal } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './StudentSignUp.css';
import Gec from '../assets/Gec.png';

const StudentSignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    prnNumber: '',
    semester: '',
    branch: '',
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
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState(null);
  const [resendTimer, setResendTimer] = useState(60);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for PRN (numbers only, max 16 chars)
    if (name === 'prnNumber') {
      const numbersOnly = value.replace(/[^0-9]/g, '');
      if (numbersOnly.length <= 16) {
        setFormData(prev => ({ ...prev, [name]: numbersOnly }));
      }
      return;
    }
    
    // Special handling for phone (numbers only, max 10 chars)
    if (name === 'phone') {
      const numbersOnly = value.replace(/[^0-9]/g, '');
      if (numbersOnly.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numbersOnly }));
      }
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

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

    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      valid = false;
      formErrors.phone = "A valid 10-digit phone number is required";
    }

    const prnPattern = /^\d{4}033700\d{6}$/;
    if (!formData.prnNumber) {
      valid = false;
      formErrors.prnNumber = "PRN is required";
    } else if (!prnPattern.test(formData.prnNumber)) {
      valid = false;
      formErrors.prnNumber = "Enter a valid PRN number"; 
    }

    if (!formData.semester) {
      valid = false;
      formErrors.semester = "Please select your semester";
    }

    if (!formData.branch) {
      valid = false;
      formErrors.branch = "Branch is required";
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!formData.password) {
      valid = false;
      formErrors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
      valid = false;
      formErrors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    if (formData.password !== formData.confirmPassword) {
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
        const response = await axios.post(`${API_BASE_URL}/api/users/student/signup`, {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          prnNumber: formData.prnNumber,
          semester: formData.semester,
          branch: formData.branch,
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

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/verify-signup-otp`, {
        email: formData.email,
        otp,
      });

      console.log('OTP Verification Response:', response.data);
      setShowOTPModal(false);
      setShowSuccessModal(true);
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        prnNumber: '',
        semester: '',
        branch: '',
        password: '',
        confirmPassword: '',
      });
      setOtp('');
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
      setOtp(''); // Clear current OTP
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
      <Container fluid className="p-0 w-1000 m-100">
        <Row className="head-box-grivnce">
          <Col>
            <h1 className="text-left">STUDENT SIGN UP</h1>
          </Col>
        </Row>

        <Row noGutters className="left-index-grivnce just">
          <Col md={2} className="left-sidebar-grivnce">
            <Card className="left-nav-grivnce">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="/principalHods" className={location.pathname === "" ? "active-link" : ""}>
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="/studentSection" className={location.pathname === "" ? "active-link" : ""}>
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="/office" className={location.pathname === "" ? "active-link" : ""}>
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="/committees" className={location.pathname === "/committees" ? "active-link" : ""}>
                    Committees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="/tenders" className={location.pathname === "/tenders" ? "active-link" : ""}>
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce-01">
                  <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <Card.Header className="bg-goldeeen">
              <h4>Student SignUp</h4>
            </Card.Header>

            <div className="form-section-grivncee">
              <Form onSubmit={handleSubmit} className="whole-form-grivncee">
                <div className="gec-logo-container">
                  <img src={Gec} alt="College Logo" className="form-clg-logo" />
                </div>

                <Form.Group controlId="formFullName" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className={`input-box-grivncee ${errors.fullname && 'is-invalid'}`}
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter E-mail"
                    className={`input-box-grivncee ${errors.email && 'is-invalid'}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </Form.Group>

                <Form.Group controlId="formPhoneNumber" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className={`input-box-grivncee ${errors.phone && 'is-invalid'}`}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </Form.Group>

                <Form.Group controlId="formPrnNumber" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">University Number (PRN)</Form.Label>
                  <Form.Control
                    type="text"
                    name="prnNumber"
                    value={formData.prnNumber}
                    onChange={handleChange}
                    placeholder="Enter University Number"
                    className={`input-box-grivncee ${errors.prnNumber && 'is-invalid'}`}
                  />
                  {errors.prnNumber && <div className="invalid-feedback">{errors.prnNumber}</div>}
                </Form.Group>

                <Form.Group controlId="formSemester" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">Semester</Form.Label>
                  <Form.Control
                    as="select"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className={`input-box-grivncee ${errors.semester && 'is-invalid'}`}
                  >
                    <option value="">-- Select Semester --</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Fifth">Fifth</option>
                    <option value="Sixth">Sixth</option>
                    <option value="Seventh">Seventh</option>
                    <option value="Eighth">Eighth</option>
                  </Form.Control>
                  {errors.semester && <div className="invalid-feedback">{errors.semester}</div>}
                </Form.Group>

                <Form.Group controlId="formBranch" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">Branch</Form.Label>
                  <Form.Control
                    as="select"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={`input-box-grivncee ${errors.branch && 'is-invalid'}`}
                  >
                    <option value="">Select Branch</option>
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Instrumentation Engineering">Instrumentation Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Electronics and Communication">Electronics and Communication</option>
                    <option value="Civil">Civil</option>
                  </Form.Control>
                  {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className={`input-box-grivncee ${errors.password && 'is-invalid'}`}
                    />
                    <span className="input-group-text" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3 whole-field-grivncee">
                  <Form.Label className="field-name-grivnce">Confirm Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      className={`input-box-grivncee ${errors.confirmPassword && 'is-invalid'}`}
                    />
                    <span className="input-group-text" onClick={toggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </Form.Group>

                <Button type="submit" className="submit-btn-grivncee">
                  Register
                </Button>
                <div className="to-student-login">
                  <p className="text-Student-signup">Already have an account?</p>
                  <Link to="/studentlogin" className="Studentlogin-link-Student-signup">Login</Link>
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
            navigate('/studentlogin');
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
            <p>Your student account has been successfully created. You can now log in to access your dashboard.</p>
          </Modal.Body>
          <Modal.Footer className="modal-footer-success">
            <Button
              variant="success"
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/studentlogin');
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
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const newOtp = [...otp];
                      newOtp[index] = e.target.value.replace(/[^0-9]/g, '');
                      setOtp(newOtp.join(''));
                      
                      // Auto-focus to next input
                      if (e.target.value && index < 5) {
                        document.getElementById(`otp-input-${index + 1}`).focus();
                      }
                    }}
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
                disabled={otp.length !== 6}
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

export default StudentSignUp;