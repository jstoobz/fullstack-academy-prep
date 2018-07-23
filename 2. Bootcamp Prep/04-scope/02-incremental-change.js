let counter = 0;

const incrementalChange = (num) => {
  counter += num;
  return counter;
}

console.log(incrementalChange(2));