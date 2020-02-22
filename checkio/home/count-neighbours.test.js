const { module: { countNeighbours, findNeighbours } } = require('./count-neighbours');

const TEST_DATA = [
  {
    arr: [
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    row: 1,
    col: 2,
    count: 3,
    find: [[0, 1], [0, 2], [0, 3], [1, 1], [1, 3], [2, 1], [2, 2], [2, 3]]
  },
  {
    arr: [
      [1, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    row: 0,
    col: 0,
    count: 1,
    find: [[0, 1], [1, 0], [1, 1]]
  },
  {
    arr: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ],
    row: 0,
    col: 2,
    count: 3,
    find: [[0, 1], [1, 1], [1, 2]]
  },
  {
    arr: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ],
    row: 1,
    col: 1,
    count: 0,
    find: [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]]
  },
];

describe('находит соседей для элемента', () => {
  TEST_DATA.forEach((it, index) => {
    test(`Тест №${index + 1}`, () => {
      expect(findNeighbours(it.arr, it.row, it.col)).toEqual(it.find)
    });
  });
});

describe('находит сумму соседей', () => {
  TEST_DATA.forEach((it, index) => {
    test(`Тест №${index + 1}`, () => {
      expect(countNeighbours(it.arr, it.row, it.col)).toEqual(it.count)
    });
  });
});
