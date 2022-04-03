const duplicateEncode = (word) => [...word.toLowerCase()]
  .map((char, _, wordArr) => (
    wordArr.indexOf(char) === wordArr.lastIndexOf(char) ? '(' : ')'))
  .join('');

module.exports = duplicateEncode;
