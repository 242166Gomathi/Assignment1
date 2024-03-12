// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Style.css';
const Dashboard = () => {
  const userName = useSelector(state => state.user.name);
  console.log(userName);

  

  return (
    <div className='dashboard-container'>
      <div className='dashboard-greeting'>Hello {userName}</div>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Dashboard;
