
function First(){
    console.log("Arrow function as an expression");
    let age = 5;
    let welcome = (age < 18) ?
    () => console.log('Baby') :
    () => console.log('Adult');
    welcome();

    console.log("\nMultiline Arrow Functions");
    let sum = (a,b) => {
        let result = a + b;
        return result;
    }
    let result1 = sum(5,7);
    console.log(result1);   
}
First();
console.log("");

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person();
x.sayName();


console.log("");
function Person2() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const _x = new Person2();
_x.sayName();
console.log("");

function second(){

    let j = function () {
        console.log(arguments);
    }
    j(4,6,7);
    //above j is a regulare function passing argumennts
    //arrow functions cant do it unless the spread syntax is used
    let x = (...n)=> {
        console.log("");
        console.log(n);    
    }
    x(4,6,7);
}
second();



