import React, { useState }  from 'react'
import { Container, Row, Col, Card, ListGroup, Form, Button }  from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import './GrievanceForm.css';

const GrievanceForm = () => {


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }


  return (
    <div>
       
       <Container fluid className="p-0 w-100">
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
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                Commiittees
                </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce">
              <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                Tenders
                </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-grivnce-01">
              <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                Grievance Form
                </Link>
                </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          
           <div>
           <div  className='head-right-top-grivnce' style={{width: "70%", backgroundColor: "#eadbc8"}}>
           <h3 style={{ color: '#102C57' }} >Student Login

            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="35px" viewBox="0 0 20 20" width="40px" fill="#102C57"><g><g><rect fill="none" height="20" width="20"/></g></g><g><polygon points="4.59,16.59 6,18 14,10 6,2 4.59,3.41 11.17,10"/></g></svg> 

            Register Here</h3></div>
           </div>


           <div className='form-section-grivnce'>
           <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Enter your Full name"
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
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
