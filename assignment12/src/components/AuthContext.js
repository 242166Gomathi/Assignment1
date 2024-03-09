import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This useEffect is to check if the user is already logged in based on localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setIsAuthenticated(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setIsAuthenticated(true);
    navigate('/login');
  };

  const handleLogin = (email, password) => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
     
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleRegister, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };