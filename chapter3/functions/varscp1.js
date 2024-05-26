// program showing local scope of a variable
let _a = "hello";

function greet() {
    let b = "World"
    console.log(_a + b);
}

greet();
console.log(_a);