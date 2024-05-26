//displaying text after  3secs
function greet(){
    console.log('Hello world');
}
let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);
console.log("");

//program to show time every second
let showtimecount = 0;
function showTime(){
    //return new date and time
    let dateTime = new Date();
    // returns the current local time 
    let time = dateTime.toLocaleTimeString();
    console.log(time);

    showtimecount++;
    if (showtimecount < 10){
        //display the time after 3 sec
        setTimeout(showTime, 1000);
    }
}
showTime();

// program to stop the setTimeout() method
// function creation
/* function increaseCount(){
    let count = 0;
    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);
setTimeout(() =>{
    // clearTimeout
    clearTimeout(id); 
    console.log('setTimeout is stopped.');
}, 2000);
 *///but it still runs reagardles due to the condition if i added

//program to display name
function greetWithName(name, lastName){
    console.log('Hello'+ ' '+ name+ ' '+ lastName);
}
console.log("");
//passing argument to setimeout
setTimeout(greetWithName, 5000, 'John', 'Doe');
