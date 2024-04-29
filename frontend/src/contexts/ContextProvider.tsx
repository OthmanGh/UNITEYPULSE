import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface State {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

interface ContextType {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

const StateContext = createContext<ContextType | undefined>(undefined);

const initialState: State = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

interface Props {
  children: ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);

  return <StateContext.Provider value={{ activeMenu, setActiveMenu }}>{children}</StateContext.Provider>;
};

export const useStateContext = (): ContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
};
