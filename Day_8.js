//Day :- 8
// Activity :- 1- Template Literals
//Task :- 1- use template literals to create a string that includes variables for a person's name and age and log the string to the console.
let name = "Aditya";
let age = 25;
// console.log(`Name of the person is ${name} and age of the person is ${age}`);

//Task :- 2- Create multi-line string using template literals
let multiLine = " This is multiline string.";
//  console.log(`This
//     is
//     multiline
//       string`);

//--------------------------------------------------------------------------------------------
// Activity :- 2- Destructuring
//Task :- 3- use array destructuring to extract the first and second elements from an array of numbers and log them to console.
let arr = [1, 2, 3, 4, 5];
let [num1, num2] = arr;
// console.log(`first element is ${num1} and second element is ${num2}`);

let book = {
  title: "Sherlock Holmes",
  author: "Sir Arthur Doyle",
};
let { title, author } = book;
// console.log(`Title is ${title} and author is ${author}`);

//--------------------------------------------------------------------------------------------
// Activity :- 3- Spread and Rest operator
//Task :- 5- use spread operator to create new array that includes all elements of an existing array plus aditional elements and log new array to console.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8, 9, 10];
// console.log(arr2);

//Task :- 6- use rest operator in a function to accept an arbitary number of arguments, sum them and return the result.
function myfun(...args) {
  let sum = 0;
  for (const i of args) {
    sum += i;
  }
  return sum;
}
let total = myfun(1, 2, 3, 4, 5);
// console.log(total);

//--------------------------------------------------
//Activity :- 4:Deafult Parameters
//Task 7:- write a function that takes two parametrs and return their product, with the second parameter having default value of 1.log the result calling this function with and without the second parameter.

function prod(a, b = 1) {
  return a * b;
}
// console.log(`product of two number with parameters: ${prod(20, 10)}`);
// console.log(`product of two number without second parameter: ${prod(90)}`);

//--------------------------------------------------
//Activity :- 5:Deafult Parameters
//Task 8:- use enhanced object literals to create an object with methods and properties and log them in console.
const info = {
  name: "Aditya",
  age: 20,
  greet() {
    console.log(`hello ${name}`);
  },
};
// console.log(info);
// info.greet();

//Task 9:- create an object with computed property names based on variables and log the object to the console.
const phoneBrand = "brand";
const phoneName = "name";
const launchYear = "year";

const phone = {
  [phoneBrand]: "Apple",
  [phoneName]: "iphone 15",
  [launchYear]: 2023,
};

console.log(phone);
