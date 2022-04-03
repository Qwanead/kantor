const nthFibo = require('./n-th-fibonacci');

describe('N-th Fibonacci', () => {
  const tests = [
    [1, 0],
    [2, 1],
    [3, 1],
    [4, 2],
  ];
  for(const [input, expected] of tests) {
    test(`${input} => ${expected}`, () => {
      expect(nthFibo(input)).toBe(expected);
    });
  }
});
