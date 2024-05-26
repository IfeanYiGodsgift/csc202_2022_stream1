const EventEmitter = require('events');
const prompts = require('prompts');

// Create a custom event emitter
const customEmitter = new EventEmitter();

// Define event names
const FORM_COMPLETED_EVENT = 'formCompleted';

console.log("Welcome! Please fill out the form below 👇");

// Use prompts to gather user input
(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'Enter your name:',
    },
    {
      type: 'number',
      name: 'age',
      message: 'Enter your age:',
    },
    {
      type: 'select',
      name: 'gender',
      message: 'Select your gender:',
      choices: [
        { title: 'Male', value: 'male' },
        { title: 'Female', value: 'female' }
      ],
    },
  ]);

  console.log(`Hello, ${response.name}! Thank you for completing the form.`);
  
  // Simulate a form completion event
  setTimeout(() => {
    customEmitter.emit(FORM_COMPLETED_EVENT);
  }, 3000); // Wait for 3 seconds before emitting the event
})();

// Handle the formCompleted event with an event listener
customEmitter.on(FORM_COMPLETED_EVENT, () => {
  console.log('Form completed! Thank you for submitting.');
});
