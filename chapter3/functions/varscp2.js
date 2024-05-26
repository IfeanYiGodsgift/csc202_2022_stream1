// program showing block-scoped concept
// global variable
let a1 = 'Hello';

function greet() {

    // local variable
    let b1 = 'World';

    console.log(a1 + ' ' + b1);

    if (b1 == 'World') {

        // block-scoped variable
        let c1 = 'hello';

        console.log(a1 + ' ' + b1 + ' ' + c1);
    }

    // variable c cannot be accessed here
    console.log(a1 + ' ' + b1);
}

greet();