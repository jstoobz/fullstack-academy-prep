const zeroDarkThirty = (num) => (num === 0) ? NaN : +num.toString().split('0').join('');

console.log(zeroDarkThirty(102302));
// console.log(zeroDarkThirty(606.203));
// console.log(zeroDarkThirty(0));