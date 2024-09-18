// Adding the delay function to Function.prototype
Function.prototype.delay = function(ms) {
  let originalFunction = this;
  return function(...args) {  
    setTimeout(() => originalFunction.apply(null, args), ms);  
  };
};

// Testing with a 2-parameter function
function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5); 

// Modifying multiply to take 4 parameters and testing
function multiplyFour(a, b, c, d) {
  console.log(a * b * c * d);
}

multiplyFour.delay(500)(2, 3, 4, 5); 
