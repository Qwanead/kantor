const findMedian = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    const sortedArray = arr.sort((a, b) => a - b);
    const middleArray = Math.ceil(arr.length / 2) - 1;

    if (arr.length % 2 === 0) {
      return ((sortedArray[middleArray] + sortedArray[middleArray + 1]) / 2);
    }

    return sortedArray[middleArray];
  }

  return NaN;
};

module.exports = findMedian;
