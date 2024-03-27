import {create, all} from 'mathjs'

const config = {}
const math = create(all, config)

const coefficients = {
  a: -3,
  b: 3 / 2,
  c: 18 / 5,
  d: -18 / 50,
  e: -72 / 25,
}

const checkSolution = (x, y, coeffs) => {
  return (x <= -coeffs.e / coeffs.c) && (y >= -coeffs.d / coeffs.c)
}

function solution(coeffs) {
  const y = math.round((-2 * coeffs.e * coeffs.a + coeffs.d * coeffs.c) / (4 * coeffs.a * coeffs.b - math.pow(coeffs.c, 2)), 2)
  const x = math.round(-(coeffs.c * y + coeffs.d) / (2 * coeffs.a), 2)

  if (checkSolution)
    return {x, y}
  return {x: 0, y: 0}
}

console.log(solution(coefficients))
