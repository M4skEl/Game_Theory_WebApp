import styles from './secondLabPage.module.css'
import {useState} from 'react'
import {processing} from '../utils/coefProcessing.js'
import {numericalMethod} from '../utils/numerical.js'

import {PreviousBtn, NextBtn, ToLastBtn} from './components/buttons.jsx'
import {OneAnswer, FinalAnswer} from './components/AnswersRender.jsx'
import {Matrix} from './components/Matrix.jsx'
import {InputFunction, SubmitFunctionBtn} from './components/inputFunction.jsx'

export const SecondLabPage = () => {


  const [matrixNumber, setMatrixNumber] = useState(0)

  const initialCoeffs = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  }
  const [coefficients, setCoefficients] = useState(initialCoeffs)

  const [solutions, setSolutions] = useState([])

  const [haveSolution, setHaveSolutions] = useState(false)

  const calculate = (coeffs) => {
    setSolutions(numericalMethod(processing(coeffs)))
    setHaveSolutions(true)
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setCoefficients({
      ...coefficients,
      [name]: value
    });
  };

  return (

      <div className={styles.mainContainer}>

        <div className={styles.inputContainer}>
          <InputFunction coefficients={coefficients} handleInputChange={handleInputChange}/>
          <SubmitFunctionBtn coefficients={coefficients} calculate={calculate}/>
        </div>

        {haveSolution &&
            <>
              <div className={styles.answerContainer}>

                <div className={styles.btnContainer}>
                  <PreviousBtn solutions={solutions} matrixNumber={matrixNumber} setMatrixNumber={setMatrixNumber}/>
                </div>

                <div className={styles.matrixContainer}>
                  <Matrix solutions={solutions} matrixNumber={matrixNumber}/>
                  <div className={styles.oneAnswerContainer}>
                    <OneAnswer solutions={solutions} matrixNumber={matrixNumber}/>
                  </div>
                </div>

                <div className={styles.btnContainer}>
                  <NextBtn solutions={solutions} matrixNumber={matrixNumber} setMatrixNumber={setMatrixNumber}/>
                </div>

                <div className={styles.btnContainer}>
                  <ToLastBtn solutions={solutions} setMatrixNumber={setMatrixNumber}/>
                </div>

              </div>

              <div className={styles.finalAnswerContainer}>
                <FinalAnswer solutions={solutions}/>
              </div>
            </>
        }
      </div>
  )
}