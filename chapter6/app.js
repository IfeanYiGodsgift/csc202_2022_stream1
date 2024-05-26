// app.js

const math = require('./math.js');

console.log(math.addition(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
console.log(math.PI); // Output: 3.14159
console.log(math.anotherObject.name); // Output: John Doe
console.log(math.anotherObject.age); // Output: 30

/* using the Defualts exports
const math = require('./math.js', {
    default: ['subtract', 'PI']
  });
  
  console.log(math.subtract(10, 4)); // Output: 6
  console.log(math.PI); // Output: 3.14159
   */