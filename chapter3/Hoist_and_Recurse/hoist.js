// using test before declaring
var test;
console.log(test); // undefined

// program to display value
var a;
a = 5;
console.log(a); // 5

// program to display value
var a = 4;
function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}
greet(); // hello
console.log(a);
