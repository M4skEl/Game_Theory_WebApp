import PropTypes from "prop-types";
import styles from "../secondLabPage.module.css";


export const InputFunction = (props) => {
  InputFunction.propTypes = {
    coefficients: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired
  }

  const coefficients = props.coefficients
  const handleInputChange = props.handleInputChange


  return (
      <div className={styles.functionContainer}>
        f =
        <input type='text' onChange={handleInputChange} value={coefficients.a} name='a' placeholder='a'
               className={styles.coefficientInput}/> x^2 +
        <input type='text' onChange={handleInputChange} value={coefficients.b} name='b' placeholder='b'
               className={styles.coefficientInput}/> y^2 +
        <input type='text' onChange={handleInputChange} value={coefficients.c} name='c' placeholder='c'
               className={styles.coefficientInput}/> xy +
        <input type='text' onChange={handleInputChange} value={coefficients.d} name='d' placeholder='d'
               className={styles.coefficientInput}/> x +
        <input type='text' onChange={handleInputChange} value={coefficients.e} name='e' placeholder='e'
               className={styles.coefficientInput}/> y
      </div>
  )
}

export const SubmitFunctionBtn = (props) => {

  SubmitFunctionBtn.propTypes = {
    coefficients: PropTypes.object.isRequired,
    calculate: PropTypes.func.isRequired
  }

  return (
      <button className={styles.submitButton} onClick={() => {props.calculate(props.coefficients)}}>
        Провести вычисления
      </button>
  )
}
