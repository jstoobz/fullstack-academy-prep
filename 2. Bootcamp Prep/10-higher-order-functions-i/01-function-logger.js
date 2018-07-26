const functionLogger = (cb, arg) => {
  console.log('function starting');
  const result = cb(arg);
  console.log('function complete');
  return result;
};

function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
console.log(squareOfFour);