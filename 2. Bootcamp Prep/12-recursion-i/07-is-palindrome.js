const isPalindrome = (str) => {
  if (str.length <= 1) return true;

  if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) return isPalindrome(str.slice(1, -1));
  else return false;
};

console.log(isPalindrome('Kayak'));
console.log(isPalindrome('NEVERODDOREVEN'));
console.log(isPalindrome('Tacocat'));
console.log(isPalindrome('SELFLESS'));