const countVowels = (str) => {
  if (!str.length) return 0;

  if (str[0].match(/[aeiou]/gi)) return 1 + countVowels(str.slice(1));
  else return countVowels(str.slice(1));
};

console.log(countVowels('Four score and seven years'));