console.log("Displaying a text 5 times");
const a = 3;
console.log("\nlooping from i = 1 to 5");
for (let i = 1; i <= a; i++) {
  console.log("\nFOR loops <<< WHILE loops");
}

console.log("\nDisplaying numbers 1 to 5");
const b = 5;
for (let i = 1; i <= b; i++) {
  console.log(i);
}

console.log("\nDisplaying the sum of natty numbers");
let sum = 0;
const c = 100;

for (let i = 1; i <= c; i++) {
  sum += i;
}
console.log("sum:", sum);

/* // program to display the sum of n natural numbers
let sum = 0;
const n = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = n; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum += i; // sum = sum + i
}

console.log('sum:',sum); */

// infinite for loop
/* for (let i = 1; i > 0; i++) {
  // block of code
}
console.log(i); */
