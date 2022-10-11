let readlineSync = require("readline-sync");

console.log("Whats your age?");
let userAge = readlineSync.prompt();

console.log("When would you want to retire?");
let userRetireAge = readlineSync.prompt();

let year = new Date().getFullYear();

console.log(`It's ${year}. You will retire in ${(userRetireAge - userAge) + year}`);
console.log(`You only have ${userRetireAge - userAge} years of work to go!`)