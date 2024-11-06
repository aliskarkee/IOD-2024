// BigCats.js
import React, { useState } from 'react';

const initialCats = [
  { name: 'Tiger', family: 'Panthera' },
  { name: 'Lion', family: 'Panthera' },
  { name: 'Cheetah', family: 'Acinonyx' },
  { name: 'Leopard', family: 'Panthera' },
  { name: 'Snow Leopard', family: 'Panthera' },
];

export default function BigCats() {
  const [cats, setCats] = useState(initialCats);

  // Function to sort cats alphabetically
  const sortCats = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  // Function to reverse the list
  const reverseCats = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  // Function to filter only Panthera family
  const filterPanthera = () => {
    const pantheraCats = initialCats.filter(cat => cat.family === 'Panthera');
    setCats(pantheraCats);
  };

  // Function to reset to the full list
  const resetCats = () => {
    setCats(initialCats);
  };

  return (
    <div>
      <h2>Big Cats</h2>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>{cat.name} ({cat.family})</li>
        ))}
      </ul>
      <button onClick={sortCats}>Sort Alphabetically</button>
      <button onClick={reverseCats}>Reverse Order</button>
      <button onClick={filterPanthera}>Show Only Panthera Family</button>
      <button onClick={resetCats}>Reset List</button>
    </div>
  );
}
