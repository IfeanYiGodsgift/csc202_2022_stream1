/* In JavaScript, proxies (proxy object)
 are used to wrap an object and redefine 
 various operations into the object such as 
 reading, insertion, validation, etc. 
 Proxy allows you to add custom behavior to an 
 object or a function. */

 //1
 let student1 = {
    age: 24,
    name: "Felix"
}
const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'Property does not exist';
    }
}

const proxy =  new Proxy(student1, handler);
console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class);
console.log("");

//2
let student = {
    name: 'jack',
    age: 24
}
const handler1 = {
    get(obj, prop){
        return obj[prop];
    }
};
//passing empty handler
const proxy1 = new Proxy(student, handler1);
console.log(proxy1);
console.log(proxy1.name);
console.log("");

//3
let student2 = {
    name: 'John'
}
let setNewValue = {
    set: function(obj, prop, value){
        obj[prop] = value;
        return;
    }
};
//setting new proxy
let person = new Proxy(student2, setNewValue);
//setting new key/value
person.age = 25;
console.log(person);
console.log("");

console.log("----USES OF PROXY----\n");

console.log("----1.VALIDATION----");
function valid(){
    let student = {
        name: 'Juke',
        age: 32
    }

    const handler = {
        //get the object key and value
        get(obj, prop){
            // check condition
            if (prop == 'name'){
                return obj[prop];
            }else{
                return 'Not allowed';
            }
        }
    }

    const proxy = new Proxy(student, handler);
    console.log(proxy.name);
    console.log(proxy.age);
    console.log("");
}
valid();

console.log("----2.READ ONLY VIEW of an OBJECT----");
function Rov(){
    let student = {
        name: 'Jack',
        age: 23
    }
    const handler = {
        set: function(obj, prop, value){
            if (obj[prop]){
                //cannot change the student value
                console.log('Read only')
            }
        }
    };
    const proxy = new Proxy(student, handler);
    proxy.name = 'John';
    proxy.age = 33
    console.log("");
}
Rov();

console.log("----SOME SIDE EFFECTS----");
function side(){
    const func = () => {
        console.log("execute this function")
    };

    const handler = {
        set: function (target, prop, value){
            if (prop === 'name' && value === 'Jack'){
                //calling another function
                func();
            }
            else{
                console.log('Can only access name property');
            }
        }
    };

    const proxy = new Proxy({}, handler);

    proxy.name = 'Jack';
    proxy.age = 33;
}
side();



