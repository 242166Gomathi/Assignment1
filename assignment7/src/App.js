import React, { useState } from 'react';
import Login from './component/Login';
import Home from './component/Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};


export default App;
