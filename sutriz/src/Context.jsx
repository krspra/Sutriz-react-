import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <ProfileContext.Provider value={{ data, updateData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
