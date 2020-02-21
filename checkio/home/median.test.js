const findMedian = require('./median');

const TEST_DATA = [
  {arr: [1, 2, 3, 4, 5], result: 3},
  {arr: [3, 1, 2, 5, 3], result: 3},
  {arr: [1, 300, 2, 200, 1], result: 2},
  {arr: [3, 6, 20, 99, 10, 15], result: 12.5},
  {arr: [1], result: 1},
];

describe('находит медиану массива', () => {
  TEST_DATA.forEach((it) => {
    test(`[${it.arr}] => ${it.result}`, () => {
      expect(findMedian(it.arr)).toBe(it.result)
    });
  });
});

describe('для некорректных данных возвращает NaN', () => {
  test('[] => Nan', () => {
    expect(findMedian([])).toBeNaN();
  });

  test('пустая строка => Nan', () => {
    expect(findMedian()).toBeNaN();
  });

  test('321 => Nan', () => {
    expect(findMedian(321)).toBeNaN();
  });
});
