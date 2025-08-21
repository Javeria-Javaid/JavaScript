/*
 Day 6: Arrays & Array Methods
Arrays are used to store multiple values in a single variable. They're incredibly powerful when combined with array methods!

 */
//1. Creating Arrays
// Different ways to create arrays
const fruits = ['apple', 'banana', 'orange']; // Literal syntax
const numbers = new Array(1, 2, 3);           // Constructor (rarely used)
const mixed = [1, 'hello', true, null];       // Mixed data types

console.log(fruits[0]); // "apple" (zero-based indexing)
console.log(fruits[2]); // "orange"

// 2. Basic Array Methods
const colors = ['red', 'green'];

// Add to end
colors.push('blue');      // ['red', 'green', 'blue']

// Remove from end
colors.pop();             // ['red', 'green']

// Add to beginning
colors.unshift('yellow'); // ['yellow', 'red', 'green']

// Remove from beginning
colors.shift();           // ['red', 'green']

// Find length
console.log(colors.length); // 2
// 3.  Essential Array Methods (Modern JavaScript)
//map() - Transform each element
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Practical example: Format names
const names = ['john', 'jane', 'mike'];
const capitalized = names.map(name =>
    name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalized); // ['John', 'Jane', 'Mike']

//filter() - Select elements that meet condition
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// Practical example: Filter products by price
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 }
];
const affordable = products.filter(product => product.price < 100);
console.log(affordable); // Mouse and Keyboard only
