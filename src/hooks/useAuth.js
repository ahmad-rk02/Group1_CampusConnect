import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        setIsAuthenticated(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Authentication failed');
        setIsAuthenticated(false);
        localStorage.removeItem('authToken'); // Optional: clear token if auth fails
        navigate('/login'); // Redirect to login page if authentication fails
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return { user, isAuthenticated, loading, error,logout };
};

export default useAuth;
