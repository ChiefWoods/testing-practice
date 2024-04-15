function reverseString(str) {
  if (typeof (str) !== 'string') {
    throw new Error('Argument is not a string');
  }

  return str.split('').reverse().join('');
}

module.exports = reverseString;
