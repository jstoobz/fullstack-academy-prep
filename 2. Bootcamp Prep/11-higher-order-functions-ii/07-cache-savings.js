const cacheSavings = (cb) => {
  const cache = {};

  return (arg) => {
    if (cache[arg]) {
      return cache[arg];
    }

    const result = cb(arg);

    cache[arg] = result;

    return result;
  }
};

function adds10(num) {
  let start = Date.now();
  let end = Date.now();

  // pause for 3 seconds, to make the function expensive!
  while (end - start < 3000) {
    end = Date.now();
  }

  return num + 10;
}

let cachedAdds10 = cacheSavings(adds10);

console.log(cachedAdds10(20));
console.log(cachedAdds10(0));
console.log(cachedAdds10(20));