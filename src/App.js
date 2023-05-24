import React from 'react';

import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { queryClient } from './services/queryClient';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />

        <GlobalStyle />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
