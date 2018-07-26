const chainReaction = (iv, arr) => {
  arr.forEach((cb) => {
    iv = cb(iv);
  });

  return iv;
};

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive]));
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen]));