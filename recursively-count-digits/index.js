function digitsCount(number) {
  return Math.abs(number) < 10
    ? 1
    : 1 + digitsCount(Math.trunc(Math.abs(number) / 10));
}

module.exports = digitsCount;
