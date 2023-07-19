const calculator = {
  add: (x, y) => {
    return x + y;
  },

  subtract: (x, y) => {
    return x - y;
  },

  divide: (x, y) => {
    return y === 0 ? 'Cannot divide against 0' : x / y;
  },

  multiply: (x, y) => {
    return x * y;
  }
}
