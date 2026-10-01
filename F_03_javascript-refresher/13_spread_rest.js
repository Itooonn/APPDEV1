// Spread operator // expand values from an array or object into another array or object
const numbers = [34, 35, 36];
const newNumbers = [...numbers, 37, 38];
console.log(newNumbers); // [ 34, 35, 36, 37, 38 ]
 
const user = { name: "Karl", age: 20 };
const newUser = { ...user, email: "karl@example.com" };
console.log(newUser); // { name: 'Karl', age: 20, email: 'karl@example.com' }

// Rest operator // put values into a single array or object 
function sum(...args) { 
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(34, 35, 36, 37)); // 142