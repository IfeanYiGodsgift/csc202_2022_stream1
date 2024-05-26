// program to count down numbers to 1
function countDown(numbr) {

    // display the numbr
    console.log(numbr);

    // decrease the numbr value
    const newNumbr = numbr - 1;

    // base case
    if (newNumbr > 0) {
        countDown(newNumbr);
    }
}
countDown(4);

// program to find the factorial of a number
function factorial(x) {
    console.log(`Currently calculating faxtorisl of ${x}`);

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}