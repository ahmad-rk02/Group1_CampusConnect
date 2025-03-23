
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAdminAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No token found');

        const response = await axios.get(`${API_BASE_URL}/api/users/admin/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
        setIsAuthenticated(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Authentication failed');
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [navigate]);

  const confirmLogout = () => {
    setShowLogoutModal(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setIsAuthenticated(false);
    setShowLogoutModal(false);
    navigate('/login');
  };

  return { user, isAuthenticated, loading, error, confirmLogout, logout, showLogoutModal, setShowLogoutModal };
};

export default useAdminAuth;