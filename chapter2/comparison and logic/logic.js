console.log("Logical AND & Operators");
const a = true,
  b = false;
const c = 4;

// Loguical and operators
console.log(a && a);
console.log(a && b);
console.log(c > 2 && c < 2);
console.log("\n");

console.log("Logical OR || Operators");
const _a = true,
  _b = false,
  _c = 4;
// logical OR
console.log(a || b); // true
console.log(b || b); // false
console.log(c > 2 || c < 2); // true
// "||" evaluates to true if either of the operands is true. If both operands are false, the result is false.
console.log("\n");

console.log("Logical NOT ! operators");
// logical NOT
console.log(!a); // false
console.log(!b); // true
console.log("\n");
