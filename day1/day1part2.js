const { read } = require("../utilities/import");

const fileLocation = "./day1data-alexandra";

// access the list of numbers
const { sortedData } = require('./day1part1.js');

// const readNums = (filePath) =>
//   read(filePath)
//     .split("\n")
//     .map((n) => parseInt(n));

const findTargetSum = (sortedArray, target) => {
  // let lowerBound = sortedArray[0];
  // let upperBound = sortedArray[sortedArray.length - 1];
  for (let i = 0; i < sortedArray.length; i++) {
    const currentLowerBound = sortedArray[i];
    let currentUpperBoundIndex = sortedArray.length - 1;
    while (currentLowerBound + sortedArray[currentUpperBoundIndex] >= target) {
      if (currentLowerBound + sortedArray[currentUpperBoundIndex] === target) {
        return [currentLowerBound, sortedArray[currentUpperBoundIndex]];
      }
      currentUpperBoundIndex -= 1;
    }
  }
  return [-1, -1];
};

const findThreeNums = (sortedArray, target) => {
  for (let j = 0; j < sortedArray.length; j++) {
    [lower, higher] = findTargetSum(sortedArray, target - sortedArray[j]);
    if (lower + higher === target - sortedArray[j]) {
      return [lower, higher, sortedArray[j]]
    }
  }
  return [-1, -1, -1]
}

const productOfThreeItemArray = ([a, b, c]) => a * b * c;
const main = () => productOfThreeItemArray(findThreeNums(sortedData, 2020));

console.log(main())