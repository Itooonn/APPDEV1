function greet(name) {
  return "Hello, " + name;
}
 
const square = (num) => {
  return num * num;
};
 
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Karl Ashton"));
console.log("Square: " + square(12));
console.log(calculator(67, 98));
