import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import './styles/RegForm.css';
import { useNavigate } from 'react-router-dom';

const RegForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Saving data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));

    alert('Registration successful! Redirecting to login...');

    // Navigating to the login page
    navigate('/');

    // Reset form data and states
    setFormData({
      username: '',
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      password: '',
      confirmPassword: ''
    });
    setPasswordError('');
    setSubmitted(true);
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      {submitted && <p className="success-message">Registration successful! Redirecting...</p>}
      <form onSubmit={handleSubmit}>
        <TextField label="Username" variant="outlined" name="username" value={formData.username} onChange={handleChange} required fullWidth margin="normal" />
        <div className="name-inputs">
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            margin="normal"
          />
        </div>

        <TextField
          label="Date of Birth"
          type="date"
          variant="outlined"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl component="fieldset" required>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          error={!!passwordError}
          helperText={passwordError}
        />

        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegForm;
