import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentGrievanceDisplay.css';

const StudentProfile = () => {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state

  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/grievances/fetchgrievance');
        console.log('Fetched grievances:', response.data); // Debugging line to check API response
        setGrievances(response.data); // Store the fetched data in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching grievances:', error);
        setError('Failed to fetch grievances. Please try again later.');
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchGrievances();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <h1>My Grievances</h1>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Email</th>
            <th>Grievance Description</th>
            <th>Remarks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {grievances.length > 0 ? (
            grievances.map(grievance => (
              <tr key={grievance.ticketId}>
                <td>{grievance.ticketId}</td>
                <td>{grievance.email}</td>
                <td>{grievance.message}</td>
                <td>{grievance.remarks}</td>
                <td>{grievance.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No grievances found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentProfile;
