// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
//   const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    if (formData.username === 'admin' && formData.password === 'password') {
      // Redirect to dashboard on successful login
      navigate('/dashboard')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Login;
