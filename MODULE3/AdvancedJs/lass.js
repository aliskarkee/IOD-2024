const obj = {}; // simple empty object

// Check if the prototype of 'obj' is Object.prototype
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// List inherited properties and methods from Object.prototype
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));

