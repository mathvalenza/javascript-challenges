const LEFT_BRAKET = '[';
const RIGHT_BRAKET = ']';
const LEFT_PRANTHESIS = '(';
const RIGHT_PRANTHESIS = ')';

function isSerialExpression(expressionSymbol) {
  return (
    expressionSymbol === LEFT_PRANTHESIS ||
    expressionSymbol === RIGHT_PRANTHESIS
  );
}

function isParallelExpression(expressionSymbol) {
  return expressionSymbol === LEFT_BRAKET || expressionSymbol === RIGHT_BRAKET;
}

function getExpressionStartIndex(net, expressionSymbol, endIndex) {
  for (let i = endIndex; i >= 0; i--) {
    if (expressionSymbol === RIGHT_PRANTHESIS && net[i] === LEFT_PRANTHESIS)
      return i;

    if (expressionSymbol === RIGHT_BRAKET && net[i] === LEFT_BRAKET) return i;
  }
}

function calculateResist(resists, expressionSymbol) {
  if (isParallelExpression(expressionSymbol)) {
    const parallelSum = resists.reduce((acc, curr) => acc + 1 / curr, 0);

    return 1 / parallelSum;
  }

  if (isSerialExpression(expressionSymbol)) {
    return resists.reduce((acc, curr) => acc + curr, 0);
  }

  return 0;
}

function iterateNetwork(net, expressionSymbol, startIndex, endIndex) {
  const subNet = net.slice(startIndex, endIndex + 1);
  let resists = [];

  [...subNet].forEach((ch) => {
    if (+ch) resists.push(+ch);
  });

  const newResist = calculateResist(resists, expressionSymbol);

  return net.replace(subNet, newResist);
}

function resist(net) {
  console.log(net);

  [...net].forEach((ch, index) => {
    if (ch === RIGHT_PRANTHESIS || ch === RIGHT_BRAKET) {
      const startIndex = getExpressionStartIndex(net, ch, index);

      const newNet = iterateNetwork(net, ch, startIndex, index);

      console.log('new net: ', newNet);
    }
  });

  return 0;
}

console.log(resist('(1, [12, 4, (1, [10, (2, 8)])])'));

module.exports = resist;
