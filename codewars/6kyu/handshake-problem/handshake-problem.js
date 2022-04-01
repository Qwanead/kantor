const factorial = (n) => ((n !== 1) ? n * factorial(n - 1) : 1);
const getMaxHandshakes = (n) => (n < 3
  ? 1 : factorial(n) / (factorial(n - 2) * 2));

const getParticipants = (handshakes) => {
  if (handshakes === 1) {
    return 2;
  }
  let i = 1;
  while (getMaxHandshakes(i) < handshakes) {
    i += 1;
  }
  return i;
};

module.exports = getParticipants;
