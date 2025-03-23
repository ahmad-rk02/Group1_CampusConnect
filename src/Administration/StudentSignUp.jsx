import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

    if (!formData.prnNumber) {
      valid = false;
      formErrors.prnNumber = "University number (PRN) is required";
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
      alert('A new OTP has been sent to your email.');
      setOtp(''); // Clear the current OTP input
    } catch (error) {
      console.error('Resend OTP Error:', error);
      setErrorMessage('Failed to resend OTP. Please try again.');
      setShowErrorModal(true);
    }
  };

  return (
    <div>
      <Container fluid className="p-0 w-1000 m-100">
        <Row className="head-box-grivnce">
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
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
          className="custom-modal"
        >
          <Modal.Header>
            <Modal.Title>Verify OTP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>An OTP has been sent to {formData.email}. Please enter it below:</p>
            <Form onSubmit={handleOTPSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />
              </Form.Group>
              <div className="mt-3">
                <Button variant="primary" type="submit">
                  Verify OTP
                </Button>
                <Button variant="link" onClick={handleResendOTP} className="ms-3">
                  Resend OTP
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default StudentSignUp;