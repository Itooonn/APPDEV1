const students = [
  { name: "Alice", grade: 88 },
  { name: "Karl", grade: 95 },
  { name: "John", grade: 42 },
];
 
const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name)); // ["Alice", "Karl"]
 
const karl = students.find(s => s.name === "Karl");
console.log(karl); // { name: "Karl", grade: 95 }
 
console.log(students.some(s => s.grade < 60)); // true
console.log(students.every(s => s.grade >= 60)); // false
 
const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name)); // ["Karl", "Alice", "John"]
