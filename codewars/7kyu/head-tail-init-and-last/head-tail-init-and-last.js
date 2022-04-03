const head = (arr) => arr[0];
const tail = (arr) => arr.slice(1);
const init = (arr) => arr.slice(0, arr.length - 1);
const last = (arr) => arr[arr.length - 1];

module.exports = {
  head, tail, init, last,
};
