// Classes and Inheritance in JavaScript
class Person { // Class declaration
  constructor(name) { this.name = name; } // Constructor method to initialize the object
  sayHello() { console.log("Hi, I am " + this.name); }
}
 
class Student extends Person { // Inheritance
  study() { console.log(this.name + " is studying..."); }
}
 
const student = new Student("Karl");
student.sayHello();
student.study();
