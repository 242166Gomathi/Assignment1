// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserContextProvider from './components/UserContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
};

export default App;
