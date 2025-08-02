//JavaScript has 8 Datatypes
//String
//Number
//Bigint
//Boolean
//Undefined
//Null
//Symbol
//Object
//Operators
// 1. Arithmetic Operators (+, -, *, /)
let a = 10;
let b = 3;
console.log(a + b); // ?
console.log(a - b); // ?
console.log(a * b); // ?
console.log(a / b); // ?
console.log(a % b); // ? (Modulus - remainder)

let x = 5;
let y = 2;
let result = x + y * 2; // ?

let z = (10 + 5) / 3 * 2; // ?

// 2. Comparison Operators
console.log(5 == "5");   // ?
console.log(5 === "5");  // ?
console.log(10 != "10"); // ?
console.log(10 !== "10");// ?
console.log(7 > 5);      // ?
console.log(7 < 5);      // ?

let age = 18;
console.log(age >= 18); // ?
console.log(age <= 17); // ?

let num1 = 10;
let num2 = "10";
let isEqual = num1 === num2; // ?

// 3. Logical Operators
console.log(true && false);  // ?
console.log(true || false);  // ?
console.log(!true);          // ?

let age = 20;
let hasID = true;
let canVote = age >= 18 && hasID; // ?

let isAdmin = false;
let isLoggedIn = true;
let accessGranted = isAdmin || isLoggedIn; // ?

let isRaining = true;
let isSunny = false;
console.log(!isRaining);      // ?
console.log(isRaining && !isSunny); // ?

let a = 5;
let b = 10;
let c = "5";
let result = (a == c) && (b > a) || (a === c); // ?

let x = 10;
let y = 20;
let output = (x < y) && (y !== 20) || (x + y === 30); // ?