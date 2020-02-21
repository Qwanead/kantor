const deleteUniqueElement = require('./non-unique-elements.js');

const TEST_DATA = [
  {arr: [1, 2, 3, 1, 3], result: [1, 3, 1, 3]},
  {arr: [1, 2, 3, 4, 5], result: []},
  {arr: [5, 5, 5, 5, 5], result: [5, 5, 5, 5, 5]},
  {arr: [10, 9, 10, 10, 9, 8], result: [10, 9, 10, 10, 9]},
  {arr: [1], result: []},
];

describe('удаляет из массива уникальные элементы', () => {
  TEST_DATA.forEach((it) => {
    test(`[${it.arr}] => [${it.result}]`, () => {
      expect(deleteUniqueElement(it.arr)).toStrictEqual(it.result)
    });
  });
});
