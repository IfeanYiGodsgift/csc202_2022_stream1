/* // A fun and helpful Node.js JavaScript code that uses the fs module to find, create, edit and delete files
// Inspired by https://www.w3schools.com/nodejs/nodejs_filesystem.asp

// Import the fs module
var fs = require("fs");

// Define a function that finds a file by its name and displays its content on the console
function findFile(fileName) {
  // Check if the file exists
  fs.access(fileName, fs.constants.F_OK, (err) => {
    // If the file does not exist, display an error message
    if (err) {
      console.error("Sorry, I could not find the file " + fileName + ". 😔");
    } else {
      // If the file exists, read its content and display it on the console
      fs.readFile(fileName, "utf8", (err, data) => {
        // If there is an error reading the file, display an error message
        if (err) {
          console.error("Sorry, I could not read the file " + fileName + ". 😔");
        } else {
          // If there is no error reading the file, display a success message and the file content
          console.log(
            "Yay, I found the file " + fileName + ". Here is what it says: 😊"
          );
          console.log(data);
        }
      });
    }
  });
}

// Define a function that creates a new file with some content
function createFile(fileName, content) {
  // Use the fs.writeFile method to create a new file with some content
  fs.writeFile(fileName, content, (err) => {
    // If there is an error creating the file, display an error message
    if (err) {
      console.error("Sorry, I could not create the file " + fileName + ". 😔");
    } else {
      // If there is no error creating the file, display a success message
      console.log(
        "Yay, I created a new file called " +
          fileName +
          " with some content. 🎉"
      );
    }
  });
}

// Define a function that edits an existing file by appending some content
function editFile(fileName, content) {
  // Use the fs.appendFile method to append some content to an existing file
  fs.appendFile(fileName, content, (err) => {
    // If there is an error editing the file, display an error message
    if (err) {
      console.error("Sorry, I could not edit the file " + fileName + ". 😔");
    } else {
      // If there is no error editing the file, display a success message
      console.log(
        "Yay, I edited the file " +
          fileName +
          " by appending some content. 🎉"
      );
    }
  });
}

// Define a function that deletes an existing file by its name
function deleteFile(fileName) {
  // Use the fs.unlink method to delete an existing file by its name
  fs.unlink(fileName, (err) => {
    // If there is an error deleting the file, display an error message
    if (err) {
      console.error("Sorry, I could not delete the file " + fileName + ". 😔");
    } else {
      // If there is no error deleting the file, display a success message
      console.log("Yay, I deleted the file " + fileName + ". 🎉");
    }
  });
}

// Import the prompt module
var prompt = require("prompt");

// Define a function that asks the user what they want to do with files
function askUser() {
  // Display a welcome message and ask the user what they want to do with files using the prompt module
  prompt.start();
  prompt.get(
    [
      {
        name: "action",
        description:
          "Hello! Welcome to my fun and helpful code. 😊\nWhat do you want to do with files? You can choose from: find, create, edit or delete. 📁",
        type: "string",
        required: true,
      },
    ],
    function (err, result) {
      // Check if the user entered a valid action
      if (
        result.action.toLowerCase() === "find" ||
        result.action.toLowerCase() === "create" ||
        result.action.toLowerCase() === "edit" ||
        result.action.toLowerCase() === "delete"
      ) {
        // Call the appropriate function based on the user's action
        switch (result.action.toLowerCase()) {
          case "find":
            // Ask the user for the file name using the prompt module
            prompt.get(
              [
                {
                  name: "fileName",
                  description: "What is the name of the file that you want to find? 🕵️‍♂️",
                  type: "string",
                  required: true,
                },
              ],
              function (err, result) {
                // Call the findFile function with the user's file name
                findFile(result.fileName);
                // Ask the user if they want to do anything else using the prompt module
                prompt.get(
                  [
                    {
                      name: "another",
                      description:
                        "Do you want to do anything else with files? 😊",
                      type: "string",
                      required: true,
                    },
                  ],
                  function (err, result) {
                    // Check if the user entered yes
                    if (result.another.toLowerCase() === "yes") {
                      // Call the askUser function again
                      askUser();
                    } else {
                      // Display a goodbye message and exit the program
                      console.log("OK, no problem. Goodbye. 😒");
                      process.exit();
                    }
                  }
                );
              }
            );
            break;
          case "create":
            // Ask the user for the file name and extension using the prompt module
            prompt.get(
              [
                {
                  name: "fileName",
                  description:
                    "What is the name and extension of the file that you want to create? 📝",
                  type: "string",
                  required: true,
                },
              ],
              function (err, result) {
                // Store the user's file name and extension in a variable
                var fileName = result.fileName;
                // Ask the user for the content of the file using the prompt module
                prompt.get(
                  [
                    {
                      name: "content",
                      description:
                        "What do you want to write in the file? 🖋️",
                      type: "string",
                      required: true,
                    },
                  ],
                  function (err, result) {
                    // Call the createFile function with the user's file name and content
                    createFile(fileName, result.content);
                    // Ask the user if they want to do anything else using the prompt module
                    prompt.get(
                      [
                        {
                          name: "another",
                          description:
                            "Do you want to do anything else with files? 😊",
                          type: "string",
                          required: true,
                        },
                      ],
                      function (err, result) {
                        // Check if the user entered yes
                        if (result.another.toLowerCase() === "yes") {
                          // Call the askUser function again
                          askUser();
                        } else {
                          // Display a goodbye message and exit the program
                          console.log("OK, no problem. Goodbye. 😒");
                          process.exit();
                        }
                      }
                    );
                  }
                );
              }
            );
            break;
          case "edit":
            // Ask the user for the file name using the prompt module
            prompt.get(
              [
                {
                  name: "fileName",
                  description:
                    "What is the name of the file that you want to edit? ✏️",
                  type: "string",
                  required: true,
                },
              ],
              function (err, result) {
                // Store the user's file name in a variable
                var fileName = result.fileName;
                // Check if the file exists
                fs.access(fileName, fs.constants.F_OK, (err) => {
                  // If the file does not exist, display an error message
                  if (err) {
                    console.error(
                      "Sorry, I could not find the file " + fileName + ". 😔"
                    );
                    // Ask the user if they want to do anything else using the prompt module
                    prompt.get(
                      [
                        {
                          name: "another",
                          description:
                            "Do you want to do anything else with files? 😊",
                          type: "string",
                          required: true,
                        },
                      ],
                      function (err, result) {
                        // Check if the user entered yes
                        if (result.another.toLowerCase() === "yes") {
                          // Call the askUser function again
                          askUser();
                        } else {
                          // Display a goodbye message and exit the program
                          console.log("OK, no problem. Goodbye. 😒");
                          process.exit();
                        }
                      }
                    );
                  } else {
                    // If the file exists, ask the user for the content that they want to append using the prompt module
                    prompt.get(
                      [
                        {
                          name: "content",
                          description:
                            "What do you want to append to the file? 🖋️",
                          type: "string",
                          required: true,
                        },
                      ],
                      function (err, result) {
                        // Call the editFile function with the user's file name and content
                        editFile(fileName, result.content);
                        // Ask the user if they want to do anything else using the prompt module
                        prompt.get(
                          [
                            {
                                name: "another",
                                description:
                                  "Do you want to do anything else with files? 😊",
                                type: "string",
                                required: true,
                              },
                            ],
                            function (err, result) {
                              // Check if the user entered yes
                              if (result.another.toLowerCase() === "yes") {
                                // Call the askUser function again
                                askUser();
                              } else {
                                // Display a goodbye message and exit the program
                                console.log("OK, no problem. Goodbye. 😒");
                                process.exit();
                              }
                            }
                          );
                        }
                      );
                    }
                  });
                }
              );
              break;
            case "delete":
              // Ask the user for the file name using the prompt module
              prompt.get(
                [
                  {
                    name: "fileName",
                    description:
                      "What is the name of the file that you want to delete? 🗑️",
                    type: "string",
                    required: true,
                  },
                ],
                function (err, result) {
                  // Store the user's file name in a variable
                  var fileName = result.fileName;
                  // Check if the file exists
                  fs.access(fileName, fs.constants.F_OK, (err) => {
                    // If the file does not exist, display an error message
                    if (err) {
                      console.error(
                        "Sorry, I could not find the file " + fileName + ". 😔"
                      );
                      // Ask the user if they want to do anything else using the prompt module
                      prompt.get(
                        [
                          {
                            name: "another",
                            description:
                              "Do you want to do anything else with files? 😊",
                            type: "string",
                            required: true,
                          },
                        ],
                        function (err, result) {
                          // Check if the user entered yes
                          if (result.another.toLowerCase() === "yes") {
                            // Call the askUser function again
                            askUser();
                          } else {
                            // Display a goodbye message and exit the program
                            console.log("OK, no problem. Goodbye. 😒");
                            process.exit();
                          }
                        }
                      );
                    } else {
                      // If the file exists, ask the user if they are sure that they want to delete it using the prompt module
                      prompt.get(
                        [
                          {
                            name: "sure",
                            description:
                              "Are you sure that you want to delete the file " +
                              fileName +
                              "? This action cannot be undone. 😱",
                            type: "string",
                            required: true,
                          },
                        ],
                        function (err, result) {
                          // Check if the user entered yes
                          if (result.sure.toLowerCase() === "yes") {
                            // Call the deleteFile function with the user's file name
                            deleteFile(fileName);
                            // Ask the user if they want to do anything else using the prompt module
                            prompt.get(
                              [
                                {
                                  name: "another",
                                  description:
                                    "Do you want to do anything else with files? 😊",
                                  type: "string",
                                  required: true,
                                },
                              ],
                              function (err, result) {
                                // Check if the user entered yes
                                if (result.another.toLowerCase() === "yes") {
                                  // Call the askUser function again
                                  askUser();
                                } else {
                                  // Display a goodbye message and exit the program
                                  console.log("OK, no problem. Goodbye. 😒");
                                  process.exit();
                                }
                              }
                            );
                          } else {
                            // Display a message saying that the file was not deleted and ask the user if they want to do anything else using the prompt module
                            console.log(
                              "OK, I did not delete the file " + fileName + ". 😌"
                            );
                            prompt.get(
                              [
                                {
                                  name: "another",
                                  description:
                                    "Do you want to do anything else with files? 😊",
                                  type: "string",
                                  required: true,
                                },
                              ],
                              function (err, result) {
                                // Check if the user entered yes
                                if (result.another.toLowerCase() === "yes") {
                                  // Call the askUser function again
                                  askUser();
                                } else {
                                  // Display a goodbye message and exit the program
                                  console.log("OK, no problem. Goodbye. 😒");
                                  process.exit();
                                }
                              }
                            );
                          }
                        }
                      );
                    }
                  });
                }
              );
              break;
          }
        } else {
          // Display an error message saying that the user did not enter a valid action and ask them to try again using the prompt module
          console.error(
            "Sorry, I did not understand what you want to do with files. 😔"
          );
          prompt.get(
            [
              {
                name: "tryAgain",
                description: "Do you want to try again? 😊",
                type: "string",
                required: true,
              },
            ],
            function (err, result) {
              // Check if the user entered yes
              if (result.tryAgain.toLowerCase() === "yes") {
                // Call the askUser function again
                askUser();
              } else {
                // Display a goodbye message and exit the program
                console.log("OK, no problem. Goodbye. 😒");
                process.exit();
              }
            }
          );
        }
      }
    );
  }
  
  // Call the askUser function to start the program
  askUser();
   */

//import fs module
const fs = require('fs');

//current dir : /documents/BBC,JAVA,IT/code_camp/codecamp
//making a new dir

fs.mkdir('./myFolder', (err) =>{
  if(err){
    console.log(err);
  }else{
    console.log('Folder created Succesfully');
  }
});


const data = "\nHi this is a newfile.txt";

fs.writeFile('./myFolder/myfile.txt', data,{flag: 'a'}, (err)=>{
  if(err){
    console.log(err);
    return;
  }else{
    console.log('Written to file successfully');
  }
});

fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data)=>{
  if(err){
    console.log(err);
    return;
  }else{
    console.log('File read successfully! Here is the data');
    console.log(data);
  }
});


