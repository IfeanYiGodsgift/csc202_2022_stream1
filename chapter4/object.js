// Define an object called "person" with properties: name, age, and city.
var person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Now you can access the properties of the object using dot notation or bracket notation.
  console.log(person.name); // Output: "John"
  console.log(person.age); // Output: 30
  console.log(person.city); // Output: "New York"
  

// Define an object called "wardrobe" with properties: clothes and accessories.
var wardrobe = {
    clothes: {
      shirts: 5,
      pants: 3,
      dresses: 2
    },
    accessories: {
      jewelryBox: {
        earrings: 10,
        necklaces: 5,
        bracelets: 7
      },
      scarves: 4
    }
  };
  
  // Now you can access the properties of the nested objects using dot notation.
  console.log(wardrobe.clothes.shirts); // Output: 5
  console.log(wardrobe.accessories.jewelryBox.earrings); // Output: 10
  


// Define an object called "calculator" with methods: add, subtract, and multiply.
var calculator = {
    add: function (num1, num2) {
      return num1 + num2;
    },
    subtract: function (num1, num2) {
      return num1 - num2;
    },
    multiply: function (num1, num2) {
      return num1 * num2;
    }
  };
  
  // Now you can use the object methods to perform calculations.
  console.log(calculator.add(5, 3)); // Output: 8 (5 + 3)
  console.log(calculator.subtract(10, 4)); // Output: 6 (10 - 4)
  console.log(calculator.multiply(2, 6)); // Output: 12 (2 * 6)
 

console.log("\nManipulating an Object");
let student = { };
// adding a property
student.name = 'John';
// adding a method
student.greet = function() {
    console.log('hello');
}
// accessing a method
student.greet(); // hello