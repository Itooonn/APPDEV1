// This is an object
const person = { 
    name: "Karl", 
    age: 20 
}; 

const { name, age } = person; // Object destructuring
console.log(name, age); // "Karl 20"
 
const hobbies = ["Reading", "Gaming", "Coding"];
const [hobby1, hobby2] = hobbies; // Array destructuring
console.log(hobby1, hobby2); // "Reading Gaming"
 
function printName({ name }) {
  console.log(`This person's name is ${name}, and he is ${age} years old.`); // "This person's name is Karl, and he is 20 years old."
}

printName(person); // "Karl"
