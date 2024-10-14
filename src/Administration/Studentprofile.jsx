import React from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './studentprofile.css'

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, logout } = useAuth();

  if (!isAuthenticated && !loading) {
    navigate('/login');
  }

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" />
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="profile-container">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="profile-card mt-4 shadow-lg">
            <Card.Body>
              <div className="profile-header">
                <Card.Title className="profile-title">User Profile</Card.Title>
                <Button className="logout-btn" variant="danger" onClick={logout}>
                  Logout
                </Button>
              </div>
              <hr className="profile-divider" />
              <Card.Text><strong>Full Name:</strong> {user.fullname}</Card.Text>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text><strong>Phone:</strong> {user.phone}</Card.Text>
              <Card.Text><strong>PRN Number:</strong> {user.prnNumber}</Card.Text>
              <Card.Text><strong>Semester:</strong> {user.semester}</Card.Text>
              <Card.Text><strong>Branch:</strong> {user.branch}</Card.Text>

              {/* Add button to navigate to Grievance Form */}
              <Button variant="primary" className="mt-3" onClick={() => navigate('/grievance-form')}>
                Go to Grievance Form
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
