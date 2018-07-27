const getLongestName = (obj) => {
  return Object.keys(obj).reduce((acc, el) => {
    if (el.length >= acc.length) acc = el;

    if (obj[el]) {
      const subName = getLongestName(obj[el]);
      if (subName.length > acc.length) return acc = subName;
    }

    return acc;
  }, '');
};

let family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};

console.log(getLongestName(family));