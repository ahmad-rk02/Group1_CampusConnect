import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    // Navigation handlers
    const handleStudentSignIn = () => {
        navigate('/studentlogin');
    };
    const handleStudentSignUp = () => {
        navigate('/studentsignup');
    };
    const handleAdminSignIn = () => {
        navigate('/adminlogin');
    };
    const handleAdminSignUp = () => {
        navigate('/signupadmin');
    };

    return (
        <Container fluid className="p-0 w-100">
            <Row className='head-box-loginP'>
                <Col>
                    <h1 className="text-left">LOGIN</h1>
                </Col>
            </Row>

            <Row className="left-index-loginP">
                <Col md={2} className='left-sidebar-loginP'>
                    <Card className="left-nav-loginP">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="/principalHods" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Principal and HOD
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="/studentSection" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Student Section
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="/office" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Office
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="/committees" className={useLocation().pathname === "/committees" ? "active-link" : ""}>
                                    Committees
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="/tenders" className={useLocation().pathname === "/tenders" ? "active-link" : ""}>
                                    Tenders
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP-01">
                                <Link to="/login" className={useLocation().pathname === "/login" ? "active-link" : ""}>
                                    Grievance Form
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='big-div-login'>
                    <div className="login-portal">
                        <div className='head-right-top-loginP'>
                            <h3>Login</h3>
                        </div>

                        {/* Student Login Card */}
                        <Card className="login-card">
                            <Card.Body>
                                <Card.Title className="mb-3">Student Portal</Card.Title>
                                <Card.Text>To access the grievance form for registering complaints.</Card.Text>
                                <div className="d-grid gap-2">
                                    <Button onClick={handleStudentSignIn} variant="primary" className="mb-2">
                                        Student Sign In
                                    </Button>
                                    <Button onClick={handleStudentSignUp} variant="outline-primary">
                                        Student Sign Up
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Admin Login Card */}
                        <Card className="login-card">
                            <Card.Body>
                                <Card.Title className="mb-3">Admin Portal</Card.Title>
                                <Card.Text>Access grievances made by students for particular issues.</Card.Text>
                                <div className="d-grid gap-2">
                                    <Button onClick={handleAdminSignIn} variant="primary" className="mb-2">
                                        Admin Sign In
                                    </Button>
                                    <Button onClick={handleAdminSignUp} variant="outline-primary">
                                        Admin Sign Up
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;