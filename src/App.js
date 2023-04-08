import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes/indes';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />

      <GlobalStyle />
    </BrowserRouter>
  );
};
