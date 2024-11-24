import React, { useState, useContext } from 'react';
import useBitcoinRate from './useBitcoinRate';
import { EmojiContext } from './EmojiContext'; 

const BitcoinRates = () => {
  const [currency, setCurrency] = useState('USD'); 
  const { rate, loading, error } = useBitcoinRate(currency); 
  const { emoji } = useContext(EmojiContext); 

  return (
    <div>
      <h1>Bitcoin Rates</h1>
      <label htmlFor="currency">Select Currency: </label>
      <select
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)} 
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>

      {}
      <h2>Emoji: {emoji}</h2>

      {}
      {loading ? (
        <p>Loading rate...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <p>
          Current Bitcoin rate in {currency}: {rate.toLocaleString()} {currency}
        </p>
      )}
    </div>
  );
};

export default BitcoinRates;
