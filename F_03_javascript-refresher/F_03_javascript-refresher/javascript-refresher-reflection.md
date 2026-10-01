### 00_script_in_html.html
During this exercise, I learned that javascript <script> tag must be or in most cases supposed to be at the end of the body tag. And not only that, I never realized i can use multiple javascript tag into one html file. I used to dump all of the functions and objects into one single script file and most of the times i get an error. For someone who has little knowledge about javascript, this was a surprise. Yes I already know javascript in my past years, we even integrated it into my group's project when I was 2nd year but i did not understand most of it. And only now did i realize that what im doing with javascript was wrong yet simple to solve.

### 01_base_syntax.js
In this exercise I learned the basic syntax for javascript. I learned how to use simple variable and the proper naming convention for creating it like how I shouldn't start naming variable with digit first and many more. I also learned how case sensitive javascript can be. A simple mistype of a single letter can make a large change. For example javascript treats myName as separate to the myname variable which is I think briliant because it can prevent errors or can easily be spotted to fix errors. 

### 02_variables.js
This exercise revolves around data types such as string, number and boolean. I learned how to differentiate them through the use of typeof method. I also learned the difference of two equality, such as loose and strict equality. From what I observed, the loose equality automatically converts values or data types to its counter part. Using "5" == 5 as the example, the program thinks that "5" is a string because number doesn't need quatation marks but since I am using the loose eqaulity, "5" is being treated as a number. While in the other hand, strict equality does the opposite, rather than treating it as a number, it "strictly" treats it as a string.

### 03_functions.js
From what I learned, functions are reusable block of codes that sets as the building block of the codebase. You cannot build a full system with objects alone and so functions are very important. With this exercise, I learned how to utilize them and create functions on my own. I also realized that I can use a function like greet() to greet multiple people without changing the function code by using arguments like greet(person1) and greet(person2).

### 04_objects.js
In this exercise I learned what is an object is. From my own understandig, an object is a collection of data used to organize and store data like a container. It is important to learn because you don't have to create multiple const for very data, instead you can store it inside a single variable under one name like student, user etc. These variable can have multiple properties, 
for example: a student can have the property of name, age, and address.
I also learned about propeties and methods. These are all related to the object, properties are basically the data inside an object while the methods are the function that you use inside the object. 

### 05_arrays.js
From what I learned in this exercise, arrays are orderred collection of values that starts with index 0. I learned that arrays can be different types of data, For example you can add strings such as ["Adobo", "Sinigang"]. In this exercise i also learned different array methods like push and shift. These methods can be important when dealing with arrays. The push method adds an another value at the end of an array and shift method to remove the first element of the array. This can be very helpful especially when manipulating data.

### 06_control_structures.js
In this exercise, I learned how if else condition works. Javascript reads the file from top to bottom, so ff a condition already returns a true value at the top of the code, it will not continue testing for other condtions. The exercise demonstrates it well with the grading system example because when you organized the flow wrong it produces a wrong value.

### 07_dom.html
In this part I learned what DOM is, in react they use a virtual DOM to compare the changes from the UI to virtual DOM to DOM. The original DOM represents the raw HTML form. 

### 08_essential_features.js
This part of the exercise explains modern and essential features that we need to learn. The best example of this is Destructuring. This is the easiest way to extract and call propeties which helps programmers to work effciently by reducing time with writting the codebase.

### 09_tricky_parts.js
I realized that undefined have no value while null is an empty value.

### 10_let_const.js
This execise I learned the different types of variable, these are let, var and const. Let are variable that can be asigned meaning the value can be change while const are constant variable can stricly cannot change once you declared it. And var in the other hand is the oldest way to declare a variable, they are function scope meaning that they can be used inside a function which can be dangerous and can introduce bugs.

### 11_arrow_functions.js
In this exercise I learned the difference between implicit and explicit return. Implicit return basically returns a value automatiicaly without needing the return keyword while the explicit in the other hand does the opposite and requires the return keyword since the arrow function is inside the {} bracket.

### 12_destructuring.js
In this exercise I learned that Destructuring lets me take values out of an object. There are two types is Destructuring, object and array, both functions the same the difference is their data types. Desctructuring makes things easier because normally taking out values requires many line of code like:
console.log(person.name);
console.log(person.age);
but with Desctructuring, you can write it like:
const { name, age } = person;

### 13_spread_rest.js
In this exercise I realized that both spread and rest operator uses the same three dots but does different things. Spread operator expands the value from an array or object and can be used in another array or object using the declared variable. For example:
const numbers = [34, 35, 36];
const newNumbers = [...numbers, 37, 38];
While in the other hand the rest operator collects or packs multiple values into single array.

### 14_classes_inheritance.js
From what I learned in the previous years, the class is like a blueprint for creating objects. And the Person is a class that represents a person and the constructor(name) is the method to initialize the object.

### 15_modules_export.js
In this exercise I learned how to export the object and function outside the file to make them usable in other files. This is a very important javascript functionality because it allows for clean code and reusability which allows the codebase to be understandable for other developers.

### 16_modules_import.js
This exercise demonstrates how imports work, it is also import like export because it allows pathing between files. Without it files would not know how and where files to travel.

### 17_logical_operators.js
This excercise demonstrates the difference of truthy and falsy values. What its trying to say is that all values other thatn what mentioned are truthy values because they give values such as string, numbers and {}, [] brackets.

### 18_ternary_nullish.js
In this exercise I learned how to use ternary operator. This operator is very useful because you're basically writing an if else statement but way shorter. I also learned about optional chaining, the question mark basically checks whether a propety exist in an object and if it does not then it will not throw and error and let it pass.

### 19_strings_numbers.js
In this exercise I learned many very useful string and number methods. For example the .trim() method allows use to remove whitespaces if the input string contains spaces like 
" Alice Wander ". We also have split, toUpperCase and many more which improves the quality of life of the programmer and allows them to work faster and efficient.

### 20_array_methods.js
This exercise introduces me into different array methods such as filter(), map(), sort() and more. These methods are very useful because web applications work with collection of data. Instead of creating a function from scratch, these built in methods allows the programmer to not build their own code and instead use a readily available methods such as filter().

### 21_errors_json.js
I learned that try catch error handling, it is very useful when catching an error in the code. If the try condition arent met then the catch will send an error. I realized that this is similar to if else condition, the difference is that try catch looks for errors while if else does not and relies on pre defined condition.

### 22_async_javascript.js
I learned the difference between synchronous vs asynchronous, synchronous will be executed immediately once called while asynchronous does not execute immediately. And I also learned about callback function, from what I understant its literally like “Do this task, and when you're finished, call this function.”.

### 23_closures_scope.js
In this exercise I learned about the block scope. An example of block scope are let and const variable which prevents them to be used outside the {} they were declared.
