import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal, Table } from 'react-bootstrap';
import useAdminAuth from '../hooks/useadminAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Adminprofile.css';

const AdminProfile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, confirmLogout, logout, showLogoutModal, setShowLogoutModal } = useAdminAuth();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [grievances, setGrievances] = useState([]);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [statusData, setStatusData] = useState({ status: '', remarks: '' });
  const [updateError, setUpdateError] = useState(null);
  const [statusError, setStatusError] = useState(null);
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [showStatusSuccessModal, setShowStatusSuccessModal] = useState(false);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!isAuthenticated && !loading) navigate('/login');
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname,
        email: user.email,
        dte: user.dte,
        committee: user.committee,
      });
      fetchGrievances();
    }
  }, [user]);

  const fetchGrievances = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/grievances/fetchgrievance`, { params: { commonId: 'all' } });
      setGrievances(response.data);
    } catch (err) {
      console.error('Error fetching grievances:', err);
    }
  };

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
    setGrievances([...grievances].sort((a, b) => {
      if (field === 'branch' || field === 'grievanceType') {
        return order === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
      }
      return 0;
    }));
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleStatusChange = (e) => setStatusData({ ...statusData, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    setUpdateLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.put(`${API_BASE_URL}/api/users/admin/update`, formData, { headers: { Authorization: `Bearer ${token}` } });
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
      await axios.delete(`${API_BASE_URL}/api/users/admin/delete`, { headers: { Authorization: `Bearer ${token}` } });
      setShowDeleteSuccessModal(true);
      setTimeout(() => { setShowDeleteSuccessModal(false); logout(); }, 5000);
    } catch (err) {
      setUpdateError('Failed to delete profile');
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    setStatusLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.post(`${API_BASE_URL}/api/grievances/close/${selectedGrievance.ticketId}`, statusData, { headers: { Authorization: `Bearer ${token}` } });
      setShowStatusModal(false);
      setShowStatusSuccessModal(true);
      fetchGrievances();
    } catch (err) {
      setStatusError(err.response?.data?.message || 'Failed to update status');
    } finally {
      setStatusLoading(false);
    }
  };

  if (loading) return <Container className="text-center"><Spinner animation="border" /><p>Loading...</p></Container>;
  if (error) return <Container><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="profile-container bg-dark-subtle">
      <Row>
        <Col md={10} className="mx-auto">
          <Card className="profile-card mt-4 shadow-lg">
            <Card.Body className="bg-white">
              <div className="profile-header">
                <Card.Title className="profile-title">Admin Profile</Card.Title>
                <Button className="logout-btn" variant="danger" onClick={confirmLogout}>Logout</Button>
              </div>
              <hr className="profile-divider" />
              <Card.Text><strong>Full Name:</strong> {user.fullname}</Card.Text>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
              <Card.Text><strong>DTE:</strong> {user.dte}</Card.Text>
              <Card.Text><strong>Committee:</strong> {user.committee}</Card.Text>

              <h5 className="mt-3">Grievances</h5>
              {grievances.length > 0 ? (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>PRN Number</th>
                      <th onClick={() => handleSort('branch')} style={{ cursor: 'pointer' }}>Branch {sortField === 'branch' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                      <th>Semester</th>
                      <th onClick={() => handleSort('grievanceType')} style={{ cursor: 'pointer' }}>Type {sortField === 'grievanceType' && (sortOrder === 'asc' ? '↑' : '↓')}</th>
                      <th>Message</th>
                      <th>Status</th>
                      <th>Remarks</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grievances.map((grievance) => (
                      <tr key={grievance.ticketId}>
                        <td>{grievance.ticketId}</td>
                        <td>{grievance.fullname}</td>
                        <td>{grievance.email}</td>
                        <td>{grievance.universityNumber}</td>
                        <td>{grievance.branch}</td>
                        <td>{grievance.semester}</td>
                        <td>{grievance.grievanceType}</td>
                        <td>{grievance.message}</td>
                        <td>{grievance.status}</td>
                        <td>{grievance.remarks || 'None'}</td>
                        <td>
                          <Button
                            variant="info"
                            disabled={grievance.status === 'resolved'}
                            onClick={() => {
                              setSelectedGrievance(grievance);
                              setStatusData({ status: grievance.status, remarks: grievance.remarks });
                              setShowStatusModal(true);
                            }}
                          >
                            Update
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p>No grievances found.</p>
              )}

              <Button variant="primary" className="mx-1 mt-3" onClick={() => setShowUpdateModal(true)}>Update Profile</Button>
              <Button variant="danger" className="mt-3 mx-1" onClick={handleDelete} disabled={deleteLoading}>
                {deleteLoading ? 'Deleting...' : 'Delete Profile'}
              </Button>

              {/* Modals */}
              <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Update Profile</Modal.Title></Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formFullname"><Form.Label>Full Name</Form.Label><Form.Control type="text" name="fullname" value={formData.fullname} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formEmail" className="mt-3"><Form.Label>Email</Form.Label><Form.Control type="email" name="email" value={formData.email} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formDTE" className="mt-3"><Form.Label>DTE</Form.Label><Form.Control type="text" name="dte" value={formData.dte} onChange={handleChange} /></Form.Group>
                    <Form.Group controlId="formCommittee" className="mt-3"><Form.Label>Committee</Form.Label>
                      <Form.Select name="committee" value={formData.committee} onChange={handleChange}>
                        <option value="">Select committee</option>
                        {['Anti Ragging Committee', 'Grievance Redressal Committee', 'Internal Complaint Committee', 'SC/ST, Women/Girls Complaint Committee', 'Online Grievance Form'].map(c => <option key={c} value={c}>{c}</option>)}
                      </Form.Select>
                    </Form.Group>
                    {updateError && <Alert variant="danger" className="mt-3">{updateError}</Alert>}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="bg-dark" onClick={() => setShowUpdateModal(false)}>Close</Button>
                  <Button variant="primary" onClick={handleUpdate} disabled={updateLoading}>{updateLoading ? 'Updating...' : 'Update'}</Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showStatusModal} onHide={() => setShowStatusModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Update Grievance Status</Modal.Title></Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleStatusUpdate}>
                    <Form.Group controlId="formStatus"><Form.Label>Status</Form.Label>
                      <Form.Select name="status" value={statusData.status} onChange={handleStatusChange} required>
                        <option value="not resolved">Not Resolved</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formRemarks" className="mt-3"><Form.Label>Remarks</Form.Label><Form.Control as="textarea" rows={3} name="remarks" value={statusData.remarks} onChange={handleStatusChange} /></Form.Group>
                    {statusError && <Alert variant="danger" className="mt-3">{statusError}</Alert>}
                    <Button variant="primary" type="submit" className="mt-3" disabled={statusLoading}>{statusLoading ? 'Updating...' : 'Update Status'}</Button>
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
              <Modal show={showStatusSuccessModal} onHide={() => setShowStatusSuccessModal(false)} centered>
                <Modal.Header closeButton><Modal.Title>Success</Modal.Title></Modal.Header>
                <Modal.Body>Grievance status updated successfully!</Modal.Body>
                <Modal.Footer><Button variant="primary" onClick={() => setShowStatusSuccessModal(false)}>OK</Button></Modal.Footer>
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

export default AdminProfile;