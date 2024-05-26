function Person () {
    this.name = 'John',
    this.age = 23
}
const person = new Person();
//checking prototype value 

console.log(Person.prototype);
console.log("\nPrototype inheritance");
function Person1 () {
    this.name = 'Josh',
    this.age = 32
}
//creating objects
const person1 = new Person1();
const person2 = new Person1();
//adding property to constructor function
Person1.prototype.gender = 'male';
//protitype value 
console.log(Person1.prototype);
//inherit prototype property
console.log(person1.gender);
console.log(person2.gender);

console.log("\nChanging Prototypes");
/*If a prototype value is changed, then all the new objects 
will have the changed property value.
All the previously created objects will have the previous value.
For example,*/
/* Note: You should not modify the prototypes of standard 
JavaScript built-in objects like strings, arrays, etc.
It is considered a bad practice.*/
function third(){

    function Person2 (){
        this.name = 'John'
    }
    Person2.prototype.age = 20;
    //we use prototype to add the age property to the Person2 function
    const _person1 = new Person2();
    console.log(_person1.age);
    
    //manupilating the property value of prototype
    // in other words changing the value of the age property
    Person2.prototype = {age:50}
    //create a  new object to hold the new prototype value
    const _person3 = new Person2();
    
    console.log(_person3.age);
    console.log(_person1.age);
    console.log(_person3.name);

}
third();

console.log("\nPrototype Chaining");
/*If an object tries to access the same property that is in the 
constructor function and the prototype object, 
the object takes the property from the constructor function. */
function fourth(){

    function Person() {
        this.name = 'John'
    }

    Person.prototype.name = 'Peter';
    Person.prototype.age = 23;

    const person1 = new Person();
    console.log(person1.name);
    console.log(person1.age);
}
fourth();

console.log("\nNote: You can also access the prototype property of a constructor function from an object.");
function fifth(){

    function Person (){
        this.name = 'West'
    }
    Person.prototype.age = 24;
    const person = new Person();
    //accessing prototype property
    console.log(person.__proto__);
    //But it is important to note that u shouldnt use __proto__
    // use Object.getPrototypeOf(object name) its more modern
    console.log(Object.getPrototypeOf(person));
}
fifth();

