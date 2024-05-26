const fs = require('fs');

//define file paths
const source = './task2.js'
const destined = './task20.js'

fs.readFile(source, 'utf8', (readErr, data) =>{
    if (readErr) {
        console.error('Error reading source file:', readErr);
        return;
      }    
      console.log('File content:');
      console.log(data); // Display the read data
    
    fs.writeFile(destined, data, 'utf8', (writeErr)=>{
        if (writeErr){
            console.error('Error writing to destination file:', writeErr);
            return;
        }
        console.log('File content succesfully coppied');
    });
    
    });


    
