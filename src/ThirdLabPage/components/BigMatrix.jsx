import styles from "./BigMatrix.module.css";
import PropTypes from "prop-types";


export const BigMatrix = (props) => {
  BigMatrix.propTypes = {
    solution: PropTypes.array.isRequired,
    pareto: PropTypes.array,
    nash: PropTypes.array,
  }

  const matrix = props.solution
  const paretoOptimals = props.pareto
  const nashBalance = props.nash
  //const setMatrixNumber = props.setMatrixNumber

  return (
      <>
        {
          matrix.map((row, i) => (
              <div key={i} className={styles.rowContainer}>
                {row.map((column, j) => {

                  const element = {row: i, col: j}
                  const isParetoHighlighted = paretoOptimals?.some((el) => el.row === element.row && el.col === element.col)
                  const isNashHighlighted = nashBalance?.some((el) => el.row === element.row && el.col === element.col)


                  let cellClassName = styles.matrixElement;
                  if (isParetoHighlighted) cellClassName = styles.matrixElementPareto
                  if (isNashHighlighted) cellClassName = styles.matrixElementNash
                  if (isParetoHighlighted && isNashHighlighted) {
                    cellClassName = styles.matrixElementBright
                  }


                  //const cellClassName = isHighlighted ? styles.matrixElementBright : styles.matrixElement;
                  return (
                      <div key={j} className={cellClassName}>
                        {matrix[i][j].first.toFixed(2) + ' / ' + matrix[i][j].second.toFixed(2)}
                      </div>)
                })}
              </div>
          ))
        }
      </>
  )
}
