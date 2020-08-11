function sumDigProd() {
  const sum = [...arguments].reduce((acc, curr) => acc + curr, 0);

  const prod = [...(sum + '')].reduce((acc, curr) => acc * curr, 1);

  if ((prod + '').length > 1) {
    return sumDigProd(prod);
  } else {
    return prod;
  }
}

module.exports = sumDigProd;
