import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import { ContextProvider } from './contexts/ContextProvider.tsx';
import { AuthContextProvider } from './contexts/AuthContext.tsx';
import { SocketContextProvider } from './contexts/SocketContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
