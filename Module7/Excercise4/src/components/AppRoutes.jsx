import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import BitcoinRates from './BitcoinRates';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bitcoin-rates" element={<BitcoinRates />} />
    </Routes>
  );
};

export default AppRoutes;
