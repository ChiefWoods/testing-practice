function analyzeArray(arr) {
  return {
    average: arr.reduce((x, y) => x + y, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  }
}
