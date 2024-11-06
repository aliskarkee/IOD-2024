// AddCatForm.js
import React, { useState } from 'react';

export default function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && latinName && image) {
      onAddCat({ name, latinName, image });
      setName('');
      setLatinName('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Latin Name:</label>
        <input type="text" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
}
