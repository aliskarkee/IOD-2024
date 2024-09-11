function printFibonacci() {
  let a = 1, b = 1;
  
  console.log(a); 
  console.log(b); 

  setInterval(() => {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
  }, 1000); 
}

printFibonacci();


function printFibonacciTimeouts() {
  let a = 1, b = 1;
  
  console.log(a); 
  console.log(b); 

  function printNext() {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
    setTimeout(printNext, 1000); 
  }

  setTimeout(printNext, 1000);
}

printFibonacciTimeouts();


function printFibonacciWithLimit(limit) {
  let a = 1, b = 1, count = 2;

  console.log(a); 
  console.log(b); 

  function printNext() {
    if (count >= limit) return; 

    const next = a + b;
    console.log(next);
    a = b;
    b = next;
    count++; 

    setTimeout(printNext, 1000);
  }

  setTimeout(printNext, 1000);
}

printFibonacciWithLimit(10); // Prints 10 Fibonacci numbers
