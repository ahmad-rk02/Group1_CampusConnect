import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal } from 'react-bootstrap';
import useAuth from '../hooks/usestudentAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StudentProfile from './StudentGrievanceDisplay';
import './studentprofile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { 
    user, 
    isAuthenticated, 
    loading, 
    error, 
    confirmLogout, 
    logout,
    showLogoutModal, 
    setShowLogoutModal 
  } = useAuth();

  // State management
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [formData, setFormData] = useState({}); 
  const [updateError, setUpdateError] = useState(null);
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false); // New state for update success
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false); // New state for delete success

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Handle profile update with success modal
  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(`${API_BASE_URL}/api/users/student/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      Object.assign(user, response.data.updatedUser);
      setShowUpdateModal(false);
      setShowUpdateSuccessModal(true); // Show success modal
      setTimeout(() => setShowUpdateSuccessModal(false), 5000); 
    } catch (err) {
      setUpdateError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  // Handle profile deletion with success modal
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete your profile?');
    if (!confirm) return;

    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${API_BASE_URL}/api/users/student/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowDeleteSuccessModal(true); // Show success modal
      setTimeout(() => {
        setShowDeleteSuccessModal(false);
        logout(); 
      }, 5000); 
    } catch (err) {
      setUpdateError('Failed to delete profile');
    } finally {
      setDeleteLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        prnNumber: user.prnNumber,
        semester: user.semester,
        branch: user.branch,
      });
    }
  }, [user]);

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
    <Container className="profile-container bg-dark-subtle">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="profile-card mt-4 shadow-lg">
            <Card.Body className='bg-white'>
              <div className="profile-header">
                <Card.Title className="profile-title">User Profile</Card.Title>
                <Button className="logout-btn" variant="danger" onClick={confirmLogout}>
                  Logout
                </Button>
              </div>
              <hr className="profile-divider" />
              <Card.Text className='bg-white'><strong>Full Name:</strong> {user.fullname}</Card.Text>
              <Card.Text className='bg-white'><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text className='bg-white'><strong>Phone:</strong> {user.phone}</Card.Text>
              <Card.Text className='bg-white'><strong>PRN Number:</strong> {user.prnNumber}</Card.Text>
              <Card.Text className='bg-white'><strong>Semester:</strong> {user.semester}</Card.Text>
              <Card.Text className='bg-white'><strong>Branch:</strong> {user.branch}</Card.Text>

              <div>
                <StudentProfile />
              </div>

              <Button
                variant="primary"
                className="mx-1 mt-3"
                onClick={() => setShowUpdateModal(true)}
              >
                Update Profile
              </Button>

              <Button
                variant="danger"
                className="mt-3 mx-1"
                onClick={handleDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? 'Deleting...' : 'Delete Profile'}
              </Button>

              {/* Update Profile Modal */}
              <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formFullname">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mt-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPRN" className="mt-3">
                      <Form.Label>PRN Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="prnNumber"
                        value={formData.prnNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formSemester" className="mt-3">
                      <Form.Label>Semester</Form.Label>
                      <Form.Select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
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
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formBranch" className="mt-3">
                      <Form.Label>Branch</Form.Label>
                      <Form.Control
                        type="text"
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    {updateError && <Alert variant="danger" className="mt-3">{updateError}</Alert>}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button className='bg-dark' onClick={() => setShowUpdateModal(false)}>
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleUpdate}
                    disabled={updateLoading}
                  >
                    {updateLoading ? 'Updating...' : 'Update Profile'}
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Update Success Modal */}
              <Modal 
                show={showUpdateSuccessModal} 
                onHide={() => setShowUpdateSuccessModal(false)} 
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Profile updated successfully!
                </Modal.Body>
                <Modal.Footer>
                  <Button 
                    variant="primary" 
                    onClick={() => setShowUpdateSuccessModal(false)}
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Delete Success Modal */}
              <Modal 
                show={showDeleteSuccessModal} 
                onHide={() => setShowDeleteSuccessModal(false)} 
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Profile deleted successfully!
                </Modal.Body>
                <Modal.Footer>
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      setShowDeleteSuccessModal(false);
                      logout();
                    }}
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Logout Confirmation Modal */}
              <Modal 
                show={showLogoutModal} 
                onHide={() => setShowLogoutModal(false)} 
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to logout?
                </Modal.Body>
                <Modal.Footer>
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowLogoutModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button className="mt-3 bg-dark" onClick={() => navigate('/grievanceform')}>
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
 