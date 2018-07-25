const lastFridayNight = (transactions) => {
  return (!Array.isArray(transactions)) ? transactions.amount : transactions.reduce((acc, el) => acc += el.amount, 0);
};

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

console.log(lastFridayNight(transactions));