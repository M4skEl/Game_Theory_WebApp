import styles from './ThirdLabPage.module.css'
import {useState, useEffect} from 'react'
import {BigMatrix} from './components/BigMatrix.jsx'

import {myMatrix, getMatrix} from './utils/MatrixGenerate.js'
import {getNash} from './utils/NashBalance.js'
import {paretoOptimal} from './utils/ParetoOptimal.js'
import {doBimatrix} from './utils/LR3.3.js'

export const ThirdLabPage = () => {

  const [haveSolution, setHaveSolution] = useState(false)
  const [bigMatrix, setBigMatrix] = useState([])
  const [paretoOptimals, setParetoOptimals] = useState([])
  const [nashBalance, setNashBalance] = useState([])

  const [seeFamous, setSeeFamous] = useState(false)

  const [cross, setCross] = useState([])
  const [crossPareto, setCrossPareto] = useState([])
  const [crossNash, setCrossNash] = useState([])

  const [fam, setFam] = useState([])
  const [famPareto, setFamPareto] = useState([])
  const [famNash, setFamNash] = useState([])

  const [prisoner, setPrisoner] = useState([])
  const [prisonerPareto, setPrisonerPareto] = useState([])
  const [prisonerNash, setPrisonerNash] = useState([])

  const [bimatrix, setBimatrix] = useState({})
  const [haveBimatrix, setHaveBimatrix] = useState(false)


  useEffect(() => {

  }, [bimatrix])

  return (

      <div className={styles.mainContainer}>
        <h1>Third Lab</h1>

        <button className={styles.Btn} onClick={() => {
          console.log('generated');
          setBigMatrix(myMatrix())
          setHaveSolution(true);
        }}>
          Сгенeрировать решение
        </button>

        <button className={styles.Btn} onClick={() => {
          setNashBalance(getNash(bigMatrix))
          setParetoOptimals(paretoOptimal(bigMatrix))
        }}>
          Показать оптимальные решения
        </button>

        {haveSolution && <div className={styles.bigMatrixContainer}>
          <BigMatrix solution={bigMatrix} pareto={paretoOptimals} nash={nashBalance}/>
        </div>
        }

        <div className={styles.secondPartMatrixContainer}>
          <button className={styles.Btn}
                  onClick={() => {
                    setCross(getMatrix([[1, 0.9], [2, 0]], [[1, 2], [0.8, 0]]))
                    setCrossPareto(paretoOptimal(cross))
                    setCrossNash(getNash(cross))

                    setFam(getMatrix([[4, 0], [0, 1]], [[1, 0], [0, 4]]))
                    setFamPareto(paretoOptimal(fam))
                    setFamNash(getNash(fam))

                    setPrisoner(getMatrix([[-5, 0], [-10, -1]], [[-5, -10], [0, -1]]))
                    setPrisonerPareto(paretoOptimal(prisoner))
                    setPrisonerNash(getNash(prisoner))

                    setTimeout(() => setSeeFamous(true), 200)


                  }}>
            Проверить на известных задачах
          </button>
          {seeFamous && <div className={styles.FamousContainer}>

            <div>Перекресток
              <BigMatrix solution={cross} pareto={crossPareto} nash={crossNash}/></div>
            <div>Семейный спор
              <BigMatrix solution={fam} pareto={famPareto} nash={famNash}/></div>
            <div>Дилемма заключенного
              <BigMatrix solution={prisoner} pareto={prisonerPareto} nash={prisonerNash}/></div>

          </div>}
        </div>

        <div className={styles.thirdPartContainer}>
          <div>
            <button className={styles.Btn} onClick={() => {
              setBimatrix(doBimatrix())
              setHaveBimatrix(true)

            }}>
              Решить биматричную игру
            </button>
          </div>
          {haveBimatrix && <div className={styles.bimatrixContainer}>
            <BigMatrix solution={bimatrix.matrix} nash={getNash(getMatrix([[2, 8], [1, 11]], [[7, 4], [1, 3]]))}/>
            <div>
              <div>Равновесные ситуации X = [ {bimatrix.X[0]}; {bimatrix.X[1]} ]</div>
              <div>Равновесные ситуации Y = [ {bimatrix.Y[0]}; {bimatrix.Y[1]} ]</div>
              <div>Равновесные выигрыши {bimatrix.v1.toFixed(2)} и {bimatrix.v2.toFixed(2)}</div>
            </div>
          </div>
          }
        </div>


      </div>


  )

}

