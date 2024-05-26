
function greet(_name) {
    console.log("\nHello  " + _name +  "  😊");
}

function math(_name){
    console.log("\nYay I Knew You Were Fun😆")
    console.log("\nNow i need you to give me 4 numbers okay\nJust any that come to mind");
    let num1 = parseInt(prompt("Numero UNO please:"));
    let num2 = parseInt(prompt("Now for numbre duex:"));
    let num3 = parseInt(prompt("Number three :"));
    let num4 = parseInt(prompt("And finally the fourth number: "));
    console.log(`\nI see 👁️ that you chose ${num1}, ${num2}, ${num3}, and ${num4}`);
    console.log("Great Lets get down to the math");
    console.log("\nLets add UNO with DUEX, that should give us ::", num1 + num2);
    console.log("My new lucky number (❁´◡`❁)");
    console.log("Thanks for that ", _name);
    console.log("\nNow lets do numero 3 and 4 to give us ::", num3 + num4);
    console.log("😙 I prefer my lucky number");
}

console.log("Hi there USER 👋\nMy name is Joint system\nJ.S for short");
let _name = prompt("Hi\nWhat's your name? :");
greet(_name);

let answer = prompt("Would you like to do some math");

if (answer == 'yes'){
    math(_name);
}
else{
    console.log("that's sad😪");
}

/*// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);*/

/*// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);*/
