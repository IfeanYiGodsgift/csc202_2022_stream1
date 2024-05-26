//create an empty set
const set1 = new Set();
console.log(set1);

//set with multi values
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2);

const set3 = new Set([1,2,3]);
console.log(set3.values());
console.log(set3.has(1));
console.log("");

const set = new Set([1,2]);
console.log(set.values());
//adding new values
set.add(3);
console.log(set.values());
set.add('John');
console.log(set.values());
set.add({count : false});
console.log(set.values());
let x = "Apple";
set.add(x);
console.log(set.values());
function j (){
    return "juice"
}
set.add(j());
console.log(set.values());
/* var obj = {
    names: "gary",
    age: 25,
    truth: "death"
}
set.add(obj);
 */
console.log("");

//removing elements from a set using the delet() method
//delete removes a specific elements
set.delete(x);
console.log(set.values());
//removing using clear method
//set.clear();
console.log("");
//iterating in sets
const sets = new Set([1,2,3]);
for(let k of sets){
    console.log(k);
}
console.log("");

//Javscript weakset
const weakset = new WeakSet();
//console.log(weakset);
let objs = {
    message: 'Hi',
    sendMessage: true
}
weakset.add(objs);
console.log(weakset);

//sets can be :
console.log("");
//Unified
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
let setA = new Set(['apple', 'mango', 'orange']);
console.log("SetA:");
console.log(setA);
let setB = new Set(['grapes', 'apple', 'banana']);
console.log("SetB:");
console.log(setB);
console.log("");
let result = union(setA, setB);
console.log("----UNION set----");
console.log(result);
console.log("");

//intersected
function intersection(setA, setB) {
    let intersectionSet = new Set();

    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}
let results = intersection(setA, setB);
console.log("----INTERSECTED set----");
console.log(results);
console.log("");

//Difference can be found 
function diff(setA, setB){
    let difset = new Set(setA)
    for (let i of setB) {
        difset.delete(i)
    }
    return difset
}
console.log("----DIFFERED set----");
results = diff(setA, setB);
console.log(results);
console.log("");
// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB){
    for (let i of setB){
        if (!setA.has(i)){
            return false//if set b is not a subset of A
        }
    }
    return true // if setB IS a subset of A
}
results = subset(setA, setB);
console.log("----IF SetB is subset of SetA----");
console.log(results);






