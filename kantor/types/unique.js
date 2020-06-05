const unique = (arr) => {
  const result = [];
  arr.forEach((it) => {
    if (!result.includes(it)) {
      result.push(it);
    }
  });
  return result;
};

const strings = ['кришна', 'кришна', 'харе', 'харе',
  'харе', 'харе', 'кришна', 'кришна', ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
