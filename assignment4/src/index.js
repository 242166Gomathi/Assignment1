import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import App from './App';  
import Register from './register';
import Login from './login';
import Profile from './profile';

import './index.css';

const Routing = () => (
  <Router>  
    <div>  
      <h1>Hello World</h1>  
      <ul> 
        <li>  
          <Link to="/register">Register</Link>  
        </li>  
        <li>  
          <Link to="/login">Login</Link>  
        </li>  
        <li>  
          <Link to="/profile">Profile</Link>  
        </li>
      </ul>  
      <Routes>
        <Route exact path="/" element={<App />} />  
        <Route path="/register" element={<Register />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
    </div>  
  </Router>  
);

ReactDOM.render(<Routing />, document.getElementById('root'));
