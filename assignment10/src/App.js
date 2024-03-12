// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Education from './Components/Education';

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/education" element={<Education/>} />
        </Routes>
    </Router>
  );
};

export default App;
