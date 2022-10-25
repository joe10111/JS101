// Date     : 10/25/2022
// Author   @ Joe Centeno

// FileName     : Inventory Item Transactions  
/* Problem Desc : 
  Write a function that takes two arguments, an inventory item ID and a list of transactions,
  and returns an array containing only the transactions for the specified inventory item.
*/

// Input  : Transaction ID and Transaction Data 
// Output : Array of transactions with matching IDs from Transaction Data 

// Data Structure : 
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// Test Cases : 
console.log(transactionsFor(101, transactions));

// Rules :
  // Returns an array containing **only** the transactions for the specified inventory item.

// Algorithm : 
  // Invoke filter on transactions
  // Select id 101 from array of objects
  // return filtered ID array

// Code :
function transactionsFor(ID, listOfTransactions) {
  return listOfTransactions.filter((transaction) => transaction["id"] === ID);
}

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]