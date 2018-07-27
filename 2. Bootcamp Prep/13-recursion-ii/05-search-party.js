const searchParty = (name, world) => {
  const places = Object.keys(world);

  for (let i = 0; i < places.length; i++) {
    const place = places[i];
    const nextValue = world[place];

    if (nextValue === name) {
      return [place];
    } else if (Array.isArray(nextValue)) {
      const isInArray = nextValue.some(person => person === name);

      if (isInArray) return [place];
    } else if (typeof nextValue === 'object') {
      const inNextLocation = searchParty(name, nextValue);

      if (inNextLocation) return [place].concat(inNextLocation);
    }
  }

  return null;
};

let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};

console.log(searchParty('Francis', world));
console.log(searchParty('Franco', world));