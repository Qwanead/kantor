const deleteUniqueElement = require('./non-unique-elements.js');

describe ('удаляет из массива уникальные элементы', () => {
  test ('[1, 2, 3, 1, 3] => [1, 3, 1, 3]', () => {
    expect(deleteUniqueElement([1, 2, 3, 1, 3])).toStrictEqual([1, 3, 1, 3]);
  })

  test ('[1, 2, 3, 4, 5] => []', () => {
    expect(deleteUniqueElement([1, 2, 3, 4, 5])).toStrictEqual([]);
  })

  test ('[5, 5, 5, 5, 5] => [5, 5, 5, 5, 5]', () => {
    expect(deleteUniqueElement([5, 5, 5, 5, 5])).toStrictEqual([5, 5, 5, 5, 5]);
  })

  test ('[10, 9, 10, 10, 9, 8] => [10, 9, 10, 10, 9]', () => {
    expect(deleteUniqueElement([10, 9, 10, 10, 9, 8])).toStrictEqual([10, 9, 10, 10, 9]);
  })
})
