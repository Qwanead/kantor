const nthFibo = require('./multiples-of-3-or-5');

describe('N-th Fibonacci', () => {
  const tests = [
    [10, 23],
  ];
  for(const [input, expected] of tests) {
    test(`${input} => ${expected}`, () => {
      expect(nthFibo(input)).toBe(expected);
    });
  }
});
