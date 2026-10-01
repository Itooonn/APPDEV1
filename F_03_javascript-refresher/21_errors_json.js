// 
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

//
try {
  console.log(divide(10, 0)); // This will throw an error
} catch (error) {
  console.log("Something went wrong:", error.message);
}

// 
const user = { name: "Karl", age: 20, isStudent: true };
 
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Karl","age":20,...}' // JSON.stringify converts a JavaScript object into a JSON string
 
const parsedUser = JSON.parse(jsonString); // JSON.parse converts a JSON string back into a JavaScript object
console.log(parsedUser.name); // "Karl"
console.log(typeof jsonString, typeof parsedUser); // string object // tell what type of data it is
