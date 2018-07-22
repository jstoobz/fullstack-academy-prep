const onlyOdds = (num) => {
  return num < 1 ? 0 : Array.from([...Array(num)]).map((_, i) => i + 1).reduce((acc, el) => {
    if (el % 2 === 1) return acc + el;
    return acc;
  }, 0);
}

console.log(onlyOdds(10));