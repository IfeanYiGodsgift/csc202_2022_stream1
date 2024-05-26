const student = {

    firstName: 'Monica',
    //Accessor property aka the Getter
    get getName() {
        return  this.firstName;
    }
};

//accessing the data prpertty aka firstName
console.log(student.firstName);
//accessing getter methods
console.log(student.getName);
//Note Trying to access it as a method would flag an error 
// like student.getName() would reslt in Error

// setters are used to change the value of an object
const student1 = {
    firstName: '\nMonica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student1.firstName); // Monica

// change(set) object property using a setter
student1.changeName = 'Sarah';
console.log(student1.firstName); // Sarah

//In JavaScript, you can also use Object.defineProperty() method
// to add getters and setters. For example,
const student2 = {
    firstName: '\nMonica'
}
//get property
Object.defineProperty(student2, "getName",{
    get : function (){
        return this.firstName;
    }
});
//setting property
Object.defineProperty(student2, "changeName", {
    set : function (value){
        this.firstName = value;
    }
});

console.log(student2.firstName);
//changing the property vaalue
student2.changeName = 'Sarah';
console.log(student2.firstName);