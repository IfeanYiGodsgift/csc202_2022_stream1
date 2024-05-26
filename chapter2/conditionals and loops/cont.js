// program to print the value of i
for (let a = 1; a <= 5; a++) {

    // condition to continue    
    if (a == 3) {
        continue;
    }

    console.log(a);
}

// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation
// negative number -> loop terminate
// non-numeric character -> skip iteration

let sum = 0;
let number = 0;

while (number >= 0) {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; // the value of number is made 0 again
        continue;
    }
}
console.log(`The sum is ${sum}.`);

// nested for loops
for (let i = 1; i <= 3; i++) {
    
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}