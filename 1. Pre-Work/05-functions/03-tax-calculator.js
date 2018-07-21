const taxCalculator = (price, state) => {
  if (state === 'NY') return price + (price * .04);
  if (state === 'NJ') return price + (price * .06625);
}

console.log(taxCalculator(100, 'NY'));
console.log(taxCalculator(100, 'NJ'));