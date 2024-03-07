// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [username, setUsername] = useState('');

  const loginUser = (username) => {
    setUsername(username);
  };

  return (
    <UserContext.Provider value={{ username, loginUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
