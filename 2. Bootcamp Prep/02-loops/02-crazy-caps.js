const crazyCaps = (string) => {
  return string.split('').map((el, i) => (i % 2 === 1) ? el.toUpperCase() : el.toLowerCase()).join('');
}

console.log(crazyCaps('fullstack is amazing'));