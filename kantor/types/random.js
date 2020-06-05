const getRandomFloat = (min, max) => min + Math.random() * (max - min);

const getRandomInteger = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const result = [];

for (let i = 1; i <= 1000000; i += 1) {
  const random = getRandomInteger(1, 3);
  result[random - 1] = result[random - 1] || 0;
  result[random - 1] += 1;
}

console.log(getRandomFloat(1, 3));

console.log(result);
