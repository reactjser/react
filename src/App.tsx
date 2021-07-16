import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';

import { routes } from './router';

function App() {
  return (
    <>
      <div className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
      </div>
      {useRoutes(routes)}
    </>
  );
}

export default App;
