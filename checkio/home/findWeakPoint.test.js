const { module: { findWeakPoint, findWeakRow } } = require('./findWeakPoint');

const TEST_DATA = [
  {
    arr:
    [
      [7, 2, 7, 2, 8],
      [2, 9, 4, 1, 7],
      [3, 8, 6, 2, 4],
      [2, 5, 2, 9, 1],
      [6, 6, 5, 4, 5]
    ],
    result: [3, 3]
  },
  {
    arr:
    [
      [7, 2, 4, 2, 8],
      [2, 8, 1, 1, 7],
      [3, 8, 6, 2, 4],
      [2, 5, 2, 9, 1],
      [6, 6, 5, 4, 5]
    ],
    result: [1, 2]
  },
  {
    arr:
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ],
    result: [0, 0]
  }
];

describe('поиск слабых строчек в матрице', () => {
  TEST_DATA.forEach((it, index) => {
    test(`Тест №${index + 1}`, () => {
      expect(findWeakRow(it.arr)).toBe(it.result[0]);
    });
  });
});


describe('поиск слабых точек в матрице', () => {
  TEST_DATA.forEach((it, index) => {
    test(`Тест №${index + 1}`, () => {
      expect(findWeakPoint(it.arr)).toEqual(it.result);
    });
  });
});
