const findNeighbours = (arr, row, col) => {
  const result = [];

  for (let i = row - 1; i <= row + 1; i += 1) {
    if (i < arr.length) {
      for (let j = col - 1; j <= col + 1; j += 1) {
        const isСoordinatesValid = (i >= 0)
          && (j >= 0)
          && !((i === row) && (j === col))
          && (j < arr[i].length);

        if (isСoordinatesValid) {
          result.push([i, j]);
        }
      }
    }
  }

  return result;
};

const countNeighbours = (arr, row, col) => findNeighbours(arr, row, col)
  .reduce((result, it) => result + arr[it[0]][it[1]], 0);

exports.module = { countNeighbours, findNeighbours };
