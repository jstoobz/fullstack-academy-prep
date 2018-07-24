const removeColumns = (originalGrid, numColumns) => {
  return originalGrid.map(el => el.slice(0, -numColumns));
}

console.log(removeColumns([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], 2));