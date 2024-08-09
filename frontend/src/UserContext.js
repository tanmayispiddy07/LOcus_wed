// src/UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from your backend after sign-in
    const fetchUserDetails = async () => {
      const response = await axios.get('/api/user-details'); // Replace with your endpoint
      setUser(response.data);
    };

    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
