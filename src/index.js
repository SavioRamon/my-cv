import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterComponent } from "./routes";
import { RepositoriesProvider } from "./context/Repositories";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RepositoriesProvider>
      <RouterComponent />
    </RepositoriesProvider>
  </React.StrictMode>
);

