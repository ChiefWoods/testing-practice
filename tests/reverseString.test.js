const reverseString = require('../scripts/reverseString.js');

test('successful reversal', () => {
  expect(reverseString('explosions')).toBe('snoisolpxe');
  expect(reverseString('Dwayne Johnson')).toBe('nosnhoJ enyawD');
})

test('argument passed is not a string', () => {
  expect(() => reverseString(456)).toThrow();
  expect(() => reverseString(true)).toThrow();
})
