import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; 

function Profile() {
  const { name, country, gender, panNumber } = useSelector((state) => state);

  return (
    <div className="profile-container">
      <div className="profile-details">
        <h2>Personal Details</h2>
        <p>Name: {name}</p>
        <p>Country: {country}</p>
        <p>Gender: {gender}</p>
        <p>Permanent Account Number: {panNumber}</p>
      </div>
      <div className="profile-education-link-container">
        <Link to="/education-details" className="education-details-link">Education Details</Link>
      </div>
    </div>
  );
}

export default Profile;
