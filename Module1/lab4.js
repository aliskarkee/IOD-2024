function add(a, b) {
    let result = a + b;
    console.log(`The result of adding ${a} and ${b} is ${result}`);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    console.log(`The result of subtracting ${b} from ${a} is ${result}`);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    console.log(`The result of multiplying ${a} and ${b} is ${result}`);
    return result;
}

function divide(a, b) {
    if (b !== 0) {
        let result = a / b;
        console.log(`The result of dividing ${a} by ${b} is ${result}`);
        return result;
    } else {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
}

function greet(name) {
    let greeting = "Hello " + name;
    console.log(greeting);
    return greeting;
}

// Mathematical Operations
let addResult = add(5, 3);
let subtractResult = subtract(10, 4);
let multiplyResult = multiply(6, 7);
let divideResult = divide(20, 4);

// Greeting
greet("Alish");


