//day-4 loops
//----------------------------------------------------------------------------//
//Activity-1 (for loop)
//Task:- 1: Wap to print numbers from 1 to 10 using for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("---------");

//----------------------------------------------------------------------------//
//Task:- 2: Wap to print multiplication of using for loop.
for (let i = 1; i <= 10; i++) {
  let mult = 5 * i;
  console.log(`5 * ${i} = ${mult}`);
}
console.log("---------");

//----------------------------------------------------------------------------//

//Activity-2 (while loop)
//Task:- 3: Wap to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`sum of numbers : ${sum}`);
console.log("---------");

//Task:- 4: Wap to print numbers from 10 to 1 using a while loop.
let j = 10;
while (j > 0) {
  console.log(j);
  j--;
}
console.log("---------");

//----------------------------------------------------------------------------//

//Activity-3 (do-while loop)
//Task:- 5: Wap to print numbers from 1 to 5 using a do while loop.
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);
console.log("---------");

//Task:- 6: Wap to calculate factorialof a number using a do while loop.
let num = 5;
let fact = 1;
do {
  fact *= num;
  num--;
} while (num > 0);
console.log(fact);
console.log("---------");

//----------------------------------------------------------------------------//

//Activity-4 (Nested loop)
//Task:- 7: Wap to print a pattern using nested loop.
let n = 5;
for (let a = 0; a <= n; a++) {
  let row = "";
  for (let b = 0; b < a; b++) {
    row += "*";
  }
  console.log(row);
}
console.log("---------");

//----------------------------------------------------------------------------//

//Activity-5 (loop control statement)
//Task:- 8: Wap to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
console.log("---------");

//Task:- 9: Wap to print numbers from 1 to 10, but stop the loop when the numberis 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
