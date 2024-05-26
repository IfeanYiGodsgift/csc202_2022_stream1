function first(){
    const count = true;
    let countValue = new Promise(function (resolve, reject){
        if (count){
            resolve("Count was found True");
        }else{
            reject("Count was found false, error occured");
        }
    });

    console.log(countValue);
}
first();

function second(){
    //returns a promise
    let countValue = new Promise(function(resolve, reject){
        resolve("Promise resolved");
    });
    //execute when promise is resolved successfully
    countValue.then(function successvalue(result){
        console.log(result);
    }).then(function successvalue1(){
        console.log("You can tell multiple functions this way");
    });
}
second();

function third(){
    let countValue = new Promise(function(resolve, reject){
        reject('Promise rejected');
    });
    countValue.then(
        function successvalue(result){
            console.log(result);
        },
    ).catch(
        function errorvalue(result){
            console.log(result);
        }
    );
}
third();

// returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});

// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);