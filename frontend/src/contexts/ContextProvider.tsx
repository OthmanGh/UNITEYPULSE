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
  isClicked: State;
  setIsClicked: Dispatch<SetStateAction<State>>;
  handleClick: (clicked: keyof State) => void;
  screenSize: number | undefined;
  setScreenSize: Dispatch<SetStateAction<number | undefined>>;
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
  const [isClicked, setIsClicked] = useState<State>(initialState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const handleClick = (clicked: keyof State) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): ContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return context;
};
