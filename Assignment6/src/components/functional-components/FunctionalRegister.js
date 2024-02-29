import React, { useState } from 'react';
import '../../../src/components/functional-components/css/register.css';

const FunctionalRegister = () => {
  const [formData, setFormData] = useState({ name: '', age: '', company: '' });
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, age, company } = formData;
    if (!name || !age || !company) {
      alert('Please fill in all the fields.');
      return;
    }
    const message = `Welcome, ${name}! You are ${age} years old, working at ${company}.`;
    setWelcomeMessage(message);
    setFormData({ name: '', age: '', company: '' });
  };

  return (
    <div className="register-page">
      <h2>Functional Component</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {['Name', 'Age', 'Company'].map(label => (
          <div key={label}><br></br>
            <label>{label}:</label>
            <input type="text" name={label.toLowerCase()} value={formData[label.toLowerCase()]} onChange={handleChange} required placeholder={`Enter your ${label}`} />
          </div>
        ))}
        <button type="submit" align="center" >Publish</button>
      </form>
      {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
    </div>
  );
};

export default FunctionalRegister;
