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

//reduce() - Accumulate values
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10

// Practical example: Shopping cart total
const cart = [
    { item: 'Book', price: 15 },
    { item: 'Pen', price: 3 },
    { item: 'Notebook', price: 8 }
];
const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total); // 26
//Other Useful Methods
const numbers = [1, 2, 3, 4, 5];

// find() - find first matching element
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

// some() - check if at least one element meets condition
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every() - check if all elements meet condition
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

// includes() - check if array contains value
console.log(numbers.includes(3)); // true

//Manipulating Arrays
let fruits = ['apple', 'banana', 'orange', 'grape'];

// slice() - copy portion of array
const citrus = fruits.slice(1, 3); // ['banana', 'orange']
console.log(fruits); // Original unchanged

// splice() - add/remove elements (modifies original)
fruits.splice(1, 2, 'mango', 'pineapple');
console.log(fruits); // ['apple', 'mango', 'pineapple', 'grape']

// concat() - combine arrays
const moreFruits = ['kiwi', 'melon'];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//
