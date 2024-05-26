/* // constructor function
function Person () {
  this.name = 'John',
  this.age = 23
}

// create an object
const person = new Person(); */

/* function Person(name, age) {
  
  this.name = name;
  this.age = age;
}

const people = [];
let continueInput = "yes"; // Initialize to "yes" to start the loop.

while (continueInput === "yes") {
  const name = prompt("Enter a name:");
  const age = parseInt(prompt("Enter the age:"));

  const person = new Person(name, age);
  people.push(person);

  continueInput = prompt("Do you want to continue entering data? (yes/no)").toLowerCase();
}

console.log("All Names and Ages:");
people.forEach(person => {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
});
 */


function Persson (person_name, person_age, person_gender){

  this.name = person_name,
  this.age = person_age,
  this_gender = person_gender,

  this.greet = function () {
    return ('Hi ',+ ' ' + this.name );
  }

}

const pers1 = new Persson('John', 23, 'male');
const pers2 = new Persson('Sam', 25, 'female');

console.log(pers1.name);
console.log(pers2.name);