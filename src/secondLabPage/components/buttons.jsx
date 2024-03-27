import styles from "../secondLabPage.module.css";
import PropTypes from 'prop-types';

export const PreviousBtn = (props) => {
  PreviousBtn.propTypes = {
    solutions: PropTypes.array.isRequired,
    matrixNumber: PropTypes.any,
    setMatrixNumber: PropTypes.any
  }
  // eslint-disable-next-line react/prop-types
  const solutions = props.solutions
  // eslint-disable-next-line react/prop-types
  const matrixNumber = props.matrixNumber
  // eslint-disable-next-line react/prop-types
  const setMatrixNumber = props.setMatrixNumber

  return (
      <button className={styles.previousBtn}
              onClick={() => {
                const number = (matrixNumber === 0) ? solutions.slice(0, 10).length - 1 : matrixNumber - 1
                setMatrixNumber(number)
              }}>
        Назад
      </button>
  )
}


export const NextBtn = (props) => {
  NextBtn.propTypes = {
    solutions: PropTypes.array.isRequired,
    matrixNumber: PropTypes.any,
    setMatrixNumber: PropTypes.func,
  }

  const solutions = props.solutions
  const matrixNumber = props.matrixNumber
  const setMatrixNumber = props.setMatrixNumber

  return (
      <button className={styles.nextBtn}
              onClick={() => setMatrixNumber((matrixNumber + 1) % solutions.slice(0, 10).length)}>Вперед
      </button>
  )
}

export const ToLastBtn = (props) => {
  ToLastBtn.propTypes = {
    solutions: PropTypes.array.isRequired,
    //matrixNumber: PropTypes.any,
    setMatrixNumber: PropTypes.func,
  }
  const solutions = props.solutions
  //const matrixNumber = props.matrixNumber
  const setMatrixNumber = props.setMatrixNumber
  return (
      <button
          onClick={() => setMatrixNumber(solutions.slice(0, 10).length - 1)}>к последнему
      </button>
  )
}




