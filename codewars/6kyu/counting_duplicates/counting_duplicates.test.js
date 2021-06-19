const duplicateCount = require('./counting_duplicates');

describe('определяет самую часто встречающеюся букву', () => {
  test(`'' => 0`, () => {
    expect(duplicateCount('')).toBe(0);
  });

  test(`'abcde' => 0`, () => {
    expect(duplicateCount('abcde')).toBe(0);
  });

  test(`'aabbcde' => 2`, () => {
    expect(duplicateCount('aabbcde')).toBe(2);
  });

  test(`'aabBcde' => 2`, () => {
    expect(duplicateCount('aabBcde')).toBe(2);
  });

  test(`'Indivisibility' => 1`, () => {
    expect(duplicateCount('Indivisibility')).toBe(1);
  });

  test(`'Indivisibilities' => 2`, () => {
    expect(duplicateCount('Indivisibilities')).toBe(2);
  });
});
