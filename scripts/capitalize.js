function capitalize(str) {
  if (typeof (str) === 'string') {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  } else {
    throw new Error('Argument is not a string');
  }
}

module.exports = capitalize;
