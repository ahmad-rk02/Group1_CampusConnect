import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleStudentLogin = () => {
        navigate('/studentlogin');
    };
    const handleAdminLogin = () => {
        navigate('/adminlogin');
    };
    return (
        <Container fluid className="p-0 w-100">
            <Row className='head-box-loginP'>
                <Col>
                    <h1 className="text-left">ADMINISTRATION</h1>
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
                <Col >
                    <div className="login-portal">
                        <div className='head-right-top-loginP' >
                            <h3>
                                Login
                            </h3>
                        </div>

                        {/* Student Login Card */}
                        <Card className="login-card">
                            <Card.Body>
                                <Card.Title className="mb-3">Login as Student</Card.Title>
                                <Card.Text>To Access the grievance form for registering complaints.</Card.Text>
                                <Button onClick={handleStudentLogin}  className='stu-login-btn'>Student Login</Button>
                            </Card.Body>
                        </Card>

                        {/* Admin Login Card */}
                        <Card className="login-card">
                            <Card.Body>
                                <Card.Title className="mb-3">Login as Admin</Card.Title>
                                <Card.Text>Access grievance made by students for particular issues.</Card.Text>
                                <Button onClick={handleAdminLogin}>Admin Login</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Login;
