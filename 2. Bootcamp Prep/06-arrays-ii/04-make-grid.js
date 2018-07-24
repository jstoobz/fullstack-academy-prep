const makeGrid = (numRows, numColumns) => {
  const grid = [];

  for (let i = 1; i <= numColumns; i++) {
    const row = [];

    for (let j = 1; j <= numRows; j++) {
      row.push(j);
    }

    grid.push(row);
  }

  return grid;
}

console.log(makeGrid(3,4));