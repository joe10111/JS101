const tape = require("tape");

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

function dealCard(hand, card) {
  while (true) {
    if (hand.includes(deck[card]) === false) {
      break;
    }

    indexToPull = Math.floor(Math.random() * deck.length - 1);
    console.log("Second Pull:", indexToPull);
  }

  hand.push(deck[indexToPull]);
}

tape("Twenty_one_test", function(test) {
  let indexToPull = Math.floor(Math.random() * deck.length - 1);
  test.plan(1);
  
  dealCard(playerHand);
  test.equal(playerHand.includes(deck));
  test.end();
});