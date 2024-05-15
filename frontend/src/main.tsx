import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import { ContextProvider } from './contexts/ContextProvider.tsx';
import { AuthContextProvider } from './contexts/AuthContext.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { SocketContextProvider } from './contexts/SocketContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1089419800008-tonr18jq1vahjf74ikge8ub7imen0c1i.apps.googleusercontent.com">
      <AuthContextProvider>
        <ContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </ContextProvider>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
