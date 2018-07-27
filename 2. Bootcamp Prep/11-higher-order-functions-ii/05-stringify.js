const stringify = (cb) => () => `${cb()}`;

function returnsANumber() {
  return 100;
}

let newFunction = stringify(returnsANumber);
console.log(newFunction());