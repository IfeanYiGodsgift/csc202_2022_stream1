console.log("Equal to Operators\n");
const a = 5,
  b = 2,
  c = "hello";
//equal to opperators
console.log(a == 5); // output = True
console.log(b == "2"); // output = True
console.log(c == "Hello"); // output = false as h is capitalized

console.log("Not equals to Operators");
//not equal opperators
const d = 3,
  e = "hello";
console.log(d != 2); // output is true
console.log(e != "Hello"); // output is true
// != is true if the values are NOT true
console.log("Strict equals to Operators");
// this one is true if the values are both of the same value like 2 and 2 and same type like both must be integers or both must be strings etc
const _a = 2;
console.log(_a === 2);
console.log(_a === "2");
// first one is true the second is false due to it not being the same type
console.log("Strict not equals to Operators");
// as there is not equal norm there is not equal strict; also the exact opposite of Strict equal
const $a = 2,
  $b = "hello";
console.log($a !== 2); // this would give you false
console.log($a !== "2"); // this however would give you true as it is opposit in type to the original
console.log($b !== "Hello"); // this is opposite in form

console.log("Greater than Operator >");
const a1 = 3;
console.log(a > 2); //Output runs true
console.log("Greater than or Equal to");
console.log(a1 >= 3); //true

console.log("Less than operators");
const a2 = 3,
  b2 = 2;
console.log(a2 < 2); //Output was false
console.log(b2 < 3); //Output was true
console.log("Less than or equals to ");
const _q = 2;
console.log(_q <= 3); // true
console.log(_q <= 2); // true
