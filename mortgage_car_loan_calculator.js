
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(firstNuumber) {
  return(firstNuumber.trimStart() === "" || Number.isNaN(Number(firstNuumber) === true));
}

function calculate_mcl(){
  prompt("Welcome to the Car Loan and Mortgage Calculator");

  prompt("Enter the loan amount?");

  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Please enter a positive number");
    loanAmount = readline.question();
  }

  prompt("Enter the intrest rate?");
  let interestRate = readline.question();

  while (invalidNumber(interestRate)) {
    prompt("Please enter a positive number");
    interestRate = readline.question();
  }

  prompt("What is the loan duration?");
  let years = readline.question();

  while(invalidNumber(years)) {
    prompt("Please enter a postive number");
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  let monthlyPayment = Number(loanAmount) * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));
  
  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Another calculation?");
  prompt("Enter y or n");
  let answer = readline.question().toLowerCase();
  if(answer === "y") {
    calculate_mcl();
  }
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter y or n.");
    answer = readline.question().toLowerCase();
    if (answer[0] === "n") {
      break;
    } 
  }
}

calculate_mcl();