import React, { useState } from 'react';
import { Container, Form, Row, Col, Card, ListGroup, Button, Modal, Alert } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ForgetAdmin.css';

const ForgetAdmin = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [error, setError] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Mock OTP sending (Replace this with actual OTP generation and email service)
            alert(`OTP sent to ${email}`);
            setShowOtpModal(true); // Show the OTP modal
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (otp === '123456') { // Mock OTP validation
            setShowOtpModal(false);
            setShowModal(true); // Show new password modal
        } else {
            setOtpError('Invalid OTP. Please try again.');
        }
    };

    const handleNewPasswordSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            // Process password reset logic (Replace with real backend call)
            alert('Password reset successfully.');
            setShowModal(false);
        }
    };

    return (
        <Container fluid className="p-0 w-100">
            <Row className='head-box-loginP'>
                <Col>
                    <h1 className="text-left">ADMINISTRATION</h1>
                </Col>
            </Row>

            <Row className="flex-nowrap left-index-loginP just">
                <Col md={2} className='left-sidebar-loginP'>
                    <Card className="left-nav-loginP">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Principal and HOD
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="" className={useLocation().pathname === "" ? "active-link" : ""}>
                                    Student Section
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="left-nav-row-loginP">
                                <Link to="" className={useLocation().pathname === "" ? "active-link" : ""}>
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
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Button variant="primary" type="submit" className="w-100">
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
                                <Button variant="primary" type="submit" className="w-100">
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
                                <Form.Group controlId="newPassword" className="mb-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="confirmPassword" className="mb-3">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                        required
                                    />
                                </Form.Group>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Button variant="primary" type="submit" className="w-100">
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
