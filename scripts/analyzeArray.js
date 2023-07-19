function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument passed is not an array');
  } else {
    return {
      average: Math.round((arr.reduce((x, y) => x + y, 0) / arr.length) * Math.pow(10, 2)) / Math.pow(10, 2),
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length
    }
  }
}

console.log(analyzeArray([16, 5, 39, 46, 13, 8]));
console.log(analyzeArray([15, 87, 7, 54, 93, 33, 88, 55, 4]));

module.exports = analyzeArray;
