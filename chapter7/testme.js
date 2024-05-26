let delayMe = new Promise (function (resolve, reject){
    console.log("inside the promise");
    setTimeout(()=> {
        console.log("I worked after the delay");
        resolve(5);
    }, 5000);
});

console.log("App is running");
console.log("Application has started");
delayMe.then(value=> {
    console.log("Delay number : ", value);
});



// a promise
/* let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc(); */