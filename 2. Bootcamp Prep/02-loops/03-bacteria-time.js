const bacteriaTime = (currentNum, targetNum) => {
  if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

  let time = 0;

  while (currentNum < targetNum) {
    time += 20;
    currentNum *= 2;
  }

  return time;
}

console.log(bacteriaTime(1, 8));