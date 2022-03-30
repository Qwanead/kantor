const explode = require('./digits-explosion');

describe('Example tests', () => {
  const tests = [
    ["312", "333122"],
    ["102269", "12222666666999999999"],
    ["0", ""],
    ["000", ""],
    ["123", "122333"]
  ];
  for(const [input, expected] of tests) {
    test(`${input} => ${expected}`, () => {
      expect(explode(input)).toBe(expected);
    });
  }
});
