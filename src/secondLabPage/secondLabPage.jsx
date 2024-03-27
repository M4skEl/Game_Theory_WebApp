import styles from './secondLabPage.module.css'
import {useState} from 'react'
import {processing} from '../utils/coefProcessing.js'
import {numericalMethod} from '../utils/numerical.js'

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
          <button className={styles.submitButton} onClick={() => {
            console.log(
                processing(coefficients),
                numericalMethod(processing(coefficients))
            )
            setSolutions(numericalMethod(processing(coefficients)))
            setHaveSolutions(true)
          }}>
            Провести вычисления
          </button>
        </div>

        {haveSolution &&
            <>
              <div className={styles.answerContainer}>


                <div className={styles.btnContainer}>
                  <button className={styles.previousBtn}
                          onClick={() => {
                            const number = (matrixNumber === 0) ? solutions.slice(0, 10).length - 1 : matrixNumber - 1
                            setMatrixNumber(number)
                          }}>
                    Назад
                  </button>
                </div>


                <div className={styles.matrixContainer}>
                  <div>
                    {
                      solutions.slice(0, 10)[matrixNumber]?.mtr?._data?.map((row, i) => (
                          <div key={i} className={styles.rowContainer}>
                            {row.map((column, j) => {
                              const isHighlighted = (i == solutions[matrixNumber]?.chooseX) && (j == solutions[matrixNumber]?.chooseY);
                              const cellClassName = isHighlighted ? styles.matrixElementBright : styles.matrixElement;
                              return (
                                  <div key={j} className={cellClassName}>
                                    {solutions[matrixNumber]?.mtr?._data[i][j]}
                                  </div>)
                            })}
                          </div>
                      ))
                    }
                  </div>
                  <div>{
                    <div>
                      {solutions.slice(0, 10)[matrixNumber]?.saddle && <h4>ЕСТЬ седловая точка</h4>}
                      <h4>
                        ВЫБОР ИГРОКА А = {solutions.slice(0, 10)[matrixNumber]?.x},
                        ВЫБОР ИГРОКА B = {solutions.slice(0, 10)[matrixNumber]?.y},
                        Цена игры = {solutions.slice(0, 10)[matrixNumber]?.price}
                      </h4>
                    </div>
                  }
                  </div>
                </div>

                <div className={styles.btnContainer}>
                  <button className={styles.nextBtn}
                          onClick={() => setMatrixNumber((matrixNumber + 1) % solutions.slice(0, 10).length)}>Вперед
                  </button>
                </div>


                <div className={styles.btnContainer}>
                  <button
                      onClick={() => setMatrixNumber(solutions.slice(0, 10).length - 1)}>к последнему
                  </button>
                </div>

              </div>

              <div>{
                <div>
                  <h1>Окончательный ответ</h1>
                  {solutions[solutions.length - 1]?.saddle && <h2>ЕСТЬ седловая точка</h2>}
                  <h2>ВЫБОР ИГРОКА А {solutions[solutions.length - 1]?.x}</h2>
                  <h2>ВЫБОР ИГРОКА B {solutions[solutions.length - 1]?.y}</h2>
                  <h2>Цена игры {solutions[solutions.length - 1]?.price}</h2>
                </div>
              }
              </div>
            </>}

      </div>


  )


}