import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal } from 'react-bootstrap';
import useAdminAuth from '../hooks/useAdminAuth'; // Use the corrected hook for admin authentication
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminDashboard from './AdminGrievanceDisplay';

const AdminProfile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, logout } = useAdminAuth();

  // State management for modal and data
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [formData, setFormData] = useState({}); // Pre-fill with admin data
  const [updateError, setUpdateError] = useState(null); // Error state for update

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      navigate('/login'); // Redirect to login
    }
  }, [isAuthenticated, loading, navigate]);

  // Handle form change for profile update
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle profile update
  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put('http://localhost:5000/api/users/admin/update', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
 
      Object.assign(user, response.data.updatedUser); // Update admin data
      setShowUpdateModal(false); 
    } catch (err) {
      setUpdateError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  // Handle profile deletion
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete your profile?');
    if (!confirm) return;

    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete('http://localhost:5000/api/users/admin/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Profile deleted successfully');
      logout(); // Logout after deleting profile
    } catch (err) {
      alert('Failed to delete profile');
    } finally {
      setDeleteLoading(false);
    }
  };

  // Populate form data with admin information
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

  // Show loading spinner if data is still being fetched
  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" />
        <p>Loading...</p>
      </Container>
    );
  }

  // Show error alert if there is an error
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
                <Button className="logout-btn" variant="danger" onClick={logout}>
                  Logout
                </Button>
              </div>
              <hr className="profile-divider " />
              <Card.Text className='bg-white'><strong>Full Name:</strong> {user.fullname}</Card.Text>
              <Card.Text className='bg-white'><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text className='bg-white'><strong>DTE:</strong> {user.dte}</Card.Text>
              <Card.Text className='bg-white'><strong>Committee:</strong> {user.committee}</Card.Text>

              <AdminDashboard />

              {/* Button to open the update modal */}
              <Button
                variant="primary"
                className="mx-1 mt-3"
                onClick={() => setShowUpdateModal(true)}
              >
                Update Profile
              </Button>

              {/* Button to delete profile */}
              <Button
                variant="danger"
                className="mt-3 mx-1"
                onClick={handleDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? 'Deleting...' : 'Delete Profile'}
              </Button>

              {/* Modal for updating profile */}
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;
