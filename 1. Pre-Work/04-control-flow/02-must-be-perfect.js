let word = 'carrots';
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

let lastWord;

if (word[0] === 'p' && word.length === 7) lastWord = word.toUpperCase();
else lastWord = word;

console.log(lastWord);