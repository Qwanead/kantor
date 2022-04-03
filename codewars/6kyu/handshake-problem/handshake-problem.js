const getParticipants = (handshakes) => {
  let k = 1;
  let i = 0;
  while (i < handshakes) {
    i += k;
    k += 1;
  }

  return k;
};

module.exports = getParticipants;
