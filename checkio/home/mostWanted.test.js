const findMostWantedLetter = require('./mostWanted');

const TEST_DATA = [
  {
    str: 'Hello World!',
    result: 'l'
  },
  {
    str: 'How do you do?',
    result: 'o'
  },
  {
    str: 'One',
    result: 'e'
  },
  {
    str: 'Oops!',
    result: 'o'
  },
  {
    str: 'AAaooo!!!!',
    result: 'a'
  },
  {
    str: 'abe',
    result: 'a'
  },
];

describe('находит самую частую букву в строке', () => {
  TEST_DATA.forEach((it, index) => {
    test(`Тест №${index + 1}`, () => {
      expect(findMostWantedLetter(it.str)).toBe(it.result);
    });
  });
});
