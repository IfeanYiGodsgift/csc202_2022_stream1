function first (){
    const student = {
        name: 'Monica',
        class: 7,
        age: 12
    }
    
    // using for...in
    for ( let key in student ) {
    
        // display the properties
        console.log(`${key} => ${student[key]}`);
    }
}
function second(){

    const salaries= {
        Jack : 24000,
        Paul : 34000,
        Monica : 55000
    }
    
    // using for...in
    for ( let i in salaries) {
    
        // add a currency symbol
        let salary = "$" + salaries[i];
    
        // display the values
        console.log(`${i} : ${salary}`);
    }
}
function third(){

    // define array
    const arr = [ 'hello', 1, 'JavaScript' ];

    // using for...in loop
    for (let x in arr) {
    console.log(arr[x]);
    }
}

first();
second();
third();

let id = Symbol("id");

/* let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let i in person) {
    console.log(i);
} */