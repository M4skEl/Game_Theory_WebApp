const isOptimal = (matrix, row, column) => {
  let first = true
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[row].length; j++) {
      if (i === row && j === column) continue;
      if ((matrix[i][j].first > matrix[row][column].first && matrix[i][j].second >= matrix[row][column].second) ||
          (matrix[i][j].first >= matrix[row][column].first && matrix[i][j].second > matrix[row][column].second))
        first = false
    }
  }
  return first
}

export function paretoOptimal(matrix) {
  let optimal = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (isOptimal(matrix, i, j)) optimal.push({row: i, col: j})
    }
  }
  return optimal;
}