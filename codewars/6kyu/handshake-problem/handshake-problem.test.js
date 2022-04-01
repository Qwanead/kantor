const getParticipants = require('./handshake-problem');

describe('Handshake problem"', () => {
  const tests = [
    [0, 1],
    [1, 2],
    [3, 3],
    [6, 4],
    [7, 5],
  ];
  for(const [input, expected] of tests) {
    test(`${input} => ${expected}`, () => {
      expect(getParticipants(input)).toBe(expected);
    });
  }
});
