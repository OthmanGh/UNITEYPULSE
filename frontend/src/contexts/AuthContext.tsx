import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  authUser: any;
  setAuthUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<any>(() => JSON.parse(localStorage.getItem('authUser')) || null);

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
