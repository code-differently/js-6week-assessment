const countEvensAndOdds = require("../../countEvensAndOdds");
let numbers = process.argv.slice(2).map(Number);
console.log(countEvensAndOdds(numbers));

