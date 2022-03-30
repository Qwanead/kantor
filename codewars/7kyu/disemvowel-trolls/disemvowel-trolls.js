const disemvowel = (str) => {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  [...str].forEach((char) => {
    if (!VOWELS.includes(char)) {
      result += char;
    }
  });
  return result;
};

module.exports = disemvowel;
