// implicit return
const greet = name => "Hello, " + name; 
const square = n => n * n;               

// explicit return
const sayHi = () => {
  return console.log("Hi!");
};

console.log(greet("Karl")); // "Hello, Karl"
console.log(square(5));
sayHi(); // "Hi!"