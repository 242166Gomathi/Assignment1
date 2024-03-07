import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleLogin = () => {
    // Basic validation
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    if (password.trim().length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    //  successful login
    loginUser(username);
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="xs">
        <Typography variant="h3" gutterBottom>Login</Typography>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
        {error && <Typography variant="body2" color="error">{error}</Typography>}
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </Container>
    </div>
  );
};

export default Login;
