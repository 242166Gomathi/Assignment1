import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Style.css'; 

const Profile = () => {
  const user = useSelector(state => state.user);

  return (
    <div className="profile-container">
      <h2>Personal Details</h2>
      <div>Name: {user.name}</div>
      <div>Country: {user.country}</div>
      <div>Gender: {user.gender}</div>
      <div>PAN: {user.pan}</div>
      <Link to="/education">Education Details</Link>
    </div>
  );
};

export default Profile;
