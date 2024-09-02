function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  
  this.canDrive = function() {
    return this.age >= 18;
  };
}
const person1 = new Person("Alish", 25);
const person2 = new Person("Karki", 16);

console.log(person1.name, person1.age, person1.canDrive()); 
console.log(person2.name, person2.age, person2.canDrive());  

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 18;
  }
}

const person3 = new PersonClass("Alex", 100);

console.log(person3.name, person3.age, person3.canDrive());  
