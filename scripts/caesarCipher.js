function caesarCipher(str, shift) {
  const encrypted = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.codePointAt(i);
    if (charCode >= 97 && charCode <= 122) {
      let shifted = charCode + Math.abs(shift);
      if (shifted > 122) {
        encrypted += String.fromCodePoint(shifted % 123 + 97);
      } else {
        encrypted += String.fromCodePoint(shifted);
      }
    } else if (charCode >= 65 && charCode <= 90) {
      let shifted = charCode + Math.abs(shift);
      if (shifted > 90) {
        encrypted += String.fromCodePoint(shifted % 91 + 65);
      } else {
        encrypted += String.fromCodePoint(shifted);
      }
    } else {
      encrypted += str.at(i);
    }
  }
  return encrypted;
}
