import {create, all} from 'mathjs'
const config = {}
const math = create(all, config)

function arrayFromColumn(matrix) {
  let arr = [];
  for (let i = 0; i < matrix._size[0]; i++) arr.push(matrix._data[i][0])
  return arr;
}

const getMinimum = (array) => {
  let minimum = array[0];
  let index = 0
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
      index = i
    }
  }
  return {minimum, index}
}
const getMaximum = (array) => {
  let max = array[0];
  let index = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
      index = i
    }
  }
  return {max, index}
}

const checkOnRand = (array) => {
  let element = array[0];
  for (let i = 0; i < array.length; i++)
    if (array[i] !== element) return false
  return true
}


export function brownRobinson(matrix) {
  //______Первая итерация алгоритма______________
  let strategyA = Math.floor(Math.random() * matrix.size()[0])
  let strategyB = Math.floor(Math.random() * matrix.size()[1])

  let winnersA = arrayFromColumn(math.subset(matrix, math.index(math.range(0, matrix.size()[0]), strategyB)))
  let loosersB = matrix._data[strategyA]

  let upPrice = getMaximum(winnersA).max
  let underPrice = getMinimum(loosersB).minimum

  let indexA = getMaximum(winnersA).index
  let indexB = getMinimum(loosersB).index


  let minUpPrice = upPrice
  let maxUnderPrice = underPrice
  let epsilon = minUpPrice - maxUnderPrice

  let valuesA= [strategyA]
  let valuesB= [strategyB]

  let k = 2
  while (epsilon > 0.1) {

    if (checkOnRand(winnersA)) {
      strategyA = Math.floor(Math.random() * matrix.size()[0])
    } else strategyA = indexA
    if (checkOnRand(loosersB)) {
      strategyB = Math.floor(Math.random() * matrix.size()[0])
    } else strategyB = indexB

    winnersA = math.add(winnersA,
        arrayFromColumn(math.subset(matrix, math.index(math.range(0, matrix.size()[0]), strategyB))))
    loosersB = math.add(loosersB, matrix._data[strategyA])

    upPrice = math.round(getMaximum(winnersA).max / k, 3)
    underPrice = math.round(getMinimum(loosersB).minimum / k, 3)

    indexA = getMaximum(winnersA).index
    indexB = getMinimum(loosersB).index

    if (upPrice < minUpPrice) minUpPrice = upPrice
    if (underPrice > maxUnderPrice) maxUnderPrice = underPrice

    epsilon = math.round(minUpPrice - maxUnderPrice, 4);

    valuesA.push(strategyA)
    valuesB.push(strategyB)

    k++
  }

  let strategiesA ={}
  valuesA.forEach(item =>{
    if(strategiesA[item]) strategiesA[item]+=1
    else strategiesA[item] = 1
  })
  for(let key in strategiesA){
    strategiesA[key]= math.round(strategiesA[key]/valuesA.length,2)
  }

  let strategiesB ={}
  valuesB.forEach(item =>{
    if(strategiesB[item]) strategiesB[item]+=1
    else strategiesB[item] = 1
  })
  for(let key in strategiesB){
    strategiesB[key]= math.round(strategiesB[key]/valuesB.length,2)
  }

  return {strategiesA, strategiesB, price: math.round((upPrice+underPrice)/2 ,3) }
}
