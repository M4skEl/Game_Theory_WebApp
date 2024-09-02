import styles from "./buttons.module.css";
import PropTypes from 'prop-types';

export const PreviousBtn = (props) => {
  PreviousBtn.propTypes = {
    solutions: PropTypes.array.isRequired,
    matrixNumber: PropTypes.any,
    setMatrixNumber: PropTypes.any
  }

  const solutions = props.solutions
  const matrixNumber = props.matrixNumber
  const setMatrixNumber = props.setMatrixNumber

  return (
      <button className={styles.previousBtn}
              onClick={() => {
                const number = (matrixNumber === 0) ? solutions.slice(0, 10).length - 1 : matrixNumber - 1
                setMatrixNumber(number)
              }}>
        <div className={styles.triangleLeft}>
        </div>
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
              onClick={() => setMatrixNumber((matrixNumber + 1) % solutions.slice(0, 10).length)}>
        <div className={styles.triangleRight}>
        </div>
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
      <button className = {styles.toLastBtn}
          onClick={() => setMatrixNumber(solutions.slice(0, 10).length - 1)}>
        <div className={styles.triangleRightDouble}>
        </div>
        <div className={styles.triangleRightDouble}>
        </div>
      </button>
  )
}




