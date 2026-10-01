let name = "Karl"; // let variables can be reassigned, but they cannot be redeclared in the same scope

const age = 20; // const variables cannot be reassigned, but they can be mutated if they are objects or arrays
 
name = "Itoonnn"; // This is fine, because we are reassigning the value of the variable "name"
console.log(name)

// age = 30;         // Error: Assignment to constant variable
console.log(age)
 
var city = "Pampanga"; // var is function-scoped, while let and const are block-scoped 
console.log(city) // OLD WAY OF DECLARING VARIABLES, AVOID USING VAR
