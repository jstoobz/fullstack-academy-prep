const sumDigits = (num) => {
  const strNum = num.toString();

  if (strNum.length === 1)  return +strNum;

  return +strNum[0] + sumDigits(+strNum.slice(1));
};

console.log(sumDigits(1234));