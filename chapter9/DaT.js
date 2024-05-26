//new Date()
const timeNow = new Date();
console.log(timeNow);
//could also do the below
//const timeNow = new Date();
//console.log(timeNow.toLocaleString('en-US', { timeZone: 'Africa/Lagos' }));
console.log("");

const time1 = new Date(0);
//epoch time
console.log(time1);
// 100000000000 milliseconds after the epoch time
const time2 = new Date(100000000000);
console.log(time2);
console.log("");

//new Date(date string) creates a new date object from a date string.
/* // ISO Date(International Standard)
const date = new Date("2020-07-01");

// the result date will be according to UTC
console.log(date);
 */

const date = new Date("2020-07");
console.log(date);





