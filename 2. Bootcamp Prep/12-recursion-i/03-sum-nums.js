const sumNums = (num) => {
  if (num === 1) return num;
  return num + sumNums(num - 1);
};

console.log(sumNums(3));