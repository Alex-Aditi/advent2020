const fs = require("fs");

const read = (filePath) => fs.readFileSync(filePath, "utf8");

module.exports = { read };
