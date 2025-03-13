import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './ForgetAdmin.css';

const ForgetAdmin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRequestingOTP, setIsRequestingOTP] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const showModalPopup = (message, type) => {
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);

    if (type === 'success') {
      setTimeout(() => {
        setShowModal(false);
        if (message === 'Password reset successfully!') {
          navigate('/adminlogin'); 
        }
      }, 3000);
    }
  };

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/send-otp', { email });
      showModalPopup(response.data.message, 'success');
    } catch (error) {
      showModalPopup(error.response?.data?.error || 'Error requesting OTP', 'error');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showModalPopup('Passwords do not match!', 'error');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/users/verify-otp', { email, otp });
      await axios.post('http://localhost:5000/api/users/reset-password', { email, newPassword });
      showModalPopup('Password reset successfully!', 'success');
    } catch (error) {
      showModalPopup(error.response?.data?.error || 'Error resetting password', 'error');
    }
  };

  return (
    <div className="admin-forgot-container">
      {isRequestingOTP ? (
        <div className="admin-form-container">
          <h2>Request OTP</h2>
          <form onSubmit={handleRequestOTP}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="admin-input-field"
            />
            <button type="submit" className="admin-submit-button">Send OTP</button>
          </form>
        </div>
      ) : (
        <div className="admin-form-container">
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="admin-input-field"
            />
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
              className="admin-input-field"
            />
            <div className="admin-password-field-container">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
                className="admin-input-field"
              />
              <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="admin-toggle-password-button">
                <FontAwesomeIcon icon={showNewPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <div className="admin-password-field-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                className="admin-input-field"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="admin-toggle-password-button">
                <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <button type="submit" className="admin-submit-button">Reset Password</button>
          </form>
        </div>
      )}

      <button className="admin-toggle-button" onClick={() => setIsRequestingOTP(!isRequestingOTP)}>
        {isRequestingOTP ? 'Go to Reset Password' : 'Go to Request OTP'}
      </button>

      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className={`admin-modal-icon ${modalType === 'success' ? 'success' : 'error'}`}>
              {modalType === 'success' ? '✅' : '❌'}
            </div>
            <p className="admin-modal-message">{modalMessage}</p>
            <button className="admin-close-modal" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetAdmin;
