export const getMatrix = (first, second) => {
  let matrix = [];
  for (let i = 0; i < first.length; i++) {
    let buf = [];
    for (let j = 0; j < first[0].length; j++) {
      buf.push({first: first[i][j], second: second[i][j]})
    }
    matrix.push(buf)
  }
  return matrix;
}


export function myMatrix() {
  const matrixRows = 10;
  const matrixColumns = 10;

  const matrixFirst = Array.from({length: matrixRows},
      () => Array.from({length: matrixColumns},
          () => Math.floor(Math.random() * 100) - 50));

  const matrixSecond = Array.from({length: matrixRows},
      () => Array.from({length: matrixColumns},
          () => Math.floor(Math.random() * 100) - 50));

  return getMatrix(matrixFirst, matrixSecond);
}