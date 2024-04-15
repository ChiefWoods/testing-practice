function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument passed is not an array');
  }

  const filteredArr = arr.filter(x => Number.isFinite(x) && typeof x === 'number');

  if (filteredArr.length !== arr.length) {
    throw new Error('Array contains non-numeric values');
  }

  return {
    average: Math.round((arr.reduce((x, y) => x + y, 0) / arr.length) * Math.pow(10, 2)) / Math.pow(10, 2),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}

module.exports = analyzeArray;
