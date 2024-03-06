import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; 

function Dashboard() {
  const name = useSelector((state) => state.name);

  return (
    <div className="dashboard-container">
      <h1>Hello {name} thank you for visiting our website. <br></br>
      We're excited to have you here! </h1>
      <div className="profile-link-container">
        <Link to="/profile" className="profile-link">Profile</Link>
      </div>
    </div>
  );
}

export default Dashboard;
