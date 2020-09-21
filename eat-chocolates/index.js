const getMoneyFromInput = (moneyInput) => {
  const pattern = /(\d+)/g;
  return +pattern.exec(moneyInput)[0];
}

function countChocolates(moneyInput, costInput) {
  const money = getMoneyFromInput(moneyInput);
  const cost = getMoneyFromInput(costInput);
  
  console.log(money, cost);
}

// console.log(countChocolates("4$", "1$")); // 5
countChocolates("I have 68$", "2$") // 50

module.exports = countChocolates;
