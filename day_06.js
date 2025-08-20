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
// Mini-Project:  Calculator
function calculateTip(billAmount, tipPercentage = 15) {
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    return {
        bill: billAmount,
        tip: tipAmount,
        total: totalAmount,
        tipPercent: tipPercentage
    };
}

// Usage
const dinnerBill = 75;
const tipResult = calculateTip(dinnerBill, 20);

console.log(`
Bill: $${tipResult.bill}
Tip (${tipResult.tipPercent}%): $${tipResult.tip.toFixed(2)}
Total: $${tipResult.total.toFixed(2)}
`);
//practice questions
//1. Reverse String Function
// Solution 1: Using built-in methods
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Solution 2: Using a loop
function reverseStringLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Solution 3: Using array methods
function reverseStringModern(str) {
    return [...str].reverse().join('');
}

// Test cases
console.log(reverseString("hello"));        // "olleh"
console.log(reverseString("javascript"));   // "tpircsavaj"
console.log(reverseString(""));             // ""


//2. Prime Number Checker
// Solution 1: Basic prime checker
function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Solution 2: More readable version
function isPrimeSimple(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPrime(7));    // true
console.log(isPrime(10));   // false
console.log(isPrime(17));   // true
console.log(isPrime(1));    // false
console.log(isPrime(2));    // true

// Name Formatter

// Solution 1: Basic formatting
function formatName(firstName, lastName) {
    const formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return `${formattedFirst} ${formattedLast}`;
}

// Solution 2: More robust version
function formatNameAdvanced(firstName, lastName) {
    const capitalize = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return `${capitalize(firstName)} ${capitalize(lastName)}`.trim();
}

// Test cases
console.log(formatName("john", "doe"));         // "John Doe"
console.log(formatName("JANE", "SMITH"));       // "Jane Smith"
console.log(formatName("mArY", "jOnEs"));       // "Mary Jones"
console.log(formatNameAdvanced("", "smith"));   // "Smith"