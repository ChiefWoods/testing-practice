const calculator = {
  areOperandsNumbers: (operand1, operand2) => {
    if (typeof (operand1) !== 'number' || typeof (operand2) !== 'number') {
      throw new Error('Argument is not a number or undefined');
    }
  },

  add: (x, y) => {
    calculator.areOperandsNumbers(x, y);
    return Math.round((x + y) * Math.pow(10, 2)) / Math.pow(10, 2);;
  },

  subtract: (x, y) => {
    calculator.areOperandsNumbers(x, y);
    return Math.round((x - y) * Math.pow(10, 2)) / Math.pow(10, 2);;
  },

  divide: (x, y) => {
    calculator.areOperandsNumbers(x, y);
    return y === 0 ? 'Cannot divide against 0' : Math.round((x / y) * Math.pow(10, 2)) / Math.pow(10, 2);;
  },

  multiply: (x, y) => {
    calculator.areOperandsNumbers(x, y);
    return Math.round((x * y) * Math.pow(10, 2)) / Math.pow(10, 2);
  }
}

module.exports = calculator;
