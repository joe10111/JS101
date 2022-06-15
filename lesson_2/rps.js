// @ Athour : Joe Centeno
// Date :     6/14/22 

// RULES for RPS
/*
  If player a chooses rock and player b chooses scissors, player a wins.
  If player a chooses paper and player b chooses rock, player a wins.
  If player a chooses scissors and player b chooses paper, player a wins.
  If both players choose the same item, neither player wins. It's a tie.

  How Program should run:
  1. The user makes a choice.
  2. The computer makes a choice.
  3. The winner is displayed.

  Goal : type out functions for each function of the program
  */

  const readline = require("readline-sync");

  const VALID_CHOICES = ["rock", "paper", "scissors"];
  
  function prompt(message) {
    console.log(`=> ${message}`);
  }
  
  function welcomePlayer() {
    prompt("Welcome to Rock, Paper, Scissors!");
    prompt(`Please choose one of the following ${VALID_CHOICES.join(", ")}`);
  }

  function getUserInput() {
    let input = readline.question();

    while(!VALID_CHOICES.includes(input)) {
      prompt("Please enter a valid choice: ");
      input = readline.question();
    }

    return input;
  }

  function calculate_rps(userResponse, computerChoice) {
    
    prompt(`You threw ${userResponse}, and the computer threw ${computerChoice}`);
  
    if ((userResponse === "rock" && computerChoice === "scissors") ||
        (userResponse === "paper" && computerChoice === "rock") ||
        (userResponse === "scissors" && computerChoice === "paper")) {
      score.player += 1;
      prompt("You win this round!");
      prompt(`Computer Score : ${score.computer}`);
      prompt(`Person Score : ${score.player}`);
    } else if ((userResponse === "rock" && computerChoice === "paper") ||
               (userResponse === "paper" && computerChoice === "scissors") ||
               (userResponse === "scissors" && computerChoice === "rock")) {
      prompt("The Computer wins this round!");
      score.computer += 1;
      prompt(`Computer Score : ${score.computer}`);
      prompt(`Person Score : ${score.player}`);
    } else {
      score.computer += 1;
      score.player += 1;
      prompt("Its a tie!");
      prompt(`Computer Score : ${score.computer}`);
      prompt(`Person Score : ${score.player}`);
   }
    
   if(score.player >= 5) {
    prompt("You win!");
   } else if(score.computer >= 5) {
    prompt("The computer wins!");
   }
  }

  function restart() {
    prompt("Do you want to play again (y/n)?");
  
    let answer = readline.question().toLowerCase();
  
    while (answer[0] !== "n" && answer[0] !== "y") {
      prompt("Please enter y or n.");
      answer = readline.question().toLowerCase();
    }
    return answer;
  }

  let playAgain = true;
  
  let score = {computer : 0, player : 0};
  
  while (playAgain) {
    welcomePlayer();
  
    let userResponse = getUserInput();
  
    let randIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randIndex];
  
    calculate_rps(userResponse, computerChoice);

    let restartAwnser = restart();
    
    /*
    if(score.computer || score.player === 5) {
      prompt("Game Over!");
      break;
    }
    */

    if (restartAwnser !== "y") {
      break;
    }
  }