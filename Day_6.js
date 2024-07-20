//Day - 6
// Activity- 1 Array creation and access
// Task 1- create an array of number 1 to 5 and log the array to the console.
let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

// Task 2- Access the first and last elements of an arrayand log them to the console.
let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2[0]);
// console.log(arr2.length);

//--------------------------------------------------------------------------------------------
// Activity- 2 Array Methods
// Task 3- use push method to add a new number to the end of array and log the updated array.
let arr3 = arr1.push(6);
// console.log(arr1);

// Task 4- use pop method to remove the last element from the array and log the updated array.
let arr4 = arr1.pop();
// console.log(arr1);

// Task 5- use sift method to remove the first element from the array and log the updated array.
let arr5 = arr1.shift();
// console.log(arr1);

// Task 6- use unsift method to add element in the array and log the updated array.
let arr6 = arr1.unshift(1);
// console.log(arr1);

//--------------------------------------------------------------------------------------------
// Activity- 3
// Task 7- use map method where each number s doubled and log the array.
let arr7 = arr1.map((num) => num * 2);
// console.log(arr7);

// Task 8- use filter method to create an array with only even numbers and log the new array.
let arr8 = arr1.filter((num) => num % 2 == 0);
// console.log(arr8);

// Task 9- use reduce method to calculate sum of all numbers in the array and log the result.
let arr9 = arr1.reduce((acc, curr) => acc + curr, 0);
// console.log(arr9);

//--------------------------------------------------------------------------------------------
// Activity- 4
// Task 10 - use for loop to iterate over the array and log each element to the console.
let newArr = [10, 20, 30, 40, 50];
for (let i = 0; i < newArr.length; i++) {
  //   console.log(newArr[i]);
}

// Task 11-use forEach method to iterate over the array and log each element to the console.
let newArr1 = [11, 22, 33, 44, 55];
newArr1.forEach((element) => {
  //   console.log(element);
});

//--------------------------------------------------------------------------------------------
// Activity- 5
// Task 12- create two dimemsional array and log the entire array to console.
let twoD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// console.log(twoD);

// Task 13- access and log an element from two dimemsional array.
console.log(twoD[1][0]);
