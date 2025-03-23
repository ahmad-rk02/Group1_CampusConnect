import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './ForgetStudent.css';

const ForgetStudent = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRequestingOTP, setIsRequestingOTP] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalsMessage, setModalsMessage] = useState('');
  const [modalsType, setModalsType] = useState('');
  const [showModals, setShowModals] = useState(false);
  const navigate = useNavigate();

  const showModalsPopup = (message, type) => {
    setModalsMessage(message);
    setModalsType(type);
    setShowModals(true);
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/send-otp`, { email });
      showModalsPopup(response.data.message, 'success');
    } catch (error) {
      showModalsPopup(error.response?.data?.error || 'Error requesting OTP', 'error');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      showModalsPopup('Passwords do not match!', 'error');
      return;
    }
    try {
      await axios.post(`${API_BASE_URL}/api/users/verify-otp`, { email, otp });
      const response = await axios.post(`${API_BASE_URL}/api/users/reset-password`, { email, newPassword });
      showModalsPopup(response.data.message, 'success');
      setTimeout(() => navigate('/studentlogin'), 2000);
    } catch (error) {
      showModalsPopup(error.response?.data?.error || 'Error resetting password', 'error');
    }
  };

  return (
    <div className="student-forgot-container">
      {isRequestingOTP ? (
        <div className="student-form-container">
          <h2>Request OTP</h2>
          <form onSubmit={handleRequestOTP}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="student-input-field" />
            <button type="submit" className="student-submit-button">Send OTP</button>
          </form>
        </div>
      ) : (
        <div className="student-form-container">
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="student-input-field" />
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required className="student-input-field" />
            <div className="student-password-field-container">
              <input type={showNewPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password" required className="student-input-field" />
              <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="student-toggle-password-button">
                <FontAwesomeIcon icon={showNewPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <div className="student-password-field-container">
              <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required className="student-input-field" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="student-toggle-password-button">
                <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <button type="submit" className="student-submit-button">Reset Password</button>
          </form>
        </div>
      )}

      <button className="student-toggle-button" onClick={() => setIsRequestingOTP(!isRequestingOTP)}>
        {isRequestingOTP ? 'Go to Reset Password' : 'Go to Request OTP'}
      </button>

      {showModals && (
        <div className="student-modals-overlay" onClick={() => setShowModals(false)}>
          <div className="student-modals-content" onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={modalsType === 'error' ? faTimesCircle : faCheckCircle} className={`student-modals-icon ${modalsType}`} />
            <p className="student-modals-message">{modalsMessage}</p>
            <button className="student-close-modals" onClick={() => setShowModals(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetStudent;
