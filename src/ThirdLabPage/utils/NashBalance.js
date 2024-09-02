const isOptimal = (matrix, row, column) => {
  //Равновесие для первого игрока - проверка по столбцу
  let first = true
  for (let i = 0; i < matrix.length; i++) {
    if (i === row) continue;
    if (matrix[i][column].first >= matrix[row][column].first) first = false
  }
  //Равновесие для второго игрока - проверка по строке
  let second = true;
  for (let i = 0; i < matrix[row].length; i++) {
    if (i === column) continue;
    if (matrix[row][i].second >= matrix[row][column].second) second = false
  }
  return first && second
}

export function getNash(matrix) {
  let optimal = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (isOptimal(matrix, i, j)) optimal.push({row: i, col: j})
    }
  }
  //console.log("in fuction")
  return optimal;
}