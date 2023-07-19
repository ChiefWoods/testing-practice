function reverseString(str) {
  if (typeof (str) === 'string') {
    return str.split('').reverse().join('');
  } else {
    throw new Error('Argument is not a string');
  }
}

module.exports = reverseString;
