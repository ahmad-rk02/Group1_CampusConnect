import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal } from 'react-bootstrap';
import useAdminAuth from '../hooks/useadminAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminDashboard from './AdminGrievanceDisplay';
import "./Adminprofile.css";

const AdminProfile = () => {
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
  } = useAdminAuth();

  // State management
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateError, setUpdateError] = useState(null);
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false); // Update success modal
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false); // Delete success modal
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(`${API_BASE_URL}/api/users/admin/update`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Object.assign(user, response.data.updatedUser);
      setShowUpdateModal(false);
      setShowUpdateSuccessModal(true); // Show success modal
      setTimeout(() => setShowUpdateSuccessModal(false), 5000); // Auto-close after 2 seconds
    } catch (err) {
      setUpdateError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete your profile?');
    if (!confirm) return;

    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${API_BASE_URL}/api/users/admin/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowDeleteSuccessModal(true); 
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
        dte: user.dte,
        committee: user.committee,
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
                <Card.Title className="profile-title">Admin Profile</Card.Title>
                <Button className="logout-btn" variant="danger" onClick={confirmLogout}>
                  Logout
                </Button>
              </div>
              <hr className="profile-divider" />
              <Card.Text className='bg-white'><strong>Full Name:</strong> {user.fullname}</Card.Text>
              <Card.Text className='bg-white'><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text className='bg-white'><strong>DTE:</strong> {user.dte}</Card.Text>
              <Card.Text className='bg-white'><strong>Committee:</strong> {user.committee}</Card.Text>

              <AdminDashboard />

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

                    <Form.Group controlId="formDTE" className="mt-3">
                      <Form.Label>DTE</Form.Label>
                      <Form.Control
                        type="text"
                        name="dte"
                        value={formData.dte}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formCommittee" className="mt-3">
                      <Form.Label>Committee</Form.Label>
                      <Form.Select
                        name="committee"
                        value={formData.committee}
                        onChange={handleChange}
                      >
                        <option value="">Select committee</option>
                        <option value="Anti Ragging Committee">Anti Ragging Committee</option>
                        <option value="Grievance Redressal Committee">Grievance Redressal Committee</option>
                        <option value="Internal Complaint Committee">Internal Complaint Committee</option>
                        <option value="SC/ST, Women/Girls Complaint Committee">SC/ST, Women/Girls Complaint Committee</option>
                        <option value="Online Grievance Form">Online Grievance Form</option>
                      </Form.Select>
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
                    {updateLoading ? 'Updating...' : 'Update'}
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;

 