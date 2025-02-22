import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../hooks/usestudentAuth';
import './AdminGrievanceDisplay.css'

const AdminDashboard = () => {
  const [grievances, setGrievances] = useState([]);
  const [filteredGrievances, setFilteredGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [remarks, setRemarks] = useState({});
  const [filter, setFilter] = useState('all');
  const { user } = useAuth();

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/grievances/fetchgrievance', {
          params: {
            commonId: user?.role === 'admin' ? 'all' : user?.email
          },
        });
        setGrievances(response.data);
        setFilteredGrievances(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch grievances. Please try again later.');
        setLoading(false);
      }
    };
    if (user) fetchGrievances();
  }, [user]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredGrievances(grievances);
    } else {
      setFilteredGrievances(grievances.filter(g => g.grievanceType === filter));
    }
  }, [filter, grievances]);

  const closeGrievance = async (ticketId) => {
    const grievanceRemarks = remarks[ticketId];
    try {
      await axios.post(`http://localhost:5000/api/grievances/close/${ticketId}`, { remarks: grievanceRemarks });
      alert('Grievance closed successfully');
      setGrievances(grievances.map(grievance => grievance.ticketId === ticketId ? { ...grievance, status: 'closed', remarks: grievanceRemarks } : grievance));
    } catch (err) {
      alert('Error closing grievance');
    }
  };

  const handleRemarksChange = (ticketId, event) => {
    setRemarks(prevRemarks => ({
      ...prevRemarks,
      [ticketId]: event.target.value
    }));
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Grievance Dashboard</h1>

      {/* Filter Section */}
      <div className="filter-container">
        <label htmlFor="filter" className="filter-label">Filter by Grievance Type:</label>
        <select
          id="filter"
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Computer Science & Engineering Dept. Related">Computer Science & Engineering Dept. Related</option>
          <option value=">Instrumentation Engineering Dept. Related">Instrumentation Engineering Dept. Related</option>
          <option value="Mechanical Engineering Dept. Related">Mechanical Engineering Dept. Related</option>
          <option value="Electrical engineering Dept. Related">Electrical engineering Dept. Related</option>
          <option value="Electronics and Communication Dept. Related">Electronics and Communication Dept. Related</option>
          <option value="Civil Dept. Related">Civil Dept. Related</option>
          <option value="Office Related">Office Related</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Grievance Table */}
      <div className="table-container">
        <table className="grievance-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Email</th>
              <th>Grievance Type</th>
              <th>Grievance Description</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrievances.map((grievance) => (
              <tr key={grievance.ticketId}>
                <td>{grievance.ticketId}</td>
                <td>{grievance.email}</td>
                <td>{grievance.grievanceType}</td>
                <td>{grievance.message}</td>
                <td>{grievance.status}</td>
                <td>
                  {grievance.status === 'open' && (
                    <input
                      type="text"
                      className="remarks-input"
                      placeholder="Enter remarks"
                      value={remarks[grievance.ticketId] || ''}
                      onChange={(e) => handleRemarksChange(grievance.ticketId, e)}
                    />
                  )}
                </td>
                <td>
                  {grievance.status === 'open' && (
                    <button
                      className="close-button"
                      onClick={() => closeGrievance(grievance.ticketId)}
                    >
                      Close
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
