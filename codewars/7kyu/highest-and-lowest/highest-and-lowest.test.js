const highAndLow = require('./highest-and-lowest');

describe('Example tests', () => {
  test(`'8 3 -5 42 -1 0 0 -9 4 7 4 -4' => '42 -9'`, () => {
    expect(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')).toBe('42 -9');
  });
  test(`'1 2 3' => '3 1'`, () => {
    expect(highAndLow('1 2 3')).toBe('3 1');
  });
});
