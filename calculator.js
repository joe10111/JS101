
const MESSAGES = require("./calculator_messages.json");

const readline = require("readline-sync");

function calculator() {
// Ask the user for the first number.
prompt(MESSAGES["welcome"]);

// eslint-disable-next-line no-constant-condition
prompt("Input First Value");
let firstUserInput = readline.question();

// Ask the user for the second number.
prompt("Input Second Value");
let secondUserInput = readline.question();

// Ask the user for an operation to perform.
while (invalidNumber(firstUserInput, secondUserInput)) {
  prompt("Hmm... that doesnt look like a valid number.");
  prompt("Input First Value");
  firstUserInput = readline.question();
  prompt("Input First Second Value");
  secondUserInput = readline.question();
 }

  prompt("What operation do you want to perform?");
  prompt("* = multiplication \n=> + = addition \n=> - = subtraction \n=> / = divistion");

  let operation = readline.question();

  while(!["+","-","*","/"].includes(operation)) {
    prompt("Must choose + , - , * or / \n=> Re-enter input:");
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  switch(operation) {
    case "+" : return Number(firstUserInput) + Number(secondUserInput);
    case "-" : return Number(firstUserInput) - Number(secondUserInput);
    case "*" : return Number(firstUserInput) * Number(secondUserInput);
    case "/" : return Number(firstUserInput) / Number(secondUserInput);

    default : "=> Invalid Operator please choose from list";
  }
}

// Print the result to the terminal.
let breakLoop = true;
while (breakLoop) {
  prompt(calculator());
  prompt("Would you like to perform another operation? (y/n)");
  let answer = readline.question();

  if (answer.toLowerCase() !== "y") break;
}

function invalidNumber(firstNuumber, secondNuumber) {
  return(firstNuumber.trimStart() === "" || Number.isNaN(Number(firstNuumber)) 
  && secondNuumber.trimStart() === "" || Number.isNaN(Number(secondNuumber)) === true);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

