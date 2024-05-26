/* const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female
this is a classic example of destructuring */

/* // Returns a promise
let countValue = new Promise(function (resolve, reject) {
    resolve('Promise resolved');
});

// Handles promise resolution
countValue.then(
    function successValue(result) {
        console.log(result); // Promise resolved
    }
).catch(
    function errorValue(error) {
        console.log(error); // This won't be executed for a resolved promise
}); */

/* You can use the rest parameter to represent an indefinite number of arguments as an array. For example,

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  
  show('one', 'two', 'three', 'four', 'five', 'six');

You use the spread syntax ... to copy the items into a single array. For example,

let arr1 = ['one', 'two'];
let arr2 = [...arr1, 'three', 'four', 'five'];
console.log(arr2); // ["one", "two", "three", "four", "five"]
 */

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please input age: ", function(ageInput) {
  const age = parseInt(ageInput);

  if (!isNaN(age)) {
    const welcome = (age < 18) ?
      () => console.log('Baby') :
      () => console.log('Adult');

    welcome();
  } else {
    console.log('Invalid age input.');
  }

  rl.close();
}); */



  

