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

//3. Adding & Modifying Properties
const car = {
    make: "Toyota",
    model: "Camry"
};

// Add new properties
car.year = 2020;
car.color = "blue";
car["price"] = 25000;

// Modify existing properties
car.color = "red";
car["price"] = 23000;

console.log(car);
// { make: "Toyota", model: "Camry", year: 2020, color: "red", price: 23000 }

//4. Methods (Functions in Objects)
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {  // Shorthand method syntax
        return a - b;
    },
    multiply: (a, b) => a * b,  // Arrow function
    divide(a, b) {
        if (b === 0) return "Cannot divide by zero!";
        return a / b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 2)); // 8

//5. The 'this' Keyword
const person = {
    name: "John",
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    },
    birthday() {
        this.age++;
        return `Happy birthday! Now I'm ${this.age}.`;
    }
};

console.log(person.greet());    // "Hello, my name is John..."
console.log(person.birthday()); // "Happy birthday! Now I'm 26."

//6. Useful Object Methods
const student = {
    name: "Emma",
    grade: "A",
    subjects: ["Math", "Science", "English"]
};

// Get all keys
console.log(Object.keys(student)); // ["name", "grade", "subjects"]

// Get all values
console.log(Object.values(student)); // ["Emma", "A", ["Math", "Science", "English"]]

// Get key-value pairs
console.log(Object.entries(student));
// [ ["name", "Emma"], ["grade", "A"], ["subjects", Array(3)] ]

// Check if property exists
console.log("name" in student);    // true
console.log(student.hasOwnProperty("grade")); // true

// Copy object (spread operator)
const studentCopy = { ...student };
