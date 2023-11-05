const multiplyEvensDivideOdds = require("../../multiplyEvensDivideOdds");
let numbers = process.argv.slice(2).map(Number);
console.log(multiplyEvensDivideOdds(numbers))