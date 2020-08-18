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

function calculateResist(net, expressionSymbol, startIndex, endIndex) {
  let numbers = [];

  [...net.slice(startIndex, endIndex)].forEach((ch) => {
    if (+ch) numbers.push(ch);
  });

  console.log('numbers: ', numbers);
}

function resist(net) {
  console.log(net);

  [...net].forEach((ch, index) => {
    if (ch === RIGHT_PRANTHESIS || ch === RIGHT_BRAKET) {
      const startIndex = getExpressionStartIndex(net, ch, index);

      const newNet = calculateResist(net, ch, startIndex, index);
    }
  });

  return 0;
}

console.log(resist('(1, [12, 4, (1, [10, (2, 8)])])'));

module.exports = resist;
