const countToTen = (num) => {
  if (num > 10) return;
  console.log(num);
  countToTen(num + 1);
};

console.log(countToTen(5));