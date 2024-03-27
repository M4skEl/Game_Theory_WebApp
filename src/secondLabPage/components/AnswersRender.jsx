import PropTypes from 'prop-types';

export const OneAnswer = (props) => {
  OneAnswer.propTypes = {
    solutions: PropTypes.array.isRequired,
    matrixNumber: PropTypes.any,
    setMatrixNumber: PropTypes.func,
  }

  const solutions = props.solutions
  const matrixNumber = props.matrixNumber

  return (
      <div>
        {solutions.slice(0, 10)[matrixNumber]?.saddle && <h4>ЕСТЬ седловая точка</h4>}
        <h4>
          ВЫБОР ИГРОКА А = {solutions.slice(0, 10)[matrixNumber]?.x},
          ВЫБОР ИГРОКА B = {solutions.slice(0, 10)[matrixNumber]?.y},
          Цена игры = {solutions.slice(0, 10)[matrixNumber]?.price}
        </h4>
      </div>
  )
}


export const FinalAnswer = (props) => {
  FinalAnswer.propTypes = {
    solutions: PropTypes.array.isRequired,
  }

  const solutions = props.solutions

  return (
      <div>
        <h1>Окончательный ответ</h1>
        {solutions[solutions.length - 1]?.saddle && <h2>ЕСТЬ седловая точка</h2>}
        <h2>ВЫБОР ИГРОКА А {solutions[solutions.length - 1]?.x}</h2>
        <h2>ВЫБОР ИГРОКА B {solutions[solutions.length - 1]?.y}</h2>
        <h2>Цена игры {solutions[solutions.length - 1]?.price}</h2>
      </div>
  )
}
