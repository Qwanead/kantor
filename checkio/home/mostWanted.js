const findMostWantedLetter = (str) => {
  const arr = str.toLowerCase().split('');
  const counter = {};
  let result = ['', 0];

  arr.forEach((it) => {
    if (/[a-z]/.test(it)) {
      counter[it] = counter[it] + 1 || 1;
    }
  });

  Object.entries(counter).forEach((it) => {
    if (result[1] < it[1] || (result[1] === it[1] && result[0] > it[0])) {
      result = it;
    }
  });

  return result[0];
};

module.exports = findMostWantedLetter;
