// Date     : 8/23/2022
// Author   @ Joe Centeno

// FileName     :  tic-tac-toe.js
/* Problem Desc : 
 Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. Each player takes a turn and marks a square on the board.
 The first player to get 3 squares in a row–horizontal, vertical, or diagonal–wins. If all 9 squares are filled and neither 
 player has 3 in a row, the game is a tie.
*/


// Algorithm : 
  // START
    // 1. Display the initial empty 3x3 board
    // 2. Ask the user to mark a square.
    // 3. Computer marks a square.
    // 4. Display the updated board state.
    // 5. If it's a winning board, display the winner.
    // 6. If the board is full, display tie.
    // 7. If neither player won and the board is not full, go to #2
    // 8. Play again?
      // 9. If yes, go to #1
  // END 

var readlineSync = require('readline-sync');

const INITIAL_MARKER = " "; // near the top of the file
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

let score = {"Player": 0, "Computer": 0};

let board = {
  1: ' ', // top left
  2: ' ', // top center
  3: ' ', // top right
  4: ' ', // middle left
  5: ' ', // center
  6: ' ', // middle right
  7: ' ', // bottom left
  8: ' ', // bottom center
  9: ' ', // bottom right
}

// Helper Functions
function displayBoard() {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) { // board is unused for now; we'll use it later
  return !!detectWinner(board);
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  while (true) {
    console.log(`Choose a square from (${emptySquares(board).join(', ')}):`);
    square = readlineSync.question().trim(); 

    if (emptySquares(board).includes(square)) break; // break if it's a valid square
   
      console.log("Sorry, that's not a valid choice.");
    }
    
    board[square] = HUMAN_MARKER;
  }


function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}


// Ending conditions
  // There are no more empty squares, or
  // We have a winner.
  function detectWinner(board) {
    let winningLines = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]             // diagonals
    ];
  
    for (let line = 0; line < WINNING_LINES.length; line++) {
      let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
  
      if ( board[sq1] === HUMAN_MARKER &&
           board[sq2] === HUMAN_MARKER &&
           board[sq3] === HUMAN_MARKER
      ) {
        return 'Player';
      } else if ( board[sq1] === COMPUTER_MARKER &&
                  board[sq2] === COMPUTER_MARKER &&
                  board[sq3] === COMPUTER_MARKER
      ) {
        return 'Computer';
      }
    }
  
    return null;
  }

  function findAtRiskSquare(line, board) {
    let markersInLine = line.map(square => board[square]);
  
    if (markersInLine.filter(val => val === 'X').length === 2) {
      let unusedSquare = line.find(square => board[square] === ' ');
      if (unusedSquare !== undefined) {
        return unusedSquare;
      }
    }
  
    return null;
  }
  
function mainLoop() {
  while(true) {
  board = initializeBoard();
  displayBoard(board);

  while(true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    console.log(`${detectWinner(board)} won!`);
    score[detectWinner(board)] += 1;
    console.log("Player score: " + score["Player"] + " Computer score: " + score["Computer"] );
  } else {
    console.log("It's a tie!");
  }
  console.log("Play again? (Y or N)");

  let answer = readlineSync.question().toLowerCase()[0];
  
  if (answer !== 'y') break;
  }
  
} 

mainLoop();
