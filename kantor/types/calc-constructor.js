const Calculator = function () {
  this.opiration = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = (str) => {
    const arr = str.split(' ');

    if (!arr[2] || Number.isNaN(arr[0]) || Number.isNaN(arr[2])) {
      return NaN;
    }

    return this.opiration[arr[1]](+arr[0], +arr[2]);
  };

  this.addMethod = (operator, cb) => {
    this.opiration[operator] = cb;
  };
};

const calc = new Calculator();

calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);
calc.addMethod('**', (a, b) => a ** b);

console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('3 - 7'));
console.log(calc.calculate('3 * 7'));
console.log(calc.calculate('3 / 7'));
console.log(calc.calculate('3 ** 7'));
console.log(calc.calculate('s3 + 7'));
