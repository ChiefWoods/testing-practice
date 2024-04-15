function caesarCipher(str, shift) {
  if (typeof (str) !== 'string') {
    throw new Error('First argument is not a string');
  }

  if (typeof (shift) !== 'number') {
    throw new Error('Second argument is not a number');
  }

  let encrypted = '';
  const len = str.length;

  for (let i = 0; i < len; i++) {
    let charCode = str.codePointAt(i);

    encrypted += (charCode >= 97 && charCode <= 122)
      ? appendEncrypted(97, 122, charCode, shift)
      : (charCode >= 65 && charCode <= 90)
        ? appendEncrypted(65, 90, charCode, shift)
        : str.charAt(i);
  }

  return encrypted;
}

function appendEncrypted(lowerBound, upperBound, charCode, shift) {
  const shifted = charCode + Math.abs(shift);

  return shifted > upperBound
    ? String.fromCodePoint(shifted % (upperBound + 1) + lowerBound)
    : String.fromCodePoint(shifted);
}

module.exports = caesarCipher;
