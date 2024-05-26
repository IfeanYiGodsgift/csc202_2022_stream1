/* In JavaScript, you can also pass a function as 
an argument to a function. This function that is 
passed as an argument inside of another function 
is called a callback function. For example, */

function greet1(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet1('Peter', callMe);
console.log("");


//  program that shows the delay in execution
function greet() {
    console.log('Hello world');
    console.log("");
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function
setTimeout(greet, 2000);
sayName('John');


function greet2(name, myFunction){
    console.log("Hello world");
    //callback function
    //ececuted only after the greet()
    myFunction(name);
}
//callback function
function sayname(name){
    console.log('Hello '+ name);
}
//calling the function after 2 secs
setTimeout(greet2, 2000, 'Juke', sayname);



