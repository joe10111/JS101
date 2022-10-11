const util = require('node:util');
// Date     : 9/13/2022
// Author   @ Joe Centeno

// FileName     :
/* Problem Desc : 

*/

// Input  :
// Output :

// Test Cases :

// Data Structure :
/*
[
  {
    suit: "",
    card: "",
    value: "",
  }
]
*/

// Rules :

// Algorithm :
/*
// Get deck of cards
  // Look at them and copy them into data structure
// Set up prompt system to ask players questions
// Make helper functions for hit or stay
// Make win and loose states
  // compare player and ai scores

1. Initialize deck & hands
 - Make two arrays one for deck and one empty for player hand
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

// Code :

var rls = require("readline-sync");

let deck = [
  {
    suit: "Hearts",
    card: "Ace",
    value: "11",
  },
  {
    suit: "Hearts",
    card: "Jack",
    value: "10",
  },
  {
    suit: "Hearts",
    card: "King",
    value: "10",
  },
  {
    suit: "Hearts",
    card: "Queen",
    value: "10",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "2",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "3",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "4",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "5",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "6",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "7",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "8",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "9",
  },
  {
    suit: "Hearts",
    card: "NonFaceCard",
    value: "10",
  },

  {
    suit: "Club",
    card: "Ace",
    value: "11",
  },
  {
    suit: "Club",
    card: "Jack",
    value: "10",
  },
  {
    suit: "Club",
    card: "King",
    value: "10",
  },
  {
    suit: "Club",
    card: "Queen",
    value: "10",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "2",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "3",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "4",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "5",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "6",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "7",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "8",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "9",
  },
  {
    suit: "Club",
    card: "NonFaceCard",
    value: "10",
  },
  {
    suit: "Diamonds",
    card: "Jack",
    value: "10",
  },
  {
    suit: "Diamonds",
    card: "Ace",
    value: "11",
  },
  {
    suit: "Diamonds",
    card: "Jack",
    value: "10",
  },
  {
    suit: "Diamonds",
    card: "King",
    value: "10",
  },
  {
    suit: "Diamonds",
    card: "Queen",
    value: "10",
  },
  {
    suit: "Diamonds",
    card: "Queen",
    value: "10",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "2",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "3",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "4",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "5",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "6",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "7",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "8",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "9",
  },
  {
    suit: "Diamonds",
    card: "NonFaceCard",
    value: "10",
  },
  {
    suit: "Spades",
    card: "Jack",
    value: "10",
  },
  {
    suit: "Spades",
    card: "Queen",
    value: "10",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "2",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "3",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "4",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "5",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "6",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "7",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "8",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "9",
  },
  {
    suit: "Spades",
    card: "NonFaceCard",
    value: "10",
  }
];

let playerHand = [];
let dealerHand = [];

function initDecks() {
  playerHand.push(deck[Math.floor(Math.random() * deck.length - 1)]);
  playerHand.push(deck[Math.floor(Math.random() * deck.length - 1)]);

  dealerHand.push(deck[Math.floor(Math.random() * deck.length - 1)]);
  dealerHand.push(deck[Math.floor(Math.random() * deck.length - 1)]);
}
function clearDecks() {
  playerHand = [];
  dealerHand = [];
}

function playerTurn(playerHand) {
  //- Ask player to hit or stay.
  console.log("PlayerHand : ", playerHand);
  console.log(totalHand(playerHand));

  let awnser = rls.question("hit or stay player?");
  /*
  if(awnser.toLowerCase() !== "stay" || awnser.toLowerCase() !== "hit") {
  while(true) {
    console.log(awnser);
    awnser = rls.question("Please enter hit or stay?");

    if(awnser.toLowerCase() === "stay" || awnser.toLowerCase() === "hit") {
      break;
    }
  }
}
*/
  while (true) {
    if (awnser.toLowerCase() === "hit") {
      dealCard(playerHand);
      console.log("PlayerHand : ", playerHand);
      console.log(totalHand(playerHand));

      if (busted(playerHand)) {
        console.log("Busted!");
        break;
      }

      awnser = rls.question("hit or stay player?");
    }

    if (awnser.toLowerCase() === "stay" || busted(playerHand)) {
      break;
    }
  }
}

function dealerTurn(dealerDeck) {
  // Dealer turn: hit or stay
  // - repeat until total >= 17
  console.log("Dealers Face Up Card : ", dealerDeck[0]);
  console.log(totalHand(dealerDeck));

  console.log("Hit or stay computer?");

  while(totalHand(dealerDeck) <= 17) {
    console.log("PC: Hit!");
    dealCard(dealerDeck);
    console.log(totalHand(dealerDeck));
  }

  if (busted(dealerDeck)) {
    console.log(`Computer busted! at ${totalHand(dealerDeck)}`);
  } else {
    console.log("PC: stay");
  }
}

function totalHand(deck) {
  let sumOfHand = 0;

  if (deck.length === 0 || Array.isArray(deck) === false) {
    return sumOfHand;
  }

  let values = deck.map((cardInDeck) => cardInDeck);

  values.forEach((cardInDeck) => {
    if (cardInDeck.card !== "Ace") {
      sumOfHand += Number(cardInDeck.value);
    }

    if (cardInDeck.card === "Ace" && sumOfHand < 21) {
      sumOfHand += 11;
    }

    if (cardInDeck.card === "Ace" && sumOfHand >= 21) {
      sumOfHand -= 10;
      cardInDeck.value = "1";
    }
  });

  return sumOfHand;
}

function dealCard(hand) {
  let indexToPull = Math.floor(Math.random() * deck.length - 1);
  console.log("First Pull:", indexToPull);

  while (true) {
    if (hand.includes(deck[indexToPull]) === false) {
      break;
    }

    indexToPull = Math.floor(Math.random() * deck.length - 1);
    console.log("Second Pull:", indexToPull);
  }

  hand.push(deck[indexToPull]);
}

function busted(hand) {
  if (totalHand(hand) > 21) {
    return true;
  }

  return false;
}

function results(playerHand, dealerHand) {
  if (busted(playerHand) && (totalHand(dealerHand) <= 21)) {
    console.log("Dealer Wins!");
    return "Dealer Wins!";
  }

  if (busted(dealerHand) && totalHand(playerHand) <= 21 ) {
    console.log("Player Wins!");
    return "Player Wins!";
  }

  if (totalHand(playerHand) === totalHand(dealerHand) || (busted(dealerHand) && busted(dealerHand))) {
    console.log("Tie!");
    return "Tie!";
  }
}

function showHand() {
  console.log("Player Hand: ", playerHand);
  console.log("Player Hand Total: ", totalHand(playerHand));

  console.log("Dealer Hand: ", dealerHand);
  console.log("Dealer Hand Total: ", totalHand(dealerHand));
}

function gamePlayLoop() {
  while(true) {
    //console.log(deck);
    clearDecks();
    initDecks();

    console.log(
    "--------------------------------------------------------------------"
    );
    playerTurn(playerHand);
    console.log(
    "--------------------------------------------------------------------"
    );
    dealerTurn(dealerHand);
    console.log(
    "--------------------------------------------------------------------"
    );
    results(playerHand, dealerHand);
    showHand();
    console.log(
    "--------------------------------------------------------------------" 
    );
    //console.log(deck);
    let restart = rls.question("Would you like to play again?");

    if(restart.toLowerCase() !== "y") {
      break;
    }
  } 

  console.log("Game Ended");
}

gamePlayLoop();