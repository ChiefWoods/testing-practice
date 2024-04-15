function capitalize(str) {
  if (typeof (str) !== 'string') {
    throw new Error('Argument is not a string');
  }

  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

module.exports = capitalize;
