//
const score = 92;
const result = score >= 70 ? "You Passed" : "You Failed";
console.log(result); // "You Passed"
 
//
const num = 67;
console.log(num % 2 === 0 ? "even" : "odd"); // "odd"

// 
const user = { name: "Alice Guo", address: { city: "Quezon City" } }; // with address property
 
console.log(user.address?.city); // "Quezon City", no crash

//
const age = 0;
console.log(age || 18); // 18 -- wrong! 0 is falsy, so || overrides it // returns the first truthy operand
console.log(age ?? 18); // 0  -- returns the left operand if it is not null or undefined, otherwise returns the right operand
