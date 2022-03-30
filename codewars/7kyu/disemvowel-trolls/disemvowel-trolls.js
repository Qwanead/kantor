const disemvowel = (str) => {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  return [...str]
    .filter((char) => !VOWELS.includes(char.toLowerCase()))
    .join('');
};

module.exports = disemvowel;
