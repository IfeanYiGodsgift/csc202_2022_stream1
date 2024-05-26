function first(){
    console.log("We are finnally in Multi Dimensional Arrays");
    let ex = [
        ['Oyinda', 19],
        ['Victoria', 17],
        ['Princess', 16],
    ];
    
    console.log(ex[0]);
    console.log(ex[1]);
    console.log(ex[2]);
    console.log("");
    
    console.log("Adding elements to the Outer array");
    let studentsData = [['Jack', 24], ['Sara',23],];
    studentsData.push(['Peter', 24]);
    console.log(studentsData);
    console.log("");
    
    console.log("Adding elements to the inner array using index notation");
    let studentData = [['Jack',24], ['Sara', 23],];
    studentData[1][2] = 'hello';
    console.log(studentData);
    console.log("");
    
    console.log("Adding elements to inner array using push");
    let studentdata = [['Jack', 24], ['Sara', 23],];
    studentdata[1].push('hello');
    console.log(studentdata);
    console.log("");
    
    console.log("Adding elements using the Arrays's splice() method");
    let studentsDatas = [['Jack', 24], ['Sara', 23],];
    // adding element at 1 index
    studentsDatas.splice(1, 0, ['Peter', 24]);
    console.log(studentsDatas);  
    console.log("");  
}
first();

function second(){
    console.log("remove the array element from outer array");
    let studentsData = [['Jack', 24], ['Sara', 23],];
    studentsData.pop();
    console.log(studentsData);
    console.log("");
    
    console.log("Remove Element from inner array");
    let studentData = [['Jack', 24], ['Sara', 23],];
    studentData[1].pop();
    console.log(studentData);
    console.log("");

    console.log("Using the splice() method to remove specifically");
    let studentsdata = [['Jack', 24], ['Sara', 23],];
    // removing 1 index array item
    studentsdata.splice(1,1);
    console.log(studentsdata);
    console.log("");
}
second();

function third(){

    let studentsData = [['\nJack', 24], ['Sara', 23],];
    // iterating over the studentsData
    studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
        });
    });

    let studentData = [['\nJack', 24], ['Sara', 23],];
    for (let i of studentData) {
    for (let j of i) {
    console.log(j);
        }
    }

    let studentsdata = [['\nJack', 24], ['Sara', 23],];
    // looping outer array elements
    for(let i = 0; i < studentsdata.length; i++){    
        // get the length of the inner array elements
        let innerArrayLength = studentsdata[i].length;
        // looping inner array elements
        for(let j = 0; j < innerArrayLength; j++) {
            console.log(studentsdata[i][j]);
        }
    }

}
third();

