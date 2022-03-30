const explode = (str) => [...str]
  .map((char) => char.repeat(Number(char)))
  .join('');

module.exports = explode;
