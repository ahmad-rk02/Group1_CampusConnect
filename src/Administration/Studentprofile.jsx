import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import { FiRefreshCw } from 'react-icons/fi';
import useAuth from '../hooks/usestudentAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './studentprofile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, confirmLogout, logout, showLogoutModal, setShowLogoutModal } = useAuth();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showGrievanceModal, setShowGrievanceModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Added for delete confirmation
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [grievanceLoading, setGrievanceLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [grievanceData, setGrievanceData] = useState({ grievanceType: '', message: '' });
  const [grievances, setGrievances] = useState([]);
  const [updateError, setUpdateError] = useState(null);
  const [grievanceError, setGrievanceError] = useState(null);
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [showGrievanceSuccessModal, setShowGrievanceSuccessModal] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!isAuthenticated && !loading) navigate('/login');
  }, [isAuthenticated, loading, navigate]);

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
      fetchGrievances();
    }
  }, [user]);

  const fetchGrievances = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/grievances/fetchgrievance`, { params: { commonId: user.email } });
      setGrievances(response.data);
    } catch (err) {
      console.error('Error fetching grievances:', err);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleGrievanceChange = (e) => setGrievanceData({ ...grievanceData, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(`${API_BASE_URL}/api/users/student/update`, formData, { headers: { Authorization: `Bearer ${token}` } });
      Object.assign(user, response.data.updatedUser);
      setShowUpdateModal(false);
      setShowUpdateSuccessModal(true);
      setTimeout(() => setShowUpdateSuccessModal(false), 5000);
    } catch (err) {
      setUpdateError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${API_BASE_URL}/api/users/student/delete`, { headers: { Authorization: `Bearer ${token}` } });
      setShowDeleteModal(false);
      setShowDeleteSuccessModal(true);
      setTimeout(() => {
        setShowDeleteSuccessModal(false);
        logout();
      }, 5000);
    } catch (err) {
      setUpdateError(err.response?.data?.message || 'Failed to delete profile');
      setShowDeleteModal(false);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleGrievanceSubmit = async (e) => {
    e.preventDefault();
    setGrievanceLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.post(`${API_BASE_URL}/api/grievances/submit`, {
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        universityNumber: user.prnNumber,
        branch: user.branch,
        semester: user.semester,
        grievanceType: grievanceData.grievanceType,
        message: grievanceData.message,
      }, { headers: { Authorization: `Bearer ${token}` } });
      setGrievanceData({ grievanceType: '', message: '' });
      setShowGrievanceModal(false);
      setShowGrievanceSuccessModal(true);
      setTimeout(() => setShowGrievanceSuccessModal(false), 5000);
    } catch (err) {
      setGrievanceError(err.response?.data?.message || 'Failed to submit grievance');
    } finally {
      setGrievanceLoading(false);
    }
  };

  if (loading) return (
    <Container className="student-profile-loading-container">
      <div className="student-profile-loading-spinner">
        <Spinner animation="border" variant="primary" />
        <p className="student-profile-loading-text">Loading...</p>
      </div>
    </Container>
  );

  if (error) return (
    <Container className="student-profile-error-container">
      <Alert variant="danger" className="student-profile-error-alert">{error}</Alert>
    </Container>
  );

  return (
    <Container className="student-profile-container">
      <Row className="student-profile-row">
        <Col md={8} className="student-profile-col mx-auto">
          <Card className="student-profile-card shadow-lg">
            <Card.Body className="student-profile-card-body">
              <div className="student-profile-header">
                <Card.Title className="student-profile-title">
                  <span className="student-profile-title-text">Student Profile</span>
                  <div className="student-profile-header-actions">
                    <Button 
                      variant="outline-primary" 
                      className="student-profile-refresh-btn"
                      onClick={fetchGrievances}
                      title="Refresh Grievances"
                    >
                      <FiRefreshCw className="student-profile-refresh-icon" />
                    </Button>
                    <Button 
                      variant="danger" 
                      className="student-profile-logout-btn"
                      onClick={confirmLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </Card.Title>
              </div>

              <hr className="student-profile-divider" />

              <div className="student-profile-info">
                <div className="student-profile-info-item">
                  <span className="student-profile-info-label">Full Name:</span>
                  <span className="student-profile-info-value">{user.fullname}</span>
                </div>
                <div className="student-profile-info-item">
                  <span className="student-profile-info-label">Email:</span>
                  <span className="student-profile-info-value">{user.email}</span>
                </div>
                <div className="student-profile-info-item">
                  <span className="student-profile-info-label">Phone:</span>
                  <span className="student-profile-info-value">{user.phone}</span>
                </div>
                <div className="student-profile-info-item">
                  <span className="student-profile-info-label">PRN Number:</span>
                  <span className="student-profile-info-value">{user.prnNumber}</span>
                </div>
                <div className="student-profile-info-item">
                  <span className="student-profile-info-label">Semester:</span>
                  <span className="student-profile-info-value">{user.semester}</span>
                </div>
                <div className="student-profile-info-item">
                  <span className="student-profile-info-label">Branch:</span>
                  <span className="student-profile-info-value">{user.branch}</span>
                </div>
              </div>

              <div className="student-profile-actions">
                <Button 
                  variant="primary" 
                  className="student-profile-update-btn"
                  onClick={() => setShowUpdateModal(true)}
                >
                  Update Profile
                </Button>
                <Button 
                  variant="danger" 
                  className="student-profile-delete-btn"
                  onClick={() => setShowDeleteModal(true)}
                  disabled={deleteLoading}
                >
                  {deleteLoading ? 'Deleting...' : 'Delete Profile'}
                </Button>
                <Button 
                  variant="success" 
                  className="student-profile-grievance-btn"
                  onClick={() => setShowGrievanceModal(true)}
                >
                  Submit Grievance
                </Button>
              </div>

              {updateError && (
                <Alert variant="danger" className="student-profile-error-alert mt-3">
                  {updateError}
                </Alert>
              )}

              <div className="student-grievances-section">
                <h5 className="student-grievances-title">Your Grievances</h5>
                {grievances.length > 0 ? (
                  <div className="student-grievances-table-container">
                    <Table striped bordered hover className="student-grievances-table">
                      <thead className="student-grievances-table-header">
                        <tr>
                          <th className="student-grievances-th student-grievances-th-ticket">Ticket ID</th>
                          <th className="student-grievances-th student-grievances-th-type">Type</th>
                          <th className="student-grievances-th student-grievances-th-message">Message</th>
                          <th className="student-grievances-th student-grievances-th-remarks">Remarks</th>
                          <th className="student-grievances-th student-grievances-th-status">Status</th>
                
                        </tr>
                      </thead>
                      <tbody className="student-grievances-table-body">
                        {grievances.map((grievance) => (
                          <tr key={grievance.ticketId} className="student-grievances-table-row">
                            <td className="student-grievances-td student-grievances-td-ticket">{grievance.ticketId}</td>
                            <td className="student-grievances-td student-grievances-td-type">{grievance.grievanceType}</td>
                            <td className="student-grievances-td student-grievances-td-message">
                              <div className="student-grievances-message-content">{grievance.message}</div>
                            </td>
                            <td className="student-grievances-td student-grievances-td-remarks">
                              <div className="student-grievances-remarks-content">{grievance.remarks || 'None'}</div>
                            </td>
                            <td className="student-grievances-td student-grievances-td-status">
                              <span className={`student-grievances-status-badge student-grievances-status-${grievance.status.replace(/\s+/g, '-').toLowerCase()}`}>
                                {grievance.status}
                              </span>
                            </td>

                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  <div className="student-grievances-empty">No grievances submitted yet.</div>
                )}
              </div>

              {/* Update Profile Modal */}
              <Modal 
                show={showUpdateModal} 
                onHide={() => setShowUpdateModal(false)} 
                centered
                className="student-profile-modal"
              >
                <Modal.Header closeButton className="student-profile-modal-header">
                  <Modal.Title className="student-profile-modal-title">Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-profile-modal-body">
                  <Form className="student-profile-update-form">
                    <Form.Group controlId="formFullname" className="student-profile-form-group">
                      <Form.Label className="student-profile-form-label">Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleChange} 
                        className="student-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="student-profile-form-group">
                      <Form.Label className="student-profile-form-label">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="student-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone" className="student-profile-form-group">
                      <Form.Label className="student-profile-form-label">Phone</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="student-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formPRN" className="student-profile-form-group">
                      <Form.Label className="student-profile-form-label">PRN Number</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="prnNumber" 
                        value={formData.prnNumber} 
                        onChange={handleChange} 
                        className="student-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formSemester" className="student-profile-form-group">
                      <Form.Label className="student-profile-form-label">Semester</Form.Label>
                      <Form.Select 
                        name="semester" 
                        value={formData.semester} 
                        onChange={handleChange}
                        className="student-profile-form-select"
                      >
                        <option value="">-- Select Semester --</option>
                        {['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'].map(s => (
                          <option key={s} value={s} className="student-profile-form-option">{s}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formBranch" className="student-profile-form-group">
                      <Form.Label className="student-profile-form-label">Branch</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="branch" 
                        value={formData.branch} 
                        onChange={handleChange} 
                        className="student-profile-form-control"
                      />
                    </Form.Group>
                    {updateError && (
                      <Alert variant="danger" className="student-profile-error-alert">
                        {updateError}
                      </Alert>
                    )}
                  </Form>
                </Modal.Body>
                <Modal.Footer className="student-profile-modal-footer">
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowUpdateModal(false)}
                    className="student-profile-modal-cancel-btn"
                  >
                    Close
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={handleUpdate} 
                    disabled={updateLoading}
                    className="student-profile-modal-save-btn"
                  >
                    {updateLoading ? 'Updating...' : 'Update Profile'}
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Submit Grievance Modal */}
              <Modal 
                show={showGrievanceModal} 
                onHide={() => setShowGrievanceModal(false)} 
                centered
                className="student-grievance-modal"
              >
                <Modal.Header closeButton className="student-grievance-modal-header">
                  <Modal.Title className="student-grievance-modal-title">Submit Grievance</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-grievance-modal-body">
                  <Form onSubmit={handleGrievanceSubmit} className="student-grievance-form">
                    <Form.Group controlId="formGrievanceType" className="student-grievance-form-group">
                      <Form.Label className="student-grievance-form-label">Grievance Type</Form.Label>
                      <Form.Select 
                        name="grievanceType" 
                        value={grievanceData.grievanceType} 
                        onChange={handleGrievanceChange} 
                        required
                        className="student-grievance-form-select"
                      >
                        <option value="">Select Type</option>
                        <option value="departmental">Departmental</option>
                        <option value="office">Office</option>
                        <option value="others">Others</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formMessage" className="student-grievance-form-group">
                      <Form.Label className="student-grievance-form-label">Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="message" 
                        value={grievanceData.message} 
                        onChange={handleGrievanceChange} 
                        required
                        className="student-grievance-form-textarea"
                      />
                    </Form.Group>
                    {grievanceError && (
                      <Alert variant="danger" className="student-grievance-error-alert">
                        {grievanceError}
                      </Alert>
                    )}
                    <div className="student-grievance-form-actions">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        disabled={grievanceLoading}
                        className="student-grievance-form-submit-btn"
                      >
                        {grievanceLoading ? 'Submitting...' : 'Submit Grievance'}
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>

              {/* Delete Confirmation Modal */}
              <Modal 
                show={showDeleteModal} 
                onHide={() => setShowDeleteModal(false)} 
                centered
                className="student-delete-modal"
              >
                <Modal.Header closeButton className="student-delete-modal-header">
                  <Modal.Title className="student-delete-modal-title">Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-delete-modal-body">
                  Are you sure you want to delete your profile? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer className="student-delete-modal-footer">
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowDeleteModal(false)}
                    className="student-delete-modal-cancel-btn"
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={handleDelete}
                    disabled={deleteLoading}
                    className="student-delete-modal-confirm-btn"
                  >
                    {deleteLoading ? 'Deleting...' : 'Delete'}
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Success Modals */}
              <Modal 
                show={showUpdateSuccessModal} 
                onHide={() => setShowUpdateSuccessModal(false)} 
                centered
                className="student-success-modal"
              >
                <Modal.Header closeButton className="student-success-modal-header">
                  <Modal.Title className="student-success-modal-title">Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-success-modal-body">
                  Profile updated successfully!
                </Modal.Body>
                <Modal.Footer className="student-success-modal-footer">
                  <Button 
                    variant="primary" 
                    onClick={() => setShowUpdateSuccessModal(false)}
                    className="student-success-modal-ok-btn"
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal 
                show={showDeleteSuccessModal} 
                onHide={() => setShowDeleteSuccessModal(false)} 
                centered
                className="student-success-modal"
              >
                <Modal.Header closeButton className="student-success-modal-header">
                  <Modal.Title className="student-success-modal-title">Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-success-modal-body">
                  Profile deleted successfully!
                </Modal.Body>
                <Modal.Footer className="student-success-modal-footer">
                  <Button 
                    variant="primary" 
                    onClick={() => { setShowDeleteSuccessModal(false); logout(); }}
                    className="student-success-modal-ok-btn"
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal 
                show={showGrievanceSuccessModal} 
                onHide={() => setShowGrievanceSuccessModal(false)} 
                centered
                className="student-success-modal"
              >
                <Modal.Header closeButton className="student-success-modal-header">
                  <Modal.Title className="student-success-modal-title">Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-success-modal-body">
                  Grievance submitted successfully! Check your email for confirmation.
                </Modal.Body>
                <Modal.Footer className="student-success-modal-footer">
                  <Button 
                    variant="primary" 
                    onClick={() => { setShowGrievanceSuccessModal(false); fetchGrievances(); }}
                    className="student-success-modal-ok-btn"
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
                className="student-logout-modal"
              >
                <Modal.Header closeButton className="student-logout-modal-header">
                  <Modal.Title className="student-logout-modal-title">Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body className="student-logout-modal-body">
                  Are you sure you want to logout?
                </Modal.Body>
                <Modal.Footer className="student-logout-modal-footer">
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowLogoutModal(false)}
                    className="student-logout-modal-cancel-btn"
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={logout}
                    className="student-logout-modal-confirm-btn"
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

export default Profile;