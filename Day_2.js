// Task/Activities:
// Activity 1: Arithmetic Operations
// Task 1
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);

// Task 2
let num3 = 50;
let num4 = 20;
console.log(num3 - num4);

// Task 3:
let num5 = 10;
let num6 = 20;

console.log(num5 * num6);

// Task 4
let num7 = 10;
let num8 = 20;
console.log(num7 / num8);

// Task 5
let num9 = 30;
let num10 = 9;
console.log(num9 % num10);

// Activity 2: Assignment Operators
// Task 6
let num11 = 10;
let add = 5;

num11 += add;
console.log(num11);

// Task 7
let num12 = 10;
let sub = 5;

num12 -= sub;
console.log(num12);

// Activity 3: Comparison Operators
// Task 8

const num13 = 10;
const num14 = 20;

const isGreater = num13 > num14;
const isSmaller = num13 < num14;
console.log(`${num13} > ${num14} is ${isGreater}`);
console.log(`${num13} < ${num14} is ${isSmaller}`);

// Task 9

const num15 = 25;
const num16 = 30;

const isGreaterEqual = num15 >= num16;
const isSmallerEqual = num15 <= num16;
console.log(`${num15} >= ${num16} is ${isGreaterEqual}`);
console.log(`${num15} <= ${num16} is ${isSmallerEqual}`);

// Task 10

const num17 = 30;
const num18 = "30";

const isEqualDouble = num17 == num18;
const isEqualTriple = num17 === num18;
console.log(`${num17} == ${num18} is ${isEqualDouble}`);
console.log(`${num17} === ${num18} is ${isEqualTriple}`);

// Activity 4: Logical Operators
// Task 11

const age = 20;
const hasDrivingLicense = true;

const canDrive = age >= 18 && hasDrivingLicense;

// Log the result to the console
console.log(`Age is ${age}, has driving license: ${hasDrivingLicense}`);
console.log(`Can rent a car: ${canDrive}`);

// Task 12

const hasTicket = false;
const isVIP = true;

const canEnterConcert = hasTicket || isVIP;
console.log(`Has ticket: ${hasTicket}, is VIP: ${isVIP}`);
console.log(`Can enter concert: ${canEnterConcert}`);

// Task 13
const isRaining = true;
const willGetRain = !isRaining;
console.log(`Is it raining: ${willGetRain}`);

// Activity 5: Ternary Operator
// Task 14

const num19 = -5;
const result = num19 >= 0 ? "positive" : "negative";

console.log(`The number ${num19} is ${result}`);
