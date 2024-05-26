// assigning object attributes to variables
const person = {
    names: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { names, age, gender } = person;

console.log(names); 
console.log(age); 
console.log(gender); 
// destructuring assingment is practically just assigning new names to
//variable, assigning new defualt variables, and other things like
console.log("");
console.log("Swapping varibles");
let x = 4;
let y = 7;
// swapping variables
[x, y] = [y, x];
console.log(x);
console.log(y);
console.log("");

console.log("Skip items<elements> ");
const arrValue = ['one', 'two', 'three'];
// destructuring assignment in arrays
const [c, , z] = arrValue;
console.log(c); 
console.log(z); 
console.log("");

console.log("Assign remaining elements to another single variable");
const arrValues = ['one', 'two', 'three', 'four'];
// destructuring assignment in arrays
// assigning remaining elements to b
const [a, ...b] = arrValues;
console.log(a);
console.log(b);
console.log("");

const persons = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}
let { name, ...rest } = persons;
console.log(name);
console.log(rest);
console.log("");

console.log("Nested Destructuring");
// nested array elements
const arrV = ['one', ['two', 'three']];
// nested destructuring assignment in arrays
const [q, [w, e]] = arrV;
console.log(q);
console.log(w);
console.log(e); 

