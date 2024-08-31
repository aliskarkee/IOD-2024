const animals = ['Tiger', 'Giraffe']

animals.push('Lion', 'Leopard');
 animals.unshift('Rhino', 'Dog');
animals.sort();
console.log(animals);

function replaceMiddleAnimal(newValue){
 const newAnimal = Math.floor(animals.length/2);
 animals[newAnimal] = newValue;
}
replaceMiddleAnimal('Koala');
console.log(animals)

function replaceMiddleAnimal(newValue){
    
}