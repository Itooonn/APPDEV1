// map()
const hobbies = ["reading", "gaming", "coding"];
hobbies.map(hobby => console.log(hobby)); 

// Destructuring
const student = { 
    name: "Alice", 
    age: 20 
};
const { name, age } = student; // easier way to extract values (properties) from objects
console.log(name, age);
 
// Spread operator // allows us to expand an array or object into individual elements
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newNumbers);
