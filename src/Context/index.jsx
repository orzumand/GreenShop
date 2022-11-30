import React, { createContext,useState } from 'react';

export const ActiveContext = createContext();

export const Active = ({ children }) => {
  const [active, setActive] = useState(2);
  return (
    <ActiveContext.Provider value={[active, setActive]}>
      {children}
    </ActiveContext.Provider>
  );
};
