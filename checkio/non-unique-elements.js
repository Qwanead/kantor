const deleteUniqueElement = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if ((arr[i] === arr[j]) && (i !== j)) {
        result.push(arr[i]);
        break;
      }
    }
  }

  return result;
};

deleteUniqueElement([1, 2, 3, 4, 5]);

module.exports = deleteUniqueElement;
