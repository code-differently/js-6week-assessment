const computeRange = require("../../computeRangeTest");
let numbers = process.argv.slice(2).map(Number);

console.log(computeRange(numbers));