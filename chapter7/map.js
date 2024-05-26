// create map 
const map1 =new Map();
console.log(map1);

//inserting key value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1);
console.log("");

//Map with object as its key
let map2 = new Map();
let obj = {};
map2.set(obj, {name: 'John', age: "25"});
console.log(map2);
console.log("");

//access map elements
console.log(map1.get('info'));
console.log("");

//checking map elements
const set1 = new Set([1,2,3]);
console.log(map1.has('info'));
console.log(set1.has('info'));
console.log("");

// removing map elements using clear and delete
/**The delete() method returns true if a specified 
 * key/value pair exists and has been removed 
 * or else returns false. For example, */
map1.delete('address');
console.log(map1);
map1.delete('info');
console.log(map1);
console.log("");

/* The clear() method removes all key/value pairs from a
 Map object. For example, */
map1.set('info', {name: 'Jack', age: 26});
console.log(map1);
console.log("");
map1.clear();
console.log(map1);
console.log("");

//checking map size
map1.set('info', {name: 'Jack', age: 26});
console.log(map1.size);
console.log("");

//iterating through a Map
map1.clear();
map1.set('name','Jack');
map1.set('age','27');
//looping through using for..of loop
for (let [key, value] of map1){
    console.log(key + '- ' + value);
}
console.log("");
//looping through using a for each
map1.forEach(function(value, key) {
    console.log(key + '- '+ value);
})
console.log("");

//iterating over map keys
for (let key of map1.keys()){
    console.log(key)
}
console.log("");
//iterating over map values
for (let value of map1.values()){
    console.log(value);
}
console.log("");

//iterating through the map using the entries method
for (let elem of map1.entries()){
    console.log(`${elem[0]}: ${elem[1]}`);
}
console.log("");

console.log("Javascript WeakMap");
const weakMap = new WeakMap();
console.log(weakMap);
let objs = {
    hi:"me"
};
//adding object (element) to Weakmap
weakMap.set(objs, 'hello');
const value1 = weakMap.get(objs)
console.log(value1);
console.log("");

function weakmap(){
    
    const weakMap = new WeakMap();
    console.log(weakMap); // WeakMap {} 
    
    let obj = {};
    
    // adding object (element) to WeakMap
    weakMap.set(obj, 'hello');
    
    console.log(weakMap); // WeakMap {{} => "hello"}
    
    // get the element of a WeakMap
    console.log(weakMap.get(obj)); // hello
    
    // check if an element is present in WeakMap
    console.log(weakMap.has(obj)); // true
    
    // delete the element of WeakMap
    console.log(weakMap.delete(obj)); // true
    
    console.log(weakMap); // WeakMap {} 
}
weakmap();
console.log("");

function weakmap1(){
    const weakMap = new WeakMap();
    console.log(weakMap); // WeakMap {} 
    
    let obj = {};
    
    // adding object (element) to WeakMap
    weakMap.set(obj, 'hello');
    
    
    // looping through WeakMap
    for (let i of weakMap) {
    
        console.log(i);  // TypeError
    }
}
weakmap1();
