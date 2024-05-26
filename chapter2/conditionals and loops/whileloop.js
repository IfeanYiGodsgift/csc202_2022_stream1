console.log("Using a WHILE loop to Display numebrs 1 to 5");
let i = 1,
  n = 5;
while (i <= n) {
  console.log(i);
  i += 1;
}

console.log("\nProgram to find the sum of positive numbers");
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
let sum = 0;
let number = parseInt(prompt("Enter a number"));
/*Here, parseInt() is used because prompt() takes input from 
the user as a string. And when numeric strings are added, 
it behaves as a string. For example, '2' + '3' = '23'. 
So parseInt() converts a numeric string to number. */
while (number >= 0) {
  sum += number;
  // take input again if the number is positive
  number = parseInt(prompt("Enter a number: "));
}
console.log(`The sum is ${sum}.`);

console.log("\nUsing a DO...WHILE to Display numbers");
let _i = 1;
const _n = 5;
do{
  console.log(_i);
  _i++;

}
while (_i <= _n);

console.log("Sum of psoitive numbers by do...while loop");
// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

let sums = 0;
let numbers = 0;

do {
    sums += numbers;
    numbers = parseInt(prompt('Enter a number: '));
} while(numbers >= 0)

console.log(`The sum is ${sums}.`);
