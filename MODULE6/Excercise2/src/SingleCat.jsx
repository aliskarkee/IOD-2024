import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
      <h2>{cat.name}</h2>
      <p><em>{cat.latinName}</em></p>
      <img src={cat.image} alt={cat.name} style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  );
};

export default SingleCat;
