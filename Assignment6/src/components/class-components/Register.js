import React, { Component } from 'react';
import '../../../src/components/class-components/css/register.css';

class InputField extends Component {
  render() {
    const { label, name, value, onChange, placeholder } = this.props;
    return (
      <div className="input-group">
        <label>{label}:</label>
        <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    );
  }
}

class Register extends Component {
  state = {
    formData: { name: '', age: '', company: '' }, welcomeMessage: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, company } = this.state.formData;
    if (!name || !age || !company) {
      alert('Please fill in all the fields.');
      return;
    }
    const message = `Welcome ${name}! You are ${age} years old, working at ${company}.`;
    this.setState({welcomeMessage: message, formData: { name: '', age: '', company: '' } }); };

  render() {
    const { formData, welcomeMessage } = this.state;

    return (
      <div className="register-container">
        <h2>Class Component</h2>
        <form onSubmit={this.handleSubmit}>
          {['Name', 'Age', 'Company'].map(field => (
            <InputField key={field} label={field} name={field.toLowerCase()} value={formData[field.toLowerCase()]} onChange={this.handleChange}
              placeholder={`Enter your ${field.toLowerCase()}`} />
          ))}
          <button className="submit-button" type="submit">Publish</button>
        </form>
        {welcomeMessage && <p className="welcome-message">{welcomeMessage}</p>}
      </div>
    );
  }
}

export default Register;
