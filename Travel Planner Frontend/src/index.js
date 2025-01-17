import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'client' import from react-dom
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
