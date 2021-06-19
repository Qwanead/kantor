const duplicateCount = (text) => {
  const charsCounter = {};

  [...text.toLowerCase()].forEach((char) => {
    charsCounter[char] = charsCounter[char] ? charsCounter[char] + 1 : 1;
  });

  return Object.values(charsCounter).filter((amount) => amount !== 1).length;
};

module.exports = duplicateCount;
