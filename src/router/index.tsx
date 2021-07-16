import React from 'react';
import { PartialRouteObject } from 'react-router';

import About from '../views/About';
import Home from '../views/Home';

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export { routes };
