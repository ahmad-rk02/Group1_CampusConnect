import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner, Alert, Button, Form, Modal, Table, InputGroup, FormControl } from 'react-bootstrap';
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import useAdminAuth from '../hooks/useadminAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Adminprofile.css';

const AdminProfile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading, error, confirmLogout, logout, showLogoutModal, setShowLogoutModal } = useAdminAuth();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Added for delete confirmation
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [grievances, setGrievances] = useState([]);
  const [filteredGrievances, setFilteredGrievances] = useState([]);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [statusData, setStatusData] = useState({ status: '', remarks: '' });
  const [updateError, setUpdateError] = useState(null);
  const [statusError, setStatusError] = useState(null);
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [showStatusSuccessModal, setShowStatusSuccessModal] = useState(false);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
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

  useEffect(() => {
    filterGrievances();
  }, [grievances, searchTerm]);

  const fetchGrievances = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/grievances/fetchgrievance`, { params: { commonId: 'all' } });
      setGrievances(response.data);
    } catch (err) {
      console.error('Error fetching grievances:', err);
    }
  };

  const filterGrievances = () => {
    if (!searchTerm) {
      setFilteredGrievances([...grievances]);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = grievances.filter(grievance => 
      grievance.branch.toLowerCase().includes(lowercasedSearch) ||
      grievance.grievanceType.toLowerCase().includes(lowercasedSearch) ||
      grievance.ticketId.toLowerCase().includes(lowercasedSearch) ||
      grievance.fullname.toLowerCase().includes(lowercasedSearch) ||
      grievance.email.toLowerCase().includes(lowercasedSearch) ||
      grievance.universityNumber.toLowerCase().includes(lowercasedSearch)
    );

    setFilteredGrievances(filtered);
  };

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
    
    setFilteredGrievances([...filteredGrievances].sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
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
    setDeleteLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.delete(`${API_BASE_URL}/api/users/admin/delete`, { headers: { Authorization: `Bearer ${token}` } });
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

  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    setStatusLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      await axios.post(`${API_BASE_URL}/api/grievances/close/${selectedGrievance.ticketId}`, statusData, { headers: { Authorization: `Bearer ${token}` } });
      setShowStatusModal(false);
      setShowStatusSuccessModal(true);
      fetchGrievances();
      setTimeout(() => setShowStatusSuccessModal(false), 5000); // Auto-close success modal
    } catch (err) {
      setStatusError(err.response?.data?.message || 'Failed to update status');
    } finally {
      setStatusLoading(false);
    }
  };

  if (loading) return (
    <Container className="admin-profile-loading-container">
      <div className="admin-profile-loading-spinner">
        <Spinner animation="border" variant="primary" />
        <p className="admin-profile-loading-text">Loading...</p>
      </div>
    </Container>
  );
  
  if (error) return (
    <Container className="admin-profile-error-container">
      <Alert variant="danger" className="admin-profile-error-alert">{error}</Alert>
    </Container>
  );

  return (
    <Container className="admin-profile-container">
      <Row className="admin-profile-row">
        <Col md={12} className="admin-profile-col">
          <Card className="admin-profile-card shadow-lg">
            <Card.Body className="admin-profile-card-body">
              <div className="admin-profile-header">
                <Card.Title className="admin-profile-title">
                  <span className="admin-profile-title-text">Admin Profile</span>
                  <div className="admin-profile-header-actions">
                    <Button 
                      variant="outline-primary" 
                      className="admin-profile-refresh-btn"
                      onClick={fetchGrievances}
                      title="Refresh Grievances"
                    >
                      <FiRefreshCw className="admin-profile-refresh-icon" />
                    </Button>
                    <Button 
                      variant="danger" 
                      className="admin-profile-logout-btn"
                      onClick={confirmLogout}
                    >
                      Logout
                    </Button>
                  </div>
                </Card.Title>
              </div>
              
              <hr className="admin-profile-divider" />
              
              <div className="admin-profile-info">
                <div className="admin-profile-info-item">
                  <span className="admin-profile-info-label">Full Name:</span>
                  <span className="admin-profile-info-value">{user.fullname}</span>
                </div>
                <div className="admin-profile-info-item">
                  <span className="admin-profile-info-label">Email:</span>
                  <span className="admin-profile-info-value">{user.email}</span>
                </div>
                <div className="admin-profile-info-item">
                  <span className="admin-profile-info-label">DTE:</span>
                  <span className="admin-profile-info-value">{user.dte}</span>
                </div>
                <div className="admin-profile-info-item">
                  <span className="admin-profile-info-label">Committee:</span>
                  <span className="admin-profile-info-value">{user.committee}</span>
                </div>
              </div>

              <div className="admin-profile-actions">
                <Button 
                  variant="primary" 
                  className="admin-profile-update-btn"
                  onClick={() => setShowUpdateModal(true)}
                >
                  Update Profile
                </Button>
                <Button 
                  variant="danger" 
                  className="admin-profile-delete-btn"
                  onClick={() => setShowDeleteModal(true)} // Updated to open delete modal
                  disabled={deleteLoading}
                >
                  {deleteLoading ? 'Deleting...' : 'Delete Profile'}
                </Button>
              </div>

              {updateError && (
                <Alert variant="danger" className="admin-profile-error-alert mt-3">
                  {updateError}
                </Alert>
              )}

              <div className="admin-grievances-section">
                <h5 className="admin-grievances-title">Grievances</h5>
                
                <div className="admin-grievances-search">
                  <InputGroup className="admin-grievances-search-input-group">
                    <InputGroup.Text className="admin-grievances-search-icon">
                      <FiSearch />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Search by branch, type, name, email, PRN or ticket ID..."
                      className="admin-grievances-search-input"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                </div>
                
                {filteredGrievances.length > 0 ? (
                  <div className="admin-grievances-table-container">
                    <Table striped bordered hover className="admin-grievances-table">
                      <thead className="admin-grievances-table-header">
                        <tr>
                          <th className="admin-grievances-th admin-grievances-th-ticket">Ticket ID</th>
                          <th className="admin-grievances-th admin-grievances-th-name">Name</th>
                          <th className="admin-grievances-th admin-grievances-th-email">Email</th>
                          <th className="admin-grievances-th admin-grievances-th-prn">PRN Number</th>
                          <th 
                            className="admin-grievances-th admin-grievances-th-branch admin-grievances-sortable-header"
                            onClick={() => handleSort('branch')}
                          >
                            Branch {sortField === 'branch' && (sortOrder === 'asc' ? '↑' : '↓')}
                          </th>
                          <th className="admin-grievances-th admin-grievances-th-semester">Semester</th>
                          <th 
                            className="admin-grievances-th admin-grievances-th-type admin-grievances-sortable-header"
                            onClick={() => handleSort('grievanceType')}
                          >
                            Type {sortField === 'grievanceType' && (sortOrder === 'asc' ? '↑' : '↓')}
                          </th>
                          <th className="admin-grievances-th admin-grievances-th-message">Message</th>
                          <th className="admin-grievances-th admin-grievances-th-remarks">Remarks</th>
                          <th className="admin-grievances-th admin-grievances-th-status">Status</th>
                          
                          <th className="admin-grievances-th admin-grievances-th-action">Action</th>
                        </tr>
                      </thead>
                      <tbody className="admin-grievances-table-body">
                        {filteredGrievances.map((grievance) => (
                          <tr key={grievance.ticketId} className="admin-grievances-table-row">
                            <td className="admin-grievances-td admin-grievances-td-ticket">{grievance.ticketId}</td>
                            <td className="admin-grievances-td admin-grievances-td-name">{grievance.fullname}</td>
                            <td className="admin-grievances-td admin-grievances-td-email">{grievance.email}</td>
                            <td className="admin-grievances-td admin-grievances-td-prn">{grievance.universityNumber}</td>
                            <td className="admin-grievances-td admin-grievances-td-branch">{grievance.branch}</td>
                            <td className="admin-grievances-td admin-grievances-td-semester">{grievance.semester}</td>
                            <td className="admin-grievances-td admin-grievances-td-type">{grievance.grievanceType}</td>
                            <td className="admin-grievances-td admin-grievances-td-message">
                              <div className="admin-grievances-message-content">{grievance.message}</div>
                            </td>

                            <td className="admin-grievances-td admin-grievances-td-remarks">
                              <div className="admin-grievances-remarks-content">{grievance.remarks || 'None'}</div>
                            </td>
                            <td className="admin-grievances-td admin-grievances-td-status">
                              <span className={`admin-grievances-status-badge admin-grievances-status-${grievance.status.replace(/\s+/g, '-').toLowerCase()}`}>
                                {grievance.status}
                              </span>
                            </td>
                            <td className="admin-grievances-td admin-grievances-td-action">
                              <Button
                                variant="info"
                                size="sm"
                                className="admin-grievances-action-btn"
                                disabled={grievance.status === 'resolved'}
                                onClick={() => {
                                  setSelectedGrievance(grievance);
                                  setStatusData({ status: grievance.status, remarks: grievance.remarks || '' });
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
                  </div>
                ) : (
                  <div className="admin-grievances-empty">
                    {grievances.length === 0 ? 'No grievances found.' : 'No matching grievances found.'}
                  </div>
                )}
              </div>

              {/* Update Profile Modal */}
              <Modal 
                show={showUpdateModal} 
                onHide={() => setShowUpdateModal(false)} 
                centered
                className="admin-profile-modal"
              >
                <Modal.Header closeButton className="admin-profile-modal-header">
                  <Modal.Title className="admin-profile-modal-title">Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-profile-modal-body">
                  <Form className="admin-profile-update-form">
                    <Form.Group controlId="formFullname" className="admin-profile-form-group">
                      <Form.Label className="admin-profile-form-label">Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleChange} 
                        className="admin-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="admin-profile-form-group">
                      <Form.Label className="admin-profile-form-label">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="admin-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formDTE" className="admin-profile-form-group">
                      <Form.Label className="admin-profile-form-label">DTE</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="dte" 
                        value={formData.dte} 
                        onChange={handleChange} 
                        className="admin-profile-form-control"
                      />
                    </Form.Group>
                    <Form.Group controlId="formCommittee" className="admin-profile-form-group">
                      <Form.Label className="admin-profile-form-label">Committee</Form.Label>
                      <Form.Select 
                        name="committee" 
                        value={formData.committee} 
                        onChange={handleChange}
                        className="admin-profile-form-select"
                      >
                        <option value="">Select committee</option>
                        {['Anti Ragging Committee', 'Grievance Redressal Committee', 'Internal Complaint Committee', 'SC/ST, Women/Girls Complaint Committee', 'Online Grievance Form'].map(c => (
                          <option key={c} value={c} className="admin-profile-form-option">{c}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    {updateError && (
                      <Alert variant="danger" className="admin-profile-error-alert">
                        {updateError}
                      </Alert>
                    )}
                  </Form>
                </Modal.Body>
                <Modal.Footer className="admin-profile-modal-footer">
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowUpdateModal(false)}
                    className="admin-profile-modal-cancel-btn"
                  >
                    Close
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={handleUpdate} 
                    disabled={updateLoading}
                    className="admin-profile-modal-save-btn"
                  >
                    {updateLoading ? 'Updating...' : 'Update'}
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Update Status Modal */}
              <Modal 
                show={showStatusModal} 
                onHide={() => setShowStatusModal(false)} 
                centered
                className="admin-status-modal"
              >
                <Modal.Header closeButton className="admin-status-modal-header">
                  <Modal.Title className="admin-status-modal-title">
                    Update Grievance Status - {selectedGrievance?.ticketId}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-status-modal-body">
                  <Form onSubmit={handleStatusUpdate} className="admin-status-form">
                    <Form.Group controlId="formStatus" className="admin-status-form-group">
                      <Form.Label className="admin-status-form-label">Status</Form.Label>
                      <Form.Select 
                        name="status" 
                        value={statusData.status} 
                        onChange={handleStatusChange} 
                        required
                        className="admin-status-form-select"
                      >
                        <option value="not resolved">Not Resolved</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formRemarks" className="admin-status-form-group">
                      <Form.Label className="admin-status-form-label">Remarks</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="remarks" 
                        value={statusData.remarks} 
                        onChange={handleStatusChange} 
                        className="admin-status-form-textarea"
                      />
                    </Form.Group>
                    {statusError && (
                      <Alert variant="danger" className="admin-status-error-alert">
                        {statusError}
                      </Alert>
                    )}
                    <div className="admin-status-form-actions">
                      <Button 
                        variant="primary" 
                        type="submit" 
                        disabled={statusLoading}
                        className="admin-status-form-submit-btn"
                      >
                        {statusLoading ? 'Updating...' : 'Update Status'}
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
                className="admin-delete-modal"
              >
                <Modal.Header closeButton className="admin-delete-modal-header">
                  <Modal.Title className="admin-delete-modal-title">Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-delete-modal-body">
                  Are you sure you want to delete your profile? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer className="admin-delete-modal-footer">
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowDeleteModal(false)}
                    className="admin-delete-modal-cancel-btn"
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={handleDelete}
                    disabled={deleteLoading}
                    className="admin-delete-modal-confirm-btn"
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
                className="admin-success-modal"
              >
                <Modal.Header closeButton className="admin-success-modal-header">
                  <Modal.Title className="admin-success-modal-title">Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-success-modal-body">
                  Profile updated successfully!
                </Modal.Body>
                <Modal.Footer className="admin-success-modal-footer">
                  <Button 
                    variant="primary" 
                    onClick={() => setShowUpdateSuccessModal(false)}
                    className="admin-success-modal-ok-btn"
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal 
                show={showDeleteSuccessModal} 
                onHide={() => setShowDeleteSuccessModal(false)} 
                centered
                className="admin-success-modal"
              >
                <Modal.Header closeButton className="admin-success-modal-header">
                  <Modal.Title className="admin-success-modal-title">Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-success-modal-body">
                  Profile deleted successfully!
                </Modal.Body>
                <Modal.Footer className="admin-success-modal-footer">
                  <Button 
                    variant="primary" 
                    onClick={() => { setShowDeleteSuccessModal(false); logout(); }}
                    className="admin-success-modal-ok-btn"
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal 
                show={showStatusSuccessModal} 
                onHide={() => setShowStatusSuccessModal(false)} 
                centered
                className="admin-success-modal"
              >
                <Modal.Header closeButton className="admin-success-modal-header">
                  <Modal.Title className="admin-success-modal-title">Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-success-modal-body">
                  Grievance status updated successfully!
                </Modal.Body>
                <Modal.Footer className="admin-success-modal-footer">
                  <Button 
                    variant="primary" 
                    onClick={() => setShowStatusSuccessModal(false)} // Fixed typo in function name
                    className="admin-success-modal-ok-btn"
                  >
                    OK
                  </Button>
                </Modal.Footer>
              </Modal>
              <Modal 
                show={showLogoutModal} 
                onHide={() => setShowLogoutModal(false)} 
                centered
                className="admin-logout-modal"
              >
                <Modal.Header closeButton className="admin-logout-modal-header">
                  <Modal.Title className="admin-logout-modal-title">Confirm Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body className="admin-logout-modal-body">
                  Are you sure you want to logout?
                </Modal.Body>
                <Modal.Footer className="admin-logout-modal-footer">
                  <Button 
                    variant="secondary" 
                    onClick={() => setShowLogoutModal(false)}
                    className="admin-logout-modal-cancel-btn"
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="danger" 
                    onClick={logout}
                    className="admin-logout-modal-confirm-btn"
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