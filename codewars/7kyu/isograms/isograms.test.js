const isIsogram = require('./isograms');

describe('Example tests', () => {
  test(`'Dermatoglyphics' => true`, () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
  test(`'isogram' => true`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });
  test(`'aba' => false`, () => {
    expect(isIsogram('aba')).toBe(false);
  });
  test(`'moOse' => false`, () => {
    expect(isIsogram('moOse')).toBe(false);
  });
  test(`'isIsogram' => false`, () => {
    expect(isIsogram('isIsogram')).toBe(false);
  });
  test(`'' => true`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
