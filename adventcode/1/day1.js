const input = require('./input');

const GOAL = 2020;

for (let a = 0; a < input.length; a += 1) {
  for (let b = a + 1; b < input.length; b += 1) {

    if (input[a] + input[b] === GOAL) {
      console.log(`${input[a]}+${input[b]}=${GOAL}`);
      console.log(`${input[a]}*${input[b]}=${input[a] * input[b]}`);
    }

    for (let c = b + 1; c < input.length; c += 1) {
      if (input[a] + input[b] + input[c] === GOAL) {
        console.log(`${input[a]}+${input[b]}+${input[c]}=${GOAL}`);
        console.log(`${input[a]}*${input[b]}*${input[c]}=${input[a] * input[b] * input[c]}`);
      }
    }
  }
}
