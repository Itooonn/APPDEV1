const aboutMe = {
    name: "Karl Ashton",
    age: 20,
    course: "BSIS",
    introduce: function() {
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I am taking ${this.course} course.`);
    },
    loveCoding: function() {
        console.log("I love coding because it allows me to bring ideas to life. Every line of code is a step towards solving real-world problems and building something meaningful.");
    }
};

aboutMe.hobby = "coding"; // add a new property
aboutMe.address = "123 St. Brgy. Iniwan Quezon City"; // add address property
aboutMe.introduce(); // run the introduce method
aboutMe.loveCoding(); // run the loveCoding method