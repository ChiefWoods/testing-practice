const caesarCipher = require('../scripts/caesarCipher.js');

test('successful encryption', () => {
  expect(caesarCipher('The Odin Project', 5)).toBe('Ymj Tins Uwtojhy');
  expect(caesarCipher('Michael B. Jordan', 9)).toBe('Vrlqjnu K. Sxamjw');
})

test('argument passed is not a string', () => {
  expect(() => caesarCipher([], 4)).toThrow();
})

test('argument passed is not a number', () => {
  expect(() => caesarCipher('Facebook', true)).toThrow();
})
