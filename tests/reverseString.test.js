const reverseString = require('../scripts/reverseString.js');

test('Reverses string', () => {
  expect(reverseString('explosions')).toBe('snoisolpxe');
  expect(reverseString('Dwayne Johnson')).toBe('nosnhoJ enyawD');
  expect(reverseString("ABC")).toBe("CBA");
  expect(reverseString("")).toBe("");
  expect(reverseString("^&*")).toBe("*&^");
})

test('Throws error if argument is not a string', () => {
  expect(() => capitalize(456)).toThrow();
  expect(() => capitalize(true)).toThrow();
  expect(() => capitalize({})).toThrow();
  expect(() => capitalize(undefined)).toThrow();
  expect(() => capitalize(function () { })).toThrow();
})
