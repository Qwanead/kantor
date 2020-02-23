const sumArray = (arr) => arr.reduce((it, result) => it + result, 0);

const transpose = (arr) => arr[0].map((col, index) => arr.map((row) => row[index]));

const findWeakRow = (arr) => {
  const result = { sum: false, index: 0 };

  arr.forEach((it, index) => {
    const sumCurrentArray = sumArray(it);

    if (!result.sum || (sumCurrentArray < result.sum)) {
      result.sum = sumCurrentArray;
      result.index = index;
    }
  });

  return result.index;
};

const findWeakPoint = (arr) => [findWeakRow(arr), findWeakRow(transpose(arr))];

exports.module = { findWeakPoint, findWeakRow };
