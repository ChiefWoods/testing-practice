const capitalize = require('../scripts/capitalize.js');

test('successful capitalization', () => {
  expect(capitalize('jeff')).toBe('Jeff');
  expect(capitalize('ice cream')).toBe('Ice cream');
})

test('argument passed is not a string', () => {
  expect(() => capitalize(123)).toThrow();
  expect(() => capitalize(false)).toThrow();
})
