const analyzeArray = require('../scripts/analyzeArray.js');

test('Analyzes array of numbers', () => {
  expect(analyzeArray([16, 5, 39, 46, 13, 8])).toEqual({ average: 21.17, min: 5, max: 46, length: 6 });
  expect(analyzeArray([15, 87, 7, 54, 93, 33, 88, 55, 4])).toEqual({ average: 48.44, min: 4, max: 93, length: 9 });
})

test('Throws error if argument passed is not an array', () => {
  expect(() => analyzeArray(null)).toThrow();
  expect(() => analyzeArray(83)).toThrow();
  expect(() => analyzeArray({ 12: 34, 78: 90 })).toThrow();
})

test('Throws error if array contains non-numeric values', () => {
  expect(() => analyzeArray([3, 5, 7, 'a', 9])).toThrow();
  expect(() => analyzeArray([1, false, 2, 3, 5])).toThrow();
  expect(() => analyzeArray([34, [89, 51], 42])).toThrow();
  expect(() => analyzeArray([11, 24, 73, undefined, 64])).toThrow();
  expect(() => analyzeArray([1, NaN, 80, 43])).toThrow();
  expect(() => analyzeArray([73, 86,, 35])).toThrow();
})