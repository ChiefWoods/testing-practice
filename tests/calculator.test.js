const calculator = require('../scripts/calculator.js');

test('successful arithmetic operation', () => {
  expect(calculator.add(5, 8)).toBe(13);
  expect(calculator.subtract(53, 84)).toBe(-31);
  expect(calculator.divide(80, 10)).toBe(8);
  expect(calculator.multiply(9.3, 6)).toBe(55.8);
})

test('argument passed is not a number', () => {
  expect(() => calculator.subtract([23, 55], 81)).toThrow();
  expect(() => calculator.divide({ num1: 12 }, 57)).toThrow();
})

test('only one argument is passed', () => {
  expect(() => calculator.add(39).toThrow());
  expect(() => calculator.multiply(17.2).toThrow());
})
