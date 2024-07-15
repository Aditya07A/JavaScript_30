//Activity:1
//Task - 1
let num1 = 0;
if (num1 > 0) {
  console.log("number is positive");
} else if (num1 < 0) {
  console.log("number is negative");
} else {
  console.log("number is equal t0 zero");
}

//Task - 2
let person = 20;
if (person >= 18) {
  console.log("person is eligible to vote");
} else {
  console.log("person is not eligible to vote");
}

//Activity : 2
//Task - 3
let a = 40;
let b = 10;
let c = 30;
let largest;
if (a > b) {
  if (a > c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b > c) {
    largest = b;
  } else {
    largest = c;
  }
}
console.log(largest);

//Activity : 3
//Task - 4
let day = 6;
switch (day) {
  case 1:
    console.log("sunday");
    break;

  case 2:
    console.log("monday");
    break;

  case 3:
    console.log("tuesday");
    break;

  case 4:
    console.log("wednesday");
    break;

  case 5:
    console.log("thursday");
    break;

  case 6:
    console.log("friday");
    break;

  case 7:
    console.log("saturday");
    break;
  default:
    day = "Invalid number! Please enter a number between 1 and 7.";
}

//Task - 5
let marks = 80;
let grade;
switch (true) {
  case marks >= 80:
    grade = "A";
    break;

  case marks >= 70:
    grade = "B";
    break;

  case marks >= 60:
    grade = "C";
    break;

  case marks >= 50:
    grade = "D";
    break;

  case marks >= 40:
    grade = "E";
    break;

  default:
    grade = "F";
}
console.log("The grade for marks " + marks + " is: " + grade);

//Activity:4
//Task - 6
let num2 = 11;
let res = num2 % 2 == 0 ? "even" : "odd";
console.log("The number is : " + res);

//Activity:5
//Task - 7
let year = 2024;

let isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

if (isLeapYear) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
