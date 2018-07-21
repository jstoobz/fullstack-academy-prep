const myMnemonic = (...words) => words.reduce((acc, el) => acc += el[0], '');
console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'));