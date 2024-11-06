// BigCats.js
import React, { useState } from 'react';
import AddCatForm from './AddCatForm';
import cats from './Cats';
const initialCats = [
  { name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.pexels.com/photos/1926335/pexels-photo-1926335.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=279.825&fit=crop&h=453.05', family: 'Panthera' },
  { name: 'Lion', latinName: 'Panthera leo', image: 'https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&cs=tinysrgb&w=1200', family: 'Panthera' },
  
];

export default function BigCats() {
  const [cats, setCats] = useState(initialCats);

  
  const addCat = (newCat) => {
    setCats([...cats, { ...newCat, family: 'Unknown' }]);
  };


  const deleteCat = (indexToDelete) => {
    setCats(cats.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Big Cats</h2>
      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            <img src={cat.image} alt={`${cat.name}`} width="50" />
            <strong>{cat.name}</strong> (<em>{cat.latinName}</em>) 
            <button onClick={() => deleteCat(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddCatForm onAddCat={addCat} />
    </div>
  );
}
