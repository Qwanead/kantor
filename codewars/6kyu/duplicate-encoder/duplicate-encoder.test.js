const duplicateEncode = require('./duplicate-encoder');

describe('Duplicate Encoder', () => {
  const tests = [
    ['din', "((("],
    ['recede', "()()()"],
    ['Success', ")())())"],
    ['(( @', "))(("],
  ];
  for(const [input, expected] of tests) {
    test(`${input} => ${expected}`, () => {
      expect(duplicateEncode(input)).toBe(expected);
    });
  }
});
