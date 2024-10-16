import React, { useState } from 'react';
import { Container, Form, Row, Col, Card, ListGroup, Button, Modal, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import './ForgetAdmin.css';

const ForgetAdmin = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [otpError, setOtpError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    // New states for password visibility
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const navigate = useNavigate(); // Initialize navigate

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            alert(`OTP sent to ${email}`); // Mock OTP sending
            setShowOtpModal(true);
            setEmailError('');
        } else {
            setEmailError('Please enter a valid email address.');
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp === '123456') { // Mock OTP validation
            setShowOtpModal(false);
            setShowModal(true);
            setOtpError('');
        } else {
            setOtpError('Invalid OTP. Please try again.');
        }
    };

    const handleNewPasswordSubmit = (e) => {
        e.preventDefault();
        
        // Clear previous error messages
        setPasswordError('');
    
        // Check if both fields are filled
        if (!newPassword || !confirmPassword) {
            setPasswordError('Both password fields must be filled out.');
            return;
        }
    
        // Check if passwords match
        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match.');
        } else {
            alert('Password reset successfully.'); // Process password reset logic
            
            // Clear fields after successful submission
            setEmail('');
            setOtp('');
            setNewPassword('');
            setConfirmPassword('');
            setShowModal(false);

            // Redirect to login page after successful password reset
            navigate('/AdminLogin');
        }
    };
    
    return (
        <Container fluid className="p-0 w-100">
            <Row className='head-box-loginA'>
                <Col>
                    <h1 className="text-left">ADMINISTRATION</h1>
                </Col>
            </Row>

            <Row className="flex-nowrap left-index-loginA just">
                <Col md={2} className='left-sidebar-loginA'>
                    <Card className="left-nav-loginA">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="left-nav-row-loginA">
                                <Link to="" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Principal and HOD
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginA">
                                <Link to="" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Student Section
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginA">
                                <Link to="" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Office
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginA">
                                <Link to="/committees" className={useLocation().pathname === "/committees" ? "active-link" : ""}>
                                    Committees
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginA">
                                <Link to="/tenders" className={useLocation().pathname === "/tenders" ? "active-link" : ""}>
                                    Tenders
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginA-01">
                                <Link to="/login" className={useLocation().pathname === "/login" ? "active-link" : ""}>
                                    Grievance Form
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col className='right-col-forgetA'>
                    {/* Forgot Password Form */}
                    <Form onSubmit={handleEmailSubmit}>
                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </Form.Group>
                        {emailError && <Alert variant="danger">{emailError}</Alert>}
                        <Button type="submit" className="w-100 send-otp-button">
                            Send OTP
                        </Button>
                    </Form>

                    {/* OTP Modal */}
                    <Modal show={showOtpModal} onHide={() => setShowOtpModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Enter OTP</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleOtpSubmit}>
                                <Form.Group controlId="otp" className="mb-3">
                                    <Form.Label>OTP</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                        required
                                    />
                                </Form.Group>
                                {otpError && <Alert variant="danger">{otpError}</Alert>}
                                <Button   type="submit" className="w-100 verify-otp-button">
                                    Verify OTP
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>

                    {/* New Password Modal */}
                    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Reset Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleNewPasswordSubmit}>
                                <Form.Group controlId="newPassword" className="mb-3 position-relative">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type={showNewPassword ? 'text' : 'password'}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                    />
                                    <i
                                        className={`far ${showNewPassword ? 'fa-eye' : 'fa-eye-slash'} password-eye`}
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '68%', transform: 'translateY(-50%)' }}
                                    ></i>
                                </Form.Group>
                                <Form.Group controlId="confirmPassword" className="mb-3 position-relative">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                    />
                                    <i
                                        className={`far ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'} password-eye`}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '68%', transform: 'translateY(-50%)' }}
                                    ></i>
                                </Form.Group>
                                {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                                <Button   type="submit" className="w-100 reset-password-button">
                                    Reset Password
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgetAdmin;
