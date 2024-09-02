import {useState, useEffect} from 'react'

import styles from "./FourthLabPage.module.css"
import {BasicNode} from './components/BasicNode'
import {NodeFive} from './components/NodeFive'
import {NodeFour} from './components/NodeFour'
import {NodeThree} from './components/NodeThree'
import {NodeTwo} from './components/NodeTwo'
import {NodeOne} from './components/NodeOne'
import {NodeRoot} from './components/NodeRoot'
import {recursiveUP} from './utils/lab4.js'

export const FourthLabPage = () => {


  //const array7 = new Array(128).fill({f: 10, s: 3, t: 3})
  const [array6, setArray6] = useState([])
  const [array5, setArray5] = useState([])
  const [array4, setArray4] = useState([])
  const [array3, setArray3] = useState([])
  const [array2, setArray2] = useState([])
  const [array1, setArray1] = useState([])
  const [isCalc, setIsCalc] = useState(false)
  // const array0 = new Array(1).fill({f: 10, s: 3, t: 3})
  const [root, setRoot] = useState([])

  useEffect(() => {
    const calc = recursiveUP()
    setRoot(calc.level0)
    setArray1(calc.level1)
    setArray2(calc.level2)
    setArray3(calc.level3)
    setArray4(calc.level4)
    setArray5(calc.level5)
    setArray6(calc.level6)
  }, [isCalc])


  return (
      <div className={styles.container}>


        <div>
          <button className={styles.Btn} onClick={() => {
            console.log("calc");
            setIsCalc(true)
          }}
          >
            Рассчитать игру
          </button>
        </div>

        {isCalc && <>
          <div className={styles.zeroNodeContainer}>
            <div className={styles.Turn}>1 игрок</div>
            <NodeRoot value={root[0].value} priority={root[0].priority}/>
          </div>


          <div className={styles.Level2Container}>
            <div className={styles.Turn}>2 игрок</div>
            {array1.map((element, index) => {
                  return (
                      <div key={index} className={styles.oneNodeContainer}>
                        <NodeOne value={element.value} priority={element.priority}/>
                      </div>)
                }
            )
            }
          < /div>


          <div className={styles.Level2Container}>
            <div className={styles.Turn}>3 игрок</div>
            {array2.map((element, index) => {
                  return (
                      <div key={index} className={styles.twoNodeContainer}>
                        <NodeTwo value={element.value} priority={element.priority}/>
                      </div>)
                }
            )
            }
          < /div>


          <div className={styles.Level6Container}>
            <div className={styles.Turn}>1 игрок</div>
            {array3.map((element, index) => {
                  return (
                      <div key={index} className={styles.threeNodeContainer}>
                        <NodeThree value={element.value} priority={element.priority}/>
                      </div>)
                }
            )
            }
          < /div>

          <div className={styles.Level6Container}>
            <div className={styles.Turn}>2 игрок</div>
            {array4.map((element, index) => {
                  return (
                      <div key={index} className={styles.fourNodeContainer}>
                        <NodeFour value={element.value} priority={element.priority}/>
                      </div>)
                }
            )
            }
          < /div>


          <div className={styles.Level6Container}>
            <div className={styles.Turn}>3 игрок</div>
            {array5.map((element, index) => {
                  return (
                      <div key={index} className={styles.fiveNodeContainer}>
                        <NodeFive value={element.value} priority={element.priority}/>
                      </div>)
                }
            )
            }
          < /div>


          <div className={styles.Level7Container} id='leafs'>
            {array6.map((element, index) => {

                  return (
                      <div key={index} className={styles.sixNodeContainer}>
                        <BasicNode value={element.value} priority={element.priority}/>
                      </div>)
                }
            )
            }
          < /div>
        </>}


      </div>
  )

}





