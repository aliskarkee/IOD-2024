// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?
// a) Explain why the above code returns the wrong answer
// above code returns an incorrect answer becasue both twentycents abd tencents are not defined where as console can't print emoty data types and 
// no concatenation rules are followed at console.log


// function currencyAddiction(float1, float2){

//  let sum = float1+float2;
//  return sum.toFixed(2);
// // num1= (`${float1} + ${float2}`);
// // num1 = currencyAddiction; 
// }

// console.log(currencyAddiction(1.1111, 2.2222));


function performCurrencyOperation(currencyOperations, float1, float2) {
    let result;

    switch (currencyOperations) {
        case "+":
            result = float1 + float2;
            console.log(float1, float2, "+");
            return result.toFixed(2); 
        case "-":
            result = float1 - float2;
            console.log(float1, float2, "-");
             return result.toFixed(2);            
        case "/":
            result = float1 / float2;
            console.log(float1, float2, "/");
            return result.toFixed(2); 

        case "*":
            result = float1 * float2;
            console.log(float1, float2, "*");
            return result.toFixed(2);        
            
            default:
            console.log("Unsupported operation");
            return null;
    }
}

// Example usage
console.log(performCurrencyOperation("+", 3.333, 2.2222));  
console.log(performCurrencyOperation("-", 3.333, 2.2222));  
console.log(performCurrencyOperation("*", 3.333, 2.2222));  
console.log(performCurrencyOperation("/", 3.333, 2.2222));  




