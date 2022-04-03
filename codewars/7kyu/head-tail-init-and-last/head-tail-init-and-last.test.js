const {head, tail, init, last} = require('./head-tail-init-and-last');

describe('Head, Tail, Init and Last', () => {
  test(`[5,1] => 5`, () => {
    expect(head([5,1])).toStrictEqual(5);
  });
  test(`[1] => []`, () => {
    expect(tail([1])).toStrictEqual([]);
  });
  test(`[1,5,7,9] => [1,5,7]`, () => {
    expect(init([1,5,7,9])).toStrictEqual([1,5,7]);
  });
  test(`[7,2] => 2`, () => {
    expect(last([7,2])).toStrictEqual(2);
  });
});
