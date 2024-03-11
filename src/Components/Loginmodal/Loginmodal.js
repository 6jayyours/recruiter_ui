import React, { useState } from 'react';
import './Loginmodal.css';

function Loginmodal({ onClose }) {
 const [isSignUpActive, setIsSignUpActive] = useState(false);

 const handleSignUpClick = () => {
    setIsSignUpActive(true);
 };

 const handleSignInClick = () => {
    setIsSignUpActive(false);
 };

 const handleModalClick = (event) => {
    // Check if the click was outside the modal content
    if (event.target.className === 'modal-overla' || !event.target.closest('.form-container')) {
        onClose();
    }
 };
 const stopPropagation = (event) => {
  event.stopPropagation();
};

 return (
    <div className="modal-overla" onClick={handleModalClick}>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container sign-up-container">
        <form action="#" onClick={stopPropagation}>
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form >
        </div>
        <div className="form-container sign-in-container">
        <form action="#" onClick={stopPropagation}>
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="/">Forgot your password?</a>
			<button>Sign In</button>
		</form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={(e) => {handleSignInClick(); stopPropagation(e);}}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={(e) => {handleSignUpClick(); stopPropagation(e);}}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Loginmodal;