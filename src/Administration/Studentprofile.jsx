import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import useAuth from '../hooks/usestudentAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './studentprofile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, confirmLogout, logout, showLogoutModal, setShowLogoutModal } = useAuth();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showGrievanceModal, setShowGrievanceModal] = useState(false);
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
    if (!window.confirm('Are you sure you want to delete your profile?')) return;
    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${API_BASE_URL}/api/users/student/delete`, { headers: { Authorization: `Bearer ${token}` } });
      setShowDeleteSuccessModal(true);
      setTimeout(() => { setShowDeleteSuccessModal(false); logout(); }, 5000);
    } catch (err) {
      setUpdateError('Failed to delete profile');
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleGrievanceSubmit = async (e) => {
    e.preventDefault();
    setGrievanceLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(`${API_BASE_URL}/api/grievances/submit`, {
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
      fetchGrievances();
    } catch (err) {
      setGrievanceError(err.response?.data?.message || 'Failed to submit grievance');
    } finally {
      setGrievanceLoading(false);
    }
  };

  if (loading) return <Container className="text-center"><Spinner animation="border" /><p>Loading...</p></Container>;
  if (error) return <Container><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="profile-container bg-dark-subtle">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="profile-card mt-4 shadow-lg">
            <Card.Body className="bg-white">
              <div className="profile-header">
                <Card.Title className="profile-title">User Profile</Card.Title>
                <Button className="logout-btn" variant="danger" onClick={confirmLogout}>Logout</Button>
              </div>
              <hr className="profile-divider" />
              <Card.Text><strong>Full Name:</strong> {user.fullname}</Card.Text>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text><strong>Phone:</strong> {user.phone}</Card.Text>
              <Card.Text><strong>PRN Number:</strong> {user.prnNumber}</Card.Text>
              <Card.Text><strong>Semester:</strong> {user.semester}</Card.Text>
              <Card.Text><strong>Branch:</strong> {user.branch}</Card.Text>

              <h5 className="mt-3">Grievances</h5>
              {grievances.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Type</th>
                      <th>Message</th>
                      <th>Status</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grievances.map((grievance) => (
                      <tr key={grievance.ticketId}>
                        <td>{grievance.ticketId}</td>
                        <td>{grievance.grievanceType}</td>
                        <td>{grievance.message}</td>
                        <td>{grievance.status}</td>
                        <td>{grievance.remarks || 'None'}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No grievances submitted yet.</p>
              )}

              <Button variant="primary" className="mx-1 mt-3" onClick={() => setShowUpdateModal(true)}>Update Profile</Button>
              <Button variant="danger" className="mt-3 mx-1" onClick={handleDelete} disabled={deleteLoading}>
                {deleteLoading ? 'Deleting...' : 'Delete Profile'}
              </Button>
              <Button variant="success" className="mt-3 mx-1" onClick={() => setShowGrievanceModal(true)}>Submit Grievance</Button>

              {/* Modals */}
              <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Update Profile</Modal.Title></Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formFullname"><Form.Label>Full Name</Form.Label><Form.Control type="text" name="fullname" value={formData.fullname} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formEmail" className="mt-3"><Form.Label>Email</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formPhone" className="mt-3"><Form.Label>Phone</Form.Label><Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formPRN" className="mt-3"><Form.Label>PRN Number</Form.Label><Form.Control type="text" name="prnNumber" value={formData.prnNumber} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formSemester" className="mt-3"><Form.Label>Semester</Form.Label>
                      <Form.Select name="semester" value={formData.semester} onChange={handleChange}>
                        <option value="">-- Select Semester --</option>
                        {['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'].map(s => <option key={s} value={s}>{s}</option>)}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formBranch" className="mt-3"><Form.Label>Branch</Form.Label><Form.Control type="text" name="branch" value={formData.branch} onChange={handleChange} /></Form.Group>
                    {updateError && <Alert variant="danger" className="mt-3">{updateError}</Alert>}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="bg-dark" onClick={() => setShowUpdateModal(false)}>Close</Button>
                  <Button variant="primary" onClick={handleUpdate} disabled={updateLoading}>{updateLoading ? 'Updating...' : 'Update Profile'}</Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showGrievanceModal} onHide={() => setShowGrievanceModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Submit Grievance</Modal.Title></Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleGrievanceSubmit}>
                    <Form.Group controlId="formGrievanceType"><Form.Label>Grievance Type</Form.Label>
                      <Form.Select name="grievanceType" value={grievanceData.grievanceType} onChange={handleGrievanceChange} required>
                        <option value="">Select Type</option>
                        <option value="departmental">Departmental</option>
                        <option value="office">Office</option>
                        <option value="others">Others</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formMessage" className="mt-3"><Form.Label>Message</Form.Label><Form.Control as="textarea" rows={3} name="message" value={grievanceData.message} onChange={handleGrievanceChange} required /></Form.Group>
                    {grievanceError && <Alert variant="danger" className="mt-3">{grievanceError}</Alert>}
                    <Button variant="primary" type="submit" className="mt-3" disabled={grievanceLoading}>{grievanceLoading ? 'Submitting...' : 'Submit Grievance'}</Button>
                  </Form>
                </Modal.Body>
              </Modal>

              <Modal show={showUpdateSuccessModal} onHide={() => setShowUpdateSuccessModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Success</Modal.Title></Modal.Header>
                <Modal.Body>Profile updated successfully!</Modal.Body>
                <Modal.Footer><Button variant="primary" onClick={() => setShowUpdateSuccessModal(false)}>OK</Button></Modal.Footer>
              </Modal>
              <Modal show={showDeleteSuccessModal} onHide={() => setShowDeleteSuccessModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Success</Modal.Title></Modal.Header>
                <Modal.Body>Profile deleted successfully!</Modal.Body>
                <Modal.Footer><Button variant="primary" onClick={() => { setShowDeleteSuccessModal(false); logout(); }}>OK</Button></Modal.Footer>
              </Modal>
              <Modal show={showGrievanceSuccessModal} onHide={() => setShowGrievanceSuccessModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Success</Modal.Title></Modal.Header>
                <Modal.Body>Grievance submitted successfully! Check your email for confirmation.</Modal.Body>
                <Modal.Footer><Button variant="primary" onClick={() => { setShowGrievanceSuccessModal(false); fetchGrievances(); }}>OK</Button></Modal.Footer>
              </Modal>
              <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Confirm Logout</Modal.Title></Modal.Header>
                <Modal.Body>Are you sure you want to logout?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>Cancel</Button>
                  <Button variant="danger" onClick={logout}>Logout</Button>
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