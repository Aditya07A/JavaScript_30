// Activity 1
// Task 1- Write a function to check if a number is even or odd and log the result to the console

function oddEven(num1) {
  if (num1 % 2 == 0) {
    console.log("number is Even");
  } else {
    console.log("number is Odd");
  }
}
oddEven(2);
console.log("-----------------------------------");
// Task 2- Write a function to calculate the square of a number and return the result

function square(num2) {
  let sqt = num2 * num2;
  console.log(sqt);
}
square(2);
console.log("-----------------------------------");
// function square(num2) {
//   let sqt = num2 * num2; // Calculate the square of 'num2' and store it in 'sqt'
//   return sqt;            // Return the value of 'sqt'
// }

// let result = square(2);  // Call the function with the argument 2, and store the result in 'result'
// console.log(result);     // Log the result to the console

//====================================================================

// Activity 2
// Task 3 - Write a function expression to find the maximum of two numbers and log the result to the console
let num3 = 10;
let num4 = 20;
const max = function (num3, num4) {
  if (num3 > num4) {
    console.log("num 3 is maximum");
  } else {
    console.log("num 4 is maximum");
  }
};
max(num3, num4);
console.log("-----------------------------------");
// Task 4- Write a function expression to concatenate two strings and return the result
let str1 = "Hello";
let str2 = "World";

const conStr = function (str1, str2) {
  return str1 + str2;
};
console.log(conStr(str1, str2));
console.log("-----------------------------------");

//====================================================================

// Activity 3
// Task 5 - Write an arrow function to calculate the sum of two numbers and return the result
let num5 = 20;
let num6 = 80;
const sum = (num7, num8) => {
  return num7 + num8;
};
console.log(sum(num5, num6));
console.log("-----------------------------------");

// Task 6- Write an arrow function to check if a string contains a specific character and return a boolean value
let char = "A";
let str = "Aditya";
const checkChar = (char, str) => str.includes(char);

console.log(checkChar(char, str));
console.log("-----------------------------------");

//====================================================================

// Activity 4
/// Task 7 - Write a function that takes two parameters and returns their product. Provide a default value for the second parameter
const product = (a, b = 10) => {
  return a * b;
};
console.log(product(10, 5));
console.log(product(10));
console.log("-----------------------------------");

// Task 8 - Write a function that takes a person's name and age and returns a greeting message. provide  a default value for the age

const greet = (name, age = 10) => {
  return `Hello ${name} and age is ${age}`;
};
console.log(greet("Aditya"));
console.log(greet("Aditya", 18));

console.log("-----------------------------------");

//====================================================================

// Activity 5
// Task 9 - Write a higher-order function that takes a function and a number, and calls the function that many time
const newfun = (fun, t) => {
  for (let i = 0; i <= t; i++) {
    fun();
  }
  return;
};
newfun(() => {
  console.log(`function called`);
}, 3);

console.log("-----------------------------------");

// Task 10 - Write a higher-order function that takes two functions and value, applies the first function to the value, and then applies the second function to the result

let x = 3;
const fun3 = (x) => {
  return x + 3;
};
const fun4 = (x) => {
  return x + 2;
};
function hofFun(fun3, fun4, value) {
  return fun4(fun3(value));
}

const result = hofFun(fun3, fun4, x);
console.log(result);
