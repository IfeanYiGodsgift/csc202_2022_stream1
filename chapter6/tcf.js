function first(){

    // program to show try...catch in a program

const numerator= 100, denominator = 'a';

    try {
        console.log(numerator/denominator);

        // forgot to define variable a      
        console.log(a);
    }
    catch(error) {
        console.log('An error caught'); 
        console.log('Error message: ' + error);  
    }
                        
}
first();

function second(){

    const numerator= 100, denominator = 'a';
    try {
        console.log(numerator/denominator);
        console.log(a);
    }
    catch(error) {
        console.log('An error caught'); 
        console.log('Error message: ' + error);  
    }
    finally {
        console.log('Finally will execute every time');
    }
}
console.log("");
second();

setTimeout(function() {
    try {
        console.log("wow");
    } catch {
        console.log( "error is caught" );
    }
}, 3000);