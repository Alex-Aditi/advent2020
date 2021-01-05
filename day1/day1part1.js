const { read } = require("../utilities/import");

// find product of two numbers that sum to 2020

// access the list of numbers
const nums = read("./day1data-alexandra")
  .split("\n")
  .map((n) => parseInt(n));

const sortedData = nums.sort((a, b) => a - b);

const find2020 = (sortedArray) => {
  // let lowerBound = sortedArray[0];
  // let upperBound = sortedArray[sortedArray.length - 1];
  for (let i = 0; i < sortedArray.length; i++) {
    const currentLowerBound = sortedArray[i];
    let currentUpperBoundIndex = sortedArray.length - 1;
    while (currentLowerBound + sortedArray[currentUpperBoundIndex] >= 2020) {
      if (currentLowerBound + sortedArray[currentUpperBoundIndex] === 2020) {
        return [currentLowerBound, sortedArray[currentUpperBoundIndex]];
      }
      currentUpperBoundIndex -= 1;
    }
  }
  return [-1, -1];
};

const productOfTwoItemArray = ([a, b]) => a * b;

const main = () => productOfTwoItemArray(find2020(sortedData));

// look through each potential pairing to see if it sums to 2020
// if it does, return value of the product

console.log(main());

// module.exports = { find2020 };
