
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
