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

function getResistsFromExpression(expression) {
  const values = [...expression].slice(1, expression.length - 1).join('');

  return [...values.split(',')].map((value) => +value);
}

function iterateNetwork(net, expressionSymbol, startIndex, endIndex) {
  const subNet = net.slice(startIndex, endIndex + 1);
  let resists = getResistsFromExpression(subNet);

  const newResist = calculateResist(resists, expressionSymbol);

  return net.replace(subNet, newResist);
}

function resist(net) {
  if (!net.includes(RIGHT_BRAKET) && !net.includes(RIGHT_PRANTHESIS)) {
    return Number(net).toPrecision(2);
  }

  let expressionSymbol, startIndex, endIndex;

  [...net].every((ch, index) => {
    if (ch === RIGHT_PRANTHESIS || ch === RIGHT_BRAKET) {
      expressionSymbol = ch;
      startIndex = getExpressionStartIndex(net, ch, index);
      endIndex = index;

      return false;
    }

    return true;
  });

  const newNet = iterateNetwork(net, expressionSymbol, startIndex, endIndex);

  return resist(newNet);
}

console.log(resist('([10, 20], (30, 40))'));

module.exports = resist;
