const pow = require('./pow');

describe('возводит число в степень n', () =>{

  test('для отрицательных n возвращает NaN', () => {
    expect(pow(2, -1)).toBeNaN();
  })

  test('для дробных n возвращает NaN', () => {
    expect(pow(2, 1.5)).toBeNaN();
  })

  describe('возводит x в степень 3', () => {

    const makeTest = (x) => {
      const expected = x * x * x;
      test(`${x} в степени 3 будет ${expected}`, () => {
        expect(pow(x, 3)).toBe(expected)
      })
    }

    for (let x = 1; x <= 5; x += 1) {
      makeTest(x);
    }

  })

})
