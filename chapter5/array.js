function first(){

    const myList = [ ];
    const array = [23, 24, 25];
    const array2 = new Array ("array1","array","newarray");
    const newData = ['work', 'exercise', 1, true];
    const ovrmix = [
        {'Task1': 'exercise'},
        [1,2,3],
        function hello() {console.log('hello')}
    ];
    
    console.log(myList);
    console.log(array);
    console.log(array2);
    console.log(newData);
    console.log(ovrmix);
    console.log("");
    
    //if you wish to list 2 arrays using a for loop refere back here
    
    for (let i = 0; i <array.length; i++ ){
        const arrays = array[i];
        const arrays2 = array2[1];
    
        console.log(`${arrays}, ${arrays2}`);
    }
    
}
first();

function second(){

    console.log("\nAccessing array elements");
    const myArray = ['h','e','l','l'];
    console.log(myArray[0]);
    console.log(myArray[1]);
    console.log(myArray[2]);
    console.log(myArray[3]);
}
second();

function third(){

    console.log("");
    console.log("Using the <push> keyword to well push to an array");
    console.log("Note if you want to edit define arrays with <let> and not <const>");
    let acts = ['homicide','genocide'];
    console.log("");
    console.log("original array");
    console.log(acts);
    acts.push('robbery');
    console.log("");
    console.log("new array");
    console.log(acts);
    console.log("");
    console.log("You can also choose the index when push");
    acts[4] = 'assualt';
    acts[5] = 'battery';
    console.log(acts);
}
third();

function fourth(){

    console.log("");
    console.log("Removing an element from an array");
    let crimes = ['homicide','genocide','robbery','battery','assualt','arson'];
    console.log(crimes);
    console.log("");
    console.log("last element removed with arrayname.pop()");
    const news = crimes.pop();
    console.log(news);
    console.log("");
    console.log("Remove elements index 1 and 2 with: splice(start index, how many index)");
    const news1 = crimes.splice(1,2);
    console.log(news1);
    console.log("");
    console.log("removing elements with slice and concat");
    const news2 = crimes.slice(0,1).concat(crimes.slice(3));
    console.log(news2);
    console.log("");
    console.log("removing elements with filter");
    const news3 = crimes.filter(crimes => crimes !== 2 && crimes !== 4);
    console.log(news3);
    console.log("");
}
fourth();

function fifth(){

    let dailyActivities = ['sleep', 'work', 'exercise']
    let newRoutine = ['eat'];
    
    // sorting elements in the alphabetical order
    dailyActivities.sort();
    console.log(dailyActivities); // ['exercise', 'sleep', 'work']
    
    //finding the index position of string
    const position = dailyActivities.indexOf('work');
    console.log(position); // 2
    
    // slicing the array elements
    const newDailyActivities = dailyActivities.slice(1);
    console.log(newDailyActivities); // [ 'sleep', 'work']
    
    // concatenating two arrays
    const routine = dailyActivities.concat(newRoutine);
    console.log(routine); // ["exercise", "sleep", "work", "eat"] 
}
fifth();


