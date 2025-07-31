// -- Variable Declaration --
// Let's declare some variables
let greeting = "Hello, future developer!";  // string
const PI = 3.14;                           // constant number
var score = 0;                             // old-school variable (we'll use 'let' instead)

console.log(greeting);  // Prints to your browser console

//-- three ways to create variables --
// 1. let - Modern, can change later
let age = 25;
age = 26; // Allowed (reassigning)

// 2. const - Modern, permanent value
const birthYear = 1998;
birthYear = 2000; // ❌ Error! Can't change const

// 3. var - Old-school (avoid in modern code)
var oldSchool = "Don't use me in new projects";

// -- Datatypes --
// Strings (text)
let name = "Jamie";
let greeting = 'Hello there!';

// Numbers
let price = 9.99;
let quantity = 5;

// Booleans (true/false)
let isLoggedIn = true;
let hasPermission = false;

// Other types we'll cover later:
let nothing = null;
let notDefinedYet = undefined;

// -- Three Declaration Keywords --
//The Modern Variable
let counter = 0;       // Declaration + initialization
counter = 1;          // Reassignment allowed
let message;          // Declaration without value (undefined)
message = "Hello";    // Later assignment
//The Constant
const PI = 3.14159;    // Must initialize during declaration
PI = 3.14;             // ❌ Error! Cannot reassign
const user = {         // For objects/arrays...
    name: "Alex"       // ...properties CAN be modified
};
user.name = "Taylor";  // ✅ Allowed!

//var -The Legacy Variable
var oldVariable = 10;
oldVariable = 20;     // Reassignment allowed
var oldVariable = 30; // ❗ Redeclaration allowed (unlike let/const)
