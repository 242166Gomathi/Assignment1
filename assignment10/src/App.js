import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EducationDetails from './components/EducationDetails';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your login logic here, set isLoggedIn to true after successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Your logout logic here, set isLoggedIn to false after logout
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/education-details">Education Details</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education-details" element={<EducationDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
