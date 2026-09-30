const aboutMe = {
    name: "Karl Ashton",
    age: 20,
    course: "BSIS",
    introduce: function() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I am taking ${this.course} course.`);
    }
};

aboutMe.hobby = "coding"; // add a new property
aboutMe.introduce(); // run the introduce method