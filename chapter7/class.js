// A class is similar to a constructor function
// creating a class
class Person {
    constructor(name) {
      this.name = name;
    }

    //Getter
    get personName(){
        return this.name;
    }
    set personName(x) {
        this.name = x;
    }

    //difining methods 
    greet(){
        console.log(`Hello ${this.name}`);
    }
  }
console.log(Person);
console.log("");

// creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');
console.log("Adding objects to a class");
console.log(person1.name);
console.log(person2.name);
console.log("");

console.log("Difining merhods");
person1.greet();
person2.greet();
console.log("");

console.log("Getters and setters");
person2.personName = 'Sarah';
console.log(person2.name);
console.log("");

console.log("Hoisting");
console.log("This creates an error if class is accessed before definition");
console.log("");

console.log("Using strict");
//classes always uses strict mode on auto
class person{
    constructor() {
        a = 0;
        this.name = a;
    }
}
let p = new person();
console.log(p.name);
// its supposed to give an error