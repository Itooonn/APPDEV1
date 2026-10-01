if (true) {
  let insideBlock = "insideBlock is only visible here"; // the insideBlock variable is only accessible within this block
  console.log(insideBlock); // works fine
}
 
try {
  console.log(insideBlock); // ReferenceError // the insideBlock variable is not accessible outside the block where it was defined
} catch (error) {
  console.log("insideBlock is not defined out here");
}

//
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}
 
const counterA = createCounter();
const counterB = createCounter();
 
console.log(`This is counter A: ${counterA()}`); // 1
console.log(`This is also counter A: ${counterA()}`); // 2
console.log(`This counter is independent: ${counterB()}`); // 1 -- independent of counterA
