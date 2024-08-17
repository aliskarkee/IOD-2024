// LAB4
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



// ADD
test('adds 5 + 3 to equal 8', () => {
    expect(add(5, 3)).toBe(8);
});

test('adds -2 + 4 to equal 2', () => {
    expect(add(-2, 4)).toBe(2);
});

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});
// subtract
test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('subtracts -5 - 3 to equal -8', () => {
    expect(subtract(-5, 3)).toBe(-8);
});

test('subtracts 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toBe(0);
});


// multiply
test('multiplies 6 * 7 to equal 42', () => {
    expect(multiply(6, 7)).toBe(42);
});

test('multiplies -2 * 4 to equal -8', () => {
    expect(multiply(-2, 4)).toBe(-8);
});

test('multiplies 0 * 10 to equal 0', () => {
    expect(multiply(0, 10)).toBe(0);
});


// Divide
test('divides 20 / 4 to equal 5', () => {
    expect(divide(20, 4)).toBe(5);
});

test('divides 10 / 0 to return null', () => {
    expect(divide(10, 0)).toBeNull();
});

test('divides -12 / 3 to equal -4', () => {
    expect(divide(-12, 3)).toBe(-4);
});



// greet
 test('greets Alish with "Hello Alish"', () => {
    expect(greet("Alish")).toBe("Hello Alish");
});

test('greets World with "Hello World"', () => {
    expect(greet("World")).toBe("Hello World");
});

test('greets an empty string with "Hello "', () => {
    expect(greet("")).toBe("Hello ");
});


