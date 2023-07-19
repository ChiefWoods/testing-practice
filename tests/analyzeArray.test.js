const analyzeArray = require('../scripts/analyzeArray.js');

test('successful array analyzation', () => {
  expect(analyzeArray([16, 5, 39, 46, 13, 8])).toEqual({ average: 21.166666666666668, min: 5, max: 46, length: 6 });
  expect(analyzeArray([15, 87, 7, 54, 93, 33, 88, 55, 4])).toEqual({ average: 48.44444444444444, min: 4, max: 93, length: 9 });
})

test('argument passed is not an array', () => {
  expect(() => analyzeArray(null)).toThrow();
  expect(() => analyzeArray(83)).toThrow();
})
