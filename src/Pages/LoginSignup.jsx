import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        {isLogin ? (
          <>
            <h1>Login</h1>
            <div className="loginsignup-fields">
              <input type="email" placeholder='Email Address' />
              <input type="password" placeholder='Password' />
            </div>
            <button>Login</button>
            <p className="loginsignup-login">Don't have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Sign up here</span></p>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input type="text" placeholder='Your Name' />
              <input type="email" placeholder='Email Address' />
              <input type="password" placeholder='Password' />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account? <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>Login here</span></p>
            <div className="loginsignup-agree">
              <input type="checkbox" name='' id='' />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
