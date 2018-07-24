const evenAndOdd = (arr) => {
  const even = [];
  const odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }

  return [even, odd];
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));