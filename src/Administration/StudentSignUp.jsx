// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios
import './StudentSignUp.css';
import Gec from '../assets/Gec.png';

const StudentSignUp = () => {
  const location = useLocation(); // Get location for active link checks
  const navigate = useNavigate(); // Initialize navigate

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    prnNumber: '',
    semester: '',
    branch: '',
    password: '',          // New field for password
    confirmPassword: '',    // New field for confirm password
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
  
    // Validate each field
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
  
    // Password validation
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Sending POST request to the server
        const response = await axios.post('http://localhost:5000/api/users/register', {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          prnNumber: formData.prnNumber,
          semester: formData.semester,
          branch: formData.branch,
          password: formData.password,   // Include password in the request
        });

        console.log('Response:', response.data);
        setSubmitted(true);
        alert('Registration successful!');

        // Reset the form
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
        setErrors({});

        // Redirect to StudentForm upon successful registration
        navigate('/Studentlogin');
        
      } catch (error) {
        if (error.response && error.response.status === 409) { // 409 for conflict (user already exists)
          alert('User already exists. Please try logging in.');
        // Reset the form
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
        } else {
          console.error('There was an error registering the user:', error);
          console.log(error.message);
        }
      }
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div >
      <Container fluid className="p-0 w-1000 m-100">
        {/* Header Section */}
        <Row className='head-box-grivnce'>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-grivnce just">
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-grivnce'>
            <Card className="left-nav-grivnce">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link to="" className={location.pathname === "" ? "active-link" : ""}>
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

            <div className='form-section-grivncee'>
              <Form onSubmit={handleSubmit} className='whole-form-grivncee'>
                {submitted && (
                  <Alert variant="success" className='mb-3'>
                    Registered Successfully!
                  </Alert>
                )}

                <div className="gec-logo-container">
                  <img src={Gec} alt="College Logo" className="form-clg-logo" />
                </div>

                <Form.Group controlId="formFullName" className="mb-3 whole-field-grivncee">
                  <Form.Label className='field-name-grivnce'>Full Name</Form.Label>
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
                  <Form.Label className='field-name-grivnce'>E-Mail</Form.Label>
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
                  <Form.Label className='field-name-grivnce'>Phone Number</Form.Label>
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
                  <Form.Label className='field-name-grivnce'>University Number (PRN)</Form.Label>
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
                  <Form.Label className='field-name-grivnce'>Semester</Form.Label>
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
                  <Form.Label className='field-name-grivnce'>Branch</Form.Label>
                  <Form.Control
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Enter Your Branch"
                    className={`input-box-grivncee ${errors.branch && 'is-invalid'}`}
                  />
                  {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3 whole-field-grivncee">
                  <Form.Label className='field-name-grivnce'>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className={`input-box-grivncee ${errors.password && 'is-invalid'}`}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3 whole-field-grivncee">
                  <Form.Label className='field-name-grivnce'>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={`input-box-grivncee ${errors.confirmPassword && 'is-invalid'}`}
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </Form.Group>

                

                <Button type="submit" className="submit-btn-grivncee">
                  Register
                </Button>
                <div className='to-student-login'>
                <p className='text-Student-signup'>
                  Already have an account ?
                </p>

                <Link to="/studentlogin" className="Studentlogin-link-Student-signup">Login</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentSignUp;
