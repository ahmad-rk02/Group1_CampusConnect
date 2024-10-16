import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAdminAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken'); // Fetch token from local storage

        if (!token) {
          throw new Error('No token found');
        }

        // Call admin profile endpoint
        const response = await axios.get('http://localhost:5000/api/users/admin/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token for authentication
          },
        });

        setUser(response.data); // Set the admin data
        setIsAuthenticated(true); // Mark as authenticated
      } catch (err) {
        setError(err.response?.data?.message || 'Admin authentication failed');
        setIsAuthenticated(false); 
        localStorage.removeItem('authToken'); 
        navigate('/login'); // Redirect to login page
      } finally {
        setLoading(false); // Stop loading once done
      }
    };

    fetchAdmin();
  }, [navigate]);

  // Logout function to clear the session
  const logout = () => {
    localStorage.removeItem('authToken'); // Clear token from local storage
    setUser(null); // Reset admin data
    setIsAuthenticated(false); 
    alert("Log out successfully");
    navigate('/login'); 
  };

  return { user, isAuthenticated, loading, error, logout };
};

export default useAdminAuth;
