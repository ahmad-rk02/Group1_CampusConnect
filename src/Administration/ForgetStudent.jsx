import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './ForgetStudent.css';

const ForgetStudent = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRequestingOTP, setIsRequestingOTP] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigate = useNavigate();

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/send-otp', { email });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'Error requesting OTP');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/users/verify-otp', { email, otp });
      const response = await axios.post('http://localhost:5000/api/users/reset-password', { email, newPassword });
      alert(response.data.message);
      navigate('/studentlogin');
    } catch (error) {
      alert(error.response?.data?.error || 'Error resetting password');
    }
  };

  return (
    <div className="student-Forgot-container">
      {isRequestingOTP ? (
        <div className="student-form-container">
          <h2>Request OTP</h2>
          <form onSubmit={handleRequestOTP}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="input-field"
            />
            <button type="submit" className="submit-button">Send OTP</button>
          </form>
        </div>
      ) : (
        <div className="student-form-container">
          <h2>Reset Password</h2>
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="input-field"
            />
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
              className="input-field"
            />
            <div className="student-password-field-container">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
                className="input-field"
              />
              <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="student-toggle-password-button">
                <FontAwesomeIcon icon={showNewPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <div className="student-password-field-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                className="input-field"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="student-toggle-password-button">
                <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <button type="submit" className="submit-button">Reset Password</button>
          </form>
        </div>
      )}

      <button className="student-toggle-button" onClick={() => setIsRequestingOTP(!isRequestingOTP)}>
        {isRequestingOTP ? 'Go to Reset Password' : 'Go to Request OTP'}
      </button>
    </div>
  );
};

export default ForgetStudent;
