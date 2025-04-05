import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './ForgetAdmin.css';

const ForgetAdmin = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: new password
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');
  const [showModal, setShowModal] = useState(false);
  const otpInputRefs = useRef([]);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

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
    if (!email) {
      showModalPopup('Please enter your email', 'error');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/send-otp`, { email });
      showModalPopup(response.data.message || 'OTP sent to your email', 'success');
      setStep(2);
      setCountdown(120); // 2 minutes countdown
    } catch (error) {
      showModalPopup(error.response?.data?.error || 'Error requesting OTP', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }

    // Submit if last digit is entered
    if (index === 5 && value) {
      handleVerifyOTP();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = async () => {
    const fullOtp = otp.join('');
    if (fullOtp.length !== 6) {
      showModalPopup('Please enter a 6-digit OTP', 'error');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/verify-otp`, { 
        email, 
        otp: fullOtp 
      });
      showModalPopup(response.data.message || 'OTP verified successfully', 'success');
      setStep(3);
    } catch (error) {
      showModalPopup(error.response?.data?.error || 'Invalid OTP. Please try again.', 'error');
      setOtp(['', '', '', '', '', '']);
      if (otpInputRefs.current[0]) {
        otpInputRefs.current[0].focus();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      showModalPopup('Password must be at least 8 characters', 'error');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      showModalPopup('Passwords do not match!', 'error');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/reset-password`, { 
        email, 
        newPassword 
      });
      showModalPopup(response.data.message || 'Password reset successfully!', 'success');
    } catch (error) {
      showModalPopup(error.response?.data?.error || 'Error resetting password', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTP = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/send-otp`, { email });
      showModalPopup(response.data.message || 'New OTP sent to your email', 'success');
      setCountdown(120);
    } catch (error) {
      showModalPopup(error.response?.data?.error || 'Error resending OTP', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-forgot-container">
      {step === 1 && (
        <div className="admin-form-container">
          <h2>Reset Password</h2>
          <p>Enter your email to receive an OTP</p>
          <form onSubmit={handleRequestOTP}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="admin-input-field"
            />
            <button 
              type="submit" 
              className="admin-submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send OTP'}
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="admin-form-container">
          <h2>Verify OTP</h2>
          <p>Enter the 6-digit OTP sent to {email}</p>
          <div className="admin-otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                ref={(el) => (otpInputRefs.current[index] = el)}
                className="admin-otp-input"
                autoFocus={index === 0}
              />
            ))}
          </div>
          <div className="admin-otp-footer">
            {countdown > 0 ? (
              <span>Resend OTP in {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}</span>
            ) : (
              <button 
                type="button" 
                className="admin-resend-button"
                onClick={resendOTP}
                disabled={isLoading}
              >
                Resend OTP
              </button>
            )}
          </div>
          <button 
            type="button" 
            className="admin-submit-button"
            onClick={handleVerifyOTP}
            disabled={isLoading || otp.join('').length !== 6}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="admin-form-container">
          <h2>Set New Password</h2>
          <form onSubmit={handleResetPassword}>
            <div className="admin-password-field-container">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password (min 8 characters)"
                required
                minLength="8"
                className="admin-input-field"
              />
              <button 
                type="button" 
                onClick={() => setShowNewPassword(!showNewPassword)} 
                className="admin-toggle-password-button"
              >
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
                minLength="8"
                className="admin-input-field"
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="admin-toggle-password-button"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
              </button>
            </div>
            <button 
              type="submit" 
              className="admin-submit-button"
              disabled={isLoading || !newPassword || !confirmPassword}
            >
              {isLoading ? 'Updating...' : 'Reset Password'}
            </button>
          </form>
        </div>
      )}

      {showModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className={`admin-modal-icon ${modalType === 'success' ? 'success' : 'error'}`}>
              {modalType === 'success' ? '✅' : '❌'}
            </div>
            <p className="admin-modal-message">{modalMessage}</p>
            <button 
              className="admin-close-modal" 
              onClick={() => setShowModal(false)}
              disabled={modalType === 'success'}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetAdmin;