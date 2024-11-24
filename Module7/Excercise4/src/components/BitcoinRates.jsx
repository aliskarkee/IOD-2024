import React, { useState, useEffect } from 'react';

const BitcoinRates = () => {
  const [currency, setCurrency] = useState('USD');
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching Bitcoin rate for:', currency); // Debug log
    const fetchBitcoinRate = async () => {
      try {
        setError(null);
        const response = await fetch(
          `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin rates');
        }
        const data = await response.json();
        console.log('Fetched data:', data); 
        setRate(data.bpi[currency].rate_float);
      } catch (err) {
        console.error('Error fetching data:', err); 
        setError(err.message);
        setRate(null);
      }
    };

    fetchBitcoinRate();
  }, [currency]);

  console.log('Rendering BitcoinRates component'); // Debug log
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

      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : rate ? (
        <p>
          Current Bitcoin rate in {currency}: {rate.toLocaleString()} {currency}
        </p>
      ) : (
        <p>Loading rate...</p>
      )}
    </div>
  );
};

export default BitcoinRates;
