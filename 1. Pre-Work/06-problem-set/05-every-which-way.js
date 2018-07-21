const everyWhichWay = (num1, num2, num3) => {
  if (num1 + num2 === num3) return 'sum';
  if (num1 - num2 === num3) return 'difference';
  if (num1 * num2 === num3) return 'product';
  if (num1 / num2 === num3) return 'fraction';
  return null;
}

console.log(everyWhichWay(10, 20, 30));
// console.log(everyWhichWay(50, 20, 30));
// console.log(everyWhichWay(4, 4, 16));
// console.log(everyWhichWay(100, 10, 10));
// console.log(everyWhichWay(1, 1000, 50));