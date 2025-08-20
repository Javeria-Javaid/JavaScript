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
// Parameters are the names in function definition
function createUser(username, email) {
    return { username, email };
}

// Arguments are the actual values passed
const user1 = createUser("john_doe", "john@example.com");
const user2 = createUser("jane_smith", "jane@example.com");
// 5. Default Parameters
// Default values if no argument provided
function createMessage(name, message = "Welcome!") {
    return `${name}, ${message}`;
}

console.log(createMessage("Mike")); // "Mike, Welcome!"
console.log(createMessage("Sarah", "How are you?")); // "Sarah, How are you?"

//6. Return Values
// Functions can return any data type
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function createPerson(name, age) {
    return {
        name,
        age,
        isAdult: age >= 18
    };
}

const randomNum = getRandomNumber();
const person = createPerson("Tom", 25);
//7. Scope in Functions
let globalVar = "I'm global";

function testScope() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

testScope();
console.log(globalVar); // Accessible
// console.log(localVar); // ❌ Error - not accessible outside
//8. Practical Examples
// Temperature converter
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Password validator
function isValidPassword(password) {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password);
}

// Shopping cart calculator
function calculateTotal(items) {
    return items.reduce((total, item) => total + item.price, 0);
}