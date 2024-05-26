/* // program to display a text using setInterval method
function greet() {
    console.log('Hello world');
}
setInterval(greet, 1000);

// program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}
let display = setInterval(showTime, 5000); */

// program to stop the setInterval() method after five times


const namePromise = new Promise((resolve, reject) => {
    // function to print the name
    function greet(name, lastName) {
      for (let i = 0; i < 10; i++) {
        console.log('Hello' + ' ' + name + ' ' + lastName);
        setTimeout(() => {
          if (i === 9) {
            resolve();
          }
        }, 2000);
      }
    }
  
    // setInterval to call the greet function every 1 second
    greet('John', 'Doe');
  });
  
const timePromise = new Promise((resolve, reject) => {
  // function to print the time
  function displayTime() {
    for (let i = 0; i < 10; i++) {
      const time = new Date().toLocaleTimeString();
      console.log(time);
      setTimeout(() => {
        if (i === 9) {
          resolve();
        }
      }, 1000);
    }
  }
  
  // create a promise from the setInterval function
  const timePromise = new Promise((resolve, reject) => {
    setInterval(displayTime, 1000, resolve);
  });
});
  
async function main() {
  // await the namePromise
  const name = await namePromise;
  
  // console.log the name
  console.log(`Hello ${name}!`);
  
  // await the timePromise
  const time = await timePromise;
  
  // console.log the time
  console.log(`The time is ${time}.`);
  
  // stop the timePromise from running
  timePromise.cancel();
}
  
main();
  
    
  
  