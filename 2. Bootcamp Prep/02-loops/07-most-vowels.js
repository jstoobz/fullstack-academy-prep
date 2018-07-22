const mostVowels = (str) => {
  return !str.match(/[aeiou]/gi) ? '' : str.replace(/[^\sa-z]/gi, '').split(' ').reduce((acc, el) => {
    return acc.match(/[aeiou]/gi || '').length >= el.match(/[aeiou]/gi || '').length ? acc : el;
  });
}

console.log(mostVowels('Just because I tried'));