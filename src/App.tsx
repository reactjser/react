import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavLink, useRoutes } from 'react-router-dom';

import { routes } from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
      </div>
      {useRoutes(routes)}
    </QueryClientProvider>
  );
}

export default App;
