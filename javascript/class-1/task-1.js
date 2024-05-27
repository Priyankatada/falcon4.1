let birthday = new Date("2000-11-7"); 

let day = birthday.getDate();
let month = birthday.getMonth() + 1; 
let year = birthday.getFullYear();

console.log("My birthday is on: " + day + "-" + month + "-" + year);

let myDate = new Date();
console.log(myDate.toTimeString()); 

let currentDate = new Date("2024-05-22"); 

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let MyBirthday = new Date("2000-11-7"); 

let birthDay = MyBirthday.getDate();
let birthMonth = MyBirthday.getMonth() + 1;
let birthYear = MyBirthday.getFullYear();

console.log(`My Current age: ${currentYear - birthYear}`);

//Push method in javascript:-
//-The push method in js arrays adds elements to the end of an array and returns the new length of the array.

//Pop method in javascript:-
//-The pop method in js arrays removes the last element of an array and returns that element.

let fruits = ["apple", "banana", "mango"];
let newlength = fruits.push("orange");
console.log(fruits);
console.log(newlength);

let numbers = [1, 2, 3, 4, 5];
let last = numbers.pop();
console.log(numbers);
console.log(last);

let colors = ["red", "green", "blue"];
let newlength1 = colors.push("yellow")
console.log(colors);
console.log(newlength1);
let last1 = colors.pop();
console.log(colors);
console.log(last1);

let array = [5,6,7];
let elementsToAdd = [8,9,10];
array.push(...elementsToAdd);
console.log(array);


let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
console.log(stack);

let letters = ["a", "b"];
letters.push("c", "d");
let lastLetter = letters.pop();
console.log(letters);
console.log(lastLetter);
//in push the array added c and d to create a new length and the array is=[a,b,c,d].
//in pop the array delete the last element of an array that is d and returns that element.

let myArray = [10, 20, 30];
myArray.push(40);
console.log(myArray.pop());
console.log(myArray);
