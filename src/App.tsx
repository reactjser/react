import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { NavLink, useRoutes } from 'react-router-dom';

import { routes } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
