import React, { useState } from 'react';
import './Loginmodal.css';
import {  useDispatch } from 'react-redux';
import { signUpUser, signInUser, verifyUser } from '../../Redux/authSlice';
import { useNavigate } from "react-router-dom";

function Loginmodal({ onClose }) {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [isOTPVerificationActive, setIsOTPVerificationActive] = useState(false); // New state for OTP verification
  const [otpValue, setOtpValue] = useState('');

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState('');

  const [luname, setLUname] = useState("");
  const [lpassword, setLpassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();


const handleOTPChange = (index, value) => {
 const newOtpValue = otpValue.substr(0, index) + value + otpValue.substr(index + 1);
 setOtpValue(newOtpValue);
};

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleModalClick = (event) => {
    if (event.target.className === 'modal-overla' || !event.target.closest('.form-container')) {
       if (typeof onClose === 'function') {
         onClose();
       }
    }
   };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault(); 
    const body = { username:username, password: password,email:email,role:userRole };
    dispatch(signUpUser(body))
    setIsOTPVerificationActive(true); 
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault(); 
    const body = { username: luname, password: lpassword };
    dispatch(signInUser(body))
    .then(unwrapResult => {
        // Check if the action was fulfilled
        if (signInUser.fulfilled.match(unwrapResult)) {
            const { payload } = unwrapResult;
            // Assuming the payload includes the user's role
            const userRole = payload.role;
            console.log("User Role:", userRole);

            // Navigate based on the user's role
            if (userRole === 'USER') {
                navigate('/home');
            } else if (userRole === 'RECRUITER') {
                navigate('/home');
            } else {
                // Default or error page
                navigate('/error');
            }
            if (typeof onClose === 'function') {
              onClose();
          }
        }
    })
    .catch(error => {
        // Handle any errors here
        console.error('Error signing in:', error);
    });
};


  const handleOTPVerificationSubmit = (event) => {
    event.preventDefault(); 
    const body = { email, otp: otpValue };
    dispatch(verifyUser(body))
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
              <input type="text" placeholder="Name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              <div className="radio-buttons-container">
                <label>
                 <input
                    type="radio"
                    value="USER"
                    checked={userRole === 'USER'}
                    onChange={(e)=>setUserRole(e.target.value)}
                 />
                 Candidate
                </label>
                <label>
                 <input
                    type="radio"
                    value="RECRUITER"
                    checked={userRole === 'RECRUITER'}
                    onChange={(e)=>setUserRole(e.target.value)}
                 />
                 Recruiter
                </label>
              </div>
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
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} onChange={(e) => handleOTPChange(0, e.target.value)}/>
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} onChange={(e) => handleOTPChange(1, e.target.value)}/>
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} onChange={(e) => handleOTPChange(2, e.target.value)}/>
                  <input type="password" maxLength="1" className="otp-input-box" onFocus={handleInputFocus} onBlur={handleInputBlur} onKeyUp={handleInputKeyUp} onChange={(e) => handleOTPChange(3, e.target.value)}/>
                </div>

              </div>

              <button type="submit">Verify</button>
            </form>
          </div>
        )}
        {!isSignUpActive && !isOTPVerificationActive && (
          <div className="form-container sign-in-container">
            <form action="#" onClick={stopPropagation} onSubmit={handleSignInSubmit}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
              </div>
              <span>or use your account</span>
              <input type="text" placeholder="Username" value={luname} onChange={(e)=>setLUname(e.target.value)}/>
              <input type="password" placeholder="Password" value={lpassword} onChange={(e)=>setLpassword(e.target.value)} />
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
