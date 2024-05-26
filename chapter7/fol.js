function array(){
    // array
    const students = ['John', 'Sara', 'Jack'];
    // using for...of
    for ( let element of students ) {
    
        // display the values
        console.log(element);
    }
}
function string(){
    // string
    const string = 'code';
    
    // using for...of loop
    for (let i of string) {
        console.log(i);
    }
}
function set(){
    // define Set
    const set = new Set([1, 2, 3]);
    
    // looping through Set
    for (let i of set) {
        console.log(i);
    }
}
function map(){
    // define Map
    let map = new Map();
    
    // inserting elements
    map.set('name', 'Jack');
    map.set('age', '27');
    
    // looping through Map
    for (let [key, value] of map) {
        console.log(key + '- ' + value);
    }
}
array();
console.log("");
string();
console.log("");
set();
console.log("");
map();
console.log("");
console.log("Above are some uses of the for..of loop");
/* You can create an iterator manually and use the 
for...of loop to iterate through the iterators. 
For example, */
console.log("");
console.log("You can also create user defined iterators");
//create an iterable object
const itobj = {
    //iterator method
    [Symbol.iterator](){
        let step = 0;
        return{
            next(){
            step++;
            if (step === 1){
                return { value: '1', done: false};
            }
            else if (step === 2) {
                return { value: '2', done: false};
            }
            else if (step === 3) {
                return { value: '3', done: false};
            }
            return { value: '', done: true };

            }
        }
    }
}
for (const i of itobj){
    console.log(i);
}
console.log("");

console.log("For of with generators");
function* genfunct(){
    yield 10;
    yield 20;
    yield 30;
}
const obj = genfunct();
for (let value of obj){
    console.log(value);
}