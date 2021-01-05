const { read } = require("../utilities/import");


// find product of two numbers that sum to 2020

// access the list of numbers
const nums = read('./day1data-alexandra')

// arrange them somehow
// initialize an array
const data = nums.split('\n').map(n => parseInt(n))
console.log(data.length)

// look through each potential pairing to see if it sums to 2020
// if it does, return value of the product