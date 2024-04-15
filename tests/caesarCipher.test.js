const caesarCipher = require('../scripts/caesarCipher.js');

test('Encodes strings', () => {
  expect(caesarCipher('The Odin Project', 5)).toBe('Ymj Tins Uwtojhy');
  expect(caesarCipher('Michael B. Jordan', 9)).toBe('Vrlqjnu K. Sxamjw');
})

test('Throws error when first argument is not a string', () => {
  expect(() => caesarCipher([], 4)).toThrow();
  expect(() => caesarCipher(null, 4)).toThrow();
})

test('Throws error when second argument is not a number', () => {
  expect(() => caesarCipher('Facebook', true)).toThrow();
  expect(() => caesarCipher('Donuts', 'string')).toThrow();
})
