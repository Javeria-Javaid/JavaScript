/*Day 5: Functions in JavaScript
Functions are one of the most important concepts in JavaScript. They allow you to package code into reusable blocks!
1. Function Declarations
 */
// Basic function
function greet(name) {
    return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob"));   // "Hello, Bob!"
//2. Function Expressions
// Assigning function to a variable
const calculateArea = function(width, height) {
    return width * height;
};

console.log(calculateArea(5, 3)); // 15
//3. Arrow Functions 
// Compact syntax
const add = (a, b) => a + b;

// Multiple parameters require parentheses
const multiply = (a, b) => a * b;

// Multiple lines need curly braces
const complexOperation = (a, b) => {
    const sum = a + b;
    return sum * 2;
};
//4. Parameters vs Arguments
