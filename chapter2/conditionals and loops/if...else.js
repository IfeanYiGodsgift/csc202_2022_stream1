console.log("Typical If Else conditionals, to prove a number positive");

let i = 1,
  n = 3;
while (i <= 3) {
  let consent = prompt("Ready for a new loop?");
  if (consent === "yes") {
    const number = prompt("Enter a number: ");
    // check numebr

    if (number > 0) {
      console.log(`The number ${number} is positive`);
    } else if (number < 0) {
      console.log(`The number ${number} is negative`);
    } else {
      console.log("Please put in any number that isn't zero");
    }
    console.log("This is exactly like python");
    i += 1;
  } else {
    console.log("\nNot ready to play");
    break;
  }
}
