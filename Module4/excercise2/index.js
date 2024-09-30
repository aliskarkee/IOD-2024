const data = [
  { name: 'bob', age: 23 },
  { name: 'alish', age: 39 }
];

function addCard(name, age) {
  const cardContainer = document.getElementById('cardContainer');
  const card = document.createElement('div');
  card.classList.add('card');
  
  const cardContent = `
    <div class="card-content">
      <h2>${name}</h2>
      <p>Age: ${age}</p>
    </div>
  `;
  
  card.innerHTML = cardContent;
  cardContainer.appendChild(card);
}

data.forEach(person => {
  addCard(person.name, person.age);
});
