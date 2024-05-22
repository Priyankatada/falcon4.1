// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

//Traditional method

let student = {
    name: "Priyanka",
    age: 23,
    city: "Bhubaneswar",
    marks: [50, 60, 70],
    isMarried: false,
    address:{ po: "RRL" , pin: 751030 },
};

console.log(student);

//constructor:
let newstudent = new Object();
newstudent.name= "Lima";
newstudent.age = 24;
newstudent.marks = [40,50,60];

console.log(newstudent);

//Accessing object :

//myarray[0]
console.log(student.name);
console.log(student["age"]);
console.log(student["address"]);