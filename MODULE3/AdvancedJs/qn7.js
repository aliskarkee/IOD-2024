// Constructor for Person
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// Custom toString for Person
Person.prototype.toString = function() {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};

// Constructor for Student inheriting from Person
function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);  
  this.cohort = cohort;
}

// Inherit the Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Custom toString for Student
Student.prototype.toString = function() {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
};

// Testing with Person objects
const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Anna Smith', 30, 'female');

console.log('person1: ' + person1);  
console.log('person2: ' + person2); 

// Testing with Student objects
const student1 = new Student('Mike Johnson', 21, 'male', 'Cohort 2023');
const student2 = new Student('Sarah Lee', 22, 'female', 'Cohort 2022');

console.log('student1: ' + student1); 
console.log('student2: ' + student2);  
