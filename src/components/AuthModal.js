import React, { useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const msg = isSignUp ? 'Account Created Successfully!' : 'Login Successful!';
      setMessage(msg);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className={`auth-message-box ${showMessage ? 'show' : ''}`}>
        {message}
      </div>

      <div
        className={`auth-container ${isSignUp ? 'right-panel-active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="auth-close-btn" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Sign Up Form */}
        <div className="auth-form-container auth-sign-up">
          <form onSubmit={handleSubmit}>
            <h2>Create Account</h2>
            <div className="auth-social-login">
              <a href="#!" className="auth-social-btn" aria-label="Google">
                <i className="fab fa-google"></i>
              </a>
              <a href="#!" className="auth-social-btn" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="auth-social-btn" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="auth-hint">or use your email for registration</span>

            <div className="auth-input-group">
              <input type="text" placeholder="Name" required />
              <i className="fas fa-user"></i>
            </div>
            <div className="auth-input-group">
              <input type="email" placeholder="Email" required />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="auth-input-group">
              <input type="password" placeholder="Password" required />
              <i className="fas fa-lock"></i>
            </div>

            <button className="auth-btn" type="submit" disabled={loading}>
              {loading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Sign Up'}
            </button>
            <div className="auth-mobile-toggle" onClick={() => setIsSignUp(false)}>
              Already have an account? <span>Sign In</span>
            </div>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="auth-form-container auth-sign-in">
          <form onSubmit={handleSubmit}>
            <div className="auth-logo">
              <i className="fas fa-fingerprint"></i>
            </div>
            <h2>Sign In</h2>
            <div className="auth-social-login">
              <a href="#!" className="auth-social-btn" aria-label="Google">
                <i className="fab fa-google"></i>
              </a>
              <a href="#!" className="auth-social-btn" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="auth-social-btn" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="auth-hint">or use your account</span>

            <div className="auth-input-group">
              <input type="email" placeholder="Email" required />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="auth-input-group">
              <input type="password" placeholder="Password" required />
              <i className="fas fa-lock"></i>
            </div>

            <a href="#!" className="auth-footer-link">Forgot your password?</a>
            <button className="auth-btn" type="submit" disabled={loading}>
              {loading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Sign In'}
            </button>
            <div className="auth-mobile-toggle" onClick={() => setIsSignUp(true)}>
              Don't have an account? <span>Sign Up</span>
            </div>
          </form>
        </div>

        {/* Sliding Overlay */}
        <div className="auth-overlay-container">
          <div className="auth-overlay-inner">
            <div className="auth-overlay-panel auth-overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected, please login with your personal info</p>
              <button className="auth-btn auth-ghost" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </div>
            <div className="auth-overlay-panel auth-overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button className="auth-btn auth-ghost" onClick={() => setIsSignUp(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
