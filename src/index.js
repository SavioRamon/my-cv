import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RepositoriesProvider } from "./context/Repositories";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RepositoriesProvider>
      <App />
    </RepositoriesProvider>
  </React.StrictMode>
);

