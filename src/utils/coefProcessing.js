import {evaluate} from 'mathjs';

export function processing(obj) {
  for (let key in obj) {
    if (!(typeof obj[key] === 'number'))
      obj[key] = parseFloat(evaluate(obj[key]).toFixed(2))
  }
  return obj
}
