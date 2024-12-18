import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentGrievanceDisplay.css';
import useAuth from '../hooks/usestudentAuth';

const StudentProfile = () => {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        if (!email) return;
        const response = await axios.get('http://localhost:5000/api/grievances/fetchgrievance', {
          params: { commonId: email },
        });
        setGrievances(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch grievances. Please try again later.');
        setLoading(false);
      }
    };

    fetchGrievances();
  }, [email]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="student-profile-container">
      <h1 className="profile-heading">My Grievances</h1>
      <div className="table-container">
        <table className="grievance-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Email</th>
              <th>Grievance Type</th>
              <th>Grievance Description</th>
              <th>Remarks</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {grievances.length > 0 ? (
              grievances.map((grievance) => (
                <tr key={grievance.ticketId}>
                  <td>{grievance.ticketId}</td>
                  <td>{grievance.email}</td>
                  <td>{grievance.grievanceType}</td>
                  <td>{grievance.message}</td>
                  <td>{grievance.remarks}</td>
                  <td>{grievance.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No grievances found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;
