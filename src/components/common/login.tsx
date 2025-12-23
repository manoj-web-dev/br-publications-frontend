import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  return (
    <div className="login-page-container">
      <div className="login-form-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username / Email ID *</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Enter your username or email" 
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password *</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>

          <div className="forgot-password-link">
            <Link to="">Forgot username / password?</Link>
          </div>

          <div className="login-actions">
            <button type="submit" className="btn-login">Login</button>
            <Link to="" className="btn-register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;