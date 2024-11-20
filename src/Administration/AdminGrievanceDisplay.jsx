import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [remarks, setRemarks] = useState({}); 

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/grievances/fetchgrievance');
        console.log('Fetched grievances:', response.data); 
        setGrievances(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching grievances:', error);
        setError('Failed to fetch grievances. Please try again later.');
        setLoading(false);
      }
    };
    fetchGrievances();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

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

  return (
    <div>
      <h1>Grievance Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Email</th>
            <th>Grievance Description</th>
            <th>Status</th>
            <th>Remarks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map(grievance => (
            <tr key={grievance.ticketId}>
              <td>{grievance.ticketId}</td>
              <td>{grievance.email}</td>
              <td>{grievance.message}</td>
              <td>{grievance.status}</td>
              <td>
                {grievance.status === 'open' && (
                  <input 
                    type="text" 
                    placeholder="Enter remarks" 
                    value={remarks[grievance.ticketId] || ''}
                    onChange={(e) => handleRemarksChange(grievance.ticketId, e)} 
                  />
                )}
              </td>
              <td>
                {grievance.status === 'open' && (
                  <button onClick={() => closeGrievance(grievance.ticketId)}>Close</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
