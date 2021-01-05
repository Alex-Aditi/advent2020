const { read } = require("../utilities/import");

const fileLocation = "./day1data-alexandra";

// access the list of numbers
const readNums = (filePath) =>
  read(filePath)
    .split("\n")
    .map((n) => parseInt(n));
