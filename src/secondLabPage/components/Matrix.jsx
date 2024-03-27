import styles from "./matrixElement.module.css";
import PropTypes from "prop-types";


export const Matrix = (props) => {
  Matrix.propTypes = {
    solutions: PropTypes.array.isRequired,
    matrixNumber: PropTypes.any,
    //setMatrixNumber: PropTypes.func,
  }

  const solutions = props.solutions
  const matrixNumber = props.matrixNumber
  //const setMatrixNumber = props.setMatrixNumber

  return (
      <>
        {
          solutions.slice(0, 10)[matrixNumber]?.mtr?._data?.map((row, i) => (
              <div key={i} className={styles.rowContainer}>
                {row.map((column, j) => {
                  const isHighlighted = (i == solutions[matrixNumber]?.chooseX) && (j == solutions[matrixNumber]?.chooseY);
                  const cellClassName = isHighlighted ? styles.matrixElementBright : styles.matrixElement;
                  return (
                      <div key={j} className={cellClassName}>
                        {solutions[matrixNumber]?.mtr?._data[i][j].toFixed(2)}
                      </div>)
                })}
              </div>
          ))
        }
      </>
  )
}


