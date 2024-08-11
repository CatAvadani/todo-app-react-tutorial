import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KindeProvider
      clientId='72ea8bb8d7b949958e5e67a20876b50c'
      domain='https://thetodo.kinde.com'
      redirectUri='http://localhost:5173'
      logoutUri='http://localhost:5173'
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </StrictMode>
);
