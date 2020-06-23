// Write a node program/app/script/software program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them.

let input = process.argv.slice(2);

let sum = function(numbers) {
  let total = 0;
  for (let number of numbers) {
    total += Number(number);
  }
  return total;
}

const finalSum = sum(input);
console.log('final total: ', finalSum);