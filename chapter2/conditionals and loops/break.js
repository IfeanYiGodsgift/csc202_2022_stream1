console.log("program to print the value of i");
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

console.log("\nProgram to find the sum of positive numbers");
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum
let sum = 0, number;
while(true) {

    number = parseInt(prompt('Enter a number: '));

    
    if(number < 0) {
        break;
    }
    sum += number;
}

console.log(`\nThe sum is ${sum}.`);
console.log("Breaking whithin nested for loops");

for (let _i = 1; _i <= 3; _i++){

    for (let j = 1; j <= 3; j++){
        if(_i == 2){
            break;
    
        }

        console.log(`i = ${_i}, j = ${j}`);
    }
}
