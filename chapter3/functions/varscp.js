// The value of a global variable can be changed inside a function
// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}
// before the function call
console.log(a);
//after the function call
greet();
console.log(a);
console.log("");