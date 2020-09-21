const getMoneyFromInput = (moneyInput) => {
  const pattern = /(\-?\d+)/g;
  return +pattern.exec(moneyInput)[0];
}

function countChocolates(moneyInput, costInput) {
  const money = getMoneyFromInput(moneyInput);
  const cost = getMoneyFromInput(costInput);

  if (money < 0 || cost < 0)
    return 'Invalid Input'
  
  const boughtChocolates = money/cost;

  console.log(money, cost, boughtChocolates);
}

// console.log(countChocolates("4$", "1$")); // 5
// countChocolates("I have 68$", "2$") // 50
console.log(countChocolates("I got -68$ from my mom ", "2$")) // Invalid Input

module.exports = countChocolates;
