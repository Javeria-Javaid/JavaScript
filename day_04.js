//Practice questions
/*
1.Create variables for:
   - Your favorite book (string)
   - Its publication year (number)
   - Whether you've read it (boolean)
2. Write a program that:
   - Takes a number input
   - Outputs "Even" or "Odd"

3. Modify FizzBuzz to:
   - Use a while loop instead
   - Add "Zap" for multiples of 7
 */

// ===== TASK 1: BOOK VARIABLES =====
const favoriteBook = "The Hitchhiker's Guide to the Galaxy";
const publicationYear = 1979;
const hasRead = true;

console.log(`My favorite book: ${favoriteBook}`);
console.log(`Published in: ${publicationYear}`);
console.log(`Have I read it? ${hasRead ? 'Yes' : 'No'}`);

// ===== TASK 2: EVEN/ODD CHECKER =====
function checkEvenOdd(number) {
    // Using ternary operator to determine even/odd
    return number % 2 === 0 ? "Even" : "Odd";
}

// Example usage:
const testNumber = 7;
console.log(`${testNumber} is ${checkEvenOdd(testNumber)}`);

// ===== TASK 3: MODIFIED FIZZBUZZ =====
let i = 1;
while (i <= 100) {
    let output = "";

    // Check for multiples
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Zap";

    // Output the result or the number
    console.log(output || i);
    i++;
}
//1.Functions (The Building Blocks)
// Basic function
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow function (modern)
const add = (a, b) => a + b;
/*
Parameters vs arguments
Return values
Function scope
Arrow functions vs regular functions
 */


// Practice: Create a function that checks if a number is prime
//2. Arrays & Array Methods
const fruits = ['apple', 'banana', 'orange'];

// Essential methods:
fruits.push('grape');      // Add to end
fruits.pop();              // Remove from end
fruits.map(fruit => fruit.toUpperCase()); // Transform

// Practice: Create a shopping list manager with add/remove functions

/*
Key Methods:
map(), filter(), reduce()
find(), some(), every()
slice(), splice()
 */
//3. Objects & JSON
const person = {
    name: 'Alex',
    age: 30,
    hobbies: ['coding', 'gaming']
};

// Accessing properties
console.log(person.name);  // Dot notation
console.log(person['age']); // Bracket notation

// Practice: Create a book object with title/author/year
/*
Object literals
Methods (functions in objects)
JSON.stringify() and JSON.parse()
 */
//4. DOM Manipulation (Web Interaction)
<button id="myBtn">Click Me</button>
<script>
    document.getElementById('myBtn').addEventListener('click', () => {
    alert('Button clicked!');
});
</script>
//5. Asynchronous JavaScript
// Fetch API example
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Async/await version
async function fetchData() {
    const response = await fetch('url');
    const data = await response.json();
    return data;
}
/*
Callbacks
Promises
Async/await
Error handling
 */
