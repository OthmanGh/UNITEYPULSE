import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import { ContextProvider } from './contexts/ContextProvider.tsx';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCe0x0THxbf1x0ZFZMZVxbRHdPMyBoS35RckVnWn9edHFRQmJZV0Z1');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
