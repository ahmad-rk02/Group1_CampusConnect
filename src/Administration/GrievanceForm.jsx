import React, { useState } from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './GrievanceForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
const GrievanceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    universityNumber: '',
    branch: '',
    semester: '',
    grievanceType: '',
    message: '',
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

     // Check if any field is empty
     for (let field in formData) {
      if (!formData[field]) {
        valid = false;
        formErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    }

    // Fullname validation
    if (!formData.fullname) {
      valid = false;
      formErrors.fullname = "Full Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      valid = false;
      formErrors.email = "A valid email is required";
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      valid = false;
      formErrors.phone = "A valid 10-digit phone number is required";
    }

    // University Number validation
    if (!formData.universityNumber) {
      valid = false;
      formErrors.universityNumber = "University number is required";
    }

    // Semester validation
    if (!formData.semester) {
      valid = false;
      formErrors.semester = "Please select your semester";
    }

    // Dept validation
    if (!formData.branch) {
      valid = false;
      formErrors.branch = "Please select your branch";
    }

    // Grievance Type validation
    if (!formData.grievanceType) {
      valid = false;
      formErrors.grievanceType = "Grievance type is required";
    }

    // Message validation
    if (!formData.message) {
      valid = false;
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5000/api/grievances/submit', formData);
  
        // Confirm the response is successful
        if (response.status === 200 || response.status === 201) {
          setFormData({
            fullname: '',
            email: '',
            phone: '',
            universityNumber: '',
            branch: '',
            semester: '',
            grievanceType: '',
            message: '',
          });
          console.log('Response:', response.data);
          alert('Grievance submitted successfully!');
          setSubmitted(true);
  
          navigate('/studentprofile'); // Ensure navigate is properly initialized
        } else {
          throw new Error('Unexpected response status: ' + response.status);
        }
      } catch (err) {
        console.error('Error:', err.response || err.message || err);
        alert('Error submitting grievance: ' + (err.response?.data?.message || err.message));
        setSubmitted(false);
      }
    }
  };
  
  return (
    <div>

      <Container fluid className="p-0 w-100  cont-grivnc-form">
        {/* Header Section */}
        <Row className='head-box-grivnce'>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-grivnce just" >
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-grivnce' >
            <Card className="left-nav-grivnce" >
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to="/committees"
                    className={location.pathname === "/committees" ? "active-link" : ""}
                  >
                    Commiittees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
                  <Link
                    to="/tenders"
                    className={location.pathname === "/tenders" ? "active-link" : ""}
                  >
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce-01">
                  <Link
                    to="/login"
                    className={location.pathname === "/login" ? "active-link" : ""}
                  >
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>

            <div>
              <div className='head-right-top-grivnce' style={{  backgroundColor: "#eadbc8" }}>
                <h3 style={{ color: '#102C57' }} >Student Grievance Form</h3>

            </div>
            </div>

            <div className='form-section-grivnce'>
              <Form onSubmit={handleSubmit} className='whole-form-grivnce'>

              {submitted && (
                  <Alert variant="success" className='mb-3'>
                    Grievance form submitted successfully!
                  </Alert>
                )}

                <Form.Group controlId="formFullName" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className={`input-box-grivnce ${errors.fullname && 'is-invalid'}`}
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter E-mail"
                    className={`input-box-grivnce ${errors.email && 'is-invalid'}`}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </Form.Group>

                <Form.Group controlId="formPhoneNumber" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className={`input-box-grivnce ${errors.phone && 'is-invalid'}`}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </Form.Group>

                <Form.Group controlId="formUniversityNumber" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>University Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="universityNumber"
                    value={formData.universityNumber}
                    onChange={handleChange}
                    placeholder="Enter University Number"
                    className={`input-box-grivnce ${errors.universityNumber && 'is-invalid'}`}
                  />
                   {errors.universityNumber && <div className="invalid-feedback">{errors.universityNumber}</div>}
                </Form.Group>

                <Form.Group controlId="formbranch" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Branch</Form.Label>
                  <Form.Select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange} 
                    className={`input-box-grivnce branch-dd ${errors.branch && 'is-invalid'}`}
                  >
                    <option value="">Select Branch</option>
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value=">Instrumentation Engineering">Instrumentation Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical engineering">Electrical engineering</option>
                    <option value="Electronics and Communication">Electronics and Communication</option>
                    <option value="Civil">Civil</option>
                  </Form.Select>
                  {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
                </Form.Group>

                <Form.Group controlId="formSemester" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Semester</Form.Label>
                  <Form.Select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange} 
                    className={`input-box-grivnce sem-dd ${errors.semester && 'is-invalid'}`}
                  >
                    <option value="">Select Semester</option>
                    <option value="Semester 1">Semester 1</option>
                    <option value="Semester 1">Semester 2</option>
                    <option value="Semester 1">Semester 3</option>
                    <option value="Semester 1">Semester 4</option>
                    <option value="Semester 1">Semester 5</option>
                    <option value="Semester 1">Semester 6</option>
                    <option value="Semester 1">Semester 7</option>
                    <option value="Semester 1">Semester 8</option>
                  </Form.Select>
                  {errors.semester && <div className="invalid-feedback">{errors.semester}</div>}
                </Form.Group>

                <Form.Group controlId="formGrievanceType" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Grievance Type</Form.Label>
                  <Form.Select
                    name="grievanceType"
                    value={formData.grievanceType}
                    onChange={handleChange}
                    className={`input-box-grivnce ${errors.grievanceType && 'is-invalid'}`}
                  > 
                  <option value="">Grievance Type</option>
                  <option value="Computer Sence & Engineiering Dept. Related">Computer Science & Engineering Dept. Related</option>
                    <option value=">Instrumentation Engneering Dept. Related">Instrumentation Engineering Dept. Related</option>
                    <option value="Mechanical Engineering Dept. Related">Mechanical Engineering Dept. Related</option>
                    <option value="Electrical engineering Dept. Related">Electrical engineering Dept. Related</option>
                    <option value="Electronics and Communication Dept. Related">Electronics and Communication Dept. Related</option>
                    <option value="Civil Dept. Related">Civil Dept. Related</option>
                    <option value="Office Related Dept. Related">Office Related</option>
                    <option value="Others">Others</option>
                  </Form.Select>
                   {errors.grievanceType && <div className="invalid-feedback">{errors.grievanceType}</div>}
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3 whole-field-grivnce">
                  <Form.Label className='field-name-grivnce'>Message</Form.Label>
                  <Form.Control
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`message-box ${errors.message && 'is-invalid'}`}
 />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </Form.Group>

                <Button variant="primary" type="submit" className='sub-btn-grivnce'>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>

    </div>
  )
}

export default GrievanceForm