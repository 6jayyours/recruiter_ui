import React, { useState } from 'react';
import './Loginmodal.css';

function Loginmodal({ onClose }) {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [isOTPVerificationActive, setIsOTPVerificationActive] = useState(false); // New state for OTP verification
  const [otpValue, setOtpValue] = useState('');

// const handleOTPChange = (index, value) => {
//  const newOtpValue = otpValue.substr(0, index) + value + otpValue.substr(index + 1);
//  setOtpValue(newOtpValue);
// };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleModalClick = (event) => {
    if (event.target.className === 'modal-overla' || !event.target.closest('.form-container')) {
      onClose();
    }
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault(); 
    setIsOTPVerificationActive(true); 
  };

  const handleOTPVerificationSubmit = (event) => {
    event.preventDefault(); 
    setIsOTPVerificationActive(false); 
    setIsSignUpActive(false); 
  };
  const handleInputFocus = (event) => {
    event.target.select();
  };

  const handleInputBlur = (event) => {
    if (event.target.value.length === 0) {
      event.target.focus();
    }
  };

  const handleInputKeyUp = (event) => {
    if (event.target.value.length === 1 && event.target.nextElementSibling) {
      event.target.nextElementSibling.focus();
    }
  };

  return (
    <div className="modal-overla" onClick={handleModalClick}>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
        {!isOTPVerificationActive && (
          <div className="form-container sign-up-container">
            <form action="#" onClick={stopPropagation} onSubmit={handleSignUpSubmit}>
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
        {isOTPVerificationActive && (
          <div className="form-container otp-container">
            <form action="#" onClick={stopPropagation} onSubmit={handleOTPVerificationSubmit}>
              <h1>Verify OTP</h1>
              <span>Enter otp we have shared in your email</span>
              <div className="otp-input-container">
                <div className="otp-input-container">
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} />
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} />
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} />
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} />
                </div>

              </div>

              <button type="submit">Verify</button>
            </form>
          </div>
        )}
        {!isSignUpActive && !isOTPVerificationActive && (
          <div className="form-container sign-in-container">
            <form action="#" onClick={stopPropagation}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
        )}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={(e) => { handleSignInClick(); stopPropagation(e); }}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={(e) => { handleSignUpClick(); stopPropagation(e); }}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginmodal;
