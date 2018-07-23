const onlyOne = (a, b, c) => !!a + !!b + !!c === 1;

console.log(onlyOne(false, false, true));
// console.log(onlyOne(0, 1, 2));