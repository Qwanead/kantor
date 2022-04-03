const nthFibo = (el) => {
  const sequence = [0, 1];
  for (let i = 2; i < el; i += 1) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[el - 1];
};

module.exports = nthFibo;
