import React, { useState } from 'react';
import { validateUsername, validatePassword } from './validation';
import './css/login.css';


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
      setUsernameError(validateUsername(value) ? '' : 'Please enter a valid email address.Example:abc@gmail.com');
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError(validatePassword(value) ? '' : 'Password must contain at least 1 uppercase letter, 1 digit, 1 special character, and be at least 8 characters long.Example:@1234Gsac');
    }
    setIsSubmitEnabled(validateUsername(username) && validatePassword(password));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitEnabled) onLogin();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Username" name="username" value={username} onChange={handleInputChange} />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit" disabled={!isSubmitEnabled}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
