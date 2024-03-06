import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = () => {
    // Validating form fields
    let errors = {};
    if (!formData.username) {
      errors.username = 'Please enter your username';
    }
    if (!formData.password) {
      errors.password = 'Please enter your password';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Assuming authentication is successful
    // Redirect to Dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>User Login</h2>
      <Form id="loginForm">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter your username' }]}
        >
          <TextField
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{ startAdornment: <UserOutlined /> }}
          />
        </Form.Item>
        {formErrors.username && <div className="error-message">{formErrors.username}</div>}
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputProps={{ startAdornment: <LockOutlined /> }}
          />
        </Form.Item>
        {formErrors.password && <div className="error-message">{formErrors.password}</div>}
        <Button onClick={handleSubmit} className="btn" id="loginBtn" disabled={!formData.username || !formData.password}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
