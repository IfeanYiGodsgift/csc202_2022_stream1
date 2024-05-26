// parent class
class Person {
    constructor(name) {// This is like giving the person a name when they're born.
        this.name = name;// The person's name is stored here.
        this.occupation = "Unemoloyed";
        
    }

    greet() {// This is how the person says hello.
        console.log(`Hello ${this.name}`);// It will print "Hello" and the person's name.
    }
}

//inheriting parent class
class Student extends Person {
    
    constructor(name){
        console.log("Creating student class");
        console.log("");
        //call the super class 
        super(name);
        //overide an occupation property
        this.occupation = 'Student';
    }
    //overiding Persons method
    greet(){
        console.log(`Hello student ${this.name}`);
        console.log('Occupation:' + this.occupation);
    }
    // This says we're making a special student using the "Person" template.
    // Students can do everything that people can do, because they're based on the same template.
}
let student1 = new Student('Jack');  // We're making a new student and giving them the name "Jack."
student1.greet();  // Jack will say "Hello Jack" because that's how the greeting works.


