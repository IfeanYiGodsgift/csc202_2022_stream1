const lib = require('./modulef');
const prompts = require('prompts');

(async () => {
    const response = await prompts([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'text',
            name: 'phoneNumber',
            message: 'What is your phone number?'
        },
        // {
        //     type: 'text',
        //     name: 'message',
        //     message: 'What do you want to say', // Use 'message' instead of 'Message'
        // }
        {
            type: 'select',
            name: 'choice',
            message: 'random',
            choices: [
                { title: 'Fun Fact', value: "Fun Fact" },
                { title: 'Bucket List', value: 'Bucket List' }
            ],
        }
    ]);

    let message
    let phoneNumber
    console.log('Name:', response.name);
    console.log('Phone Number:', response.phoneNumber);
    console.log('choice:', response.choice); // Use 'message' instead of 'Message'

    let searchParten = /^\d{11}|234\d[10]\|\+234\d{10}$/;
    if (searchParten.test(response.phoneNumber) === true) {
        phoneNumber = response.phoneNumber
    } else {
        console.log("Invalid Phone Number");
    }

    switch (response.choice) {
        case "Fun Fact":
            console.log("Entered fun fact")
            let getMessage = await lib.fact()
            if (getMessage.ok) {
                message = `Hello your fact of the day from ${response.name} is ${getMessage.data}`;
                //message = getMessage.data
            } else {
                console.log("Sorry, we ran into an error. Please try again later")
                return
            }
            break;
        case "Bucket List":
            let getMessage2 = await lib.bucket()
            if (getMessage2.ok) {
                //message = getMessage2.data
                message = `Hello your sugestion from ${response.name} is ${getMessage2.data} do it before you die`;
            } else {
                console.log("Sorry, we ran into an error. Please try again later")
                return
            }
            break;
    }

    console.log({
        message,
        phoneNumber
    })

    await lib.sms({ message, phoneNumber })
    console.log(`your sms ${response.choice == 'Fun Fact' ? "for the day" : "suggestion"} has been sent`)
})();
