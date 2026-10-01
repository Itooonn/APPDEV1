const values = [0, "", "hello", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

// // false, 0, "" (empty string), null, undefined, and NaN. 
// // [] and {} are truthy — only the 6 falsy values above are falsy

const username = "Karl";
const password = "password123";
 
const canLogIn = username !== "" && password !== ""; 
console.log(canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true;

const canWatch = isAdmin || isSubscriber; // true because || returns the first truthy operand
console.log(canWatch); // true
 
console.log("" || "default");        // "default" (first truthy)
console.log(username && "Welcome!");  // "Welcome!" (returns last operand if both truthy, otherwise first falsy)
console.log(!canLogIn);                // false because ! means "not"
