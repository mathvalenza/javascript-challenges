function happy(n) {
  if (n === 1) {
    return true;
  }

  if (n === 4) {
    return false;
  }

  return happy([...(n + '')].reduce((acc, curr) => acc + (+curr) ** 2, 0));
}

module.exports = happy;
