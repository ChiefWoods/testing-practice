const capitalize = require('../scripts/capitalize.js');

test('Capitalizes first letter of string', () => {
  expect(capitalize('a')).toBe('A');
  expect(capitalize('jeff')).toBe('Jeff');
  expect(capitalize('ice cream')).toBe('Ice cream');
})

test('Does not capitalize if first letter is already capitalized', () => {
  expect(capitalize('Q')).toBe('Q');
  expect(capitalize('BOB')).toBe('BOB');
})

test('Does not capitalize non-alphabetic characters', () => {
  expect(capitalize('')).toBe('');
  expect(capitalize(' ')).toBe(' ');
  expect(capitalize('#$%')).toBe('#$%');
})

test('Throws error if argument is not a string', () => {
  expect(() => capitalize(123)).toThrow();
  expect(() => capitalize(false)).toThrow();
  expect(() => capitalize([])).toThrow();
  expect(() => capitalize(undefined)).toThrow();
  expect(() => capitalize(function () { })).toThrow();
})
