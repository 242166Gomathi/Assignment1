import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
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

    alert('Registration successful! Redirecting...');

    // Redirect to profile page (Replace '/profile' with actual route)
    window.location.href = '/profile';

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
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        </div>

        <div className="name-inputs">
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>

        <div className="name-inputs">
          <label>Gender:</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" onChange={handleChange} required /> Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
<div className='button1'>
        <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
