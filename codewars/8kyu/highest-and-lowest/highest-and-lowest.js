const highAndLow = (numbersStr) => {
  const numbers = numbersStr.split(' ');
  const lowest = Math.min(...numbers);
  const highest = Math.max(...numbers);
  return `${highest} ${lowest}`;
};

module.exports = highAndLow;
