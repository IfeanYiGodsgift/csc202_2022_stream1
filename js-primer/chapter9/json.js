//JSON stands for Javascript Object Notation.
//it is a text-based data format
//below is a JSON syntax
/* {
"name": "John",
"age": 22,
"gender": "male",
}
 */
//JSON data
//"name": "John"
//JSON object
//{"name": "John", "age": 22}
//JSON array is writen inside square brackets
// JSON array
/* [ "apple", "mango", "banana"]

// JSON array containing objects
[
    { "name": "John", "age": 22 },
    { "name": "Peter", "age": 20 }.
    { "name": "Mark", "age": 23 }
] */

console.log("Accessing JSON data");
console.log("To do so we use the syntax: variableName.key\n");
//JSON object
const data = {
    "name": "Luke",
    "age": 22,
    "hobby":{
        "reading": true,
        "gaming": false,
        "sport": "football"
    },
    "class": ["JavaScript", "HTML", "CSS"]
}

//accessing JSON
console.log(data.name);
console.log(data.hobby);
console.log(data.hobby.sport);
console.log(data.class[1]);
console.log("");
console.log("one can access it also by []");
console.log(data["name"]);
console.log("");
console.log("Converting JSON to javascript object");
//javaScript Obj
const jsonData = {"nmae": "John", "age": 22};
//converting to JSON
const obj = JSON.stringify(jsonData);
//accessing data
console.log(obj);