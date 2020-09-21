const getMoneyFromInput = (moneyInput) => {
  const pattern = /(\d+)/g;
  return +pattern.exec(moneyInput)[0];
}

function countChocolates(moneyInput, cost) {
  const money = getMoneyFromInput(moneyInput);
  
  console.log(money);
}

// console.log(countChocolates("4$", "1$")); // 5
countChocolates("I have 68$", "2$") // 50

module.exports = countChocolates;
