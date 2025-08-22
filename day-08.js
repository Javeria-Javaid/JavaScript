/*
 Day 8: Objects in JavaScript
Objects are collections of key-value pairs and are fundamental to JavaScript. They help you structure and organize data!
 */
//1. Creating Objects
// Object literal syntax (most common)
const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"]
};

// Empty object
const emptyObj = {};

// Object with nested objects
const user = {
    name: "Bob",
    address: {
        street: "123 Main St",
        city: "Techville",
        zipCode: "12345"
    }
};
//2. Accessing Properties
const book = {
    title: "JavaScript Basics",
    author: "Jane Doe",
    pages: 200,
    isAvailable: true
};

// Dot notation
console.log(book.title);    // "JavaScript Basics"
console.log(book.pages);    // 200

// Bracket notation (useful for dynamic keys)
const key = "author";
console.log(book[key]);     // "Jane Doe"
console.log(book["isAvailable"]); // true

// Nested object access
console.log(user.address.city); // "Techville"

