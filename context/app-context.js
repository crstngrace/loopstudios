import { createContext, useState } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AppContext.Provider value={[isLoaded, setIsLoaded]}>
      {children}
    </AppContext.Provider>
  );
};
