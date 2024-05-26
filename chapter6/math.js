// math.js (a module)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const PI = 3.14159;

module.exports = {
  addition: add,//renaming a function in a module
  subtract,
  PI,
  anotherObject: {
    name: 'John Doe',
    age: 30
  }
};
