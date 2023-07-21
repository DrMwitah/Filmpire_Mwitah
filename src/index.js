import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';

const theme = createTheme({});

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
