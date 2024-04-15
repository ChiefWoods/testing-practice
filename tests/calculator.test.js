const calculator = require('../scripts/calculator.js');

test('Performs correct arithmetic operations', () => {
  expect(calculator.add(5, 8)).toBe(13);
  expect(calculator.subtract(53, 84)).toBe(-31);
  expect(calculator.divide(80, 10)).toBe(8);
  expect(calculator.multiply(9.3, 6)).toBe(55.8);
})

test('Throws error if argument is not a number', () => {
  expect(() => calculator.add('a', 8)).toThrow();
  expect(() => calculator.subtract([23, 55], 81)).toThrow();
  expect(() => calculator.divide(12, null)).toThrow();
  expect(() => calculator.multiply(true, 6)).toThrow();
})

test('Throws error if only one argument is passed', () => {
  expect(() => calculator.add(39).toThrow());
  expect(() => calculator.multiply(17.2).toThrow());
})
