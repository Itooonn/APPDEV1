const raw = "  Alice Guo  ";
const clean = raw.trim(); // "trim" removes whitespace from both ends of a string
const [first, last] = clean.split(" "); // "split" splits a string into an array of substrings based on a delimiter

//
console.log(first.toUpperCase()); // "ALICE"
console.log(clean.includes("Guo")); // true
console.log(clean.slice(0, 5)); // "Alice"
console.log(`Full name: ${first} ${last}`);

//
console.log(parseInt("42px"));   // 42
console.log((19.9999).toFixed(2)); // "20.00"

//
const result = "abc" / 2;
console.log(result);          // NaN // meaning "Not a Number"
console.log(Number.isNaN(result)); // true 
